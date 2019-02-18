var keystone = require('keystone');

/**
 * ProductCategory Model
 * ==================
 */

var PostCategory = new keystone.List('ProductCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

PostCategory.add({
	name: { type: String, required: true },
});

PostCategory.relationship({ ref: 'Product', path: 'products', refPath: 'categories' });

PostCategory.register();
