function toLiters (liter) {
  return (liter * 3.78)
};

const liter = parseFloat(prompt("Enter your gallons"));

const literResult = toLiters(liter);

alert(literResult + "Liters");

function toCups(cups) {
  return (cups * 16)
};

const cups = parseFloat(prompt("Enter your gallons to be converted into cups"));

const cupResult = toCups(cups);

alert(cupResult + " cups");
