# F1 World Champions Web Application

## About This App

F1 World Champions is a modern web application that showcases Formula 1 racing data throughout history. Users can explore different F1 seasons, view race details, and discover information about world champions and their achievements.

## Backend Application
To run the backend app, please visit the repository [https://github.com/umaireu/f1-world-champions-api]

## Working example
![gif-gif](https://github.com/user-attachments/assets/1ff24a09-f5ab-45d8-84bc-0616eda1044b)


## Technology Stack

**Frontend Framework**

- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) for type-safe development
- [Vite](https://vitejs.dev/) as the build tool for fast development and builds
- [React Router](https://reactrouter.com/) for client-side routing and navigation
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [TanStack Query](https://tanstack.com/query/latest) (React Query) for state management
- [React i18next](https://react.i18next.com/) for multi-language support
- [Vitest](https://vitest.dev/) for unit and integration testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing
- [MSW](https://mswjs.io/) (Mock Service Worker) for API mocking during tests

## Development Tools

- [ESLint](https://eslint.org/) for code quality
- [Prettier](https://prettier.io/) for consistent code formatting
- [Husky](https://typicode.github.io/husky/) for Git hooks automation
- [Conventional Commits](https://www.conventionalcommits.org/) for standardized commit messages
- [Commitlint](https://commitlint.js.org/) for commit message validation
- Pre-commit hooks for code quality checks
- Pre-push hooks for test validation

## Project Directory Structure

```
src/
├── api-types/         # TypeScript types for API responses
├── assets/            # Static assets (images, icons, etc.)
├── components/        # Reusable UI components
│   ├── async-renderer/ # Handles loading/error states
│   └── ui/            # Basic UI components (buttons, inputs)
├── mocks/             # MSW mock handlers and test data
│   ├── handlers/      # API request handlers for testing
│   └── mock-data/     # Static mock data for tests
├── modules/           # Feature-based modules
│   ├── races/         # Race-related components and logic
│   └── seasons/       # Season-related components and logic
├── routes/            # Application routing configuration
├── services/          # API service layers and HTTP client
├── translations/      # i18n translation files
└── utils/             # Utility functions and helpers
    ├── constants/     # Application constants
    └── test/          # Test utilities and setup
```

**Purpose of Key Directories:**

- **api-types**: Contains TypeScript interfaces that match the backend API structure
- **components**: Shared components used across multiple features
- **modules**: Feature-specific code organized by domain (races, seasons)
- **mocks**: Testing infrastructure for API mocking
- **services**: Handles all external API communication
- **utils**: Common utilities, constants, and helper functions

## Environment Setup

### Required Environment Variables

Create a `.env` file in the root directory with these variables:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

```

**Environment Variables Explained:**

- `VITE_API_BASE_URL`: The base URL for your backend API

Note: All environment variables for Vite must be prefixed with `VITE_` to be accessible in the browser.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone [https://github.com/umaireu/f1-world-champions-web]
   cd f1-world-champions-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Note

To run this application locally, you'll need to set up the API. The API repository and setup instructions can be found at: [https://github.com/umaireu/f1-world-champions-api]

## Available Scripts

```bash
# Development
npm start              # Start development server with hot reload
npm run build          # Create production build
npm run preview        # Preview production build locally

# Code Quality
npm run lint           # Check code with ESLint
npm run lint:fix       # Auto-fix ESLint issues
npm run format         # Format code with Prettier
npm run format:check   # Check if code is properly formatted

# Testing
npm run test           # Run tests in watch mode
npm run test:run       # Run all tests once
npm run test:coverage  # Run tests with coverage report
npm run test:ui        # Open Vitest testing interface

# Git Workflow
npm run commit         # Interactive conventional commit helper
```

## Pipeline and Merge Request Process

Before any merge request can be approved and merged, all pipeline stages must be completed successfully:

### Pipeline Stages

1. **Install Dependencies**

   - Install project dependencies

2. **Linting**

   - ESLint runs on all TypeScript/JavaScript files
   - Code must pass all linting rules
   - No TypeScript errors allowed

3. **Testing**

   - All existing tests must pass
   - Coverage threshold must be maintained (minimum 70%)
   - ![Screenshot 2025-06-12 at 17 31 11](https://github.com/user-attachments/assets/d5f287c9-8ece-4a9e-ab00-d098759b82bf)

4. **Security**

   - Codeql configured to detect vulnerability

5. **Build Verification**

   - Application must build successfully
   - No build errors

6. **Summary**

   - Summary about pipeline

<img width="1710" alt="Screenshot 2025-06-12 at 16 53 53" src="https://github.com/user-attachments/assets/d5cfa16b-367b-4a47-9d8e-e9d03e7c462a" />

## Common Issues and Solutions

**Build errors after git pull:**

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tests failing unexpectedly:**

```bash
# Clear test cache
npm run test -- --clear-cache
```

**TypeScript errors:**

```bash
# Restart TypeScript service in your editor
# Or run type check manually
npx tsc --noEmit
```


## Additional Screenshots
**Highlight row (when winner is also that season’s champion) View**
<img width="1709" alt="Screenshot 2025-06-14 at 22 36 50" src="https://github.com/user-attachments/assets/3ed6d9d6-f51b-46c8-8734-d47268de10f1" />

**No data found View**
<img width="1709" alt="Screenshot 2025-06-14 at 22 49 12" src="https://github.com/user-attachments/assets/06be6317-8dc3-42b6-b998-c5089cd37999" />

**Error View**
<img width="1314" alt="Screenshot 2025-06-12 at 17 40 42" src="https://github.com/user-attachments/assets/fb756e2f-58eb-4ccd-9287-384bc8084120" />


