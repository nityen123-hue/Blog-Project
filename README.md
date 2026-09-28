# 📝 React Blog CRUD Application

A simple and responsive **Blog Management CRUD Application** built using **React.js, Bootstrap, CSS, and JSON Server**.

This project allows users to **Add, View, Edit, and Delete blogs** using a REST API.

---

## 🚀 Project Overview

This Blog Application is created to practice React CRUD operations and API integration.

The application contains:

* Add Blog
* Display Blog
* Edit Blog
* Delete Blog
* Image URL support
* Author information
* Date information
* Responsive design
* JSON Server REST API

The **Add Blog** form is displayed on the left side, while blog cards are displayed on the right side.

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* JSON Server
* REST API
* Vite

---

## 📂 Project Structure

```text
react-blog-crud/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

---

## ✨ Features

### 1. Add Blog

Users can add a new blog by entering:

* Blog Title
* Image URL
* Author
* Date

After clicking the **Add** button, the blog is saved in the JSON Server database.

---

### 2. Display Blogs

All blogs are fetched from the JSON Server API and displayed as responsive cards.

Each blog card contains:

* Blog number
* Blog image
* Blog title
* Author
* Date
* Delete button
* Edit button

---

### 3. Edit Blog

Clicking the **Edit** button loads the selected blog data into the form.

Users can update:

* Title
* Image
* Author
* Date

After clicking **Edit**, the updated data is saved to the database.

---

### 4. Delete Blog

Clicking the **Delete** button removes the selected blog from the JSON Server database.

---

### 5. Responsive Design

The application is responsive for:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop layout:

```text
┌───────────────┐   ┌──────────────────────────────────────┐
│               │   │ Blog 1 │ Blog 2 │ Blog 3             │
│   Add Blog    │   │        │        │                    │
│               │   ├────────┼────────┼────────────────────┤
│   Title       │   │ Blog 4 │ Blog 5 │ Blog 6             │
│   Image URL   │   │        │        │                    │
│   Author      │   └────────┴────────┴────────────────────┘
│   Date        │
│   Add         │
│               │
└───────────────┘
```

On smaller screens, the form and blog cards automatically adjust to the screen size.

---

## 🔌 API

The application uses JSON Server as a local REST API.

API URL:

```text
http://localhost:3000/blogs
```

### GET

Fetch all blogs:

```text
GET /blogs
```

### POST

Add a new blog:

```text
POST /blogs
```

### PUT

Update an existing blog:

```text
PUT /blogs/:id
```

### DELETE

Delete a blog:

```text
DELETE /blogs/:id
```

---

## 📦 Installation

### Step 1: Create React Project

```bash
npm create vite@latest react-blog-crud
```

Select:

```text
React
JavaScript
```

Go inside the project:

```bash
cd react-blog-crud
```

---

### Step 2: Install Dependencies

```bash
npm install
```

Install Bootstrap:

```bash
npm install bootstrap
```

Install React Router:

```bash
npm install react-router-dom
```

Install JSON Server:

```bash
npm install json-server
```

---

## 🗄️ JSON Server Setup

Create a file named:

```text
db.json
```

Add your blog data inside the `blogs` array.

Example:

```json
{
  "blogs": [
    {
      "id": "1",
      "title": "Indian Basmati Rice Export Business",
      "img": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
      "author": "Rice Export Team",
      "date": "01-10-2026"
    }
  ]
}
```

---

## ▶️ Run JSON Server

Open a terminal and run:

```bash
npx json-server --watch db.json --port 3000
```

Your API will run at:

```text
http://localhost:3000/blogs
```

---

## ▶️ Run React Application

Open another terminal:

```bash
npm run dev
```

Vite will provide a local URL such as:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 📄 App.jsx

The main React component handles:

* API requests
* Form state
* Add operation
* Edit operation
* Delete operation
* Blog listing

React Hooks used:

```javascript
useState()
useEffect()
```

---

## 🎨 App.css

The CSS file provides:

* Blog card design
* Add Blog form
* Buttons
* Responsive grid
* Hover effects
* Desktop layout
* Mobile layout

The project uses custom CSS classes instead of depending on Bootstrap card classes, making the design easier to customize.

---

## 🔄 CRUD Flow

```text
User
 │
 ▼
React Form
 │
 ▼
handleClick()
 │
 ▼
JSON Server API
 │
 ├── POST → Add Blog
 │
 ├── PUT → Edit Blog
 │
 ├── DELETE → Delete Blog
 │
 └── GET → Display Blogs
 │
 ▼
React UI
```

---

## 📌 Example Blog Data

The project can contain different export products such as:

* Basmati Rice
* Onion
* Mango
* Cotton Yarn
* Ceramic Tiles
* Handicrafts
* Green Tea
* Groundnut
* Leather Products
* Auto Parts

---

## 💡 What I Learned

Through this project, I practiced:

* React Components
* `useState`
* `useEffect`
* Form Handling
* Fetch API
* REST API
* CRUD Operations
* JSON Server
* PUT Request
* POST Request
* DELETE Request
* GET Request
* Responsive CSS
* Bootstrap Integration
* React Project Structure

---

## 🐛 Common Error

If the Delete button does not work, make sure you use:

```jsx
onClick={() => handleDelete(element.id)}
```

Not:

```jsx
Click={() => handleDelete(element.id)}
```

React event handlers are case-sensitive.

---

## 👨‍💻 Project Purpose

This project was developed as a **Full Stack Web Development practice project** to understand how a React frontend communicates with a REST API and performs CRUD operations.

---



"# Make_Blog_Project" 
