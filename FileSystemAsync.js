var fs = require('fs');


if (fs.existsSync('temp')){
	console.log("Diretório ja existe, removendo...");
	if(fs.existsSync('temp/new.txt')){
		fs.unlinksync('temp/new.txt');
	} 
	fs.rmdirSync('temp');
}


fs.mkdir('temp',function(err) {
	fs.exists('temp', function(exists){
		if(exists) {
			process.chdir('temp');
			fs.writeFile('text.txt', "Texto para o nosso arquivo", function(err){
				fs.rename('text.txt', 'new.txt', function(err){
					fs.stat('new.txt',function(err, stats){
						console.log('Tamanho do arquivo: '+ stats.size + 'bytes');
						fs.readFile('new.txt', function(err, data){
							console.log("Conteúdo do arquivo: " +data.toString());
						});


					});
					
				});
			})
		}
	});
});
