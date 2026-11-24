
# Node.js - Backend Development Learning Journey

## About This Repository

This repository documents my day-wise learning journey in Node.js and Backend Development. It contains fundamental concepts, practical implementations, technical explanations, development tools, important commands and industry best practices.

The objective of this repository is to build a strong foundation in backend development and gradually progress toward building scalable, secure and production-ready applications.

## Learning Roadmap

| Day | Topic | Status |
|-----|-------|--------|
| Day 01 | Introduction to Full Stack Development | Completed |
| Day 02 | Node.js Setup and Architecture | Completed |
| Day 03 | npm, JSON, package.json and Git | Completed |
| Day 04 | Dependency Management and Development Tools | Completed |

---

# Day 01 - Introduction to Full Stack Development

## 1. What is Full Stack Development?

Full Stack Development refers to the development of both client-side and server-side components of a software application, including database integration and application deployment.

A complete application generally consists of four major layers.

### Full Stack Architecture

```text
              User / Client
                    |
                    v
                 Frontend
                    |
               HTTP / REST API
                    |
                    v
                 Backend
                    |
                    v
                 Database

Cloud Infrastructure:
Hosting, Networking, Security,
Storage, Monitoring and Deployment
```

## 2. Components of Full Stack Development

| Layer | Responsibility | Technologies |
|-------|----------------|--------------|
| Frontend | User interface and user experience | HTML, CSS, JavaScript, React, Angular |
| Backend | Business logic, authentication and APIs | Node.js, Express.js, .NET, Java |
| Database | Data storage and management | MongoDB, MySQL, PostgreSQL, SQL Server |
| Cloud | Deployment, hosting and infrastructure | AWS, Azure, GCP |

## 3. Frontend Development

Frontend development focuses on the part of an application with which users directly interact.

### Responsibilities

- Designing user interfaces.
- Handling user interactions.
- Form validation.
- Calling backend APIs.
- Displaying dynamic data.
- Managing application state.
- Creating responsive layouts.

## 4. Backend Development

Backend development focuses on server-side application functionality.

### Responsibilities

- Implementing business logic.
- Creating REST APIs.
- Authentication and authorization.
- Database communication.
- Data validation.
- Error handling.
- Security.
- Application performance.

## 5. Database

A database is an organized collection of data that allows applications to store, retrieve, update and delete information.

### Types of Databases

| SQL Database | NoSQL Database |
|--------------|----------------|
| Relational database | Non-relational database |
| Usually table-based | Document, key-value, graph or column-based |
| Typically predefined schema | Often flexible schema |
| SQL Server, MySQL | MongoDB, Redis |
| Supports relational queries | Supports different data models |

## 6. Cloud Computing

Cloud computing provides computing resources over the internet without requiring organizations to maintain all physical infrastructure themselves.

### Cloud Services

- Application hosting.
- Virtual machines.
- Database services.
- File storage.
- Serverless computing.
- Load balancing.
- Monitoring.
- CI/CD pipelines.

### Popular Cloud Providers

- Amazon Web Services (AWS)
- Microsoft Azure
- Google Cloud Platform (GCP)

## 7. Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment built on Google's V8 JavaScript engine.

It allows developers to execute JavaScript outside the browser.

### Why Node.js?

- JavaScript can be used for both frontend and backend.
- Supports asynchronous programming.
- Provides non-blocking I/O operations.
- Suitable for I/O-intensive applications.
- Large npm ecosystem.
- Supports scalable network applications.
- Suitable for real-time communication.

### Common Use Cases

- REST APIs
- Microservices
- Real-time chat applications
- Streaming applications
- E-commerce platforms
- Backend automation
- WebSocket applications

### Important Interview Point

Node.js is not a programming language or a framework.

It is a JavaScript runtime environment.

Express.js is a web application framework that runs on Node.js.

---

# Day 02 - Environment Setup and Node.js Architecture

## 1. Development Environment Setup

### Required Software

| Software | Purpose |
|----------|---------|
| Visual Studio Code | Source code editor |
| Node.js LTS | JavaScript runtime environment |
| npm | Package management |
| Git | Version control |
| Git Bash | Command-line interface |
| GitHub | Remote repository hosting |
| Google Chrome | Browser and debugging |

### Official Resources

- Node.js: https://nodejs.org/
- Visual Studio Code: https://code.visualstudio.com/
- Git: https://git-scm.com/
- GitHub: https://github.com/
- npm: https://www.npmjs.com/

## 2. Verify Installation

### Check Node.js Version

```bash
node -v
```

### Check npm Version

```bash
npm -v
```

### Check Git Version

```bash
git --version
```

### What is LTS?

LTS stands for Long-Term Support.

Node.js LTS versions receive maintenance, security updates and bug fixes for an extended period.

LTS versions are generally preferred for production applications because of their stability and support lifecycle.

## 3. Create First Node.js Application

Create a file named `index.js`.

```javascript
console.log("Hello from Node.js");
```

Execute the application:

```bash
node index.js
```

### Output

```text
Hello from Node.js
```

## 4. Core Features of Node.js

| Feature | Description |
|---------|-------------|
| Single Threaded | JavaScript executes primarily on a single main thread |
| Asynchronous | Operations can complete without blocking subsequent code |
| Non-blocking I/O | I/O operations do not unnecessarily block the main thread |
| Event Driven | Application execution is driven by events |
| Event Loop | Coordinates callbacks and asynchronous operations |
| Cross Platform | Supports Windows, Linux and macOS |
| V8 Engine | Compiles and executes JavaScript |
| Scalable | Efficiently handles concurrent I/O operations |

## 5. Node.js Internal Architecture

Node.js consists of several important components.

### V8 Engine

Google's JavaScript engine responsible for executing JavaScript code.

### libuv

A cross-platform library that provides asynchronous I/O capabilities, an event loop and a worker thread pool.

### Call Stack

Stores and executes JavaScript function calls.

### Event Loop

Coordinates asynchronous callbacks and determines when they can execute.

### Callback Queues

Contain callbacks waiting to be executed.

### Worker Thread Pool

Handles certain operations that cannot be performed efficiently through non-blocking operating system facilities.

Examples include:

- File system operations.
- Certain DNS operations.
- Cryptographic operations.
- Compression operations.

## 6. Simplified Node.js Architecture

```text
               Client Requests
                      |
                      v
               Node.js Runtime
                      |
                      v
              JavaScript / V8
                      |
                      v
                  Call Stack
                      |
             Asynchronous Operation
                      |
                      v
                    libuv
                      |
           +----------+----------+
           |                     |
           v                     v
     Operating System      Thread Pool
           |                     |
           +----------+----------+
                      |
                      v
              Callback Queues
                      |
                      v
                 Event Loop
                      |
                      v
                  Call Stack
```

## 7. Synchronous Programming

In synchronous programming, operations execute sequentially.

An operation must finish before the next synchronous operation executes.

```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

### Output

```text
Task 1
Task 2
Task 3
```

## 8. Asynchronous Programming

Asynchronous programming allows operations to complete later without blocking subsequent JavaScript execution.

```javascript
console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 2000);

console.log("Task 3");
```

### Output

```text
Task 1
Task 3
Task 2
```

### Explanation

1. Task 1 executes immediately.
2. The timer is scheduled.
3. Task 3 executes without waiting for the timer.
4. Task 2 executes when the timer callback becomes eligible and the call stack is available.

## 9. Blocking vs Non-blocking I/O

### Blocking File Operation

```javascript
const fs = require('fs');

console.log("Start");

const data = fs.readFileSync('sample.txt', 'utf8');

console.log(data);
console.log("End");
```

The main JavaScript thread waits until the file-reading operation completes.

### Non-blocking File Operation

```javascript
const fs = require('fs');

console.log("Start");

fs.readFile('sample.txt', 'utf8', (err, data) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

console.log("End");
```

The application continues executing while the file is being read.

## 10. Synchronous vs Asynchronous

| Synchronous | Asynchronous |
|-------------|--------------|
| Sequential execution | Completion can occur later |
| May block execution | Can avoid blocking execution |
| Waits for operation completion | Can continue with other operations |
| Simpler execution flow | Requires asynchronous handling |
| May reduce concurrency | Improves I/O concurrency |

## 11. Important Interview Questions

### Is Node.js single-threaded?

JavaScript execution primarily occurs on a single main thread. However, Node.js also uses operating system facilities, a libuv thread pool and optional worker threads.

### How does Node.js handle multiple requests?

Node.js uses an event-driven architecture, non-blocking I/O and the event loop to efficiently manage concurrent operations.

### Is Node.js suitable for CPU-intensive applications?

CPU-intensive JavaScript operations can block the event loop.

Worker threads, separate processes or external services can be used to handle CPU-intensive workloads.

---

# Day 03 - npm, JSON, package.json and Git

## 1. Introduction to npm

npm is commonly referred to as Node Package Manager.

It is the default package management ecosystem distributed with Node.js.

npm provides:

- Package installation.
- Dependency management.
- Package version management.
- Script execution.
- Package publishing.
- Access to reusable JavaScript libraries.

## 2. Common npm Commands

| Command | Description |
|---------|-------------|
| npm -v | Check npm version |
| npm init | Initialize a Node.js project |
| npm init -y | Initialize with default configuration |
| npm install | Install project dependencies |
| npm i package-name | Install a specific package |
| npm uninstall package-name | Remove a package |
| npm update | Update packages within applicable constraints |
| npm list | Display installed dependencies |
| npm outdated | Check outdated packages |
| npm audit | Check known dependency vulnerabilities |
| npm run script-name | Execute a custom script |
| npm start | Execute the start script |
| npm test | Execute the test script |

## 3. Local vs Global Package Installation

### Local Installation

```bash
npm install express
```

Installs the package for the current project.

### Global Installation

```bash
npm install -g nodemon
```

Installs the package globally for command-line usage.

### Development Dependency

```bash
npm install -D nodemon
```

Installs the package as a development dependency.

Project-local development dependencies are generally preferred for consistent development environments.

## 4. Introduction to JSON

JSON stands for JavaScript Object Notation.

It is a lightweight, language-independent, text-based data exchange format.

JSON is widely used in:

- REST APIs.
- Configuration files.
- Client-server communication.
- Data serialization.
- Application settings.
- Document databases.

### Basic JSON Syntax

```json
{
    "key": "value"
}
```

### JSON Example

```json
{
    "id": 101,
    "name": "John",
    "designation": "Software Developer",
    "experience": 2,
    "isActive": true,
    "skills": [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB"
    ],
    "address": {
        "city": "Bangalore",
        "country": "India"
    },
    "manager": null
}
```

## 5. JSON Supported Data Types

| Data Type | Example |
|-----------|---------|
| String | "Node.js" |
| Number | 100 |
| Boolean | true |
| Object | {"name": "John"} |
| Array | ["Node.js", "React"] |
| Null | null |

### JSON Rules

- Property names must use double quotes.
- String values must use double quotes.
- Trailing commas are not allowed.
- Comments are not supported.
- Functions are not supported.
- Undefined is not a valid JSON value.

## 6. JavaScript Object vs JSON

| JavaScript Object | JSON |
|-------------------|------|
| JavaScript data structure | Text-based data format |
| Property quotes may be optional | Property names require double quotes |
| Supports functions | Does not support functions |
| Supports undefined | Does not support undefined |
| Used inside JavaScript programs | Used for data storage and exchange |

## 7. JSON Serialization and Deserialization

### JSON.stringify()

Converts a JavaScript value into a JSON string when the value is serializable.

```javascript
const employee = {
    name: "John",
    experience: 2
};

const jsonData = JSON.stringify(employee);

console.log(jsonData);
```

### JSON.parse()

Converts a valid JSON string into a JavaScript value.

```javascript
const jsonData = '{"name":"John","experience":2}';

const employee = JSON.parse(jsonData);

console.log(employee.name);
```

### Output

```text
John
```

## 8. Understanding package.json

The `package.json` file is the manifest and configuration file of a Node.js project.

It contains:

- Project metadata.
- Package entry point.
- Dependencies.
- Development dependencies.
- Application scripts.
- Version information.
- Author information.
- License information.
- Module system configuration.

## 9. Initialize Node.js Project

```bash
npm init
```

### Project Configuration

```text
package name: testapp
version: 1.0.0
description: this is about node js
entry point: index.js
test command:
git repository:
keywords: node express
author: node
license: ISC
type: commonjs

Is this OK? (yes) yes
```

### Generated package.json

```json
{
    "name": "testapp",
    "version": "1.0.0",
    "description": "this is about node js",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
        "node",
        "express"
    ],
    "author": "node",
    "license": "ISC",
    "type": "commonjs"
}
```

### Initialize with Default Configuration

```bash
npm init -y
```

The `-y` flag accepts default configuration values without asking interactive questions.

## 10. package.json Properties

| Property | Description |
|----------|-------------|
| name | Package or project name |
| version | Current package version |
| description | Project description |
| main | Default package entry point |
| scripts | Executable project commands |
| keywords | Search-related keywords |
| author | Author information |
| license | Project license |
| type | JavaScript module system |
| dependencies | Runtime dependencies |
| devDependencies | Development dependencies |
| engines | Supported runtime versions |
| repository | Source code repository information |
| private | Prevents accidental npm publishing when true |

## 11. Understanding npm Scripts

npm scripts allow developers to define reusable project commands.

```json
{
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "test": "echo \"Running tests\""
    }
}
```

### Execute Scripts

```bash
npm start
```

```bash
npm run dev
```

```bash
npm test
```

The development script requires nodemon to be installed.

```bash
npm install -D nodemon
```

## 12. CommonJS vs ES Modules

Node.js supports two major JavaScript module systems.

### CommonJS

```json
{
    "type": "commonjs"
}
```

```javascript
const fs = require('fs');
```

### ES Modules

```json
{
    "type": "module"
}
```

```javascript
import fs from 'node:fs';
```

### Comparison

| CommonJS | ES Modules |
|----------|------------|
| require() | import |
| module.exports | export |
| Traditional Node.js module system | Standard JavaScript module system |
| Common in older Node.js projects | Common in modern JavaScript projects |

## 13. Installing npm Packages

### Syntax

```bash
npm install package-name
```

### Short Syntax

```bash
npm i package-name
```

### Install Multiple Packages

```bash
npm i bcryptjs jsonwebtoken
```

## 14. Understanding bcryptjs and jsonwebtoken

### bcryptjs

bcryptjs is used for password hashing and password verification.

Passwords should never be stored directly as plain text.

```javascript
const bcrypt = require('bcryptjs');

async function hashPassword() {

    const password = "ExamplePassword123";

    const hashedPassword = await bcrypt.hash(password, 10);

    const isValid = await bcrypt.compare(
        password,
        hashedPassword
    );

    console.log(isValid);
}

hashPassword().catch(console.error);
```

### jsonwebtoken

The jsonwebtoken package is used to create and verify JSON Web Tokens.

JWTs are commonly used in authentication and authorization systems.

```javascript
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

if (!secret) {
    throw new Error("JWT_SECRET is required");
}

const token = jwt.sign(
    { userId: 101 },
    secret,
    {
        expiresIn: '1h',
        algorithm: 'HS256'
    }
);

const decoded = jwt.verify(token, secret, {
    algorithms: ['HS256']
});

console.log(decoded);
```

Set the JWT_SECRET environment variable before running this example.

### Security Best Practices

- Never store passwords as plain text.
- Never hardcode JWT secrets.
- Store secrets in environment variables or secret managers.
- Always configure token expiration.
- Verify tokens before trusting their contents.
- Never store sensitive information inside JWT payloads.
- Use HTTPS in production.

## 15. Introduction to Git and GitHub

### Git

Git is a distributed version control system used to track changes in source code.

### GitHub

GitHub is a cloud-based platform used to host Git repositories, collaborate with developers and manage software projects.

### Git Workflow

```text
Working Directory
        |
      git add
        |
        v
   Staging Area
        |
     git commit
        |
        v
 Local Repository
        |
      git push
        |
        v
 Remote Repository
      (GitHub)
```

## 16. Git Configuration

```bash
git config --global user.name "Your Name"
```

```bash
git config --global user.email "your-email@example.com"
```

### Check Configuration

```bash
git config --list
```

## 17. Push Node.js Project to GitHub

Create a `.gitignore` file before staging project files.

Initialize Git:

```bash
git init
```

Check repository status:

```bash
git status
```

Stage files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Initial Node.js project setup"
```

Rename branch:

```bash
git branch -M main
```

Connect GitHub repository:

```bash
git remote add origin https://github.com/username/repository.git
```

Push source code:

```bash
git push -u origin main
```

## 18. Common Git Commands

| Command | Description |
|---------|-------------|
| git init | Initialize repository |
| git status | Check working directory status |
| git add . | Stage changes |
| git commit -m "message" | Commit staged changes |
| git log | View commit history |
| git branch | View branches |
| git switch branch-name | Switch branches |
| git switch -c branch-name | Create and switch branch |
| git push | Upload local commits |
| git pull | Fetch and integrate remote changes |
| git fetch | Download remote repository information |
| git clone | Clone a repository |
| git diff | View file changes |
| git remote -v | View remote URLs |

---

# Day 04 - Dependency Management and Development Tools

## 1. Understanding node_modules

The `node_modules` directory contains installed npm packages and their supporting dependencies.

When we execute:

```bash
npm i bcryptjs jsonwebtoken
```

npm downloads and installs the required packages.

### Generated Project Structure

```text
NodeProject/
│
├── node_modules/
│   ├── bcryptjs/
│   ├── jsonwebtoken/
│   └── Other dependencies/
│
├── index.js
├── package.json
└── package-lock.json
```

### Important Characteristics

- Automatically generated by npm.
- Contains actual package source files.
- Contains direct and transitive dependencies.
- Can consume significant disk space.
- Should not normally be modified manually.
- Should not be committed to GitHub.
- Can be regenerated using npm install.

## 2. Understanding Dependencies

A dependency is an external package required by an application or another package.

### Direct Dependencies

Packages explicitly installed by the developer.

```bash
npm install express
```

### Transitive Dependencies

Supporting packages required by other dependencies.

For example, jsonwebtoken may depend on additional packages for token signing, verification and utility operations.

```text
Application
│
├── Direct Dependency A
│   ├── Transitive Dependency A1
│   └── Transitive Dependency A2
│
└── Direct Dependency B
    └── Transitive Dependency B1
```

npm automatically resolves and installs these supporting dependencies.

## 3. Types of Dependencies

| Dependency Type | Purpose |
|-----------------|---------|
| dependencies | Packages required at application runtime |
| devDependencies | Packages required during development |
| peerDependencies | Compatibility requirements for consuming projects |
| optionalDependencies | Packages whose installation failure may be tolerated |
| Transitive Dependencies | Dependencies required by other packages |

### Runtime Dependencies

```bash
npm install bcryptjs jsonwebtoken
```

### Development Dependencies

```bash
npm install -D nodemon eslint
```

### View Dependency Tree

```bash
npm list
```

### View Direct Dependencies

```bash
npm list --depth=0
```

### Find Why a Package Is Installed

```bash
npm explain package-name
```

## 4. Understanding package-lock.json

The `package-lock.json` file is automatically generated and maintained by npm.

It records the resolved dependency tree and exact package versions.

### Responsibilities

- Records exact resolved package versions.
- Maintains dependency relationships.
- Records package resolution information.
- Contains integrity information.
- Supports reproducible installations.
- Reduces unexpected dependency version changes.

### Best Practices

- Always commit package-lock.json to GitHub for applications.
- Do not normally modify it manually.
- Keep package.json and package-lock.json synchronized.
- Review dependency changes before committing.

## 5. package.json vs package-lock.json vs node_modules

| Feature | package.json | package-lock.json | node_modules |
|---------|--------------|-------------------|--------------|
| Purpose | Project manifest | Resolved dependency tree | Installed packages |
| Version information | Version ranges | Exact resolved versions | Actual installed versions |
| Generated by | npm init | npm install | npm install |
| Manual editing | Allowed | Generally avoided | Avoided |
| Commit to Git | Yes | Yes | No |
| File size | Small | Depends on dependencies | Usually large |

## 6. Semantic Versioning (SemVer)

npm packages commonly follow Semantic Versioning.

```text
MAJOR.MINOR.PATCH

  2  .  5  .  1
  |     |     |
  |     |     +-- Bug fixes
  |     +-------- Backward-compatible features
  +-------------- Breaking changes
```

### Version Components

| Component | Description |
|-----------|-------------|
| MAJOR | Breaking changes |
| MINOR | Backward-compatible new features |
| PATCH | Backward-compatible bug fixes |

### Version Range Operators

| Version | Meaning |
|---------|---------|
| 2.5.1 | Exact version |
| ^2.5.1 | Compatible updates below 3.0.0 |
| ~2.5.1 | Patch updates below 2.6.0 |
| * | Any version |

### Example

```json
{
    "dependencies": {
        "example-package": "^2.5.1"
    }
}
```

The caret operator allows compatible updates according to Semantic Versioning rules.

## 7. How npm install Works

When we execute:

```bash
npm install
```

npm performs the following operations:

1. Reads package.json.
2. Checks package-lock.json.
3. Resolves dependency version requirements.
4. Reuses locked versions when compatible.
5. Downloads required packages.
6. Installs transitive dependencies.
7. Creates or updates node_modules.
8. Updates package-lock.json when necessary.

### Installation Workflow

```text
          npm install
               |
               v
         package.json
               |
               v
       package-lock.json
               |
               v
      Dependency Resolution
               |
               v
          npm Registry
               |
               v
         node_modules
```

## 8. Sharing Node.js Projects

The node_modules directory does not normally need to be transferred or uploaded.

The following files should be shared:

```text
NodeProject/
│
├── src/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

After cloning the repository:

```bash
git clone repository-url
```

Navigate to the project:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

The start script must be configured in package.json.

## 9. npm install vs npm ci

### npm install

```bash
npm install
```

Used for normal development and dependency installation.

### npm ci

```bash
npm ci
```

Provides a clean installation based on an existing lock file.

### Comparison

| npm install | npm ci |
|-------------|--------|
| Used during development | Commonly used in CI/CD |
| Can update lock file | Does not update lock file |
| Can install new packages | Installs existing project dependencies |
| Resolves dependency changes | Uses locked dependency versions |
| May reuse node_modules | Removes existing node_modules |
| Lock file is optional | Requires a valid lock file |

## 10. Dependency Conflict Resolution

Dependency conflicts occur when packages require incompatible versions of other packages.

### Check Installed Dependencies

```bash
npm list
```

### Check Outdated Dependencies

```bash
npm outdated
```

### Update Dependencies

```bash
npm update
```

### Legacy Peer Dependency Resolution

```bash
npm install --legacy-peer-deps
```

This ignores peer dependency requirements when constructing the dependency tree.

### Force Installation

```bash
npm install --force
```

This disables certain npm protections and can allow potentially incompatible installations.

### Best Practice

Before using force installation:

1. Identify the conflicting package.
2. Check package compatibility.
3. Review package documentation.
4. Install compatible versions.
5. Test the application.

Force installation should not be the default solution.

## 11. Dependency Security

Third-party packages may contain known security vulnerabilities.

### Check Vulnerabilities

```bash
npm audit
```

### Apply Available Compatible Fixes

```bash
npm audit fix
```

### Force Security Fixes

```bash
npm audit fix --force
```

The force option may introduce breaking changes.

Always review dependency changes and test the application after applying security fixes.

## 12. Understanding .gitignore

The `.gitignore` file specifies untracked files and directories that Git should ignore.

### Example

```gitignore
# Dependencies
node_modules/

# Environment variables
.env
.env.*
env.dev
env.stg

# Allow environment template
!.env.example

# Log files
*.log
logs/

# Build output
dist/
build/

# Test coverage
coverage/

# Operating system files
.DS_Store
Thumbs.db
```

### Why .gitignore Is Important

- Prevents committing unnecessary files.
- Reduces repository size.
- Protects sensitive configuration from accidental commits.
- Prevents uploading generated dependencies.
- Maintains a clean project structure.

### Remove Already Tracked node_modules

If node_modules was previously committed:

```bash
git rm -r --cached node_modules
```

```bash
git add .gitignore
```

```bash
git commit -m "Remove node_modules from Git tracking"
```

### Important Security Note

Adding a file to .gitignore does not remove it from previous Git commits.

If credentials were committed accidentally, rotate or revoke them immediately and review repository history.

## 13. Understanding README.md

README.md is the primary documentation file of a software repository.

The `.md` extension stands for Markdown.

A professional README helps developers understand, install, configure and use a project.

### Recommended README Structure

```text
1. Project Title
2. Project Description
3. Features
4. Technologies Used
5. Architecture
6. Installation
7. Environment Configuration
8. Folder Structure
9. Usage
10. API Documentation
11. Testing
12. Deployment
13. Contribution Guidelines
14. License
```

## 14. Markdown Syntax

| Syntax | Description |
|--------|-------------|
| # Heading | Main heading |
| ## Heading | Second-level heading |
| ### Heading | Third-level heading |
| **Text** | Bold text |
| *Text* | Italic text |
| - Item | Unordered list |
| 1. Item | Ordered list |
| `code` | Inline code |
| --- | Horizontal divider |
| [Title](URL) | Hyperlink |
| ![Alt](URL) | Image |
| - [x] Task | Completed task |
| - [ ] Task | Pending task |

## 15. Recommended Visual Studio Code Extensions

| Extension | Purpose |
|-----------|---------|
| vscode-icons | File and folder icons |
| Git History | Git commit and file history |
| GitLens | Git insights and code authorship |
| Code Spell Checker | Detect spelling mistakes |
| ESLint | JavaScript linting and code quality |
| Prettier | Consistent code formatting |
| Tabnine | AI-powered code completion |
| Error Lens | Displays errors directly in the editor |
| Thunder Client | API testing inside VS Code |
| npm Intellisense | npm package import suggestions |
| Path Intellisense | File path suggestions |

### ESLint vs Prettier

| ESLint | Prettier |
|--------|----------|
| Identifies code quality issues | Formats source code |
| Detects problematic patterns | Maintains consistent formatting |
| Supports configurable coding rules | Focuses on code appearance |
| Can fix certain linting issues | Automatically formats code |

## 16. Recommended Browser Extensions

### JSON Viewer

JSON Viewer displays JSON responses in a formatted and readable structure.

### Features

- Syntax highlighting.
- Expandable and collapsible objects.
- Nested object visualization.
- Improved API response readability.

### Browser Developer Tools

Chrome Developer Tools also provide useful debugging features.

- Console
- Network
- Application Storage
- Performance
- Sources
- Security

The Network tab is particularly useful for inspecting HTTP requests, responses, headers and status codes.

## 17. Industry Best Practices

- Use a supported Node.js LTS version.
- Maintain meaningful project documentation.
- Use Git for version control.
- Write meaningful commit messages.
- Never commit node_modules.
- Commit package.json and package-lock.json.
- Keep secrets outside source code.
- Use environment variables for configuration.
- Use ESLint and Prettier.
- Review dependency vulnerabilities.
- Avoid unnecessary npm packages.
- Avoid force installation unless necessary.
- Use asynchronous I/O operations appropriately.
- Maintain consistent project structure.
- Test applications after dependency updates.

---

# Important Interview Questions

| Question | Short Answer |
|----------|--------------|
| What is Node.js? | A JavaScript runtime environment |
| What is V8? | Google's JavaScript execution engine |
| What is libuv? | A library providing asynchronous I/O and event loop functionality |
| What is the event loop? | A mechanism coordinating asynchronous callbacks |
| Is Node.js single-threaded? | JavaScript primarily runs on a single main thread |
| What is npm? | A JavaScript package management ecosystem |
| What is JSON? | JavaScript Object Notation |
| What is package.json? | Project manifest and configuration file |
| What is package-lock.json? | A file recording resolved dependency versions |
| What is node_modules? | Directory containing installed packages |
| What is a transitive dependency? | A dependency required by another package |
| What is SemVer? | Semantic Versioning |
| What is npm ci? | Clean installation using a dependency lock file |
| What is .gitignore? | Configuration for ignoring untracked files |
| What is bcryptjs? | A password hashing library |
| What is jsonwebtoken? | A library for creating and verifying JWTs |
| What is CommonJS? | A JavaScript module system using require and module.exports |
| What is Git? | A distributed version control system |
| What is GitHub? | A platform for hosting Git repositories |

---

# Learning Progress

- [x] Day 01 - Full Stack Development Fundamentals
- [x] Day 02 - Node.js Environment and Architecture
- [x] Day 03 - npm, JSON, package.json and Git
- [x] Day 04 - Dependency Management and Development Tools

---

# Upcoming Learning Topics

- [ ] Node.js Core Modules
- [ ] File System Module
- [ ] HTTP Module
- [ ] Express.js
- [ ] Routing
- [ ] Middleware
- [ ] Environment Variables
- [ ] REST API Development
- [ ] MongoDB
- [ ] Mongoose
- [ ] CRUD Operations
- [ ] Authentication and Authorization
- [ ] JWT Authentication
- [ ] Password Hashing
- [ ] Error Handling
- [ ] Input Validation
- [ ] API Security
- [ ] MVC Architecture
- [ ] Unit Testing
- [ ] Docker
- [ ] Cloud Deployment
- [ ] CI/CD

---

# Technologies and Tools

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

---

# Official Documentation

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [npm Documentation](https://docs.npmjs.com/)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Documentation](https://docs.github.com/)
- [Semantic Versioning](https://semver.org/)

---

## Learning Objective

To develop a strong understanding of Node.js, backend architecture, REST API development, database integration, authentication, security and scalable application development.

**Learn. Practice. Build. Improve. Repeat.**
