import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/Login';
import { useStateValue } from './contexts/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();


  return (

    //BEM naming convention
    <div className="app">

      {!user ? (
        <Login/>
      ) : (
          <div className="app__body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Chat />
                  {/*Chat thing */}
                </Route>
              </Switch>
            </Router>
          </div>
  )}
    </div>
  );
}
export default App;
