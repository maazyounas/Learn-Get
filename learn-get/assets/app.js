async function loadIncludes() {
  const includeEls = document.querySelectorAll("[data-include]");
  await Promise.all(
    Array.from(includeEls).map(async (el) => {
      const path = el.getAttribute("data-include");
      if (!path) return;
      const res = await fetch(path);
      if (!res.ok) return;
      const html = await res.text();
      el.innerHTML = html;
    })
  );
  document.dispatchEvent(new Event("includes:loaded"));
}

document.addEventListener("DOMContentLoaded", loadIncludes);
