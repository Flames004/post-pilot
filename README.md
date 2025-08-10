# 🚀 PostPilot

> AI-powered social media content generation platform built with React and Node.js

## ✨ Features

- 🤖 **AI Content Generation** - Generate creative social media posts using Google Gemini AI
- 🔐 **Secure Authentication** - JWT-based user authentication with persistent sessions
- 📱 **Responsive Design** - Beautiful, modern UI that works on all devices
- 📟 **Landing Page** - Professional welcome page with feature showcase
- 📝 **Post Management** - Create, view, and manage your generated content ideas
- 🛡️ **Protected Routes** - Secure access to dashboard and user features
- 🎨 **Modern UI** - Built with Tailwind CSS for a sleek, professional look
- 📊 **History Tracking** - View and manage previously generated ideas

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Latest React with modern hooks
- **Vite 7.1.0** - Lightning-fast build tool and dev server
- **Tailwind CSS v4.1.11** - Utility-first CSS framework with Vite integration
- **React Router 7.8.0** - Client-side routing and navigation
- **Axios 1.11.0** - HTTP client for API requests
- **React Context** - State management for authentication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Modern web application framework
- **MongoDB** - NoSQL database with Mongoose 8.17.1 ODM
- **JWT** - JSON Web Tokens for secure authentication
- **Google Gemini AI 1.5 Flash** - Latest AI model for content generation
- **bcryptjs 3.0.2** - Secure password hashing
- **cookie-parser** - HTTP cookie parsing middleware
- **CORS** - Cross-origin resource sharing configuration

### Deployment
- **Frontend**: Vercel (Automatic deployments)
- **Backend**: Render (Auto-deploy from GitHub)
- **Database**: MongoDB Atlas (Cloud database)

## 🚀 Live Demo

- **Frontend**: [PostPilot App](https://post-pilot-sable.vercel.app)
- **Backend API**: [API Endpoint](https://post-pilot-backend.onrender.com)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Google Gemini API key

### 1. Clone the repository
```bash
git clone https://github.com/Flames004/post-pilot.git
cd post-pilot
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with your credentials
touch .env  # On Windows: echo. > .env

# Add the following environment variables to .env:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# GEMINI_API_KEY=your_gemini_api_key
# NODE_ENV=development

npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install

# Create .env.local file (optional for local development)
echo "VITE_API_URL=http://localhost:5000/api" > .env.local

npm run dev
```

### 4. Open your browser
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## 🌐 Deployment

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set **Root Directory** to `backend`
3. Add environment variables:
   - `NODE_ENV=production`
   - `MONGO_URI=your_mongodb_atlas_uri`
   - `JWT_SECRET=your_jwt_secret`
   - `GEMINI_API_KEY=your_gemini_api_key`

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set **Root Directory** to `frontend`
3. Set **Framework Preset** to `Vite`
4. Add environment variable:
   - `VITE_API_URL=https://your-backend.onrender.com/api`

## 🔑 Environment Variables

### Backend (.env)
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/postpilot
JWT_SECRET=your-super-secret-jwt-key
GEMINI_API_KEY=your-google-gemini-api-key
```

### Frontend (.env.local)
```env
VITE_API_URL=https://your-backend.onrender.com/api
```

## 📁 Project Structure

```
post-pilot/
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Route handlers (auth, ideas)
│   │   ├── middleware/      # Custom middleware (token verification)
│   │   ├── models/          # MongoDB models (User, Idea)
│   │   ├── routes/          # API routes (auth, ideas)
│   │   ├── utils/           # Utility functions (Gemini AI integration)
│   │   └── app.js           # Express app setup
│   └── package.json
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── IdeaCard.jsx       # Display idea cards
│   │   │   ├── LoadingSpinner.jsx # Loading animation
│   │   │   ├── NavBar.jsx         # Navigation component
│   │   │   └── ProtectedRoute.jsx # Route protection wrapper
│   │   ├── contexts/        # React Context providers
│   │   │   └── AuthContext.jsx    # Authentication state management
│   │   ├── pages/           # Page components
│   │   │   ├── Dashboard.jsx      # Main app dashboard
│   │   │   ├── History.jsx        # Ideas history page
│   │   │   ├── Login.jsx          # User login
│   │   │   ├── Register.jsx       # User registration
│   │   │   └── Welcome.jsx        # Landing page
│   │   ├── utils/           # Utility functions
│   │   │   └── api.js             # Axios configuration
│   │   └── App.jsx          # Main App component with routing
│   ├── package.json
│   └── vercel.json                # Vercel SPA routing configuration
└── README.md                # Project documentation
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Ideas
- `GET /api/ideas` - Get user's ideas (protected)
- `POST /api/ideas` - Create new idea (protected)

## 🎨 Features in Detail

### AI Content Generation
Uses Google Gemini AI 1.5 Flash model to generate creative social media content based on user prompts. The system generates 5 content ideas along with relevant hashtags for each idea, optimized for social media engagement.

### Authentication System
- Secure JWT-based authentication with HTTP-only cookies
- Cross-origin authentication support for separate frontend/backend domains
- Persistent sessions that survive browser refreshes
- Protected routes that require authentication
- Secure password hashing with bcryptjs

### Landing Page
Professional welcome page featuring:
- Hero section with call-to-action
- Feature highlights and benefits
- Clean, modern design with Tailwind CSS
- Responsive layout for all devices

### Dashboard & History
- Intuitive dashboard for creating new content ideas
- History page to view and manage previously generated ideas
- Loading states and error handling
- Responsive card-based layout for idea display

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Deepak Shukla** [@Flames004](https://github.com/Flames004)
