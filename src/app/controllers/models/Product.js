const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String, required: true },
    description: { type: String, },
    image: { type: String, },
    videoId: { type: String, required: true },
    details: { type: String, },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);
