window.addEventListener("DOMContentLoaded", init);

//const id = 1164;
const uri = `https://kea-alt-del.dk/t7/api/products?limit=5`;
//const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/.webp`;

function init() {
  fetch(uri)
    .then((response) => response.json())
    .then(showProducts);
}

//**Flera produkter */

function showProducts(products) {
  products.forEach(showProduct);
}

//**1 PRODUCT */
function showProduct(product) {
  console.log("product", product);

  const template = document.querySelector("#productTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector("p").textContent = product.price + " kr";

  document.querySelector("main").appendChild(copy);
}
