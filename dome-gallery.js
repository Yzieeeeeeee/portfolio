function DomeGallery(container, images = []) {
  if (!container || images.length === 0) return;

  container.innerHTML = `
    <div class="infinite-menu-root">
       <div class="infinite-menu-container">
          <div class="infinite-menu-track"></div>
       </div>
       <div class="viewer">
         <div class="scrim"></div>
       </div>
    </div>
  `;

  const root = container.querySelector(".infinite-menu-root");
  const track = container.querySelector(".infinite-menu-track");
  const viewer = container.querySelector(".viewer");
  const scrim = container.querySelector(".scrim");

  // Duplicate images multiple times to ensure continuous scrolling
  const displayImages = [...images, ...images, ...images, ...images];

  displayImages.forEach((src) => {
    const wrapperEl = document.createElement("div");
    wrapperEl.className = "menu-item";

    // Add inner content
    wrapperEl.innerHTML = `
      <div class="menu-item-inner">
        <img src="${src}" class="menu-image" alt="Gallery Image" aria-hidden="true" draggable="false">
      </div>
    `;

    // Add click to open popup
    wrapperEl.onclick = () => openPopup(src);

    track.appendChild(wrapperEl);
  });

  // Animation state
  let scrollPos = 0;
  let targetSpeed = 1.5;
  let currentSpeed = 1.5;
  let isDragging = false;
  let startX = 0;

  // Track hover to pause or slow down
  track.addEventListener('mouseenter', () => { targetSpeed = 0.3; });
  track.addEventListener('mouseleave', () => {
    targetSpeed = 1.5;
    isDragging = false;
  });

  // Drag functionality for manual scrolling
  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    targetSpeed = 0;
    currentSpeed = 0;
    track.style.transition = 'none';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    scrollPos -= deltaX;
    startX = e.clientX;
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      targetSpeed = 1.5;
    }
  });

  // Touch support for dragging
  track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    targetSpeed = 0;
    currentSpeed = 0;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    scrollPos -= deltaX;
    startX = e.touches[0].clientX;
  });

  window.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      targetSpeed = 1.5;
    }
  });

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  const targetContainer = container.querySelector(".infinite-menu-container");
  const items = Array.from(track.querySelectorAll('.menu-item'));

  function animate() {
    if (root.dataset.open === "true") {
      requestAnimationFrame(animate);
      return;
    }

    if (!isDragging) {
      currentSpeed = lerp(currentSpeed, targetSpeed, 0.05);
      scrollPos += currentSpeed;
    }

    // 1/4 of total width since we duplicated the array 4 times
    const singleSetWidth = track.scrollWidth / 4;

    if (singleSetWidth > 0) {
      if (scrollPos >= singleSetWidth) {
        scrollPos -= singleSetWidth;
      } else if (scrollPos <= 0) {
        scrollPos += singleSetWidth;
      }
    }

    track.style.transform = `translate3d(${-scrollPos}px, 0, 0)`;

    // 3D Coverflow Effect Math
    const centerX = window.innerWidth / 2;
    const maxDist = window.innerWidth / 1.5;

    // Using container's left as baseline (stable)
    const containerLeft = targetContainer.getBoundingClientRect().left;

    items.forEach((item) => {
      // Calculate virtual screen center of this item
      const itemCenterX = containerLeft + item.offsetLeft + (item.offsetWidth / 2) - scrollPos;

      const distFromCenter = itemCenterX - centerX;
      let normalizedDist = distFromCenter / maxDist;
      normalizedDist = Math.max(-1, Math.min(1, normalizedDist));

      // Calculate hover state manually for buttery smooth transitions locally
      const isHovered = item.matches(':hover');
      item.hoverLerp = lerp(item.hoverLerp || 0, isHovered ? 1 : 0, 0.1);

      // Organic math for modern curve stack
      const rotateY = normalizedDist * -45;  // Rotate to face the center
      const rotateZ = normalizedDist * 4;    // Slight twist
      const scale = (1 - Math.abs(normalizedDist) * 0.15) + (item.hoverLerp * 0.05);
      const translateY = (Math.abs(normalizedDist) * 35) - (item.hoverLerp * 30);

      const zIndex = Math.round(100 - Math.abs(normalizedDist) * 100) + (isHovered ? 50 : 0);

      item.style.transform = `perspective(1200px) translateY(${translateY}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
      item.style.zIndex = zIndex;
      item.style.filter = `brightness(${1 - Math.abs(normalizedDist) * 0.4})`;
    });

    requestAnimationFrame(animate);
  }

  // Start animation after layout
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 100);

  // POPUP LOGIC for tapping to see specifically fully
  function openPopup(src) {
    root.dataset.open = "true";

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `<img src="${src}">`;
    viewer.appendChild(popup);

    // Close logic
    scrim.onclick = () => {
      root.dataset.open = "";
      popup.remove();
    };
  }
}
