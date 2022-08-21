import conn from '../connect/db.js'
import { createToken, checkToken } from '../models/token.js';
export const signin = async (req, res) => {
    try {
        const data = req.body;
        var client = await conn.connect()
        console.log(data)
        var a = await client.query(`SELECT "aId", "aPhone", "aEmail", "aPassword"
        FROM public.account where "aEmail" = '${data.email}' and "aPassword" = '${data.password}'`
        )
        var token = ''
        if (a.rows.length === 1) {
            token = createToken(data.phone)
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
    try {
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
        res.status(200).json({ 'isAuthorizaion': resultToken.status }).end();
    }
    catch (err) {
        res.status(500).json({ error: err }).end();
    }
}