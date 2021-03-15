const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: `If guns don't kill people, people kill people, does that mean that toasters don't toast toast, toast toasts toast?`,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./src/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hb.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log (`App listening on port ${PORT}`))
})