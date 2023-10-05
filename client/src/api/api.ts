import axios from "axios";
import {LoginData, RegistrationData} from "../types/auth.interfaces";

export const login = (data: LoginData) => {
    return axios.get('http://localhost:8080/authenticate', {auth: data})
}

export const register = (registerData: RegistrationData) => {
    return axios.post('http://localhost:8080/authenticate', {...registerData})
}