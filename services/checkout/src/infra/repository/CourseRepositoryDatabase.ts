import CourseRepository from "../../application/repository/CourseRepository";
import Course from "../../domain/Course";
import pgp from "pg-promise";
import { PgPromiseAdapter } from "../database/DataBaseConnection";

export default class CourseRepositoryDatabase implements CourseRepository{

    async get(courseId: string): Promise<Course> {
        const connection = new PgPromiseAdapter();
        const [courseData] = await connection.query("select * from sabara.course where course_id = $1",[courseId]);
        await connection.close();
        return new Course(courseData.courseId, courseData.title, parseFloat(courseData.amount));

    }

}