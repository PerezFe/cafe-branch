import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const CardProducto = () => {
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>Brownie</Card.Title>
        <Card.Text>Precio: $400</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Link className="btn btn-primary" to="/detalle-producto">Ver Mas</Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
