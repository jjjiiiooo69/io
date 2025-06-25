# UPI Payment Gateway

A modern UPI payment gateway application built with React, Node.js, and Express. Accept payments directly to your bank account at 0% transaction fee.

## Features

- 🚀 **0% Transaction Fee** - Keep 100% of your earnings
- ⚡ **Instant Settlements** - Real-time money transfer to your bank
- 🔒 **Secure** - Bank-grade security with encryption
- 📱 **UPI Support** - Accept payments from all major UPI apps
- 🎯 **Easy Integration** - Simple API with comprehensive documentation
- 📊 **Analytics Dashboard** - Track your payments and performance
- 🔧 **Developer Friendly** - RESTful APIs with detailed documentation

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- CORS

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd upi-payment-gateway
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration

5. Start the development server:
```bash
npm run dev
```

6. Start the backend server (in a new terminal):
```bash
npm run start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/           # React contexts
│   ├── pages/              # Page components
│   ├── utils/              # Utility functions
│   └── main.jsx           # Application entry point
├── server/
│   ├── routes/            # API routes
│   ├── middleware/        # Express middleware
│   └── index.js          # Server entry point
├── public/               # Static assets
└── package.json         # Dependencies and scripts
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Transactions
- `GET /api/transactions` - Get user transactions
- `POST /api/transactions` - Create new transaction
- `GET /api/transactions/:id` - Get transaction by ID

### Users
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/balance` - Get user balance

## Features

### Dashboard
- Account balance overview
- Transaction statistics
- Monthly volume charts
- Recent transactions
- Quick actions

### Transactions
- View all transactions
- Filter by status and date
- Search functionality
- Export transactions
- Real-time updates

### Settings
- Profile management
- Bank details configuration
- API credentials
- Notification preferences

### Plans
- Free trial (3 days)
- Standard plan (₹199/month)
- Feature comparison
- Easy plan switching

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation
- CORS configuration

## Deployment

### Frontend (Netlify)
1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the server code
3. Update frontend API URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@upigateway.com or join our Slack channel.