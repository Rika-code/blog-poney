import './components/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home"
import Poneys from "./page/Poneys"
import Contact from "./page/Contact"
import Apropos from './page/Apropos';

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
