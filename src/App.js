import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './component/views/Inicio'
import Administrador from './component/views/Administrador'
import Error404 from './component/views/Error404'
import DetalleProducto from "./component/views/DetalleProducto";
import CrearProducto from "./component/views/producto/CrearProducto";
import EditarProducto from "./component/views/producto/EditarProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>} />
          {/* <Route exact path='/footer' element={<Footer></Footer>} /> */}
          <Route
          exact
          path="/administrar/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrar/editar"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/detalle-producto"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
          <Route path='*' element={<Error404></Error404>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
