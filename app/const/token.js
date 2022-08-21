import jwt from "jsonwebtoken";
// import { sign, verify } from "jsonwebtoken";
import { secretKey } from "./const.js";
const { sign, verify } = jwt
export const createToken = (phone) => {
    var token = ''
    token = sign({ data: phone }, secretKey, { expiresIn: '1h' })
    return token
}
export const checkToken = (token) => {
    var result = {
        status: false,
        data: {}
    }
    try {
        var data = verify(token, secretKey)
        result = {
            status: true,
            data: data
        }
        return result
    } catch (error) {
        result = {
            status: false,
            data: {}
        }
        return result
    }
}