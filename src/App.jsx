import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Header } from "./pages/home/home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route
            path="/funcionarios/*"
            element={
              <Private>
                <Employees />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;