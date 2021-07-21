export const operatorResult = (operator, inputValue)=>{
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
        resultValue =
          Number(inputValue.firstNumber) * Number(inputValue.secondNumber);
        break;
      case "/":
        resultValue =
          Number(inputValue.firstNumber) / Number(inputValue.secondNumber);
        break;
      default:
    }
    return resultValue;
}