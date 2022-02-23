import { useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  /*-------------------------------------------------- States ------------------------------------------------------*/
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  /*-------------------------------------------------- useEffect ------------------------------------------------------*/
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];

      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  /*-------------------------------------------------- Helpers functions ------------------------------------------------------*/
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    /*
    - Aquí en el return no podemos incluir funciones
    - Podemos agregar código js(expresiones) usando -> {}
      - ternarios
      - operaciones aritméticas
    */
    <div className="container mx-auto mt-14 px-3">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          appPacienteState={paciente}
        />
      </div>
    </div>
  );
}

export default App;
