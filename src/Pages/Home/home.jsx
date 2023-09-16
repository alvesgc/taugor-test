import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {

const navigate = useNavigate(); 
  return (
    <div className="container">
      <main className="home">
        <img src="../assets/home.png" alt="Pagina principal" />
        <h1>Voce acaba de chegar no paredao do funk haha</h1>
        <p>Seja bem vindo!</p>
      </main>
      <Button
        onClick={() => navigate("/login")}
        variant="contained"
        color="success"
        sx={{ mr: "20px" }}
      >
        Cadastrar
      </Button>
      <Button
        onClick={() => navigate("/login")}
        variant="outlined"
        color="error"
      >
        Login
      </Button>
    </div>
  );
};
export default Header;

