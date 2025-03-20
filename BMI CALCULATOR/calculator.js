function calculate() {
  const feet = parseFloat(document.getElementById("feet").value);
  const inches = parseFloat(document.getElementById("inches").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(feet) || isNaN(inches) || isNaN(weight)) {
    alert("Please fill all the fields with valid numbers");
    return;
  }

  if ((feet === 0 && inches === 0) || weight <= 0) {
    alert("Height and weight must be greater than 0");
    return;
  }

  const heightInM = (feet * 0.3048) + (inches * 0.0254);
  const bmi = weight / (heightInM * heightInM);

  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi <= 24.9) status = "Normal weight";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Status: ${status}`;

  const dietPlanBtn = document.getElementById("diet-plan-btn");
  dietPlanBtn.style.display = "inline-block";
  dietPlanBtn.setAttribute("data-status", status);
}
