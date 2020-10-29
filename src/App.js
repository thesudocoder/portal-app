import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import {ThemeProvider} from '@material-ui/styles'

import  theme from './components/Theme' 
import NavHeader from './components/NavHeader'


import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
         <NavHeader />
         <Switch>
           <Route exact path="/" component={()=> <div>Home</div>} />
           <Route exact path="/orders" component={()=> <div>Next</div>} />
           <Route exact path="/users" component={()=> <div>Users</div>} />
         </Switch>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
