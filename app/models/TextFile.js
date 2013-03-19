define('models/TextFile',[
	'jQuery',
	'underscore',
	'backbone'
], function ($, _, Backbone){
	return Backbone.Model.extend({
		
		defaults: {
			filename: '',
			text: '',
			fileExt: '',
			file: null,
			_fileReady: false
		},
		
		initialize: function(attrib, options) {
			attrib = attrib || {};
			options = options || {};
			if(options.newFile) {
				// just call the supper
				this.set({'_fileReady': true});
				//Backbone.Model.apply(this, arguments);
			} else {
				// we will just assume that we have been passed
				// the File object 
				var file = attrib.file;
				var reader = new FielReader();
				this.set('file', file);
				var ext = /\.[^.]+$/.exec(file.name) || "";
				this.set('fileExt', ext);
				reader.onload = _.bind(function(file, event) {
					var text = event.target.result;
					this.set('text',text);
					this.set('_fileReady', true);
				}, this, file);
				reader.onprogress = _.bind(function(file,progress){
					this.trigger('progress',progress);
				}, this, file);
				reader.readAsText(file);
			}
		},
		
		sync: function() {
			
		}
	});
});