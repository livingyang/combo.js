// require src
var req = require.context("../src", true, /^\.\/.*\.(js|coffee)$/);
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
