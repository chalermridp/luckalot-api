import { Entity, BaseEntity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: 'result_date' })
export class ResultDate extends BaseEntity {
    @PrimaryColumn({ type: 'date' })
    date: Date;
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