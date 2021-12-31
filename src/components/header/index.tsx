import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { headerStyle } from "./style";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import siteLogo from "@assets/images/site-logo.png";
import crossIcon from "@assets/images/cross.svg";
import cartIcon from "@assets/images/cart.png";
import flagIcon from "@assets/images/flag.png";
import searchIcon from "@assets/images/search.png";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";

function Header() {
  const classes = headerStyle();
  const materialClasses = materialCommonStyles();
  const [open, setOpen] = React.useState(false);

  // for mobile menu
  const openMenu = () => {
    document.body.classList.toggle("open-menu");
  };

  return (
    <div className={classes.headerWrapper}>
      <AppBar className="site-header" id="header" position="static">
        <div className="top-header" style={{ display: open ? "none" : "block" }}>
          <div className="container">
            <div className="top-bar-content">
              <p>
                Rabaza Global and PayPal are now separate companies. We've
                updated the Rabaza Global and PayPal User Agreements and Privacy
                Notices.
                <Link to="/" title="Learn more">
                  Learn more
                </Link>
                <span onClick={() => { setOpen(!open);}}>
                  <img src={crossIcon} alt="cross-icon" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-wrapper">
                <Link to="/" className="site-logo" title="logo">
                  <img src={siteLogo} alt="logo" />
                </Link>
              </div>
              <div className="nav-wrapper">
                <div className="top-right-bar">
                  <List className="top-nav-bar">
                    <ListItem>
                      <Link to="/" title="Login">
                        Login
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Register">
                        Register
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Merchant Sign Up">
                        Merchant Sign Up
                      </Link>
                    </ListItem>
                  </List>
                  <List className="cart-country-wrap">
                    <ListItem className="cart-link">
                      <Link to="/" title="Cart">
                        <img src={cartIcon} alt="cart.png" />
                        <span>0</span>
                        Cart
                      </Link>
                    </ListItem>
                    <ListItem className="dropdown-wrap">
                      <FormControl>
                        <Select
                          value={flagIcon}
                          MenuProps={{ className: classes.dropdownStyle }}
                        >
                          <MenuItem value={flagIcon}>
                            <img src={flagIcon} alt="flag" />
                          </MenuItem>
                          <MenuItem value={flagIcon}>
                            <img src={flagIcon} alt="flag" />
                          </MenuItem>
                          <MenuItem value={flagIcon}>
                            <img src={flagIcon} alt="flag" />
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </ListItem>
                    <ListItem className="hamburger" onClick={openMenu}>
                      <span></span> 
                    </ListItem>
                  </List>
                </div>
                <div className="bottom-right-bar">
                  <List className="main-nav">
                    <ListItem>
                      <Link to="/" title="About Rabaza">
                        About Rabaza
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Today’s Deals">
                        Today’s Deals
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Gift Cards">
                        Gift Cards
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Track Your Orders">
                        Track Your Orders
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Customer Service">
                        Customer Service
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Help Center">
                        Help Center
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" title="Contact">
                        Contact
                      </Link>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-search-wrapper">
          <div className="container">
            <div className="header-search-outer">
              <div className = "header-search-inner">
              <FormControl className="dropdown-wrapper" variant="outlined">
              <InputLabel htmlFor="select">Shop by Categories</InputLabel>
                <Select className={materialClasses.customSelect}
                    MenuProps={{
                      classes: { paper: materialClasses.customSelect },
                    }}>
                  <MenuItem value="Category1">Category1</MenuItem>
                  <MenuItem value="Category2">Category2</MenuItem>
                  <MenuItem value="Category3">Category3</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="text"
                name="text"
                placeholder="What are you looking for..."
                variant="outlined"
                className ="text-wrapper"
              />
              <Button
                type="submit"
                className="green-btn btn"
                variant="contained"
                color="primary"
                disableElevation
              >
                <em>
                  <img src={searchIcon} alt="search" />
                </em>
                SEARCH
              </Button>
              </div>
              <div className="advance-search-wrapper">
              <Link to="/" title="Advanced Search">
                Advanced Search
              </Link>
            </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
