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

    if (income <= 0) {
        alert("Please enter a valid monthly income.");
        return;
    }

    const total =
        food +
        shopping +
        transport +
        entertainment +
        other;

    const remaining = income - total;

    const savingsRate = (remaining / income) * 100;

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

    if (goal <= 0) {
        alert("Please enter a valid savings goal.");
        return;
    }

    if (saved < 0 || monthly < 0) {
        alert("Savings amounts cannot be negative.");
        return;
    }

    const remaining = Math.max(goal - saved, 0);

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


function calculateInvestment() {

    const initial = Number(
        document.getElementById("initial").value
    );

    const contribution = Number(
        document.getElementById("contribution").value
    );

    const annualRate = Number(
        document.getElementById("returnRate").value
    );

    const years = Number(
        document.getElementById("yearsInput").value
    );

    if (initial < 0 || contribution < 0) {
        alert("Investment amounts cannot be negative.");
        return;
    }

    if (annualRate < 0) {
        alert("Please enter a valid expected annual return.");
        return;
    }

    if (years <= 0) {
        alert("Please enter a valid investment period.");
        return;
    }

    const months = years * 12;

    const monthlyRate = annualRate / 100 / 12;

    let finalValue = initial;

    for (let month = 1; month <= months; month++) {
        finalValue =
            finalValue * (1 + monthlyRate) +
            contribution;
    }

    const totalContributed =
        initial + (contribution * months);

    const growth =
        finalValue - totalContributed;

    document.getElementById("contributed").textContent =
        totalContributed.toFixed(2);

    document.getElementById("growth").textContent =
        growth.toFixed(2);

    document.getElementById("finalValue").textContent =
        finalValue.toFixed(2);
}
