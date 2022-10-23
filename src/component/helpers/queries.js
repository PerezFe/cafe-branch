// archivo que nos sirve para hacer las consultas a la api (json-server)

const URL = "http://localhost:3004/productos";
const usuarios ="http://localhost:3004/usuarios"

//tipos de peticiones
// peticion GET que trae todos los productos o un producto
// peticion POST, crear un producto, usuario, login
// peticion DELETE, peticion para borrar
// peticion PUT, modificar algo, producto, usuario, etc

export const consultarAPI = async () => {
    try{
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json()
        // console.log(listaProductos)
        return listaProductos;

    }catch(error){
        console.log(error)
    }
}

export const crearProductoAPI = async (producto) => {
    try{
        const respuesta = await fetch(URL,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });

        return respuesta;

    }catch(error){
        console.log(error)
    }
}

export const borrarProductoAPI = async (id) => {
    try{
        const respuesta = await fetch(`${URL}/${id}`,{
            method: "DELETE",
        });

        return respuesta;

    }catch(error){
        console.log(error)
    }
}

export const obtenerProductoAPI = async (id) => {
    try{
        const respuesta = await fetch(URL+"/"+id);
        const productoBuscado = {
            dato:  await respuesta.json(),
            status: respuesta.status
        }
        return productoBuscado;

    }catch(error){
        console.log(error)
    }
}


// --------------   USUARIOS -------------------

export const consultarAPIUsuarios = async () => {
    try{
        const respuesta = await fetch(usuarios);
        const listaUsuarios = await respuesta.json()
        // console.log(listaProductos)
        return listaUsuarios;

    }catch(error){
        console.log(error)
    }
}

export const crearUsuarioAPI = async () => {
    try{
        const respuesta = await fetch(usuarios,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify()
        });

        return respuesta;

    }catch(error){
        console.log(error)
    }
}