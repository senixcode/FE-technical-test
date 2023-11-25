import axios from "axios";
import { GlobalConstants } from "../../constants/global.contants";
import LocalStorageUser from "../auth/LocalStorageUser";
import { EmployeeResponse } from "./type";

class Employee {
    #domain;
    constructor() {
        this.#domain = GlobalConstants.DOMAIN_API
    }
    async getList() {
        const { data }: { data: EmployeeResponse } = await axios.get(`${this.#domain}/empleados?limit=6`,
            {
                headers: { "Authorization": `Bearer ${new LocalStorageUser().getToken()}` }
            })
        return data.data
    }
}

export default Employee