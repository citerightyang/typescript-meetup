export class SchoolBody {
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}