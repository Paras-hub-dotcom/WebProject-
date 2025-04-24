// food-places.js

// Function to handle clicks on food places
function handleFoodPlaceClick(event) {
  const foodPlaceName = event.currentTarget.querySelector("h2").innerText;
  alert(`You clicked on: ${foodPlaceName}`);
}

// Function to initialize event listeners
function init() {
  // Select all food place list items
  const foodPlaceItems = document.querySelectorAll(".food-places-list li");

  // Add click event listener to each food place item
  foodPlaceItems.forEach((item) => {
    item.addEventListener("click", handleFoodPlaceClick);
  });
}

// Call the init function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
