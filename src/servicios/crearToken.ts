import jwt from "jwt-simple";
import { LLAVE } from "../config";
import { Usuarios } from "../modelos/usuarios";



export const crearToken = (usuario:Usuarios)=>{


const payload = {

id: usuario.id,

nombre: usuario.nombre,

apellido: usuario.apellido,

correo: usuario.correo


}


console.log(jwt.encode(payload, `${LLAVE}`));

return jwt.encode(payload, `${LLAVE}`);


}