const product = 'Perfume Lacoste Red';
const quantity = 3;
const amount = 220;
let taxRate = 0.12;

// Calculate the subtotal by multiplying the quantity
const subTotal = quantity * amount;

// Calculate the tax amount by multiplying the subtotal with the tax rate
const taxAmount = subTotal * taxRate;

// Calculate the total amount by adding the subtotal and tax amount
const totalAmount = subTotal + taxAmount;

// Change the value to display in percentage
taxRate = '12%';

// display the results
console.log(`Product Name: ${product}`)
console.log(`Quantiy: ${quantity}`)
console.log(`Amount: ${amount}`)
console.log(`Tax Rate: ${taxRate}`)
console.log(`Subtotal: ${subTotal}`)
console.log(`Tax Amount: ${taxAmount}`)
console.log(`Total Amount: ${totalAmount}`)