import React, { Fragment } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { useStyles } from "./style.js";

const StepTwo = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.resultWrap}>
        <div className={classes.resultBox}>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <span className={classes.operationBox}>
                {props.inputValue.firstNumber}
              </span>
            </Grid>
            <Grid item>
              <span className={classes.operationBox}>
                {props.inputValue.secondNumber}
              </span>
            </Grid>
            <Grid item>
              <span className={classes.operationBox}>{props.operator}</span>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <span className={classes.operation}>=</span>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography color="primary" className={classes.operationResult}>
                {props.result}
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.resultOperator}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <FormControl
                variant="outlined"
                className={classes.resultFormControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Operator
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={props.operator}
                  onChange={props.handleOperatorChange}
                  label="Operator"
                  className={classes.selectOperator}
                >
                  <MenuItem value={"+"}>+</MenuItem>
                  <MenuItem value={"-"}>-</MenuItem>
                  <MenuItem value={"*"}>*</MenuItem>
                  <MenuItem value={"/"}>/</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                className={classes.resultFormControl}
                name="secondNumber"
                type="number"
                variant="outlined"
                label="Enter Second Number"
                onChange={(e) => props.onInputChange(e)}
                value={props.inputValue.secondNumber}
              />
            </Grid>
            <Grid item>
              <Button
                type={"submit"}
                className={classes.operationFormButton}
                variant="contained"
                color="primary"
              >
                Add Operation
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};
export default StepTwo;
