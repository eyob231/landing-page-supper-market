# 🛒 Simple Supermarket - MERN Stack E-Commerce

![Screenshot 2025-03-31 at 13-47-19 Vite React](https://github.com/user-attachments/assets/9543ece5-d657-4027-a358-8793992fcff3)


A full-stack supermarket e-commerce application built with MongoDB, Express, React, and Node.js (MERN stack).

## ✨ Features

- **Product Catalog** - Browse products by category
- **Shopping Cart** - Add/remove items, quantity adjustment
- **User Authentication** - Signup, login, and profile management
- **Admin Dashboard** - Manage products, orders, and users
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Secure Payments** - Stripe integration for checkout



## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux (State Management)
- React Router (Navigation)
- Axios (HTTP Client)
- Tailwind CSS (Styling)

**Backend:**
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)

**DevOps:**
- Git (Version Control)
- GitHub Actions (CI/CD)
- Docker (Containerization)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eyob231/simple-supermarket.git
   cd simple-supermarket

    Install dependencies
    bash
    Copy

    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install

    Set up environment variables

        Create .env file in server directory:
        Copy

        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        PORT=5000

    Run the application
    bash
    Copy

    # From root directory
    npm run dev

        Backend: http://localhost:5000

        Frontend: http://localhost:3000

🌐 Deployment

The application can be deployed using:

Option 1: Docker
bash
Copy

docker-compose up --build

Option 2: Manual Deployment

    Frontend: Vercel/Netlify

    Backend: Render/Heroku

    Database: MongoDB Atlas

📂 Project Structure
Copy

simple-supermarket/
├── client/               # Frontend React app
│   ├── public/          # Static files
│   └── src/             # React components
│       ├── components/   # Reusable UI components
│       ├── pages/        # Application pages
│       ├── redux/        # State management
│       └── App.js        # Main component
│
├── server/              # Backend Express app
│   ├── config/          # DB configuration
│   ├── controllers/     # Business logic
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Server entry point
│
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation

🤝 Contributing

Contributions are welcome! Follow these steps:

    Fork the project

    Create your feature branch (git checkout -b feature/AmazingFeature)

    Commit your changes (git commit -m 'Add some AmazingFeature')

    Push to the branch (git push origin feature/AmazingFeature)

    Open a Pull Request

📜 License

Distributed under the MIT License. See LICENSE for more information.
📧 Contact
