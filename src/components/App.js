import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from '../routes/routes';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          {getRoutes()}
        </Switch>  
        <Footer />
      </>
    </Router>
  );
}

export default App;
