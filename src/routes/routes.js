const {Router} = require('express');
const router = Router();
const {Client} = require('pg');

const client = new Client({
    host: 'dpg-cdlg2fta4997vad3niv0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'integrador',
    password: 'htr6ypfBVdEo0RGQ5WVNAkQbBOtyy537',
    database: 'interfazbtdb',
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
    const { tipopaso } = req.body;
    const response = await client.query('INSERT INTO pasos_diarios(cant_pasos) values ($1)', [tipopaso]);
    res.json('Registro guardado.');
});

module.exports = router;