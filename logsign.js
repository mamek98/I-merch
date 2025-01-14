const apiUrl = "user.json";

// Fetch products and display them on the product page

if (window.location.pathname.endsWith("login.html")) {

    document.getElementById("login").addEventListener("click", () => {

    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            
            const newusername = document.getElementById("username").value;
            const newpassword = document.getElementById("password").value;
            
            const user =  users.find(user => user.username === newusername && user.password === newpassword);

            if(user){
                window.location.href = "index.html";
            }

            else{
                alert("Invalid username or password. Please try again.");
            }

            document.getElementById("loginForm").reset();
           
        })

        .catch(error => console.error("Error fetching products:", error));
    });

    document.getElementById("signUp").addEventListener("click", () => {
    
        window.location.href = "register.html";
    
    });
}


document.getElementById("signUp").addEventListener("click", () => {
    
    window.location.href = "register.html";

});


// Fetch product details and display them on the details page
if (window.location.pathname.endsWith("register.html")) {

    document.getElementById("signUp").addEventListener("click",() => { 


    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {

            const newusername = document.getElementById("username").value;
            const newpassword = document.getElementById("password").value;
            
            if(username && password){
            users.push({id:users.length+1,username:newusername,password:newpassword,});

            window.location.href = "login.html";
            }
            
        })
        .catch(error => console.error("Error fetching product details:", error));
    });
}

