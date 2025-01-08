"use strict";
const scrollThreshold = 700;
let lastScrollY = 0;
let navBar = document.getElementById('narbar');
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > scrollThreshold) {
        navBar.style.backgroundColor = "#333";
    }
    else {
        navBar.style.backgroundColor = "#232323c8";
    }
    lastScrollY = currentScrollY;
});
function openSidePanel() {
    const newDiv = document.createElement('div');
    newDiv.id = "panel";
    newDiv.innerHTML = `
  <div id="mobile-side-panel">

    <div id="close-button-container">
      <button id="close-button"><i class="fa-solid fa-xmark"></i></button>
    </div>

      <div class="nav-item">
          <a href="#">About Us <i class="fa-solid fa-plus"></i></a>
          <div class="dropdown-content">
              <a href="#">About AeroTherm</a>
              <a href="#">In The Media</a>
              <a href="#">Contact Us</a>
          </div>
      </div>

      <div class="nav-item">
          <a href="#">Why Us? <i class="fa-solid fa-plus"></i></a>
          <div class="dropdown-content">
              <a href="#">Why Us?</a>
              <a href="#">Why Preheat?</a>
          </div>
      </div>


  </div>

`;
    document.body.appendChild(newDiv);
    let close_button = document.getElementById('close-button');
    let overlay = document.getElementById("overlay");
    close_button.addEventListener('click', () => {
        if (newDiv) {
            document.body.removeChild(newDiv);
            if (overlay) {
                document.body.removeChild(overlay);
            }
        }
    });
}
;
let mobileNavButton = document.getElementById('mobile-nav-button');
mobileNavButton.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.id = "overlay";
    newDiv.style.position = "absolute";
    newDiv.style.width = '100%';
    newDiv.style.height = "100%";
    newDiv.style.backgroundColor = "#5454549b";
    newDiv.style.zIndex = "15";
    document.body.appendChild(newDiv);
    openSidePanel();
    let overlay = document.getElementById("overlay");
    let panel = document.getElementById('panel');
    overlay.addEventListener('click', () => {
        if (newDiv) {
            document.body.removeChild(newDiv);
            if (panel) {
                document.body.removeChild(panel);
            }
        }
    });
});
