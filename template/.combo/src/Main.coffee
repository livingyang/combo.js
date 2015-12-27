window.onload = ->
  cc.game.onStart = ->
    combo.Application.loadScene "login"
    
    cc.LoaderScene.preload ["res/HelloWorld.png"], ->
      MyScene = cc.Scene.extend
        onEnter: ->
          @_super()
          size = cc.director.getWinSize()
          sprite = cc.Sprite.create("res/HelloWorld.png")
          sprite.setPosition size.width / 2, size.height / 2
          sprite.setScale 0.8
          @addChild sprite, 0
          label = cc.LabelTTF.create("Hello World", "Arial", 40)
          label.setPosition size.width / 2, size.height / 2
          @addChild label, 1
      cc.director.runScene new MyScene()
    , this

  cc.game.run "gameCanvas"
