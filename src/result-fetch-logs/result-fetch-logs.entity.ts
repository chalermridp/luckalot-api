import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_fetch_log' })
export class ResultFetchLog extends BaseEntity {
  @PrimaryColumn()
  date: Date;
  @PrimaryColumn()
  timestamp: Date;
  @Column({ name: 'is_success' })
  isSuccess: boolean;
  @Column({ name: 'error_information' })
  errorInformation: string;
  @Column({ name: 'created_by' })
  createdBy: string;
  @Column({ name: 'created_at' })
  createdAt: Date;
}
