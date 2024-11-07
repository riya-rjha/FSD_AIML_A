async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  resultDiv.textContent = "";
  errorDiv.textContent = "";

  if (!amount || isNaN(amount) || amount <= 0) {
    errorDiv.textContent = "Please enter a valid amount";
    return;
  }

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    if (!response.ok) throw new Error("Failed to fetch currency data");
    const data = await response.json();
    const rate = data.rates[toCurrency];

    if (!rate) throw new Error("Invalid currency code");

    const convertedAmount = (amount * rate).toFixed(2);
    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    errorDiv.textContent = "Error: " + error.message;
  }
}
