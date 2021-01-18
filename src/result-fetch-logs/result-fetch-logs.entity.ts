import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_fetch_log' })
export class ResultFetchLog extends BaseEntity {
  @PrimaryColumn()
  date: Date;
  @PrimaryColumn()
  timestamp: Date;
  @Column({ name: 'is_success' })
  is_success: boolean;
  @Column({ name: 'error_information' })
  error_information: string;
  @Column({ name: 'created_by' })
  created_by: string;
  @Column({ name: 'created_at' })
  created_at: Date;
}
