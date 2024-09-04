window.addEventListener("DOMContentLoaded", init);

//const id = 1164;
const uri = `https://kea-alt-del.dk/t7/api/products?`;
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
  copy.querySelector(".price1").textContent = product.price + " kr";

  //copy.querySelector(".discounted_price").textContent = "New price:" + product.price + " kr";
  //copy.querySelector(".discount_percentage").textContent = product.discount + "%";

  copy.querySelector("a").href = `produkt.html?${product.id}`;
  copy.querySelector(".readmore").setAttribute("href", `produkt.html?id=${product.id}`);

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("sale");
  }

  document.querySelector("main").appendChild(copy);
}
