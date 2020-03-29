import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import './App.css';
import Patients from './component/patients/Patients';
import Prevention from './component/prevention/Prevention';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
              <Patients />
            </Route>
          <Route path="/prevention" exact>
              <Prevention/>
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
