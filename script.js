function calculateBudget() {

    const income = Number(document.getElementById("income").value);

    const food = Number(document.getElementById("food").value);

    const shopping = Number(document.getElementById("shopping").value);

    const transport = Number(document.getElementById("transport").value);

    const entertainment = Number(
        document.getElementById("entertainment").value
    );

    const other = Number(
        document.getElementById("other").value
    );

    const total =
        food +
        shopping +
        transport +
        entertainment +
        other;

    const remaining = income - total;

    let savingsRate = 0;

    if (income > 0) {
        savingsRate = (remaining / income) * 100;
    }

    document.getElementById("total").textContent =
        total.toFixed(2);

    document.getElementById("remaining").textContent =
        remaining.toFixed(2);

    document.getElementById("rate").textContent =
        savingsRate.toFixed(1);
}
