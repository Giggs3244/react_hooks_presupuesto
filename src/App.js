import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPreguntas, setMostrarPreguntas] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [mostrarGastos, setMostrarGastos] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    if (mostrarGastos) {
      setGastos([...gastos, gasto]);
      setMostrarGastos(false);
      let presupuestoRestante = restante - gasto.cantidad;
      if (isNaN(presupuestoRestante)) {
        presupuestoRestante = 0;
      }
      setRestante(presupuestoRestante);
    }


  }, [gasto, gastos, mostrarGastos, restante]);


  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPreguntas ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPreguntas={setMostrarPreguntas}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setMostrarGastos={setMostrarGastos} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
