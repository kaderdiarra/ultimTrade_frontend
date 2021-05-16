import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Login from './authentification/Login'

axios.defaults.proxy.host = 'https://malik-lbssociety-lbssociety-mirror-backend.zeet.app'
//axios.defaults.proxy.
// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
function App() {

  const handleClick = async () => {
    try {
      const result = await axios.get('/client')
      console.log("CLIENTS: ", result.data)
    } catch (error) {
      console.log("ERROR")
    }
  }

  return (
    <div className="App">
      <button onClick={handleClick}>HELLO</button>
      {/*<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>*/}
    </div>
  );
}

export default App;
