import { Course } from "./Course";
import { Teacher } from "./Teacher";

export class CourseManager {
    public courses: {
        [key: string]: Course;
    };

    constructor() {
        this.courses = {};
    }

    /* Methods for administors to add/query course */

    public addCourse(course: Course): void {
        this.courses[course.name] = course;
    }

    public getAllCourses(): any {
        return this.courses;
    }

    public assignTeacherToCourse(course: Course, teacher: Teacher): void {
        course.setTeacher(teacher);
    }
}