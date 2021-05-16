import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Home from './Home'
import Login from './authentification/Login'

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
function App() {

  useEffect(() => {
    const getClients = async () => {
      try {
        const result = await axios.get('/client/')
        console.log("CLIENTS: ", result.data)
      } catch (error) {
        console.log("ERROR")
      }
    }
    getClients()
  }, [])

  return (
    <div className="App">
      HELLO
      {/*<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>*/}
    </div>
  );
}

export default App;
