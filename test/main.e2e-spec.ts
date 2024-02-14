import {Api} from "../src/Api";

describe("Application",()=>{

    describe("Api",()=>{

        it("Should return array of users",()=>{

            expect(Api.instance.getUsers().then(response=>Array.isArray(response))).resolves.toBeTruthy()

        })

    })

})