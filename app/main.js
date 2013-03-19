require.config({
	paths: {
		'jQuery': 'libs/jquery-1.9.1.min',
		'codemirror': 'libs/codemirror-3.1',
		'cmmode': 'libs/codemirror-3.1/mode',
		'cmaddon': 'libs/codemirror-3.1/addon',
		'backbone': 'libs/backbone',
		'underscore': 'libs/underscore'
	},
	shim: {
		// libs
		'jQuery': {
			exports: 'jQuery'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jQuery', 'underscore'],
			exports: 'Backbone'
		},
		'codemirror/lib/codemirror': {
			exports:'CodeMirror'
		},
		// modes
		'cmmode/clojure/clojure': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/coffeescript/coffeescript': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/css/css': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/htmlmixed/htmlmixed': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/javascript/javascript': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/perl/perl': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/php/php': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/shell/shell': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/sql/sql': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/xml/xml': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmmode/yaml/yaml': {
			deps: ['codemirror/lib/codemirror']
		},
		// addons
		'cmaddon/edit/closebrackets': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/edit/closetag': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/edit/continuecomment': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/edit/continuelist': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/edit/matchbrackets': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/format/formatting': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/hint/javascript-hint': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/hint/xml-hint': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/lint/javascript-lint': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/lint/json-lint': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/runmode/colorize': {
			deps: ['codemirror/lib/codemirror']
		},
		'cmaddon/search/match-highlighter': {
			deps: ['codemirror/lib/codemirror']
		}
	}
});

// define([
	// 'jQuery',
	// 'codemirror/lib/codemirror',
	// 'cmmode/javascript/javascript',
	// 'cmaddon/edit/matchbrackets'
// ], function($, CodeMirror) {
	// window.editor = CodeMirror(document.body, {
		// value: "function temp () {}",
		// mode: "javascript"
	// });
// });

define([
	'jQuery',
	'models/TextFile',
	'views/Editor',
	'views/Toolbar'
], function($,TextFile,Editor,Toolbar) {
	var tbView = new Toolbar({el: $('#toolbar')[0]});
});

