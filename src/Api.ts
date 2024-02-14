import {User} from "./types";

export class Api {

    readonly base_url = 'https://dummyjson.com/';
    static instance = new Api();

    private constructor() {
    }

    async getUsers() {
        const response: {users: User[]} = await fetch(this.base_url + 'users').then(res=>res.json());
        return response.users;
    }

    async getUserById(id: number): Promise<User> {
        const response = await fetch(this.base_url + "users/" + id).then(res => res.json());
        if("message" in response){
            throw new Error(response.message);
        }

        return response;
    }

    async searchByName(name: string){
        const response = await fetch(this.base_url + "users/search?q="+name).then(res=>res.json());
        if("message" in response){
            throw new Error(response.message);
        }

        return response;
    }
}