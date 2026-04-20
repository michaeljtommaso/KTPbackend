# KTP Backend - Mini Portfolio API

A Node.js + Express REST API serving personal portfolio data.

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   node index.js
   ```
3. Server runs at `http://localhost:3000`


## Example Endpoints

### GET /api/about
Returns basic info about me.
```
GET http://localhost:3000/api/about
```

### GET /api/projects
Returns all projects.
```
GET http://localhost:3000/api/projects
```

### POST /api/projects
Adds a new project.
```
POST http://localhost:3000/api/projects
Content-Type: application/json

{
  "title": "New Project",
  "description": "What it does",
  "tech": ["React", "Node.js"]
}
```

### GET /api/experience
Returns work experience.
```
GET http://localhost:3000/api/experience
```
