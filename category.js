/*const categoryList = document.querySelector("#categorylist");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

fetch("https://kea-alt-del.dk/t7/api/categories/")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="produktliste.html?category=${category.category}">${category.category}</a></li>`;
    });
  });

if (params.has("category")) {
  url = "https://kea-alt-del.dk/t7/api/products?category=" + category;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}
*/

const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="produktliste.html?category=${category.category}">${category.category}</a></li>`;
    });
  });

if (params.has("category")) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
  //} else {
  // url = "https://kea-alt-del.dk/t7/api/products";
}
