const path = require('path');
const json5 = require('json5');
const fs = require('fs');
const {argv} = require('yargs');
const livereload = require('livereload');
const opn = require('opn');
const chokidar = require('chokidar');
const less = require('less');


const baseLessFile = './less/base.less';
const complexLessFile = './less/complex.less';
const mixLessFile = './less/icon-no-font.less';

parseJsonToCSS();

//--build
argv.build && process.exit();

livereload.createServer().watch(__dirname);

opn('test/test.html');

chokidar.watch([baseLessFile, complexLessFile, 'html-entities.json']).on('change', f=>{console.log(`${f} changed`);
  parseJsonToCSS();
});

function myLessc(infile, outfile){
  less.render(
    fs.readFileSync(infile).toString(),
    (err, out)=>{
        !err ? fs.writeFileSync(outfile, out.css) : console.log(err);
    })
}

function parseJsonToCSS(){
  const htmlEntitiesFile = './html-entities.json';
  const htmlEntities = json5.parse(fs.readFileSync(htmlEntitiesFile));
  let allCls = [];

  allCls.push(`@import "${baseLessFile}";`);

  for(let key in htmlEntities){
    let val = htmlEntities[key];
    allCls.push(`.icon-no-font-${key}{
      .setAfterContent('\\${val}');
}`);
  }

  allCls.push(`@import "${complexLessFile}";`);

  fs.writeFileSync(mixLessFile, allCls.join('\n'));

  myLessc(mixLessFile, './icon-no-font.css');
}

