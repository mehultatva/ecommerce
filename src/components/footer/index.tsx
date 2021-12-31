import React from 'react';
import {Link } from 'react-router-dom';
import { TextField, Button } from "@material-ui/core";
import { footerStyle } from './style';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import androidImg from '@assets/images/android.png';
import appstoreImg from '@assets/images/appstore.png';
import facebookIcon from '@assets/images/facebook.png';
import linkedinIcon from '@assets/images/linkedin.png';
import googleplusIcon from '@assets/images/googleplus.png';
import twitterIcon from '@assets/images/twitter.png';
import youtubeIcon from '@assets/images/youtube.png';
import emailIcon from '@assets/images/email.png';
import callIcon from '@assets/images/call.png';
import siteLogo from "@assets/images/site-logo.png";

function Footer() {
    const classes = footerStyle();
return ( 
	<div className={classes.footerWrapper}>
    <footer className="site-footer" id="footer">
            <div className="top-footer">
                <div className="container">
                    <p className="top-footer-title">Sign Up for Rabaza Global Mailing List</p>
                    <div className="form-wrapper">
                        <TextField
                        id="email"
                        name="email"
                        placeholder="Enter your email address..."
                        variant="outlined"
                        />
                        <Button
                        type="submit"
                        className="green-btn btn"
                        variant="contained"
                        color="primary"
                        disableElevation
                    >
                        SUBSCRIBE
                    </Button>
                    </div>
                </div>
            </div>
            <div className="main-footer">
                <div className="container">
                    <div className="footer-links-wrapper">
                        <div className="footer-links">
                            <div className="footer-links-inner">
                                <span className="title">Get to Know Us</span>
                                <List className="footer-links-list">
                                    <ListItem>
                                        <Link to='/' title="About Rabaza Group">About Rabaza Group</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Careers">Careers</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Submit a Complaint">Submit a Complaint</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/'title="Sitemap">Sitemap</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Contact Us">Contact Us</Link>
                                    </ListItem>
                                </List>
                            </div>
                            <div className="footer-links-inner">
                                <span className="title">Customer Service</span>
                                <List className="footer-links-list">
                                    <ListItem>
                                        <Link to='/' title="Your Account">Your Account</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Help Center">Help Center</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Submit a Complaint">Submit a Complaint</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Shipping Rates & Policies">Shipping Rates & Policies</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Returns & Replacements">Returns & Replacements</Link>
                                    </ListItem>
                                </List>
                            </div>
                            <div className="footer-links-inner">
                                <span className="title">Buy on Rabaza.com</span>
                                <List className="footer-links-list">
                                    <ListItem>
                                        <Link to='/' title="By Category">By Category</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="By Products">By Products</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Get Quotations">Get Quotations</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Wholesale">Wholesale</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Populat Product Trends">Populat Product Trends</Link>
                                    </ListItem>
                                </List>
                            </div>
                            <div className="footer-links-inner">
                                <span className="title">Sell on Rabaza.com</span>
                                <List className="footer-links-list">
                                    <ListItem>
                                        <Link to='/' title="Supplier Memberships">Supplier Memberships</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Learning Center">Learning Center</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Training Center">Training Center</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Shop with Points">Shop with Points</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="RavazaSourcepro">RavazaSourcepro</Link>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                        <div className="footer-links social-contact-links">
                            <div className="footer-links-inner">
                                <span className="title">Download Free App</span>
                                <List className="download-links">
                                    <ListItem>
                                        <Link to='/' title="Appstore"><img src={appstoreImg} alt="appstore"/></Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Android"><img src={androidImg} alt="android"/></Link>
                                    </ListItem>
                                </List>
                            </div>
                            <div className="footer-links-inner">
                                <span className="title">Social Media</span>
                                <List className="social-links">
                                    <ListItem>
                                        <Link to='/' title="Facebook"><img src={facebookIcon} alt="facebook"/></Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Twitter"><img src={twitterIcon} alt="twitter"/></Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Linkedin"><img src={linkedinIcon} alt="linkedin"/></Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="YouTube"><img src={youtubeIcon} alt="youtube"/></Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Googleplus"><img src={googleplusIcon} alt="googleplus"/></Link>
                                    </ListItem>
                                </List>
                            </div>
                            <div className="footer-links-inner">
                                <span className="title">Contact Info</span>
                                <List className="contact-links">
                                    <ListItem>
                                        <Link to='/' title="Email"><em><img src={emailIcon} alt="email"/></em>contact@rabazaglobal.com</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/' title="Call"><em><img src={callIcon} alt="call"/></em>(012) 900-342-9876</Link>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container">
                    <div className="text-center">
                        <div className="footer-logo">
                            <Link to='/' title="logo"><img src={siteLogo} alt="sitelogo"/></Link>
                        </div>
                        <List className="country-listing">
                            <ListItem>
                                <Link to='/' title="Australia">Australia</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Brazil">Brazil</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Canada">Canada</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="China">China</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="France">France</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Germany">Germany</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="India">India</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Italy">Italy</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Japan">Japan</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Mexico">Mexico</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Netherlands">Netherlands</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Spain">Spain</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="United Kingdom">United Kingdom</Link>
                            </ListItem>
                        </List>
                        <List className="footer-other-links">
                            <ListItem>
                                <Link to='/' title="Rabaza Group">Rabaza Group</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Taobao Marketplace">Taobao Marketplace</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Tmall.com">Tmall.com</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Juhuasuan">Juhuasuan</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Rabaza Express">Rabaza Express</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="RabazaGlobal.com">RabazaGlobal.com</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="1688.com">1688.com</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Rabazamama">Rabazamama</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Rabazatrip">Rabazatrip</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Rabaza Cloud Computing">Rabaza Cloud Computing</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="YunOS">YunOS</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="AliTelecom">AliTelecom</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="HiChina">HiChina</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Autonavi">Autonavi</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="UCWeb Umeng">UCWeb Umeng</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Kanbox">Kanbox</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Xiami">Xiami</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="TTPod">TTPod</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Laiwang">Laiwang</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="DingTalk">DingTalk</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="11 Main">11 Main</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Rabazapay">Rabazapay</Link>
                            </ListItem>
                        </List>
                        <List className="footer-other-links">
                            <ListItem className="list-title">
                                Browse Alphabetically:
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Showroom">Showroom</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Country Search">Country Search</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Manufacturers">Manufacturers</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Suppliers">Suppliers</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Promotion">Promotion</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Wholesale">Wholesale</Link>
                            </ListItem>
                        </List>
                        <List className="footer-other-links">
                            <ListItem>
                                <Link to='/' title="Contact Us">Contact Us</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Product Listing Policy">Product Listing Policy</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Intellectual Property Policy and Infringement Claims">Intellectual Property Policy and Infringement Claims</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Privacy Policy">Privacy Policy</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' title="Terms of Use">Terms of Use</Link>
                            </ListItem>
                        </List>
                        <p className="copyright-text">© 2015 Rabaza Global.com. All rights reserved.</p>
                    </div>
                </div>
            </div>
    </footer>

    </div>
);
}

export default Footer;