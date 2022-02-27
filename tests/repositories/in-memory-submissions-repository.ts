import { SubmissionsRepositoryContract } from "@src/application/repositories/contracts/SubmissionsRepositoryContract";
import { Submission } from "@src/domain/entities/submission";

export class InMemorySubmissionsRepository
  implements SubmissionsRepositoryContract
{
  public items: Submission[] = [];

  async findById(id: string): Promise<Submission | null> {
    const submission = this.items.find((submission) => submission.id === id);

    if (!submission) {
      return null;
    }

    return submission;
  }
}
