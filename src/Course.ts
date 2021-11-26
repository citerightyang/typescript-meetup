import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { TeachingAssistant } from "./TeachingAssistant";

export class Course {
    public name: string;
    public totalClasses: number;
    public ta: TeachingAssistant;
    public teacher: Teacher;
    public students: Map<string, Student>;

    constructor(name: string, totalClasses: number) {
        this.name = name;
        this.totalClasses = totalClasses;
        this.students = new Map();
    }

    public hasStudent(studentName: string): boolean {
        return this.students.has(studentName);
    }

    public addStudent(student: Student): void {
        // TODO: null check
        this.students.set(student.getFullName(), student);
    }

    public removeStudent(studentName: string): Student {
        const studentToRemove = this.students.get(studentName);

        this.students.delete(studentName);

        return studentToRemove;
    }

    public getName(): string {
        return this.name;
    }

    public getNumberOfStudents(): number {
        if (!this.students) {
            return 0;
        }

        return this.students.size;
    }

    public setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
    }
}