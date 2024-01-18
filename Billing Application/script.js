const itemList = document.getElementById('item-list');
const totalAmount = document.getElementById('total-amount');

let items = [];

function renderItems() {
  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>Rs. ${item.price}</td>
      <td><button class="delete-btn" onclick="deleteItem(${index})">Delete</button></td>
    `;
    itemList.appendChild(row);
  });
}
function addItem() {
  const itemName = document.getElementById('item').value;
  const itemPrice = parseFloat(document.getElementById('price').value);

  if (itemName && itemPrice) {
    items.push({ name: itemName, price: itemPrice });
    renderItems();
    document.getElementById('item').value = '';
    document.getElementById('price').value = '';
  }
}
function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}
function calculateTotal() {
  const total = items.reduce((acc, item) => acc + item.price, 0);
  totalAmount.textContent = total.toFixed(2);
}
function makePayment() {
  const total = items.reduce((acc, item) => acc + item.price, 0);
  if (total > 0) {
    alert(`Payment successful! Total amount: $${total.toFixed(2)}`);
    items = [];
    renderItems();
    totalAmount.textContent = '0';
  } else {
    alert("No items to pay for.");
  }
}