define('views/Toolbar', [
	'jQuery',
	'underscore',
	'backbone',
	'models/TextFile',
	'views/Editor',
	'views/Popup',
	'text!templates/toolbar.html',
	'text!templates/fileSelect.html'
], function($, _, Backbone, TextFile, Editor, Popup, toolbarTmpl, fileSelectTmpl){
	var ToolBar = {
		tagName: 'div',
		
		template: toolbarTmpl,
		
		events: {
			'click #newFile': 'newFile',
			'click #openFile': 'openFile',
			'click #saveFile': 'saveFile'
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
			//show select file dialog
			var popup = new Popup({content:fileSelectTmpl});
			//add form observers
			popup.$('form input[type=file]').on('change',function(evt) {
				var file = evt.target.files[0];
				var mdl = new TextFile({'file':file});
				mdl.on('change:_fileReady',function() {
					var editor = new Editor({model:mdl, el: $('#editor')[0]});
				});
				popup.close();
			});
		},
		
		saveFile: function() {
			
		}
	};
	return Backbone.View.extend(ToolBar);
});
