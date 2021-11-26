import { Course } from "./Course";
import { Student } from "./Student";
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

    /** Methods for the teachers */
    public EnrollStudentToCourse(student: Student, courseName: string): void {
        if (!student || !courseName) {
            return;
        }

        const courseToEnroll = this.getCourseByName(courseName);
        courseToEnroll.addStudent(student);
    }

    public removeStudentFromCourse(student: Student, courseName: string): Student {
        if (!student || !courseName) {
            return;
        }

        const courseToRemoveTheStudent = this.getCourseByName(courseName);
        courseToRemoveTheStudent.removeStudent(student.getFullName());
    }

    public getAllStudentsOfCourse(courseName: string): Map<string, Student> {
        // TODO: Null check
        const targetCourse = this.getCourseByName(courseName);
        return targetCourse.students;
    }

    /** Methods for sdudents */
    public getAllEnrolledCourses(studentName: string): Course[] {
        // TODO: null check
        const courses = Array.from(this.courses, ([courseName, course]) => {
            if (course.hasStudent(studentName)) {
                return course;
            }
        }).filter(course => course != null);
        
        return courses;
    }
}