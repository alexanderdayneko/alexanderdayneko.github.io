/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _fetchArticles = __webpack_require__(1);
	
	__webpack_require__(3);
	
	document.addEventListener("DOMContentLoaded", function (event) {
	
			console.log("DOMContentLoaded");
	
			var articlesElement = document.querySelector("section.news");
			var url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=07a7bf7bcca4498cbc133cff62e726a0';
	
			(0, _fetchArticles.fetchArticles)(url);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	            value: true
	});
	exports.fetchArticles = fetchArticles;
	
	var _article = __webpack_require__(2);
	
	var _article2 = _interopRequireDefault(_article);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function fetchArticles(url) {
	            var articles = [];
	            var articlesFetched = new Promise(function (resolve, reject) {
	                        fetch(url).then(function (response) {
	                                    if (response.ok) return response.json();
	                        }).then(function (json) {
	                                    var _iteratorNormalCompletion = true;
	                                    var _didIteratorError = false;
	                                    var _iteratorError = undefined;
	
	                                    try {
	                                                for (var _iterator = json.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                                            var a = _step.value;
	
	                                                            articles.push(new _article2.default(a.title, a.author, a.description, a.urlToImage, a.url, a.publishedAt));
	                                                }
	                                    } catch (err) {
	                                                _didIteratorError = true;
	                                                _iteratorError = err;
	                                    } finally {
	                                                try {
	                                                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                                                        _iterator.return();
	                                                            }
	                                                } finally {
	                                                            if (_didIteratorError) {
	                                                                        throw _iteratorError;
	                                                            }
	                                                }
	                                    }
	
	                                    resolve("Articles fetched!");
	                        }).catch(function (err) {
	                                    return console.log(err);
	                        });
	            });
	
	            articlesFetched.then(function (result) {
	                        var articlesElement = document.querySelector("section.news");
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;
	
	                        try {
	                                    for (var _iterator2 = articles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                                var article = _step2.value;
	
	
	                                                var articleElement = document.createElement('article');
	
	                                                var urlElement = document.createElement('a');
	                                                urlElement.href = article.url;
	
	                                                var container = document.createElement('div');
	                                                container.className += 'article-container';
	
	                                                var image = document.createElement('img');
	                                                image.src = article.urlToImage;
	
	                                                var textContainer = document.createElement('div');
	                                                textContainer.className += 'text-container';
	
	                                                var header = document.createElement('header');
	
	                                                var title = document.createElement('h2');
	                                                title.className += 'title';
	                                                title.innerText = article.title;
	
	                                                var description = document.createElement('p');
	                                                description.innerText = article.description;
	
	                                                var time = document.createElement('time');
	                                                time.innerText = article.publishedAt;
	
	                                                var author = document.createElement('span');
	                                                author.innerText = article.author;
	
	                                                header.append(title);
	                                                header.append(author);
	                                                header.append(time);
	
	                                                textContainer.append(header);
	                                                textContainer.append(description);
	
	                                                container.append(image);
	                                                container.append(textContainer);
	
	                                                urlElement.append(container);
	
	                                                articleElement.appendChild(urlElement);
	                                                articlesElement.appendChild(articleElement);
	                                    }
	                        } catch (err) {
	                                    _didIteratorError2 = true;
	                                    _iteratorError2 = err;
	                        } finally {
	                                    try {
	                                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                                            _iterator2.return();
	                                                }
	                                    } finally {
	                                                if (_didIteratorError2) {
	                                                            throw _iteratorError2;
	                                                }
	                                    }
	                        }
	            }, function (error) {
	                        return alert("rejected!");
	            });
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Article = function Article(title, author, description, urlToImage, url, publishedAt) {
	    _classCallCheck(this, Article);
	
	    this.title = title;
	    this.author = author;
	    this.description = description;
	    this.urlToImage = urlToImage;
	    this.url = url;
	    this.publishedAt = publishedAt;
	};
	
	exports.default = Article;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\na {\r\n\ttext-decoration: none;\r\n}\r\nbody > header {\r\n\tbackground-color: #EEEEEE;\r\n\tpadding: 10px;\r\n\tborder-top: 1px solid #DDDDDD;\t\r\n\tborder-bottom: 1px solid #DDDDDD;\r\n}\r\nheader h1{\r\n\ttext-align: center;\r\n\tfont-family: 'Tahoma', sans-serif;\r\n\tcolor: #555555;\r\n}\r\n\r\n.news {\r\n\tmax-width: 800px;\r\n\tmargin: 0px auto;\r\n\t\r\n}\r\n\r\n.news article img {\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n}\r\n.text-container time {\r\n    float: right;\r\n}\r\n.text-container span {\r\n    float: left;\r\n}\t\r\n\r\n.article-container {\r\n\tposition: relative;\r\n\ttransition: all 0.3s ease-out;\r\n}\r\n.article-container:hover{\r\n\tfilter: grayscale(90%);\r\n}\r\n\r\n.text-container {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tpadding: 5px 15px 15px;\r\n\tcolor: #FFFFFF;\r\n\tbackground-color: rgba(0,0,0,0.3);\r\n}\r\n\r\n.text-container p{\r\n\tmargin: 15px 0 0;\r\n\ttext-align: justify;\r\n}\r\n\r\n.text-container header::after {\r\n\tcontent: \" \";\r\n\tdisplay: block;\r\n\tclear: both;\r\n}\r\nfooter{\r\n\tbackground-color: #EEEEEE;\r\n\tpadding: 20px;\r\n\tborder-top: 1px solid #DDDDDD;\r\n}\r\nfooter a {\r\n\tcolor: gray;\r\n\ttext-decoration: none;\r\n}\r\n@media only screen and (max-width: 768px){\r\n\t.news {\r\n\t\twidth: 100%;\r\n\t\tmax-width: 1920px;\r\n\t}\r\n\t.text-container {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\tbox-sizing: border-box;\r\n\t\tbackground: #000;\r\n\t}\r\n\t\r\n\t.text-container time, .text-container span{\r\n\t\tfloat: none;\r\n\t\tdisplay: block;\r\n\t\tmargin: 5px;\r\n\t\ttext-align: center;\r\n\t}  \r\n\t.title{\r\n\t\tfont-size: 1.2em;\r\n\t\ttext-align: center;\r\n\t}\r\n}", ""]);
	
	// exports


/***/ },
/* 5 */
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
/* 6 */
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


/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map