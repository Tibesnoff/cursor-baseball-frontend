# Baseball Stats Frontend

React-based frontend application for displaying baseball statistics and data.

## Overview

This is the frontend application for the Baseball Stats project, built with React, TypeScript, and Vite.

## Features

- Modern React with TypeScript
- Vite for fast development and building
- ESLint and Prettier for code quality
- Responsive design
- Real-time baseball statistics
- Player and team data visualization

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Yarn** - Package manager

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── services/      # API service calls
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── styles/        # Global styles and themes
├── App.tsx        # Main App component
└── main.tsx       # Entry point
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking
- `yarn preview` - Preview production build

## Development

- **Hot Reload**: Automatic reloading during development
- **TypeScript**: Full type checking
- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Code formatting

## Building for Production

```bash
yarn build
```

The built files will be in the `dist` directory.

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001/api
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting:
   ```bash
   yarn lint
   yarn format:check
   yarn type-check
   ```
5. Submit a pull request

## License

This project is licensed under the MIT License.