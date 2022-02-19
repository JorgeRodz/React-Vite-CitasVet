const Paciente = () => {
  return (
    <div className="m-3 bg-white border-2 border-blue-200 shadow-xl px-5 py-10 rounded-xl">
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Nombre: <span className="normal-case font-normal text-black">Hook</span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Propietario:{" "}
        <span className="normal-case font-normal text-black">Jorge</span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Email:{" "}
        <span className="normal-case font-normal text-black">
          correo@correo.com
        </span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Fecha Alta:{" "}
        <span className="normal-case font-normal text-black">
          10 de Diciembre de 2022
        </span>
      </p>
      <p className="font-bold mb-2 text-blue-400 capitalize">
        Sintomas:{" "}
        <span className="normal-case font-normal text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          laboriosam voluptatem commodi iste cum quos explicabo quo consequatur.
          Provident eligendi optio voluptatibus consequuntur atque sequi
          officiis tempora beatae cupiditate sunt.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
