import {getExistingFavs} from "./utills/getExistingFavs.js";
import products from "./data/products.js";

const productsContainer = document.querySelector(".product-container");
const existingFaves = getExistingFavs();

products.forEach(product => {
    let cssClass = "far";

    const doesObjectExist = existingFaves.find(fav => {
        return parseInt (fav.id) === product.id;
    });

    if (doesObjectExist){
        cssClass = "fa";
    }


  productsContainer.innerHTML += 
  `
  <div class="product">
    <h3>${product.name}</h3>
    <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
  </div>
  `;
})

const favButtons = document.querySelectorAll(".product i");

favButtons.forEach(buttons => {
  buttons.addEventListener("click", handleClick);
})

function handleClick(e) {
 
    this.classList.toggle ("fa");
    this.classList.toggle ("far");
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;

  //create array
  //push objects into array
  const existingFaves = getExistingFavs();

  //find a favorite already exists by comparing IDs
  //what is in localstorage compared to what was clicked on.
  const productExists = existingFaves.find( fav => {
    return fav.id === id;
  })
  // if its undefined push a product onto the existing favorites array
  if (productExists === undefined) { 
    const product = {
      id: id,
      name: name
    };

    existingFaves.push(product); // pushing a new product onto array
    saveToFavs(existingFaves); // finally save it to localstorage
  } else {
    // create new array of new favs
    const newFaves = existingFaves.filter( fav => fav.id  ===  id)
    saveToFavs(newFaves);
  }
}


function saveToFavs(product) {
  localStorage.setItem("favorites", JSON.stringify(product));
}

















/*import { getExistingFavs } from "./utils/favFunctions.js";
import products from "./data/products.js";

const productContainer = document.querySelector(".product-container");

const favourites = getExistingFavs();

products.forEach((product) => {
    let cssClass = "far";

    // check through favs array
    // does the product id exist in the favs array
    const doesObjectExist = favourites.find(function (fav) {
        console.log(fav);

        return parseInt(fav.id) === product.id;
    });

    console.log(doesObjectExist);

    // if is in the array, change the style of the i element
    if (doesObjectExist) {
        cssClass = "fa";
    }

    productContainer.innerHTML += `<div class="product">
                                    <h4>${product.name}</h4>
                                    <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
                                </div>`;
});

const favButtons = document.querySelectorAll(".product i");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
        return fav.id === id;
    });

    if (productExists === undefined) {
        const product = { id: id, name: name };
        currentFavs.push(product);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }
}

function saveFavs(favs) {
    localSt*/
