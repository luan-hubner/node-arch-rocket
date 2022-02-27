import { Router } from "express";
import { createSubmissionCorrectionController } from "../application/usecases/corrections";

const correctionsRoutes = Router();

correctionsRoutes.post("/", (request, response) => {
  return createSubmissionCorrectionController.handle(request, response);
});

export { correctionsRoutes };
