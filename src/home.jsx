import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { styles } from "./home.modules.scss"

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = { user: user.uid, email: user.email };
          localStorage.setItem("@detailUser", JSON.stringify(userData));
          navigate("/funcionarios");
        }
      });
    }
    checkLogin();
  }, []);

  return (
    <div className="container">
      <div>
        <h1> clasName={styles.title}</h1>
      </div>
    </div>
  );
  };

export default Home;

