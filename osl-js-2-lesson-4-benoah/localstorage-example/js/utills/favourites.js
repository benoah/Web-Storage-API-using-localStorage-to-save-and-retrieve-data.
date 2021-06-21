import { getExistingFavs } from "./getExistingFavs.js";
const favourites = getExistingFavs();
const productContainer = document.querySelector(".product-container");




if (favourites.length === 0){
    productContainer.innerHTML = "no favorite yet"


}


favourites.forEach (favourites =>{
    productContainer.innerHTML += 
    `
<div class = "product">
<h2> ${favourites.name}</h2>
<i class = "fa fa-heart"> </i>
 </div>
    
    `
   
})
