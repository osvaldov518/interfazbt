const {Router} = require('express');
const router = Router();
const {Client} = require('pg');

const client = new Client({
    host: 'ec2-34-231-42-166.compute-1.amazonaws.com',
    port: 5432,
    user: 'wcsxbiyhvejnji',
    password: 'd59cee8a6c92d4ad75d1666a01cddc65883e8d8daaf42b8e80b9d5afa714c14b',
    database: 'dv03fm55hlil0',
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()

router.get('/', async(req, res) => {
    res.send('<h1>OV.AM.CC.</h1>')
});

router.get('/api', async (req, res) => {
    const response = await client.query('select * from pasos_diarios')
    res.json(response.rows)
});

router.post('/api', async (req, res) => {
    // const { tipopaso } = req.body;
    const tipopaso = req.body.tipopaso;
    const qry = 'INSERT INTO pasos_diarios(cant_pasos) VALUES (' + tipopaso + ')';
    // const response = await client.query('INSERT INTO pasos_diarios(cant_pasos) values ($1)', [tipopaso]);
    console.log("body: %j", req.body);
    console.log(qry);
    const response = await client.query(qry);
    res.json('Registro guardado.');
});

module.exports = router;