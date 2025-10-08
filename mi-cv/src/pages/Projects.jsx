import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Nachopacca24/repos")
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data)) return;

        // 🔹 Tu repo principal
        const rngRepo = data.find((r) => r.name === "Projecto_RNG");

        // 🔹 Filtramos otros repos que no sean forks y no sean ese
        const otherRepos = data.filter(
          (r) => r.name !== "Projecto_RNG" && !r.fork
        );

        // 🔹 Unimos todo (primero tu repo, luego los demás)
        const orderedRepos = rngRepo ? [rngRepo, ...otherRepos] : otherRepos;

        setRepos(orderedRepos);
      })
      .catch((error) => console.error("Error al cargar repositorios:", error));
  }, []);

  return (
    <div className="mt-5">
      <h3 className="mb-4 text-center text-warning fw-bold">
        Mis Proyectos Favoritos
      </h3>

      {repos.length > 0 ? (
        <div
          id="projectsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000" // ⏱️ cambia cada 4 segundos
          data-bs-pause="hover"   // ⏸️ se pausa si pasas el mouse
        >
          <div className="carousel-inner">
            {repos.map((repo, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={repo.id}
              >
                <div className="d-flex justify-content-center">
                  <div
                    className="card bg-dark text-white shadow-lg border border-warning"
                    style={{ width: "25rem", minHeight: "14rem" }}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title text-warning fw-bold mb-3">
                        {repo.name}
                      </h5>
                      <p className="card-text text-light">
                        {repo.description || "Sin descripción disponible."}
                      </p>
                      <p className="text-warning mt-2">
                        ⭐ {repo.stargazers_count} estrellas
                      </p>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-warning mt-2"
                      >
                        Ver en GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles del carrusel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      ) : (
        <p className="text-center text-muted">Cargando proyectos...</p>
      )}
    </div>
  );
}

export default Projects;
