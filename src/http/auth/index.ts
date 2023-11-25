import axios from "axios";
import { SigInResponse, User } from "./type";
import { GlobalConstants } from "../../constants/global.contants";
import LocalStorageUser from "./localStorageUser";

class Auth {
    #domain
    constructor() {
        this.#domain = GlobalConstants.DOMAIN_API
    }
    async sigIn(body: User) {
        const { data }: { data: SigInResponse } = await axios.post(`${this.#domain}/auth/login`, body)
        //save auth in localStorage
        if (data.status === "success") new LocalStorageUser().set(data.data.token, data.data.user)
        return data
    }
}

export default Auth