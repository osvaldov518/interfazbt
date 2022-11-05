const {Router} = require('express');
const router = Router();
const {Client} = require('pg');

const client = new Client({
    host: 'ec2-52-23-131-232.compute-1.amazonaws.com',
    port: 5432,
    user: 'czdijimqhtljyo',
    password: 'f7ce97116aeefc9f0bad4bab31297ab85a321c0d07b0b3b5ebcf9802a824ddfd',
    database: 'dc43cdtubahcag',
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()

router.get('/api', async (req, res) => {
    const response = await client.query('select * from pasos_diarios')
    res.json(response.rows)
});

router.post('/api', async (req, res) => {
    const { tipopaso } = req.body;
    const response = await client.query('INSERT INTO pasos_diarios(cant_pasos) values ($1)', [tipopaso]).catch(err => console.log(err))
    res.json('Registro guardado')
});

module.exports = router;