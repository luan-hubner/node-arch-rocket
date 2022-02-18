import { Challenge } from "../../../domain/entities/challenge";
import { Correction } from "../../../domain/entities/correction";
import { SubmissionsRepository } from "../../repositories/SubmissionsRepository";

interface CorrectChallengeSumbmissionRequest {
  submissionId: string;
}

export class CreateSubmissionCorrection {
  constructor(private submissionsRepository: SubmissionsRepository) {}

  async execute({ submissionId }: CorrectChallengeSumbmissionRequest) {
    const submission = await this.submissionsRepository.findById(submissionId);

    if (!submission) {
      throw new Error("Submission doesn't exists.");
    }

    const grade = Math.floor(Math.random() * 10);

    const correction = Correction.create({
      grade,
      submissionId,
    });

    return correction;
  }
}
