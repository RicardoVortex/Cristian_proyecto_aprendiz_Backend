import jwt from "jwt-simple";
import { LLAVE } from "../config";
import { crearToken } from "../servicios/crearToken";
import { Usuarios } from "../modelos/usuarios";




export const autenticacion = (req:any, res:any, next:any)=>{





if (!req.headers.authorization) {

    return res.status(403).send({
        message: "No existe la cabecera"
    });

}




const arreglo = req.headers.authorization.split(" ")[1] || "";
const token = arreglo.replace(/[""]+/g, "");





let payLoad;

try{
    payLoad = jwt.decode(token,`${LLAVE}`);
    

}catch(error){

return res.status(404).send({Error: "el token es incorrecto"})

}


req.usuario = payLoad;

    next();





}