// TODO:
// var products = []
var products = []
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = []

// Declare `products`, the different that you will be selling under each of the departments.
var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
];


var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  // Add the product with the matching referenceNumber to the shoppingCart
  shoppingCart.push( products.find(function(element){
	return element.referenceNumber == refNr
  }));


    // calculate the total price of your cart, and use it:
    var finalPrice = 0;
    for ( var item of shoppingCart ) {
        finalPrice += item.price;
    }
  displayTotalPrice(finalPrice);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message

  continueDialog();

};

var continueDialog = function() {
    var continueAnswer = window.prompt('Continue shopping? (y/n)');

    if (continueAnswer == 'y') {
        shopFromStore();
    } else if (continueAnswer == 'n') {
        byebye();
    }
}
var byebye = function() {
        displayProductsFromShoppingCart();
    window.alert('Thanks for shopping with us!');
}

var displayProductsFromShoppingCart = function() {
    // DONE
  // iterate over the shoppingCart and display the contents
    for ( var cartItem of shoppingCart ) {
        var cartRefNr = document.createElement('span');
        cartRefNr.className = 'referenceNumber';
        cartRefNr.innerText = cartItem.referenceNumber;

        var cartName = document.createElement('span');
        cartName.className = 'name';
        cartName.innerText = cartItem.name;

        var cartPrice = document.createElement('span');
        cartPrice.className = 'price';
        cartPrice.innerText = cartItem.price;

        var cartElement = document.createElement('div');
        cartElement.className = 'product';

        cartElement.appendChild(cartRefNr);
        cartElement.appendChild(cartName);
        cartElement.appendChild(cartPrice);

        document.getElementById('shopping-cart').insertBefore(cartElement, document.getElementById('cart-price'));        
    }
  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
    //DONE
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
  return window.prompt('Please enter reference number: ');
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
