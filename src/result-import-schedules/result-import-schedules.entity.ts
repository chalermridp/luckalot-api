import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_import_schedule' })
export class ResultImportSchedule extends BaseEntity {
  @PrimaryColumn()
  date: Date;
  @Column({ name: 'is_completed', default: false })
  is_completed: boolean;
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
