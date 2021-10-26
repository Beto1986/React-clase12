import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const obtenerNombreJugador = (id) => {
  return "Enzo";
};

const Jugador = () => {
  const [edad, setEdad] = useState();
  const { idJugador } = useParams();
  const history = useHistory();
  const [jugador] = useState(obtenerNombreJugador(idJugador));

  return (
    <>
      <h1>{jugador} </h1>
      <input
        type="text"
        name="edad"
        onChange={(e) => setEdad(e.target.value)}
      />

      <button onClick={() => history.push(`/jugador/${edad}`)}>
        Re-dirigime
      </button>
    </>
  );
};

export default Jugador;
