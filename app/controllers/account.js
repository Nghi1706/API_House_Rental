import conn from '../connect/db.js'
import { createToken, checkToken, deleteToken } from '../models/token.js';
export const signin = async (req, res) => {
    try {
        const data = req.body;
        var client = await conn.connect()
        console.log(data)
        var a = await client.query(`SELECT *
        FROM public.account where "email" = '${data.email}' and "password" = '${data.password}'`
        )
        var token = ''
        if (a.rows.length === 1) {
            token = createToken(data.phone)
            client.query(`INSERT INTO public.token(token)VALUES ('${token}');`)
            res.status(200).json({ 'token': token }).end();
        } else {
            res.status(500).json({ 'message': 'signin fail' }).end();
        }
        client.release()
    }
    catch (err) {
        client.release()
        res.status(500).json({ error: err }).end();
    }
}
export const signout = async (req, res) => {
    const token = req.headers.authorization;
    try {
        deleteToken(token)
        res.status(200).json({ 'status': 'signout success' }).end();
    }
    catch (err) {
        res.status(500).json({ error: err }).end();
    }
}
export const authentica = async (req, res) => {
    try {
        const token = req.headers.authorization;
        var resultToken = checkToken(token)
        if (!token.status) {
            deleteToken(token)
        }
        res.status(200).json({ 'isAuthorizaion': resultToken.status }).end();
    }
    catch (err) {
        res.status(500).json({ error: err }).end();
    }
}