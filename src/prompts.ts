import { Course } from "./Course";
import { CourseManager } from "./CourseManager";

const prompts = require('prompts');

const courseManager = new CourseManager();

(async () => {
  const roleInput = await prompts({
    type: 'select',
    name: 'role',
    message: 'What is your role?',
    choices: [
        { title: 'Admin', value: 'Admin', selected: true },
        { title: 'Teacher', value: 'Teacher' },
        { title: 'Student', value: 'Student' }
    ]
  });

  const userRole = roleInput.role;

  let actionInput;
  if (userRole === "Admin") {
    actionInput = await prompts({
        type: 'select',
        name: 'action',
        message: 'What is the plan?',
        choices: [
            { title: 'Add a course', value: 'AddCourse', selected: true },
            { title: 'Check an existing course', value: 'GetCourse' },
            { title: 'Check all courses', value: 'GetAllCourses' },
            { title: 'Assign teacher to course', value: 'AssignTeacher' },
            { title: 'Assign TA to course', value: 'AssignTA' },
        ]
    });
  }

  let courseInput;
  if (actionInput.action === "AddCourse") {
    courseInput = await prompts({
        type: 'text',
        name: 'courseName',
        message: 'Name of the course?'
    });
  }

  const course = new Course(courseInput.courseName, 2);
  courseManager.addCourse(course);

  console.log(courseManager.getAllCourses());

//   console.log(courseInput);
})();