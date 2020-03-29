import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import './App.css';
import Patients from './component/patients/Patients';
import Prevention from './component/prevention/Prevention';
import NotFound from './component/NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
              <Patients />
            </Route>
          <Route path={`${process.env.PUBLIC_URL}/prevention`} >
              <Prevention/>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/*`}>
            <NotFound />
          </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
