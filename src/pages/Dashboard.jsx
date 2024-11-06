import React, { useState } from "react";
import { getUserData } from "../api/userData";
import CustomModal from "../components/modals/modalAttempts";
import '../styles/dashboardForm.css';
import '../styles/card.css';

export default function UserForm() {

  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleFetchUser = async () => {
    setIsTouched(true);
    if (!userId) {return;}

    try {
      const data = await getUserData(userId);
      if (data && data !== "") {
        setUserData(data);
      } else {
        setUserData(null);
        setIsOpen(true);
      }
    } catch (error) {
      setUserData(null);
      setIsOpen(true);
    }
  };
  return (
    <>
      <div className="card">
        <div className="input-container">
          <h2>Formulario de Usuario</h2>
          <input
            type="number"
            placeholder="ID usuario"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              setIsTouched(false);
              }
            }
          />
          <button onClick={handleFetchUser}>Buscar Usuario</button>
          
        </div>
        
        {userData && (
          <div className="input-container">
            <input type="text" value={userData.nombre} disabled />
            <input type="text" value={userData.apellidoMaterno} disabled />
            <input type="text" value={userData.apellidoPaterno} disabled />
          </div>
        )}
        {isTouched && !userId && <p style={{ color: "red" }}>Selecciona un id valido</p>}
        {userId && <CustomModal
        header="Usuario no encontrado"
        body={"Usuario con id '"+userId+"' no existe."} 
        isOpen={isOpen}
        onClose={() => setIsOpen(false) }
        />}
      </div>
    </>
    
  );
}
