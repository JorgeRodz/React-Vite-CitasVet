import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  /* Here we can put js code */

  return (
    /*
    - Aquí en el return no podemos incluir funciones
    - Podemos agregar código js(expresiones) usando -> {}
      - ternarios
      - operaciones aritméticas
    */
    <div className="container mx-auto mt-14">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
