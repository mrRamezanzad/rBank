import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  mobile: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true, unique: true })
  username?: string;

  @Column({ nullable: true })
  password?: string;
}
