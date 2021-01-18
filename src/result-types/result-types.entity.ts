import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_type' })
export class ResultType extends BaseEntity {
  @PrimaryColumn()
  code: string;
  @Column({ name: 'name_th' })
  name_th: string;
  @Column({ name: 'name_en' })
  name_en: string;
  @Column()
  reward: number;
  @Column()
  amount: number;
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
