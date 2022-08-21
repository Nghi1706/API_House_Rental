import jwt from "jsonwebtoken";
import { secretKey } from "../const/const.js";
import conn from '../connect/db.js'
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
export const deleteToken = async (token) => {
    var client = await conn.connect()
    client.query(`DELETE FROM public.token WHERE "token" = '${token}';`)
    client.release()
}