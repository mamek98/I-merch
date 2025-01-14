

/*
// Fetch products and display them on the product page
if (window.location.pathname.endsWith("product.html") ) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {

            function displayProduct (products) {
            const productContainer = document.getElementById("product-container");
            productContainer.innerHTML = ""; 
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product-card";
                
                productDiv.innerHTML = `
                    <a href="productdetails.html?id=${product.id}" target="content" style="text-decoration: none;">
                        <div>
                            <div class="card-header">
                                <img src="${product.sellerimage}" class="logo">
                                <span class="card-title">${product.seller}</span>
                            </div>
                            <div class="product-image-wrapper">
                                <img src="${product.productimage}" alt="IIUM Robe" class="product-image">
                             </div>
                            <div class="card-content">
                                <h3 class="product-name">${product.name}</h3>
                                 <p class="product-price">${product.price}</p>
                            </div>
                        <div>
                    </a> 
            
                `;
                productContainer.appendChild(productDiv);
            });
        }

        displayProduct(products);

        $(document).ready(function() {

            // Filter products
            $('#filterCategory').on('change', function() {
                const selectedSeller = $(this).val();
                
                const filteredProducts = selectedSeller === "all" ? products : products.filter(product => product.seller === selectedSeller);
                
                displayProduct(filteredProducts);
            });

            $("#searchBox").on("input", function() {
                const searchValue = $(this).val().toLowerCase();
                const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
                
                displayProduct(searchedProducts);
            });


            function updateProductList() {
                // Using products, filter
                const selectedCategory = $("#filterCategory").val();
                const matchesCategory = products.filter(product => selectedCategory === "all" || product.category === selectedCategory);
            
                const searchValue = $("#searchBox").val().toLowerCase();
                const searchedProducts = matchesCategory.filter(product => product.name.toLowerCase().includes(searchValue));
            
                if (searchedProducts.length === 0) {
                    $("#productList").html("<p> No products found </p>");
                } else {
                    displayProduct(searchedProducts);
                }
            }
            
            updateProductList();
            
        });

        })
        .catch(error => console.error("Error fetching products:", error));
}


// Fetch products and display them on the product page
if (window.location.pathname.endsWith("home.html")) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {

            function displayProduct (products) {
            const productContainer = document.getElementById("product-container");
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product-card";
                productDiv.innerHTML = `
                    <a href="productdetails.html?id=${product.id}" target="content" style="text-decoration: none;">
                        <div>
                            <div class="card-header">
                                <img src="${product.sellerimage}" class="logo">
                                <span class="card-title">${product.seller}</span>
                            </div>
                            <div class="product-image-wrapper">
                                <img src="${product.productimage}" alt="IIUM Robe" class="product-image">
                             </div>
                            <div class="card-content">
                                <h3 class="product-name">${product.name}</h3>
                                 <p class="product-price">${product.price}</p>
                            </div>
                        <div>
                    </a> 
            
                `;
                productContainer.appendChild(productDiv);
            });
        }

        displayProduct(products);
        })
        .catch(error => console.error("Error fetching products:", error));
}


// Fetch product details and display them on the details page
if (window.location.pathname.endsWith("productdetails.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                document.getElementById("productName").textContent = product.name;
                document.getElementById("productImage").src = product.productimage;
                //document.getElementById("productDescription").textContent = product.description;
                document.getElementById("productPrice").textContent = product.price;
            } else {
                document.getElementById("productName").textContent = "Product not found";
            }
        })
        .catch(error => console.error("Error fetching product details:", error));
}



*/

const apiUrl = "products.json";

// Fetch products and display them on the product page
if (window.location.pathname.endsWith("product.html") ) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {

            function displayProduct (products) {
            const productContainer = document.getElementById("product-container");
            productContainer.innerHTML = ""; 
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product-card";
                
                productDiv.innerHTML = `
                    <a href="productdetails.html?id=${product.id}" target="content" style="text-decoration: none;">
                        <div>
                            <div class="card-header">
                                <img src="${product.sellerimage}" class="logo">
                                <span class="card-title">${product.seller}</span>
                            </div>
                            <div class="product-image-wrapper">
                                <img src="${product.productimage}" alt="IIUM Robe" class="product-image">
                             </div>
                            <div class="card-content">
                                <h3 class="product-name">${product.name}</h3>
                                 <p class="product-price">${product.price}</p>
                            </div>
                        <div>
                    </a> 
            
                `;
                productContainer.appendChild(productDiv);
            });
        }

        displayProduct(products);

        $(document).ready(function() {

            // Filter products
            $('#filterCategory').on('change', function() {
                const selectedSeller = $(this).val();
                
                const filteredProducts = selectedSeller === "all" ? products : products.filter(product => product.seller === selectedSeller);
                
                displayProduct(filteredProducts);
            });

            $("#searchBox").on("input", function() {
                const searchValue = $(this).val().toLowerCase();
                const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
                
                displayProduct(searchedProducts);
            });


            function updateProductList() {
                // Using products, filter
                const selectedCategory = $("#filterCategory").val();
                const matchesCategory = products.filter(product => selectedCategory === "all" || product.category === selectedCategory);
            
                const searchValue = $("#searchBox").val().toLowerCase();
                const searchedProducts = matchesCategory.filter(product => product.name.toLowerCase().includes(searchValue));
            
                if (searchedProducts.length === 0) {
                    $("#productList").html("<p> No products found </p>");
                } else {
                    displayProduct(searchedProducts);
                }
            }
            
            updateProductList();
            
        });

        })
        .catch(error => console.error("Error fetching products:", error));
}


// Fetch products and display them on the product page
if (window.location.pathname.endsWith("home.html")) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {

            function displayProduct (products) {
            const productContainer = document.getElementById("product-container");
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product-card";
                productDiv.innerHTML = `
                    <a href="productdetails.html?id=${product.id}" target="content" style="text-decoration: none;">
                        <div>
                            <div class="card-header">
                                <img src="${product.sellerimage}" class="logo">
                                <span class="card-title">${product.seller}</span>
                            </div>
                            <div class="product-image-wrapper">
                                <img src="${product.productimage}" alt="IIUM Robe" class="product-image">
                             </div>
                            <div class="card-content">
                                <h3 class="product-name">${product.name}</h3>
                                 <p class="product-price">${product.price}</p>
                            </div>
                        <div>
                    </a> 
            
                `;
                productContainer.appendChild(productDiv);
            });
        }

        displayProduct(products);
        })
        .catch(error => console.error("Error fetching products:", error));
}


// Fetch product details and display them on the details page
if (window.location.pathname.endsWith("productdetails.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                document.getElementById("productName").textContent = product.name;
                document.getElementById("productImage").src = product.productimage;
                //document.getElementById("productDescription").textContent = product.description;
                document.getElementById("productPrice").textContent = product.price;
            } else {
                document.getElementById("productName").textContent = "Product not found";
            }
        })
        .catch(error => console.error("Error fetching product details:", error));
}

// Click Add to Cart button to store data on local storage
document.getElementById("addToCart-btn").addEventListener('click', (event) => {
    event.preventDefault();

    const productImage = document.getElementById("productImage").src;
    const productName = document.getElementById("productName").textContent;
    const productPrice = parseFloat(
        document.getElementById("productPrice").textContent.replace("RM ", "")
    );
    const kuliyyah = document.getElementById("kuliyyah").value;
    const size = document.getElementById("size").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    
    const newItem = {
        productImage: productImage,
        productName: productName,
        productPrice: productPrice,
        kuliyyah: kuliyyah,
        size: size,
        quantity: quantity
    };

    const uniqueId = kuliyyah + "-" + productName + "-" + size;
    const existingItem = JSON.parse(localStorage.getItem(uniqueId));

    if (existingItem) {
    // If the item already exists, update the quantity
    existingItem.quantity += quantity; 
    } else {
    // If the item doesn't exist, create a new entry
    newItem.quantity = quantity; // Ensure initial quantity is set correctly
    }

    localStorage.setItem(uniqueId, JSON.stringify(existingItem || newItem));

    // Navigate to the cart page
    window.location.href = "cart.html";
});

// Click Buy Now button to store data on local storage
document.getElementById("buynow-btn").addEventListener('click', (event) => {
    event.preventDefault();

    const productImage = document.getElementById("productImage").src;
    const productName = document.getElementById("productName").textContent;
    const productPrice = parseFloat(
        document.getElementById("productPrice").textContent.replace("RM ", "")
    );
    const kuliyyah = document.getElementById("kuliyyah").value;
    const size = document.getElementById("size").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);

    const directItem = {
        productImage: productImage,
        productName: productName,
        productPrice: productPrice,
        kuliyyah: kuliyyah,
        size: size,
        quantity: quantity
    };
    
    localStorage.setItem("directPay", JSON.stringify(directItem));

    // Navigate to the checkout page
    window.location.href = "checkout.html";

});