document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });
});