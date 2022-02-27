import { Router } from "express";

import { correctionsRoutes } from "./corrections.routes";

const router = Router();

router.use("/corrections", correctionsRoutes);

export { router };
