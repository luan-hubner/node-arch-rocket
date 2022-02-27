import { Request, Response } from "express";
import { CreateSubmissionCorrection } from "./create-submission-correction";

export class CreateSubmissionCorrectionController {
  constructor(private createSubmissionCorrection: CreateSubmissionCorrection) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { submissionId } = request.body;

    const correction = await this.createSubmissionCorrection.execute({
      submissionId,
    });

    return response.status(201).json(correction);
  }
}
