
const totalPriceElement = document.getElementById("totalPrice");
let totalPrice = 0.00;

function addOrderToCheckout(unitImage, productKulliyyah, productName, productSize, unitPrice, unitQuantity) {
    // Ensure unitPrice and unitSubtotal are floats
    unitPrice = parseFloat(unitPrice).toFixed(2);

    // Calculating subtotal for each order
    const unitSubtotal = (unitPrice * unitQuantity).toFixed(2);

    // Calculating total
    totalPrice += (unitPrice * unitQuantity);
    totalPriceElement.textContent = totalPrice.toString();

    // Get the main container element
    const container = document.getElementById("main");

    // Create the product container div
    const productContainer = document.createElement("div");
    productContainer.className = "product-container";
    productContainer.style.border = "none";

    // Add product image section
    const imageDiv = document.createElement("div");
    imageDiv.id = "productImage";
    imageDiv.innerHTML = `
        <h4>Checkout Order
            <p style="border-style: none; left:3%; font-size: small;" id="productKulliyyah">${productKulliyyah}</p>
        </h4>
        <img src="${unitImage}" id="unitImage">
    `;
    productContainer.appendChild(imageDiv);

    // Add product details section
    const detailsDiv = document.createElement("div");
    detailsDiv.id = "productDetails";
    detailsDiv.innerHTML = `
        <h3 id="productName" style="text-align: right;">${productName}</h3>
        <h3 id="productSize" style="text-align: left;">Size: ${productSize}</h3>
    `;
    productContainer.appendChild(detailsDiv);

    // Add product price details section
    const priceDiv = document.createElement("div");
    priceDiv.id = "productPrice";
    priceDiv.innerHTML = `
        <div class="goCenter">
            <h3>Unit Price</h3>
            <p id="unitPrice">RM ${unitPrice}</p>
        </div>
        <div class="goCenter">
            <h3>Quantity</h3>
            <p id="unitQuantity">${unitQuantity}</p>
        </div>
        <div class="goCenter">
            <h3>Item Subtotal</h3>
            <p id="unitSubtotal">RM ${unitSubtotal}</p>
        </div>
    `;
    productContainer.appendChild(priceDiv);

    // Append the product container to the main container
    container.appendChild(productContainer);
}

function loadItemsFromCart() {
    const keys = Object.keys(localStorage);
  
    keys.forEach((key) => {
      if (key !== "directPay") { // Exclude "directPay" key
        const item = localStorage.getItem(key);
        if (item) {
          try {
            const cartItem = JSON.parse(item);
            addOrderToCheckout(cartItem.productImage, cartItem.kuliyyah, cartItem.productName, cartItem.size ,cartItem.productPrice, cartItem.quantity);
          } catch (e) {
            console.warn(`Invalid cart item in localStorage key: ${key}`);
          }
        }
      }
    });
  }

// Display list of items based on previous page 
if (document.referrer.includes("cart.html")) {
    loadItemsFromCart();

} else {
    const cartItemString = localStorage.getItem("directPay"); 
    if (cartItemString) { // Check if the item exists in localStorage
        const cartItem = JSON.parse(cartItemString); 
        addOrderToCheckout(cartItem.productImage, cartItem.kuliyyah, cartItem.productName, cartItem.size ,cartItem.productPrice, cartItem.quantity);
    } else {
        console.warn("No item found in localStorage for directPay."); 
    }
}

function updateTotalPrice(){
}