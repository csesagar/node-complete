
# Day 08 - Express.js, Routing, ES6 and Environment Variables

## 1. Routing in Node.js

Routing determines how an application responds to client requests based on the URL and HTTP method.

### HTTP vs Express.js

- **HTTP:** A built-in Node.js module where routing needs to be implemented manually.
- **Express.js:** A Node.js framework that simplifies routing, middleware and API development.

## 2. Initialize Node.js Project

```bash
npm init -y
```

- Initializes a new Node.js project.
- Accepts all default configurations.
- Automatically generates the `package.json` file.

## 3. Install Required Packages

```bash
npm i express ejs dotenv morgan mongodb
```

| Package | Description |
|---------|-------------|
| express | Used to create servers, routes and APIs |
| ejs | Template engine used to render dynamic HTML |
| dotenv | Used to read environment variables from env files |
| morgan | Used to log HTTP requests |
| mongodb | Used to connect Node.js with MongoDB |

## 4. Project Folder Structure

```text
project/
│
├── node_modules/
├── env.dev
├── env.stg
├── app.js
├── .gitignore
├── package.json
└── package-lock.json
```

### Environment Files

- `env.dev` - Development environment configuration.
- `env.stg` - Staging environment configuration.

Environment files are used to store configuration values such as:

- Port number
- Database connection string
- API keys
- Secret keys
- Environment name

### .gitignore

The `.gitignore` file prevents unnecessary and sensitive files from being uploaded to GitHub.

```text
node_modules/
.env
env.dev
env.stg
```

## 5. Creating a Server Using Express.js

### app.js

```javascript
// Import Express
let express = require('express');

// Create an Express application
// Provides access to Express methods
let app = express();

// Define port number
let port = 6700;

// Default route
app.get('/', (req, res) => {
    res.send('Hi from Express');
});

// Test route
app.get('/test', (req, res) => {
    res.send('Hi from Test');
});

// Start the server
app.listen(port, (err) => {
    if (err) throw err;

    console.log('Server is running on port 6700');
});
```

## 6. Run the Application

```bash
node app.js
```

### Console Output

```text
Server is running on port 6700
```

### Available Routes

| Method | URL | Response |
|--------|-----|----------|
| GET | http://localhost:6700/ | Hi from Express |
| GET | http://localhost:6700/test | Hi from Test |

## 7. Express.js Methods

| Method | Description |
|--------|-------------|
| express() | Creates an Express application |
| app.get() | Handles GET requests |
| app.post() | Handles POST requests |
| app.put() | Handles PUT requests |
| app.patch() | Handles PATCH requests |
| app.delete() | Handles DELETE requests |
| app.listen() | Starts the server |
| res.send() | Sends a response to the client |

## 8. JavaScript Versions - ES5 and ES6

ECMAScript (ES) is a standard specification for writing JavaScript code.

- **ES5:** Introduced in 2009.
- **ES6 (ES2015):** Introduced in 2015 with modern JavaScript features.

### ES5 - String Concatenation

```javascript
var a = 10;

console.log("My age is " + a);
```

### ES6 - Template Literals

```javascript
let a = 10;

console.log(`My age is ${a}`);
```

### Output

```text
My age is 10
```

Template literals use backticks and `${}` to include variables and expressions inside strings.

### ES5 vs ES6

| ES5 | ES6 |
|-----|-----|
| var | let and const |
| String concatenation | Template literals |
| Traditional functions | Arrow functions |
| Constructor functions | Classes |
| Manual property extraction | Destructuring |

## 9. Environment Variables Using dotenv

The `dotenv` package is used to load environment variables from environment files into `process.env`.

### Install dotenv

```bash
npm i dotenv
```

### Create a .env File

```env
PORT=6700
NODE_ENV=development
```

### Import and Configure dotenv

```javascript
// Import dotenv
let dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Read port from environment variables
let port = process.env.PORT || 6700;
```

### Explanation

- `require('dotenv')` - Imports the dotenv package.
- `dotenv.config()` - Loads variables from the .env file.
- `process.env` - Provides access to environment variables.
- `process.env.PORT` - Reads the PORT environment variable.
- `|| 6700` - Uses 6700 as the default port if PORT is missing or empty.

## 10. Multiple Environment Files

### env.dev

```env
PORT=6700
NODE_ENV=development
```

### env.stg

```env
PORT=6800
NODE_ENV=staging
```

By default, dotenv.config() reads the `.env` file.

To read a custom environment file, specify its path.

### Development Environment

```javascript
let dotenv = require('dotenv');

dotenv.config({ path: './env.dev' });

let port = process.env.PORT || 6700;
```

### Staging Environment

```javascript
let dotenv = require('dotenv');

dotenv.config({ path: './env.stg' });

let port = process.env.PORT || 6700;
```

## 11. Complete Express Application with dotenv

### app.js

```javascript
// Import required packages
let express = require('express');
let dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './env.dev' });

// Create Express application
let app = express();

// Configure port
let port = process.env.PORT || 6700;

// Default route
app.get('/', (req, res) => {
    res.send('Hi from Express');
});

// Test route
app.get('/test', (req, res) => {
    res.send('Hi from Test');
});

// Start the server
app.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server is running on port ${port}`);
});
```

### Run Application

```bash
node app.js
```

### Output

```text
Server is running on port 6700
```

## 12. Key Learnings

- Introduction to Express.js.
- Routing in Node.js.
- Initializing projects using npm init -y.
- Installing npm packages.
- Understanding project folder structure.
- Creating an Express server.
- Handling multiple routes.
- Understanding ES5 and ES6.
- String concatenation and template literals.
- Introduction to dotenv.
- Understanding process.env.
- Configuring development and staging environments.
- Setting a default port using the OR operator.
- Protecting sensitive information using .gitignore.

---

**Day 08 Completed Successfully!**
