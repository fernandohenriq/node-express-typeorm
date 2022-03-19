import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  
  /*
    Se por algum motivo nao tiver a tabela nao tiver um id
    entao cria-se um abaixo usandoa  lib "uuid"
  */
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }


}