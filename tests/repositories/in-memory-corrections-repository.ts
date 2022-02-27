import { CorrectionsRepositoryContract } from "@src/application/repositories/contracts/CorrectionsRepositoryContract";
import { Correction } from "@src/domain/entities/correction";

export class InMemoryCorrectionsRepository
  implements CorrectionsRepositoryContract
{
  public items: Correction[] = [];

  async findById(id: string): Promise<Correction | null> {
    const correction = this.items.find((correction) => correction.id === id);

    if (!correction) {
      return null;
    }

    return correction;
  }

  async findBySubmissionId(submissionId: string): Promise<Correction | null> {
    const correction = this.items.find(
      (correction) => correction.props.submissionId === submissionId
    );

    if (!correction) {
      return null;
    }

    return correction;
  }
}
