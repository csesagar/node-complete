
---

# Day 05 - npm Dependencies and Package Management

## 1. Introduction to Dependencies

A dependency is an external package or library required by an application to perform specific functionality.

Node.js uses npm to install, manage and maintain these dependencies.

For example:

- express - Web server and REST API development.
- bcryptjs - Password hashing and verification.
- jsonwebtoken - JWT-based authentication.
- chai - Assertion library used in testing.
- nodemon - Automatically restarts the application during development.

## 2. Types of Package Installation

Node.js packages can be installed in different ways depending on their purpose and scope.

- Local Installation
- Global Installation
- Development Dependencies

## 3. Local Dependencies

Local dependencies are packages installed within a specific Node.js project.

By default, npm installs packages locally.

### Syntax

```bash
npm install package-name
```

### Short Syntax

```bash
npm i package-name
```

### Example

```bash
npm i express
npm i bcryptjs
npm i jsonwebtoken
```

### Characteristics

- Installed inside the project's node_modules directory.
- Available to the specific project.
- Recorded in package.json under dependencies by default.
- Can be imported into application source code.
- Generally required during application runtime.
- Different projects can use different versions of the same package.

### Example

```javascript
const express = require('express');

const app = express();
```

### Folder Structure

```text
NodeProject/
│
├── node_modules/
│   ├── express/
│   ├── bcryptjs/
│   └── jsonwebtoken/
│
├── index.js
├── package.json
└── package-lock.json
```

## 4. Global Packages

Global packages are installed in npm's global installation location rather than inside a specific project.

They are commonly used as command-line development tools.

### Syntax

```bash
npm install -g package-name
```

### Example

```bash
npm i -g nodemon
```

The `-g` flag stands for global.

### Characteristics

- Installed in npm's global package directory.
- Can be used across different projects when available on PATH.
- Not automatically added to a project's package.json.
- Commonly used for command-line utilities.
- Administrator permission may be required depending on the system configuration.
- Not normally used as application-level imported dependencies.

### Examples of Global Tools

| Package | Purpose |
|---------|---------|
| nodemon | Automatically restarts Node.js applications |
| @angular/cli | Creates and manages Angular applications |
| typescript | TypeScript compiler |
| pm2 | Node.js process management |
| npm-check-updates | Checks available dependency updates |

### View Global Packages

```bash
npm list -g --depth=0
```

### Check Global Installation Location

```bash
npm root -g
```

### Uninstall Global Package

```bash
npm uninstall -g nodemon
```

## 5. Development Dependencies

Development dependencies are packages primarily required during development, testing, building and debugging.

They are installed locally but recorded separately in package.json.

### Syntax

```bash
npm install package-name --save-dev
```

### Short Syntax

```bash
npm i -D package-name
```

### Example

```bash
npm i chai --save-dev
```

Or:

```bash
npm i -D chai
```

### Install Multiple Development Dependencies

```bash
npm i -D nodemon chai mocha eslint prettier
```

### Common Development Dependencies

| Package | Purpose |
|---------|---------|
| nodemon | Automatically restarts the application |
| chai | Assertion library for testing |
| mocha | JavaScript testing framework |
| jest | JavaScript testing framework |
| eslint | Code quality and linting |
| prettier | Code formatting |
| typescript | TypeScript compilation |
| supertest | HTTP API testing |

## 6. Understanding package.json Dependencies

### Example package.json

```json
{
    "name": "node-learning",
    "version": "1.0.0",
    "main": "index.js",
    "type": "commonjs",
    "dependencies": {
        "bcryptjs": "^3.0.3",
        "express": "^5.3.0",
        "jsonwebtoken": "^9.0.3"
    },
    "devDependencies": {
        "chai": "^6.3.0"
    }
}
```

The version numbers above are illustrative values
from the learning notes.

### dependencies

Contains packages required by the application during runtime.

### devDependencies

Contains packages primarily required during development, testing and building.

## 7. Local vs Global vs Development Dependencies

| Feature | Local Runtime | Global | Development |
|---------|---------------|--------|-------------|
| Installation flag | Default | -g | -D |
| Installation scope | Project | Global npm location | Project |
| Stored in node_modules | Yes | Global directory | Yes |
| Added to package.json | Yes | No | Yes |
| Runtime requirement | Usually yes | Depends on tool | Usually no |
| Production installation | Usually included | Separate installation | Can be omitted |
| Example | express | Global CLI | chai |

## 8. Development vs Production Environment

### Development Environment

The environment where developers write, test and debug applications.

Common development activities:

- Writing source code.
- Debugging applications.
- Running automated tests.
- Formatting code.
- Testing APIs.
- Automatically restarting servers.

### Production Environment

The environment where the application is deployed and accessed by actual users.

Production environments generally focus on:

- Application performance.
- Security.
- Reliability.
- Monitoring.
- Scalability.
- Resource optimization.

## 9. Installing Production Dependencies

During production deployment, development dependencies can be excluded.

```bash
npm install --omit=dev
```

For a clean installation using package-lock.json:

```bash
npm ci --omit=dev
```

### Why Exclude Development Dependencies?

- Reduces deployment size.
- Reduces unnecessary packages.
- Improves installation efficiency.
- Reduces potential security exposure.

### Important Note

Some applications require development dependencies
during the build stage.

For example, TypeScript may be required to compile
the application before deployment.

Development dependencies can be omitted from the
final runtime environment after the build is completed.

## 10. Introduction to Chai

Chai is an assertion library used to validate expected results during automated testing.

It is commonly used with testing frameworks such as Mocha.

### Installation

```bash
npm i -D chai mocha
```

### Example: math.test.mjs

```javascript
import { expect } from 'chai';

describe('Mathematical Operations', function () {

    it('should add two numbers correctly', function () {

        const result = 10 + 20;

        expect(result).to.equal(30);

    });

});
```

### Run the Test

```bash
npx mocha math.test.mjs
```

### Expected Output

```text
Mathematical Operations
  ✔ should add two numbers correctly

1 passing
```

Modern versions of Chai use ES Modules, so the
example uses import and the .mjs file extension.

## 11. npm Dependency Commands

| Command | Description |
|---------|-------------|
| npm i package-name | Install local dependency |
| npm i -g package-name | Install global package |
| npm i -D package-name | Install development dependency |
| npm uninstall package-name | Remove local package |
| npm uninstall -g package-name | Remove global package |
| npm list --depth=0 | View direct local dependencies |
| npm list -g --depth=0 | View global packages |
| npm outdated | Check outdated packages |
| npm install --omit=dev | Install without development dependencies |
| npm ci | Clean installation using lock file |
| npm ci --omit=dev | Clean production dependency installation |

## 12. Industry Best Practices

- Install application dependencies locally.
- Prefer project-local development tools for consistency.
- Avoid unnecessary global installations.
- Commit package.json and package-lock.json.
- Never manually modify installed package source files.
- Install only required dependencies.
- Review dependency security vulnerabilities.
- Use npm ci in automated build pipelines.
- Exclude unnecessary development dependencies from production.

---

# Day 06 - Node.js Built-in Modules, Callbacks and File System

## 1. Introduction to Node.js Modules

A module is a reusable unit of code that provides specific functionality.

Modules help developers organize applications into smaller and maintainable components.

Node.js supports three common categories of modules.

| Module Type | Description | Examples |
|-------------|-------------|----------|
| Built-in Modules | Provided by Node.js itself | fs, os, http, path |
| Local Modules | Created by the developer | math.js, user.js |
| Third-party Modules | Installed using npm | express, bcryptjs |

## 2. Node.js Built-in Modules

Built-in modules are available as part of the Node.js runtime.

They do not require installation using npm.

### Common Built-in Modules

| Module | Purpose |
|--------|---------|
| fs | File system operations |
| os | Operating system information |
| http | HTTP server and client operations |
| https | Secure HTTP communication |
| path | File and directory path manipulation |
| events | Event-driven programming |
| crypto | Cryptographic operations |
| url | URL processing |
| stream | Streaming data |
| buffer | Binary data handling |
| process | Process and environment information |
| worker_threads | Parallel JavaScript execution using workers |

## 3. Importing Built-in Modules

### Traditional Syntax

```javascript
const fs = require('fs');
```

### Recommended Explicit Syntax

```javascript
const fs = require('node:fs');
```

The `node:` prefix explicitly identifies a Node.js
built-in module.

## 4. Operating System Module (os)

The os module provides information about the operating system on which the Node.js application is running.

### Example: os.js

```javascript
const os = require('node:os');

console.log(os.platform());
```

### Execute the Application

```bash
node os.js
```

### Output on Windows

```text
win32
```

The platform value is win32 on Windows, including
64-bit Windows systems.

## 5. Common OS Module Methods

| Method | Description |
|--------|-------------|
| os.platform() | Operating system platform |
| os.arch() | CPU architecture |
| os.hostname() | System hostname |
| os.type() | Operating system name |
| os.release() | Operating system release |
| os.totalmem() | Total system memory in bytes |
| os.freemem() | Available system memory in bytes |
| os.cpus() | Logical CPU information |
| os.homedir() | User home directory |
| os.uptime() | System uptime in seconds |
| os.userInfo() | Current user information |
| os.tmpdir() | Temporary directory |

### Practical Example

```javascript
const os = require('node:os');

console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());

console.log("Hostname:", os.hostname());

console.log("Operating System:", os.type());

console.log("Logical CPUs:", os.cpus().length);

console.log("Home Directory:", os.homedir());

console.log(
    "Total Memory:",
    (os.totalmem() / 1024 ** 3).toFixed(2),
    "GB"
);

console.log(
    "Free Memory:",
    (os.freemem() / 1024 ** 3).toFixed(2),
    "GB"
);
```

## 6. Introduction to Callback Functions

A callback is a function passed as an argument to another function so that it can be invoked when required.

Callbacks are commonly used in asynchronous Node.js operations.

A callback can also be executed synchronously,
depending on the implementation.

### Basic Callback Example

```javascript
function greet(name, callback) {

    console.log("Hello " + name);

    callback();

}

greet("Developer", () => {

    console.log("Callback executed");

});
```

### Output

```text
Hello Developer
Callback executed
```

## 7. Asynchronous Callback Example

```javascript
console.log("Task Started");

setTimeout(() => {

    console.log("Task Completed");

}, 2000);

console.log("Continue Execution");
```

### Output

```text
Task Started
Continue Execution
Task Completed
```

### Explanation

1. The first statement executes.
2. The timer is scheduled.
3. JavaScript continues executing subsequent statements.
4. The callback executes when the timer becomes eligible and the event loop can process it.

## 8. Error-First Callback Pattern

Many asynchronous Node.js APIs follow the error-first callback convention.

### Syntax

```javascript
function callback(error, result) {

    if (error) {
        console.error(error);
        return;
    }

    console.log(result);

}
```

The first argument represents an error.

The second argument represents the result of the operation.

### Example

```javascript
const fs = require('node:fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {

    if (err) {
        console.error("Error:", err.message);
        return;
    }

    console.log(data);

});
```

## 9. Introduction to File System Module (fs)

The File System module allows Node.js applications to interact with files and directories.

It supports synchronous, asynchronous callback-based and Promise-based operations.

### Import File System Module

```javascript
const fs = require('node:fs');
```

### Common File System Methods

| Method | Purpose |
|--------|---------|
| fs.writeFile() | Creates or overwrites a file |
| fs.appendFile() | Adds content to a file |
| fs.readFile() | Reads a file asynchronously |
| fs.readFileSync() | Reads a file synchronously |
| fs.unlink() | Deletes a file |
| fs.rename() | Renames or moves a file |
| fs.mkdir() | Creates a directory |
| fs.readdir() | Reads directory contents |
| fs.stat() | Retrieves file information |
| fs.copyFile() | Copies a file |
| fs.existsSync() | Checks whether a path exists |
| fs.rm() | Removes files or directories |

## 10. Create or Write a File - writeFile()

The writeFile() method creates a file if it does not exist.

If the file already exists, its content is overwritten by default.

```javascript
const fs = require('node:fs');

fs.writeFile(
    'sample.txt',
    'Welcome to Node.js',
    'utf8',
    (err) => {

        if (err) {
            console.error(err.message);
            return;
        }

        console.log("File created successfully");

    }
);
```

### Output

```text
File created successfully
```

### sample.txt

```text
Welcome to Node.js
```

## 11. Append Content - appendFile()

The appendFile() method adds new content to the end of an existing file.

If the file does not exist, it creates the file.

```javascript
const fs = require('node:fs');

fs.appendFile(
    'sample.txt',
    '\nLearning File System Module',
    'utf8',
    (err) => {

        if (err) {
            console.error(err.message);
            return;
        }

        console.log("Content appended successfully");

    }
);
```

### File Content

```text
Welcome to Node.js
Learning File System Module
```

## 12. Read File Asynchronously - readFile()

The readFile() method reads the entire file asynchronously.

It allows JavaScript to continue executing while the file operation is being performed.

```javascript
const fs = require('node:fs');

console.log("Reading Started");

fs.readFile('sample.txt', 'utf8', (err, data) => {

    if (err) {
        console.error(err.message);
        return;
    }

    console.log(data);

});

console.log("Reading Requested");
```

### Output

```text
Reading Started
Reading Requested
Welcome to Node.js
Learning File System Module
```

## 13. Read File Synchronously - readFileSync()

The readFileSync() method blocks the main JavaScript thread until the file-reading operation is completed.

```javascript
const fs = require('node:fs');

console.log("Reading Started");

try {

    const data = fs.readFileSync(
        'sample.txt',
        'utf8'
    );

    console.log(data);

} catch (err) {

    console.error(err.message);

}

console.log("Reading Completed");
```

### Output

```text
Reading Started
Welcome to Node.js
Learning File System Module
Reading Completed
```

## 14. readFile() vs readFileSync()

| readFile() | readFileSync() |
|------------|----------------|
| Asynchronous | Synchronous |
| Non-blocking file operation | Blocking file operation |
| Uses a callback | Returns the file content directly |
| Errors handled through callback | Errors handled using try-catch |
| Suitable for concurrent servers | Useful for simple scripts and startup tasks |
| Allows other JavaScript execution | Blocks subsequent JavaScript execution |

### Important Interview Point

Asynchronous file operations are generally preferred
inside HTTP request handlers because synchronous
operations can block the event loop and delay
other requests.

## 15. Rename a File - rename()

The rename() method renames or moves a file.

```javascript
const fs = require('node:fs');

fs.rename(
    'sample.txt',
    'learning.txt',
    (err) => {

        if (err) {
            console.error(err.message);
            return;
        }

        console.log("File renamed successfully");

    }
);
```

### Output

```text
File renamed successfully
```

## 16. Delete a File - unlink()

The unlink() method removes a file.

```javascript
const fs = require('node:fs');

fs.unlink('learning.txt', (err) => {

    if (err) {
        console.error(err.message);
        return;
    }

    console.log("File deleted successfully");

});
```

### Output

```text
File deleted successfully
```

## 17. Create a Directory - mkdir()

```javascript
const fs = require('node:fs');

fs.mkdir('documents', { recursive: true }, (err) => {

    if (err) {
        console.error(err.message);
        return;
    }

    console.log("Directory created successfully");

});
```

## 18. Read Directory Contents - readdir()

```javascript
const fs = require('node:fs');

fs.readdir('./', (err, files) => {

    if (err) {
        console.error(err.message);
        return;
    }

    console.log(files);

});
```

## 19. Understanding Buffer in Node.js

A Buffer is a Node.js object used to represent a fixed-length sequence of bytes.

It is commonly used to handle binary data.

### Common Use Cases

- Reading files.
- Network communication.
- Image processing.
- Audio and video processing.
- Binary data manipulation.
- Data streaming.

### Read File Without Encoding

```javascript
const fs = require('node:fs');

fs.readFile('sample.txt', (err, data) => {

    if (err) {
        console.error(err.message);
        return;
    }

    console.log(data);

});
```

If sample.txt contains Hello, the output will be:

```text
<Buffer 48 65 6c 6c 6f>
```

The displayed hexadecimal values represent the bytes
of the file content.

### Read File With Encoding

```javascript
const fs = require('node:fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {

    if (err) {
        console.error(err.message);
        return;
    }

    console.log(data);

});
```

### Output

```text
Hello
```

## 20. Creating a Buffer

```javascript
const buffer = Buffer.from('Hello', 'utf8');

console.log(buffer);
```

### Output

```text
<Buffer 48 65 6c 6c 6f>
```

## 21. Convert Buffer to String

```javascript
const buffer = Buffer.from('Hello Node.js');

console.log(buffer.toString('utf8'));
```

### Output

```text
Hello Node.js
```

## 22. Common Buffer Methods

| Method | Description |
|--------|-------------|
| Buffer.from() | Creates a Buffer from existing data |
| Buffer.alloc() | Creates a zero-filled Buffer |
| Buffer.isBuffer() | Checks whether a value is a Buffer |
| Buffer.concat() | Combines multiple Buffers |
| Buffer.byteLength() | Returns the byte length of a string |
| buffer.toString() | Converts Buffer data to a string |
| buffer.length | Returns the number of bytes |

## 23. Understanding Character Encoding

Character encoding defines how text characters are represented as bytes.

### Common Encodings

| Encoding | Description |
|----------|-------------|
| utf8 | Common Unicode text encoding |
| ascii | Basic ASCII character encoding |
| utf16le | UTF-16 little-endian encoding |
| hex | Hexadecimal representation |
| base64 | Binary-to-text representation |

UTF-8 is commonly used when reading and writing text files.

## 24. Promise-Based File System Operations

Modern Node.js also provides Promise-based file system APIs.

These APIs work with async and await and help simplify asynchronous code.

```javascript
const fs = require('node:fs/promises');

async function readData() {

    try {

        const data = await fs.readFile(
            'sample.txt',
            'utf8'
        );

        console.log(data);

    } catch (err) {

        console.error(err.message);

    }

}

readData();
```

## 25. Complete File System CRUD Example

CRUD stands for:

- Create
- Read
- Update
- Delete

```javascript
const fs = require('node:fs/promises');

async function fileOperations() {

    try {

        // Create
        await fs.writeFile(
            'student.txt',
            'Student Name: John',
            'utf8'
        );

        console.log("File created");

        // Read
        const data = await fs.readFile(
            'student.txt',
            'utf8'
        );

        console.log(data);

        // Update
        await fs.appendFile(
            'student.txt',
            '\nCourse: Node.js',
            'utf8'
        );

        console.log("File updated");

        // Rename
        await fs.rename(
            'student.txt',
            'student-details.txt'
        );

        console.log("File renamed");

        // Delete
        await fs.unlink('student-details.txt');

        console.log("File deleted");

    } catch (err) {

        console.error(err.message);

    }

}

fileOperations();
```

### Expected Output

```text
File created
Student Name: John
File updated
File renamed
File deleted
```

Using await ensures that each file operation
completes before the next operation starts.

## 26. Callback vs Promise vs Async/Await

| Callback | Promise | Async/Await |
|----------|---------|-------------|
| Function passed as an argument | Represents eventual completion or failure | Syntax for working with Promises |
| Can cause nested callbacks | Supports chaining | Improves readability |
| Error-first callback pattern | Uses then() and catch() | Uses try-catch |
| Traditional Node.js pattern | Modern asynchronous pattern | Common in modern applications |

## 27. File System Best Practices

- Prefer asynchronous operations in server applications.
- Always handle file operation errors.
- Specify UTF-8 encoding when reading text files.
- Use Buffer when handling binary data.
- Use async/await for readable asynchronous workflows.
- Use the path module for cross-platform file paths.
- Avoid exposing sensitive files.
- Validate user-provided file paths.
- Use streams for large files to reduce memory consumption.

---

# Day 07 - HTTP Module, Static APIs, npm Scripts and Nodemon

## 1. Introduction to HTTP

HTTP stands for Hypertext Transfer Protocol.

It is an application-layer protocol used for communication between clients and servers.

HTTP is commonly used in web applications, REST APIs and distributed systems.

### HTTP Communication Architecture

```text
        Client / Browser
               |
          HTTP Request
               |
               v
          HTTP Server
               |
        Request Processing
               |
               v
         HTTP Response
               |
               v
        Client / Browser
```

## 2. Node.js HTTP Module

Node.js provides a built-in HTTP module for creating web servers and handling HTTP requests.

The HTTP module does not require installation using npm.

### Import HTTP Module

```javascript
const http = require('node:http');
```

### Responsibilities

- Creating HTTP servers.
- Receiving client requests.
- Sending HTTP responses.
- Handling request methods.
- Processing request URLs.
- Configuring HTTP headers.
- Returning status codes.

## 3. Create First HTTP Server

### server.js

```javascript
const http = require('node:http');

const port = 7600;

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader(
        'Content-Type',
        'text/plain; charset=utf-8'
    );

    res.end('Hello from Node.js HTTP Server');

});

server.listen(port, () => {

    console.log(
        `Server is running on port ${port}`
    );

});
```

### Run the Server

```bash
node server.js
```

### Console Output

```text
Server is running on port 7600
```

### Open in Browser

```text
http://localhost:7600/
```

### Browser Output

```text
Hello from Node.js HTTP Server
```

## 4. Understanding HTTP Server Methods

| Method | Description |
|--------|-------------|
| http.createServer() | Creates an HTTP server |
| server.listen() | Starts listening for requests |
| server.close() | Stops accepting new connections |
| res.write() | Writes response data |
| res.end() | Completes the response |
| res.setHeader() | Configures response headers |
| res.writeHead() | Sets status code and response headers |

## 5. Understanding Request and Response Objects

### Request Object (req)

Contains information about the incoming client request.

| Property | Description |
|----------|-------------|
| req.url | Requested URL |
| req.method | HTTP request method |
| req.headers | Incoming HTTP headers |

### Response Object (res)

Used to send information back to the client.

| Property or Method | Description |
|--------------------|-------------|
| res.statusCode | HTTP response status code |
| res.setHeader() | Sets response headers |
| res.write() | Writes response content |
| res.end() | Completes the response |

## 6. Common HTTP Methods

| Method | Purpose |
|--------|---------|
| GET | Retrieve data |
| POST | Submit or create data |
| PUT | Replace an existing resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |
| HEAD | Retrieve response headers |
| OPTIONS | Retrieve communication options |

## 7. Common HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 409 | Conflict |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

### Status Code Categories

| Range | Category |
|-------|----------|
| 100-199 | Informational |
| 200-299 | Successful |
| 300-399 | Redirection |
| 400-499 | Client Error |
| 500-599 | Server Error |

## 8. Understanding localhost and Port

### localhost

localhost refers to the local computer.

It commonly resolves to the loopback addresses
127.0.0.1 or ::1.

### Port

A port identifies a network service or application
endpoint on a computer.

### Example

```text
http://localhost:7600/
```

| Component | Value |
|-----------|-------|
| Protocol | HTTP |
| Hostname | localhost |
| Port | 7600 |
| Path | / |

## 9. Introduction to APIs

API stands for Application Programming Interface.

An API allows different software applications to communicate and exchange information.

### API Communication

```text
Frontend Application
         |
      API Request
         |
         v
Backend Application
         |
      API Response
         |
         v
Frontend Application
```

## 10. Static API

In this learning example, a static API refers to an
API that returns predefined or hardcoded data.

It does not retrieve information from a database.

### Characteristics

- Returns predefined data.
- Useful for frontend development and testing.
- Easy to implement.
- Does not require database configuration.
- Useful for mock API development.
- Can later be integrated with a database.

## 11. Create a Static JSON API

### startapi.js

```javascript
const http = require('node:http');

const port = 7600;

const employees = [
    {
        id: 1,
        name: "John",
        designation: "Software Developer"
    },
    {
        id: 2,
        name: "David",
        designation: "Backend Developer"
    },
    {
        id: 3,
        name: "Robert",
        designation: "Full Stack Developer"
    }
];

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(employees));

});

server.listen(port, () => {

    console.log(
        `Server is running on port ${port}`
    );

});
```

### Run the Application

```bash
node startapi.js
```

### API URL

```text
http://localhost:7600/
```

### JSON Response

```json
[
    {
        "id": 1,
        "name": "John",
        "designation": "Software Developer"
    },
    {
        "id": 2,
        "name": "David",
        "designation": "Backend Developer"
    },
    {
        "id": 3,
        "name": "Robert",
        "designation": "Full Stack Developer"
    }
]
```

## 12. Understanding JSON.stringify()

The JSON.stringify() method converts JavaScript
objects or arrays into JSON strings.

HTTP responses can contain strings or binary data.

Therefore, JavaScript objects are commonly serialized
into JSON before being sent as an HTTP response.

```javascript
const employee = {
    id: 101,
    name: "John"
};

console.log(JSON.stringify(employee));
```

### Output

```json
{"id":101,"name":"John"}
```

## 13. Creating Multiple API Routes Using HTTP

Routing is possible using the built-in HTTP module.

However, routes must be handled manually using
request URLs and HTTP methods.

### Example

```javascript
const http = require('node:http');

const port = 7600;

const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "David" }
];

const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mobile" }
];

const server = http.createServer((req, res) => {

    res.setHeader(
        'Content-Type',
        'application/json'
    );

    if (req.method !== 'GET') {

        res.statusCode = 405;

        res.setHeader('Allow', 'GET');

        return res.end(JSON.stringify({
            message: "Method Not Allowed"
        }));

    }

    if (req.url === '/') {

        res.statusCode = 200;

        res.end(JSON.stringify({
            message: "Welcome to Node.js API"
        }));

    } else if (req.url === '/employees') {

        res.statusCode = 200;

        res.end(JSON.stringify(employees));

    } else if (req.url === '/products') {

        res.statusCode = 200;

        res.end(JSON.stringify(products));

    } else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            message: "Route Not Found"
        }));

    }

});

server.listen(port, () => {

    console.log(
        `Server is running on port ${port}`
    );

});
```

### Available API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Welcome message |
| GET | /employees | Returns employee data |
| GET | /products | Returns product data |
| GET | Unknown route | Returns 404 response |

This is a simplified routing example. Production
applications should also handle URL parsing,
query parameters and input validation.

## 14. Static API vs Dynamic API

| Static API | Dynamic API |
|------------|-------------|
| Returns predefined data | Returns dynamically generated data |
| Often uses hardcoded values | May use databases or external services |
| Simple implementation | More complex business logic |
| Useful for mock applications | Useful for real-world applications |
| Data usually changed in source code | Data can change during runtime |

A dynamic API does not necessarily require a database.
It may generate responses from calculations, external
services or other runtime information.

## 15. HTTP Module vs Express.js

| HTTP Module | Express.js |
|-------------|------------|
| Built-in Node.js module | Third-party web framework |
| No npm installation required | Requires npm installation |
| Manual routing | Simplified routing |
| Manual request processing | Middleware support |
| More boilerplate code | Less boilerplate code |
| Low-level HTTP functionality | Higher-level web functionality |
| Manual response serialization | Convenient JSON response methods |

Express.js is built on top of Node.js HTTP functionality
and simplifies web application and REST API development.

## 16. Initialize Node.js Project

```bash
npm init --yes
```

Or:

```bash
npm init -y
```

Both commands initialize a project using default configuration values.

## 17. Understanding npm Scripts

npm scripts allow developers to define reusable commands inside package.json.

Instead of manually typing long commands, developers can execute predefined scripts.

### package.json

```json
{
    "name": "static-api",
    "version": "1.0.0",
    "description": "Learning Node.js HTTP module",
    "main": "startapi.js",
    "type": "commonjs",
    "scripts": {
        "start": "node startapi.js"
    }
}
```

### Start Application

```bash
npm start
```

The npm start command executes the start script
defined inside package.json.

### Equivalent Command

```bash
node startapi.js
```

## 18. npm start vs npm run

Some npm scripts have built-in shortcut commands.

### Start Script

```bash
npm start
```

### Test Script

```bash
npm test
```

### Custom Development Script

```bash
npm run dev
```

### Custom Build Script

```bash
npm run build
```

### Comparison

| Command | Description |
|---------|-------------|
| npm start | Executes start script |
| npm test | Executes test script |
| npm run dev | Executes custom dev script |
| npm run build | Executes custom build script |
| npm run | Lists available project scripts |

Custom scripts generally require the run keyword.

The start and test scripts support shortcut commands.

## 19. Introduction to Nodemon

Nodemon is a development utility that monitors source code changes and automatically restarts a Node.js application.

### Without Nodemon

```text
Modify Source Code
        |
Stop Running Server
        |
Restart Server Manually
        |
Test Changes
```

### With Nodemon

```text
Modify Source Code
        |
Nodemon Detects Changes
        |
Server Restarts Automatically
        |
Test Changes
```

### Advantages

- Automatically restarts the application.
- Improves development productivity.
- Reduces manual server restarts.
- Supports configurable file monitoring.
- Useful during continuous development.

## 20. Install Nodemon Globally

```bash
npm install -g nodemon
```

Or:

```bash
npm i -g nodemon
```

On Windows, administrator permission may be required
if the global npm installation directory is protected.

### Verify Installation

```bash
nodemon --version
```

### Run Application

```bash
nodemon startapi.js
```

Whenever monitored source files change, Nodemon
automatically restarts the Node.js process.

## 21. Install Nodemon Locally

Installing Nodemon as a development dependency is generally recommended for team projects.

```bash
npm install --save-dev nodemon
```

Or:

```bash
npm i -D nodemon
```

### Benefits

- Recorded in package.json.
- Maintains consistent versions across developers.
- Does not require global installation.
- Can be executed through npm scripts.
- Can be omitted from the production runtime.

## 22. Configure Development and Production Scripts

### package.json

```json
{
    "name": "static-api",
    "version": "1.0.0",
    "description": "Node.js static API",
    "main": "startapi.js",
    "type": "commonjs",
    "scripts": {
        "start": "node startapi.js",
        "dev": "nodemon startapi.js"
    }
}
```

Install Nodemon to automatically add it to devDependencies.

```bash
npm i -D nodemon
```

### Development Mode

```bash
npm run dev
```

### Normal Application Execution

```bash
npm start
```

### Install Project Dependencies

```bash
npm install
```

## 23. Node.js vs Nodemon

| Node.js | Nodemon |
|---------|---------|
| JavaScript runtime | Development utility |
| Executes JavaScript applications | Monitors and restarts applications |
| Does not restart automatically by default | Restarts on monitored file changes |
| Used during development and production | Primarily used during development |
| node app.js | nodemon app.js |

## 24. Node.js Built-in Watch Mode

Modern Node.js versions also provide built-in watch mode.

```bash
node --watch startapi.js
```

This allows Node.js to restart the application when
monitored source files change without installing Nodemon.

### Alternative npm Script

```json
{
    "scripts": {
        "start": "node startapi.js",
        "dev": "node --watch startapi.js"
    }
}
```

Nodemon remains useful when additional monitoring
configuration is required.

## 25. Final Project Structure

```text
StaticAPI/
│
├── node_modules/
├── startapi.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### .gitignore

```gitignore
node_modules/

.env
.env.*

!.env.example

*.log
dist/
coverage/
```

## 26. Complete Application Execution Workflow

```text
Create Project Folder
          |
          v
      npm init -y
          |
          v
    Create startapi.js
          |
          v
 Import Built-in HTTP Module
          |
          v
      Create Server
          |
          v
     Define API Routes
          |
          v
    Install Nodemon
          |
          v
   Configure npm Scripts
          |
          v
      npm run dev
          |
          v
 http://localhost:7600/
          |
          v
     Receive Response
```

## 27. Common Server Errors

| Error | Reason | Solution |
|-------|--------|----------|
| EADDRINUSE | Port already in use | Stop the existing process or change port |
| MODULE_NOT_FOUND | Module cannot be resolved | Check imports and install dependencies |
| ENOENT | File or directory not found | Verify the file path |
| EACCES | Permission denied | Check file or directory permissions |
| Cannot GET | Requested route is not handled | Verify routing configuration |
| nodemon not recognized | Command unavailable on PATH | Install locally and use npm scripts |

## 28. Industry Best Practices

- Use appropriate HTTP methods.
- Return meaningful HTTP status codes.
- Configure correct Content-Type headers.
- Handle unknown routes.
- Avoid blocking the event loop.
- Prefer local development dependencies.
- Use npm scripts for consistent application execution.
- Use Nodemon or watch mode during development.
- Store configurable ports in environment variables.
- Avoid hardcoding sensitive information.
- Use Express.js for more complex API development.
- Use appropriate process management in production.

---

# Interview Questions - Day 05 to Day 07

## Dependency Management

### 1. What is the difference between local and global packages?

Local packages are installed for a specific project.

Global packages are installed in npm's global
directory and are commonly used as CLI tools.

### 2. What is the difference between dependencies and devDependencies?

dependencies are generally required during runtime.

devDependencies are primarily required during
development, testing and building.

### 3. How do you install only production dependencies?

```bash
npm ci --omit=dev
```

### 4. Does global installation update package.json?

No. Global package installation does not automatically
update the current project's package.json.

### 5. What is Chai?

Chai is a JavaScript assertion library commonly used
in automated testing.

## Built-in Modules and File System

### 6. What are built-in modules?

Modules provided by the Node.js runtime that do not
require separate npm installation.

Examples include fs, os, http and path.

### 7. What is a callback function?

A function passed to another function to be invoked
when required.

### 8. What is an error-first callback?

A callback convention where the first argument
represents an error and subsequent arguments
represent successful results.

### 9. What is the difference between writeFile and appendFile?

writeFile creates or overwrites file content by default.

appendFile adds content to the end of a file.

### 10. What is the difference between readFile and readFileSync?

readFile performs asynchronous file reading.

readFileSync blocks execution until reading completes.

### 11. What is Buffer in Node.js?

Buffer represents a sequence of bytes and is commonly
used for binary data operations.

### 12. Why does readFile return a Buffer?

When no text encoding is specified, readFile returns
the raw file bytes as a Buffer.

### 13. How do you convert Buffer into a string?

```javascript
buffer.toString('utf8');
```

### 14. What is the difference between unlink and rename?

unlink removes a file.

rename renames or moves a file.

## HTTP and API Development

### 15. What is the HTTP module?

A built-in Node.js module used to create HTTP servers
and clients.

### 16. What is the difference between req and res?

req contains incoming request information.

res is used to construct and send the response.

### 17. Can we create routes without Express.js?

Yes. Routes can be implemented manually using
req.url and req.method.

Express.js simplifies this process.

### 18. What is a static API?

In this example, an API that returns predefined
or hardcoded data.

### 19. Why do we use JSON.stringify()?

To serialize JavaScript values into JSON strings
for data storage or transmission.

### 20. What is Nodemon?

A development utility that automatically restarts
Node.js applications when monitored files change.

### 21. What is the difference between npm start and npm run dev?

npm start executes the start script.

npm run dev executes a custom development script.

### 22. Is Nodemon required in production?

Generally no. Nodemon is primarily intended for
development environments.

### 23. What happens if two servers use the same port?

The second server may fail with an EADDRINUSE error
if the requested address and port are already occupied.

### 24. What is the difference between HTTP and Express.js?

HTTP provides low-level server functionality.

Express.js provides higher-level routing, middleware
and request-response utilities.

### 25. Can Node.js restart automatically without Nodemon?

Yes. Modern Node.js versions support watch mode.

```bash
node --watch app.js
```

---

# Updated Learning Progress

| Day | Topic | Status |
|-----|-------|--------|
| Day 01 | Introduction to Full Stack Development | Completed |
| Day 02 | Node.js Setup and Architecture | Completed |
| Day 03 | npm, JSON, package.json and Git | Completed |
| Day 04 | Dependency Management and Development Tools | Completed |
| Day 05 | Local, Global and Development Dependencies | Completed |
| Day 06 | Built-in Modules, Callbacks, File System and Buffer | Completed |
| Day 07 | HTTP Server, Static API, npm Scripts and Nodemon | Completed |
| Day 08 | Express.js, Routing, ES6 and Environment Variables | Completed |

---

# Official Documentation

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Node.js File System](https://nodejs.org/api/fs.html)
- [Node.js OS Module](https://nodejs.org/api/os.html)
- [Node.js Buffer](https://nodejs.org/api/buffer.html)
- [Node.js HTTP Module](https://nodejs.org/api/http.html)
- [npm Documentation](https://docs.npmjs.com/)
- [Nodemon](https://github.com/remy/nodemon)
- [Chai Documentation](https://www.chaijs.com/)
- [Mocha Documentation](https://mochajs.org/)

---

**Learn. Practice. Build. Improve. Repeat.**
