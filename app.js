webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/tsd.d.ts" />
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	__webpack_require__(4);
	var desktop = __webpack_require__(9);
	var config = __webpack_require__(16);
	var github = __webpack_require__(27);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.call(this);
	        var self = this;
	        self.state = { errors: [], renderCount: 0 };
	        config.config.error = function (msg) {
	            self.state.errors.push(msg);
	            self.setState({ errors: self.state.errors });
	            var index = setTimeout(function () {
	                var tmp = self.state.errors;
	                var n = tmp.indexOf(msg);
	                self.setState({ errors: tmp.slice(0, n).concat(tmp.slice(n + 1, tmp.length)) });
	                clearTimeout(index);
	            }, 1500);
	        };
	    }
	    App.prototype.render = function () {
	        var self = this;
	        return React.createElement("div", {style: {
	            width: '100%',
	            height: '100%'
	        }}, React.createElement(desktop.Desktop, {appIcons: self.props.widgets, showStartmenu: true}), self.state.errors ? self.state.errors.map(function (error, index) { return React.createElement("div", {key: index, style: {
	            position: 'fixed',
	            top: 55 * index + 20,
	            right: 20,
	            width: 300,
	            height: 53,
	            zIndex: 9999999
	        }, className: "alert alert-danger alert-dismissible fade in", role: "alert"}, React.createElement("button", {type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×")), React.createElement("strong", null, error)); }) : null);
	    };
	    return App;
	}(React.Component));
	(function () {
	    document.body.removeChild(document.getElementById("preloading-style"));
	    document.body.removeChild(document.getElementById("precontainer"));
	    var container = document.getElementById("container");
	    container.style.display = '';
	    ReactDOM.render(React.createElement(App, {widgets: [
	        {
	            text: "Bing",
	            icon: __webpack_require__(21),
	            url: "http://www.bing.com"
	        },
	        {
	            text: "Google",
	            icon: __webpack_require__(22),
	            url: "http://www.google.com"
	        },
	        {
	            text: "Jolie",
	            icon: __webpack_require__(26),
	            content: React.createElement("img", {src: __webpack_require__(25), alt: '图片查看', style: {
	                maxHeight: 700
	            }})
	        },
	        github.app
	    ]}), container);
	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "body,\r\ndiv,\r\ndl,\r\ndt,\r\ndd,\r\nul,\r\nol,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\nform,\r\nfieldset,\r\ninput,\r\ntextarea,\r\np,\r\nblockquote,\r\nth,\r\ntd,\r\nimg,\r\nu,\r\ni {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\noverlay {\r\n    background: #000;\r\n    filter: alpha(opacity=50);\r\n    opacity: 0.5;\r\n    display: none;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 100;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n* {\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #fff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #ccc;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background-color: #ccd\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background-color: #cce\r\n}\r\n\r\nbody {\r\n    font-family: 'Microsoft Yahei';\r\n    background: url(" + __webpack_require__(7) + ");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}", ""]);

	// exports


/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ff0f1e7d.bg.jpg";

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../../typings/tsd.d.ts" /> 
	var defaultIconSrc = __webpack_require__(10);
	var startIcon = __webpack_require__(11);
	var browserIcon = __webpack_require__(12);
	var imageViewIcon = __webpack_require__(13);
	__webpack_require__(14);
	var React = __webpack_require__(2);
	var config = __webpack_require__(16);
	var widget = __webpack_require__(17);
	var Desktop = (function (_super) {
	    __extends(Desktop, _super);
	    function Desktop() {
	        _super.call(this);
	        this.itemWidth = 88;
	        this.itemHeight = 96;
	        this.objectIndexCount = 0;
	        this.lastOpenWindowTime = new Date(1997, 7);
	        var self = this;
	        self.state = { renderCount: 0, openedIcons: [], currentIndex: 0 };
	        window.onresize = function () {
	            self.setState({
	                renderCount: self.state.renderCount + 1,
	                showStartmenu: false
	            });
	        };
	        config.config.openUrl = function (url, title, icon) {
	            self.handleClick({
	                text: title,
	                icon: icon || browserIcon,
	                title: title,
	                url: url
	            });
	        };
	        config.config.openContent = function (content, title, icon) {
	            self.handleClick({
	                text: title,
	                icon: icon || defaultIconSrc,
	                title: title,
	                content: content
	            });
	        };
	        config.config.openImage = function (src, title) {
	            self.handleClick({
	                text: title || '图片查看',
	                icon: imageViewIcon,
	                title: title || '图片查看',
	                covered: true,
	                top: (document.body.clientHeight - 700) / 2,
	                zIndex: 1000000,
	                content: React.createElement("img", {src: src, alt: title || '图片查看', style: {
	                    maxHeight: 700
	                }})
	            });
	        };
	        document.oncontextmenu = function () {
	            event.cancelBubble = true;
	            event.returnValue = false;
	            return false;
	        };
	        document.onmousedown = function (e) {
	            if (window["Event"]) {
	                if (e.which == 2 || e.which == 3)
	                    return false;
	            }
	            else if (event["button"] == 2 || event["button"] == 3) {
	                event.cancelBubble = true;
	                event.returnValue = false;
	                return false;
	            }
	        };
	    }
	    Desktop.prototype.handleClick = function (item) {
	        var self = this;
	        var now = new Date();
	        var diff = now.getTime() - self.lastOpenWindowTime.getTime();
	        if (diff < 500) {
	            config.config.error("请求打开窗体频率太快,请稍候再试");
	            return;
	        }
	        self.lastOpenWindowTime = now;
	        var array = self.state.openedIcons;
	        var len = self.state.openedIcons.length;
	        if (len + 1 > 10) {
	            config.config.error("打开的窗体太多,请关掉一部分");
	        }
	        else {
	            var windowCount = 5;
	            var gap = 80;
	            array.push({
	                text: item.text,
	                icon: item.icon,
	                content: item.content,
	                title: item.title,
	                maximum: item.maximum,
	                covered: item.covered,
	                url: item.url,
	                zIndex: item.zIndex,
	                left: ((len / windowCount) + len % windowCount) * gap + gap,
	                top: item.top == undefined ? (len % windowCount) * gap + gap : item.top,
	                index: ++self.objectIndexCount
	            });
	            self.setState({
	                renderCount: self.state.renderCount + 1,
	                openedIcons: array,
	                currentIndex: self.objectIndexCount
	            });
	        }
	    };
	    Desktop.prototype.handleSelected = function (icon) {
	        var self = this;
	        self.setState({
	            renderCount: self.state.renderCount + 1,
	            currentIndex: icon.index
	        });
	    };
	    Desktop.prototype.handleClose = function (icon, index, widget) {
	        var self = this;
	        var array = self.state.openedIcons;
	        var target = [];
	        for (var index = 0; index < array.length; index++) {
	            var element = array[index];
	            if (element.index == icon.index)
	                continue;
	            target.push(element);
	        }
	        var count = target.length;
	        self.setState({
	            renderCount: self.state.renderCount + 1,
	            openedIcons: target,
	            currentIndex: count > 1 ? target[count - 1].index : 0
	        });
	    };
	    Desktop.prototype.render = function () {
	        var self = this;
	        var w = document.body.clientWidth;
	        var h = document.body.clientHeight - self.itemHeight - 48;
	        var topIndex = -1, leftIndex = 0;
	        var windows;
	        var tasks;
	        if (self.state.openedIcons) {
	            var rights = self.state.openedIcons;
	            windows = rights.map(function (icon) { return React.createElement(widget.Widget, {content: icon.content, title: icon.title || icon.text, icon: icon.icon, top: icon.top, left: icon.left, zIndex: icon.zIndex ? icon.zIndex : (icon.index == self.state.currentIndex ? 101 : 100), show: self.state.showStartmenu ? undefined : (self.hiddenStartmenuing ? undefined : (icon.index == self.state.currentIndex ? true : undefined)), onSelected: function (w) { return self.handleSelected.bind(self)(icon, icon.index); }, key: icon.index, url: icon.url, maximum: icon.maximum, covered: icon.covered, onClosd: function (w) { return self.handleClose.bind(self)(icon, icon.index, w); }}); });
	            tasks = rights.map(function (icon, index) { return React.createElement("div", {className: "taskbar-item", key: icon.index, style: {
	                left: index * 129 + (self.props.showStartmenu ? 32 : 0),
	                paddingLeft: 5,
	                background: icon.index == self.state.currentIndex ? 'linear-gradient( #4169E1, rgba(0, 0, 0, 1), #4169E1)' : ''
	            }, onClick: function (e) {
	                self.handleSelected.bind(self)(icon);
	                e.stopPropagation();
	                e.preventDefault();
	            }}, React.createElement("img", {src: icon.icon || defaultIconSrc, alt: icon.text}), React.createElement("span", null, icon.text)); });
	        }
	        if (self.hiddenStartmenuing)
	            self.hiddenStartmenuing = false;
	        return React.createElement("div", {style: {
	            width: '100%',
	            height: '100%'
	        }}, " ", React.createElement("div", {className: "desktop"}, self.props.appIcons ? self.props.appIcons.map(function (item, index) {
	            var top = self.itemHeight * (++topIndex) + 10;
	            if (top > h) {
	                top = 10;
	                topIndex = 0;
	                leftIndex++;
	            }
	            var left = self.itemWidth * (leftIndex) + 10;
	            return React.createElement("div", {className: "appIcon", onClick: function (e) { return self.handleClick.bind(self)(item); }, key: index, style: {
	                width: self.itemWidth,
	                height: self.itemHeight,
	                top: top,
	                left: left
	            }}, React.createElement("img", {src: item.icon || defaultIconSrc, alt: item.text}), React.createElement("span", null, item.text));
	        }) : null), React.createElement("div", {className: "taskbar"}, self.props.showStartmenu ? React.createElement("div", {className: "start", onClick: function (e) {
	            self.setState({
	                showStartmenu: true
	            });
	            e.stopPropagation();
	            e.preventDefault();
	            return true;
	        }}, React.createElement("img", {src: startIcon, alt: "开始"})) : null, tasks), self.state.showStartmenu ? React.createElement("div", {className: "startmenu-cover", onClick: function (e) {
	            self.hiddenStartmenuing = true;
	            self.setState({
	                showStartmenu: false
	            });
	            e.stopPropagation();
	            e.preventDefault();
	        }}, React.createElement("div", {className: "startmenu-container"}, React.createElement("div", {className: "startmenu"}, self.props.appIcons ? self.props.appIcons.filter(function (x) { return !(!x.url && !x.content); }).map(function (item, index) {
	            return React.createElement("div", {className: "startmenu-item", onClick: function (e) { return self.handleClick.bind(self)(item); }, key: index}, React.createElement("img", {src: item.icon || defaultIconSrc, alt: item.text}), React.createElement("span", null, item.text));
	        }) : null))) : null, windows);
	    };
	    return Desktop;
	}(React.Component));
	exports.Desktop = Desktop;
	;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f9da347a.default-app-icon.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d57f982c.start.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f7b1609a.browser.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4a6db391.image-view.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./desktop.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./desktop.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".desktop {\r\n    width: 100%;\r\n    height: calc(100% - 32px);\r\n    padding: 30px;\r\n    overflow: hidden;\r\n}\r\n\r\n.taskbar {\r\n    height: 32px;\r\n    width: calc(100% - 32x);\r\n    margin-left: 32px;\r\n    background: linear-gradient( #eaeaea, rgba(0, 0, 0, 0.1), #eaeaea);\r\n}\r\n\r\n.start {\r\n    background: linear-gradient( #eaeaea, rgba(0, 0, 0, 0.1), #eaeaea);\r\n    position: absolute;\r\n    height: 32px;\r\n    width: 32px;\r\n    bottom: 0px;\r\n    margin-left: -32px;\r\n    border-right: 1px solid black;\r\n}\r\n\r\n.start img {\r\n    width: 28px;\r\n    height: 28px;\r\n}\r\n\r\n.start:hover {\r\n    background: linear-gradient( #5e84a7, #ccc, #5e84a7);\r\n}\r\n\r\n.startmenu-cover {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #000;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n    position: fixed;\r\n}\r\n\r\n.startmenu-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.startmenu {\r\n    width: 290px;\r\n    height: 500px;\r\n    position: absolute;\r\n    opacity: 1;\r\n    background: rgba(244, 244, 244, 0.5);\r\n    border-radius: 0 0 0 0;\r\n    bottom: 32px;\r\n    overflow: auto;\r\n}\r\n\r\n.startmenu-item {\r\n    height: 48px;\r\n    width: 280px;\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n    background: rgba(244, 244, 244, 0.1);\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.startmenu-item:hover {\r\n    border: 1px solid black;\r\n    background: rgba(244, 244, 244, 0.3);\r\n}\r\n\r\n.startmenu-item img {\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 3px;\r\n    margin-top: 6px;\r\n    margin-left: 6px;\r\n}\r\n\r\n.startmenu-item span {\r\n    width: 70px;\r\n    height: 48px;\r\n    overflow: hidden;\r\n    margin-left: 6px;\r\n    line-height: 48px;\r\n    text-align: left;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.taskbar-item {\r\n    height: 32px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    width: 128px;\r\n    margin-right: 2px;\r\n    border-radius: 2px;\r\n    color: white;\r\n    background: linear-gradient( #6495ED, rgba(0, 0, 0, 0.8), #6495ED);\r\n}\r\n\r\n.taskbar-item img {\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.taskbar-item span {\r\n    width: 70px;\r\n    height: 32px;\r\n    display: block;\r\n    float: left;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 36px;\r\n    line-height: 32px;\r\n    text-align: left;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.appIcon {\r\n    padding: 10px;\r\n    text-align: center;\r\n    position: absolute;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    -webkit-transition: background 0.2s;\r\n    -moz-transition: background 0.2s;\r\n    -o-transition: background 0.2s;\r\n    -ms-transition: background 0.2s;\r\n    transition: background 0.2s;\r\n}\r\n\r\n.appIcon:hover {\r\n    background: rgba(0, 0, 0, 0.3);\r\n    filter: progid: DXImageTransform.Microsoft.gradient(startcolorstr=#3F000000, endcolorstr=#3F000000);\r\n}\r\n\r\n.appIcon img {\r\n    border-radius: 3px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 48px;\r\n    height: 48px;\r\n}\r\n\r\n.appIcon span {\r\n    width: 70px;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    display: block;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    padding: 0 5px;\r\n    position: relative;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    z-index: 1;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    cursor: pointer;\r\n}", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	/// <reference path="../../typings/tsd.d.ts" /> 
	var Config = (function () {
	    function Config() {
	        this.defaultErrorTimeout = 2000;
	    }
	    return Config;
	}());
	exports.config = new Config();


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../../typings/tsd.d.ts" />
	var React = __webpack_require__(2);
	__webpack_require__(18);
	var Widget = (function (_super) {
	    __extends(Widget, _super);
	    function Widget() {
	        _super.call(this);
	        this.innerOperation = false;
	        this.moving = false;
	        this.state = {
	            hidden: false
	        };
	    }
	    Widget.prototype.handleResizs = function () {
	        var self = this;
	        this.setState({
	            maxing: !self.state.maxing,
	            hidden: false
	        });
	    };
	    Widget.prototype.handleMin = function (e) {
	        var self = this;
	        self.innerOperation = true;
	        self.setState({
	            hidden: true
	        });
	    };
	    Widget.prototype.handleClose = function () {
	        var self = this;
	        self.props.onClosd(self);
	    };
	    Widget.prototype.handldeMouseMove = function (e) {
	        var self = this;
	        if (self.moving) {
	            var x = e.pageX - self.x;
	            var y = e.pageY - self.y;
	            var layer = ReactDOM.findDOMNode(self.refs.layer);
	            var maxX = document.body.clientWidth - layer.clientWidth;
	            var maxY = document.body.clientHeight - layer.clientHeight;
	            x < 0 && (x = 0);
	            y < 0 && (y = 0);
	            x > maxX && (x = maxX);
	            y > maxY && (y = maxY);
	            this.setState({
	                top: y,
	                left: x
	            });
	        }
	    };
	    Widget.prototype.handldeMouseDown = function (e) {
	        var self = this;
	        self.props.onSelected(self);
	        self.moving = true;
	        self.x = e.pageX - self.state.left;
	        self.y = e.pageY - self.state.top;
	        var old = document.onmousemove;
	        document.onmousemove = function (ev) { return self.handldeMouseMove.bind(self)(ev); };
	        document.onmouseup = function (ev) {
	            self.moving = false;
	            document.onmousemove = old;
	        };
	    };
	    Widget.prototype.componentDidMount = function () {
	        var self = this;
	        var layer = ReactDOM.findDOMNode(self.refs.layer);
	        var maxX = document.body.clientWidth - layer.clientWidth;
	        var maxY = document.body.clientHeight - layer.clientHeight;
	        if (self.state.left < 0)
	            self.state.left = 0;
	        if (self.state.left > maxX)
	            self.state.left = maxX;
	        if (self.state.top < 0)
	            self.state.top = 0;
	        if (self.state.top > maxY)
	            self.state.top = maxY;
	        this.setState({
	            top: self.state.top,
	            left: self.state.left
	        });
	    };
	    Widget.prototype.render = function () {
	        var self = this;
	        if (self.state.top == undefined)
	            self.state.top = self.props.top == undefined ? 50 : self.props.top;
	        if (self.state.left == undefined)
	            self.state.left = self.props.left == undefined ? 50 : self.props.left;
	        var indexStyle = {};
	        if (!self.innerOperation && self.state.hidden && self.props.show === true)
	            self.state.hidden = false;
	        if (self.innerOperation)
	            self.innerOperation = undefined;
	        indexStyle.visibility = self.state.hidden ? 'hidden' : 'visible';
	        if (self.props.zIndex) {
	            indexStyle.zIndex = self.props.zIndex;
	        }
	        return React.createElement("div", {className: "widget-layer " + (self.props.url ? 'widget-full' : (self.state.maxing ? 'widget-full' : '')), style: indexStyle, onClick: function (e) { return self.props.onSelected(self); }}, self.props.covered ? React.createElement("div", {className: "widget-shade"}) : null, React.createElement("div", {className: "widget-box show", ref: "layer", style: {
	            left: self.state.left,
	            top: self.state.top
	        }}, React.createElement("div", {className: "widget-title widget-move", onMouseDown: function (e) { return self.handldeMouseDown.bind(self)(e); }}, React.createElement("img", {src: self.props.icon || __webpack_require__(10), alt: self.props.title}), React.createElement("span", null, self.props.title)), self.props.minimum == false ? null : React.createElement("div", {className: "widget-min widget-ico", onClick: function (e) { return self.handleMin.bind(self)(e); }}), React.createElement("div", {className: "widget-close widget-ico", onClick: function (e) { return self.handleClose.bind(self)(); }}), self.props.url ? null : (self.props.maximum ? React.createElement("div", {className: "widget-resize widget-ico", onClick: function (e) { return self.handleResizs.bind(self)(); }}) : null), self.props.content ? React.createElement("div", {className: "widget-con"}, self.props.content) : (self.props.url ? React.createElement("iframe", {src: self.props.url, style: {
	            width: '100%',
	            height: '100%'
	        }}) : null)));
	    };
	    return Widget;
	}(React.Component));
	exports.Widget = Widget;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./widget.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./widget.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/*公共图标样式*/\r\n\r\n.widget-ico {\r\n    background: url(" + __webpack_require__(20) + ") no-repeat;\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\n\r\n/*主框架结构*/\r\n\r\n.widget-layer {\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n.widget-box {\r\n    position: fixed;\r\n    min-width: 240px;\r\n    max-width: 960px;\r\n    background-color: #fff;\r\n    box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);\r\n    left: 40%;\r\n    top: 150px;\r\n    overflow: hidden;\r\n}\r\n\r\n.widget-shade {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #000;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0.5;\r\n    filter: alpha(opacity=50);\r\n}\r\n\r\n.widget-full .widget-box {\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    max-width: 100% !important;\r\n}\r\n\r\n.widget-box.show {\r\n    animation: bouncedelay linear .03s;\r\n    -webkit-animation: bouncedelay linear .03s;\r\n}\r\n\r\n.widget-move {\r\n    cursor: move;\r\n}\r\n\r\n.widget-title {\r\n    width: 100%;\r\n    background-color: #eaeaea;\r\n    border-bottom: 1px solid #d5d5d5;\r\n    color: #333;\r\n    font-size: 14px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    cursor: move;\r\n}\r\n\r\n.widget-title span {\r\n    padding-left: 2px;\r\n}\r\n\r\n.widget-title img {\r\n    margin-left: 10px;\r\n    margin-top: -2px;\r\n    width: 28px;\r\n    height: 28px;\r\n}\r\n\r\n.widget-con {\r\n    line-height: 22px;\r\n    word-break: break-all;\r\n    overflow: hidden;\r\n}\r\n\r\n.widget-min {\r\n    background-position: -120px 0px;\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.widget-min:hover {\r\n    background-position: -140px 0px;\r\n}\r\n\r\n.widget-close {\r\n    background-position: 0px 0px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.widget-close:hover {\r\n    background-position: -20px 0px;\r\n}\r\n\r\n.widget-resize {\r\n    background-position: -40px 0px;\r\n    position: absolute;\r\n    right: 50px;\r\n    top: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.widget-resize:hover {\r\n    background-position: -80px 0px;\r\n}\r\n\r\n.widget-full .widget-resize {\r\n    background-position: -60px 0px;\r\n}\r\n\r\n.widget-full .widget-resize:hover {\r\n    background-position: -100px 0px;\r\n}\r\n\r\n@-webkit-keyframes bouncedelay {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(0)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1)\r\n    }\r\n}\r\n\r\n@keyframes bouncedelay {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(0);\r\n        -webkit-transform: scale(0)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n        -webkit-transform: scale(1)\r\n    }\r\n}", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ff942907.icon.png";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa453e59.bing.png";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "98ed8ae5.google.png";

/***/ },
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "310eb0e1.angelina jolie.jpg";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eec78817.tomb raider.png";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../../typings/tsd.d.ts" /> 
	var React = __webpack_require__(2);
	var Github = (function (_super) {
	    __extends(Github, _super);
	    function Github() {
	        _super.call(this);
	        this.state = {
	            loading: true,
	            error: null,
	            data: null
	        };
	    }
	    Github.prototype.componentDidMount = function () {
	        var _this = this;
	        $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars').then(function (value) { return _this.setState({ loading: false, data: value }); }, function (error) { return _this.setState({ loading: false, error: error }); });
	    };
	    Github.prototype.render = function () {
	        var self = this;
	        return React.createElement("div", {style: { height: 500, width: 400, overflow: 'auto' }}, self.state.loading ? React.createElement("span", null, "Loading...") : (self.state.error ? React.createElement("span", null, "Error: ", self.state.error.message) :
	            (self.state.data.items ? React.createElement("ul", {className: "list-group"}, self.state.data.items.map(function (repo, index) {
	                return React.createElement("li", {key: index, className: "list-group-item", style: {
	                    cursor: 'pointer',
	                    marginBottom: 0,
	                    wordBreak: 'break-word'
	                }, onClick: function (e) { window.open(repo.html_url, repo.name); }}, React.createElement("span", {className: "badge"}, repo.stargazers_count), React.createElement("h3", null, repo.name), React.createElement("p", {className: "list-group-item-text"}, repo.description));
	            }), " ") : null)));
	    };
	    return Github;
	}(React.Component));
	exports.app = {
	    text: "Github",
	    title: "Most Popular JavaScript Projects in Github",
	    icon: __webpack_require__(28),
	    content: React.createElement(Github, null)
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cd6b1fb1.github.png";

/***/ }
]);