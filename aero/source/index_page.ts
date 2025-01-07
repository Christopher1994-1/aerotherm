const scrollThreshold = 700;  // Define the threshold in pixels
let lastScrollY = 0;


let navBar: any = document.getElementById('narbar');

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > scrollThreshold) {
    navBar.style.backgroundColor = "#333";
    
  } else {
    navBar.style.backgroundColor = "#232323c8";
  }

  lastScrollY = currentScrollY;
});
