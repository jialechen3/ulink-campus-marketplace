# 🎓 ULink: The Campus Marketplace

ULink is a modern, student-exclusive marketplace designed to simplify buying, selling, and trading within college campuses. From textbooks to dorm furniture, ULink connects students in a trusted, localized environment.

## 🚀 Key Features

-   **Campus-Specific Hubs**: Seamlessly select your college to see listings relevant to your campus.
-   **Student Profiles**: Manage your listings, followers, and joined date in a personalized profile view.
-   **Real-time Interaction**: Integrated messaging system to chat with sellers directly.
-   **Intuitive Listing Creation**: Upload items with images, pricing, and category tags in seconds.
-   **Secure Authentication**: Secure sign-up and login powered by Supabase.

## 🛠️ Tech Stack

### Frontend
-   **React + TypeScript**: For a robust and type-safe UI.
-   **Vite**: For lightning-fast development and build cycles.
-   **Vanilla CSS**: Custom-crafted, premium styles for a unique aesthetic.

### Backend
-   **FastAPI**: A high-performance Python framework for our API layer.
-   **Supabase**: PostgreSQL database + Authentication services.

## ⚙️ Local Setup

### Prerequisites
-   [Node.js](https://nodejs.org/) (v16+)
-   [Python 3.9+](https://www.python.org/)

### 1. Clone the repository
```bash
git clone https://github.com/jialechen3/ulink-campus-marketplace.git
cd campus-marketplace
```

### 2. Frontend Setup
```bash
# Install dependencies
npm install

# Create environment file
touch .env.local
```

### 3. Backend Setup
```bash
# Navigate to backend
cd backend

# Install dependencies
pip install -r requirements.txt

# Create environment file
touch .env
```
Add your Supabase credentials to `backend/.env`:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```

### 4. Run the application
**Start Backend:**
```bash
cd backend
uvicorn main:app --reload
```

**Start Frontend:**
```bash
# In the root directory
npm run dev
```

## 🌍 Deployment

### Frontend (Vercel)
The frontend is optimized for Vercel. Ensure you add the `VITE_API_URL` environment variable pointing to your deployed backend.

### Backend (Render)
The repository includes a `render.yaml` for one-click deployment via Render Blueprints.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
