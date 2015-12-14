fs = require 'fs'
program = require 'commander'
path = require 'path'
os = require 'os'
exec = require('child_process').exec

# combo config path
comboConfigPath = path.join os.homedir(), '.combo'
fs.mkdir comboConfigPath if not fs.existsSync comboConfigPath

# simulatorPath = path.join comboConfigPath,

###
combo set-cocos2d
###
program
  .command('set-cocos2d <cocos2dPath>')
  .description('set cocos2d-x path.')
  .action (cocos2dPath, command) ->
    cocosConsolePath = path.join cocos2dPath, 'tools', 'cocos2d-console', 'bin', 'cocos'
    if fs.existsSync cocosConsolePath
      child = exec "#{cocosConsolePath} gen-simulator -o #{comboConfigPath} -p mac"
      child.stdout.pipe process.stdout
      child.stderr.pipe process.stderr
    else
      console.log "Cannot find cocos console at path: #{cocosConsolePath}"

program
  .command('run-simulator')
  .description('run simulator')
  .action ->
    simulatorPath = path.join __dirname, '..', 'simulator.app', 'Contents', 'MacOS', 'simulator-desktop'
    child = exec simulatorPath, cwd: __dirname
    child.stdout.pipe process.stdout

program
  .version (require path.join __dirname, '..', 'package.json').version

program.parse(process.argv);

program.help() if program.args.length is 0
