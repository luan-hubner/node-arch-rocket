import { Student } from "@src/domain/entities/student";

export interface StudentsRepositoryContract {
  findById(id: string): Promise<Student | null>;
}
