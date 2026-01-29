# Me-API Playground

A simple backend-focused full-stack application that stores my personal profile in a database and exposes it via REST APIs, along with a minimal React frontend to query and view the data.

---

## 🔗 Live URLs

- **Backend API:** https://me-api-playground-b1md.onrender.com
- **Frontend:** https://me-api-playground-omega.vercel.app
- **GitHub Repository:** https://github.com/rohit6709/Me-API-Playground
- **Resume:** https://drive.google.com/file/d/12CwUcHJEP4A7RlNXpj07sgmFuQ15e0Au/view?usp=drive_link

---

## 🏗️ Architecture Overview

```
┌─────────────┐
│   React     │
│  Frontend   │
│   (Vite)    │
└──────┬──────┘
       │ HTTP/REST
       ▼
┌──────────────────┐
│  Node.js +       │
│  Express.js      │
│  (REST API)      │
└──────┬───────────┘
       │ Mongoose
       ▼
┌──────────────────┐
│    MongoDB       │
│   (Database)     │
└──────────────────┘
```

**Technology Stack:**
- **Frontend:** React 18, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Hosting:** Render (Backend), Vercel (Frontend)

---

## ✨ Features

### Backend APIs
- ✅ **Profile CRUD** - Create, read, and update profile information
- ✅ **Project Filtering** - Find projects by specific skills
- ✅ **Skill Search** - Retrieve top skills and search functionality
- ✅ **Health Checks** - Monitor API status
- ✅ **CORS Enabled** - Secure cross-origin requests

### Frontend
- ✅ **Profile Display** - View personal information and links
- ✅ **Project Listing** - Browse all projects with descriptions
- ✅ **Skill-based Filtering** - Search projects by technology
- ✅ **Responsive Design** - Works on desktop and mobile
- ✅ **Error Handling** - User-friendly error messages

---

## 📡 API Endpoints

### Health Check
```bash
GET /health
```
Response: `{ "status": "OK" }`

### Profile Management
```bash
# Get profile
GET /profile

# Create profile
POST /profile
Content-Type: application/json

# Update profile
PUT /profile
Content-Type: application/json
```

### Projects & Skills
```bash
# Get projects by skill
GET /project?skill=react

# Get top skills
GET /skill

# Search across data
GET /search?query=nodejs
```

## 🗄️ Database Schema

**Profile Collection:**
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "education": "string",
  "skills": ["string"],
  "projects": [
    {
      "title": "string",
      "description": "string",
      "skill": ["string"],
      "links": ["string"]
    }
  ],
  "work": ["string"],
  "links": {
    "github": "string",
    "linkedin": "string",
    "portfolio": "string"
  },
  "__v": "number"
}
```

Full schema documentation: [backend/schema/schema.md](backend/schema/schema.md)

## ⚙️ Local Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### 1️⃣ Clone Repository
```bash
git clone https://github.com/rohit6709/Me-API-Playground.git
cd Me-API-Playground
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "PORT=5000
MONGODB_URI=mongodb://localhost:27017/me-api
NODE_ENV=development" > .env

# Seed the database
npm run seed

# Start development server
npm run dev
```

Backend runs on: `http://localhost:5000`

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file
echo "VITE_BASE_URL=http://localhost:5000" > .env

# Start development server
npm run dev
```

Frontend runs on: `http://localhost:5173`

## 🚀 Production Setup

### Backend Deployment (Render)
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-atlas-uri>
   NODE_ENV=production
   ```
4. Deploy with `npm run dev` or `npm start`

### Frontend Deployment (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variable:
   ```
   VITE_BASE_URL=<your-backend-deployment-url>
   ```
   Example: `https://me-api-playground-b1md.onrender.com`
4. Deploy automatically

---

## 🧪 Sample API Requests

### Using cURL

**Get Health Status**
```bash
curl http://localhost:5000/health
```

**Get User Profile**
```bash
curl http://localhost:5000/profile
```

**Filter Projects by Skill**
```bash
curl "http://localhost:5000/project?skill=React"
curl "http://localhost:5000/project?skill=Node.js"
```

**Get Top Skills**
```bash
curl http://localhost:5000/skill
```

**Search Data**
```bash
curl "http://localhost:5000/search?query=backend"
```

### Using Postman

**Postman Collection (JSON)**
```json
{
  "info": {
    "name": "Me-API Playground",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/health"
      }
    },
    {
      "name": "Get Profile",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/profile"
      }
    },
    {
      "name": "Filter by Skill",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/project?skill=React"
      }
    },
    {
      "name": "Search",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/search?query=nodejs"
      }
    },
    {
      "name": "Create Profile",
      "request": {
        "method": "POST",
        "url": "http://localhost:5000/profile",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"name\": \"John Doe\", \"email\": \"john@example.com\", \"skills\": [\"React\", \"Node.js\"], \"projects\": [], \"work\": [], \"education\": \"B.Tech\", \"links\": {\"github\": \"\", \"linkedin\": \"\", \"portfolio\": \"\"}}"
        }
      }
    }
  ]
}
```

## ⚠️ Known Limitations

1. **Single Profile System** - Designed for one user's data only
2. **No Authentication** - Write APIs (POST/PUT) are not protected
3. **No Pagination** - All data returned at once (small dataset)
4. **No Rate Limiting** - Unlimited API requests
5. **Basic Search** - Simple text matching, not full-text search
6. **Minimal Frontend** - Focused on API consumption, not UI polish
7. **No Input Validation** - Frontend doesn't validate before sending to API
8. **CORS Permissive** - Allows requests from any origin in production

---

## 📝 Project Structure

```
me-api-playground/
├── backend/
│   ├── src/
│   │   ├── app.js              # Express app setup
│   │   ├── server.js           # Server entry point
│   │   ├── config/             # Configuration files
│   │   ├── controllers/        # Business logic
│   │   ├── routes/             # API routes
│   │   ├── models/             # MongoDB schemas
│   │   └── seed/               # Database seeding
│   ├── schema/                 # Schema documentation
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── services/           # API client
│   │   ├── App.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├── .env                    # Environment variables
│   └── package.json
└── README.md
```

---

## 🔐 Security Notes

- CORS is configured for specific origins (see `backend/src/config/cors.js`)
- Environment variables should never be committed
- Use `.env` files for sensitive data
- Consider adding authentication for production use
- Implement rate limiting for public APIs

---

## 📌 Complete Checklist

- ✅ Backend REST APIs (CRUD)
- ✅ MongoDB with Mongoose
- ✅ Query filtering and search
- ✅ Health check endpoint
- ✅ React frontend
- ✅ Environment configuration
- ✅ Database seeding
- ✅ Error handling
- ✅ CORS setup
- ✅ Deployed application
- ✅ Complete documentation

---

## 👤 Author

**Rohit Dogra**

- 📧 Email: [dograrohit954@gmail.com](mailto:dograrohit954@gmail.com)
- 🐙 GitHub: [github.com/rohit6709](https://github.com/rohit6709)
- 💼 LinkedIn: [linkedin.com/in/rohit-dogra2004](https://www.linkedin.com/in/rohit-dogra2004/)
- 🌐 Portfolio: [rohitdogra-portfolio.vercel.app](https://rohitdogra-portfolio.vercel.app/)

---

## 📄 License

This project is open source and available under the MIT License.

---

**Last Updated:** January 2026