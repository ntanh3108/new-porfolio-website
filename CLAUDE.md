# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React portfolio website built with Vite. It's a minimal setup using React 19.1.1 with Vite for development and building.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Architecture

**Tech Stack:**
- React 19.1.1 with modern features (StrictMode, createRoot)
- Vite 7.1.7 for build tooling and development server
- ESLint with React-specific rules for code quality
- Font Awesome 6.0.0 for icons

**Application Structure:**
This is a single-page portfolio application with a fixed sidebar navigation and scrollable main content area. The app uses section-based navigation with smooth scrolling.

**Main Components (all in `src/App.jsx`):**
- `App` - Root component with sidebar navigation, scroll tracking, and typewriter effect for job titles
- `SocialActivities` - Carousel component displaying charitable work with images/videos
- `Publications` - Searchable publications list with pagination, modal abstracts, and chemical formula formatting
- `WorkExperience` - Timeline-based work history display
- `EducationTimeline` - Timeline-based education history display

**Key Features:**
- Scroll-based active section tracking for navigation highlighting
- Typewriter animation for job titles (Salewoman, Researcher, Tutor)
- Custom chemical formula formatter using dangerouslySetInnerHTML for subscripts/superscripts
- Dynamic age calculation from birthdate
- Background image set programmatically via useEffect on document.body
- Modal system for publication abstracts

**Project Structure:**
- `src/main.jsx` - Application entry point with React 19 createRoot
- `src/App.jsx` - All components and main application logic (~670 lines)
- `src/App.css` - Component styling
- `src/index.css` - Global styles
- `src/assets/` - Static assets (avatar.jpg)
- `public/` - Public media files (videos, images for education/work/social sections)
- `dist/` - Production build output (gitignored)

**Build Configuration:**
- Vite config uses standard React plugin setup
- ESLint configured for modern React with hooks and refresh plugins
- ES2020+ syntax support with JSX
- Browser globals configured for client-side code
- ESLint rule: `no-unused-vars` allows uppercase constants (pattern: `^[A-Z_]`)

## Development Notes

- Uses React 19's new createRoot API
- All components are defined in single `App.jsx` file (not split into separate component files)
- Hot Module Replacement (HMR) enabled via Vite
- No test framework currently configured
- TypeScript not configured (pure JavaScript project)
- Font Awesome loaded via CDN in index.html
- Media assets referenced with `/public/` prefix in code but served from root in production