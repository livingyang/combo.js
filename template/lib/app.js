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

	// require combo src
	var req = __webpack_require__(1);
	req.keys().forEach(function (m) {
	  req(m);
	});
	
	// require user src
	var req = __webpack_require__(6);
	req.keys().forEach(function (m) {
	  req(m);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Application.coffee": 2,
		"./Main.coffee": 5
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
		"./login.combo": 4
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

	window.onload = function() {
	  cc.game.onStart = function() {
	    combo.Application.loadScene("login");
	    return cc.LoaderScene.preload(["res/HelloWorld.png"], function() {
	      var MyScene;
	      MyScene = cc.Scene.extend({
	        onEnter: function() {
	          var label, size, sprite;
	          this._super();
	          size = cc.director.getWinSize();
	          sprite = cc.Sprite.create("res/HelloWorld.png");
	          sprite.setPosition(size.width / 2, size.height / 2);
	          sprite.setScale(0.8);
	          this.addChild(sprite, 0);
	          label = cc.LabelTTF.create("Hello World", "Arial", 40);
	          label.setPosition(size.width / 2, size.height / 2);
	          return this.addChild(label, 1);
	        }
	      });
	      return cc.director.runScene(new MyScene());
	    }, this);
	  };
	  return cc.game.run("gameCanvas");
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTY4YTU3ZTRiMjhlNGExMDY2NjYiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjIF5cXC5cXC8uKlxcLmNvZmZlZSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi4vc3JjIF5cXC5cXC8uKlxcLmNvbWJvJCIsIndlYnBhY2s6Ly8vLi4vc3JjL2xvZ2luLmNvbWJvIiwid2VicGFjazovLy8uL3NyYy9NYWluLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi4vc3JjIF5cXC5cXC8uKlxcLihqc3xjb2ZmZWUpJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDVkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTs7O0dBQUEsTUFBTSxDQUFDLFFBQVM7OztBQUNoQixPQUFNLENBQUMsS0FBSyxDQUFDLFdBQWIsR0FBMkI7R0FBQSxXQUFXLFNBQUMsSUFBRDtBQUNwQztBQUFBO0FBQUE7VUFBQTs7V0FBbUQ7c0JBQ2pELE9BQU8sQ0FBQyxHQUFSLENBQVksaUNBQStCLElBQS9CLEdBQW9DLFNBQXBDLEdBQTRDLENBQUMsSUFBSSxDQUFDLFNBQUwsQ0FBZSxXQUFmLENBQUQsQ0FBeEQ7O0FBREY7O0dBRG9DLENBQVg7OztBQUszQixPQUFNLENBQUMsS0FBSyxDQUFDLFNBQWIsR0FBeUI7O0FBQ3pCLE9BQU07O0FBQ047QUFBQTs7R0FDRSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVUsR0FBdkIsR0FBNEIsSUFBSSxDQUFKO0FBRDlCOzs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQSxPQUFNLENBQUMsTUFBUCxHQUFnQjtHQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBUixHQUFrQjtLQUNoQixLQUFLLENBQUMsV0FBVyxDQUFDLFNBQWxCLENBQTRCLE9BQTVCO1lBRUEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFmLENBQXVCLENBQUMsb0JBQUQsQ0FBdkIsRUFBK0M7QUFDN0M7T0FBQSxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBVCxDQUNSO1NBQUEsU0FBUztBQUNQO1dBQUEsSUFBQyxPQUFEO1dBQ0EsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVo7V0FDUCxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBVixDQUFpQixvQkFBakI7V0FDVCxNQUFNLENBQUMsV0FBUCxDQUFtQixJQUFJLENBQUMsS0FBTCxHQUFhLENBQWhDLEVBQW1DLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBakQ7V0FDQSxNQUFNLENBQUMsUUFBUCxDQUFnQixHQUFoQjtXQUNBLElBQUMsU0FBRCxDQUFVLE1BQVYsRUFBa0IsQ0FBbEI7V0FDQSxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBWixDQUFtQixhQUFuQixFQUFrQyxPQUFsQyxFQUEyQyxFQUEzQztXQUNSLEtBQUssQ0FBQyxXQUFOLENBQWtCLElBQUksQ0FBQyxLQUFMLEdBQWEsQ0FBL0IsRUFBa0MsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUFoRDtrQkFDQSxJQUFDLFNBQUQsQ0FBVSxLQUFWLEVBQWlCLENBQWpCO1NBVE8sQ0FBVDtRQURRO2NBV1YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFaLENBQXlCLGFBQXpCO0tBWjZDLENBQS9DLEVBYUUsSUFiRjtHQUhnQjtVQWtCbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFSLENBQVksWUFBWjtBQW5CYzs7Ozs7OztBQ0FoQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vbGliL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMTY4YTU3ZTRiMjhlNGExMDY2NjZcbiAqKi8iLCIvLyByZXF1aXJlIGNvbWJvIHNyY1xudmFyIHJlcSA9IHJlcXVpcmUuY29udGV4dChcIi4vc3JjXCIsIHRydWUsIC9eXFwuXFwvLipcXC5jb2ZmZWUkLyk7XG5yZXEua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgcmVxKG0pO1xufSk7XG5cbi8vIHJlcXVpcmUgdXNlciBzcmNcbnZhciByZXEgPSByZXF1aXJlLmNvbnRleHQoXCIuLi9zcmNcIiwgdHJ1ZSwgL15cXC5cXC8uKlxcLihqc3xjb2ZmZWUpJC8pO1xucmVxLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gIHJlcShtKTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2VudHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL0FwcGxpY2F0aW9uLmNvZmZlZVwiOiAyLFxuXHRcIi4vTWFpbi5jb2ZmZWVcIjogNVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYyBeXFwuXFwvLipcXC5jb2ZmZWUkXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZ2xvYmFsLmNvbWJvID89IHt9XG5nbG9iYWwuY29tYm8uQXBwbGljYXRpb24gPSBsb2FkU2NlbmU6IChuYW1lKSAtPlxuICBmb3Igc2NlbmVOYW1lLCBzY2VuZU9iamVjdCBvZiBjb21iby5TY2VuZUxpc3Qgd2hlbiAoc2NlbmVOYW1lLm1hdGNoIG5hbWUpP1xuICAgIGNvbnNvbGUubG9nIFwiQXBwbGljYXRpb24ubG9hZFNjZW5lIG5hbWU6ICN7bmFtZX0sIG9iajogI3tKU09OLnN0cmluZ2lmeSBzY2VuZU9iamVjdH1cIlxuXG4jIHNjZW5lIGxpc3Rcbmdsb2JhbC5jb21iby5TY2VuZUxpc3QgPSB7fVxucmVxID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vLi4vc3JjXCIsIHRydWUsIC9eXFwuXFwvLipcXC5jb21ibyQvKVxuZm9yIG0gaW4gcmVxLmtleXMoKVxuICBnbG9iYWwuY29tYm8uU2NlbmVMaXN0W21dID0gcmVxIG1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0FwcGxpY2F0aW9uLmNvZmZlZVxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dpbi5jb21ib1wiOiA0XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL3NyYyBeXFwuXFwvLipcXC5jb21ibyRcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwibG9naW5cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL3NyYy9sb2dpbi5jb21ib1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIndpbmRvdy5vbmxvYWQgPSAtPlxuICBjYy5nYW1lLm9uU3RhcnQgPSAtPlxuICAgIGNvbWJvLkFwcGxpY2F0aW9uLmxvYWRTY2VuZSBcImxvZ2luXCJcbiAgICBcbiAgICBjYy5Mb2FkZXJTY2VuZS5wcmVsb2FkIFtcInJlcy9IZWxsb1dvcmxkLnBuZ1wiXSwgLT5cbiAgICAgIE15U2NlbmUgPSBjYy5TY2VuZS5leHRlbmRcbiAgICAgICAgb25FbnRlcjogLT5cbiAgICAgICAgICBAX3N1cGVyKClcbiAgICAgICAgICBzaXplID0gY2MuZGlyZWN0b3IuZ2V0V2luU2l6ZSgpXG4gICAgICAgICAgc3ByaXRlID0gY2MuU3ByaXRlLmNyZWF0ZShcInJlcy9IZWxsb1dvcmxkLnBuZ1wiKVxuICAgICAgICAgIHNwcml0ZS5zZXRQb3NpdGlvbiBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyAyXG4gICAgICAgICAgc3ByaXRlLnNldFNjYWxlIDAuOFxuICAgICAgICAgIEBhZGRDaGlsZCBzcHJpdGUsIDBcbiAgICAgICAgICBsYWJlbCA9IGNjLkxhYmVsVFRGLmNyZWF0ZShcIkhlbGxvIFdvcmxkXCIsIFwiQXJpYWxcIiwgNDApXG4gICAgICAgICAgbGFiZWwuc2V0UG9zaXRpb24gc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0IC8gMlxuICAgICAgICAgIEBhZGRDaGlsZCBsYWJlbCwgMVxuICAgICAgY2MuZGlyZWN0b3IucnVuU2NlbmUgbmV3IE15U2NlbmUoKVxuICAgICwgdGhpc1xuXG4gIGNjLmdhbWUucnVuIFwiZ2FtZUNhbnZhc1wiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9NYWluLmNvZmZlZVxuICoqLyIsImZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vc3JjIF5cXC5cXC8uKlxcLihqc3xjb2ZmZWUpJFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=