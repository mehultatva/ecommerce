import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  MainRoutes  from './routes/MainRoutes';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import ClientLogo from './components/clientlogo';
import '@assets/css/style.css';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <div className = "wrapper">
        <Header />
        <main>
          <MainRoutes/>
         </main>
         <ClientLogo/>
         </div>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
