//opretter konstanter, der lytter til windows load samt laver urlparameter for hvilken data der skal hentes ned.
const urlParams = new URLSearchParams(window.location.search);
const arstid = urlParams.get("arstid");
console.log(arstid);

//sætter en variable for vores nøgle og udkommentere, hvilken side vi har den fra.
//https://uutiizppilsesjcptglo.supabase.co
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I";

//fetcher data fra database
fetch(
  `https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmadDatabase?${arstid}=is.true`,
  {
    method: "GET",
    headers: {
      apikey: key,
    },
  }
)
  //skriver i js, at vi gerne vil have dens response er json
  .then((res) => res.json())
  .then(showProduct);

function showProduct(product) {
  console.log(product);
  product.forEach(showProducts);
}

function showProducts(products) {
  const template = document.querySelector("#productListTemplate").content;
  const copy = template.cloneNode(true);
  const background_image = document.querySelector(".background image");

  copy.querySelector(".title").textContent = products.title;
  copy.querySelector("img").src = products.profileImage;
  //.gridProductlist #productListTemplate
  copy.querySelector(".a_product").href = `product.html?id=${products.id}`;
  document.querySelector(".gridProductlist").appendChild(copy);
}

// skift baggrunde

//let baggrund = document.getElementById("imageBackground");

//if ((sommer = true)) {
//baggrund.classList.add("sommerBaggrund");
//} else if ((forar = true)) {
//baggrund.classList.add("forarBaggrund");
//} else if ((efterar = true)) {
//baggrund.classList.add("efterarBaggrund");
//} else if ((vinter = true)) {
//baggrund.classList.add("vinterBaggrund");
//}

// burgermenu

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
