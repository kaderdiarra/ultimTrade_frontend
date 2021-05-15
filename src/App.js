import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Login from './authentification/Login'

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
