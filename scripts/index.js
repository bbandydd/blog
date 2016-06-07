var exec = require('child_process').exec;
hexo.on('new', function(path){
  /*
    開啟SublimeText 
    exec('open -a "/Applications/Sublime Text.app"' + path);
  */
 
  exec('open -a "/Applications/atom.app" ' + path);
});