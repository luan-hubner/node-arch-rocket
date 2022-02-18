import { InMemoryChallengesRepository } from "../../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../../tests/repositories/in-memory-students-repository";
import { InMemorySubmissionsRepository } from "../../../../tests/repositories/in-memory-submissions-repository";
import { Challenge } from "../../../domain/entities/challenge";
import { Student } from "../../../domain/entities/student";
import { Submission } from "../../../domain/entities/submission";
import { CreateSubmissionCorrection } from "./create-submission-correction";

describe("Correct a challenge submission use case", () => {
  it("should be able to correct a challenge submission", async () => {
    const submissionsRepository = new InMemorySubmissionsRepository();
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

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

    const sut = new CreateSubmissionCorrection(submissionsRepository);

    const response = sut.execute({
      submissionId: submission.id,
    });

    expect(response).toBeTruthy();
  });
});
