import React, { useEffect } from "react";
import "../style.css";

function Skills() {
  useEffect(() => {
    const keys = document.querySelectorAll(".key");
    const dropArea = document.getElementById("softskills-container");

    // Posicionar llaves en lugares accesibles (no encima de la navbar)
    const topOffset = 120; // separar de la parte superior (ajusta si tu navbar es más alta)
    keys.forEach((key, i) => {
      // Posicionamos en área visible (evitar 0..topOffset)
      const x = 50 + (i * 90) + Math.random() * 60;
      const y = topOffset + Math.random() * (window.innerHeight / 2);
      key.style.left = `${x}px`;
      key.style.top = `${y}px`;
    });

    // Función que trae las skills desde la API y las muestra
    function showSoftSkillsFromApi() {
      if (!dropArea) return;
      dropArea.style.border = "none";
      dropArea.style.backgroundColor = "transparent";
      dropArea.innerHTML = ""; // limpiar

      fetch("http://localhost:4000/skills")
        .then(res => {
          if (!res.ok) throw new Error("Error al obtener habilidades");
          return res.json();
        })
        .then(data => {
          if (!Array.isArray(data) || data.length === 0) {
            dropArea.innerHTML = "<p class='text-muted'>No hay habilidades disponibles.</p>";
            return;
          }
          // añadimos badges con separación (me-2 mb-2)
          data.forEach(skill => {
            const span = document.createElement("span");
            span.className = "badge bg-secondary me-2 mb-2";
            // usar nombre y nivel
            const level = skill.level !== undefined ? ` ⭐${skill.level}` : "";
            span.textContent = `${skill.name}${level}`;
            dropArea.appendChild(span);
          });
        })
        .catch(err => {
          console.error(err);
          dropArea.innerHTML = "<p class='text-danger'>Error cargando habilidades.</p>";
        });
    }

    // Reusa tu función checkDrop pero llama a showSoftSkillsFromApi()
    function checkDrop(key) {
      const dropRect = dropArea.getBoundingClientRect();
      const keyRect = key.getBoundingClientRect();

      const isInside =
        keyRect.left + keyRect.width / 2 > dropRect.left &&
        keyRect.right - keyRect.width / 2 < dropRect.right &&
        keyRect.top + keyRect.height / 2 > dropRect.top &&
        keyRect.bottom - keyRect.height / 2 < dropRect.bottom;

      if (isInside) {
        dropArea.appendChild(key);
        key.style.position = "relative";
        key.style.left = "0";
        key.style.top = "0";
        key.style.zIndex = "1";

        const allInside = Array.from(keys).every(k => dropArea.contains(k));
        if (allInside) {
          showSoftSkillsFromApi();
        }
      }
    }

    // Drag handlers (igual que tu implementación)
    keys.forEach((key) => {
      key.addEventListener("mousedown", dragStart);
      key.ondragstart = () => false;

      function dragStart(e) {
        let shiftX = e.clientX - key.getBoundingClientRect().left;
        let shiftY = e.clientY - key.getBoundingClientRect().top;

        key.style.position = "absolute";
        key.style.zIndex = 1000;
        document.body.append(key);

        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
          key.style.left = pageX - shiftX + "px";
          key.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(e) {
          moveAt(e.pageX, e.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        document.addEventListener(
          "mouseup",
          function () {
            document.removeEventListener("mousemove", onMouseMove);
            checkDrop(key);
          },
          { once: true }
        );
      }
    });

    // Limpieza opcional cuando el componente se desmonta
    return () => {
      keys.forEach(k => {
        k.removeEventListener("mousedown", () => {});
      });
    };
  }, []);

  return (
    <div>
      <h3>Soft Skills</h3>
      <div id="softskills-container" className="softskills-container mb-3">
        <p className="text-white">
          Arrastra las llaves de cráneo de colores aquí para desbloquear tus
          soft skills
        </p>
      </div>

      <div className="keys-container mb-3">
        <img
          src="/imagenes/Skullkey_blue.jpg"
          alt="Llave 1"
          className="key"
          draggable="false"
        />
        <img
          src="/imagenes/Skullkey_red.jpg"
          alt="Llave 2"
          className="key"
          draggable="false"
        />
        <img
          src="/imagenes/Skullkey_yellow.jpg"
          alt="Llave 3"
          className="key"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Skills;
