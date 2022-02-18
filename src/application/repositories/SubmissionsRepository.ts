import { Submission } from "../../domain/entities/submission";

export interface SubmissionsRepository {
  findById(id: string): Promise<Submission | null>;
}
