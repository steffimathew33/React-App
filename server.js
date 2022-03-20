const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');

app.use('view engine', 'ejs');
app.use(express.static('public'));
app.use('views', __dirname + '/views');
app.use('layouts', 'layours/layout');
app.use(expressLayouts);

app.use('/', indexRouter);

app.get('/', (req, res) => {
    res.render();
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
