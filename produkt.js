const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");
console.log(id);

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".buysquare h3").textContent = product.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector(".category").textContent = product.category;
  document.querySelector(".price").textContent = product.price + ":-";

  document.querySelector(".modelname").textContent = product.variantname;
  document.querySelector(".color").textContent = product.basecolour;
  document.querySelector(".relid").textContent = product.relid;

  document.querySelector(".brand2").textContent = product.brandname;
  document.querySelector(".brandinfo").textContent = product.brandbio;
}

/*
const URLparams = new URLSearchParams(window.location.search);
console.log(URLparams);

const id = URLparams.get("id");
console.log(id);

const url = `https://kea-alt-del.dk/t7/api/product/${id}`;

/*{
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
}*/
