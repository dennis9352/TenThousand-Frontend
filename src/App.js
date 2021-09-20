import { Route } from "react-router-dom"
import React from 'react';
import styled from "styled-components";
import { 
  Main, 
  SignIn, 
  SignUp,
} from "./pages"

function App() {
  return (
      <React.Fragment>
        <BackColor>
          <Route path='/' component={SignIn} exact/>
          <Route path='/signup' component={SignUp} exact/>
          <Route path='/main' component={Main} exact/>
        </BackColor>
      </React.Fragment>
  );
}

export default App;

const BackColor = styled.div`
  flex: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #7fd4ba;
  margin: -8px 0 0 -8px
`