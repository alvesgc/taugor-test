import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { auth } from "./services/firebase";


const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = { user: user.uid, email: user.email };
          localStorage.setItem("@detailUser", JSON.stringify(userData));
          navigate("/dashboard");
        }
      });
    }
    checkLogin();
  },[]);

  return (
    <div className={`container ${styles.home}`}>
      <div>
      <h1 className={styles.title}>Gerencie sua empresa de forma fácil</h1>
      <p className={styles.preview}>Trazendo facilidade no gerenciamento de sua empresa com Taugor. <br/>
        Aumentando sua produtivadade de maneira fácil.<br/>
        Armazene e organize seus documentos em um local seguro.</p>
      </div>
    </div>
  );
  };

export default Home;

