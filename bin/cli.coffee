fs = require 'fs'
program = require 'commander'
path = require 'path'
os = require 'os'
cp = require 'child_process'

# combo config path
comboConfigPath = path.join os.homedir(), '.combo'
fs.mkdir comboConfigPath if not fs.existsSync comboConfigPath

# simulatorPath = path.join comboConfigPath,
webpackPath = path.join __dirname, '..', 'node_modules', 'webpack', 'bin', 'webpack.js'
configPath = path.join __dirname, 'config.js'

###
combo set-cocos2d
###
program
  .command('new <name>')
  .description('create combo project.')
  .action (name, command) ->
    console.log name
    return
    cocosConsolePath = path.join cocos2dPath, 'tools', 'cocos2d-console', 'bin', 'cocos'
    if fs.existsSync cocosConsolePath
      child = exec "#{cocosConsolePath} gen-simulator -o #{comboConfigPath} -p mac"
      child.stdout.pipe process.stdout
      child.stderr.pipe process.stderr
    else
      console.log "Cannot find cocos console at path: #{cocosConsolePath}"

program
  .command('build')
  .description('build project')
  .action ->
    # console.log webpackPath
    # console.log fs.existsSync webpackPath
    # child = cp.exec 'ls'
    # console.log __dirname
    # return
    child = cp.exec "#{webpackPath} --config #{configPath}"
    child.stdout.pipe process.stdout
    child.stderr.pipe process.stderr

program
  .version (require path.join __dirname, '..', 'package.json').version

program.parse(process.argv)

program.help() if program.args.length is 0
