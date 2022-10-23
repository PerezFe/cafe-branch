import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EditarProducto = () => {
  //traer el parametro de la ruta
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 1,
      imagen: "",
      categoria: "",
    },
  });

  const navegacion = useNavigate();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if(respuesta.status === 200){
        //cargar los datos de la respuesta en el formulario
        setValue("nombreProducto", respuesta.dato.nombreProducto)
        setValue("precio", respuesta.dato.precio)
        setValue("categoria", respuesta.dato.categoria)
        setValue("imagen", respuesta.dato.imagen)
        console.log(respuesta);
      }else{
        Swal.fire("Ocurrio un error", "Intente este paso en unos minutos", "error")
      }
    });
  }, []);

  const onSubmit = (producto) => {
    console.log(producto)
    //aqui quiero enviar la peticion para actualizar los datos del producto
    editarProductoAPI(id, producto).then((respuesta)=>{
      if(respuesta.status === 200){
        Swal.fire("Producto actualizado", "El produco fue actualizado correctamente", "success")
        navegacion("/administrador")
      }else{
        Swal.fire("Ocurrio un error", "Intente este paso en unos minutos", "error")
        //redireccionar 
      }
    })
  }

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es un valor requerido",
              min: {
                value: 1,
                message: "El precio debe ser como minimo de $1",
              },
              max: {
                value: 1000,
                message: "El precio de producto como maximo debe ser de 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL válida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoría",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
