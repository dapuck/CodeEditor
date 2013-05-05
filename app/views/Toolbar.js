define('views/Toolbar', [
	'jQuery',
	'underscore',
	'backbone',
	'models/TextFile',
	'collections/TextFiles',
	'views/Editor',
	'views/Popup',
	'text!templates/toolbar.html',
	'text!templates/fileSelect.html'
], function($, _, Backbone, TextFile, TextFiles, Editor, Popup, toolbarTmpl, fileSelectTmpl){
	var ToolBar = {
		tagName: 'div',
		
		template: toolbarTmpl,
		
		editors: [],
		
		openFiles: new TextFiles(),
		
		events: {
			'click #newFile': 'newFile',
			'click #openFile': 'openFile',
			'click #saveAll': 'saveAll',
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
			this.openFiles.add(mdl);
			var editor = new Editor({model: mdl, el: $('#editor')[0]});
		},
		
		openFile: function() {
			//show select file dialog
			var popup = new Popup({content:fileSelectTmpl});
			//add form observers
			popup.$('form input[type=file]').on('change',_.bind(function(evt) {
				var file = evt.target.files[0];
				var mdl = new TextFile({'file':file});
				this.openFiles.add(mdl);
				mdl.on('change:_fileReady',function() {
					var editor = new Editor({model:mdl, el: $('#editor')[0]});
				});
				popup.close();
			},this));
		},
		
		saveFile: function() {
			//Determin what file to save 
		},
		
		saveAll: function() {
			this.openFiles.invoke('save');
		}
	};
	return Backbone.View.extend(ToolBar);
});
