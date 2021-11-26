import { Course } from "./Course";
import { CourseManager } from "./CourseManager";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { TeachingAssistant } from "./TeachingAssistant";

const courseManager = new CourseManager();

/** Administator */
const typescriptCource = new Course('Typescript', 2);
const mathCourse = new Course('Math', 3);

courseManager.addCourse(typescriptCource);
courseManager.addCourse(mathCourse);

// Assign a teacher to the course
const andrew = new Teacher('Andrew', 'Oh');
courseManager.assignTeacherToCourse('Typescript', andrew);

// Assign a TA to the course
const brittany = new TeachingAssistant('Brittany', 'Channer');
courseManager.assignTAToCourse('Typescript', brittany);

courseManager.assignTeacherToCourse('Math', brittany);
courseManager.assignTAToCourse('Math', andrew);

/** Teachers using the system */
const student = new Student('Chris', 'Yang');
courseManager.EnrollStudentToCourse(student, 'Typescript');
courseManager.EnrollStudentToCourse(student, 'Math');

// const studentRyan = new Student('Ryan', )

// console.log(courseManager.getAllCourses());
console.log(courseManager.getAllEnrolledCourses('Chris Yang'));
