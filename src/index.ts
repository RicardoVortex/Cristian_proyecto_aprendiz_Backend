import { PUERTO } from "./config";
import api from "./api";



import { conexionBD } from "./db";




try{

  conexionBD();
  api.listen(PUERTO, () => {
    console.log(`servidor corriendo en el puerto ${PUERTO}`);
  });
  

}

catch(error){


console.log(`mensaje: ${error}`);

}