/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  console.log(loadCart());
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  tbody.textContent = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let tbody = document.querySelector('tbody');
  // console.log(cart.items.items[0]);
  for (let i = 0; i < cart.items.length; i++){
    let row = document.createElement('tr');
    tbody.appendChild(row);
    let tdRemove = document.createElement('td');
    tdRemove.innerText = 'X';
    tdRemove.id = i;
    row.appendChild(tdRemove);
    let tdQuantity = document.createElement('td');
    tdQuantity.innerText = `${cart.items[i].quantity}`;
    row.appendChild(tdQuantity);
    let tdProduct = document.createElement('td');
    tdProduct.innerText = `${cart.items[i].product}`;
    row.appendChild(tdProduct);
  }


  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
let id = event.target.id.value;
cart.removeItem(id);
// let stringData = JSON.stringify(cart.items);
//   localStorage.setItem('cart', stringData);
  cart.saveToLocalStorage();
  renderCart();

  // Done: When a delete link is clicked, use cart.removeItem to remove the correct item
  // Done: Save the cart back to local storage
  // : Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
