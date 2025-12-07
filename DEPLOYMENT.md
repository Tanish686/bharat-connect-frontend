# 🚀 BHARAT CONNECT - Complete Deployment Guide

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Railway account (free) OR Render account
- Supabase account (free)

---

## 🗄️ STEP 1: Set Up Supabase Database

### 1.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in:
   - **Name**: bharat-connect
   - **Database Password**: (save this!)
   - **Region**: Southeast Asia (Singapore) - closest to India
4. Click "Create new project"

### 1.2 Create Database Tables

Go to SQL Editor and run:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Health records table
CREATE TABLE health_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  record_type VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  file_url TEXT,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Documents table
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  file_type VARCHAR(50) NOT NULL,
  file_url TEXT NOT NULL,
  file_size BIGINT,
  category VARCHAR(100),
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  instructor VARCHAR(255),
  duration_hours INTEGER,
  language VARCHAR(50),
  level VARCHAR(50),
  price DECIMAL(10,2) DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  thumbnail_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  enrolled_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- Inventory table
CREATE TABLE inventory (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_name VARCHAR(255) NOT NULL,
  sku VARCHAR(100),
  quantity INTEGER DEFAULT 0,
  unit_price DECIMAL(10,2),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Invoices table
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  invoice_number VARCHAR(100) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255),
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  items JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_health_records_user ON health_records(user_id);
CREATE INDEX idx_documents_user ON documents(user_id);
CREATE INDEX idx_enrollments_user ON enrollments(user_id);
CREATE INDEX idx_inventory_user ON inventory(user_id);
CREATE INDEX idx_invoices_user ON invoices(user_id);
```

### 1.3 Get Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy:
   - **Project URL** (SUPABASE_URL)
   - **anon public** key (SUPABASE_ANON_KEY)
   - **service_role** key (SUPABASE_SERVICE_KEY)

---

## 🔧 STEP 2: Deploy Backend to Railway

### 2.1 Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub

### 2.2 Deploy Backend

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose `Tanish686/bharat-connect-backend`
4. Railway will auto-detect Node.js

### 2.3 Add Environment Variables

In Railway dashboard, go to **Variables** and add:

```
PORT=5000
NODE_ENV=production

SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_KEY=your_supabase_service_key_here

JWT_SECRET=your_random_secret_key_here_make_it_long_and_secure
JWT_EXPIRES_IN=7d

FRONTEND_URL=https://bharat-connect.vercel.app
```

**Generate JWT Secret:**
```bash
# Run this in terminal
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 2.4 Get Backend URL

After deployment, Railway will give you a URL like:
`https://bharat-connect-backend-production.up.railway.app`

**Save this URL!** You'll need it for frontend.

---

## 🎨 STEP 3: Deploy Frontend to Vercel

### 3.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### 3.2 Import Project

1. Click "Add New..." → "Project"
2. Import `Tanish686/bharat-connect-frontend`
3. Framework Preset: **Vite**
4. Root Directory: `./`

### 3.3 Add Environment Variables

Before deploying, add these environment variables:

```
VITE_API_URL=https://your-railway-backend-url.up.railway.app
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3.4 Deploy

1. Click "Deploy"
2. Wait 2-3 minutes
3. Your app will be live at: `https://bharat-connect.vercel.app`

---

## ✅ STEP 4: Verify Deployment

### 4.1 Test Backend

Visit: `https://your-railway-url.up.railway.app`

You should see:
```json
{
  "success": true,
  "message": "BHARAT CONNECT API is running",
  "version": "1.0.0"
}
```

### 4.2 Test Frontend

1. Visit your Vercel URL
2. You should see the landing page
3. Click "Get Started"
4. Try to register a new account
5. If successful, you're all set! 🎉

---

## 🔄 STEP 5: Update Frontend URL in Backend

After frontend is deployed:

1. Go to Railway dashboard
2. Update `FRONTEND_URL` variable to your Vercel URL
3. Redeploy backend

---

## 🎯 Quick Deployment Checklist

- [ ] Supabase project created
- [ ] Database tables created
- [ ] Supabase credentials copied
- [ ] Backend deployed to Railway
- [ ] Backend environment variables set
- [ ] Backend URL obtained
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variables set
- [ ] Frontend URL obtained
- [ ] Backend FRONTEND_URL updated
- [ ] Registration tested
- [ ] Login tested

---

## 🚨 Troubleshooting

### Backend not starting?
- Check Railway logs
- Verify all environment variables are set
- Ensure Supabase credentials are correct

### Frontend can't connect to backend?
- Check VITE_API_URL is correct
- Verify CORS is enabled in backend
- Check browser console for errors

### Database errors?
- Verify tables are created in Supabase
- Check Supabase service key is correct
- Review SQL Editor for errors

---

## 📊 Post-Deployment

### Monitor Your App

**Railway:**
- View logs in real-time
- Monitor CPU/Memory usage
- Set up alerts

**Vercel:**
- View deployment logs
- Monitor performance
- Set up custom domain

**Supabase:**
- Monitor database queries
- Check storage usage
- Review API logs

---

## 🎉 Congratulations!

Your BHARAT CONNECT super app is now live!

**Frontend:** https://bharat-connect.vercel.app
**Backend:** https://your-railway-url.up.railway.app

---

## 📞 Need Help?

- Check GitHub Issues
- Review documentation
- Contact support

Made with ❤️ in India 🇮🇳