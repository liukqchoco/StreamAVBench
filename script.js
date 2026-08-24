const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const copyButton = document.querySelector("[data-copy-citation]");
const copyLabel = document.querySelector("[data-copy-label]");

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
  revealObserver.observe(element);
});

copyButton?.addEventListener("click", async () => {
  const citation = document.querySelector("#bibtex")?.textContent?.trim();
  if (!citation) return;

  try {
    await navigator.clipboard.writeText(citation);
    copyLabel.textContent = "Copied";
    window.setTimeout(() => {
      copyLabel.textContent = "Copy BibTeX";
    }, 1800);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    const citationElement = document.querySelector("#bibtex");
    if (!selection || !citationElement) return;
    range.selectNodeContents(citationElement);
    selection.removeAllRanges();
    selection.addRange(range);
    copyLabel.textContent = "Selected";
  }
});
