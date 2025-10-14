const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let skills = [
  { id: 1, name: "Trabajo en equipo" },
  { id: 2, name: "Resolución de problemas" },
  { id: 3, name: "Adaptabilidad" },
  { id: 4, name: "Pensamiento crítico" },
  { id: 5, name: "Creatividad" },
  { id: 6, name: "Empatía" },
  { id: 7, name: "Liderazgo" },
  { id: 8, name: "Organización" },
  { id: 9, name: "Negociación" },
  { id: 10, name: "Toma de decisiones" },
];

// 🔹 GET /skills → todas las skills
app.get("/skills", (req, res) => {
  res.json(skills);
});

// 🔹 GET /skills/:id → una skill por id
app.get("/skills/:id", (req, res) => {
  const skill = skills.find((s) => s.id === parseInt(req.params.id));
  if (!skill) {
    return res.status(404).json({ error: "Skill no encontrada" });
  }
  res.json(skill);
});

// 🔹 POST /skills → agregar nueva skill
app.post("/skills", (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  const newSkill = {
    id: skills.length > 0 ? skills[skills.length - 1].id + 1 : 1,
    name,
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
});

// 🔹 PATCH /skills/:id → actualizar una skill
app.patch("/skills/:id", (req, res) => {
  const skill = skills.find((s) => s.id === parseInt(req.params.id));
  if (!skill) {
    return res.status(404).json({ error: "Skill no encontrada" });
  }

  const { name } = req.body;
  if (!name || name.trim() === "") {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  skill.name = name;
  res.json(skill);
});

// 🔹 DELETE /skills/:id → eliminar una skill
app.delete("/skills/:id", (req, res) => {
  const skillIndex = skills.findIndex((s) => s.id === parseInt(req.params.id));
  if (skillIndex === -1) {
    return res.status(404).json({ error: "Skill no encontrada" });
  }

  const deleted = skills.splice(skillIndex, 1);
  res.json({ mensaje: "Skill eliminada", deleted });
});

// 🔹 Iniciar servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API de skills corriendo en http://localhost:${PORT}/skills`);
});
