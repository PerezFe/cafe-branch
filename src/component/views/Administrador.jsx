import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import ItemProducto from "./producto/ItemProducto";


const Administrador = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta)=>{
      console.log(respuesta)
      setProductos(respuesta)
    })

  }, [])
  

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Button className="btn btn-primary" to='/administrar/crear'>
          Agregar
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto> )
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
