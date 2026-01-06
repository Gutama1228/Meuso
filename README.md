# Meuso# Meuso - Multi-dimensional Social Platform

A revolutionary social platform enabling authentic human connections through multi-dimensional profiles and context-aware sharing.

## 🎯 Current Status: Checkpoint #1 Complete ✅

### Project Setup Complete
- ✅ Project structure created
- ✅ Backend (Node.js + Express) configured
- ✅ Frontend (React + Vite) initialized
- ✅ PostgreSQL database schema defined
- ✅ Development environment ready

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL 14+
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd meuso
```

2. **Install root dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
```

4. **Install frontend dependencies**
```bash
cd ../frontend
npm install
cd ..
```

5. **Set up PostgreSQL database**
```bash
# Create database
createdb meuso_db

# Run schema
psql meuso_db < backend/database/schema.sql
```

6. **Configure environment variables**
```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials
```

7. **Start development servers**
```bash
# From root directory
npm run dev
```

This will start:
- Backend API: http://localhost:5000
- Frontend: http://localhost:5173

---

## 📁 Project Structure

```
meuso/
├── backend/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── database/
│   │   └── schema.sql            # PostgreSQL schema
│   ├── routes/                   # API routes (to be added)
│   ├── controllers/              # Route controllers (to be added)
│   ├── models/                   # Data models (to be added)
│   ├── middleware/               # Custom middleware (to be added)
│   ├── utils/                    # Utility functions (to be added)
│   ├── .env.example             # Environment template
│   ├── server.js                # Express server
│   └── package.json             # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/          # React components (to be added)
│   │   ├── pages/               # Page components (to be added)
│   │   ├── contexts/            # React contexts (to be added)
│   │   ├── services/            # API services (to be added)
│   │   ├── utils/               # Utility functions (to be added)
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Global styles
│   ├── public/                  # Static assets
│   ├── index.html               # HTML template
│   ├── vite.config.js           # Vite configuration
│   └── package.json             # Frontend dependencies
├── .gitignore
├── package.json                  # Root package.json
└── README.md
```

---

## 🛠 Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL 14+
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: CSS (custom)

---

## 📊 Database Schema

### Core Tables
- **users** - User authentication and account info
- **profiles** - Multi-dimensional user profiles
- **circles** - Context-based groupings
- **profile_circles** - Profile-to-circle relationships
- **posts** - User-generated content
- **post_visibility** - Circle-based post visibility
- **connections** - Profile connections/relationships
- **reactions** - Post reactions
- **comments** - Post comments

---

## 🔒 Core Features (Planned)

### Phase 1: Foundation
- [x] Project setup
- [ ] User authentication (Sign up, Login, JWT)
- [ ] Multi-dimensional profiles
- [ ] Circle management

### Phase 2: Social Features
- [ ] Post creation with circle targeting
- [ ] Connection management
- [ ] Reactions and comments
- [ ] Profile switching

### Phase 3: Advanced Features
- [ ] Real-time notifications
- [ ] Search functionality
- [ ] Media uploads
- [ ] Privacy controls

---

## 🧪 Development Commands

```bash
# Run both servers concurrently
npm run dev

# Run backend only
npm run server:dev

# Run frontend only
npm run client:dev

# Build frontend for production
npm run build

# Run tests
npm test
```

---

## 🎯 Next Steps: Checkpoint #2

**User Authentication Implementation**
- User registration endpoint
- Login endpoint with JWT
- Password hashing with bcryptjs
- Protected routes middleware
- Frontend login/signup forms
- Auth context and routing

---

## 📝 Environment Variables

Required in `backend/.env`:
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=meuso_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:5173
```

---

## 🤝 Contributing

This is a guided development project. Follow the checkpoint system for structured progress.

---

## 📄 License

ISC

---

## 🎨 Design Philosophy

Meuso enables users to express different facets of their identity through:
- **Multi-dimensional profiles**: Professional, personal, creative, wellness
- **Contextual circles**: Share selectively with the right audience
- **Authentic connections**: Foster genuine relationships across life dimensions
- **Privacy-first**: User controls what they share and with whom

---

**Status**: Checkpoint #1 Complete ✅  
**Next**: Checkpoint #2 - User Authentication  
**Progress**: 10% → 20%
