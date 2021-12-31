import React from "react";
import { loginStyle } from "./style";
import {
  Breadcrumbs,
  Link,
  Typography,
  List,
  ListItem,
  Button,
  TextField,
} from "@material-ui/core";
import { materialCommonStyles } from "../../utils/materialCommonStyles";

function Login() {
  const classes = loginStyle();
  const materialClasses = materialCommonStyles();
  return (
    <div className={classes.loginWrapper}>
      <div className="login-page-wrapper">
        <div className="container">
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className="breadcrumb-wrapper"
          >
            <Link color="inherit" href="/" title="Home">
              Home
            </Link>
            <Typography color="textPrimary">Login</Typography>
          </Breadcrumbs>
          <Typography variant="h1">Login or Create an Account</Typography>
          <div className="login-row">
            <div className="content-col">
              <div className="top-content">
                <Typography variant="h2">New Customer</Typography>
                <p>Registration is free and easy.</p>
                <List className="bullet-list">
                  <ListItem>Faster checkout</ListItem>
                  <ListItem>Save multiple shipping addresses</ListItem>
                  <ListItem>View and track orders and more</ListItem>
                </List>
              </div>
              <div className="btn-wrapper">
                <Button
                  className="pink-btn btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Create an Account
                </Button>
              </div>
            </div>
            <div className="form-block">
              <Typography variant="h2">Registered Customers</Typography>
              <p>If you have an account with us, please log in.</p>
              <div className="form-row-wrapper">
                <div className="form-col">
                  <TextField
                    id="email"
                    name="email"
                    label="Email Address *"
                    variant="outlined"
                    inputProps={{ className: "small" }}
                  />
                </div>
                <div className="form-col">
                  <TextField
                    id="password"
                    name="password"
                    label="Password *"
                    variant="outlined"
                    inputProps={{ className: "small" }}
                  />
                </div>
                <Link href="/" className="forgot-password-link">Forgot your pasword ?</Link>
                <div className="btn-wrapper">
                <Button
                  className="pink-btn btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Login
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
