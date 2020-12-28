import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_type' })
export class ResultType extends BaseEntity {
  @PrimaryColumn()
  code: string;
  @Column({ name: 'name_th' })
  nameTh: string;
  @Column({ name: 'name_en' })
  nameEn: string;
  @Column()
  reward: number;
  @Column()
  amount: number;
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
