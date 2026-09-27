function calculateBudget() {

    const income = parseFloat(
        document.getElementById("income").value
    ) || 0;

    const food = parseFloat(
        document.getElementById("food").value
    ) || 0;

    const shopping = parseFloat(
        document.getElementById("shopping").value
    ) || 0;

    const transport = parseFloat(
        document.getElementById("transport").value
    ) || 0;

    const entertainment = parseFloat(
        document.getElementById("entertainment").value
    ) || 0;

    const other = parseFloat(
        document.getElementById("other").value
    ) || 0;

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

    const goal = parseFloat(
        document.getElementById("goal").value
    ) || 0;

    const saved = parseFloat(
        document.getElementById("saved").value
    ) || 0;

    const monthly = parseFloat(
        document.getElementById("monthly").value
    ) || 0;

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

    const initial = parseFloat(
        document.getElementById("initial").value
    ) || 0;

    const contribution = parseFloat(
        document.getElementById("contribution").value
    ) || 0;

    const annualRate = parseFloat(
        document.getElementById("returnRate").value
    ) || 0;

    const years = parseFloat(
        document.getElementById("yearsInput").value
    ) || 0;

    if (initial < 0 || contribution < 0) {
        alert("Investment amounts cannot be negative.");
        return;
    }

    if (annualRate < 0) {
        alert("Expected annual return cannot be negative.");
        return;
    }

    if (years <= 0) {
        alert("Please enter a valid investment period.");
        return;
    }

    const months = Math.round(years * 12);

    const monthlyRate = (annualRate / 100) / 12;

    let finalValue = initial;

    for (let month = 1; month <= months; month++) {

        finalValue =
            finalValue * (1 + monthlyRate);

        finalValue += contribution;
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
