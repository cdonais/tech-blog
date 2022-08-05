const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});