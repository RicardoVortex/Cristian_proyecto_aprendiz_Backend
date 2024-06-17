import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "Usuarios",
})
export class Usuarios extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre!: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellido!: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  correo!: String;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contraseña!: String;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  edad!: Number;
}
