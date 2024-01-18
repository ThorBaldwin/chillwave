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

gsap.to("#navbar, #about-navbar, #services-navbar", {
  opacity: 1,
  duration: 0.5, // Adjust based on your desired animation duration
  ease: "power4.in", // Adjust the easing function as needed
  onComplete: function () {
    // Animation complete, you can add additional actions here if needed
  },
});

gsap.to("#hero, #about-header, #services-header, services-header-pic", {
  opacity: 1,
  duration: 1, // Adjust based on your desired animation duration
  ease: "power4.in", // Adjust the easing function as needed
  onComplete: function () {
    // Animation complete, you can add additional actions here if needed
  },
});

gsap.from(".hero-pic", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".hero-pic",
    start: "top 85%", // Adjust as needed
  },
});

gsap.from(".gallery", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".about-us-container", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".about-us-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".quote-container", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".quote-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".footer-container", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.to("#services-navbar, #instructor-navbar, #contact-navbar", {
  opacity: 1,
  duration: 0.5, // Adjust based on your desired animation duration
  ease: "power4.in", // Adjust the easing function as needed
  onComplete: function () {
    // Animation complete, you can add additional actions here if needed
  },
});

gsap.to(
  "#services-header, #services-header-pic, #instructor-header, #brandon, #contact-header, #contact-card",
  {
    opacity: 1,
    duration: 1, // Adjust based on your desired animation duration
    ease: "power4.in", // Adjust the easing function as needed
    onComplete: function () {
      // Animation complete, you can add additional actions here if needed
    },
  }
);

gsap.from(".card-4-container", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".card-4-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".card-2-container", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".card-2-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".card-3-container", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".card-3-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from("#russell", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: "#russell",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from("#russell-bio", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: "#russell-bio",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from("#emma", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: "#emma",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from("#emma-bio", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: "#emma-bio",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".footer-container-instructor", {
  opacity: 0,
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".footer-container-instructor",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".about-page-right-container", {
  opacity: 0,
  duration: 1.3,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".about-page-right-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".about-card-5-container", {
  opacity: 0,
  duration: 1.3,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".about-card-5-container",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".footer-container-about", {
  opacity: 0,
  duration: 1.3,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".footer-container-about",
    start: "top 90%", // Adjust as needed
  },
});

gsap.from(".footer-left-container-contact", {
  opacity: 0,
  duration: 1.3,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".footer-left-container-contact",
    start: "top 90%", // Adjust as needed
  },
});
