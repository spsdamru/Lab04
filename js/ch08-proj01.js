const tax_rate = parseFloat(prompt('Enter tax rate (0.10)'));
const shipping_threshold = parseFloat(prompt('Enter shipping threshold (1000)'));

let subtotal = 0;

for (let item of cart) {
    const total = calculateTotal(item.quantity, item.product.price);
    outputCartRow(item, total);
    subtotal += total;
}

const tax = subtotal * tax_rate;
const shipping = subtotal > shipping_threshold ? 40 : 0;
const grandTotal = subtotal + tax + shipping;

document.write(`
    <tr class="totals">
        <td colspan="4">Subtotal</td>
        <td>$${subtotal.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4">Tax</td>
        <td>$${tax.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4">Shipping</td>
        <td>$${shipping.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4" class="focus">Grand Total</td>
        <td class="focus">$${grandTotal.toFixed(2)}</td>
    </tr>
`);
