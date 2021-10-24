import { ReqCreateCourses } from "../modules/courses/dtos/req-create-courses";
import { ReqUpdateCourses } from "../modules/courses/dtos/req-update-courses";

export interface IFirebaseRopository {
  create(data: ReqCreateCourses): Promise<void>;
  update(data: ReqUpdateCourses): Promise<void>;
  listAllCourse(): Promise<ReqCreateCourses>;
  delete(id: string): Promise<void>;
}
