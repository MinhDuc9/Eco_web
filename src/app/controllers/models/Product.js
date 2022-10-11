const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, },
        image: { type: String, },
        videoId: { type: String, required: true },
        details: { type: String, },
        slug: { type: String, slug: 'name', unique: true },
    }, {
        timestamps: true,
    }
);

// Add plugins
mongoose.plugin(slug);
Product.plugin(mongooseDelete, { 
    deletedAt : true, 
    overrideMethods: 'all',
});
    
module.exports = mongoose.model('Product', Product);
