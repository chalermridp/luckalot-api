import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_import_log' })
export class ResultImportLog extends BaseEntity {
  @PrimaryColumn()
  date: Date;
  @PrimaryColumn()
  timestamp: Date;
  @Column({ name: 'is_success' })
  is_success: boolean;
  @Column({ name: 'total_records' })
  total_records: number;
  @Column({ name: 'error_information' })
  error_information: string;
  @Column()
  remark: string;
  @Column({ name: 'created_by' })
  created_by: string;
  @Column({ name: 'created_at' })
  created_at: Date;
}
