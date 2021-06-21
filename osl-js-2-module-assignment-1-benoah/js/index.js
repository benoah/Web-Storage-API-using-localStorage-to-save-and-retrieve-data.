const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

import { displayMessage } from "./components/displayMessage.js";

import { renderProducts } from "./components/renderProducts.js";

import { searchProducts } from "./components/searchProducts.js";

async function getProducts() {
  try {
    const response = await fetch(url);

    const json = await response.json();
    
    //console.log(json.data);
    
    const products = json.data;
    
    renderProducts(products);
    
    searchProducts(products);
    
  } catch (error) {
    
    console.log(error);
    
    displayMessage("error", error, ".team-container");
  }
  
}

getProducts();

