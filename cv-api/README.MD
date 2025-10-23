#  API de Skills — Proyecto CV

API creada con Node.js + Express que expone un CRUD de habilidades ("skills") para integrarse con el portafolio del CV.

---

##  Rutas disponibles

| Método | Ruta | Descripción |
|--------|------|--------------|
| GET | `/skills` | Lista todas las skills |
| GET | `/skills/:id` | Muestra una skill por ID |
| POST | `/skills` | Crea una nueva skill |
| PATCH | `/skills/:id` | Actualiza una skill existente |
| DELETE | `/skills/:id` | Elimina una skill |

---

##  Ejemplo de skill
```json
{ "id": 1, "name": "Trabajo en equipo" }
