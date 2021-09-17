import { Route } from "react-router-dom"
import React from 'react';
import { 
  main, 
  signIn, 
  signUp,
} from "./pages"

function App() {
  return (
      <React.Fragment>
        <Route path='/' component={signIn} exact/>
        <Route path='/signUp' component={signUp} exact/>
        <Route path='/main' component={main} exact/>
      </React.Fragment>
  );
}

export default App;
