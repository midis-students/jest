import {users} from "./mock";
import {getUserFullname} from "../src/users";

describe("Users", () => {

    it("Should return full name",()=>{
        const user = users[0];
        const fullName = `${user.firstName} ${user.lastName} ${user.maidenName}`;
        expect(getUserFullname(user)).toBe(fullName);
    })

})