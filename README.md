# 🚀 MySql CRUD Operations

A full-stack **CRUD (Create, Read, Update, Delete)** web application built using **Node.js**, **Express.js**, **EJS**, and **MySQL**. This project demonstrates how to perform database operations through a clean and user-friendly interface while following RESTful principles.

---

## 📖 Overview

This application allows users to manage records stored in a MySQL database. Users can create new entries, view all existing records, update record details, and delete records. The project is designed to strengthen backend development skills by integrating Express.js with MySQL and rendering dynamic pages using EJS.

---

## ✨ Features

- ➕ Add new user records
- 📋 View all users
- 👀 View individual user details
- ✏️ Edit existing records
- 🗑️ Delete records
- 💾 MySQL database integration
- ⚡ Server-side rendering with EJS
- 🛣️ RESTful routing using Express.js
- 🎨 Simple and responsive user interface

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- EJS

### Backend

- Node.js
- Express.js

### Database

- MySQL

### Tools

- Git
- GitHub
- VS Code
- MySQL Workbench

---

## 📂 Project Structure

```text
MySql-CRUD_Operations/
│── public/
│   └── style.css
│
│── views/
│   ├── deleteuser.ejs
│   ├── edit.ejs
│   ├── home.ejs
│   ├── newuser.ejs
│   └── showuser.ejs
│
│── index.js
│── schema.sql
│── package.json
│── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MAHESH549990/MySql-CRUD_Operations.git
```

### 2️⃣ Navigate to the project directory

```bash
cd MySql-CRUD_Operations
```

### 3️⃣ Install dependencies

```bash
npm install
npm i express
npm i ejs
```

### 4️⃣ Set up the MySQL database

- Open MySQL Workbench.
- Create a new database.
- Import the `schema.sql` file.
- Update your MySQL credentials inside `index.js`.

Example:

```javascript
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my_password",
  database: "my_database_name",
});
```

### 5️⃣ Start the application

```bash
node index.js
```

### 6️⃣ Open your browser

```
http://localhost:8080
```

---

## 📚 What I Learned

During this project, I gained hands-on experience with:

- CRUD Operations
- Express.js Routing
- MySQL Database Integration
- SQL Queries
- Server-Side Rendering with EJS
- RESTful API Design
- Project Structure in Node.js
- Git & GitHub Workflow

---

## 🚀 Future Improvements

- 🔐 User Authentication
- 🔍 Search Functionality
- 📄 Pagination
- ✅ Form Validation
- 📱 Fully Responsive Design
- 🎨 Improved User Interface
- ☁️ Deploy the application online

---

## 👨‍💻 Author

**Mahesh Bhatt**

- GitHub: https://github.com/MAHESH549990

---

## ⭐ Show Your Support

If you found this project helpful or interesting, consider giving it a ⭐ on GitHub. Your support is greatly appreciated!
