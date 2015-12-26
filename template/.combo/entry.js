// require('./Application.coffee');

// require src
var req = require.context("./src", true, /^\.\/.*\.coffee$/);
req.keys().forEach(function (m) {
  req(m);
});

// require Assets
var req = require.context("../Assets", true, /^\.\/.*\.(js|coffee)$/);
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
