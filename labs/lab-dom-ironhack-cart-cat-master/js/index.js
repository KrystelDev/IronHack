// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('[placeholder="Quantity"]').value;
  let subtotal = price * quantity;
  let subtotalHTML = product.querySelector('.subtotal').lastChild;
  subtotalHTML.innerText = subtotal;
  console.log('Calculating subtotal, yey!');
  console.log(subtotalHTML);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  let allProducts = document.querySelectorAll('.product');
  console.log(allProducts);
  for (let index = 0; index < allProducts.length; index++) {
    updateSubtotal(allProducts[index]);
  }
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
