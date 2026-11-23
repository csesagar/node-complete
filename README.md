# Node.js Learning Notes 🚀

A beginner-friendly guide to learning **Node.js**, covering environment setup, core concepts, NPM, JSON, and project initialization.

## 📚 01. Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside the browser.

### Full Stack Development

A full-stack application typically consists of:

- **Frontend:** HTML, CSS, JavaScript, React.js, Angular
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, MySQL, PostgreSQL
- **Cloud:** AWS, Azure, Google Cloud Platform (GCP)

### Key Features of Node.js

| Feature | Description |
|---|---|
| Single-Threaded | JavaScript execution typically runs on a single main thread |
| Asynchronous | Supports asynchronous operations |
| Non-Blocking I/O | Allows other work to continue while waiting for I/O operations |
| Event-Driven | Uses events and callbacks to handle operations |
| Event Loop | Coordinates asynchronous callbacks and tasks |
| Cross-Platform | Runs on Windows, Linux, and macOS |

**Note:** Node.js uses an event loop for JavaScript execution, but it also uses worker threads internally for certain operations.

---

## 🛠️ 02. Development Environment Setup

### Required Tools

**1. Visual Studio Code**

Download and install Visual Studio Code.

🔗 https://code.visualstudio.com/

**2. Node.js (LTS Version)**

Download and install the latest LTS version of Node.js.

🔗 https://nodejs.org/

Verify the installation:

```bash
node -v
npm -v
```

**3. Git Bash**

Install Git to manage source code and use Git Bash.

🔗 https://git-scm.com/

Verify Git installation:

```bash
git --version
```

**4. GitHub Account**

Create a GitHub account to store and manage your projects.

🔗 https://github.com/

### Create Your First Node.js Project

**Step 1:** Create a new folder named `learnpackage`.

**Step 2:** Open the folder in Visual Studio Code.

**Step 3:** Open the integrated terminal.

**Step 4:** Initialize a Node.js project.

```bash
npm init
```

---

## 📦 03. NPM (Node Package Manager)

### What is NPM?

NPM stands for **Node Package Manager**.

It is the default package manager for Node.js and is used to install, manage, update, and remove packages.

### Common NPM Commands

| Command | Description |
|---|---|
| `npm init` | Initialize a Node.js project |
| `npm init -y` | Generate package.json with default values |
| `npm install package-name` | Install a package |
| `npm i package-name` | Short form of npm install |
| `npm uninstall package-name` | Remove a package |
| `npm install` | Install dependencies from package.json |
| `npm list` | Display installed packages |
| `npm -v` | Check NPM version |
| `npm outdated` | Check outdated packages |

### Example: Installing Express.js

```bash
npm install express
```

This installs Express.js and adds it to the project's dependencies.

---

## 🧾 04. JSON (JavaScript Object Notation)

### What is JSON?

JSON stands for **JavaScript Object Notation**.

It is a lightweight, text-based format used to store and exchange structured data.

JSON represents data using key-value pairs.

### JSON Syntax

```json
{
  "key": "value"
}
```

### Example

```json
{
  "id": 101,
  "name": "John",
  "age": 25,
  "skills": [
    "JavaScript",
    "Node.js",
    "Express.js"
  ],
  "isActive": true
}
```

### Features of JSON

- Easy to read and write.
- Language-independent data format.
- Supports objects and arrays.
- Supports strings, numbers, booleans, and null.
- Commonly used for API communication and configuration.

---

## 📄 05. package.json

### What is package.json?

The `package.json` file is the configuration file of a Node.js project.

It contains information about the application, dependencies, scripts, and project metadata.

### Main Responsibilities

1. Stores project name, version, and description.
2. Defines the application's entry point.
3. Maintains dependencies and development dependencies.
4. Defines scripts such as `start` and `test`.
5. Stores project metadata such as author and license.

### Generate package.json

Run:

```bash
npm init
```

### Example: Project Initialization

```text
package name: (learnpackage) testapp
version: (1.0.0)
description: this is about node js
entry point: (index.js)
test command:
git repository:
keywords: node express
author: node
license: (ISC)
type: (commonjs)

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

### Understanding package.json Properties

| Property | Description |
|---|---|
| `name` | Name of the application |
| `version` | Current project version |
| `description` | Short project description |
| `main` | Entry point of the package |
| `scripts` | Commands to run project tasks |
| `keywords` | Keywords describing the project |
| `author` | Project author |
| `license` | License information |
| `type` | JavaScript module system |
| `dependencies` | Packages required by the application |
| `devDependencies` | Packages used during development |

---

## ⚡ 06. Installing Packages

To install a package:

```bash
npm install package-name
```

Short form:

```bash
npm i package-name
```

### Example

```bash
npm install express
```

To install multiple packages:

```bash
npm install express cors dotenv
```

To install a development dependency:

```bash
npm install --save-dev nodemon
```

### Files and Folders Created by NPM

After installing dependencies, you will commonly see:

```text
learnpackage/
│
├── node_modules/
│   └── Installed packages
│
├── package.json
│
├── package-lock.json
│
└── index.js
```

- **node_modules:** Contains installed packages.
- **package.json:** Defines project configuration and dependencies.
- **package-lock.json:** Records the resolved dependency versions for reproducible installations.
- **index.js:** JavaScript application entry file.

---

## 💻 07. Your First Node.js Program

Create a file named `index.js`.

```javascript
console.log("Hello, Node.js!");
console.log("Welcome to Node.js Learning");
```

Run the application:

```bash
node index.js
```

### Output

```text
Hello, Node.js!
Welcome to Node.js Learning
```

---

## 🔗 Useful Resources

- Node.js Official Website: https://nodejs.org/
- Node.js Documentation: https://nodejs.org/docs/latest/api/
- NPM Documentation: https://docs.npmjs.com/
- Express.js Documentation: https://expressjs.com/
- GitHub: https://github.com/

---

## 🎯 Learning Objective

The goal of this repository is to build a strong foundation in Node.js and backend development through structured notes, practical examples, and hands-on projects.

**Happy Coding! 🚀**
