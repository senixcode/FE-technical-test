import { UserResponse } from "./type"

class LocalStorageUser{
    #user = "user"
    #token = "token"
    constructor(){}

    getUser(){
        const user = localStorage.getItem(this.#user)
        if(user) return JSON.parse(user) as UserResponse
        return;
    }
    getToken(){
        const token = localStorage.getItem(this.#token)
        if(token) return token
        return;
    }
    set(token:string, user:UserResponse){
        localStorage.setItem(this.#token, token)
        localStorage.setItem(this.#user, JSON.stringify(user))
    }
    deleted(){
        localStorage.removeItem(this.#token)
        localStorage.removeItem(this.#user)
    }
}

export default LocalStorageUser