export const getUserData = (userId) => {
    const users = {
      1: { id: 1, nombre: "Juan", apellidoMaterno: "García", apellidoPaterno: "López" },
      2: { id: 2, nombre: "María", apellidoMaterno: "Pérez", apellidoPaterno: "Hernández" },
      3: { id: 2, nombre: "Marco", apellidoMaterno: "Avila", apellidoPaterno: "Orduña" },
      4: { id: 2, nombre: "Enrique", apellidoMaterno: "Cruz", apellidoPaterno: "Acosta" },
      5: { id: 2, nombre: "Ramón", apellidoMaterno: "Garcia", apellidoPaterno: "Fernández" },
      6: { id: 2, nombre: "Daniel", apellidoMaterno: "Castillo", apellidoPaterno: "Durán" },
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        users[userId] ? resolve(users[userId]) : reject("Usuario no encontrado");
      }, 1000);
    });
  };
  