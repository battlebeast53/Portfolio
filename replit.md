# Harshit Pandhare - Developer Portfolio

## Overview

This is a professional portfolio website for Harshit Pandhare, a Full Stack Web Engineer and third-year AI & Data Science student. The application showcases technical skills, projects, competitive programming achievements, and provides a contact form for professional inquiries. Built with a modern tech stack featuring React, Express, and a focus on clean, developer-oriented design inspired by Linear and GitHub's aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (instead of React Router)
- Single-page application (SPA) architecture with dynamic section navigation

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture follows the "New York" style variant
- Custom theme system supporting dark/light modes via Context API
- Design system based on technical aesthetic (Linear, GitHub, Vercel inspiration)

**State Management**
- **React Context** for theme management (ThemeProvider)
- **TanStack Query (React Query)** for server state management and API data fetching
- Local component state with React hooks

**Styling Approach**
- CSS variables for theming (HSL color space)
- Tailwind CSS with custom configuration for design system
- Typography: Inter for UI, JetBrains Mono/Fira Code for code snippets
- Responsive design with mobile-first approach
- Custom utility classes for elevation effects (`hover-elevate`, `active-elevate-2`)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for type safety
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- Development mode integrates Vite middleware for HMR
- Production mode serves static build files

**API Design**
- RESTful API endpoints under `/api` prefix
- Contact form submission endpoint: `POST /api/contact`
- Contact messages retrieval: `GET /api/contact/messages`
- JSON request/response format with Zod validation

**Development vs Production**
- **Development**: Vite dev server integration with SSR capabilities for index.html
- **Production**: Static file serving from `dist/public` directory
- Environment-specific configuration via `NODE_ENV`

### Data Storage

**Current Implementation**
- **In-memory storage** via `MemStorage` class for contact messages
- No persistent database in current setup
- Data structure uses Map for fast lookups by UUID

**Database Schema Design** (Prepared for future migration)
- **Drizzle ORM** configured for PostgreSQL
- Schema defined in `shared/schema.ts`:
  - `contact_messages` table with id, name, email, message, createdAt
  - UUID primary keys via `gen_random_uuid()`
  - Zod integration for runtime validation via `drizzle-zod`

**Migration Strategy**
- Drizzle Kit configured to use PostgreSQL dialect
- Migration files output to `./migrations` directory
- Ready for Neon Database or other PostgreSQL providers
- Schema validation ensures type safety between DB and application

### External Dependencies

**UI Component Libraries**
- **@radix-ui**: Headless UI primitives for accessibility (20+ components)
- **lucide-react**: Icon library for consistent iconography
- **react-syntax-highlighter**: Code syntax highlighting for project showcase
- **cmdk**: Command palette component (if needed)

**Database & ORM**
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver (prepared)
- **drizzle-zod**: Schema validation integration

**Development Tools**
- **@replit/vite-plugin-***: Replit-specific development plugins
  - Runtime error modal overlay
  - Cartographer for code navigation
  - Development banner
- **tsx**: TypeScript execution for development server
- **esbuild**: Bundler for production server build

**Form & Validation**
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod integration for form validation
- **zod**: Schema validation for API requests and database models

**API & Data Fetching**
- **@tanstack/react-query**: Async state management for API calls
- Custom `apiRequest` wrapper for fetch with error handling
- Credential-based requests with automatic 401 handling

**Styling & Theming**
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **clsx** + **tailwind-merge**: Conditional className composition

**Fonts** (via Google Fonts CDN)
- Inter, DM Sans, Fira Code, Geist Mono, Poppins, Architects Daughter

**Asset Management**
- Profile images and project mockups stored in `attached_assets/generated_images/`
- Static assets resolved via Vite's `@assets` alias