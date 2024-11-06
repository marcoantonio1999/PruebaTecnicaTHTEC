import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginForm.css";
import CustomModal from "../components/modals/modalAttempts"
import { useDispatch, useSelector } from "react-redux";
import { incrementAttempts, resetAttempts } from "../redux/LoginAttemptsSlice";
import { loginSuccess } from "../redux/AuthSlice";
export default function Login() {


  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const { attempts, isLocked } = useSelector((state) => state.loginAttempts);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (password === "12345") {
      dispatch(resetAttempts());
      dispatch(loginSuccess());
      navigate("/dashboard");

    } else {
      dispatch(incrementAttempts());
      console.log(attempts, isLocked);
    }
  };

  return (
    <>
      <div className="card" >
      <h2>Login</h2>
      <div className="input-container">
        <label htmlFor="username">
          Nombre de usuario
        </label>
        <input
          id = 'username'
          type="text"
          placeholder="Usuario"
          defaultValue="azteca"
        />
      </div>
      <div className="input-container">
        <label htmlFor="username">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} disabled={isLocked}>
        Enviar
      </button>
      <p>Intentos de login fallidos: {attempts}</p>
      {isLocked && <p style={{ color: "red" }}>La cuenta está bloqueada por demasiados intentos fallidos.</p>}
    </div>

    <CustomModal
    header="Cuenta Bloqueada"
    body="Tu cuenta se ha bloqueada debido a demasiados intentos fallidos. No se permiten más intentos." 
    isOpen={isLocked}
    onClose={() => dispatch(resetAttempts())} />
    </>

  );
}

