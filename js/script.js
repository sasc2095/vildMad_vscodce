//uutiizppilsesjcptglo.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0
//   .NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I;

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("Arstid1" + "Arstid2" + "Arstid3" + "Arstid4");

fetch("https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmadDatabase?Arstid@>cs" + id, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProducts(products) {
  products.forEach(showProduct);
  console.log("her");
}

function showProduct() {
  console.log("herher");
}

// burgermenu

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
