const mongoose = require('mongoose');



const submittedRatings = new mongoose.Schema({
    ratings: {type: Number}
})

module.exports = mongoose.model('ratingsDB', submittedRatings);