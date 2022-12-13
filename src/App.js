import './App.css';
import Calculator from './components/Calculator';
import React from "react"; 
import "./components/styles/style.scss";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <React.Fragment>
    <Router>
 <Routes>
   <Route path ='/' element ={<Home/>}/>
   <Route path='/detail' element={<Detail />} />
   <Route path='/calc' element={<Calculator />} />
 </Routes>
 </Router>
 </React.Fragment>
  );
}

export default App;
