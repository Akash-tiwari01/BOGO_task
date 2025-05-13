document.addEventListener("DOMContentLoaded", () => {
    const prices = {
      1: "$10.00 USD",
      2: "$18.00 USD",
      3: "$24.00 USD"
    };
  
    const totalPriceElement = document.getElementById("total-price");
    const allInputs = document.querySelectorAll("input[name='unit']");
  
    allInputs.forEach(input => {
      input.addEventListener("change", () => {
        const selectedValue = input.value;
  
        // Hide all card bodies
        allInputs.forEach( element => element.closest(".option").classList.remove("active"));
  
        // Show card body related to the selected radio input
        input.closest(".option").classList.add("active")
  
        // Update total price
        totalPriceElement.textContent = prices[selectedValue];
      });
    });
  });
  