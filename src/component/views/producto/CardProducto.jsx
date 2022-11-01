import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarAPI } from "../../helpers/queries";
import Col from 'react-bootstrap/Col';



const CardProducto = () => {
  
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setProducto(respuesta);
    });
  }, []);
  
  return (
    <>
      {producto.map((producto) => (
        <Col sm={12} md={4} lg={4} className="my-1">
          <Card key={producto._id}>
            <Card.Img
              src={producto.imagen}
              alt={producto.titulo}
              className="img-fluid imgSize"
            />
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <Card.Text className="ocultarTexto ocultarTextoMD">
              </Card.Text>
              <Link className="btn btn-success" to={`/detalle-producto/${producto._id}`}>
                Ver más
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>)
  //   <Card className="my-4">
  //     <Card.Img
  //       variant="top"
  //       src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //       className="img-fluid"
  //     />
  //     <Card.Body>
  //       <Card.Title>{producto.nombreProducto}</Card.Title>
  //       <Card.Text>Precio: $400</Card.Text>
  //     </Card.Body>
  //     <Card.Footer>
  //     <Link className="btn btn-primary" to="/detalle-producto">Ver Mas</Link>
  //     </Card.Footer>
  //   </Card>
  // );
};

export default CardProducto;
