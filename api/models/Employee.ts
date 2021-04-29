import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  name!: string

  @Column({ type: 'integer', length: 20, nullable: false })
  age!: number

  @Column({ type: 'varchar', length: 20, nullable: false })
  role!: string
}
