const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

//Middlewares
app.use(express.json()); //Nos permite manejar post json

app.get('/', (req, res) => {
  res.send('Sever on fire!');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
