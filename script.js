// Smooth scroll animations for cards and project cards
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card, .project-card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show-card");
    }
  });
});

// Animated fade-in + slide for About section
const aboutSection = document.querySelector(".about");
window.addEventListener("scroll", () => {
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    aboutSection.classList.add("visible");
  }
});
/* Initial footer state (hidden) */
footer {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease-out;
  background: #111;
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 1rem;
}

/* Visible animated footer */
footer.footer-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Optional hover animation for icons or links */
footer a {
  color: #00bcd4;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #ff4081;
}