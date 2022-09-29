const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Eco_web');
        console.log('Connect sussecfully!');
    } catch (error) {
        console.log('Connect failure!');
    }

}

module.exports = { connect };