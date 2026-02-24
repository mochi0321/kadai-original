document.addEventListener("DOMContentLoaded", () => {

  const isSP = window.matchMedia("(max-width: 767px)").matches;

  const targets = document.querySelectorAll(".name, .portfolio");

  targets.forEach((target, groupIndex) => {

    const originalText = target.textContent.trim();
    target.textContent = "";

    originalText.split("").forEach((char, index) => {

      if (isSP && target.classList.contains("name") && char === " ") {
        target.appendChild(document.createElement("br"));
        return;
      }

      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;

      span.style.animationDelay =
        `${(groupIndex * 0.8) + (index * 0.09)}s`;

      target.appendChild(span);

    });

  });

});



