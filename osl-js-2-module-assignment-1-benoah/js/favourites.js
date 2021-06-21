import { getExistingFavs } from "./utils/favFunction.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".team-container");

if (favourites.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}

favourites.forEach((favourite) => {
    console.log( favourite);
    productContainer.innerHTML += `<div class="team">
    <div class="img-container">
    <img class="img" src="${favourite.image}">
    </div>
    <h4>${favourite.name}</h4>
    <i class="fa fa-heart"></i>
                                </div>`;
});



