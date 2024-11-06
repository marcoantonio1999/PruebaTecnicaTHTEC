import { useState } from "react";

const MAX_ATTEMPTS = 3;

export function useLoginAttempts() {
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const incrementAttempts = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (newAttempts >= MAX_ATTEMPTS) {
      setIsLocked(true);
      console.log("contraseña incorrecta");
    }
  };

  return { attempts, isLocked, incrementAttempts };
}
