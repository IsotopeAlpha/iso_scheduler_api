const express = require('express');
const bodyParser = require('body-parser');
const scheduleRoutes = require('./routes/scheduleRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(errorMiddleware);


app.use('/schedules', scheduleRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});