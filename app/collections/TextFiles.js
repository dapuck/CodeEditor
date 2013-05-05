define('collections/TextFiles',[
	'jQuery',
	'underscore',
	'backbone',
	'models/TextFile'
],function($,_,Backbone,TextFile) {
	var TextFiles = {
		model: TextFile
	};
	
	return Backbone.Collection.extend(TextFiles);
});
