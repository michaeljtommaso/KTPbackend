const express = require('express');
const app = express();

app.use(express.json());

const about = {
  name: "Michael Tommaso",
  major: "ORIE",
  year: "2029",
  hometown: "NYC"
};

let projects = [
  {
    id: 1,
    title: "Machine Learning Stock Trading Bot",
    description: "A machine learning trading system in Python using historical and real-time market data. I implemented rolling training windows and evaluated model performance across changing market conditions.",
    tech: ["Python", "SQL", "Machine Learning", "APIs"],
    link: "https://github.com/michaeljtommaso/StockTradingBot"
  },
  {
    id: 2,
    title: "Lightweight Aquatic Vehicle",
    description: "I designed and prototyped a lightweight underwater transportation device using 3D modeling and circuit creation during an aerospace internship.",
    tech: ["3D Design", "Engineering", "Fusion 360", "Circuit Design"],
    link: "https://docs.google.com/presentation/d/1p1EfmQt8tndY2haabTL9DNnSiTjWZXvs2xsYkJ1ab5s/edit?usp=sharing"
  }
];

const experiences = [
  {
    company: "Empire Environmental",
    role: "CAD Associate",
    period: "Jun 2025 – Aug 2025",
    description: "Produced CAD layouts and collaborated with engineers to refine technical designs across multiple iterations."
  },
  {
    company: "GE Aerospace",
    role: "Engineering Intern",
    period: "Aug 2024",
    description: "Selected for a competitive internship exploring aerospace systems, hypersonic technology, and engineering workflows."
  },
  {
    company: "Bay Ridge Fish Bar",
    role: "Manager",
    period: "Oct 2021 – Oct 2024",
    description: "Managed operations, staff, and customer experience in a fast-paced environment with strong execution and leadership."
  }
];

app.get('/api/about', (req, res) => {
  res.json(about);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/projects', (req, res) => {
  const { title, description, tech } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'title and description are required' });
  }
  const newProject = {
    id: projects.length + 1,
    title,
    description,
    tech: tech || []
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.get('/api/experience', (req, res) => {
  res.json({ experiences });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
