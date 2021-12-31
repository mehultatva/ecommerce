import React from "react";
import { createAccountStyle } from "./style";
import {
  Breadcrumbs,
  Link,
  Typography,
  List,
  ListItem,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { materialCommonStyles } from "../../utils/materialCommonStyles";

function CreateAccount() {
  const classes = createAccountStyle();
  const materialClasses = materialCommonStyles();
  return (
    <div className={classes.createAccountWrapper}>
      <div className="create-account-page-wrapper">
        <div className="container">
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className="breadcrumb-wrapper"
          >
            <Link color="inherit" href="/" title="Home">
              Home
            </Link>
            <Typography color="textPrimary">Create an Account</Typography>
          </Breadcrumbs>

          <Typography variant="h1">Login or Create an Account</Typography>
          <div className="create-account-row">
            <div className="form-block">
             <div className="personal-information">
                <Typography variant="h2">Personal Information</Typography>
                <p>
                  Please enter the following information to create your account.
                </p>
                <div className="form-row-wrapper">
                  <div className="form-col">
                    <TextField
                      id="first-name"
                      name="first-name"
                      label="First Name *"
                      variant="outlined"
                      inputProps={{ className: "small" }}
                    />
                  </div>
                  <div className="form-col">
                    <TextField
                      id="last-name"
                      name="last-name"
                      label="Last Name *"
                      variant="outlined"
                      inputProps={{ className: "small" }}
                    />
                  </div>
                  <div className="form-col full-width">
                    <TextField
                      id="email"
                      name="email"
                      label="Email Adress *"
                      variant="outlined"
                      inputProps={{ className: "small" }}
                    />
                  </div>
                </div>
              
              <FormControlLabel
                control={<Checkbox name="checkedG" />}
                label="Sign Up for Newsletter"
                className="custom-checkbox"
              />
             </div>
           <div className="login-information">
              <Typography variant="h2">Login Information</Typography>
              
              <div className="form-row-wrapper">
                <div className="form-col">
                  <TextField
                    id="password"
                    name="password"
                    label="Password *"
                    variant="outlined"
                    inputProps={{ className: "small" }}
                  />
                </div>
                <div className="form-col">
                  <TextField
                    id="confirm-password"
                    name="confirm-password"
                    label="Confirm Password *"
                    variant="outlined"
                    inputProps={{ className: "small" }}
                  />
                </div>
              </div>
              <div className="btn-wrapper">
                <Button
                  className="pink-btn btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Register
                </Button>
              </div>
              <Link href="/" className="backlink" title="Back">
                &lt;&lt;Back
              </Link>
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
