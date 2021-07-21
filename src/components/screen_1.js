import React, { Fragment, useState } from "react";
import {
  Container,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./style.js";
import StepOne from './step_1';
import StepTwo from './step_2';
import { operatorResult } from "./helper.js";

const Screen_1 = () => {
  const [inputValue, setInputValue] = useState({
    firstNumber: null,
    secondNumber: null,
  });
  const classes = useStyles();

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [isOperation, setIsOperator] = useState(false);

  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(
    Number(inputValue.firstNumber) + Number(inputValue.secondNumber)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.firstNumber && inputValue.secondNumber) {
      setResult(
        Number(inputValue.firstNumber) + Number(inputValue.secondNumber)
      );

      setIsOperator(true);
    }
  };
  console.log(inputValue, "inputValue 123");
  const handleOperatorChange = (e) => {
    const { value } = e.target;
    setOperator(value);
  };

  const handleOpetionResult = (e) => {
    e.preventDefault();
   const result = operatorResult(operator,inputValue);
    setResult(result);
  };

  return (
    <div className={classes.operationFormWrap}>
      <Container fixed>
        <form
          onSubmit={(e) =>
            !isOperation ? handleFormSubmit(e) : handleOpetionResult(e)
          }
          noValidate
          autoComplete="off"
          className={classes.operationForm}
        >
          <Typography
            variant="h1"
            color="primary"
            className={classes.operationFormHeading}
          >
            Expression Evaluator
          </Typography>
          {!isOperation ? (
            <Fragment>
            <StepOne inputValue={inputValue} onInputChange={onInputChange}/>
            </Fragment>
          ) : (
           <StepTwo inputValue={inputValue} result={result} operator={operator} 
           onInputChange={onInputChange} handleOperatorChange={handleOperatorChange}/>
          )}
        </form>
      </Container>
    </div>
  );
};
export default Screen_1;
