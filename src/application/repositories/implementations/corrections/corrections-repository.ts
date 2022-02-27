import { Correction, CorrectionProps } from "@src/domain/entities/correction";
import { CorrectionsRepositoryContract } from "../../contracts/corrections-repository-contract";
import { MongoHelper } from "../helpers/mongo-helper";

export class CorrectionsRepository implements CorrectionsRepositoryContract {
  private corrections: Correction[] = [];

  async findById(id: string): Promise<Correction | null> {
    const correction = this.corrections.find(
      (correction) => correction.id === id
    );

    if (!correction) {
      return null;
    }

    return correction;
  }

  async findBySubmissionId(submissionId: string): Promise<Correction | null> {
    const correction = this.corrections.find(
      (correction) => correction.props.submissionId === submissionId
    );

    if (!correction) {
      return null;
    }

    return correction;
  }
}
