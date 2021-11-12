import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { TeachingAssistant } from "./TeachingAssistant";

export class Course {
    public name: string;
    public totalClasses: number;
    public ta: TeachingAssistant;
    public teacher: Teacher;
    public students: Student[];

    constructor(name: string, totalClasses: number) {
        this.name = name;
        this.totalClasses = totalClasses;
    }

    public getName(): string {
        return this.name;
    }

    public getNumberOfStudents(): number {
        if (!this.students) {
            return 0;
        }

        return this.students.length;
    }

    public setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
    }
}