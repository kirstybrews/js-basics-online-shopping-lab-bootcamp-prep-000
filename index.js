var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( { itemName: item, itemPrice: Math.floor(Math.random() * 100) })
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartMultipleItems = []
  if (cart.length > 1) {
   cartMultipleItems.push(cart.forEach(({itemName, itemPrice}) => `${itemName} at ${itemPrice},`))
   return "In your cart, you have" + (cartMultipleItems.length - 1).join("") + ", and " + (i => (i + 1) == cart.length).join("") + "."
  } else if (cart.length == 1) { 
    cart.forEach(({itemName, itemPrice}) => `In your cart, you have ${itemName} at ${itemPrice}.`)
  } else {
    `Your shopping cart is empty.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
