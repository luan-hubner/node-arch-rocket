import { Submission } from "@src/domain/entities/submission";
import { SubmissionsRepositoryContract } from "../../contracts/submissions-repository-contract";

export class SubmissionsRepository implements SubmissionsRepositoryContract {
  private submissions: Submission[] = [];

  async findById(id: string): Promise<Submission | null> {
    const submission = this.submissions.find(
      (submission) => submission.id === id
    );

    if (!submission) {
      return null;
    }

    return submission;
  }
}
