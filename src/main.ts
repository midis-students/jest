import {Api} from "./Api";

export async function main() {
    const user = await Api.instance.searchByName("Terry");
    console.log(user)
}

