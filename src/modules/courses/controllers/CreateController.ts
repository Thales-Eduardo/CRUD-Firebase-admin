import { Request, Response } from "express";
import { firebaseRealtime } from "../../../services/realtimeDatabase";
import { AppErrors } from "../../../shared/error/AppErrors";

export class CreateControler {
  public async create(req: Request, res: Response) {
    const { title, duration, description } = req.body;

    await firebaseRealtime.ref("courses").push({
      title,
      duration,
      description,
    });
    return res.status(200).send();
  }

  public async index(req: Request, res: Response) {
    const course = (await firebaseRealtime.ref("courses").once("value")).val();
    return res.json(course);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, duration, description }: any = req.body;

    const cuurse = (await firebaseRealtime.ref("courses").once("value")).val();

    for (const [key, value] of Object.entries(cuurse)) {
      if (key !== id) {
        throw new AppErrors("id inválido");
      }

      await firebaseRealtime.ref("courses").child(key).update({
        title,
        duration,
        description,
      });
    }

    return res.status(200).send();
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await firebaseRealtime.ref("courses").child(id).remove();
    return res.status(200).send();
  }
}
