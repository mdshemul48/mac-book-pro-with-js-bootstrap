// this will return the element. then i will add event listener to this element
function elementById(elementId) {
  return document.getElementById(elementId);
}

function updatePrice(elementId, price) {
  const selectedElement = document.getElementById(elementId);
  selectedElement.innerText = price;
}

function setListenerAndUpdatePrice(optionElementId, priceTagId, price) {
  elementById(optionElementId).addEventListener("click", function () {
    updatePrice(priceTagId, price);
  });
}

//  ===================== memory price updating =================================
setListenerAndUpdatePrice("memory-8gb-option", "extra-memory-price", 0);
setListenerAndUpdatePrice("memory-16gb-option", "extra-memory-price", 180);

//  ===================== storage price updating =================================
setListenerAndUpdatePrice("storage-option-256gb", "extra-storage-price", 0);
setListenerAndUpdatePrice("storage-option-512gb", "extra-storage-price", 30);
setListenerAndUpdatePrice("storage-option-1tb", "extra-storage-price", 50);

//  ===================== delivery price updating =================================
setListenerAndUpdatePrice("delivery-free-option", "delivery-charge-price", 0);
setListenerAndUpdatePrice("delivery-paid-option", "delivery-charge-price", 20);
