import React from "react";
import { GoogleLogin } from "react-google-login"
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    console.log(googleUser);
  }


  return <GoogleLogin
    clientId="762750838273-1vneh1d07qnc37j2kngm03fu5rrsf8nf.apps.googleusercontent.com"
    onSuccess={onSuccess}
    />;
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
