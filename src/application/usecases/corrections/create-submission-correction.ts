import { Correction } from "@src/domain/entities/correction";
import { CorrectionsRepositoryContract } from "@src/application/repositories/contracts/corrections-repository-contract";
import { SubmissionsRepositoryContract } from "@src/application/repositories/contracts/submissions-repository-contract";

interface CorrectChallengeSumbmissionRequest {
  submissionId: string;
}

export class CreateSubmissionCorrection {
  constructor(
    private submissionsRepository: SubmissionsRepositoryContract,
    private correctionsRepository: CorrectionsRepositoryContract
  ) {}

  async execute({ submissionId }: CorrectChallengeSumbmissionRequest) {
    const submission = await this.submissionsRepository.findById(submissionId);

    if (!submission) {
      throw new Error("Submission doesn't exists.");
    }

    const submissionAlreadyWasCorrected =
      await this.correctionsRepository.findBySubmissionId(submissionId);

    if (submissionAlreadyWasCorrected) {
      throw new Error("Submission already corrected.");
    }

    const grade = Math.floor(Math.random() * 10);

    const correction = Correction.create({
      grade,
      submissionId,
    });

    return correction;
  }
}
