const express = require('express');
const app = express();
const port = 3000;
const slug = require('slug')


app.use(require('./routes/index'));

console.log((slug('abass makinde')));

app.listen(port, ()=>{
    console.info(`App is listening on port ${port}`);
});
