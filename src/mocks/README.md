# Mock Service Worker (MSW) Setup

This directory contains the MSW (Mock Service Worker) configuration for intercepting HTTP requests in tests and development.

## Overview

MSW allows us to mock API requests at the network level, providing consistent and reliable testing without hitting real APIs.

- **Purpose**: Sets up MSW server
- **Used in**: Vitest tests via `src/setup.ts`
- **Lifecycle**: Starts before tests, resets after each test, closes after all tests
