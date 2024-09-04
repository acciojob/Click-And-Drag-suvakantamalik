// Your code here.
// Get the container element
const items = document.querySelector(".items");

// Initialize variables to store the state
let isDown = false;
let startX;
let scrollLeft;

// Mouse down event: triggered when the user starts clicking
items.addEventListener("mousedown", (e) => {
  isDown = true;
  items.classList.add("active");
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
});

// Mouse leave event: triggered when the user moves the mouse out of the container
items.addEventListener("mouseleave", () => {
  isDown = false;
  items.classList.remove("active");
});

// Mouse up event: triggered when the user releases the mouse button
items.addEventListener("mouseup", () => {
  isDown = false;
  items.classList.remove("active");
});

// Mouse move event: triggered when the user moves the mouse
items.addEventListener("mousemove", (e) => {
  if (!isDown) return; // Only run if mouse is held down
  e.preventDefault(); // Prevent default behavior
  const x = e.pageX - items.offsetLeft; // Get current position of the mouse
  const walk = (x - startX) * 3; // Calculate the distance moved
  items.scrollLeft = scrollLeft - walk; // Adjust the scroll position
});
