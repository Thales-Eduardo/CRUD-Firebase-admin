import { database } from "firebase-admin";
import { ReqCreateCourses } from "../modules/courses/dtos/req-create-courses";
import { ReqUpdateCourses } from "../modules/courses/dtos/req-update-courses";
import { firebaseRealtime } from "../services/realtimeDatabase";
import { IFirebaseRopository } from "./IFirebaseRopository";

export class FirebaseRopository implements IFirebaseRopository {
  private _database: database.Database;

  constructor() {
    this._database = firebaseRealtime;
  }

  public async create({
    title,
    duration,
    description,
  }: ReqCreateCourses): Promise<void> {
    await this._database.ref("courses").push({
      title,
      duration,
      description,
    });
  }

  public async update({
    id,
    title,
    duration,
    description,
  }: ReqUpdateCourses): Promise<void> {
    await firebaseRealtime.ref("courses").child(id).update({
      title,
      duration,
      description,
    });
  }

  public async listAllCourse(): Promise<ReqCreateCourses> {
    const course = (await firebaseRealtime.ref("courses").once("value")).val();
    return course;
  }

  public async delete(id: string): Promise<void> {
    await firebaseRealtime.ref("courses").child(id).remove();
  }
}
