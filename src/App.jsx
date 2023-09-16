import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Header } from "./Pages/Home/home.jsx"
import  { Home } from "./pages/home/home.jsx";
import { Login } from "./Components/Login/login.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;