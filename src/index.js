const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use(require('./routes/routes'))


// server
app.set('port', process.env.PORT || 9000)
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})