import React from 'react';  
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container pt-3">
        <Navbar />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
