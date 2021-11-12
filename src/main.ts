import { Course } from "./Course";
import { CourseManager } from "./CourseManager";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { TeachingAssistant } from "./TeachingAssistant";

const courseManager = new CourseManager();

const typescriptCource = new Course('Typescript', 2);

courseManager.addCourse(typescriptCource);

// Assign a teacher to the course
const andrew = new Teacher('Andrew', 'Oh');
courseManager.assignTeacherToCourse('Typescript', andrew);

// Assign a TA to the course
const brittany = new TeachingAssistant('Brittany', 'Channer');
courseManager.assignTAToCourse('Typescript', brittany);

console.log(courseManager.getAllCourses());



// // Assign teacher to the course
// const tsTeacher = new Teacher('Chris', 'Yang');

// // Assign teaching assistant
// const ta = new TeachingAssistant('Ryan', 'Scot');

// const andrew = new Student('Andrew', 'Oh');
// const brittany = new Student('Brittany', 'Channer');

// typescriptCource.teacher = tsTeacher;
// typescriptCource.ta = ta;
// typescriptCource.students = [andrew, brittany];

// console.log(`The typescript course has ${typescriptCource.getNumberOfStudents()} students.`);
// console.log(`The teacher is ${typescriptCource.teacher?.getFullName()}`);
// console.log(`The teaching assistant is ${typescriptCource.ta?.getFullName()}`);

