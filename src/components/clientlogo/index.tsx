import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import samsonite from "@assets/images/samsonite.png";
import levis from "@assets/images/levis.png";
import chanel from "@assets/images/chanel.png";
import samsung from "@assets/images/samsung.png";
import gucci from "@assets/images/gucci.png";
import nike from "@assets/images/nike.png";
import { clientLogoStyle } from "./style";

function ClientLogo() {
  const classes = clientLogoStyle();
  return (
    <div className={classes.clientWrapper}>
       <div className="container">
          <List>
             <ListItem>
               <img src={samsonite} alt="client-logo"/>
             </ListItem>
             <ListItem>
               <img src={levis} alt="client-logo"/>
             </ListItem>
             <ListItem>
               <img src={chanel} alt="client-logo"/>
             </ListItem>
             <ListItem>
               <img src={samsung} alt="client-logo"/>
             </ListItem>
             <ListItem>
               <img src={gucci} alt="client-logo"/>
             </ListItem>
             <ListItem>
               <img src={nike} alt="client-logo"/>
             </ListItem>
          </List>
       </div>
    </div>
  );
}

export default ClientLogo;
