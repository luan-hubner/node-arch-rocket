import { Submission } from "@src/domain/entities/submission";
import { StudentsRepositoryContract } from "@src/application/repositories/contracts/students-repository-contract";
import { ChallengesRepositoryContract } from "@src/application/repositories/contracts/challenges-repository-contract";

interface CreateChallengeSubmissionRequest {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  constructor(
    private studentsRepository: StudentsRepositoryContract,
    private challengesRepository: ChallengesRepositoryContract
  ) {}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId);

    if (!student) {
      throw new Error("Student doesn't exists.");
    }

    const challenge = await this.challengesRepository.findById(challengeId);

    if (!challenge) {
      throw new Error("Challenge doesn't exists.");
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    });

    return submission;
  }
}
