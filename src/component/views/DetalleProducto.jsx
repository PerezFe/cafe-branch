import { useEffect, useState } from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { obtenerProductoAPI } from "../helpers/queries";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';




const DetalleProducto = () => {
    const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setProducto(respuesta.dato);
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo", "error");
      }
    });
  },[]);
    
    return (
        <Card className='container my-5 mainSection'>
            <Row className='w-75'>
                <Col md={6}>
                    <img src={producto.imagen} className="w-100" />
                </Col>
                <Col md={6} className="py-3">
                <h3>{producto.nombreProducto}</h3>
                <hr/>
                <Badge bg="success">Dulce</Badge>
                <p className='mt-3'><b>Precio: $</b>{producto.precio} </p>
                </Col>
            </Row>
        </Card>
    );
};

export default DetalleProducto;