import { getExistingFavs } from "../utils/favFunction.js";
import { displayMessage } from "./displayMessage.js";

export function renderProducts(productsToRender) {
  // console.log(typeof productsToRender, productsToRender);
  const productContainer = document.querySelector(".team-container");

  const favourites = getExistingFavs();

  productContainer.innerHTML = "";

  if (productsToRender.length === 0) {
    displayMessage("danger", "hellofish", ".team-container");
  } else {
    productsToRender.forEach(function (product) {
      let cssClass = "far";

      const doesObjectExist = favourites.find(function (fav) {
        // console.log(fav);

        return parseInt(fav.id) === product.id;
      });
      // console.log(doesObjectExist);

      if (doesObjectExist) {
        cssClass = "fa";
      }

      productContainer.innerHTML += `<div class="team">
            <div class="img-container">
            <img class="img" src="${product.image}">
            </div>
     <h4>${product.name}</h4>
     <h4>${product.price}</h4>
     <i class="${cssClass} fa-heart" data-price="${product.price}" data-image="${product.image}" data-id="${product.id}" data-name="${product.name}"></i>
</div>`;
    });
  }

  // making a value for the choosen div tags

  const favButtons = document.querySelectorAll(".team i");

  // making a function its a anonymous one

  favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;
    const image = this.dataset.image;
    const price = this.dataset.price;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (productExists === undefined) {
      const product = { id: id, name: name, image: image, price: price };

      currentFavs.push(product);

      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }

  function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
  }
}
