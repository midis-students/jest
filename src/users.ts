import {User} from "./types";

export function getUserFullname(user: User){
    return `${user.firstName} ${user.lastName} ${user.maidenName}`
}