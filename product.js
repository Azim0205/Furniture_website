// Get the buy now buttons, popup, and popup content
const buyNowBtns = document.querySelectorAll(".buy-now-btn");
const thankYouPopup = document.getElementById("thank-you-popup");
const popupTitle = document.getElementById("popup-title");

// Function to display the popup with the specific product title
function displayThankYou(productId) {
  // Get the product title based on the productId
  // let productTitle = "";
  // switch (productId) {
  //   case 1:
  //     productTitle = "Product 1 Name";
  //     break;
  //   case 2:
  //     productTitle = "Product 2 Name";
  //     break;
  //   case 3:
  //     productTitle = "Product 3 Name";
  //     break;
  //   // Add more cases for additional products
  //   default:
  //     productTitle = "Unknown Product";
  // }

  // Set the product title in the popup
  popupTitle.textContent = `Thank You for Showing interest 
  in lifestyle Furniture!`;

  // Display the popup
  thankYouPopup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
  thankYouPopup.style.display = "none";
}


// Attach click event to each buy now button
buyNowBtns.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the product number from the data-product attribute
    const productId = this.parentElement.dataset.product;
    displayThankYou(productId);
  });
});
