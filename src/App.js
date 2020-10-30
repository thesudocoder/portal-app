import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import {ThemeProvider} from '@material-ui/styles'

import  theme from './components/Theme' 
import NavHeader from './components/NavHeader'

import Organizations from './routes/Organizations'
import Orders from './routes/Orders'
import Users from './routes/Users'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
         <NavHeader />
         <Switch>
           <Route exact path="/" component={Organizations} />
           <Route exact path="/orders" component={Orders} />
           <Route exact path="/users" component={Users} />
         </Switch>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
