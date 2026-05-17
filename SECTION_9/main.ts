let firstName: string = 'John';

let age: number | string = 25; //string or number variable takes age.

let obj: { firstName: string, age: number } = { firstName: "john", age }

function createUser(firstName: string, age: number): { age?: number, firstName: string } {

    if (age > 20) return { firstName };

    return {
        firstName,
        age
    };
}

let str = createUser("Johny", 24);

str.age;