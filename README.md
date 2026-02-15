# 🌐 node.js SIMPLE WEB SERVER
📌 PROJECT DESCRIPTION
This is a simple web server created using node.js http module. it handles so many route and serves as different html page based on user request.the server also deliver a css file for styling the page 

🎯 Features
built using node.js no framework
handle
/home
/about
/contact
handle css file to style the page
error handling for invalid routes with a custom 404 page
Used asynchronous and modular code where applicable.
📂 Project Structure
project
|
|──server.js
|──home.html
|──about.html
|──contact.html
|──style.css
└── README.md


## ⚙️ How to Run the Project

### 1️⃣ Install Node.js

Download from: https://nodejs.org

Check installation:

```
node -v
```

### 2️⃣ Run Server

Open terminal inside project folder and run:

```
node server.js
```

---

### 3️⃣ Open in Browser

Visit:

```
http://localhost:8080/home
http://localhost:8080/about
http://localhost:8080/contact
```

---

## 🔁 How Routing Works

The server checks the URL requested by the browser and matches it with predefined routes. If a match is found, it sends the corresponding HTML file. Otherwise, it returns a 404 error page.

---

## 🧠 Concepts Used

* Node.js HTTP module
* File System module (fs)
* Asynchronous programming
* Routing logic
* HTTP status codes
* Error handling

---

## 👨‍💻 Author

Akash Roy

---

