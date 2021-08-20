// this will return the element. then i will add event listener to this element.
function elementById(elementId) {
  return document.getElementById(elementId);
}

//  this will update components price like memory and storage then it will update the total price.
function updatePrice(elementId, price) {
  const selectedElement = document.getElementById(elementId);
  selectedElement.innerText = price;
  calculateTotalPrice();
}

//  this will add event listener to element and update price on click
function setListenerAndUpdatePrice(optionElementId, priceTagId, price) {
  elementById(optionElementId).addEventListener("click", function () {
    updatePrice(priceTagId, price);
  });
}

// calculation total price
function calculateTotalPrice() {
  const itemPrice = elementById("item-price").innerText;
  const extraMemoryPrice = elementById("extra-memory-price").innerText;
  const extraStoragePrice = elementById("extra-storage-price").innerText;
  const deliveryChange = elementById("delivery-charge-price").innerText;

  let total = 0;
  total += parseInt(itemPrice);
  total += parseInt(extraMemoryPrice);
  total += parseInt(extraStoragePrice);
  total += parseInt(deliveryChange);

  elementById("total-price").innerText = total;
  elementById("discount-price").innerText = total;
}

// adding discount to total price after pomo code.
function discountOnTotalPrice() {
  const totalPriceElement = elementById("total-price").innerText;
  const totalPrice = parseInt(totalPriceElement);

  const total20PercentPrice = (totalPrice * 20) / 100;
  discountPrice = totalPrice - total20PercentPrice;

  elementById("pomo-code-box").value = "";
  elementById("discount-price").innerText = discountPrice;
}

// =============== adding Listener to the pomo button and updating discount price =====================
elementById("pomo-code-apply-button").addEventListener("click", function () {
  const promoCodeBoxInput = elementById("pomo-code-box").value;
  if (promoCodeBoxInput == "stevekaku") {
    discountOnTotalPrice();
  }
});

//  ===================== memory price updating =================================
setListenerAndUpdatePrice("memory-8gb-option", "extra-memory-price", 0);
setListenerAndUpdatePrice("memory-16gb-option", "extra-memory-price", 180);

//  ===================== storage price updating =================================
setListenerAndUpdatePrice("storage-option-256gb", "extra-storage-price", 0);
setListenerAndUpdatePrice("storage-option-512gb", "extra-storage-price", 100);
setListenerAndUpdatePrice("storage-option-1tb", "extra-storage-price", 180);

//  ===================== delivery price updating =================================
setListenerAndUpdatePrice("delivery-free-option", "delivery-charge-price", 0);
setListenerAndUpdatePrice("delivery-paid-option", "delivery-charge-price", 20);
