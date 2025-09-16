# Flink Company Website

## Overview

Flink is a professional web development company website built as a full-stack application showcasing the company's expertise in web development, full-stack solutions, SAP BTP cloud services, and AI-powered development tools. The site features a modern, clean design inspired by tech companies like Linear, Vercel, and Stripe, with sections for hero introduction, services showcase, company information, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom design system featuring dark/light mode support and professional color palette
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for robust form processing

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework for the REST API server
- **Language**: TypeScript throughout the full stack for consistency
- **API Design**: RESTful endpoints with proper error handling and request validation
- **Development Setup**: Hot reload with Vite integration for seamless development experience

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Development Storage**: In-memory storage implementation for development and testing
- **Data Models**: User accounts and contact form submissions with proper validation

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session storage
- **User System**: Basic user authentication with username/password (currently minimal implementation)
- **Security**: Input validation using Zod schemas for all API endpoints

### Design System
- **Component Library**: Custom shadcn/ui implementation with Radix UI primitives
- **Theme System**: CSS custom properties with automatic dark/light mode switching
- **Typography**: Inter font family with careful hierarchy and spacing
- **Color Palette**: Professional blue/neutral theme with proper contrast ratios
- **Layout System**: Tailwind spacing primitives (4, 8, 12, 16) for consistent spacing
- **Responsive Design**: Mobile-first approach with proper breakpoints

## External Dependencies

### Third-party Services
- **Email Service**: SendGrid integration for contact form notifications and auto-replies
- **Database Hosting**: Neon Database (PostgreSQL) for production data storage
- **Font Service**: Google Fonts for Inter typography
- **Development Tools**: Replit-specific plugins for enhanced development experience

### Key Libraries
- **UI Framework**: React with comprehensive Radix UI component primitives
- **Styling**: Tailwind CSS with custom configuration and design tokens  
- **Database**: Drizzle ORM with PostgreSQL dialect and schema validation
- **Validation**: Zod for runtime type checking and form validation
- **HTTP Client**: TanStack Query for API communication and caching
- **Build Tools**: Vite with TypeScript and ESBuild for optimized builds
- **Development**: TSX for TypeScript execution and hot reload capabilities

### Asset Management
- **Generated Images**: Custom hero background and CEO professional headshot stored in attached_assets
- **Icons**: Lucide React for consistent iconography throughout the application
- **Static Assets**: Vite asset handling with proper optimization and caching strategies