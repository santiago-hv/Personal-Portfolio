export function scrollToHashFromEvent(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  e.preventDefault();
  const targetId = href.replace("#", "");
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.style.transition = "box-shadow 0.3s ease";
    setTimeout(() => {
      targetElement.style.boxShadow = "none";
    }, 800);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
