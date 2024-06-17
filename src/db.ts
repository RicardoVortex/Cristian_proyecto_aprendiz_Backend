import { Sequelize } from "sequelize-typescript";
import { Usuarios } from "./modelos/usuarios";

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize("dataprueba1", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
  models: [Usuarios],
  logging: false,
});

export async function conexionBD() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(`error en la conexión ${error}`);
  }
}
