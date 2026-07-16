/* ---------------------------------------------------------
   HERO AVATAR
   Cycles through the sticker frames in /assets. Add or remove
   frames by editing this array — filenames must match files
   in the assets folder.
--------------------------------------------------------- */
const avatarFrames = [
  { src: "assets/avatar-hi.png", alt: "Sihan waving and saying hi" },
  { src: "assets/avatar-okay.png", alt: "Sihan giving a thumbs up, saying okay" },
  { src: "assets/avatar-love-you.png", alt: "Sihan making a heart shape, saying love you" },
  { src: "assets/avatar-yum.png", alt: "Sihan eating a cookie, saying yum" },
  { src: "assets/avatar-yay.png", alt: "Sihan cheering, saying yay" }
];

function initAvatarCycle() {
  const img = document.getElementById("avatarImg");
  if (!img || avatarFrames.length <= 1) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let index = 0;
  setInterval(() => {
    index = (index + 1) % avatarFrames.length;
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = avatarFrames[index].src;
      img.alt = avatarFrames[index].alt;
      img.style.opacity = "1";
    }, 250);
  }, 2400);
}

/* ---------------------------------------------------------
   PROJECTS
   Add new projects by adding another object to this array.
   Every field is plain text — no build step needed.
--------------------------------------------------------- */
const projects = [
  {
    title: "Lattice-Based Post-Quantum Authentication System",
    role: "Project Leader",
    bullets: [
      "Led a university-funded research project awarded RMB 3,000 in competitive funding.",
      "Researched lattice-based cryptography and post-quantum authentication technologies for financial security applications.",
      "Coordinated project planning, literature review, grant proposal writing, and technical implementation.",
      "Built a proof-of-concept authentication system using Raspberry Pi Pico 2.",
      "Investigated secure authentication methods for protecting financial systems against quantum computing threats."
    ]
  },
  {
    title: "AI-Assisted Financial Analysis of iFLYTEK",
    role: "Independent Project",
    bullets: [
      "Analyzed three years of financial statements and annual reports using generative AI tools including Kimi and ChatGLM.",
      "Evaluated revenue structure, R&D investment, profitability, and operating cash flow.",
      "Developed financial forecasting models to estimate future business performance.",
      "Produced investment recommendations supported by financial analysis and industry research.",
      "Improved business plan quality by integrating AI-assisted financial modeling and strategic analysis."
    ]
  },
  {
    title: "AI-Directed Personal Portfolio Website",
    role: "Independent Project",
    bullets: [
      "Directed AI agent-based workflows using prompt engineering to plan, design, and build this personal portfolio website.",
      "Built the site with HTML, CSS, and JavaScript, structured for easy updates and deployment on Vercel.",
      "Applied the same prompt-engineering framework to optimize resume and LinkedIn profile content for internship applications."
    ]
  }
  // Example of how to add a new project:
  // {
  //   title: "Project Name",
  //   role: "Your Role",
  //   bullets: ["What you did.", "Another result."]
  // }
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  const cards = projects.map((project) => {
    const items = project.bullets.map((b) => `<li>${b}</li>`).join("");
    return `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p class="project-role">${project.role}</p>
        <ul>${items}</ul>
      </article>
    `;
  });

  cards.push(`
    <article class="project-card project-card-placeholder">
      <p>More projects coming soon.</p>
    </article>
  `);

  grid.innerHTML = cards.join("");
}

/* ---------------------------------------------------------
   MOBILE NAV
--------------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   COPY EMAIL TO CLIPBOARD
--------------------------------------------------------- */
function initCopyEmail() {
  const btn = document.getElementById("copyEmailBtn");
  const emailEl = document.getElementById("contactEmail");
  const status = document.getElementById("copyStatus");
  if (!btn || !emailEl || !status) return;

  btn.addEventListener("click", async () => {
    const email = emailEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = "Email copied to clipboard.";
    } catch (err) {
      status.textContent = email;
    }
    setTimeout(() => { status.textContent = ""; }, 3000);
  });
}

/* ---------------------------------------------------------
   FOOTER YEAR
--------------------------------------------------------- */
function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  initCopyEmail();
  initFooterYear();
  initAvatarCycle();
});
