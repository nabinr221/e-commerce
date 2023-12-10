# E-commerce Site (MERN Stack Project)

### Overview

This repository contains the source code for an e-commerce website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website is designed to provide a seamless shopping experience, with features such as product management, user authentication, shopping cart, and order processing and many more.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nabinr221/e-commerce.git
   ```

### Install dependencies:

#### For frontend

```
cd client
npm i
```

#### For Backend

```
cd server
npm i
```

### Configure the environment:

Create a .env file in the root directory with the following variables:

```
PORT=3000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

## Running the Application

#### For frontend

```
cd client
npm run dev
```

#### For Backend

```
cd server
npm run start
```

## Features

- User Authentication: Sign up, log in, and password recovery.

- Product Management: Add, edit, and delete products.
- Categories and tags for easy navigation.
  -Shopping Cart: Add/remove products, adjust quantities, and checkout.

- Order Processing: Place orders, view order history, and track orders.
- Payment Integration: Integrated with [Payment Gateway](options).


## Technologies Used

### Backend:

- Node.js
- Express.js
- MongoDB
- multer ( for file uploads )
- cloudnary (to store image on cloud)
- jwt
- bcrypt (to hash paddword)

### Frontend:

- React.js
- Redux
- react-router-dom
- recharts
- styled-components (to style)
- formik & yup (form validation)


## Project Structure

```
|- e-commerce
    |-- client
    |    |-- public
    |    |-- .eslintrc.csj
    |    |-- .gitignore
    |    |-- index.html
    |    |-- .package.json
    |    |-- src
    |        |-- assets
    |        |-- components
    |        |-- containers
    |        |-- styles
    |        |-- App.jsx
    |        |-- index.css
    |        |-- main.jsx
    |        |-- etc...(other files )
    |
    |-- server
    |    |-- .env
    |    |-- .gitignore
    |    |-- .package.json
    |    |-- src
    |        |-- controllers
    |        |-- middleware
    |        |-- models
    |        |-- routes
    |        |-- utils
    |        |-- index.js
    |        |-- etc...(other files )
    |
    |--- README.md
    |--- .gitignore

```

## License

This project is licensed under the [MIT License] - see the LICENSE file for details.

```
Remember to customize the placeholders, such as `your-username`, `your-mongodb-connection-string`, `[Payment Gateway]`, and others with your specific details. Additionally, provide links to relevant resources, such as your contribution guidelines and license file.

```
