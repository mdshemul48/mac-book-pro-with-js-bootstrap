// this will return the element. then i will add event listener to this element
function getTheElement(elementId) {
  const element = document.getElementById(elementId);
  return element;
}

function updatePrice(elementId, price) {
  const selectedElement = document.getElementById(elementId);
  selectedElement.innerText = price;
}

//  memory price updating
const memoryOption8GB = getTheElement("memory-8gb-option");
memoryOption8GB.addEventListener("click", function () {
  updatePrice("extra-memory-price", 0);
});

const memoryOption16GB = getTheElement("memory-16gb-option");
memoryOption16GB.addEventListener("click", function () {
  updatePrice("extra-memory-price", 180);
});

//  ===================== storage price updating =================================

const storageOption256GB = getTheElement("storage-option-256gb");
storageOption256GB.addEventListener("click", function () {
  updatePrice("extra-storage-price", 180);
});

const storageOption512GB = getTheElement("storage-option-512gb");
storageOption512GB.addEventListener("click", function () {
  updatePrice("extra-storage-price", 180);
});

const storageOption1TB = getTheElement("storage-option-1tb");
storageOption1TB.addEventListener("click", function () {
  updatePrice("extra-storage-price", 180);
});
