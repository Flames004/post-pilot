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
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax", // change to 'none' with secure:true in prod
      secure: process.env.NODE_ENV === "production"
    });
    res.json({ message: "Logged in" });
  } catch (e) { res.status(500).json({ message: e.message }); }
}

export function logout(req, res) {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
}
