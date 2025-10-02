import React, { useEffect } from "react";
import "../style.css";
import DataService from "../services/DataService";

function Skills() {
  useEffect(() => {
    const keys = document.querySelectorAll(".key");
    const dropArea = document.getElementById("softskills-container");

    keys.forEach((key) => {
      key.style.left = Math.random() * (window.innerWidth - 100) + "px";
      key.style.top = Math.random() * (window.innerHeight - 100) + "px";
    });

    function showSoftSkills() {
      dropArea.style.border = "none";
      dropArea.style.backgroundColor = "transparent";
      dropArea.innerHTML = "";

      DataService.skills.forEach((skill) => {
        const span = document.createElement("span");
        span.className = "badge bg-secondary me-1";
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
