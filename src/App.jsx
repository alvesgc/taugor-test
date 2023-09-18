import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Header from "./Components/Header.jsx"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path = "/" element = {<Home />} /> 
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;