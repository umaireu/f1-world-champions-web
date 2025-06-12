# Mock Service Worker (MSW) Setup

This directory contains the MSW (Mock Service Worker) configuration for intercepting HTTP requests in tests and development.

## Overview

MSW allows us to mock API requests at the network level, providing consistent and reliable testing without hitting real APIs.

- **Purpose**: Sets up MSW server
- **Used in**: Vitest tests via `src/setup.ts`
- **Lifecycle**: Starts before tests, resets after each test, closes after all tests

### `handlers/`

Directory containing all API endpoint mock handlers

## TypeScript ESLint Suppressions

### Why Rules Are Disabled

MSW's API design intentionally uses `any` types to provide maximum flexibility for mocking. This triggers several TypeScript ESLint strict rules:

- **`@typescript-eslint/no-unsafe-member-access`**: MSW methods access properties on `any` types
- **`@typescript-eslint/no-unsafe-call`**: MSW functions return `any` and are called
- **`@typescript-eslint/no-unsafe-return`**: MSW handlers return `any` types
- **`@typescript-eslint/no-unsafe-argument`**: `setupServer()` accepts handlers with `any` types
