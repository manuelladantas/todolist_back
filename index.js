const express = require('express');
const { initRoutes } = require('./src/app/routes/init-routes');
const cors = require('cors');
require('./src/database/db')();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}));

initRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})