import Header from "./components/Header";
import Form from "./components/form";
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
    <>
      <Header />
      <Form />
      <ListadoPacientes />
    </>
  );
}

export default App;
