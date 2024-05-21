// Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.

function calculateTotalValue(items) {
  const totalValue = items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity * currentItem.price;
  }, 0);

  return totalValue;
}

const items = [
  { name: "Item 1", quantity: 2, price: 10 },
  { name: "Item 2", quantity: 1, price: 20 },
  { name: "Item 3", quantity: 3, price: 15 },
];

const totalValue = calculateTotalValue(items);

console.log("Total value:", totalValue);
