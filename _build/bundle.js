/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Stylesheets
	__webpack_require__(2);
	__webpack_require__(6);
	// Add content to HTML
	var content = __webpack_require__(9)();
	$('body').html(content);
	// Add images
	$('#company-logo').attr('src', __webpack_require__(12));
	var hostName = window.location.hostname;
	if (hostName == 'mixpanel.com' || hostName == 'mixpanelplatform.com') {
	    mixpanel.init('adc07d1bff38929e7b4d1feb4cac87d3', {}, 'dm');
	} else {
	    mixpanel.init("e289f04030b8c42c579875fbfa315495", {}, 'dm');
	}
	__webpack_require__(13);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n.center-contents {\n  text-align: center;\n  white-space: nowrap;\n}\n.center-contents:before,\n.center-contents-vertical:before {\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n  margin-right: -0.25em;\n}\n.center-vertical {\n  display: inline-block;\n  vertical-align: middle;\n}\n.hidden {\n  display: none;\n}\n.loading {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dashboard-body {\n  padding: 0;\n  font-size: 16px;\n  line-height: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #747d94;\n  margin: 0px;\n}\nul {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.column {\n  width: 45%;\n  padding: 0px 20px 0px 20px;\n}\n.column.pull-left {\n  padding-right: 10px;\n}\n.column.pull-right {\n  padding-left: 10px;\n}\n.column .container-section {\n  margin: 0px 0px 20px 0px;\n}\n.container-logo-title {\n  position: relative;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.container-report {\n  width: 100%;\n  max-width: 980px;\n  min-width: 850px;\n  margin: auto;\n  background-color: #d9dfe9;\n}\n.container-section {\n  background-color: #eff1f6;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 4px;\n}\n.container-chart {\n  background-color: #dfe2ec;\n  padding: 0 1px 1px 1px;\n  border-radius: 2px;\n}\n.container-chart-header {\n  background-color: inherit;\n  position: relative;\n}\n.container-chart-title {\n  background-color: inherit;\n  position: relative;\n  text-align: center;\n  padding: 8px 0;\n  z-index: 4;\n}\n.container-chart-contents {\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%;\n  z-index: 1;\n  border-radius: 0px 0px 2px 2px;\n}\n.container-meter {\n  display: inline-block;\n}\n.container-pie-chart,\n.container-bar-chart,\n.container-line-chart {\n  background-color: #fff;\n  border-radius: 0px 0px 2px 2px;\n}\n.container-pie-chart {\n  padding: 20px;\n}\n.container-pie-chart-legend {\n  margin-left: 14px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.container-bar-chart,\n.container-line-chart {\n  overflow: hidden;\n  position: relative;\n  height: 215px;\n}\n.container-x-axis,\n.container-y-axis {\n  background-color: #fbfcfd;\n  position: absolute;\n  left: 0px;\n  border-radius: 0px 0px 2px 2px;\n}\n.container-y-axis {\n  text-align: center;\n  width: 30px;\n  height: 100%;\n  top: 0px;\n}\n.container-x-axis {\n  height: 30px;\n  width: 100%;\n  bottom: 0px;\n}\n.container-line-chart-points {\n  position: absolute;\n  left: 30px;\n  bottom: 24px;\n}\n.container-bar {\n  width: 12.5%;\n  display: inline-block;\n  text-align: center;\n}\n.button {\n  display: inline-block;\n  padding: 13px 15px;\n  border-radius: 4px;\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);\n}\n.button.action {\n  background-color: #53a2eb;\n  color: #fff;\n}\n.button.enabled {\n  background-color: #fff;\n  color: #747d94;\n}\n.button.disabled {\n  background-color: #f5f6f8;\n  color: #87929c;\n}\n.button-content {\n  display: inline-block;\n}\n.button-text {\n  font-size: 0.625rem;\n}\n.disclosure-indicator {\n  vertical-align: middle;\n  width: 10px;\n  height: 7px;\n}\n.meter-heading,\n.meter-long-heading {\n  width: 150px;\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n  line-height: 1.25rem;\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.meter-heading {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n.meter-long-heading {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.meter-background {\n  position: relative;\n  background-color: #dfe2ec;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);\n}\n.meter-value {\n  background: #fff;\n  position: relative;\n  display: inline-block;\n  width: 130px;\n  height: 130px;\n  margin: 10px;\n  background-color: #fff;\n  z-index: 2;\n  font-size: 1.875rem;\n  line-height: 130px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  border-radius: 50%;\n}\n.meter-svg {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent;\n  z-index: 1;\n  -webkit-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n  border-radius: 50%;\n}\n.meter-progress {\n  stroke-width: 32;\n  stroke-dasharray: 0 100;\n  fill: transparent;\n}\n.chart-title {\n  color: #747d94;\n  font-size: 0.75rem;\n  line-height: 40px;\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.chart-title-shadow {\n  background-color: transparent;\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 1px;\n  z-index: 3 /* Place the shadow below container-chart-title div */;\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);\n}\n.chart-vertical-divider {\n  background-color: #dfe2ec;\n  position: absolute;\n  top: 0px;\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  z-index: 1;\n}\n.mp-table-3-col .csm,\n.mp-table-3-col .company,\n.mp-table-3-col .count {\n  width: 160px;\n}\n.mp-table-3-col .count {\n  width: 100px;\n}\n.mp-table-2-col .mp-table-row-item,\n.mp-table-2-col .mp-table-header-item {\n  width: 210px;\n}\n.mp-table {\n  border-collapse: separate;\n}\n.mp-table-header-item,\n.mp-table-large-header-item {\n  background: #f5f6f8;\n  font-size: 0.5rem;\n  text-align: left;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-table-header-item {\n  height: 19px;\n  line-height: 19px;\n}\n.mp-table-large-header-item {\n  height: 29px;\n  line-height: 29px;\n}\n.mp-table-row-item,\n.mp-table-large-row-item {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n}\n.mp-table-row-item {\n  height: 29px;\n  font-size: 0.625rem;\n  line-height: 29px;\n}\n.mp-table-large-row-item {\n  height: 35px;\n  line-height: 35px;\n  font-size: 0.75rem;\n}\n.mp-table-header-item,\n.mp-table-large-header-item,\n.mp-table-row-item,\n.mp-table-large-row-item {\n  padding: 0 10px 0 9px;\n  color: #747d94;\n  border-right: 1px solid #dfe2ec;\n  border-bottom: 1px solid #dfe2ec;\n}\n.mp-table-header th:last-of-type {\n  border-right: 0;\n}\n.mp-table-row td:last-of-type {\n  border-right: 0;\n}\ntr:last-of-type .mp-table-row-item,\ntr:last-of-type .mp-table-large-row-item {\n  border-bottom: 0;\n}\ntr:nth-child(even) td {\n  background: #fff;\n}\ntr:nth-child(odd) td {\n  background: #f5f6f8;\n}\n.mp-iv-table li:nth-of-type(odd) {\n  background-color: #f5f6f8;\n}\n.mp-iv-table li:nth-of-type(even) {\n  background-color: #fff;\n}\n.mp-iv-table li:last-of-type {\n  border-radius: 0px 0px 2px 2px;\n}\n.mp-iv-table-row {\n  padding: 6px 20px;\n}\n.mp-iv-table-row h2 {\n  font-size: 0.75rem;\n}\n.mp-iv-table-header {\n  padding: 5px 20px;\n  background-color: #f5f6f8;\n}\n.mp-iv-table-header-title {\n  font-size: 0.5rem;\n}\n.pie-chart {\n  width: 170px;\n  height: 170px;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50%;\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);\n}\n.pie-chart-svg {\n  background: transparent;\n  -webkit-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n  border-radius: 50%;\n}\n.pie-chart-circle {\n  stroke-width: 32;\n  fill: transparent;\n}\n.pie-chart-legend-circle {\n  display: inline-block;\n  width: 0.625rem;\n  height: 0.625rem;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n.pie-chart-legend-item {\n  margin-bottom: 0px;\n}\n.pie-chart-legend-item:last-of-type {\n  margin-bottom: 0px;\n}\n.pie-chart-legend-text {\n  display: inline-block;\n  margin-left: 6px;\n  font-size: 0.625rem;\n  vertical-align: middle;\n}\n.y-axis {\n  font-size: 0.5rem;\n  padding-top: 4px;\n}\n.y-value {\n  line-height: 10px;\n  margin-top: 21px;\n}\n.x-axis {\n  font-size: 0.5rem;\n}\n.x-value {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n}\n.x-value h4 {\n  line-height: 30px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chart-horizontal-divider {\n  margin-top: 30px;\n  border-top: 1px dashed #e6e8eb;\n}\n.container-bar-chart div.chart-horizontal-divider:nth-of-type(4) {\n  border-top: 1px solid #f2f3f5;\n}\n.container-line-chart div.chart-horizontal-divider:nth-of-type(3) {\n  border-top: 1px solid #f2f3f5;\n}\n.bars {\n  position: absolute;\n  left: 33px;\n  bottom: 30px;\n  width: calc(100% - 36px);\n}\n.bar {\n  vertical-align: bottom;\n  display: inline-block;\n  width: 25px;\n}\n.chart-dash-big,\n.chart-dash {\n  display: inline-block;\n  background-color: #d9dfe9;\n  margin-right: 15px;\n  width: 1px;\n  vertical-align: top;\n}\n.chart-dash-big {\n  height: 10px;\n}\n.chart-dash {\n  height: 5px;\n}\n.line-chart-point {\n  display: inline-block;\n  background-color: #53a2eb;\n  margin-left: 8px;\n  width: 8px;\n  height: 8px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n}\n.bars .container-bar:nth-of-type(1) .bar {\n  background-color: #54a2eb;\n  height: 155px;\n}\n.bars .container-bar:nth-of-type(2) .bar {\n  background-color: #30bbbd;\n  height: 150px;\n}\n.bars .container-bar:nth-of-type(3) .bar {\n  background-color: #a28bcb;\n  height: 140px;\n}\n.bars .container-bar:nth-of-type(4) .bar {\n  background-color: #da7a80;\n  height: 110px;\n}\n.bars .container-bar:nth-of-type(5) .bar {\n  background-color: #2ab5e2;\n  height: 80px;\n}\n.bars .container-bar:nth-of-type(6) .bar {\n  background-color: #e7bc66;\n  height: 70px;\n}\n.bars .container-bar:nth-of-type(7) .bar {\n  background-color: #eca9cf;\n  height: 50px;\n}\n.bars .container-bar:nth-of-type(8) .bar {\n  background-color: #96abe6;\n  height: 20px;\n}\n.line-chart-day-of-month,\n.line-chart-day-of-new-month {\n  display: inline-block;\n  text-align: center;\n}\n.line-chart-day-of-month {\n  width: 16px;\n  margin-right: 16px;\n}\n.line-chart-day-of-new-month {\n  width: 30px;\n  margin-left: -6px;\n  margin-right: 8px;\n}\n#column-1 {\n  width: 50%;\n}\n#column-2 {\n  width: 50%;\n}\n#app-load {\n  margin: 0 20px 20px;\n}\n#button-range-picker {\n  background-color: #fff;\n}\n#unique-orgs {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n#unique-orgs-mau-progress {\n  stroke: #009cde;\n}\n#unique-orgs-meter-value {\n  color: #009cde;\n}\n#multi-app-orgs-progress {\n  stroke: #009cde;\n}\n#multi-app-orgs-meter-value {\n  color: #009cde;\n}\n#new-orgs {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n#new-orgs-meter-value {\n  color: #009cde;\n}\n#new-orgs-progress {\n  stroke: #009cde;\n}\n#company-logo {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 30px;\n}\n#report-title {\n  font-size: 1.25rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n#range-picker-button-text {\n  margin-right: 15px;\n}\n#meters {\n  position: relative;\n  text-align: center;\n}\n#marketing-channel-1-share {\n  stroke: #54a2eb;\n}\n#marketing-channel-1-legend-item .pie-chart-legend-circle {\n  background-color: #54a2eb;\n}\n#marketing-channel-1-legend-item .pie-chart-legend-text {\n  color: #54a2eb;\n}\n#marketing-channel-2-share {\n  stroke: #30bbbd;\n}\n#marketing-channel-2-legend-item .pie-chart-legend-circle {\n  background-color: #30bbbd;\n}\n#marketing-channel-2-legend-item .pie-chart-legend-text {\n  color: #30bbbd;\n}\n#marketing-channel-3-share {\n  stroke: #a28bcb;\n}\n#marketing-channel-3-legend-item .pie-chart-legend-circle {\n  background-color: #a28bcb;\n}\n#marketing-channel-3-legend-item .pie-chart-legend-text {\n  color: #a28bcb;\n}\n#marketing-channel-4-share {\n  stroke: #da7a80;\n}\n#marketing-channel-4-legend-item .pie-chart-legend-circle {\n  background-color: #da7a80;\n}\n#marketing-channel-4-legend-item .pie-chart-legend-text {\n  color: #da7a80;\n}\n#marketing-channel-5-share {\n  stroke: #2ab5e2;\n}\n#marketing-channel-5-legend-item .pie-chart-legend-circle {\n  background-color: #2ab5e2;\n}\n#marketing-channel-5-legend-item .pie-chart-legend-text {\n  color: #2ab5e2;\n}\n#marketing-channel-6-share {\n  stroke: #e7bc66;\n}\n#marketing-channel-6-legend-item .pie-chart-legend-circle {\n  background-color: #e7bc66;\n}\n#marketing-channel-6-legend-item .pie-chart-legend-text {\n  color: #e7bc66;\n}\n#bar-chart-x-axis {\n  margin-left: 33px;\n  margin-right: 3px;\n}\n#bar-chart-x-axis li.x-value {\n  width: 12.5%;\n}\n#line-chart-x-axis {\n  margin-left: 30px;\n}\n#line-chart-x-axis h4:first-of-type {\n  margin-left: -3px;\n}\n#line-chart-x-axis h4:last-of-type {\n  margin-right: 0px;\n}\n#line-chart-x-axis li.x-value:first-of-type .chart-dash-big {\n  margin-left: 11px;\n}\n#line-chart-x-axis li.x-value:last-of-type .chart-dash {\n  margin-right: 0px;\n}\n#bar-mp-chart,\n#line-mp-chart,\n#pie-mp-chart {\n  height: 330px;\n  background-color: #fbfcfd;\n  border-radius: 0px 0px 2px 2px;\n}\n#line-mp-chart .graph {\n  height: 330px;\n}\n#line-mp-chart svg > path {\n  display: none;\n}\n#line-mp-chart svg > rect:nth-of-type(2) {\n  stroke: #fbfcfd;\n}\n#line-mp-chart svg > rect:nth-of-type(3) {\n  rx: 0;\n  ry: 0;\n}\n#pie-mp-chart {\n  background-color: #fff;\n  border-radius: 0px 0px 2px 2px;\n}\n#loading-symbol {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n  width: 100px;\n  height: 100px;\n  z-index: 5;\n}\n#loading-mp-circle-1 {\n  opacity: 0;\n  -webkit-transform-origin: 7.58823529px 7.58823529px;\n  -moz-transform-origin: 7.58823529px 7.58823529px;\n  -ms-transform-origin: 7.58823529px 7.58823529px;\n  -o-transform-origin: 7.58823529px 7.58823529px;\n  transform-origin: 7.58823529px 7.58823529px;\n  -webkit-animation: pulse ease-in-out 1.2s 0s infinite both;\n  -moz-animation: pulse ease-in-out 1.2s 0s infinite both;\n  -ms-animation: pulse ease-in-out 1.2s 0s infinite both;\n  -o-animation: pulse ease-in-out 1.2s 0s infinite both;\n  animation: pulse ease-in-out 1.2s 0s infinite both;\n}\n#loading-mp-circle-2 {\n  opacity: 0;\n  -webkit-transform-origin: 34.9764706px 7.65882353px;\n  -moz-transform-origin: 34.9764706px 7.65882353px;\n  -ms-transform-origin: 34.9764706px 7.65882353px;\n  -o-transform-origin: 34.9764706px 7.65882353px;\n  transform-origin: 34.9764706px 7.65882353px;\n  -webkit-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  -moz-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  -ms-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  -o-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  animation: pulse ease-in-out 1.2s 0.3s infinite both;\n}\n#loading-mp-circle-3 {\n  opacity: 0;\n  -webkit-transform-origin: 57.5647059px 7.65882353px;\n  -moz-transform-origin: 57.5647059px 7.65882353px;\n  -ms-transform-origin: 57.5647059px 7.65882353px;\n  -o-transform-origin: 57.5647059px 7.65882353px;\n  transform-origin: 57.5647059px 7.65882353px;\n  -webkit-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  -moz-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  -ms-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  -o-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  animation: pulse ease-in-out 1.2s 0.6s infinite both;\n}\n@-moz-keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n@-o-keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n@keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n.mp-select {\n  display: inline-block;\n  width: 200px;\n  height: 40px;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme {\n  display: inline-block;\n  width: 200px;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_button {\n  border: 0;\n  background-color: #fff;\n  background-image: none;\n  text-align: left;\n  height: 40px;\n  line-height: 0.875rem;\n  padding: 13px 15px;\n  border-radius: 4px;\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_button.active .down_arrow_big {\n  -webkit-transform: scaleY(-1);\n  -moz-transform: scaleY(-1);\n  -ms-transform: scaleY(-1);\n  -o-transform: scaleY(-1);\n  transform: scaleY(-1);\n  filter: FlipV;\n  -ms-filter: \"FlipV\";\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_menu {\n  width: 198px;\n  min-width: 198px;\n  text-align: left;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_menu .search_box_container {\n  line-height: normal;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_menu .search_box_container .search_box {\n  padding: 7px 6px;\n  background-image: none;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_menu .options_list .select_option {\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .down_arrow_big {\n  background-image: url(" + __webpack_require__(8) + ");\n  background-size: 10px 7px;\n  top: 16px;\n  right: 15px;\n  width: 10px;\n  height: 7px;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme span {\n  font-size: 0.625rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAMAAAAYGszCAAAAZlBMVEUAAAD////MzP/b29vR0ejIyNvIyNO9ytO9yta9yNPAx9W9ydK/ydO+y9W/ydK9y9e9ydO+ydO+yNTAydO+ydK+x9K+yNK+yNO9yNK9x9K+x9O9x9O9x9K+yNK9yNO9yNK+yNO9x9KMk1gEAAAAIXRSTlMAAwUHCw4XOj5GSVVjZmdsbXWBlqTT4+v09/f4+/v9/v4nta/LAAAAZUlEQVQY033PSQ6AIAwF0DrjPCuCE/e/pCCgQIx/0fy+pIsCfCf0zC3wxez2OX2toTgHiBljNNPW8m0CiIihwtjIS3E+ehtORK20SkPySKllSlfblDqmdUH2WwPXo3af7TdSwl8unYULg/82hvQAAAAASUVORK5CYII="

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(10);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	jade_mixins["meter"] = jade_interp = function(title, meterValue, longTitle){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	var meterId = title.toLowerCase().replace(/ /g, '-').replace(/[\(\)]/g, '');
	var meterValueId = meterId + '-meter-value';
	var meterProgressId = meterId + '-progress';
	buf.push("<div" + (jade.attr("id", meterId, true, true)) + " class=\"container-meter\"><h2 class=\"meter-heading\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h2><div class=\"meter-background\"><div" + (jade.attr("id", meterValueId, true, true)) + " class=\"meter-value\">" + (jade.escape(null == (jade_interp = meterValue) ? "" : jade_interp)) + "</div><svg viewBox=\"0 0 32 32\" class=\"meter-svg\"><circle" + (jade.attr("id", meterProgressId, true, true)) + " cx=\"16\" cy=\"16\" r=\"16\" class=\"meter-progress\"></circle></svg></div></div>");
	};
	jade_mixins["chartHeader"] = jade_interp = function(title){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	buf.push("<div class=\"container-chart-header\"><div class=\"chart-title-shadow\"></div><div class=\"chart-title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div></div>");
	};
	buf.push("<div class=\"container-report clearfix\"><div id=\"pickers\" class=\"container-section\"><div class=\"container-logo-title\"><img id=\"company-logo\"><h1 id=\"report-title\">SAAS DASHBOARD</h1></div><div id=\"-select\"><div id=\"date-picker\"></div></div></div><div id=\"meters\" class=\"container-section\">");
	jade_mixins["meter"]('UNIQUE ORGS', '', true);
	jade_mixins["meter"]('MULTI APP ORGS', '', false);
	jade_mixins["meter"]('NEW ORGS', '', true);
	buf.push("</div><div id=\"columns\" class=\"container-columns clearfix\"><div id=\"column\" class=\"column charts pull-left\"><div id=\"at-risk-users\" class=\"container-section\"><div class=\"container-chart mp-table-container mp-at-risk-users\">");
	jade_mixins["chartHeader"]('RISK ACCOUNTS');
	buf.push("<table class=\"mp-table mp-table-risk\"></table></div></div></div><div id=\"column\" class=\"column charts pull-right\"><div id=\"power-users\" class=\"container-section\"><div class=\"container-chart mp-table-container mp-power-users\">");
	jade_mixins["chartHeader"]('POWER USERS');
	buf.push("<table class=\"mp-table mp-table-usage\"></table></div></div></div></div><div id=\"app-loads\" class=\"container-section\"><div id=\"line-chart\" class=\"container-chart\">");
	jade_mixins["chartHeader"]('App Loads');
	buf.push("<div id=\"line-mp-chart\"></div></div></div></div>");;return buf.join("");
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(11).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAcCAMAAAATKQCVAAAC7lBMVEUAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jtXoAAAA+XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRocHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6Slpqepqqusra6vsLGys7S1tre4ubq7vL2+v8DCw8TFxsfIycrMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f6o2XnJAAAIBElEQVQYGd3BeZwPdB7H8ffvN8dPMwyhDBXRjoTEaC0qZaIc2Y4lFRs/QrVrUTuyE2pW5fgJ6aJxdVGMTKaGydE0hkoalXV0iSHHGDczv9d/+/n+Zub3k8ew2z780z6f+r/la2hq6Cy1Zpi79FvSD9NTZ7kNM0i/JTMxl+gsaZhr9Vtw3dM+OZ8C23W2ZcDRKP0nzdLq6sKo3qeP/gdtn9vOv+TEnQbe0Nn2AGt0fi2e+ooDHl0ANR7IPM5A/XrxpcB8OQm9TXOdpRFmss7LUwx8oAvhSUxz/Xo3YR7RufXG9NZ5NcOM04WwHCjx6td7HNNW5zYZ00jnNQDTTRfCPiBX/y1P0hUy1f1+fz5mqN/vj9ODAwcOTFHIlX+Zn5OfNWdEO2kNsFcmboDfPBAlqfZDc1Z+9OrjzWWi/X5/DuYxv99fW1f7/f7+0s0zV6x6qa1MXN+5udnpjVQuuuMTLy9Z+95Lg6urUsvx81bmvffaY03Uwe8fiVnh9/s7yXhvDmTmLZzQO0ohbfx+f3/pmqmrcm6X02fhqDGLOkldiSjxNsI8J9MymwobFHUUyJIU9xHmaFcpYdopQkpnJUrXEVFWXROBwgYfEjJBumsfzuH+coaUUKEkPUpOlwIqpCiXiDRJd+ygXGE3OfOALzzPlAKdZXpOuX/6P5q+1VJpROSqN+ZuSQ+XUmmsWmHGSnG5mEM3Ss1/JGz7pRpCxJdSLvDhV1ToMZgKp9rILCbiBZn+ZVQ4HOs9RERXRb1GxECZT4H5MzBlNWRW+zKubbU48V0tI2KCpmAuk0YTsn/LYUjWYEw3xeVi9l8vtdqP2bp0SRFmjjKImC1PMSF7d+IUHIede3CyZbYR3J2/cOlOnKZS4nFM0eIFq/Zm6hoigrW8izGH1ry5HnMkUYo5AWTjFMpUz1bG7LdStVYxPl8Ak+Tz+bz6GNgl3VqGWZ4sqdkzHs3C1InLxRS1lGpsBYp6Saq+AjhdM8bnG43p6PP5opSEU9xF6hvE2dZKnlTMAUnxBcMTZTwPBYFR0kjMmzGSPJfK6/MlnAIW+Xy+WI3BvFhT0n2YVCmZcl8vzZsqE7VKr92U49NqmTXAHjnRx4AlitqGeV6VNgHb43IxP/xO0gzgxB/kXI/pLukd4ESsnPswpbfJrMMUN5MpAoKxOkMB8Lw0C9NTYe0xI2SalQIZClkHfCANxdl3qyq9eXVG0+7pt6dLij4KLJXTGpOq+zCbvaoQXwoszcVsayipwQlgmkISMIMk7QQ+UchUzAI5uZgxcnYAe3WmZcAkKYDJ9anS3zAdZN4AimsqZC6wSZqN2dtYYfWzUmLVP7OapNaYJ+QMxXTWMsyfVOkmTCmmsL7ME0Dw8notnE6YodJlmKkKWYvpKGcLcLq+jOck8JlCGqT0GzZq7PgfgEelP+J82kwV3gZOVZN0cSnwXHSLkA+BzdIXmEE6Q8L4V18ZGSMzDNNZzhygLCG6BDjoUaVRVNhcV85a4BMtJKyvdA+mj5yoI8CPcqqdBlbJuQrziqT6k7YS0VVSDs7x4Sr3HbBepjcm+QbCPlFcKbDVqyrNA8pqyNkMFKoxJl9hi4Bdy4Hd8XKOA//Ud4TdKE3GNJTTAjNHTjtMmpx7MX+WBh/jTImS4rMImeuVScTMkJkIlGgEYQvVETNJVfsa2CQnoQzIUDvMAoV9D2S2x4yXqYV5SCcJqy2tAYoUMgAzQM6jmJvlBDBJ6oezbmL/Xre9CBTJ8TxyGCdN5g7M/TILgC81mbBxGo65RVWKLwNmyUnBDNEtmHdVqR5mtFYCR+pLqofpJ1+E5CkBMhUyE9NMzutAaXU5ecB+XfQTsKeXnGXAcpVr/BnmaJykcZgmMguB9Yr2hUXpdaAsXlVqg3lYzmhMa7XAbFalnpgUdcLMlhQVBKbpFy7HjFXIeqDYI2cr8IWcmOPA+7oB00tOgxNAuirULcJcL+ltoETOC8Bxn860BfhSVeuG6SMnEzgWrdijmPaqkA4EE6Q1QFlLSZuAbRfpTMmYR+XEnABWyKmDeVVOMiZNAzC15czH3KlKizC/l7Qa+E7OIMzdOkPNIJChqvXEvCTJo93AWknvYHa2luTtdLVygK8kdcV8IOkpzKJacrwpw2XaYRZJ8igZ87ScbpiBch7GdNFdmB6SoifjXKEeqQky9XYCZXUkfQycvkryqMFp4GB7hVzx+JVSCmaYqnYlTn5mYYfLMVMktSnD2bF07V7aeQ4Cc2UKMF2k2gcwh9+YMHpm1m7mytQIYj5b8nkvDcH0kDMO01zOPCBYU40xxxaPmb+Nk8DP0lwOLRqXOmsfJkvmZczBzJVZ0gycj6elPvvWhiAJUiqmrarm2UrIqWr3YHrLpBJWJwkzTKYHZqNX6nqSiL/LyadcomZjLpGTDRzyyvkG2CwpmwqnRwErpZ8IO9BY5h7KTZLi84nYKekd4ESszqH1MZz1moRpKOeRY5Q7qH6YZDmfYwZIav8NYT3lNDmI8620EdiukP3ASjkXB4HZkuptJeRA93uB55VEWF5Thcwh5G5JNV4JUmmFpO+BAp1Tg8kb9uxb96AGBwKBZ1Uu8cm8XUd+2jilg7oHAoEpMXJuDJiRMt4eszYWHfk27/UhSSpX96mCXQc2/FWaGAgE/HISAuZOOY0CppNM7IjVuw9tSm+grtOnT79FajIqp3Bv8TerJjVXBU+P97cc2rHkUjmNx+V8X/LzxuVPd64mxQZMX1Xp3wwdleeACOpnAAAAAElFTkSuQmCC"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Promise, addRiskRow, addRiskTableHeader, addUsageRow, addUsageTableHeader, animations, appPickerHandler, appTypePickerHandler, capitalizeString, clearUserTable, constants, datePickerHandler, drawAxisBackgrounds, getAppLoadTrends, getAppOrgs, getFromMoment, getNewOrgs, getOrgs, getResults, getRisk, getToMoment, getUsage, globals, hideAppLoadRate, hideLoadingScreen, initAppPicker, initAppTypePicker, initDatePicker, initLoadingScreen, killLastGridline, processAppLoadData, processNumericData, processRiskData, processUserData, setFromMoment, setReportTitle, setSelector, setToMoment, showAppLoadRate, showLoadingScreen, showLoadingSymbol, showProgress, showRiskTable, showUsageTable, sum, track, trackOnce;

	Promise = __webpack_require__(14).Promise;

	animations = __webpack_require__(19);

	globals = {
	  fromMoment: moment(),
	  toMoment: moment(),
	  $selector: null,
	  app: 'All',
	  type: 'Total'
	};

	getFromMoment = function() {
	  return globals.fromMoment;
	};

	setFromMoment = function(fromMoment) {
	  globals.fromMoment = fromMoment;
	};

	getToMoment = function() {
	  return globals.toMoment;
	};

	setToMoment = function(toMoment) {
	  globals.toMoment = toMoment;
	};

	track = function() {
	  mixpanel.dm.track('Dashboard View', {
	    'Industry Vertical': 'TicketMaster Dash'
	  });
	  mixpanel.dm.identify();
	};

	trackOnce = _.once(track);

	_.mixin({
	  groupByKey: function(obj) {
	    var keys;
	    if (obj != null) {
	      obj = _.isArray(obj) ? obj : _.toArray(obj);
	      keys = _.keys(obj[0]);
	      return _.object(keys, _.map(keys, _.partial(_.pluck, obj)));
	    }
	    return null;
	  }
	});

	_.mixin({
	  sumByKey: function(obj) {
	    var keys;
	    if (obj != null) {
	      obj = _.isArray(obj) ? obj : _.toArray(obj);
	      keys = _.keys(obj[0]);
	      return _.object(keys, _.map(_.groupByKey(obj), _.partial(_.reduce, _, sum, 0)));
	    }
	    return null;
	  }
	});

	sum = function(memo, num) {
	  return memo + num;
	};

	capitalizeString = function(str) {
	  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
	};

	String.prototype.toCapitalized = function() {
	  return this.replace(/\w\S*/g, capitalizeString);
	};

	constants = {
	  TRILLION: 1e12,
	  BILLION: 1e9,
	  MILLION: 1e6,
	  THOUSAND: 1e3,
	  HUNDRED: 100
	};

	Number.prototype.condensedValue = function() {
	  var formatHelper, isDecimal, value;
	  formatHelper = function(value) {
	    var isDecimal, result;
	    isDecimal = value % 1 !== 0;
	    return result = isDecimal && value < 100 ? value.toFixed(1) : Math.floor(value);
	  };
	  value = this.valueOf();
	  isDecimal = value % 1 !== 0;
	  switch (false) {
	    case !(value >= constants.TRILLION):
	      return (formatHelper(value / constants.TRILLION)) + 'T';
	    case !(value >= constants.BILLION):
	      return (formatHelper(value / constants.BILLION)) + 'B';
	    case !(value >= constants.MILLION):
	      return (formatHelper(value / constants.MILLION)) + 'M';
	    case !(value >= constants.THOUSAND):
	      return (formatHelper(value / constants.THOUSAND)) + 'K';
	    case !(value >= constants.HUNDRED):
	      return formatHelper(value);
	    case !(value < constants.HUNDRED && isDecimal):
	      return '$' + this.toFixed(2);
	    default:
	      return this;
	  }
	};

	setReportTitle = function() {
	  var $reportTitle, fromString, toString;
	  $reportTitle = $('#report-title');
	  fromString = globals.fromMoment.format('YYYY-MM-DD');
	  toString = globals.toMoment.format('YYYY-MM-DD');
	  $reportTitle.text('Executive Dash for ' + fromString + '-' + toString);
	};

	initLoadingScreen = function() {
	  var $containerReport, loadingSymbol;
	  loadingSymbol = __webpack_require__(43);
	  $containerReport = $('.container-report');
	  $containerReport.append(loadingSymbol);
	};

	showLoadingScreen = function() {
	  var $containerReport, $loadingSymbol;
	  $containerReport = $('.container-report');
	  $loadingSymbol = $('#loading-symbol');
	  if (!$containerReport.hasClass('loading')) {
	    $('#pickers').addClass('hidden');
	    $('#meters').addClass('hidden');
	    $('#columns').addClass('hidden');
	    $('#app-loads').addClass('hidden');
	    $loadingSymbol.removeAttr('class');
	    $containerReport.addClass('loading');
	  }
	};

	showLoadingSymbol = function() {
	  var $containerReport, $loadingSymbol;
	  $containerReport = $('.container-report');
	  $loadingSymbol = $('#loading-symbol');
	  if (!$containerReport.hasClass('loading')) {
	    $loadingSymbol.removeAttr('class');
	    $containerReport.addClass('loading');
	  }
	};

	hideLoadingScreen = function() {
	  var $containerReport, $loadingSymbol;
	  $containerReport = $('.container-report');
	  $loadingSymbol = $('#loading-symbol');
	  if ($containerReport.hasClass('loading')) {
	    $('#pickers').removeClass('hidden');
	    $('#meters').removeClass('hidden');
	    $('#columns').removeClass('hidden');
	    $('#app-loads').removeClass('hidden');
	    $loadingSymbol.attr('class', 'hidden');
	    $containerReport.removeClass('loading');
	  }
	};

	addRiskTableHeader = function() {
	  var $header, $table;
	  $table = $('.mp-table-risk');
	  $header = null;
	  $header = $('<tr class="mp-table-header mp-table-2-col"><th class="mp-table-header-item name">LAST USE DATE RANGE</th><th class="mp-table-header-item count">COUNT</th></tr>');
	  $table.html($header);
	};

	addUsageTableHeader = function() {
	  var $header, $table;
	  $table = $('.mp-table-usage');
	  $header = null;
	  $header = $('<tr class="mp-table-header mp-table-3-col"><th class="mp-table-header-item csm">CSM</th><th class="mp-table-header-item company">CLIENT</th><th class="mp-table-header-item count">APP COUNT</th></tr>');
	  $table.html($header);
	};

	addUsageRow = function(csm, company, count, account) {
	  var $row, $table;
	  $table = $('.mp-table-usage');
	  $row = null;
	  $row = $('<tr class="mp-table-row mp-table-3-col"><td class="mp-table-row-item csm">' + csm + '</td><td class="mp-table-row-item company"><a href="http://salesforce.com/' + account + '">' + company + '</a>' + '</td><td class="mp-table-row-item count">' + count + '</td></tr>');
	  $table.append($row);
	};

	addRiskRow = function(bucket, count) {
	  var $row, $table;
	  $table = $('.mp-table-risk');
	  $row = null;
	  $row = $('<tr class="mp-table-row mp-table-2-col"><td class="mp-table-row-item bucket">' + bucket + '</td><td class="mp-table-row-item count">' + count + '</td></tr>');
	  $table.append($row);
	};

	clearUserTable = function(userType) {
	  var userTable;
	  userTable = '#' + userType + '-users-table';
	  $(userTable).empty();
	};

	setSelector = function(options) {
	  globals.$selector = $('#select').MPSelect(options);
	  globals.$selector.on('change', function(event, selection) {
	    var from, to;
	    from = moment().subtract(29, 'days');
	    to = moment();
	    showLoadingSymbol();
	    return getResults(from, to);
	  });
	};

	drawAxisBackgrounds = function(topOffset) {
	  var chartOptions, cornerRadius, yAxis, yHeight, yWidth;
	  chartOptions = this.options.chart;
	  cornerRadius = 0;
	  yWidth = this.chartWidth - this.plotWidth - (chartOptions.spacingLeft || (chartOptions.spacing && chartOptions.spacing[3]) || 0);
	  yHeight = this.plotHeight + (chartOptions.spacingTop || (chartOptions.spacing && chartOptions.spacing[0]) || 0);
	  this.renderer.rect(0, this.plotTop + topOffset, this.chartWidth, this.plotHeight - topOffset, cornerRadius).attr({
	    'stroke-width': 0,
	    'fill': 'white',
	    'zIndex': 0
	  }).add();
	  this.renderer.rect(1, this.plotTop + topOffset + 1, yWidth - 10, this.plotHeight - 1 - topOffset, cornerRadius).attr({
	    'stroke-width': 0,
	    'fill': '#FBFCFD',
	    'zIndex': 0
	  }).add();
	  yAxis = this.renderer.crispLine(['M', yWidth - 10, this.plotTop, 'L', yWidth - 10, this.plotHeight + this.plotTop], 1);
	  (_.bind(killLastGridline, this))();
	};

	killLastGridline = function() {
	  var gridlines, line;
	  gridlines = $('.highcharts-grid path', this.container).show();
	  line = _.chain(gridlines).map(function(gridline) {
	    var $gridline;
	    $gridline = $(gridline);
	    return [$gridline, $gridline.offset().top];
	  }).sortBy(function(gridline) {
	    return gridline[1];
	  }).last().value();
	  if (line != null) {
	    line[0].hide();
	  }
	};

	getOrgs = function(from, to) {
	  var fromString, params, script, toString;
	  script = "function main() {return join(People(),Events({from_date: params.from,to_date: params.to,event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user).groupBy(['user.properties.salesforceOrgId'], state => 1).reduce(mixpanel.reducer.count())}";
	  fromString = from.format('YYYY-MM-DD');
	  toString = to.format('YYYY-MM-DD');
	  params = {
	    from: fromString,
	    to: toString
	  };
	  return Promise.resolve(MP.api.jql(script, params));
	};

	getAppOrgs = function(from, to) {
	  var fromString, params, script, toString;
	  script = "function main() {return join(People(),Events({from_date: params.from,to_date: params.to,event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user && tuple.user.properties.salesforceOrgId).groupBy(['event.properties.App', 'user.properties.salesforceOrgId'], state => 1).groupBy(['key.1'], mixpanel.reducer.count()).filter(item => item.value >= 2).reduce(mixpanel.reducer.count())}";
	  fromString = from.format('YYYY-MM-DD');
	  toString = to.format('YYYY-MM-DD');
	  params = {
	    from: fromString,
	    to: toString
	  };
	  return Promise.resolve(MP.api.jql(script, params));
	};

	getNewOrgs = function(from, to) {
	  var fromString, params, script, toString;
	  script = "function main() {return join(People(),Events({from_date: '2015-01-01',to_date: params.to, event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user && tuple.user.properties.salesforceOrgId).groupBy(['user.properties.salesforceOrgId'], (accs, tuples) => {var res; _.each(tuples, tuple => {if (!res || res > tuple.event.time){res = tuple.event.time}});_.each(accs, acc => {if (!res || res > acc){res = acc}});return res}).map(item => item.value).filter(item => item > new Date(params.from)).reduce(mixpanel.reducer.count())}";
	  fromString = from.format('YYYY-MM-DD');
	  toString = to.format('YYYY-MM-DD');
	  params = {
	    from: fromString,
	    to: toString
	  };
	  return Promise.resolve(MP.api.jql(script, params));
	};

	getUsage = function(from, to) {
	  var fromString, params, script, toString;
	  script = "function main() {return join(People(),Events({from_date: params.from,to_date: params.to,event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user && tuple.user.properties.salesforceOrgId).groupBy(['event.properties.App', 'user.properties.salesforceOrgId', 'user.properties.CSM', 'user.properties.Org'], _ => 1).groupBy(['key.1', 'key.2', 'key.3' ], mixpanel.reducer.count()).filter(item => item.key[0] != 'NO_salesforceOrgId' && item.key[1] != 'NO_CSM' && item.key[2] != 'unavailable' ).reduce(mixpanel.reducer.top(5))}";
	  fromString = from.format('YYYY-MM-DD');
	  toString = to.format('YYYY-MM-DD');
	  params = {
	    from: fromString,
	    to: toString
	  };
	  return Promise.resolve(MP.api.jql(script, params));
	};

	getRisk = (function(_this) {
	  return function() {
	    var script;
	    script = "function main() {return People().filter(user => user.properties.salesforceOrgId).groupBy(['properties.salesforceOrgId'], (accs, items) => {var res; _.each(items, item => {var daysAgo = (new Date().getTime() - new Date(item.properties.$last_login).getTime()) / 86400000;daysAgo = daysAgo > 90? 90 : daysAgo;if (!res || res > daysAgo ){ res = daysAgo }});_.each(accs, acc => {if (!res || res > acc){res = acc}});return res}).map(item => ({time: item.value})).groupBy([mixpanel.numeric_bucket('time', {offset: 0, bucket_size:30})], mixpanel.reducer.count()).filter(item => item.key[0] >= 0).reduce((accs, items) =>{ var res = {}; _.each(items, item => res[item.key] = item.value); _.each(accs, acc => res = acc); return res}).map(item => {var res  = {};_.each(item, (val, bucket) => {res[buckets[bucket]] = val});return res});};var buckets = { '0': '0-30', '30' : '31-60', '60' : '61-90', '90' : '90+' }";
	    return Promise.resolve(MP.api.jql(script));
	  };
	})(this);

	getAppLoadTrends = function(from, to, type, app) {
	  var fromString, params, script, toString;
	  switch (type) {
	    case 'Total':
	      script = "function main() {return Events({from_date: params.from,to_date:   params.to,event_selectors: [{event: 'To: App Load'}]}).filter(item => params.app === 'All' || params.app == item.properties.App).groupBy([getDay], mixpanel.reducer.count());}function getDay(event) {return new Date(event.time).toISOString().substr(0, 10);}";
	      break;
	    case 'Users':
	      script = "function main() {return Events({from_date: params.from,to_date:   params.to,event_selectors: [{event: 'To: App Load'}]}).filter(item => params.app === 'All' || params.app == item.properties.App).groupByUser([getDay], _ => 1).groupBy(['key.1'], mixpanel.reducer.count());}function getDay(event) {return new Date(event.time).toISOString().substr(0, 10);}";
	      break;
	    case 'Orgs':
	      script = "function main() {return Events({from_date: params.from,to_date:   params.to,event_selectors: [{event: 'To: App Load'}]}).filter(item => (params.app === 'All' || params.app == item.properties.App) && item.properties.Org).groupBy([getDay, 'properties.Org'], _ => 1).groupBy(['key.0'], mixpanel.reducer.count());}function getDay(event) {return new Date(event.time).toISOString().substr(0, 10);}";
	      break;
	    default:
	      console.log('App Load Error');
	  }
	  fromString = from.format('YYYY-MM-DD');
	  toString = to.format('YYYY-MM-DD');
	  params = {
	    from: fromString,
	    to: toString,
	    app: app
	  };
	  return Promise.resolve(MP.api.jql(script, params));
	};

	processNumericData = function(results) {
	  return results;
	};

	processUserData = function(results) {
	  return _.chain(results).map(function(obj) {
	    return {
	      csm: obj.key[1],
	      company: obj.key[2],
	      count: obj.value,
	      account: obj.key[0]
	    };
	  }).value();
	};

	processRiskData = function(results) {
	  return results[0];
	};

	processAppLoadData = function(results) {
	  var res;
	  res = {};
	  _.each(results, function(obj) {
	    return res[obj.key[0]] = obj.value;
	  });
	  return res;
	};

	showProgress = function(meterName, meterValue, delayValue, meterPercentage) {
	  var animation, animationName;
	  if (delayValue == null) {
	    delayValue = 0;
	  }
	  if (meterPercentage == null) {
	    meterPercentage = meterValue;
	  }
	  animationName = meterName + '-value';
	  animation = {
	    name: animationName,
	    animation: {
	      '0%': {
	        'stroke-dasharray': '0 100'
	      },
	      '100%': {
	        'stroke-dasharray': meterPercentage + ' 100'
	      }
	    },
	    presets: {
	      duration: 1000,
	      delay: delayValue,
	      easing: 'ease-out',
	      fillMode: 'forwards'
	    }
	  };
	  $('#' + meterName + '-meter-value').text(meterValue);
	  animations.registerAnimation(animation);
	  animations.runAnimation($('#' + meterName + '-progress'), animationName);
	};

	showRiskTable = function(buckets) {
	  addRiskTableHeader();
	  _.each(buckets, function(val, bucket) {
	    return addRiskRow(bucket, val);
	  });
	};

	showUsageTable = function(users) {
	  var i, len, user;
	  addUsageTableHeader();
	  for (i = 0, len = users.length; i < len; i++) {
	    user = users[i];
	    addUsageRow(user.csm, user.company, user.count, user.account);
	  }
	};

	showAppLoadRate = function(data) {
	  var $appLoad, $lineChart, $lineChartHeader, axisFontStyle, options;
	  axisFontStyle = {
	    fontSize: '0.75em',
	    fontWeight: 'bold',
	    fontFamily: 'Open Sans'
	  };
	  options = {
	    chart: {
	      marginBottom: 30
	    },
	    xAxis: {
	      labels: {
	        style: axisFontStyle
	      },
	      tickLength: 6
	    },
	    yAxis: {
	      gridLineColor: '#E6E8EB',
	      gridLineDashStyle: 'Dash',
	      gridLineWidth: 1,
	      labels: {
	        style: axisFontStyle
	      }
	    }
	  };
	  $lineChart = $('#line-mp-chart').MPChart({
	    chartType: 'line'
	  }, {
	    highchartsOptions: options
	  });
	  $lineChart.MPChart('setData', {
	    'App Load': data
	  });
	  $appLoad = $('#app-loads');
	  if (!!$appLoad.hasClass('hidden')) {
	    $appLoad.removeClass('hidden');
	  }
	  $('.mixpanel-platform-multi_selector').addClass('hidden');
	  $lineChartHeader = $('#line-chart .mixpanel-platform-chart_header');
	  if (!$lineChartHeader.hasClass('hidden')) {
	    $lineChartHeader.addClass('hidden');
	  }
	};

	hideAppLoadRate = function() {
	  var $appLoad;
	  $appLoad = $('#app-loads');
	  if (!$monthlyChurn.hasClass('hidden')) {
	    $appLoad.addClass('hidden');
	  }
	};

	initDatePicker = function() {
	  var $datePicker, $datePickerEl;
	  $datePicker = $('#date-picker').MPDatepicker();
	  $datePicker.val({
	    from: getFromMoment().toDate(),
	    to: getToMoment().toDate()
	  });
	  $datePickerEl = $datePicker.find('.mixpanel-platform-date_picker');
	  $datePickerEl.addClass('mp-date-picker');
	};

	datePickerHandler = function() {
	  $('#date-picker').on('change', function(e, dateRange) {
	    var fromMoment, toMoment;
	    setReportTitle();
	    fromMoment = moment(dateRange.from);
	    toMoment = moment(dateRange.to);
	    if (!getFromMoment().isSame(fromMoment) || !getToMoment().isSame(toMoment)) {
	      setFromMoment(fromMoment);
	      setToMoment(toMoment);
	      showLoadingScreen();
	      getResults(getFromMoment(), getToMoment());
	    }
	  });
	};

	initAppPicker = function() {};

	appPickerHandler = function() {};

	initAppTypePicker = function() {};

	appTypePickerHandler = function() {};

	getResults = function(from, to) {
	  return Promise.all([getOrgs(from, to), getAppOrgs(from, to), getNewOrgs(from, to), getUsage(from, to), getRisk(), getAppLoadTrends(from, to, globals.type, globals.app)]).then(function(resultsArray) {
	    var appLoads, appLoadsResults, appOrgs, appOrgsGoal, appOrgsResults, atRiskUsers, mau, mauGoal, mauResults, newOrgs, newOrgsGoal, newOrgsResults, powerUsers, riskResults, usageResults;
	    mauGoal = 15000;
	    appOrgsGoal = 500;
	    newOrgsGoal = 100;
	    mauResults = resultsArray[0][0];
	    appOrgsResults = resultsArray[1][0];
	    newOrgsResults = resultsArray[2][0];
	    usageResults = resultsArray[3][0];
	    riskResults = resultsArray[4];
	    appLoadsResults = resultsArray[5];
	    mau = processNumericData(mauResults);
	    appOrgs = processNumericData(appOrgsResults);
	    newOrgs = processNumericData(newOrgsResults);
	    powerUsers = processUserData(usageResults);
	    atRiskUsers = processRiskData(riskResults);
	    appLoads = processAppLoadData(appLoadsResults);
	    hideLoadingScreen();
	    setReportTitle();
	    debugger;
	    showProgress('unique-orgs', mau.condensedValue(), 0, Math.min(Math.floor(mau / mauGoal * 100, 100)));
	    showProgress('multi-app-orgs', appOrgs.condensedValue(), 250, Math.min(Math.floor(appOrgs / appOrgsGoal * 100, 100)));
	    showProgress('new-orgs', newOrgs.condensedValue(), 500, Math.min(Math.floor(newOrgs / newOrgsGoal * 100, 100)));
	    showUsageTable(powerUsers);
	    showRiskTable(atRiskUsers);
	    showAppLoadRate(appLoads);
	    trackOnce();
	  })["catch"](function(error) {
	    console.log('Failed with following error:', error);
	  });
	};

	globals.fromMoment = moment().subtract(29, 'days');

	globals.toMoment = moment();

	initLoadingScreen();

	showLoadingScreen();

	initDatePicker();

	datePickerHandler();

	initAppPicker();

	appPickerHandler();

	initAppTypePicker();

	appTypePickerHandler();

	getResults(globals.fromMoment, globals.toMoment);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */

	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }

	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }

	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }

	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }

	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$toString = {}.toString;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;

	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }

	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }

	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }

	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';

	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }

	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }

	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });

	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }

	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }

	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }

	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];

	        callback(arg);

	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }

	      lib$es6$promise$asap$$len = 0;
	    }

	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(17);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }

	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }

	    function lib$es6$promise$$internal$$noop() {}

	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;

	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }

	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }

	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }

	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;

	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));

	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }

	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }

	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
	      if (maybeThenable.constructor === promise.constructor) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }

	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }

	      lib$es6$promise$$internal$$publish(promise);
	    }

	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;

	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }

	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;

	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }

	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;

	      parent._onerror = null;

	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }

	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;

	      if (subscribers.length === 0) { return; }

	      var child, callback, detail = promise._result;

	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];

	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }

	      promise._subscribers.length = 0;
	    }

	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }

	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;

	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }

	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }

	      } else {
	        value = detail;
	        succeeded = true;
	      }

	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }

	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      var enumerator = this;

	      enumerator._instanceConstructor = Constructor;
	      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (enumerator._validateInput(input)) {
	        enumerator._input     = input;
	        enumerator.length     = input.length;
	        enumerator._remaining = input.length;

	        enumerator._init();

	        if (enumerator.length === 0) {
	          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	        } else {
	          enumerator.length = enumerator.length || 0;
	          enumerator._enumerate();
	          if (enumerator._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
	      }
	    }

	    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
	      return lib$es6$promise$utils$$isArray(input);
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
	      this._result = new Array(this.length);
	    };

	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var enumerator = this;

	      var length  = enumerator.length;
	      var promise = enumerator.promise;
	      var input   = enumerator._input;

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        enumerator._eachEntry(input[i], i);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var enumerator = this;
	      var c = enumerator._instanceConstructor;

	      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
	        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
	          entry._onerror = null;
	          enumerator._settledAt(entry._state, i, entry._result);
	        } else {
	          enumerator._willSettleAt(c.resolve(entry), i);
	        }
	      } else {
	        enumerator._remaining--;
	        enumerator._result[i] = entry;
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var enumerator = this;
	      var promise = enumerator.promise;

	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        enumerator._remaining--;

	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          enumerator._result[i] = value;
	        }
	      }

	      if (enumerator._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;

	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }

	      var length = entries.length;

	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }

	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }

	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

	    var lib$es6$promise$promise$$counter = 0;

	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }

	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }

	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.

	      Terminology
	      -----------

	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.

	      A promise can be in one of three states: pending, fulfilled, or rejected.

	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.

	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.


	      Basic Usage:
	      ------------

	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);

	        // on failure
	        reject(reason);
	      });

	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Advanced Usage:
	      ---------------

	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.

	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();

	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();

	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }

	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Unlike callbacks, promises are great composable primitives.

	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON

	        return values;
	      });
	      ```

	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];

	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        if (!lib$es6$promise$utils$$isFunction(resolver)) {
	          lib$es6$promise$promise$$needsResolver();
	        }

	        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
	          lib$es6$promise$promise$$needsNew();
	        }

	        lib$es6$promise$$internal$$initializePromise(this, resolver);
	      }
	    }

	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.

	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```

	      Chaining
	      --------

	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.

	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });

	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```

	      Assimilation
	      ------------

	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```

	      If the assimliated promise rejects, then the downstream promise will also reject.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```

	      Simple Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var result;

	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```

	      Advanced Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var author, books;

	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js

	      function foundBooks(books) {

	      }

	      function failure(reason) {

	      }

	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: function(onFulfillment, onRejection) {
	        var parent = this;
	        var state = parent._state;

	        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	          return this;
	        }

	        var child = new this.constructor(lib$es6$promise$$internal$$noop);
	        var result = parent._result;

	        if (state) {
	          var callback = arguments[state - 1];
	          lib$es6$promise$asap$$asap(function(){
	            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	          });
	        } else {
	          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	        }

	        return child;
	      },

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.

	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }

	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }

	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;

	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }

	      var P = local.Promise;

	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }

	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };

	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(18)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }

	    lib$es6$promise$polyfill$$default();
	}).call(this);


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), (function() { return this; }()), __webpack_require__(16)(module)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*global getComputedStyle */
	var defaults = __webpack_require__(20)
	var prefixedEvent = __webpack_require__(32)
	var loadStyles = __webpack_require__(33)
	var createAnimation = __webpack_require__(34)
	var animationProperty = __webpack_require__(39)
	var promisify = __webpack_require__(40)
	var addUnit = __webpack_require__(37)

	// make portions of this server testable
	if (typeof window !== 'undefined') {
	  var transformProperty = __webpack_require__(42)
	}

	// our storage for registered animations
	var registeredAnimations = {}

	var mainDefaults = {
	  duration: 1000,
	  fillMode: 'both',
	  easing: 'ease',
	  iterations: 1,
	  delay: 0,
	  direction: 'normal',
	  resetWhenDone: false,
	  clearTransformsBeforeStart: false
	}

	exports.hasAnimation = function (name) {
	  return registeredAnimations.hasOwnProperty(name)
	}

	function setAnimationProp (els, val, opts) {
	  var clearTransforms = (opts && opts.clearTransforms === true)
	  // we got a collection, potentially
	  for (var i = 0, l = els.length; i < l; i++) {
	    // we do both because... chrome does both
	    if (clearTransforms) {
	      clearTransformProp(els[i])
	    }
	    els[i].style[animationProperty] = val
	  }
	}

	function clearTransformProp (el) {
	  el.style.transform = ''
	  el.style[transformProperty] = ''
	}

	function clearAnimationProp (el) {
	  el.style[animationProperty] = ''
	  el.style.animation = ''
	}

	function setAnimationAsTransform (els, opts) {
	  var clearAnimations = (opts && opts.clearAnimations === true)
	  // we got a collection, potentially
	  for (var i = 0, l = els.length; i < l; i++) {
	    els[i].style[transformProperty] = getComputedStyle(els[i])[transformProperty]
	    if (clearAnimations) clearAnimationProp(els[i])
	  }
	}

	exports.runAnimation = promisify(function (els, opts, cb) {
	  cb || (cb = function () {})
	  if (typeof opts === 'string') {
	    opts = {
	      name: opts
	    }
	  }

	  if (!els.length) {
	    els = [els]
	  }

	  if (!opts.name) {
	    return cb(Error('must supply animation name'))
	  }

	  var found = registeredAnimations[opts.name]

	  if (!found) {
	    return cb(Error('no animation named "' + opts.name + '" exists'))
	  }

	  opts = defaults(opts, found.presets, mainDefaults)

	  var animationEnd = function () {
	    prefixedEvent.remove(els[0], 'AnimationEnd', animationEnd)
	    if (opts.resetWhenDone) {
	      setAnimationAsTransform(els, {clearAnimations: true})
	    }
	    return cb(null, els)
	  }

	  prefixedEvent.add(els[0], 'AnimationEnd', animationEnd)

	  var styles = [
	    opts.name,
	    addUnit(opts.duration, 'ms'),
	    opts.easing,
	    opts.iterations,
	    addUnit(opts.delay, 'ms'),
	    opts.direction,
	    opts.fillMode
	  ]

	  setAnimationProp(els, styles.join(' '), {clearTransforms: opts.clearTransformsBeforeStart})
	})

	exports.unregisterAnimation = function (name) {
	  if (exports.hasAnimation(name)) {
	    var styleEl = registeredAnimations[name].el
	    styleEl.parentNode.removeChild(styleEl)
	    delete registeredAnimations[name]
	  }
	}

	exports.getAnimationCSS = createAnimation

	exports.registerAnimation = function (opts) {
	  exports.unregisterAnimation(opts.name)
	  var el = loadStyles(exports.getAnimationCSS(opts.name, opts.animation))
	  el.setAttribute('data-name', opts.name)

	  registeredAnimations[opts.name] = {
	    el: el,
	    presets: opts.presets || {}
	  }
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var assign = __webpack_require__(21),
	    restParam = __webpack_require__(31);

	/**
	 * Used by `_.defaults` to customize its `_.assign` use.
	 *
	 * @private
	 * @param {*} objectValue The destination object property value.
	 * @param {*} sourceValue The source object property value.
	 * @returns {*} Returns the value to assign to the destination object.
	 */
	function assignDefaults(objectValue, sourceValue) {
	  return objectValue === undefined ? sourceValue : objectValue;
	}

	/**
	 * Creates a `_.defaults` or `_.defaultsDeep` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Function} Returns the new defaults function.
	 */
	function createDefaults(assigner, customizer) {
	  return restParam(function(args) {
	    var object = args[0];
	    if (object == null) {
	      return object;
	    }
	    args.push(customizer);
	    return assigner.apply(undefined, args);
	  });
	}

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object for all destination properties that resolve to `undefined`. Once a
	 * property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var defaults = createDefaults(assign, assignDefaults);

	module.exports = defaults;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseAssign = __webpack_require__(22),
	    createAssigner = __webpack_require__(28),
	    keys = __webpack_require__(24);

	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;

	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);

	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it is invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});

	module.exports = assign;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(23),
	    keys = __webpack_require__(24);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(25),
	    isArguments = __webpack_require__(26),
	    isArray = __webpack_require__(27);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.6 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(29),
	    isIterateeCall = __webpack_require__(30),
	    restParam = __webpack_require__(31);

	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = bindCallback;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isIterateeCall;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = (function(){
	'use strict';

	var pfx = ["webkit", "moz", "MS", "o", ""];
	function assert(pred,msg){
	    if(!pred) {
	        throw new Error(msg)
	    }

	}

	function noop(){}
	return {
	    add: function(element, type, callback) {
	        callback = (callback || noop);
	        assert(element,'element is required')
	        assert(type,'type is required')

	        for (var p = 0; p < pfx.length; p++) {
	            if (!pfx[p]) {
	                type = type.toLowerCase();
	            }
	            element.addEventListener(pfx[p]+type, callback, false);
	        }
	    }
	    ,remove: function(element,type,callback){
	        callback = (callback || noop);
	        assert(element,'element is required')
	        assert(type,'type is required')
	        for (var p = 0; p < pfx.length; p++) {
	            if (!pfx[p]) {
	                type = type.toLowerCase();
	            }
	            element.removeEventListener(pfx[p]+type, callback, false);
	        }
	    }

	}

	})();



/***/ },
/* 33 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */

	module.exports = loadStyles;

	/**
	 * Injects the CSS into the <head> DOM node.
	 *
	 * @param {String} css CSS string to add to the <style> tag.
	 * @param {Document} doc document instance to use.
	 */

	function loadStyles(css, doc) {
	  // default to the global `document` object
	  if (!doc) doc = document;

	  var head = doc.head || doc.getElementsByTagName('head')[0];

	  // no <head> node? create one...
	  if (!head) {
	    head = doc.createElement('head');
	    var body = doc.body || doc.getElementsByTagName('body')[0];
	    if (body) {
	      body.parentNode.insertBefore(head, body);
	    } else {
	      doc.documentElement.appendChild(head);
	    }
	  }

	  var style = doc.createElement('style');
	  style.type = 'text/css';
	  if (style.styleSheet) {  // IE
	    style.styleSheet.cssText = css;
	  } else {                 // the world
	    style.appendChild(doc.createTextNode(css));
	  }
	  head.appendChild(style);

	  return style;
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var getStyles = __webpack_require__(35)
	var prefix = __webpack_require__(38)

	function getLine (percentage, styles) {
	  if (typeof percentage === 'number') {
	    percentage += '%'
	  } else if (typeof percentage === 'string' && percentage.indexOf('%') === -1) {
	    percentage += '%'
	  }
	  return percentage + '{' + getStyles(styles) + '}'
	}

	module.exports = function (name, positions) {
	  var buf = '@' + prefix + 'keyframes ' + name + '{'

	  // we got an array of arrays
	  if (Array.isArray(positions)) {
	    buf += positions.map(function (pos, index) {
	      var percentage

	      if (index) {
	        percentage = (index / (positions.length - 1)) * 100
	      } else {
	        percentage = 0
	      }

	      return getLine(percentage, pos)
	    }).join('')
	  } else {
	    for (var key in positions) {
	      buf += getLine(key, positions[key])
	    }
	  }

	  buf += '}'

	  return buf
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var createCssTranslateString = __webpack_require__(36)
	var prefix = __webpack_require__(38)
	var addUnit = __webpack_require__(37)

	var lookups = {
	  scale: function (val) {
	    return 'scale(' + val + ')'
	  },
	  rotate: function (val) {
	    return 'rotate(' + addUnit(val, 'deg') + ')'
	  },
	  translate: function (val) {
	    return createCssTranslateString(val)
	  },
	  transform: function (val) {
	    return val
	  }
	}

	module.exports = function getStyles (obj) {
	  // array of values is assumed to be [x,y,(z)]
	  if (Array.isArray(obj)) {
	    return prefix + 'transform:' + createCssTranslateString(obj)
	  }

	  var transformBuff = []
	  var otherStyles = []

	  // object assumes
	  if (typeof obj === 'object') {
	    for (var key in obj) {
	      if (lookups[key]) {
	        transformBuff.push(lookups[key](obj[key]))
	      } else {
	        otherStyles.push(key + ':' + obj[key])
	      }
	    }
	  }

	  otherStyles.push(prefix + 'transform:' + transformBuff.join(''))

	  return otherStyles.join(';')
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var addUnit = __webpack_require__(37)

	function getValueForProperty (val, prop) {
	  if (val.hasOwnProperty(prop)) {
	    return val[prop]
	  }
	  return 0
	}

	module.exports = function createCssTranslateString (val) {
	  var res = []

	  // array of values is assumed to be [x,y,(z)]
	  if (Array.isArray(val)) {
	    if (val.length === 2) {
	      res = res.concat(val, 0)
	    } else {
	      res = val
	    }
	  } else {
	    res.push(getValueForProperty(val, 'x'))
	    res.push(getValueForProperty(val, 'y'))
	    res.push(getValueForProperty(val, 'z'))
	  }

	  res = res.map(function (val) {
	    return addUnit(val, 'px')
	  })

	  return 'translate3d(' + res.join(',') + ')'
	}


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function addUnit (item, unit) {
	  if (typeof item === 'string') {
	    return item
	  }
	  return item + unit
	}


/***/ },
/* 38 */
/***/ function(module, exports) {

	var prefix = ''

	// figure out if we need -webkit- prefix or not
	if (typeof document !== 'undefined') {
	  var el = document.documentElement || document.createElement('div')
	  prefix = (el.style.animation != null) ? '' : '-webkit-'
	}

	module.exports = prefix


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var prefix = __webpack_require__(38)

	module.exports = prefix ? 'webkitAnimation' : 'animation'


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var isFunc = __webpack_require__(41)
	var slice = Array.prototype.slice
	var Promise

	if (typeof window !== 'undefined') {
	  Promise = window.Promise
	}
	if (typeof global !== 'undefined') {
	  Promise = global.Promise
	}

	module.exports = function promisify (func) {
	  if (Promise) {
	    return function () {
	      var args = slice.call(arguments)
	      var ctx = this
	      if (isFunc(args.slice(-1))) {
	        return func.apply(ctx, args)
	      } else {
	        return new Promise(function (resolve, reject) {
	          args.push(function (err, result) {
	            if (err) {
	              reject(err)
	            } else {
	              resolve.apply(this, slice.call(arguments, 1))
	            }
	          })
	          func.apply(ctx, args)
	        })
	      }
	    }
	  } else {
	    return func
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = isFunction

	var toString = Object.prototype.toString

	function isFunction (fn) {
	  var string = toString.call(fn)
	  return string === '[object Function]' ||
	    (typeof fn === 'function' && string !== '[object RegExp]') ||
	    (typeof window !== 'undefined' &&
	     // IE8 and below
	     (fn === window.setTimeout ||
	      fn === window.alert ||
	      fn === window.confirm ||
	      fn === window.prompt))
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	
	var styles = [
	  'webkitTransform',
	  'MozTransform',
	  'msTransform',
	  'OTransform',
	  'transform'
	];

	var el = document.createElement('p');
	var style;

	for (var i = 0; i < styles.length; i++) {
	  style = styles[i];
	  if (null != el.style[style]) {
	    module.exports = style;
	    break;
	  }
	}


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<svg id=\"loading-symbol\" viewBox=\"0 0 104 104\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"filter-shadow\"><feOffset dx=\"0\" dy=\"1\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset><feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0\" in=\"shadowBlurOuter1\" type=\"matrix\" result=\"shadowMatrixOuter1\"></feColorMatrix><feMerge><feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter></defs><g id=\"loading-group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"loading-screen-group\" transform=\"translate(-440.000000, -462.000000)\"><g id=\"loading-symbol-group\" transform=\"translate(440.000000, 462.000000)\"><circle id=\"loading-circle\" fill=\"#FFFFFF\" filter=\"url(#filter-shadow)\" cx=\"50\" cy=\"50\" r=\"50\"></circle><g id=\"loading-mp-circles-group\" transform=\"translate(20.000000, 42.000000)\" fill=\"#53A2EB\"><circle id=\"loading-mp-circle-1\" cx=\"7.58823529\" cy=\"7.58823529\" r=\"7.58823529\"></circle><circle id=\"loading-mp-circle-2\" cx=\"34.9764706\" cy=\"7.65882353\" r=\"5.36470588\"></circle><circle id=\"loading-mp-circle-3\" cx=\"57.5647059\" cy=\"7.65882353\" r=\"2.43529412\"></circle></g></g></g></g></svg>"

/***/ }
/******/ ]);