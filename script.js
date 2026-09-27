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
function calculateSavings() {

    const goal = Number(document.getElementById("goal").value);

    const saved = Number(document.getElementById("saved").value);

    const monthly = Number(document.getElementById("monthly").value);

    const remaining = goal - saved;

    let months = 0;

    if (remaining > 0 && monthly > 0) {
        months = Math.ceil(remaining / monthly);
    }

    const years = months / 12;

    document.getElementById("remaining").textContent =
        remaining.toFixed(2);

    document.getElementById("months").textContent =
        months;

    document.getElementById("years").textContent =
        years.toFixed(1);
}
