import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result' })
export class Result extends BaseEntity {
  @PrimaryColumn()
  id: number;
  @Column({ type: 'date' })
  date: Date;
  @Column({ name: 'result_type_code' })
  result_type_code: string;
  @Column()
  value: string;
  @Column({ name: 'is_active', default: true })
  is_active: boolean;
  @Column({ name: 'created_by' })
  created_by: string;
  @Column({ name: 'created_at' })
  created_at: Date;
  @Column({ name: 'updated_by' })
  updated_by: string;
  @Column({ name: 'updated_at' })
  updated_at: Date;
}
