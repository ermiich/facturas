function setTax(percent) {
  const tax = document.querySelector(".taxCell");
  tax.textContent = percent;
}
function isValidParameters() {
  const productNameHandler = document.querySelector("#productName").value;
  const productUnitsHandler = document.querySelector("#productUnits").value;
  const productPriceHandler = document.querySelector("#productPrice").value;
  var productName = productNameHandler.toString();
  var productUnits = parseInt(productUnitsHandler);
  var productPrice = parseFloat(productPriceHandler.toString());

  if (productName.length > 0 && productUnits > 0 && productPrice > 0) {
    return true;
  }
  return false;
}
function getProductTotalPrice(){
  return Math.floor(getProductUnits() * getProductPrice()*100)/100
}
function getProductUnits() {
  const productUnitsHandler = document.querySelector("#productUnits").value;
  return parseInt(productUnitsHandler);
  
}
function getProductPrice(){
  const productPriceHandler = document.querySelector("#productPrice").value;
  return parseFloat(productPriceHandler.toString());
}
function getProductName(){
  const productNameHandler = document.querySelector("#productName").value;
  return productNameHandler.toString();
}
function addRow() {
  if (isValidParameters()) {
    const table = document.querySelector("table");
    var row = table.insertRow(1);
    var productCell = row.insertCell(0);
    var productNumCell = row.insertCell(1);
    var productPriceCell = row.insertCell(2);
    var productTotalPriceCell = row.insertCell(3);
    productTotalPriceCell.classList.add('totalProductPrice');
    var deleteRowCell = row.insertCell(4);
    deleteRowCell.classList.add('removeCell');
    deleteRowCell.onclick = "removeCell()"

    productCell.innerHTML = getProductName();
    productNumCell.innerHTML = getProductUnits();
    productPriceCell.innerHTML = getProductPrice() + "€";
    productTotalPriceCell.innerHTML = getProductTotalPrice()+ "€";
    deleteRowCell.innerHTML = "X";
    setSubtotal();
    setTaxImport();
    setTotal();
  }
}
function calculateSubtotal(){
  const allProductPrice = document.querySelectorAll('.totalProductPrice');
  var result = 0;
  allProductPrice.forEach((item) =>{
    result += parseFloat(item.textContent.replace('€',''))
  })
  return result;
}
function calculateTaxImport(){
  const tax = document.querySelector(".taxCell");
  return calculateSubtotal() * parseFloat(tax.textContent.replace('%',''))/100;
}
function setSubtotal(){
  const cell = document.querySelector('.subTotalCell')
  cell.textContent = Math.floor(calculateSubtotal()*100)/100 + "€";
}
function setTaxImport(){
  const cell = document.querySelector('.taxImportCell')
  cell.textContent = Math.floor(calculateTaxImport()*100)/100 + "€";
}
function setTotal(){
  const cell = document.querySelector('.totalCell')
  cell.textContent = Math.floor((calculateSubtotal() + calculateTaxImport())*100)/100 + "€";
}
function removeCell(){
  console.log('removeCell')
}