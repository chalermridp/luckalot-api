import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'result_type_sanook_row_number' })
export class ResultTypeSanookRowNumber extends BaseEntity {
  @PrimaryColumn({ name: 'result_type_code' })
  resultTypeCode: string;
  @Column({ name: 'row_number_start' })
  rowNumberStart: number;
  @Column({ name: 'row_number_end' })
  rowNumberEnd: number;
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
