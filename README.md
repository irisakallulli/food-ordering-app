# Food Ordering App

A modern full-stack food ordering application built with React 19 and Express.js.

## Features

- **Modern React 19** with form actions and useActionState
- **Full-stack architecture** with Express.js backend
- **Shopping cart** with add/remove functionality
- **Checkout process** with form validation
- **Responsive design** with modern UI components
- **Real-time updates** with React Context
- **Image serving** for meal photos
- **Order persistence** with JSON file storage

## Tech Stack

### Frontend

- **React 19** - Latest React with form actions
- **Vite** - Fast build tool and dev server
- **Context API** - State management
- **Custom Hooks** - Reusable logic
- **CSS3** - Modern styling

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **File System** - Data persistence
- **CORS** - Cross-origin requests

## Usage

1. **Browse meals** - View available meals from the backend
2. **Add to cart** - Click "Add to Cart" on any meal
3. **Manage cart** - View cart, adjust quantities, or remove items
4. **Checkout** - Fill out customer information and submit order
5. **Order confirmation** - Receive confirmation of successful order

## Project Structure

```
food-ordering-app/
├── src/                    # Frontend React app
│   ├── components/         # React components
│   │   ├── UI/            # Reusable UI components
│   │   ├── Cart.jsx       # Shopping cart
│   │   ├── Checkout.jsx   # Checkout form
│   │   └── Meals.jsx      # Meal listing
│   ├── store/             # Context providers
│   ├── hooks/             # Custom hooks
│   └── util/              # Utility functions
├── backend/               # Express.js server
│   ├── data/              # JSON data files
│   ├── public/            # Static assets (images)
│   └── app.js             # Server entry point
└── public/                # Frontend static assets
```

## API Endpoints

- `GET /meals` - Fetch all available meals
- `POST /orders` - Submit a new order

## Key React Concepts Demonstrated

- **React 19 Form Actions** - Modern form handling
- **useActionState** - Form state management
- **Context API** - Global state management
- **Custom Hooks** - Reusable logic extraction
- **useReducer** - Complex state management
- **Portals** - Modal rendering
- **Error Boundaries** - Error handling
- **Conditional Rendering** - Dynamic UI
