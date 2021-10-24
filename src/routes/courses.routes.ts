import { Router } from "express";

import { CreateControler } from "../modules/courses/controllers/CreateController";

const createControler = new CreateControler();

const courseRoutes = Router();

courseRoutes.post("/", createControler.create);
courseRoutes.get("/list", createControler.index);
courseRoutes.put("/:id", createControler.update);
courseRoutes.delete("/:id", createControler.delete);

export { courseRoutes };
