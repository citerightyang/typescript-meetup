import { SchoolBody } from "./SchoolBody";

export class Student extends SchoolBody {
    public age: number;
    public grade: string;

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}