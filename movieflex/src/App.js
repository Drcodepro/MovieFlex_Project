
import './App.css';
import MultipleCard from "./Component/MultipleCards.js"
import {NavBar} from './Component/NavBar.js';

function App() {
  return (
  <div >
  <NavBar/>
 <div id="CardContainer">
     <MultipleCard/>
 </div>

  </div>
  );
}

export default App;
