import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Bio from "./pages/Bio";
import { uppercase, formatoFecha } from "./pipes"; // 👈 Importamos los "pipes"

function App() {
  const nombre = "Jose Ignacio Paccagnella";
  const hoy = new Date();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom py-1 sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-6" href="#">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fs-6" href="#educacion">Educación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6" href="#experiencia">Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6" href="#tecnologias">Tecnologías</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container py-5">
        <h1 className="mb-3">Bienvenidos a mi CV</h1>
        <h2 className="mb-4">Mi nombre es {uppercase(nombre)}</h2> {/* 👈 Pipe aplicado */}

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
        <p><strong>Correo electrónico:</strong>{" "}
          <a href="mailto:nachopaccagnella@gmail.com" className="text-warning">nachopaccagnella@gmail.com</a>
        </p>
        <p><strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/nacho-pacca-0bb280302/" target="_blank" className="text-info">Mi perfil en LinkedIn</a>
        </p>
        <p><strong>GitHub:</strong>{" "}
          <a href="https://github.com/Nachopacca24/Web_development" target="_blank" className="text-danger">Repositorio: Web_development</a>
        </p>

        {/* Biografía */}
        <Bio />

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
        <Skills />

        {/* Tecnologías */}
        <h3 id="tecnologias" className="section-anchor">Tecnologías</h3>
        <div className="mb-3">
          <span className="badge bg-dark me-1">Arduino IDE</span>
          <span className="badge bg-dark me-1">Docker</span>
          <span className="badge bg-dark me-1">SQL</span>
          <span className="badge bg-dark me-1">CSV</span>
        </div>

        {/* Educación */}
        <h3 id="educacion" className="mt-4 section-anchor">Educación</h3>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Año</th>
              <th>Institución</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024 - Presente</td>
              <td>Universidad Francisco Marroquín</td>
              <td>Estudiante de Ingeniería en Computer Science</td>
            </tr>
            <tr>
              <td>2011 - 2023</td>
              <td>Colegio Internacional Montessori</td>
              <td>Bachillerato en Ciencias y Letras</td>
            </tr>
          </tbody>
        </table>

        {/* Experiencia */}
        <Experience />

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

        {/* Fecha con pipe */}
        <p className="text-muted mt-3">Hoy es: {formatoFecha(new Date())}</p> {/* 👈 Pipe aplicado */}
      </div>

      {/* Fuego */}
      <div className="fuego-pixelado"></div>
    </div>
  );
}

export default App;
