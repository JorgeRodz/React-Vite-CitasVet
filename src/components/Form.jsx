import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  /*-------------------------------------------------- states ------------------------------------------------------*/
  const [nombreMascota, setNombreMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  /*-------------------------------------------------- useEffect ------------------------------------------------------*/

  // Esto solo se ejecuta cuando hay un cambio en el state de paciente - es el equivalente a componentDidUpdate de React Class Component
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombreMascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  // Esto solo se ejecuta cuando el componente es renderizado - es el equivalente a componentDidMount de React Class Component
  useEffect(() => {
    // console.log(`El componente esta listo`);
  }, []);

  /*-------------------------------------------------- helper functions ------------------------------------------------------*/

  const generarId = () => {
    const ramdom = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return ramdom + fecha;
  };

  const validateDate = (date) => {
    const [y, m, d] = date.split("-");
    const currentDate = new Date();

    if (y < currentDate.getFullYear()) return true;
    if (m < currentDate.getMonth() + 1) return true;
    if (d <= currentDate.getDate()) return true;

    return false;
  };

  /*-------------------------------------------------- form validations ------------------------------------------------------*/
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para que los inputs no estén vacíos
    if ([nombreMascota, propietario, email, fechaAlta, sintomas].includes("")) {
      setMensajeError("Todos los campos son obligatorios");
      setError(true);
      return;
    }

    // Validación para que la fecha sea posterior al dia de Hoy
    if (validateDate(fechaAlta)) {
      setMensajeError("La Fecha debe ser posterior al dia de hoy");
      setError(true);
      return;
    }

    setError(false);

    // Objeto del paciente en el cual vamos a agregar todos los datos de los states.
    const objetoPaciente = {
      nombreMascota,
      propietario,
      email,
      fechaAlta,
      sintomas,
    };

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) => {
        // pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        if (pacienteState.id === paciente.id) {
          return objetoPaciente;
        }

        return pacienteState;
      });

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([objetoPaciente, ...pacientes]);
    }

    // Reiniciar los inputs de los formularios
    setNombreMascota("");
    setPropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");

    return;
  };

  /*-------------------------------------------------- return component jsx ------------------------------------------------------*/
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-6">
        Añade Pacientes y{" "}
        <span className="text-blue-600 font-bold">Administralos</span>
      </p>
      <form
        className={
          paciente.id
            ? "bg-white border-2 border-green-400 shadow-2xl rounded-2xl py-7 px-5 mx-3"
            : error
            ? "bg-white border-2 border-red-300 shadow-2xl rounded-2xl py-7 px-5 mx-3"
            : "bg-white shadow-2xl rounded-2xl py-7 px-5 mx-3"
        }
        onSubmit={handleSubmit}
      >
        {/* AND logical operator returns the first falsy value. If not find any falsy value....the last value is return no matter if is truthy or falsy.
          - In this case when error is false....React does not render anything.
          - But when error is true....React render the last value; in this case is the html tag.
          */}
        {error && (
          <Error>
            <strong className="font-bold">{mensajeError}</strong>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 capitalize font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            className={
              paciente.id
                ? "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            }
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 capitalize font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            className={
              paciente.id
                ? "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            }
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 capitalize font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={
              paciente.id
                ? "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            }
            type="email"
            id="email"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 capitalize font-bold"
            htmlFor="fechaAlta"
          >
            Fecha de Alta
          </label>
          <input
            className={
              paciente.id
                ? "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            }
            type="date"
            id="fechaAlta"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 capitalize font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className={
              paciente.id
                ? "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                : "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            }
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-150  hover:shadow-xl hover:-translate-y-0.5 transform block min-w-min my-0 mx-auto py-3 px-6 text-white uppercase font-bold rounded-3xl cursor-pointer"
          type="submit"
          value={paciente.id ? "Guardar Nuevos Cambios" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
