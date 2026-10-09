function calcular(formaPagamento) {
    const produto = parseFloat(document.getElementById("produto").value) || 0;
    const frete = parseFloat(document.getElementById("frete").value) || 0;

    let subtotal = produto + frete;
    let total = subtotal;

    switch (formaPagamento) {
        case "PIX":
            total = subtotal * 0.90;
            break;

        case "Dinheiro":
            total = subtotal * 0.95;
            break;

        case "Cartão à vista":
            total = subtotal;
            break;

        case "Parcelado":
            total = subtotal * 1.05;
            break;
    }

    document.getElementById("forma").textContent =
        "Forma: " + formaPagamento;

    document.getElementById("total").textContent =
        "Total: R$ " + total.toFixed(2).replace(".", ",");
}