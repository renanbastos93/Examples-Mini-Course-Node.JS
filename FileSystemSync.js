var fs = require('fs');

if (fs.existsSync('temp')){
   console.log('Diret�rio ja existe, removendo ...');
   if(fs.existsSync('temp/new.txt')){
	fs.unlinkSync('temp/new.txt');
   }
   fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if (fs.existsSync('temp')){
   process.chdir('temp');
   fs.writeFileSync('test.txt','Esse texto vai no nosso arquivo');
   fs.renameSync('test.txt', 'new.txt');
   console.log('Tamanho do arquivo: '+ fs.statSync('new.txt').size + 'bytes');
   console.log('Conte�do do arquivo: '+fs.readFileSync('new.txt').toString());
}