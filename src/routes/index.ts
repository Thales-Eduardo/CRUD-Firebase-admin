import { Router } from "express";

import { courseRoutes } from "./courses.routes";

const router = Router();

router.use("/courses", courseRoutes);

export { router };
