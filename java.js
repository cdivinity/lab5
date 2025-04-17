const form = document.getElementById('tip-calculator');
form.addEventListener('input', (event) => {
    const billTotal = parseFloat(document.getElementById('bill-total').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const tipAmount = (billTotal * tipPercentage) / 100;
    document.getElementById('tip-amount').value = tipAmount.toFixed(2);
    const totalBillWithTip = billTotal + tipAmount;
    document.getElementById('total-bill-with-tip').value = totalBillWithTip.toFixed(2);
    const totalbillwithtax = billTotal + (billTotal*0.11);
    document.getElementById('total-bill-with-tax').value =  totalbillwithtax.toFixed(2);
});