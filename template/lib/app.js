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

	__webpack_require__(1);
	
	console.log(__webpack_require__(2));
	
	// require src
	var req = __webpack_require__(3);
	req.keys().forEach(function (m) {
	  req(m);
	});
	
	window.onload = function(){
	    cc.game.onStart = function(){
	        Application.loadScene('login');
	        // return;
	        // console.log(combo);
	        // //load resources
	        // cc.LoaderScene.preload(["res/HelloWorld.png"], function () {
	        //     var MyScene = cc.Scene.extend({
	        //         onEnter:function () {
	        //             this._super();
	        //             var size = cc.director.getWinSize();
	        //             var sprite = cc.Sprite.create("res/HelloWorld.png");
	        //             sprite.setPosition(size.width / 2, size.height / 2);
	        //             sprite.setScale(0.8);
	        //             this.addChild(sprite, 0);
	        //
	        //             var label = cc.LabelTTF.create("Hello World", "Arial", 40);
	        //             label.setPosition(size.width / 2, size.height / 2);
	        //             this.addChild(label, 1);
	        //         }
	        //     });
	        //     cc.director.runScene(new MyScene());
	        // }, this);
	    };
	    cc.game.run("gameCanvas");
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {global.Application = {
	  loadScene: function(name) {
	    return console.log("Application.loadScene ");
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"test": 1
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTAyY2Q4MzE5ODBhYjU3ZWY0ODEiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vQXBwbGljYXRpb24uY29mZmVlIiwid2VicGFjazovLy8uLi9zcmMvbG9naW4uanNvbiIsIndlYnBhY2s6Ly8vLi4vc3JjIF5cXC5cXC8uKlxcLihqc3xjb2ZmZWUpJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQ0EscURBQU0sQ0FBQyxXQUFQLEdBQXFCO0dBQUEsV0FBVyxTQUFDLElBQUQ7WUFFOUIsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWjtHQUY4QixDQUFYOzs7Ozs7Ozs7QUNBckI7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQSIsImZpbGUiOiIuLi9saWIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1MDJjZDgzMTk4MGFiNTdlZjQ4MVxuICoqLyIsInJlcXVpcmUoJy4vQXBwbGljYXRpb24uY29mZmVlJyk7XG5cbmNvbnNvbGUubG9nKHJlcXVpcmUoJy4uL3NyYy9sb2dpbi5qc29uJykpO1xuXG4vLyByZXF1aXJlIHNyY1xudmFyIHJlcSA9IHJlcXVpcmUuY29udGV4dChcIi4uL3NyY1wiLCB0cnVlLCAvXlxcLlxcLy4qXFwuKGpzfGNvZmZlZSkkLyk7XG5yZXEua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgcmVxKG0pO1xufSk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGNjLmdhbWUub25TdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIEFwcGxpY2F0aW9uLmxvYWRTY2VuZSgnbG9naW4nKTtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21ibyk7XG4gICAgICAgIC8vIC8vbG9hZCByZXNvdXJjZXNcbiAgICAgICAgLy8gY2MuTG9hZGVyU2NlbmUucHJlbG9hZChbXCJyZXMvSGVsbG9Xb3JsZC5wbmdcIl0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHZhciBNeVNjZW5lID0gY2MuU2NlbmUuZXh0ZW5kKHtcbiAgICAgICAgLy8gICAgICAgICBvbkVudGVyOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHNpemUgPSBjYy5kaXJlY3Rvci5nZXRXaW5TaXplKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBjYy5TcHJpdGUuY3JlYXRlKFwicmVzL0hlbGxvV29ybGQucG5nXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzcHJpdGUuc2V0UG9zaXRpb24oc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNwcml0ZS5zZXRTY2FsZSgwLjgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKHNwcml0ZSwgMCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBsYWJlbCA9IGNjLkxhYmVsVFRGLmNyZWF0ZShcIkhlbGxvIFdvcmxkXCIsIFwiQXJpYWxcIiwgNDApO1xuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbC5zZXRQb3NpdGlvbihzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChsYWJlbCwgMSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShuZXcgTXlTY2VuZSgpKTtcbiAgICAgICAgLy8gfSwgdGhpcyk7XG4gICAgfTtcbiAgICBjYy5nYW1lLnJ1bihcImdhbWVDYW52YXNcIik7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2VudHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZ2xvYmFsLkFwcGxpY2F0aW9uID0gbG9hZFNjZW5lOiAobmFtZSkgLT5cbiAgIyBjb25zb2xlLmxvZyhyZXF1aXJlKG5hbWUpKVxuICBjb25zb2xlLmxvZyBcIkFwcGxpY2F0aW9uLmxvYWRTY2VuZSAje31cIlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9BcHBsaWNhdGlvbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXN0XCI6IDFcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9zcmMvbG9naW4uanNvblxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vc3JjIF5cXC5cXC8uKlxcLihqc3xjb2ZmZWUpJFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=