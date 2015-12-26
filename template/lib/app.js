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

	// require('./Application.coffee');
	
	// require src
	var req = __webpack_require__(1);
	req.keys().forEach(function (m) {
	  req(m);
	});
	
	// require Assets
	var req = __webpack_require__(5);
	req.keys().forEach(function (m) {
	  req(m);
	});
	
	// console.log(require('../Assets/src/login.combo'));
	
	window.onload = function(){
	    cc.game.onStart = function(){
	        combo.Application.loadScene('login');
	        // return;
	        // console.log(combo);
	        // //load resources
	        cc.LoaderScene.preload(["Assets/res/HelloWorld.png"], function () {
	            var MyScene = cc.Scene.extend({
	                onEnter:function () {
	                    this._super();
	                    var size = cc.director.getWinSize();
	                    var sprite = cc.Sprite.create("Assets/res/HelloWorld.png");
	                    sprite.setPosition(size.width / 2, size.height / 2);
	                    sprite.setScale(0.8);
	                    this.addChild(sprite, 0);
	
	                    var label = cc.LabelTTF.create("Hello World", "Arial", 40);
	                    label.setPosition(size.width / 2, size.height / 2);
	                    this.addChild(label, 1);
	                }
	            });
	            cc.director.runScene(new MyScene());
	        }, this);
	    };
	    cc.game.run("gameCanvas");
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Application.coffee": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var i, len, m, ref, req;
	
	if (global.combo == null) {
	  global.combo = {};
	}
	
	global.combo.Application = {
	  loadScene: function(name) {
	    var ref, results, sceneName, sceneObject;
	    ref = combo.SceneList;
	    results = [];
	    for (sceneName in ref) {
	      sceneObject = ref[sceneName];
	      if ((sceneName.match(name)) != null) {
	        results.push(console.log("Application.loadScene name: " + name + ", obj: " + (JSON.stringify(sceneObject))));
	      }
	    }
	    return results;
	  }
	};
	
	global.combo.SceneList = {};
	
	req = __webpack_require__(3);
	
	ref = req.keys();
	for (i = 0, len = ref.length; i < len; i++) {
	  m = ref[i];
	  global.combo.SceneList[m] = req(m);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/login.combo": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"name": "login"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmI5ZWYyYzU4ZGRjOWVmYjMzZWYiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjIF5cXC5cXC8uKlxcLmNvZmZlZSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi4vQXNzZXRzIF5cXC5cXC8uKlxcLmNvbWJvJCIsIndlYnBhY2s6Ly8vLi4vQXNzZXRzL3NyYy9sb2dpbi5jb21ibyIsIndlYnBhY2s6Ly8vLi4vQXNzZXRzIF5cXC5cXC8uKlxcLihqc3xjb2ZmZWUpJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdURBQXVEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7OztHQUFBLE1BQU0sQ0FBQyxRQUFTOzs7QUFDaEIsT0FBTSxDQUFDLEtBQUssQ0FBQyxXQUFiLEdBQTJCO0dBQUEsV0FBVyxTQUFDLElBQUQ7QUFDcEM7QUFBQTtBQUFBO1VBQUE7O1dBQW1EO3NCQUNqRCxPQUFPLENBQUMsR0FBUixDQUFZLGlDQUErQixJQUEvQixHQUFvQyxTQUFwQyxHQUE0QyxDQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsV0FBZixDQUFELENBQXhEOztBQURGOztHQURvQyxDQUFYOzs7QUFLM0IsT0FBTSxDQUFDLEtBQUssQ0FBQyxTQUFiLEdBQXlCOztBQUN6QixPQUFNOztBQUNOO0FBQUE7O0dBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFVLEdBQXZCLEdBQTRCLElBQUksQ0FBSjtBQUQ5Qjs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBIiwiZmlsZSI6Ii4uL2xpYi9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZiOWVmMmM1OGRkYzllZmIzM2VmXG4gKiovIiwiLy8gcmVxdWlyZSgnLi9BcHBsaWNhdGlvbi5jb2ZmZWUnKTtcblxuLy8gcmVxdWlyZSBzcmNcbnZhciByZXEgPSByZXF1aXJlLmNvbnRleHQoXCIuL3NyY1wiLCB0cnVlLCAvXlxcLlxcLy4qXFwuY29mZmVlJC8pO1xucmVxLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gIHJlcShtKTtcbn0pO1xuXG4vLyByZXF1aXJlIEFzc2V0c1xudmFyIHJlcSA9IHJlcXVpcmUuY29udGV4dChcIi4uL0Fzc2V0c1wiLCB0cnVlLCAvXlxcLlxcLy4qXFwuKGpzfGNvZmZlZSkkLyk7XG5yZXEua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgcmVxKG0pO1xufSk7XG5cbi8vIGNvbnNvbGUubG9nKHJlcXVpcmUoJy4uL0Fzc2V0cy9zcmMvbG9naW4uY29tYm8nKSk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGNjLmdhbWUub25TdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbWJvLkFwcGxpY2F0aW9uLmxvYWRTY2VuZSgnbG9naW4nKTtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21ibyk7XG4gICAgICAgIC8vIC8vbG9hZCByZXNvdXJjZXNcbiAgICAgICAgY2MuTG9hZGVyU2NlbmUucHJlbG9hZChbXCJBc3NldHMvcmVzL0hlbGxvV29ybGQucG5nXCJdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgTXlTY2VuZSA9IGNjLlNjZW5lLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgb25FbnRlcjpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gY2MuZGlyZWN0b3IuZ2V0V2luU2l6ZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlID0gY2MuU3ByaXRlLmNyZWF0ZShcIkFzc2V0cy9yZXMvSGVsbG9Xb3JsZC5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zZXRQb3NpdGlvbihzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldFNjYWxlKDAuOCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ByaXRlLCAwKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBjYy5MYWJlbFRURi5jcmVhdGUoXCJIZWxsbyBXb3JsZFwiLCBcIkFyaWFsXCIsIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0UG9zaXRpb24oc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQobGFiZWwsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucnVuU2NlbmUobmV3IE15U2NlbmUoKSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG4gICAgY2MuZ2FtZS5ydW4oXCJnYW1lQ2FudmFzXCIpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9BcHBsaWNhdGlvbi5jb2ZmZWVcIjogMlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYyBeXFwuXFwvLipcXC5jb2ZmZWUkXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZ2xvYmFsLmNvbWJvID89IHt9XG5nbG9iYWwuY29tYm8uQXBwbGljYXRpb24gPSBsb2FkU2NlbmU6IChuYW1lKSAtPlxuICBmb3Igc2NlbmVOYW1lLCBzY2VuZU9iamVjdCBvZiBjb21iby5TY2VuZUxpc3Qgd2hlbiAoc2NlbmVOYW1lLm1hdGNoIG5hbWUpP1xuICAgIGNvbnNvbGUubG9nIFwiQXBwbGljYXRpb24ubG9hZFNjZW5lIG5hbWU6ICN7bmFtZX0sIG9iajogI3tKU09OLnN0cmluZ2lmeSBzY2VuZU9iamVjdH1cIlxuXG4jIHNjZW5lIGxpc3Rcbmdsb2JhbC5jb21iby5TY2VuZUxpc3QgPSB7fVxucmVxID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vLi4vQXNzZXRzXCIsIHRydWUsIC9eXFwuXFwvLipcXC5jb21ibyQvKVxuZm9yIG0gaW4gcmVxLmtleXMoKVxuICBnbG9iYWwuY29tYm8uU2NlbmVMaXN0W21dID0gcmVxIG1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0FwcGxpY2F0aW9uLmNvZmZlZVxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9zcmMvbG9naW4uY29tYm9cIjogNFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9Bc3NldHMgXlxcLlxcLy4qXFwuY29tYm8kXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmFtZVwiOiBcImxvZ2luXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9Bc3NldHMvc3JjL2xvZ2luLmNvbWJvXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA1O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9Bc3NldHMgXlxcLlxcLy4qXFwuKGpzfGNvZmZlZSkkXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==