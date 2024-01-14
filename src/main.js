document.querySelectorAll(".card-1-right-menu li").forEach((li) => {
  const span = document.createElement("span");
  span.textContent = " +";
  span.className = "symbol"; // Add a class to the span
  li.appendChild(span);

  li.addEventListener("click", (event) => {
    const p = event.target.nextElementSibling;
    const span = event.target.querySelector("span");
    const container = document.querySelector(".card-1-container");

    // If the clicked <li>'s <p> element is already open, close it
    if (p.classList.contains("open")) {
      p.classList.remove("open");
      span.textContent = " +";
      container.style.height = "95vh"; // Reset the container height
    } else {
      // Close all other <p> elements and reset their symbols
      document.querySelectorAll(".card-1-right-menu li").forEach((otherLi) => {
        const otherP = otherLi.nextElementSibling;
        const otherSpan = otherLi.querySelector("span");
        otherP.classList.remove("open");
        otherSpan.textContent = " +";
      });

      // Open the clicked <li>'s <p> element
      p.classList.add("open");
      span.textContent = " -";
      container.style.height = "auto"; // Set the container height to auto
    }
  });
});
