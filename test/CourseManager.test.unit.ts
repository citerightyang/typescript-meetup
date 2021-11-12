import { CourseManager } from "../src/CourseManager";
import { expect } from 'chai';
import { Course } from "../src/Course";
 
describe('Course Manager Unit Tests', () => {
    let courseManager: CourseManager;

    before(() => {
        courseManager = new CourseManager();
    });

    beforeEach(() => {
        courseManager.courses = new Map();
    })

    it('There should be no courses in course manager', () => {
        expect(courseManager.getAllCourses().size).eq(0);
    });

    it('Should add course properly', () => {
        courseManager.addCourse(new Course("fakeCourseName", 1));
        
        expect(courseManager.courses.size).eq(1);
        expect(courseManager.courses.get("fakeCourseName")).to.be.not.null;
    });
});