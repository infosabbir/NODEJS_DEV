let firstName: string = 'John';

let age: number | string = 25; //string or number variable takes age.

let obj: { firstName: string, age: number } = { firstName: "john", age }

interface User {
    age?: number | string;
    firstName: string;
}

function createUser(firstName: string, age: number): User {

    if (age > 20) return { firstName };

    return {
        firstName,
        age
    };
}

let str = createUser("Johny", 24);

str.age;

interface Login<Pwd> {
    email: string;
    password: Pwd;
}

interface Member {
    userName: string;
    status: MemberStatus;
}

enum MemberStatus {
    Active = "Active",
    Inactive = "Inactive",
    New = "New",
}

type PasswordType = string | number;

type LoginResult = Promise<null | Member>;

async function login(loginArgs: Login<PasswordType>): LoginResult {
    if (loginArgs.email === 'email' && loginArgs.password === 'password') {
        return {
            userName: "John",
            status: MemberStatus.Active,
        };
    } else {
        return null;
    }
}

login({ email: "email", password: "password" }).then(result => {
    if (!result) return;
    if (result.status === MemberStatus.Active) console.log('User is Active');
});