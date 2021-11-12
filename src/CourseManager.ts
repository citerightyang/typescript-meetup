import { Course } from "./Course";
import { Teacher } from "./Teacher";
import { TeachingAssistant } from "./TeachingAssistant";

export class CourseManager {
    public courses: Map<string, Course>;

    constructor() {
        this.courses = new Map();
    }

    /* Methods for administors to add/query course */

    public addCourse(course: Course): void {
        this.courses.set(course.name, course);
    }

    public getCourseByName(courseName: string): Course {
        // Null checking
        if (!courseName) {
            return null;
        }

        return this.courses.get(courseName);
    }

    public getAllCourses(): Map<string, Course> {
        return this.courses;
    }

    public assignTeacherToCourse(courseName: string, teacher: Teacher): void {
        const course = this.getCourseByName(courseName);
        if (!course || !teacher) {
            return;
        }

        course.teacher = teacher;
    }

    public assignTAToCourse(courseName: string, ta: TeachingAssistant): void {
        const course = this.getCourseByName(courseName);
        if (!course || !ta) {
            return;
        }

        course.ta = ta;
    }
}