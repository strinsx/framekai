const mongoose = require('mongoose');



const submittedRatings = new mongoose.Schema({
    ratings: String,
})

module.exports = mongoose.model('ratingsDB', submittedRatings);