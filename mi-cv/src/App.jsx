import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // Arrastrar llaves
    const keys = document.querySelectorAll(".key");
    const dropArea = document.getElementById("softskills-container");

    keys.forEach((key) => {
      key.style.left = Math.random() * (window.innerWidth - 100) + "px";
      key.style.top = Math.random() * (window.innerHeight - 100) + "px";
    });

    const softSkills = [
      "Trabajo en equipo",
      "Resolución de problemas",
      "Adaptabilidad",
      "Pensamiento crítico",
      "Creatividad",
      "Empatía",
      "Liderazgo",
      "Organización",
      "Negociación",
      "Toma de decisiones",
    ];

    function showSoftSkills() {
  // Quitar borde y fondo del contenedor
  dropArea.style.border = 'none';
  dropArea.style.backgroundColor = 'transparent';

  // Vaciar texto inicial
  dropArea.innerHTML = '';

  // Mostrar soft skills dentro del mismo dropArea
  softSkills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'badge bg-secondary me-1';
    span.textContent = skill;
    dropArea.appendChild(span);
  });
}

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

        const allInside = Array.from(keys).every((k) => dropArea.contains(k));
        if (allInside) showSoftSkills();
      }
    }

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
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom py-1 sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-6" href="#">
            Inicio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fs-6" href="#educacion">
                  Educación
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6" href="#experiencia">
                  Experiencia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6" href="#tecnologias">
                  Tecnologías
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container py-5">
        <h1 className="mb-3">Bienvenidos a mi CV</h1>
        <h2 className="mb-4">Mi nombre es Jose Ignacio Paccagnella</h2>

        {/* Foto */}
        <div className="text-center mb-4">
          <img
            src="/imagenes/foto.jpg"
            alt="Foto de Jose Ignacio Paccagnella"
            className="rounded-circle border border-3 border-dark shadow-sm"
            width="200"
          />
        </div>

        {/* Contacto */}
        <p>
          <strong>Correo electrónico:</strong>{" "}
          <a href="mailto:nachopaccagnella@gmail.com" className="text-warning">
            nachopaccagnella@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/nacho-pacca-0bb280302/"
            target="_blank"
            className="text-info"
          >
            Mi perfil en LinkedIn
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Nachopacca24/Web_development"
            target="_blank"
            className="text-danger"
          >
            Repositorio: Web_development
          </a>
        </p>

        {/* Lenguajes */}
        <h3 className="mt-4">Lenguajes de programación usados</h3>
        <div className="mb-3">
          <span className="badge bg-primary me-1">HTML</span>
          <span className="badge bg-success me-1">Python</span>
          <span className="badge bg-warning text-dark me-1">Java</span>
          <span className="badge bg-info text-dark me-1">C</span>
          <span className="badge bg-danger me-1">C++</span>
        </div>

        {/* Soft Skills */}
        <h3>Soft Skills</h3>
        <div id="softskills-container" className="softskills-container mb-3">
          <p className="text-white">
            Arrastra las llaves de cráneo de colores aquí para desbloquear soft
            skills
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

        {/* Tecnologías */}
        <h3 id="tecnologias" className="section-anchor">
          Tecnologías
        </h3>
        <div className="mb-3">
          <span className="badge bg-dark me-1">Arduino IDE</span>
          <span className="badge bg-dark me-1">Docker</span>
          <span className="badge bg-dark me-1">SQL</span>
          <span className="badge bg-dark me-1">CSV</span>
        </div>

        {/* Educación */}
        <h3 id="educacion" className="mt-4 section-anchor">
          Educación
        </h3>
        <table className="table table-bordered table-striped table-dark">
          <caption className="text-white">
            Tabla de estudios realizados con institución y título
          </caption>
          <thead>
            <tr>
              <th>Año</th>
              <th>Institución</th>
              <th>Título Obtenido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-Presente</td>
              <td>Universidad Francisco Marroquín</td>
              <td>Ingeniería en Computer Science</td>
            </tr>
            <tr>
              <td>2024</td>
              <td>Colegio Montessori</td>
              <td>Bachiller en Ciencias y Letras</td>
            </tr>
          </tbody>
        </table>

        {/* Experiencia */}
        <h3 id="experiencia" className="mt-4 section-anchor">
          Experiencia Laboral
        </h3>
        <img
          src="/imagenes/Doom_switch_off.png"
          alt="Interruptor Doom"
          className="doom-switch"
          id="doomSwitch"
          onClick={() => setIsOn(!isOn)}
        />
        <h4>Presiona el botón de arriba</h4>

        <table
          id="tablaExperiencia"
          className="table table-bordered table-striped table-dark"
          style={{ display: isOn ? "table" : "none" }}
        >
          <caption className="text-white">
            Tabla de experiencia profesional con empresas y puestos
          </caption>
          <thead>
            <tr>
              <th>Periodo</th>
              <th>Empresa</th>
              <th>Puesto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023</td>
              <td>Etiplast</td>
              <td>Ayudante en planta</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>La Habra</td>
              <td>Categorizador de aguacates</td>
            </tr>
          </tbody>
        </table>

        {/* Botón PDF */}
        <div className="text-center my-4">
          <button className="btn btn-warning btn-lg">Descargar CV en PDF</button>
        </div>

        {/* Imagen secundaria */}
        <div className="text-center mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg"
            alt="Carátula Doom"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>

      {/* Fuego */}
      <div className="fuego-pixelado"></div>
    </div>
  );
}

export default App;
