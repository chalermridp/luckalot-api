import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result' })
export class Result extends BaseEntity {
  @PrimaryColumn()
  date: Date;
  @PrimaryColumn({ name: 'result_type_code' })
  resultTypeCode: string;
  @Column()
  value: string;
  @Column({ name: 'is_active', default: true })
  isActive: boolean;
  @Column({ name: 'created_by' })
  createdBy: string;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_by' })
  updatedBy: string;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
