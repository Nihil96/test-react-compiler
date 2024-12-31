# Exploring and Experimenting with React Compiler

This repository demonstrates experiments with the new React Compiler (beta) using React v19. It includes various examples showcasing specific use cases and optimizations enabled by the compiler.

## Prerequisites

Ensure that you have Node.js version 18 or higher installed on your machine.

## Usage

1. Clone the repository
2. Navigate to the project
3. Install dependencies with `npm install`
4. Start the development server: `npm run dev`

## Structure

- `components/`: Simple reusable components.
- `examples/`: Contains self-contained test cases for React Compiler.

In the `examples/` directory, you will find individual folders, each containing an <App /> component that renders a specific example. Each example highlights a particular feature or optimization provided by the React Compiler. Additionally, every example folder includes a `.md` file that explains:

1. How the components behave without the React Compiler.
2. The manual steps that can be taken to optimize their performance.
3. How the React Compiler automatically applies optimizations by default.

These examples serve as practical guides to understanding and leveraging the React Compiler effectively.
