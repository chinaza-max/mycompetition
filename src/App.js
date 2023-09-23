import './App.css';
import Container from './Layout/Container/Container';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Register from "./Pages/Register/Register"
import Contact from "./Pages/Contact/Contact"
//Navigate



function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/> 
            <Route path="/Register" element={<Register/>}/> 
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
