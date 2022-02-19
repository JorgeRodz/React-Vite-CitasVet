const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-2xl rounded-2xl py-10 px-5">
        <div className="mb-5">
          <label
            className="block text-gray-700 capitalize font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            id="email"
            placeholder="Email Contacto Propietario"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="date"
            id="fechaAlta"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="sintomas"
            placeholder="Describe los sintomas"
          />
        </div>
        <input
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-150  hover:shadow-xl hover:-translate-y-0.5 transform block w-1/3 my-0 mx-auto p-3 text-white uppercase font-bold rounded-3xl cursor-pointer"
          type="submit"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};

export default Form;
