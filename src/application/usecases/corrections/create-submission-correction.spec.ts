import { InMemoryChallengesRepository } from "@tests/repositories/in-memory-challenges-repository";
import { InMemoryCorrectionsRepository } from "@tests/repositories/in-memory-corrections-repository";
import { InMemoryStudentsRepository } from "@tests/repositories/in-memory-students-repository";
import { InMemorySubmissionsRepository } from "@tests/repositories/in-memory-submissions-repository";
import { Challenge } from "@src/domain/entities/challenge";
import { Correction } from "@src/domain/entities/correction";
import { Student } from "@src/domain/entities/student";
import { Submission } from "@src/domain/entities/submission";
import { CreateSubmissionCorrection } from "./create-submission-correction";

describe("Correct a challenge submission use case", () => {
  it("should be able to correct a challenge submission", async () => {
    const submissionsRepository = new InMemorySubmissionsRepository();
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();
    const correctionsRepository = new InMemoryCorrectionsRepository();

    const student = Student.create({
      name: "Luan Hubner",
      email: "luanhubner44@gmail.com",
    });

    const challenge = Challenge.create({
      title: "Desafio Rocket",
      instructionsUrl: "http://localhost",
    });

    const submission = Submission.create({
      challengeId: challenge.id,
      studentId: student.id,
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);
    submissionsRepository.items.push(submission);

    const sut = new CreateSubmissionCorrection(
      submissionsRepository,
      correctionsRepository
    );

    const response = await sut.execute({
      submissionId: submission.id,
    });

    expect(response.props).toMatchObject({
      grade: response.props.grade,
      submissionId: submission.id,
      createdAt: response.props.createdAt,
    });
  });

  it("shouldn't be able to correct a submission that already was corrected", async () => {
    const correctionsRepository = new InMemoryCorrectionsRepository();
    const submissionsRepository = new InMemorySubmissionsRepository();

    const challenge = Challenge.create({
      title: "Desafio Rocket",
      instructionsUrl: "http://localhost",
    });

    const student = Student.create({
      name: "Luan Hubner",
      email: "luanhubner44@gmail.com",
    });

    const submission = Submission.create({
      challengeId: challenge.id,
      studentId: student.id,
    });

    const correction = Correction.create({
      submissionId: submission.id,
      grade: 8,
    });

    submissionsRepository.items.push(submission);
    correctionsRepository.items.push(correction);

    const sut = new CreateSubmissionCorrection(
      submissionsRepository,
      correctionsRepository
    );

    await expect(
      sut.execute({
        submissionId: submission.id,
      })
    ).rejects.toThrow("Submission already corrected.");
  });
});
