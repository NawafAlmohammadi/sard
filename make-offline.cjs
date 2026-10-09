const fs=require('fs'),path=require('path');
const dist=path.join(__dirname,'dist');
let html=fs.readFileSync(path.join(dist,'index.html'),'utf8');
const css=fs.readFileSync(path.join(dist,'style.css'),'utf8');
let js=fs.readFileSync(path.join(dist,'app.js'),'utf8');
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>').replace('<script src="app.js"></script>','<script>'+js.replaceAll('</script','<\\/script')+'</script>');
fs.writeFileSync(path.join(__dirname,'Sard.html'),html);
console.log('Offline Sard.html generated.');
