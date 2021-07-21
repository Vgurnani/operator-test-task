import { fade, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  operationFormWrap: {
    padding: "50px 0",
  },
  operationForm: {
    width: "100%",
  },
  operationFormHeading: {
    fontWeight: "normal",
    fontSize: "3rem",
    margin: "0 0 30px",
    "@media (max-width: 767px)": {
      fontSize: "2rem",
      margin: "0 0 20px",
    },
  },
  operationFormControl: {
    width: "100%",
  },
  operationFormButton: {
    width: "100%",
    boxShadow: "none",
    borderRadius: "0",
    padding: "14px 30px",
    textTransform: "capitalize",
    fontSize: "1rem",
    borderRadius: "4px",
  },
  operationBox: {
    background: "#ecf5f7",
    height: 70,
    minWidth: 65,
    padding: '0 10px',
    display: "inline-block",
    fontSize: "2rem",
    lineHeight: "64px",
    color: "#929292",
  },
  operation: {
    fontSize: "4rem",
    lineHeight: 1,
    color: "#929292",
    fontWeight: 300,
  },
  operationResult: {
    fontSize: "5rem",
    lineHeight: 1,
    color: "#79cea1",
    fontWeight: 300,
    fontStyle: "italic",
  },
  resultFormControl:{
    width: '165px',
  },
  selectOperator:{
    textAlign: 'left',
  },
  resultWrap:{
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 187px)',
    justifyContent: 'space-between',
  }
}));
