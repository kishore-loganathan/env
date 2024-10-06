import About from "./Comp/About";
import Contact from "./Comp/Contact";
import Home from "./Comp/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}