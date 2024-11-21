#my-api-production-f735.up.railway.app

![Image Alt](https://github.com/IT21278280/my-api/blob/96692854f37ccf55079a2039cba9928e862f26ac/motivational_quote_instagram_1.png)

# Greeting API Project
This project is a full-stack application providing a **RESTful API** and a responsive **React-based UI** for generating personalized greeting messages. It includes **API key authentication** for secure access and uses **Material-UI** for modern, visually appealing components.

---
## Features
- Secure **API key authentication** to protect the API.
- Responsive, stylish frontend using **Material-UI**.
- Backend built with **Node.js** and **Express**.
- Allows users to input their names and receive a personalized greeting.
- Error handling for invalid API keys and network issues.
- Backend deployed on **Railway**, and frontend deployable on **Netlify** (optional).

---

## Technology Stack

### Backend
- **Node.js**: Runtime environment for server-side logic.
- **Express.js**: Framework for building the API.
- **dotenv**: Manages environment variables.
- **CORS**: Enables cross-origin requests.

### Frontend
- **React.js**: JavaScript library for building the user interface.
- **Material-UI**: A component library for responsive, elegant designs.
- **Fetch API**: Handles HTTP requests to the backend.

### Tools
- **Postman**: Testing the API endpoints.
- **Railway**: Hosting the backend.
- **Netlify**: (Optional) Hosting the frontend React application.

## Screenshots

### **Frontend**

#### 1. Home Page
This is the home page where users can enter their name and get a personalized greeting.
![Home Page](./docs/screenshots/home-page.png)

#### 2. Greeting Message
After entering a valid name and clicking "Get Greeting," the personalized greeting message is displayed.
![Greeting Message](./docs/screenshots/greeting-message.png)

#### 3. Error Message (Invalid API Key)
If an invalid API key is provided, the app displays an error message.
![Error Message](./docs/screenshots/error-message.png)

---

### **Backend**

#### 1. Backend Running
This shows the backend server running successfully in the terminal.
![Backend Running](./docs/screenshots/backend-running.png)

#### 2. Postman Test - Successful Request
A successful request made to the `/greet` endpoint in Postman.
![Postman Test Success](./docs/screenshots/postman-success.png)

#### 3. Postman Test - Invalid API Key
A failed request due to an invalid API key, tested in Postman.
![Postman Test Error](./docs/screenshots/postman-error.png)
