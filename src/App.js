import React from 'react';
import './App.css';
import styled from "styled-components";
import {BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
function App() {
  return (
    <div className="app">
    <Router>
      <>
        <Header/>
        <AppBody>
        <SideBar />
        <Switch>
          <Route path="/" exact>
            
            {/* Chat */}

          </Route>
        </Switch>
        </AppBody>
        
      </>
    </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div` 
    display: flex;
    height: 100vh;
`;

