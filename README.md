
# Recipes CRUD Application - User Authentication and Authorization API

This project is a backend API built with Node.js, Express, MongoDB, and Mongoose that allows users to register, log in, and access protected endpoints. It uses JWT for secure user authentication and authorization, implementing best practices such as hashed passwords with bcrypt and following the MVC pattern for clean code organization. This application is designed to integrate with the Recipes CRUD Application you’re building.

## Features
- **User Registration**: Allows new users to sign up.
- **User Login**: Registered users can log in and receive a JWT.
- **Protected User Profile**: Accessible only with a valid JWT token.
- **Password Hashing**: Secure password storage using bcrypt.
- **API Documentation**: Includes API documentation in Postman format for easy testing.

## Project Structure
The project follows the MVC (Model-View-Controller) structure:
```
├── model
│   └── Usermodel.js         # Defines the User schema and password hashing
├── controller
│   └── Authcontroller.js    # Handles user signup and login
├── middlewares
│   └── authmiddleware.js    # Verifies JWT for protected routes
├── routes
│   └── userRouter.js        # User-related routes (e.g., profile)
├── .env                     # Environment variables, including MongoDB URI and JWT secret
└── index.js                 # Entry point, server setup, route registration
```

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB (or a MongoDB Atlas URI)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with the following variables:
   ```plaintext
   NODE_ENV=development
   PORT=3000
   HOSTNAME=localhost
   MONGODB_URI=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key
   ```

4. Run the application:
   ```bash
   npm start
   ```

### API Endpoints ,Sample Requests and Response

 - **POST /auth/signup**: Register a new user
 - **Body**: `{"name":"Ned Stark","email":"sean_bean@gameofthrones","password":"nedcat@1234"}`
  - **Response**:`{"message": "User created successfully"}`
- **POST /auth/login**: Login an existing user
  - **Body**: `{"email":"sean_bean@gameofthrones","password":"nedcat@1234"}`
  - **Response**: `{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmM3MmI0NGMxYTQ3NGFhZTlkOWE3YSIsIm5hbWUiOiJOZWQgU3RhcmsiLCJpYXQiOjE3MzA5Njk4MzcsImV4cCI6MTczMDk3MzQzN30.C9PHOeVQJfIZtLu21cm1Y1vl2HYPfA5cZRxLvjDEUDM"
}`

- **GET /user/profile**: Access the user’s profile
  - **Headers**: `{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmM3MmI0NGMxYTQ3NGFhZTlkOWE3YSIsIm5hbWUiOiJOZWQgU3RhcmsiLCJpYXQiOjE3MzA5Njk4MzcsImV4cCI6MTczMDk3MzQzN30.C9PHOeVQJfIZtLu21cm1Y1vl2HYPfA5cZRxLvjDEUDM" }`
  - **Response**: `{
    "message": "User profile",
    "user": {
        "_id": "672c72b44c1a474aae9d9a7a",
        "name": "Ned Stark",
        "email": "sean_bean@gameofthrones",
        "__v": 0
    }
}`

## Testing the API
You can test the API using Postman with the included documentation. Import the Postman collection (provided as `postman_collection.json` in the root folder) and set the environment variables for quick and easy testing.

## Deployment
This project is currently set up to be deployed on Render. Ensure you add all environment variables, including `MONGODB_URI` and `SECRET_KEY`, in your Render Dashboard under "Environment".
