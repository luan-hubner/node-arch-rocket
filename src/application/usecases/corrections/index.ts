import { CreateSubmissionCorrection } from "./create-submission-correction";
import { SubmissionsRepository } from "../../repositories/implementations/submissions/submissions-repository";
import { CorrectionsRepository } from "../../repositories/implementations/corrections/corrections-repository";
import { CreateSubmissionCorrectionController } from "./create-submission-correction-controller";

const submissionsRepository = new SubmissionsRepository();
const correctionsRepository = new CorrectionsRepository();

const createSubmissionCorrection = new CreateSubmissionCorrection(
  submissionsRepository,
  correctionsRepository
);

const createSubmissionCorrectionController =
  new CreateSubmissionCorrectionController(createSubmissionCorrection);

export { createSubmissionCorrectionController };
