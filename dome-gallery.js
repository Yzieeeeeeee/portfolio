function DomeGallery(container, images = []) {
  if (!container) return;

  container.innerHTML = `
    <div class="sphere-root">
      <main class="sphere-main">
        <div class="stage">
          <div class="sphere"></div>
        </div>
        <div class="viewer">
          <div class="scrim"></div>
        </div>
      </main>
    </div>
  `;

  const root = container.querySelector(".sphere-root");
  const sphere = container.querySelector(".sphere");
  const viewer = container.querySelector(".viewer");
  const scrim = container.querySelector(".scrim");

  const segments = 35;
  const xCols = Array.from({ length: segments }, (_, i) => -37 + i * 2);
  const evenY = [-4, -2, 0, 2, 4];
  const oddY  = [-3, -1, 1, 3, 5];

  // BUILD FULL GRID
  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenY : oddY;
    return ys.map(y => ({ x, y }));
  });

  coords.forEach((pos, i) => {
  // Pick image
  let src = images[i % images.length];

  // Fallback if src is empty, null, missing, or undefined
  if (!src || src.trim() === "" || src === undefined) {
    src = "images/Home page.jpg";  // ← Use any image you want as fallback
  }


    const tile = document.createElement("div");
    tile.className = "item";
    tile.style.setProperty("--offset-x", pos.x);
    tile.style.setProperty("--offset-y", pos.y);

    tile.innerHTML = `
      <div class="item__image">
        <img src="${src}">
      </div>
    `;

    sphere.appendChild(tile);

    // CLICK → POPUP
    tile.onclick = () => openPopup(src);
  });

  // ROTATION
  let drag = false;
  let lastX = 0, lastY = 0, rotX = 0, rotY = 0;

  container.onmousedown = e => {
    drag = true;
    lastX = e.clientX;
    lastY = e.clientY;
  };

  container.onmousemove = e => {
    if (!drag) return;
    rotY += (e.clientX - lastX) * 0.1;
    rotX -= (e.clientY - lastY) * 0.1;
    lastX = e.clientX;
    lastY = e.clientY;
    sphere.style.transform =
      `translateZ(-520px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  window.onmouseup = () => drag = false;

  // POPUP
  function openPopup(src) {
  root.dataset.open = "true";

  const popup = document.createElement("div");
  popup.className = "popup";   // ← THIS decides the popup style

  popup.innerHTML = `<img src="${src}">`;

  viewer.appendChild(popup);

  scrim.onclick = () => {
    root.dataset.open = "";
    popup.remove();
  };
}

}
