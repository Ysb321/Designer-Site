// const sidebar = document.querySelector(".sidebar");
// const svgHam = document.querySelector(".svgHam");
// const btnn = document.querySelector(".btnn");
// let isSidebar = true;
// function press() {
//   console.log("Button clicked");
//   if (isSidebar) {
//     sidebar.classList.add("active");
//     svgHam.classList.add("active");
//     isSidebar = false;
//   } else {
//     sidebar.classList.remove("active");
//     svgHam.classList.remove("active");
//     isSidebar = true;
//   }
//   console.log("isSidebar:", isSidebar);
// }


// Get sidebar and sidebar toggle button elements
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".btnn");

// Toggle sidebar visibility
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// Close sidebar when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInside =
    sidebar.contains(event.target) || sidebarToggle.contains(event.target);
  if (!isClickInside && sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
  }
});

// Function to start counting
function startCounting(elementId, targetNumber) {
  let currentNumber = 0;
  const counterElement = document.getElementById(elementId);
  const interval = setInterval(() => {
    currentNumber += 1;
    counterElement.textContent = currentNumber;
    if (currentNumber === targetNumber) {
      clearInterval(interval);
    }
  }, -20); // Adjust speed of counting here
}

// Check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scrolling
function handleScroll() {
  const counter1Element = document.getElementById("counter1");
  const counter2Element = document.getElementById("counter2");

  if (isInViewport(counter1Element)) {
    startCounting("counter1", 200);
  }

  if (isInViewport(counter2Element)) {
    startCounting("counter2", 300);
  }
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);


// scroll animation for that put script tag in html of scrollreaveal

const sr = ScrollReveal({
  distance: '30px',
  duration: 3000,
  delay: 100,
  interval: 200,
  reset: true, // for repeating animation 
  // easing: 'ease-out',
});
sr.reveal('.phase1-right', { origin: 'top' });
sr.reveal('.phase1-left', {origin: 'bottom'});


const sr2 = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 3000,
  delay: 100,
  interval: 200,
  reset: true, // for repeating animation 
  // easing: 'ease-out',
});
sr2.reveal('.box1-right');
sr2.reveal('.box1-left');

// const sr3 = ScrollReveal({
//   distace: '200px',
//   duration: 3000,
//   delay: 100,
//   reset: true,
// });
// sr3.reveal('.contact-right', {origin: 'right'});
// sr3.reveal('.contact-left', {origin: 'left'});

