import { renderProducts } from "./renderProducts.js"
// making a function for search product
export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    // event.preventDefault();
    // console.log(event);
    // made a value to store what is key down
    const searchValue = event.target.value.trim().toLowerCase();


    // console.log(products);


    const filteredProducts = products.filter(product => {

      const productPrice = parseFloat(product.price);
      const productName = product.name;
      // console.log( "searchValue", typeof productPrice,productName );
      // productName is equal to what is in the product data return it 

      if (productName.toLowerCase().startsWith(searchValue)) {
        return true;
      }

      let parsedNumber = parseFloat(searchValue);
      if (productPrice <= parsedNumber) return true;





    });










    // to be honest this to function here is kind of defuse for me, I did take a line from stackoverflow and the lightbulb 
    //  gave me some choice and i just did hit it, its working
    /*
        function filterPrice(searchValue) {
          return showprice(searchValue);
        }
  
  
        function showprice(searchValue) {
          return (product) => parseFloat(product.price) <= parseFloat(searchValue);
        }
  
        */


    renderProducts(filteredProducts);


  };
}