const productos = [
  {
    id: "vw-1001",
    nombre: "Cabernet Sauvignon",
    promedioCalificacion: 4.8
  },
  {
    id: "vw-1002",
    nombre: "Chardonnay",
    promedioCalificacion: 4.6
  },
  {
    id: "vw-1003",
    nombre: "Merlot",
    promedioCalificacion: 4.2
  },
  {
    id: "vw-1004",
    nombre: "Malbec",
    promedioCalificacion: 4.7
  },
  {
    id: "vw-1005",
    nombre: "Sauvignon Blanc",
    promedioCalificacion: 4.5
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
