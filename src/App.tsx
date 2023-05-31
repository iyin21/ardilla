import './App.css';
import Home from "./pages/Home";
import Career from "./pages/Career";
import InterestCalculator from "./pages/InterestCalculator";
import { Route, Routes, Navigate,  } from "react-router-dom"


function App() {
  return (
    
    <Routes>
      
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/interest-calculator" element={<InterestCalculator/>}/>
        <Route path="/careers" element={<Career/>}/>
    </Routes>
  );
}

export default App;
