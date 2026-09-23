/* =========================================================
   SkyLink Reservations — front-end interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      navToggle.textContent = mainNav.classList.contains("open") ? "✕" : "☰";
    });
    // Close menu when a link is tapped
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.textContent = "☰";
      });
    });
  }

  /* ---------- Callback form (demo validation) ---------- */
  const form = document.getElementById("callbackForm");
  const formNote = document.getElementById("formNote");
  const noteDefault = formNote ? formNote.textContent : "";

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const topic = form.topic.value;

      formNote.classList.remove("success", "error");

      if (!name || !phone || !topic) {
        formNote.textContent = "Please fill in every field so we can call you back.";
        formNote.classList.add("error");
        return;
      }

      // Basic phone sanity check: at least 7 digits
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 7) {
        formNote.textContent = "That phone number looks too short — please check it.";
        formNote.classList.add("error");
        return;
      }

      // Demo only — no data is sent anywhere.
      formNote.textContent = "Thanks, " + name.split(" ")[0] + "! A specialist will call you within 60 seconds.";
      formNote.classList.add("success");
      form.reset();

      window.setTimeout(() => {
        formNote.textContent = noteDefault;
        formNote.classList.remove("success");
      }, 6000);
    });
  }

  /* ---------- Reveal-on-scroll animation ---------- */
  const revealTargets = document.querySelectorAll(
    ".feature-card, .airline-item, .deal-card, .desk-copy, .desk-badge, .section-title, .trust-item"
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.querySelector(".site-header");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (header) {
          header.style.boxShadow =
            window.scrollY > 10 ? "0 6px 24px rgba(11,31,75,.1)" : "none";
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  /* ---------- Auto-fill legal page dates ---------- */
  document.querySelectorAll(".legal-date").forEach((el) => {
    el.textContent = new Date().toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    });
  });
})();
