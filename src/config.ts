import dotenv from 'dotenv';

dotenv.config({path: "./.env"})

export const PUERTO = process.env.PORT || 4000
export const LLAVE = process.env.CLAVE



