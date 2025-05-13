document.addEventListener("DOMContentLoaded", () => {
    const prices = {
      1: "$10.00 USD",
      2: "$18.00 USD",
      3: "$24.00 USD"
    };
  
    const totalPriceElement = document.getElementById("total-price");
    const allCardBodies = document.querySelectorAll(".card-body");
    const allInputs = document.querySelectorAll("input[name='unit']");
  
    // Hide all card bodies initially
    allCardBodies.forEach(body => body.style.display = "none");
  
    allInputs.forEach(input => {
      input.addEventListener("change", () => {
        const selectedValue = input.value;
  
        // Hide all card bodies
        allCardBodies.forEach(body => body.style.display = "none");
  
        // Show card body related to the selected radio input
        const selectedCard = input.closest(".card");
        const selectedBody = selectedCard.querySelector(".card-body");
        selectedBody.style.display = "block";
  
        // Update total price
        totalPriceElement.textContent = prices[selectedValue];
      });
    });
  });
  