const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout'); // Stores all files
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});