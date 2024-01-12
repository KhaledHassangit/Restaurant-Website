import { Fragment } from 'react';
import NavBar from './Components/NavBar/Nav';
import {Home} from "./HomePage/Home"

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Home/>
    </Fragment>
    
  );
}

export default App;
