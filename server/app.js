const express = require('express')
const app = express()
const routes = require('./src/routes/postRoute')
const cors = require('cors')

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());
app.use('/', routes);


app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).send('¡Algo salió mal por favor intentar mas tarde!');
  });


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))