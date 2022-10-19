import { PrimaryGeneratedColumn, Column } from "typeorm";

export default class Toys{
  @PrimaryGeneratedColumn("uuid") 
  readonly id: string

  @Column()
  status: "new" | "old"
}