import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen mt-16 md:mt-0">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-6 text-center">
        Administra tus{" "}
        <span className="text-blue-600 font-bold">Pacientes y Citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
