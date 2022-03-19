import { Category } from './Category';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("videos")
export class Video {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

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