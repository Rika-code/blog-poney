import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home"
import Poneys from "./Poneys"
import Contact from "./Contact"
import Apropos from './Apropos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/poneys" element={<Poneys/>}/>
      <Route path ="/Apropos" element={<Apropos/>}/>
    </Routes>
  
  
    </BrowserRouter>
  );
}

export default App;
