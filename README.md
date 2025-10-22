# Food Ordering App

A modern full-stack food ordering application built with React 19 and Express.js.

## 🚀 Features

- **Modern React 19** with form actions and useActionState
- **Full-stack architecture** with Express.js backend
- **Shopping cart** with add/remove functionality
- **Checkout process** with form validation
- **Responsive design** with modern UI components
- **Real-time updates** with React Context
- **Image serving** for meal photos
- **Order persistence** with JSON file storage

## 🛠️ Tech Stack

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

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/food-ordering-app.git
   cd food-ordering-app
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Start the backend server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:3000
   ```

5. **Start the frontend development server**
   ```bash
   npm run dev
   # App runs on http://localhost:5173
   ```

## 🎯 Usage

1. **Browse meals** - View available meals from the backend
2. **Add to cart** - Click "Add to Cart" on any meal
3. **Manage cart** - View cart, adjust quantities, or remove items
4. **Checkout** - Fill out customer information and submit order
5. **Order confirmation** - Receive confirmation of successful order

## 📁 Project Structure

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

## 🔧 API Endpoints

- `GET /meals` - Fetch all available meals
- `POST /orders` - Submit a new order

## 🎨 Key React Concepts Demonstrated

- **React 19 Form Actions** - Modern form handling
- **useActionState** - Form state management
- **Context API** - Global state management
- **Custom Hooks** - Reusable logic extraction
- **useReducer** - Complex state management
- **Portals** - Modal rendering
- **Error Boundaries** - Error handling
- **Conditional Rendering** - Dynamic UI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend
- Vite for the lightning-fast development experience
