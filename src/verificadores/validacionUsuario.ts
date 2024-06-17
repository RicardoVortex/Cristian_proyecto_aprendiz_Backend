
import {RequestHandler, Response, Request, RequestParamHandler} from "express";

import { crearToken } from "../servicios/crearToken";
import bcrypt from "bcrypt-nodejs";
import { Usuarios } from "../modelos/usuarios";
import { Op } from "sequelize";



export const validacionUsuario:RequestHandler = async (req: any, res: Response, next: any) => {


    console.log(req.usuario)
    
    
        const respuesta = await Usuarios.findOne({where: {id: req.usuario.id}});
    
    
        if(!respuesta){
    
    return res.status(200).send("el usuario a buscar esta ausente");
    
    
        }
        else{
     
            
            console.log("token de usuario valido");
next()
    
    
        }
    
        };