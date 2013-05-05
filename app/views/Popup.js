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
			this.el.style.position = "fixed";
			this.el.style.left = "50%";
			this.el.style.top = "50%";
			$('body').append(this.$el);
			var width = this.$el.outerWidth();
			var height = this.$el.outerHeight();
			this.el.style.marginLeft = "-" + Math.ceil(width/2) + "px";
			this.el.style.marginTop = "-" + Math.ceil(height/2) + "px";
			return this;
		},
		
		close: function() {
			this.remove();
		}
	};
	return Backbone.View.extend(Popup);
});
