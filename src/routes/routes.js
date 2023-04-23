const {Router} = require('express');
const router = Router();
const {Client} = require('pg');

const client = new Client({
    host: 'dpg-ch2lcqbh4hsum4793lkg-a.oregon-postgres.render.com',
    port: 5432,
    user: 'integrador',
    password: '13AnwmPLEHRZ8qZ0fAELMZGPUuNbo3k9',
    database: 'interfazbtdb_ud4o',
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()

router.get('/', async(req, res) => {
    res.send('<h1>OV.AM.CC.</h1>')
});

router.get('/api', async (req, res) => {
    const response = await client.query('select 000 as API')
    res.json(response.rows)
});

router.post('/api', async (req, res) => {
    const { tipopaso } = req.body;
    const response = await client.query('select public.inserta_pasoindividual($1)', [tipopaso]);
    res.json('Registro guardado.');
});

router.post('/apiUbi', async (req, res) => {
    const { latitud, longitud } = req.body;
    const response = await client.query('select public.actualiza_ubicacion($1, $2)', [latitud, longitud]);
    res.json('Ubicacion Actualizada');
});

router.get('/apidashboard', async (req, res) => {
    const qry = "SELECT * FROM public.get_dashboard()"; 
    const response = await client.query(qry);
    res.json(response.rows)
});

module.exports = router;