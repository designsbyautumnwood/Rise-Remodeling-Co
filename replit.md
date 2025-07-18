# Rise Remodeling Co. Website

## Overview

This is a modern, mobile-first website for Rise Remodeling Co., a Rock Hill, South Carolina-based remodeling contractor. The application is built as a single-page application (SPA) using React with TypeScript, featuring a lead generation contact form and SEO-optimized content structure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **Build Tool**: Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod for schema validation and type safety
- **Session Management**: In-memory storage with planned PostgreSQL integration

## Key Components

### Frontend Components
- **Header**: Sticky navigation with mobile hamburger menu
- **Hero**: Main landing section with call-to-action buttons
- **Services**: Showcases kitchen, bathroom, door, window, and trim services
- **About**: Company information with statistics and credentials
- **Process**: Four-step process explanation
- **Portfolio**: Project showcase with local examples
- **Testimonials**: Customer reviews and ratings
- **FAQ**: Collapsible frequently asked questions
- **Contact**: Lead generation form with validation
- **Footer**: Company information and additional links

### Backend Components
- **Contact API**: Handles form submissions with validation and email notifications
- **Email Service**: Nodemailer-based Gmail integration for automatic email notifications
- **Storage Layer**: Abstracted storage interface supporting in-memory and database storage
- **Route Management**: Express.js routes for API endpoints
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **User Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact form data is validated client-side using Zod schemas
3. **API Request**: Form data is sent to Express.js backend via REST API
4. **Server Validation**: Backend validates data using shared Zod schemas
5. **Data Storage**: Contact information is stored (currently in-memory, designed for database)
6. **Email Notification**: Automated email sent to RiseRemodelingCompany@gmail.com with form details
7. **Response**: Success/error responses are sent back to the frontend
8. **User Feedback**: Toast notifications inform users of submission status

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack Query for server state
- **Form Validation**: React Hook Form with Zod resolver
- **Styling**: TailwindCSS with custom design tokens
- **Icons**: Lucide React icons

### Backend Dependencies
- **Database**: Neon PostgreSQL (serverless)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Email Service**: Nodemailer with Gmail SMTP integration
- **Validation**: Zod for runtime type checking

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Database Management**: Drizzle Kit for migrations
- **Development Server**: TSX for TypeScript execution

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles Node.js server to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles database schema updates

### Environment Configuration
- **Development**: Uses tsx for hot reloading with Vite dev server
- **Production**: Serves built static files from Express.js server
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Key Features
- **Mobile-First Design**: Responsive layout optimized for mobile devices
- **SEO Optimization**: Structured data, meta tags, and semantic HTML
- **Lead Generation**: Contact form with comprehensive validation
- **Performance**: Vite-powered build system with optimized assets
- **Type Safety**: End-to-end TypeScript with shared schemas

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers with Node.js support.