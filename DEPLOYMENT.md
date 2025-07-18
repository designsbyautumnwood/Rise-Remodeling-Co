# Render Deployment Guide

## Steps to Deploy on Render

### 1. Push to GitHub
Make sure your code is pushed to a GitHub repository.

### 2. Create Web Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Choose the repository for this project

### 3. Configure Build Settings
- **Environment**: Node
- **Build Command**: `npm install && ./node_modules/.bin/vite build && ./node_modules/.bin/esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`
- **Start Command**: `npm start`
- **Node Version**: 18+ (auto-detected)

**Important:** Make sure to update the Build Command in your Render dashboard to use the command above, not `npm run build`.

### 4. Set Environment Variables
Add these environment variables in Render's dashboard:

**Required:**
- `NODE_ENV` = `production`
- `GMAIL_USER` = Your Gmail email address
- `GMAIL_APP_PASSWORD` = Your Gmail app password

**Optional (for database):**
- `DATABASE_URL` = PostgreSQL connection string (if using database)

### 5. Deploy
Click "Create Web Service" and Render will:
1. Build your frontend with Vite
2. Bundle your backend with ESBuild
3. Start your Express server
4. Provide you with a live URL

## Project Structure
```
├── client/          # React frontend (builds to dist/public)
├── server/          # Express backend (bundles to dist/index.js)
├── shared/          # Shared schemas and types
├── package.json     # Build scripts already configured
└── dist/            # Production build output (auto-generated)
```

## Build Process
1. `vite build` - Builds React app to `dist/public`
2. `esbuild` - Bundles Node.js server to `dist/index.js`
3. `node dist/index.js` - Starts production server

## Important Notes
- The server serves both API routes and static files
- Contact form emails will be sent via Gmail SMTP
- Currently uses in-memory storage (data resets on restarts)
- Mobile-optimized and fully responsive
- No database setup required for basic functionality

## Troubleshooting
- If build fails, check Node.js version compatibility
- If emails don't send, verify Gmail credentials
- If assets don't load, check build output in `dist/public`