import { Request, Response } from "express";
import { FirebaseRopository } from "../../../repositories/FirebaseRopository";

const firebaseRopository = new FirebaseRopository();

export class CreateControler {
  public async create(req: Request, res: Response) {
    const { title, duration, description } = req.body;

    await firebaseRopository.create({
      title,
      duration,
      description,
    });

    return res.status(200).send();
  }

  public async index(req: Request, res: Response) {
    const course = await firebaseRopository.listAllCourse();
    return res.json(course);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, duration, description }: any = req.body;

    await firebaseRopository.update({
      id,
      title,
      duration,
      description,
    });

    return res.status(200).send();
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await firebaseRopository.delete(id);
    return res.status(200).send();
  }
}
