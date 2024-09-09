const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
const indexRoutes = require('./routes/index');
const bookingRoutes = require('./routes/booking');
const locationRoutes = require('./routes/location');

app.use('/', indexRoutes);
app.use('/booking', bookingRoutes);
app.use('/location', locationRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
