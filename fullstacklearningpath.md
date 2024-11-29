# Initial Installations:
## code --install-extension ritwickdey.LiveServer

LiveServer is an excellent VS Code extension that creates a local development server with live reload capability. Here's what it does:

Key Features:
Auto-refreshes your browser when you save HTML/CSS/JS files
Runs your website on a local server (usually http://127.0.0.1:5500)
Shows real-time changes without manual refresh
Supports multiple browsers simultaneously
How to Use:
Right-click your HTML file -> "Open with Live Server"
Click "Go Live" in the VS Code status bar
Access your site through the browser
Perfect for:
Frontend development
Static websites
Quick prototyping
Learning HTML/CSS/JS
Testing responsive designs
Why it's valuable:
Speeds up development workflow
Eliminates manual browser refreshing
Simulates real server environment
Works with most web projects

## code --install-extension dsznajder.es7-react-js-snippets

The ES7+ React/Redux/React-Native snippets extension is a powerful productivity booster for React development in VS Code! Here's what it offers:

Key Features:
Quick React component generation
Common React patterns as shortcuts
JavaScript/TypeScript snippets
Hooks snippets
PropTypes snippets

Popular Snippets:
// Type 'rafce' + Tab for:
const Example = () => {
  return (
    <div>Example</div>
  )
}
export default Example

// Type 'usf' + Tab for:
useState()

// Type 'uef' + Tab for:
useEffect(() => {
  
}, [])

Copy

Apply

Example.jsx
Time-Saving Benefits:
Reduces boilerplate code typing
Ensures consistent component structure
Speeds up React development
Prevents syntax errors
Perfect for learning React patterns
Most Used Shortcuts:
rafce → Arrow Function Component
rfc → Function Component
rcc → Class Component
imp → Import statement
clg → Console.log

# Learning Path:

Here's a focused outline to learn full stack development efficiently using VS Code:

VS Code Setup (Week 1)
code --install-extension ritwickdey.LiveServer

Copy

Execute

code --install-extension dsznajder.es7-react-js-snippets

Copy

Execute

code --install-extension esbenp.prettier-vscode

Copy

Execute

Frontend Path (Weeks 1-4)
HTML/CSS Fundamentals
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>

Copy

Apply

index.html
JavaScript Essentials
// Modern JS example
const getData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

Copy

Apply

app.js
Backend Path (Weeks 5-8)
Node.js & Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(3000, () => console.log('Server running'));

Copy

Apply

server.js
Database (Weeks 9-10)
MongoDB/PostgreSQL
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Copy

Apply

connection.js
Practical Project Structure:
project/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   ├── routes/
│   └── models/
└── README.md

Copy

Apply

Key Learning Tips:

Build projects from day one
Use VS Code's integrated terminal
Learn Git alongside development
Use VS Code's debugging tools
Follow this learning order:
HTML/CSS → JavaScript → React
Node.js → Express → Database
Full Stack Integration
Recommended VS Code Features:

Integrated Terminal
Git Integration
Debug Console
Extensions Marketplace
IntelliSense
Practice Projects (In Order):

Static portfolio website
Todo list with local storage
Weather app with API
Full stack blog
E-commerce platform
Learning Resources:

freeCodeCamp
The Odin Project
MDN Web Docs
Node.js Documentation
VS Code Documentation
This focused approach should get you up and running with full stack development in 3-4 months with consistent practice. Remember to commit code daily and use VS Code's built-in Git integration to track your progress.