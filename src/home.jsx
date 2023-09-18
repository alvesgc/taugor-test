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
    <div className="container">
      <div>
      <h1 className={styles.title}>Gerencie documentos de forma dinâmica</h1>
      </div>
    </div>
  );
  };

export default Home;

