const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./models/User');
require('./models/Survey');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets such as
    //main.js and main.css files
    app.use(express.static('client/build'));

    //Express will serve up the index.html if it doesn't
    //recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

