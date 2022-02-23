import { useEffect, useState, useRef } from "react";
import swal from "sweetalert";

const Paciente = ({
  paciente,
  setPaciente,
  eliminarPaciente,
  appPacienteState,
}) => {
  //*-------------------------------------------------- useState ------------------------------------------------------*/
  const [btnEliminar, setBtnEliminar] = useState(false);

  /*-------------------------------------------------- useRef ------------------------------------------------------*/
  const btnEliminarRef = useRef();

  /*-------------------------------------------------- useEffect ------------------------------------------------------*/
  useEffect(() => {
    if (Object.keys(appPacienteState).length > 0) {
      btnEliminarRef.current.disabled = true; // this disables the button
      setBtnEliminar(true);
    } else {
      btnEliminarRef.current.disabled = false; // this disables the button
      setBtnEliminar(false);
    }
  }, [appPacienteState]);

  /*-------------------------------------------------- helper functions ------------------------------------------------------*/
  const handleDelete = () => {
    swal({
      title: "Estas seguro de eliminar el registro?",
      icon: "warning",
      buttons: ["Cancelar", "Si, eliminar"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        eliminarPaciente(paciente.id);
        swal("Registro eliminado", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-white shadow-xl px-5 py-5 rounded-xl mb-6">
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Nombre:{" "}
        <span className="normal-case font-normal text-black">
          {paciente.nombreMascota}
        </span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Propietario:{" "}
        <span className="normal-case font-normal text-black">
          {paciente.propietario}
        </span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Email:{" "}
        <span className="normal-case font-normal text-black">
          {paciente.email}
        </span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Fecha Alta:{" "}
        <span className="normal-case font-normal text-black">
          {paciente.fechaAlta}
        </span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Sintomas:{" "}
        <span className="normal-case font-normal text-black">
          {paciente.sintomas}
        </span>
      </p>
      <div className="flex justify-evenly mt-5">
        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 transition-all duration-150  hover:shadow-xl hover:-translate-y-0.5 transform py-1 px-8 text-white capitalize font-bold rounded-lg cursor-pointer"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className={
            btnEliminar
              ? "btn-eliminar bg-gray-500 py-1 px-8 text-white capitalize font-bold rounded-lg"
              : "btn-eliminar bg-red-600 hover:bg-red-700 transition-all duration-150  hover:shadow-xl hover:-translate-y-0.5 transform py-1 px-8 text-white capitalize font-bold rounded-lg cursor-pointer"
          }
          ref={btnEliminarRef}
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
