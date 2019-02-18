var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

 var Product = new keystone.List('Product', {
     map: { name: 'title' },
     autokey: { path: 'slug', from: 'title', unique: true },
 });

 Product.add({
    title: { type: String, required: true },
    content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    mainImage: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
 })

 Product.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

 Product.register();