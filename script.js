// Define an array of cool colors
const colors = ["#00BEEF", "#042069", "#B00B3D", "#B00B69", "#420455", "#BEADED"];

// Get the button element
const button = document.getElementById("btn");

// Add a click event listener to the button
button.addEventListener("click", changeColor);

// Function to change the color
function changeColor() {
    // Generate a random index to select a color from the array
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    // Get the body element
    const body = document.body;
    
    // Change the background color of the body
    body.style.backgroundColor = colors[randomIndex];
}