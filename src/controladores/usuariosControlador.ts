import {RequestHandler, Response, Request, RequestParamHandler} from "express";

import { crearToken } from "../servicios/crearToken";
import bcrypt from "bcrypt-nodejs";
import { Usuarios } from "../modelos/usuarios";
import { Op } from "sequelize";



export const obtenerUsuarios:RequestHandler = async (req: any, res: Response) => {

    
        const registros = await Usuarios.findAll();

        res.status(200).json(registros);


    };


    export const crearUsuario:RequestHandler  = async (req: Request, res: Response) => {



        const resultado = await Usuarios.findOne({where: {correo: req.body.correo}})


        if(resultado){

            return res.status(403).send("El correo se encuentra registrado, por favor pruebe con otras credenciales")
            
            }

        const salto = bcrypt.genSaltSync(11);

        req.body.contraseña = bcrypt.hashSync(req.body.contraseña, salto);
        
        
        
await Usuarios.create({...req.body}).then((promesa)=>{

    return res.status(200).json({mensaje: "registro correcto", token: crearToken(promesa), usuario: promesa});


});



};


    export const actualizarUsuario:RequestHandler  = async (req: Request, res: Response) => {


    const {id} = req.params;
    const {nombre, apellido, edad} = req.body;


    const valor1 = await Usuarios.findOne({where: {id: id}});


valor1?.set({nombre,apellido,edad})

await valor1?.save();




    return res.status(200).json(valor1);
    
    };



    export const eliminarUsuario:RequestHandler  = async (req: Request, res: Response) => {


    const {id} = req.params;
    const respuesta = await Usuarios.destroy({where: {id}});
    
    return res.status(200).json(respuesta);
    
    };
    


    export const leerUsuario:RequestHandler = async (req: Request, res: Response) => {


        const {id} = req.params;
        const respuesta = await Usuarios.findOne({where: {id}});
        
        return res.status(200).json(respuesta);
        
        };
    


        export const demasUsuarios:RequestHandler = async (req: Request, res: Response) => {


            const {id} = req.params;
            const respuesta = await Usuarios.findAll({where: {id: {[Op.not]: id}}});
            
            return res.status(200).json(respuesta);
            
            };



            

export const loguearUsuario:RequestHandler = async (req: Request, res: Response) => {



const {correo, contraseña} = req.body;




    const respuesta = await Usuarios.findOne({where: {correo: correo}}).then((promesa)=>{


if(!promesa){

return res.status(400).send("El correo no esta registrado")


}

const eq = bcrypt.compareSync(contraseña, promesa?.dataValues.contraseña);


if(!eq){

res.status(400).send("contraseña incorrecta")

}else{


res.status(200).json({success: "login correcto", token: crearToken(promesa?.dataValues), usuario: promesa?.dataValues})

}


    })


    
    };


    



export const registrarUsuario:RequestHandler  = async (req: Request, res: Response) => {



    const resultado = await Usuarios.findOne({where: {correo: req.body.correo}})


    if(resultado){

            return res.status(403).send("El correo se encuentra registrado, por favor pruebe con otras credenciales")
            
        }

    const salto = bcrypt.genSaltSync(11);

    req.body.contraseña = bcrypt.hashSync(req.body.contraseña, salto);
        
        
        
await Usuarios.create({...req.body}).then((promesa)=>{

    return res.status(200).json({mensaje: "registro correcto", token: crearToken(promesa), usuario: promesa});


});

};

    


