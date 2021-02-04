let server = require('./api/server');

require('dotenv').config();

const port = process.env.PORT || "5000";

server.listen(port, ()=>{
    console.log('Server is sup @ port ',port);
})