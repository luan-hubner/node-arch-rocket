import { SubmissionsRepository } from "../../src/application/repositories/SubmissionsRepository";
import { Submission } from "../../src/domain/entities/submission";

export class InMemorySubmissionsRepository implements SubmissionsRepository {
  public items: Submission[] = [];

  async findById(id: string): Promise<Submission | null> {
    const submission = this.items.find((submission) => submission.id === id);

    if (!submission) {
      return null;
    }

    return submission;
  }
}
