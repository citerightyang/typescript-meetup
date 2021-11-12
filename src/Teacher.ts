import { SchoolBody } from "./SchoolBody";

export class Teacher extends SchoolBody {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}