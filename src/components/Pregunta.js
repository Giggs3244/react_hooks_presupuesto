import React, { useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";

const Pregunta = ({ setRestante, setPresupuesto, setMostrarPreguntas }) => {
  const [cantidad, setCantidad] = useState(0);
  const [hasErrorCantidad, setHasErrorCantidad] = useState(false);

  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (isNaN(cantidad) || cantidad <= 0) {
      setHasErrorCantidad(true);
      return;
    }

    setPresupuesto(cantidad);
    setRestante(cantidad);
    setHasErrorCantidad(false);
    setMostrarPreguntas(false);
  };

  return (
    <>
      <h2>
        Coloca tu presupuesto
        {hasErrorCantidad ? (
          <Error mensaje="El presupuesto es incorrecto" />
        ) : null}
      </h2>
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          value={cantidad}
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  setRestante: PropTypes.func.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setMostrarPreguntas: PropTypes.func.isRequired,
};

export default Pregunta;
