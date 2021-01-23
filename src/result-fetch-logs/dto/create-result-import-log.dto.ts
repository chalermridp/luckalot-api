export class CreateResultImportLogDto {
  timestamp: Date;
  is_success: boolean;
  total_records: number;
  error_information: string;
  remark: string;
  created_by: string;
}
