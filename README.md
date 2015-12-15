# combo.js
A web game develop tool kit like unity.

# framework
* web版 unity
* 使用cocos2d-js-lite 作为游戏运行引擎
* 使用Electron作为编辑器
* 场景使用json格式定义，扩展名为combo
* 使用webpack 打包项目
* 可以使用coffee也可以使用javascript作为项目的脚本语言
* 默认加入lodash

# TODO
* 从一个json数据开始，运行场景
* Logo.combo : logo场景，游戏开始进入
* Home.combo : home场景，从Logo场景中，自动进入
* 增加demo，可以启动游戏
* 框架性的代码全部保存在combo.js根目录下，项目路径下，只保存资源和挂载脚本

# 场景
* 场景文件为json文件，后缀名为combo
* 增加一个接口 Application.loaderScene(string sceneName), 根据sceneName，运行对应的场景

# 配置
* 全局配置表存放在~/.combo/config.json
* 启动时会自动创建一个空配置
