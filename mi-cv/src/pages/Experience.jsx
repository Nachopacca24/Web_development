import React, { useState } from "react";
import "../style.css";

function Experience() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h3 id="experiencia">Experiencia Laboral</h3>
      <img
        src={isOn ? "/imagenes/Doom_switch_on.png" : "/imagenes/Doom_switch_off.png"}
        alt="Interruptor Doom"
        className="doom-switch"
        onClick={() => setIsOn(!isOn)}
      />
      <h4>Presiona el botón de arriba</h4>

      <table
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
    </div>
  );
}

export default Experience;
