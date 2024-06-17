import express, { json, urlencoded } from "express";
import { usuariosRutas } from "./rutas/usuariosRutas";
import bodyParser, {} from "body-parser";
import cors from "cors";




const api = express();

// api.use(urlencoded({extended: false}))
// api.use(json())


api.use(cors());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());


api.use("/api", usuariosRutas);


api.use((req, res)=>{

res.redirect("/");

})



export default api;