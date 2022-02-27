import { Correction, CorrectionProps } from "@src/domain/entities/correction";

export interface CorrectionsRepositoryContract {
  findById(id: string): Promise<Correction | null>;
  findBySubmissionId(submissionId: string): Promise<Correction | null>;
}
