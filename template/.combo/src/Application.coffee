global.combo ?= {}
global.combo.Application = loadScene: (name) ->
  for sceneName, sceneObject of combo.SceneList when (sceneName.match name)?
    console.log "Application.loadScene name: #{name}, obj: #{JSON.stringify sceneObject}"

# scene list
global.combo.SceneList = {}
req = require.context("../../Assets", true, /^\.\/.*\.combo$/)
for m in req.keys()
  global.combo.SceneList[m] = req m
