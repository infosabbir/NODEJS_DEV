"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = 'John';
let age = 25; //string or number variable takes age.
let obj = { firstName: "john", age };
function createUser(firstName, age) {
    if (age > 20)
        return { firstName };
    return {
        firstName,
        age
    };
}
let str = createUser("Johny", 24);
str.age;
var MemberStatus;
(function (MemberStatus) {
    MemberStatus["Active"] = "Active";
    MemberStatus["Inactive"] = "Inactive";
    MemberStatus["New"] = "New";
})(MemberStatus || (MemberStatus = {}));
async function login(loginArgs) {
    if (loginArgs.email === 'email' && loginArgs.password === 'password') {
        return {
            userName: "John",
            status: MemberStatus.Active,
        };
    }
    else {
        return false;
    }
}
//# sourceMappingURL=main.js.map