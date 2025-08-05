# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React color picker application built with:
- **React 19** with TypeScript
- **Vite** as the build tool and dev server
- **Tailwind CSS v4** for styling (using the new Vite plugin)
- **ESLint** with TypeScript and React-specific rules

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Core Structure
```
src/
├── App.tsx              # Main application component (color picker UI)
├── main.tsx            # React app entry point
├── index.css           # Global styles
├── components/         # Component directory (currently empty)
└── assets/            # Static assets
```

### Key Technical Details

- **Tailwind CSS v4**: Uses the new `@tailwindcss/vite` plugin (not PostCSS)
- **TypeScript**: Strict configuration with separate configs for app and Node.js
- **ESLint**: Configured with TypeScript, React Hooks, and React Refresh rules
- **Component Pattern**: The main App component demonstrates a simple color picker with state management

### Current Implementation

The application is a single-page color picker that:
- Uses React hooks (`useState`) for color state management
- Displays a color preview box with the selected color
- Provides an HTML5 color input for selection
- Uses Tailwind for responsive design and styling

Note: There's a syntax issue in App.tsx:14 where template literals are incorrectly used in className. The dynamic color styling needs to be fixed to work properly with Tailwind.