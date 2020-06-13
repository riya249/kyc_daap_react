import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


//Pages
import Homepage from './Container/Homepage/Index';
import Header from './Component/Header/Index';
import Kyclevel from './Container/Kyclevel/Index';
import LevelOne from './Container/LevelOne/Index';
import LevelTwo from './Container/LevelTwo/Index';
import LevelThree from './Container/LevelThree/Index';
import MyDocument from './Container/MyDocument/Index';
import MyKyckey from './Container/Mykyckey/Index';
import Myaccount from './Container/Myaccount/Index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/" component={Header} />
          <Route exact path="/kyclevel" component={Kyclevel} />
          <Route exact path="/level1" component={LevelOne} />
          <Route exact path="/level2" component={LevelTwo} />
          <Route exact path="/level3" component={LevelThree} />
          <Route exact path="/MyDocument" component={MyDocument} />
          <Route exact path="/MyKyckey" component={MyKyckey} />
          <Route exact path="/Myaccount" component={Myaccount} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
