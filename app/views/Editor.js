define('views/Editor', [
	'jQuery',
	'underscore',
	'backbone',
	'models/TextFile',
	'codemirror/lib/codemirror'
], function($,_,Backbone,TextFile,CodeMirror){
	return Backbone.View.extend({
		tagName: 'div',
		
		initialize: function() {
			this.render();
		},
		
		render: function() {
			this._loadModeForModel(_.bind(function(modeName){
				this._codeMirror = CodeMirror(this.el, {
					value: this.model.get('text'),
					mode: modeName
				});
			}, this));
		},
		
		save: function() {
			this.model.set('text',this._codeMirror.getValue());
			this.model.save();
		},
		
		_loadModeForModel: function(success) {
			switch(this.model.get('fileExt')) {
				case ".js":
				case ".json":
					require(['cmmode/javascript/javascript'],_.partial(success,'javascript'));
				break;
				case ".pl":
				case ".pm":
					require(['cmmode/perl/perl'],_.partial(success,'perl'));
				break;
				case ".css":
					require(['cmmode/css/css'],_.partial(success,'css'));
				break;
				case ".html":
				case ".htm":
					require(['cmmode/htmlmixed/htmlmixed'],_.partial(success,'htmlmixed'));
				break;
				case ".php":
					require(['cmmode/php/php'],_.partial(success,'php'));
				break;
				case ".sh":
					require(['cmmode/shell/shell'],_.partial(success,'shell'));
				break;
				case ".sql":
					require(['cmmode/sql/sql'],_.partial(success,'sql'));
				break;
				case ".xml":
					require(['cmmode/xml/xml'],_.partial(success,'xml'));
				break;
				case ".yaml":
					require(['cmmode/yaml/yaml'],_.partial(success,'yaml'));
				break;
			}
		}
	});
});
