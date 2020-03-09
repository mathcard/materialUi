import React from 'react';
import './components/global.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;