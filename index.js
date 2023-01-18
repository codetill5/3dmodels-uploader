const app = require('./app');
// require('dot.env').config();

const PORT = 8001;
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
});