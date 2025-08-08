# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server using Vite
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React + TypeScript application built with Vite, featuring authentication flows and routing.

### Core Stack
- **Frontend**: React 19 with TypeScript
- **Routing**: React Router DOM v7
- **UI Library**: Ant Design (antd) v5
- **HTTP Client**: Axios
- **Build Tool**: Vite with TypeScript compilation
- **Linting**: ESLint with React-specific plugins

### Project Structure
- `src/components/` - React components organized by feature
  - Authentication components: `AuthCard`, `Login`, `SignUp`, `LoginForm`, `SignUpForm`
  - `AuthSVG` - Shared authentication icon component
  - `Home` - Main landing page component
- `src/services/` - External service integrations
  - `backendAPI.ts` - Pre-configured Axios instance with base URL and timeout
- `src/constants.ts` - Application constants (BASE_URL, API_VERSION, TIMEOUT)

### Authentication Architecture
The app implements a dual authentication system with separate Login and SignUp flows:
- `AuthCard` serves as a wrapper component for authentication forms
- Both Login and SignUp have dedicated form components (`LoginForm`, `SignUpForm`) 
- Forms use Ant Design's Form component with validation rules
- Backend integration is set up via Axios but currently uses placeholder API endpoints

### Routing Structure
- `/` - Home page
- `/login` - Login form
- `/signup` - Sign up form

### Styling Approach
- CSS modules for component-specific styles
- Ant Design's built-in theming system
- Custom CSS files for each major component (AuthCard, Login, SignUp, etc.)

## API Configuration

The application has two different API configurations:
- `backendAPI.ts`: Uses `https://api.example.com` (placeholder)
- `constants.ts`: Uses `http://localhost:3000` for local development

When implementing API calls, determine which base URL is appropriate for your environment.