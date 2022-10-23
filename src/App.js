import './App.css';
import { NavBar } from './Components/NavBar';
import { Routes, Route} from "react-router-dom";
import {Homepage} from "./Pages/Homepage"
import { Shoppage } from './Pages/Shoppage';
import {ProductDetails} from "./Pages/ProductDetails"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collections/all" element = {<Shoppage/>}/>
        <Route path="/collections/all/:id" element = {<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
