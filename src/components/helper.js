export const operatorResult = (operator, inputValue) => {
  let resultValue;
  switch (operator) {
    case "+":
      resultValue =
        Number(inputValue.firstNumber) + Number(inputValue.secondNumber);
      break;
    case "-":
      resultValue =
        Number(inputValue.firstNumber) - Number(inputValue.secondNumber);
      break;
    case "*":
      resultValue = (
        Number(inputValue.firstNumber) * Number(inputValue.secondNumber)
      ).toFixed(4);
      break;
    case "/":
      resultValue = (
        Number(inputValue.firstNumber) / Number(inputValue.secondNumber)
      ).toFixed(4);
      break;
    default:
  }
  return resultValue;
};

export const errorMessageObject = {
  firstNumber: "Please enter first number",
  secondNumber: "Please enter second number",
};
