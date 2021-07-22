import React, { Fragment, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./style.js";
import StepOne from "./step1";
import StepTwo from "./step2";
import { operatorResult } from "./helper.js";

const Operation = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState({
    firstNumber: null,
    secondNumber: null,
  });
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [isError, setIsError] = useState(false);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    setResult(null);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.firstNumber && inputValue.secondNumber) {
      setResult(
        Number(inputValue.firstNumber) + Number(inputValue.secondNumber)
      );
      setIsStepTwo(true);
    } else {
      setIsError(true);
    }
  };
  const handleOperatorChange = (e) => {
    const { value } = e.target;
    setOperator(value);
    setResult(null);
  };

  const handleOperationResult = (e) => {
    e.preventDefault();
    const result = operatorResult(operator, inputValue);
    setResult(result);
  };
  const onReset = () => {
    setIsStepTwo(false);
    setIsError(false);
    setOperator("+");
    setInputValue({ firstNumber: null, secondNumber: null });
  };

  return (
    <div className={classes.operationFormWrap}>
      <Container maxWidth="sm">
        <form
          onSubmit={(e) =>
            !isStepTwo ? handleFormSubmit(e) : handleOperationResult(e)
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
          {!isStepTwo ? (
            <Fragment>
              <StepOne
                inputValue={inputValue}
                onInputChange={onInputChange}
                isError={isError}
              />
            </Fragment>
          ) : (
            <StepTwo
              inputValue={inputValue}
              result={result}
              operator={operator}
              onInputChange={onInputChange}
              handleOperatorChange={handleOperatorChange}
              onReset={onReset}
            />
          )}
        </form>
      </Container>
    </div>
  );
};
export default Operation;
