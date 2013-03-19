define('views/Toolbar', [
	'jQuery',
	'underscore',
	'backbone',
	'models/TextFile',
	'views/Editor',
	'text!templates/toolbar.html'
], function($, _, Backbone, TextFile, Editor, toolbarTmpl){
	return Backbone.View.extend({
		tagName: 'div',
		
		template: toolbarTmpl,
		
		events: {
			'click #newFile': 'newFile',
			'click #openFile': 'openFile'
		},

		initialize: function() {
			this.render();
		},
		
		render: function() {
			this.$el.html(this.template);
			return this;
		},
		
		newFile: function() {
			//need to have some kind of popup select box to select
			//what type of file to create
			var mdl = new TextFile({fileExt:".js"}, {newFile: true});
			var editor = new Editor({model: mdl, el: $('#editor')[0]});
		},
		
		openFile: function() {
			
		}
	});
});
