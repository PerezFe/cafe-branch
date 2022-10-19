import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./component/views/Inicio";
import Administrador from "./component/views/Administrador";
import Error404 from "./component/views/Error404";
import Footer from "./component/common/Footer";
import DetalleProducto from "./components/views/DetalleProducto"
import CrearProducto from "./components/views/CrearProducto"
import EditarProducto from "./component/views/EditarProducto"
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from "./component/common/Menu"

function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        />
        <Route exact path="/administrar/crear" 
        element={<CrearProducto></CrearProducto>}></Route>
        <Route exact path="/administrar/editar" 
        element={<EditarProducto></EditarProducto>}></Route>
        <Route exact path="detalle-producto" element={<DetalleProducto></DetalleProducto>}></Route>
        <Route path="*" element={<Error404></Error404>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
