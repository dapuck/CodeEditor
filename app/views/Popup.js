define('views/Popup', [
	'jQuery',
	'underscore',
	'backbone',
	'text!templates/popup.html'
], function($, _, Backbone, popupTmpl){
	var Popup = {
		tagName: 'div',
		
		className: 'popup',
		
		template: _.template(popupTmpl),
		
		events: {
			"click #close": "close"
		},

		initialize: function() {
			this.render();
		},
		
		render: function(options) {
			this.$el.html(this.template(options || this.options));
			$('body').append(this.$el);
			return this;
		},
		
		close: function() {
			this.remove();
		}
	};
	return Backbone.View.extend(Popup);
});
