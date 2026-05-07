console.log("Free Style");
// ================= PRODUCTS BUTTONS =================

let cartButtons = document.querySelectorAll(".price-cart button");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert("Product Added To Cart 🛒");

    });

});


// ================= NAVBAR SHADOW =================

window.addEventListener("scroll", () => {

    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 5px 20px rgba(255,0,0,0.2)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ================= DARK MODE =================

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // تغيير الايقونة

    if(document.body.classList.contains("light-mode")){

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

    }

    else{

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

    }

});