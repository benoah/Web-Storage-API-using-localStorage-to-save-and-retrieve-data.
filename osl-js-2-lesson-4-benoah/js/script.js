const Name = "Mathias";

const order = [
  {
    "id": 1,
    "order_id": "2101",
    "item_count": 2,
    "items": [
      {
        "id": 1,
        "name": "Addidas Jacket",
        "price": "1000"
      },
      {
        "id": 2,
        "name": "Nike Cortez",
        "price": "2500"
      }
    ]
  }
];

localStorage.setItem("KEY", Name);
localStorage.setItem("ORDER", JSON.stringify(order));

const orderFromLStore = localStorage.getItem("ORDER");

//console.log(typeof orderFromLStore, orderFromLStore);

const covertedOrder = JSON.parse(orderFromLStore);

localStorage.removeItem("KEY");











// console.log(typeof orderFromLStore, orderFromLStore );





/*
 before storing and array into local storage you have to
 convert the array into string
 JSON.stringify();
*/







/*
 localStorage.getItem("KEY");
 localStorage.removeItem("KEY");

 localStorage.clear();
*/

// code here






/*
  The Web Storage API lets browsers securely store key/value pairs.

  - data persists even when the browser is closed and reopened or tabs opened and closed.
  - data is stored per origin (a website), new rows will be created for different websites.
*/

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
