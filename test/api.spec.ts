import {Api} from "../src/Api";
import {users} from "./mock";

describe("Api", () => {

    describe("getUsers", () => {
        it("should return array of users", () => {
            globalThis.fetch = jest.fn(() => Promise.resolve(new Response(JSON.stringify({users}))));
            expect(Api.instance.getUsers()).resolves.toEqual(users);
            expect(fetch).toHaveBeenCalledWith(Api.instance.base_url + "users")
        });

        it("should return user by id", () => {
            const user = users[0]
            globalThis.fetch = jest.fn(() => Promise.resolve(new Response(JSON.stringify(user))));
            expect(Api.instance.getUserById(user.id)).resolves.toEqual(user);
            expect(fetch).toHaveBeenCalledWith(Api.instance.base_url + "users/" + user.id);
        })

        it("should throw not found user error", () => {
            const id = -1;
            const message = `User with id '${id}' not found`
            globalThis.fetch = jest.fn(() => Promise.resolve(new Response(JSON.stringify({message}))));
            expect(Api.instance.getUserById(id)).rejects.toThrow(message);
            expect(fetch).toHaveBeenCalledWith(Api.instance.base_url + "users/" + id);
        })

        it("should throw invalid id error", () => {
            const id = 'a0';
            const message = `Invalid user id 'a0'`
            globalThis.fetch = jest.fn(() => Promise.resolve(new Response(JSON.stringify({message}))));
            expect(Api.instance.getUserById.call(Api.instance, id)).rejects.toThrow(message);
            expect(fetch).toHaveBeenCalledWith(Api.instance.base_url + "users/" + id);
        })
    })

})