
const cartContainer = document.querySelector(".cartContainer");

// Create new cartItem as item is added to the Cart
function addCartItem(itemId, imgSrc, itemName, itemPrice, itemQuantity) {
    // Create the cartItem div
    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    cartItem.id = itemId;

    // Create the image element
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "item image";
    img.height = 100;
    img.width = 100;

    // Create the unordered list
    const ul = document.createElement("ul");

    // Create list items
    const liName = document.createElement("li");
    liName.innerHTML = `Item: <p class="itemName">${itemName}</p>`;

    const liPrice = document.createElement("li");
    liPrice.innerHTML = `Price: RM <p class="ItemPrice">${itemPrice.toFixed(2)}</p>`;

    const liQuantity = document.createElement("li");
    liQuantity.innerHTML = `Quantity: `;

    // Create quantity controls
    const btnSubtract = document.createElement("button");
    btnSubtract.className='quantityButton';
    btnSubtract.classList.add("sub-qty");
    btnSubtract.textContent = "-";

    const quantityDisplay = document.createElement("p");
    quantityDisplay.classList.add("itemQuantity");
    quantityDisplay.id = itemId + "-qty";
    quantityDisplay.textContent = itemQuantity;

    const btnAdd = document.createElement("button");
    btnAdd.className='quantityButton';
    btnAdd.classList.add("add-qty");
    btnAdd.textContent = "+";

    // Append buttons and quantity to the quantity list item
    liQuantity.appendChild(btnSubtract);
    liQuantity.appendChild(quantityDisplay);
    liQuantity.appendChild(btnAdd);

    // Append list items to the unordered list
    ul.appendChild(liName);
    ul.appendChild(liPrice);
    ul.appendChild(liQuantity);

    // Append image and list to the cartItem div
    cartItem.appendChild(img);
    cartItem.appendChild(ul);

    // Append the cartItem div to the container
    cartContainer.appendChild(cartItem);
}

// Button to add or substract quantity
cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-qty")) {
      // Handle the "+" button click
      const quantityDisplay = event.target.parentElement.querySelector(".itemQuantity");
      if (quantityDisplay) {
        let qty = parseInt(quantityDisplay.textContent);
        qty = isNaN(qty) ? 0 : qty + 1; // Increment quantity
        quantityDisplay.textContent = qty;
  
        // Update localStorage quantity
        const cartItem = event.target.closest(".cartItem");
        if (cartItem) {
          const itemId = cartItem.id; // Assuming the item ID is stored in the element's ID
          const existingItem = JSON.parse(localStorage.getItem(itemId));
          if (existingItem) {
            existingItem.quantity = qty;
            localStorage.setItem(itemId, JSON.stringify(existingItem));
          }
        }
      }
    } else if (event.target.classList.contains("sub-qty")) {
      // Handle the "-" button click
      const quantityDisplay = event.target.parentElement.querySelector(".itemQuantity");
      if (quantityDisplay) {
        let qty = parseInt(quantityDisplay.textContent);
        qty = isNaN(qty) || qty <= 0 ? 0 : qty - 1; // Decrement quantity, but prevent going below 0
        quantityDisplay.textContent = qty;
  
        // Update localStorage quantity (if quantity is 0, remove item)
        const cartItem = event.target.closest(".cartItem");
        if (cartItem) {
          const itemId = cartItem.id;
          const existingItem = JSON.parse(localStorage.getItem(itemId));
          if (existingItem) {
            if (qty === 0) {
              localStorage.removeItem(itemId);
              cartItem.remove(); // Remove the cart item from the DOM
            } else {
              existingItem.quantity = qty;
              localStorage.setItem(itemId, JSON.stringify(existingItem));
            }
          }
        }
      }
    }
  });

// Reset cart list
document.getElementById("reset").addEventListener('click', (event) => {
    localStorage.clear();
    window.location.href = "cart.html";
});

// Pay for all items item cart
document.getElementById("paynow-btn").addEventListener('click', (event) => {
    window.location.href = "checkout.html";
});



// Update cart function
function updateCart() {
  const keys = Object.keys(localStorage);

  keys.forEach((key) => {
    if (key !== "directPay") { // Exclude "directPay" key
      const item = localStorage.getItem(key);
      if (item) {
        try {
          const cartItem = JSON.parse(item);
          if (cartItem && cartItem.kuliyyah && cartItem.productName && cartItem.size) {
            const uniqueId = `${cartItem.kuliyyah}-${cartItem.productName}-${cartItem.size}`;
            addCartItem(uniqueId, cartItem.productImage, uniqueId, cartItem.productPrice, cartItem.quantity);
          }
        } catch (e) {
          console.warn(`Invalid cart item in localStorage key: ${key}`);
        }
      }
    }
  });
}

// Update on page load
updateCart();

