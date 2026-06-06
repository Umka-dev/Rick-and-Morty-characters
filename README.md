# Rick and Morty Characters Explorer

## Overview

Rick and Morty Characters Explorer is a responsive React application that allows users to browse, search, and filter characters from the public Rick and Morty API.

The project was built as a personal learning challenge to apply modern frontend development practices using React, TypeScript, REST APIs, and Material UI. It demonstrates reusable component architecture, state management, API integration, and a strong focus on user experience.

## Features

### Character Browsing

- Display character cards with images and key information
- Load additional characters dynamically
- Responsive layout for desktop, tablet, and mobile devices

### Character Details

- Dedicated character details page
- Display species, status, gender, origin, and other character information

### Search & Filtering

- Search characters by name
- Filter by status
- Filter by gender
- Filter by species
- URL-based filter persistence using query parameters

### Responsive Design

- Mobile-friendly interface
- Material UI components
- Consistent user experience across devices

## Technical Highlights

### TypeScript

- Strong typing using interfaces and enums
- Typed API responses and application state
- Improved maintainability and developer experience

### React Architecture

- Built using reusable functional components
- State management with React Context API
- Reduced prop drilling through centralized state management
- Clean separation of concerns between UI and business logic

### Custom Hooks

- Created reusable hooks for API communication
- Encapsulated data fetching and side effects
- Improved code organization and maintainability

### API Integration

- Integrated with the Rick and Morty REST API
- Implemented asynchronous data fetching
- Managed loading and error states

### User Experience

- Designed intuitive filtering and search flows
- Used React Router and URL parameters for navigation state
- Structured UI logic to keep components clean and reusable

### Tooling & Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Prettier for formatting
- Basic Jest testing and manual testing
- Resolved dependency and package compatibility issues during setup

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Material UI

### API

- Rick and Morty REST API

### Development Tools

- ESLint
- Prettier
- npm
- Git
- GitHub

## Development Process

This project was developed as one of my first independent React applications.

The development process followed several stages:

1. Build a working MVP using React components, useState, and useEffect.
2. Refactor the architecture by introducing Context API, reusable utilities, and smaller components.
3. Migrate the project to TypeScript to improve maintainability and type safety.
4. Perform manual testing and experiment with Jest testing.

During development, I also gained practical experience troubleshooting dependency conflicts, configuring development tools, and resolving package compatibility issues.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/Umka-dev/Rick-and-Morty-characters.git
cd Rick-and-Morty-characters
```

Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### Running the Application

Start the development server:

```bash
npm start
```

or

```bash
yarn start
```

The application will be available at:

http://localhost:3000

## Live Demo

https://rick-and-morty-cartoon-characters.netlify.app/

## Project Goals

- Practice React and TypeScript development
- Work with REST APIs
- Build reusable UI components
- Improve state management skills
- Explore frontend architecture and code quality practices
- Create a responsive and user-friendly application
