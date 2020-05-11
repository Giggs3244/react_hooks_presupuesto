import React, { useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ setGasto, setMostrarGastos }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    if (isNaN(cantidad) || cantidad <= 0 || nombre.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    setGasto(gasto);
    setMostrarGastos(true);
    setNombre('');
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto es incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
      </div>
      <div className="campo">
        <label>Valor Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        ></input>
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      ></input>
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setMostrarGastos: PropTypes.func.isRequired,
}

export default Formulario;
