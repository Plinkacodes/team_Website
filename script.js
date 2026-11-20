/* Oketch Pauline | CSC 216 Web Technologies */
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Mobile navigation */
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* Dark mode saved across pages using localStorage */
const themeToggle = document.querySelector(".theme-toggle");
const THEME_KEY = "oketch-portfolio-theme";
function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  }
}
let savedTheme = "light";
try {
  savedTheme = localStorage.getItem(THEME_KEY) || "light";
} catch (error) {
  savedTheme = "light";
}
applyTheme(savedTheme);
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(nextTheme);
    try { localStorage.setItem(THEME_KEY, nextTheme); } catch (error) { /* Storage may be unavailable. */ }
  });
}

/* Projects page: data, category filters and E3 search extension */
const projects = [
  { title: "Personal Portfolio Website", category: "html", description: "A multi-page website introducing my skills, learning journey and work." },
  { title: "Responsive Profile Layout", category: "css", description: "A flexible layout that adapts to phone, tablet and desktop screens." },
  { title: "Interactive Theme Switcher", category: "js", description: "A JavaScript control that switches between light and dark themes." },
  { title: "Form Validation Practice", category: "js", description: "A form that checks user input and displays helpful feedback." },
  { title: "GitHub Portfolio Setup", category: "git", description: "A practice project for organising files and tracking changes with Git and GitHub." },
  { title: "Accessible Page Structure", category: "html", description: "A semantic page using headings, navigation, labels and landmarks." }
];
const categoryNames = { html: "HTML", css: "CSS", js: "JavaScript", git: "Git" };
const projectList = document.querySelector("#project-list");
const projectCount = document.querySelector("#project-count");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectSearch = document.querySelector("#project-search");
let activeFilter = "all";

function renderProjects() {
  if (!projectList || !projectCount) return;
  const term = projectSearch ? projectSearch.value.trim().toLowerCase() : "";
  const visible = projects.filter((project) => {
    const matchesCategory = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch = `${project.title} ${project.description} ${categoryNames[project.category]}`.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });
  projectList.replaceChildren();
  visible.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card";
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = categoryNames[project.category];
    const heading = document.createElement("h3");
    heading.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;
    card.append(tag, heading, description);
    projectList.append(card);
  });
  projectCount.textContent = `Showing ${visible.length} of ${projects.length} projects`;
}
if (projectList) {
  renderProjects();
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      renderProjects();
    });
  });
  if (projectSearch) projectSearch.addEventListener("input", renderProjects);
}

/* Contact form validation and live character counter */
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const charCount = document.querySelector("#char-count");
  const formStatus = document.querySelector("#form-status");
  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const messageError = document.querySelector("#message-error");

  if (messageInput && charCount) {
    messageInput.addEventListener("input", () => { charCount.textContent = messageInput.value.length; });
  }
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";
    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your name.";
      valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }
    if (messageInput.value.trim().length < 20) {
      messageError.textContent = "Your message must contain at least 20 characters.";
      valid = false;
    }
    if (valid) {
      formStatus.textContent = "Thank you! Your form has passed the browser validation demonstration.";
      contactForm.reset();
      if (charCount) charCount.textContent = "0";
    }
  });
}
