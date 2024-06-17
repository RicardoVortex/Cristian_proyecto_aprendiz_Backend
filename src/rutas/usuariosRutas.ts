
import {Router} from "express"
import { obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario, leerUsuario, demasUsuarios, loguearUsuario, registrarUsuario } from "../controladores/usuariosControlador";
import { validacionUsuario } from "../verificadores/validacionUsuario";
import {autenticacion} from "../verificadores/autenticacion";



export const usuariosRutas = Router();


usuariosRutas.get("/loguearUsuario", loguearUsuario);
usuariosRutas.post("/registrarUsuario", registrarUsuario);
usuariosRutas.get("/obtenerUsuarios", autenticacion, validacionUsuario, obtenerUsuarios);
usuariosRutas.post("/crearUsuario", autenticacion, validacionUsuario, crearUsuario);
usuariosRutas.put("/actualizarUsuario/:id", autenticacion, validacionUsuario, actualizarUsuario);
usuariosRutas.delete("/eliminarUsuario/:id", autenticacion, validacionUsuario, eliminarUsuario);
usuariosRutas.get("/leerUsuario/:id", autenticacion, validacionUsuario, leerUsuario);
usuariosRutas.get("/demasUsuarios/:id", autenticacion, validacionUsuario, demasUsuarios);





