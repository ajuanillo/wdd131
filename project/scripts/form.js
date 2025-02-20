const products = [
  {
    id: "vw-1001",
    name: "Cabernet Sauvignon"
  },
  {
    id: "vw-1002",
    name: "Chardonnay"
  },
  {
    id: "vw-1003",
    name: "Merlot"
  },
  {
    id: "vw-1004",
    name: "Malbec"
  },
  {
    id: "vw-1005",
    name: "Sauvignon Blanc"
  }
];

const productSelect = document.getElementById("product");
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

/*
Use localStorage to keep track of the number of reviews completed by the user client by adding a counter to the form submission review.html page. Every time that page is loaded successfully upon form submission, add one to the counter.
*/
let reviewCounter = localStorage.getItem("reviewCounter");
if (!reviewCounter) {
  reviewCounter = 0;
}
