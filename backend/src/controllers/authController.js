import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  const { email, password } = req.body;
  try {
    if (await User.findOne({ email })) return res.status(400).json({ message: "User exists" });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    res.status(201).json({ message: "Registered" });
  } catch (e) { res.status(500).json({ message: e.message }); }
}

export async function login(req, res) {
  console.log("Login attempt with:", req.body);
  const { email, password } = req.body;
  try {
    console.log("Looking for user with email:", email);
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log("User found, checking password");
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      console.log("Password mismatch");
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log("Login successful, creating token");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // 'none' for cross-origin in production
      secure: process.env.NODE_ENV === "production"
    });
    console.log("Login complete");
    res.json({ message: "Logged in" });
  } catch (e) { 
    console.error("Login error:", e);
    res.status(500).json({ message: e.message }); 
  }
}

export function logout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production"
  });
  res.json({ message: "Logged out" });
}

export async function getMe(req, res) {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user: { id: user._id, email: user.email } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
