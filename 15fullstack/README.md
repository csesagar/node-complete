
---

# Day 09 - Express Router and Code Separation

## 1. Static Data Management

Create a `data` folder to store category and product data separately instead of writing all the data inside `app.js`.

### Folder Structure

```text
project/
├── data/
│   ├── category.json
│   └── product.json
├── app.js
└── package.json
```

### Import Static Data

```javascript
let categoryData = require('./data/category.json');
let productData = require('./data/product.json');

app.get('/category', (req, res) => {
    res.json(categoryData);
});

app.get('/products', (req, res) => {
    res.json(productData);
});
```

## 2. Express Router

Express Router is used to group and manage multiple related routes separately.

### Create a Router

```javascript
let categoryRouter = express.Router();

categoryRouter.route('/details').get((req, res) => {
    res.send("Category Details");
});

app.use('/category', categoryRouter);
```

### API Endpoint

```text
http://localhost:7000/category/details
```

### Advantages

- Groups related routes.
- Reduces app.js complexity.
- Improves code readability.
- Makes applications easier to maintain and scale.

## 3. Code Separation

Create a `src` folder containing `controller` and `views` folders.

### Updated Folder Structure

```text
project/
├── data/
│   ├── category.json
│   └── product.json
├── src/
│   ├── controller/
│   │   ├── categoryRouter.js
│   │   └── productRouter.js
│   └── views/
├── app.js
├── package.json
└── .gitignore
```

## 4. Category Router

### src/controller/categoryRouter.js

```javascript
let express = require('express');

let categoryRouter = express.Router();

let categoryData = require('../../data/category.json');

categoryRouter.route('/').get((req, res) => {
    res.json(categoryData);
});

categoryRouter.route('/details').get((req, res) => {
    res.send("Category Details");
});

module.exports = categoryRouter;
```

## 5. Product Router

### src/controller/productRouter.js

```javascript
let express = require('express');

let productRouter = express.Router();

let productData = require('../../data/product.json');

productRouter.route('/').get((req, res) => {
    res.json(productData);
});

module.exports = productRouter;
```

## 6. Import Routers into app.js

```javascript
let express = require('express');
let app = express();

let port = 7000;

// Import routers
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');

// Register routers
app.use('/category', categoryRouter);
app.use('/products', productRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

## 7. Available Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /category | Get all categories |
| GET | /category/details | Get category details |
| GET | /products | Get all products |

## 8. Understanding Important Methods

| Method | Description |
|--------|-------------|
| express.Router() | Creates a router instance |
| router.route() | Groups HTTP methods for a route |
| app.use() | Registers middleware or mounts routers |
| module.exports | Exports a module |
| require() | Imports a module |
| res.json() | Sends a JSON response |

## 9. Request Flow

```text
Client Request
      |
      v
    app.js
      |
      v
Express Router
      |
      v
Route Handler
      |
      v
Static JSON Data
      |
      v
HTTP Response
```

---

# Day 10 - Middleware, Morgan and EJS

## 1. Middleware in Express.js

Middleware is a function that executes during the request-response cycle.

It has access to:

- req - Request object.
- res - Response object.
- next - Passes control to the next middleware.

### Custom Middleware Example

```javascript
app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});
```

### Common Uses of Middleware

- Request logging
- Authentication
- Authorization
- Request validation
- Error handling
- Parsing request bodies

## 2. Introduction to Morgan

Morgan is an HTTP request logging middleware for Node.js and Express.js.

It provides information about incoming HTTP requests, response status codes and response times.

### Installation

```bash
npm i morgan
```

### Import Morgan

```javascript
let morgan = require('morgan');
```

### Register Middleware

```javascript
app.use(morgan('dev'));
```

### Console Output

```text
Server is running on port 7000

GET /category 200 14.731 ms - 323
GET /favicon.ico 404 3.129 ms - 150
```

### Understanding Morgan Logs

| Value | Description |
|-------|-------------|
| GET | HTTP method |
| /category | Requested route |
| 200 | HTTP status code |
| 14.731 ms | Response time |
| 323 | Response Content-Length in bytes |

## 3. Morgan Log Formats

| Format | Description |
|--------|-------------|
| dev | Concise development logs |
| common | Standard Apache-style logs |
| combined | Detailed Apache-style logs |
| short | Short request logs |
| tiny | Minimal request logs |

## 4. Store Logs in a File

Use the built-in File System module to store HTTP request logs inside `app.log`.

```javascript
let morgan = require('morgan');
let fs = require('fs');

app.use(morgan('common', {
    stream: fs.createWriteStream('./app.log', {
        flags: 'a'
    })
}));
```

The `flags: 'a'` option appends new logs without overwriting existing logs.

### .gitignore

```gitignore
node_modules/
*.log
env.dev
env.stg
```

## 5. Middleware Registration Order

```javascript
app.use(morgan('dev'));

app.use('/category', categoryRouter);

app.use('/products', productRouter);
```

Middleware executes in registration order.

Morgan should be registered before the routes to log incoming requests handled by those routes.

## 6. Introduction to EJS

EJS stands for Embedded JavaScript.

It is a template engine used to generate dynamic HTML pages using JavaScript and server-side data.

### Installation

```bash
npm i ejs
```

### Advantages

- Generates dynamic HTML.
- Supports JavaScript expressions.
- Supports loops and conditions.
- Allows server-side rendering.
- Supports reusable templates.

## 7. EJS Project Structure

```text
project/
├── data/
│   ├── category.json
│   └── product.json
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   └── images/
├── src/
│   ├── controller/
│   │   ├── categoryRouter.js
│   │   └── productRouter.js
│   └── views/
│       └── index.ejs
├── app.js
├── app.log
└── package.json
```

## 8. Configure EJS in Express

```javascript
let path = require('path');

// Static files path
app.use(express.static(path.join(__dirname, 'public')));

// HTML template path
app.set('views', path.join(__dirname, 'src/views'));

// Configure view engine
app.set('view engine', 'ejs');
```

| Configuration | Purpose |
|---------------|---------|
| express.static() | Serves CSS, JavaScript and images |
| app.set('views') | Specifies the template folder |
| app.set('view engine') | Configures the template engine |
| __dirname | Returns the current module's directory |

## 9. Passing Data from Express to EJS

### app.js

```javascript
let menu = [
    { name: 'Category', link: '/category' },
    { name: 'Products', link: '/products' }
];

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        menu: menu
    });
});
```

The `res.render()` method renders an EJS template and passes dynamic data to it.

## 10. Display Dynamic Data in EJS

### src/views/index.ejs

```html
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>

    <h1>Hi from EJS - <%= title %></h1>

    <nav>
        <% menu.forEach(item => { %>

            <a href="<%= item.link %>">
                <%= item.name %>
            </a>

        <% }); %>
    </nav>

</body>
</html>
```

### Browser Output

```text
Hi from EJS - Home Page

Category    Products
```

## 11. Important EJS Syntax

| Syntax | Description |
|--------|-------------|
| `<%= value %>` | Displays escaped dynamic content |
| `<% code %>` | Executes JavaScript code |
| `<%- value %>` | Displays unescaped HTML |
| `<%# comment %>` | EJS comment |

Avoid displaying untrusted user input using unescaped HTML.

## 12. res.send() vs res.json() vs res.render()

| Method | Purpose |
|--------|---------|
| res.send() | Sends text, HTML or other supported data |
| res.json() | Sends a JSON response |
| res.render() | Renders a template into HTML |

## 13. Complete app.js

```javascript
let express = require('express');
let morgan = require('morgan');
let fs = require('fs');
let path = require('path');

let app = express();
let port = 7000;

// Import routers
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');

// Logging middleware
app.use(morgan('dev'));

app.use(morgan('common', {
    stream: fs.createWriteStream('./app.log', {
        flags: 'a'
    })
}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// EJS configuration
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Navigation menu
let menu = [
    { name: 'Category', link: '/category' },
    { name: 'Products', link: '/products' }
];

// Default route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        menu
    });
});

// Register routers
app.use('/category', categoryRouter);
app.use('/products', productRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

## 14. EJS Request Flow

```text
Browser Request
       |
       v
Morgan Middleware
       |
       v
Express Route
       |
       v
res.render()
       |
       v
EJS Template + Dynamic Data
       |
       v
Generated HTML
       |
       v
Browser Response
```

---

## Key Learnings

### Day 09

- Static JSON data management.
- Express Router.
- Modular routing.
- Code separation.
- Importing and exporting modules.
- Project folder structure.

### Day 10

- Express middleware.
- Custom middleware.
- Morgan request logging.
- Storing logs in files.
- EJS template engine.
- Serving static files.
- Server-side rendering.
- Passing dynamic data to EJS.
- Rendering lists using JavaScript loops.

---

## Official Documentation

- [Express.js](https://expressjs.com/)
- [Express Router](https://expressjs.com/en/guide/routing.html)
- [Morgan](https://github.com/expressjs/morgan)
- [EJS](https://ejs.co/)

---

**Day 09 and Day 10 Completed Successfully!**
