# 🏎️ F1 World Champions

A modern web application showcasing Formula 1 World Champions throughout history.

## 🚀 Tech Stack

### **Frontend Framework**

- **React 19** - Latest React with modern concurrent features
- **TypeScript** - Type-safe development with strict configuration
- **Vite** - Lightning-fast build tool with HMR

### **Development Tools**

- **ESLint** - Comprehensive linting with strict TypeScript rules
  - `@typescript-eslint/strict-type-checked` - Strict TypeScript linting
  - `eslint-plugin-react` - React-specific rules and best practices
  - `eslint-plugin-react-hooks` - React Hooks rules enforcement
  - `eslint-plugin-jsx-a11y` - Accessibility linting for inclusive design
  - `eslint-plugin-react-refresh` - Fast Refresh compatibility
- **Prettier** - Automated code formatting with team consistency
- **Husky** - Git hooks for automated quality checks

### **Testing Infrastructure**

- **Vitest** - Fast unit testing with Vite integration
- **React Testing Library** - Component testing with user-centric approach
- **jsdom** - Browser environment simulation

### **Code Quality & Git Workflow**

- **Conventional Commits** - Standardized commit message format
- **Commitlint** - Automated commit message validation
- **Pre-commit Hooks** - Automated checks before commits:
  - Code formatting (Prettier)
  - Linting (ESLint)
- **Pre-push Hooks**
  - Test execution (Vitest) before pushing
  - Build verification before pushing

### **TypeScript Configuration**

- **Project References** - Organized TypeScript configuration
  - `tsconfig.app.json` - Application code configuration
  - `tsconfig.node.json` - Build tools configuration
  - `tsconfig.vitest.json` - Testing environment configuration

## 🛠️ Available Scripts

```bash
# Development
npm start          # Start development server
npm run build      # Build for production
npm run preview    # Preview production build

# Code Quality
npm run lint       # Run ESLint on all files
npm run lint:fix   # Auto-fix ESLint issues
npm run format     # Format code with Prettier
npm run format:check # Check code formatting

# Testing
npm run test       # Run tests in watch mode
npm run test:run   # Run tests once
npm run test:coverage # Run tests with coverage report
npm run test:ui    # Open Vitest UI interface

# Git Workflow
npm run commit     # Interactive conventional commit
```

## 🔧 Development Setup

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd f1-world-champions-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

## 📋 Git Workflow

This project enforces quality through automated checks:

- **Pre-commit**: Automatically formats code, runs linting, and executes tests
- **Commit messages**: Must follow conventional commit format (`feat:`, `fix:`, etc.)
- **Pre-push**: Ensures code builds successfully before pushing
