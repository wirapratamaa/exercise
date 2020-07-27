// Variable
var totalPrice = 0,
  pricePizza,
  sizePrice = 0,
  toppingPrice = 0;

//Calculate menu 
function selectedMenu() {
  if (document.getElementById("pizza1").checked) {
    pricePizza = document.getElementById("pizza1").value;
  } else if (document.getElementById("pizza2").checked) {
    pricePizza = document.getElementById("pizza2").value;
  } else if (document.getElementById("pizza3").checked) {
    pricePizza = document.getElementById("pizza3").value;
  }
    filterTopping();
    updateTotal();
}

//Calculate size  
function selectSize() {
  if (document.getElementById("size1").checked) {
    sizePrice = parseInt(document.getElementById("size1").value);
  } else if (document.getElementById("size2").checked) {
    sizePrice = parseInt(document.getElementById("size2").value);
  } else if (document.getElementById("size3").checked) {
    sizePrice = parseInt(document.getElementById("size3").value);
  }
    updateTotal();
}

// Looping check Topping
var i;
for (i = 0; i < 12; i++) {
  window["topping" + i] = document.getElementById("topping" + i);
}

//Disable topping checkbox & uncheck checkbox if topping disable
var pizza1ToppingIds = [0, 3, 6, 9, 10, 8],
  pizza2ToppingIds = [3, 6, 9, 1, 4, 7, 2, 8],
  pizza3ToppingIds = [3, 6, 9, 10, 2, 5, 8, 11];
function updateToppingCheckboxes(pizzaId) {
  for (i = 0; i < 12; i++) {
    window["topping" + i].disabled =
      window["pizza" + pizzaId + "ToppingIds"].indexOf(i) == -1;
  }
}

function filterTopping() {
  if (document.getElementById("pizza1").checked) {
    updateToppingCheckboxes(1);
  } else if (document.getElementById("pizza2").checked) {
    updateToppingCheckboxes(2);
  } else if (document.getElementById("pizza3").checked) {
    updateToppingCheckboxes(3);
  }

  uncheckList();
}

function uncheckList() {
  var allToppings = document.getElementsByName("topings");
  for (let i = 0; i < allToppings.length; i++) {
    if (allToppings[i].disabled && allToppings[i].checked) {
      allToppings[i].checked = false;
      toppingPrice -= parseInt(allToppings[i].value);
    }
  }
}
//Calculate topping price
function toppPrice(e) {
  if (e.checked) {
    toppingPrice += parseInt(e.value);
  } else {
    toppingPrice -= parseInt(e.value);
  }
  updateTotal();
}
//Calculate total price
function updateTotal() {
  pizza = parseInt(pricePizza);
  size = parseInt(sizePrice);
  topp = parseInt(toppingPrice);
  totalPrice = pizza + size + topp;
  document.getElementById("priceTotal").innerHTML = totalPrice;
}
