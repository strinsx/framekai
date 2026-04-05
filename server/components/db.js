const mongoose = require('mongoose');
require('dotenv').config();


const URI = process.env.DB_URI;


async function DB(){
    await mongoose.connect(URI)


}

module.exports = DB;