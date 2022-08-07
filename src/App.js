
import './App.css';
import { NavBar } from './Componets/NavBar';
import {Routes,Route} from 'react-router-dom';
import { Home } from "./Pages/Home";
import Shoppage from './Pages/Shoppage';

function App() {
  return (
    <div className="App">
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collation/all" element={<Shoppage/>}/>


     
      </Routes>

    </div>
  );
}

export default App;
