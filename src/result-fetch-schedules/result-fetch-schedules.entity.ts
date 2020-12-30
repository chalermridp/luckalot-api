import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_fetch_schedule' })
export class ResultFetchSchedule extends BaseEntity {
  @PrimaryColumn()
  date: Date;
  @Column({ name: 'is_completed', default: false })
  isCompleted: boolean;
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
