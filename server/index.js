const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

