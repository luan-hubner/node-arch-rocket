import { Submission } from "@src/domain/entities/submission";

export interface SubmissionsRepositoryContract {
  findById(id: string): Promise<Submission | null>;
}
