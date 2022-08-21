import pg from "pg"
const { Pool } = pg
const conn = new Pool({
    // host: 'ec2-54-159-22-90.compute-1.amazonaws.com',
    // user: 'kcuzlunmmgsmxl',
    // port: '5432',
    // password: '1f7223ef2ac8c5c37d057508baad27266a3e153c80e735bbd15a262f28cf2a9a',
    // database: 'd8cic0i1nducbd',
    connectionString: 'postgres://kcuzlunmmgsmxl:1f7223ef2ac8c5c37d057508baad27266a3e153c80e735bbd15a262f28cf2a9a@ec2-54-159-22-90.compute-1.amazonaws.com:5432/d8cic0i1nducbd',
    ssl: {
        rejectUnauthorized: false
    }
})
export default conn