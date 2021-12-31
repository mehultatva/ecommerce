import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../utils/constant";


const clientLogoStyle = makeStyles((theme) => ({
  clientWrapper: {
    padding:"56px 0",
    borderTop:"1px solid #d5d5d5",
    borderBottom:"1px solid #d5d5d5",
    "@media (max-width: 991px)": {
      padding:"50px 0",
    },
    "@media (max-width: 767px)":{
      padding:"40px 0",
    },
    "& ul": {
     display:"flex",
     justifyContent:"space-between",
     alignItems:"center",
     padding:"0 !important",
     margin:"0 -5px",
    "@media (max-width: 991px)": {
      flexWrap:"wrap",
      margin:"0 -15px -30px",
    },
     "& li" : {
      padding:"0 5px",
      justifyContent:"center",
      "@media (max-width: 991px)": {
        maxWidth:"33.33%",
        flex:"0 0 33.33%",
        marginBottom:"30px",
        padding:"0 15px",
      },
      "@media (max-width: 767px)": {
        maxWidth:"50%",
        flex:"0 0 50%",        
      },
      "@media (max-width: 374px)": {
        maxWidth:"100%",
        flex:"0 0 100%",        
      },
     } 
   }
  },
  
}));

export { clientLogoStyle };
