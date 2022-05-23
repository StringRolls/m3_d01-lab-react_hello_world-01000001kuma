import './App.css';
import { Navbar } from "./Navbar";
import Button from "./Button";
import logo from "./images/ironhack-logo-xs.png";
import nav from "./images/menu-top-xs.png";
import logo1 from "./images/icon1.png";
import logo2 from "./images/icon2.png";
import logo3 from "./images/icon3.png";
import logo4 from "./images/icon4.png";


function App() {
  return (
    <>
    <header>
    <img src= {logo} alt="logo" />
    <img src= {nav} alt="logo" />
    
    <Navbar>
   
    

    </Navbar>

    <div className="App"></div>

    </header>
    <main>
    
    <div className='div'>
    <img src= {logo1} alt="logo" />
    <img src= {logo2} alt="logo" />
    <img src= {logo3} alt="logo" />
    <img src= {logo4} alt="logo" />
    </div>

    </main>
    </>
    
  );
}
export default App;