import {
    blackColor,
    whiteColor,
    hexToRgb
  } from "assets/jss/material-dashboard-react.jsx";
  
import { boxShadow as boxShadowx } from "assets/jss/material-dashboard-react.jsx";

  const nacStyle = {
    typo: {
      paddingLeft: "2%",
      marginBottom: "1px",
      fontWeight: "400",
      position: "relative"
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    note: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      bottom: "10px",
      color: "#c0c1c2",
      display: "block",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "13px",
      left: "0",
      marginLeft: "20px",
      position: "absolute",
      width: "260px"
    },
    cardCategoryWhite: {
      color: "#1635ff",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleBlue: {
      color: "#1635ff",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "600",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textTransform: "none",
      textDecoration: "none"
    },
    cardTitleBlack: {
      color: "#000000",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "600",
      marginBottom: "3px",
      textTransform: "none",
      textDecoration: "none"
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      verticalAlign: "middle",
      fontWeight: "600",
      lineHeight: "1.5em",
      textTransform: "none",
      textDecorationLine: "underline"
    },
    txtbutton: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "600",
      lineHeight: "1.5em",
      fontSize: "12px",
      textDecorationLine: "underline",
      textTransform: "none",
      justify: "left",
      alignItems: "left"
    },
    
    txtbuttonblue: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "600",
      lineHeight: "1.5em",
      textDecorationLine: "underline",
      justify: "left",
      alignItems: "left",
      textTransform: "none",
      color: "#1635ff",
    },
    centertextblue: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "600",
      lineHeight: "1.5em",
      justifyContent: "center",
      alignItems: "center",
      color: "#1635ff",
    },
    
    centeritems: {
      direction: "row",
      justify: "center",
      alignItems: "center",
      spacing: "3px"
    },
    paper: {
      position: 'absolute',
      width: 400,
      border: '2px solid #000',
      outline: 'none',
      background: "white",
      boxShadow: boxShadowx,
      padding: "1px"
    },
    input: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "600",
      fontSize: "12px",
      position: 'absolute',
      borderRadius: 4,
      position: 'relative',
      width: "100%"
    }  ,
    textField: {
      marginLeft:   "1px",
      marginRight: "1px",
    },
    dense: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "12px",
      position: 'absolute',
      borderRadius: 4,
      position: 'relative',
      width: "100%",
      padding: "1px",
      margin: "1px",
      spacing: "1px"
    },
  };
  
  export default nacStyle;
  