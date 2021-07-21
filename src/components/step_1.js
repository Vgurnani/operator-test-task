import React from "react";
import {
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import { useStyles } from "./style.js";

const StepOne = (props) => {
  const classes = useStyles();

  return (
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <TextField
                  className={classes.operationFormControl}
                  name="firstNumber"
                  type="number"
                  variant="outlined"
                  label="Enter First Number"
                  onChange={(e) => props.onInputChange(e)}
                  value={props.inputValue.firstNumber}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  className={classes.operationFormControl}
                  name="secondNumber"
                  type="number"
                  variant="outlined"
                  label="Enter Second Number"
                  onChange={(e) => props.onInputChange(e)}
                  value={props.inputValue.secondNumber}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <Button
                  type={"submit"}
                  className={classes.operationFormButton}
                  variant="contained"
                  color="primary"
                >
                  Add Number
                </Button>
              </Grid>
            </Grid>
  );
};
export default StepOne;
