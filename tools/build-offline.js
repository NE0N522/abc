#!/usr/bin/env node
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),css=fs.readFileSync(path.join(root,'styles.css'),'utf8'),app=fs.readFileSync(path.join(root,'app.js'),'utf8'),core=fs.readFileSync(path.join(root,'data','storage-core.js'),'utf8');
const map=JSON.parse(fs.readFileSync(path.join(root,'data','legacy-map.json'),'utf8'));
const data={};for(const l of ['A1','A2','B1','B2'])data[l]=JSON.parse(fs.readFileSync(path.join(root,'data',l+'.json'),'utf8'));
const safe=s=>s.replace(/<\/script/gi,'<\\/script').replace(/</g,'\\u003c');
const scripts='<script>window.OX3K_LEGACY_MAP='+safe(JSON.stringify(map.mapping))+';window.OX3K_LEVEL_COUNTS='+JSON.stringify(map.levelCounts)+';window.OX3K_DATA='+safe(JSON.stringify(data))+';</script>\n<script>'+core.replace(/<\/script/gi,'<\\/script')+'</script>\n<script>'+app.replace(/<\/script/gi,'<\\/script')+'</script>';
const standalone=html.replace('<link rel="stylesheet" href="./styles.css">','<style>\n'+css+'</style>').replace('<link rel="manifest" href="manifest.webmanifest">','').replace('<link rel="icon" type="image/svg+xml" href="data/icon.svg">','').replace('<link rel="apple-touch-icon" href="./data/icon-180.png">','').replace('<script src="./bootstrap.js"></script>',()=>scripts);
fs.writeFileSync(path.join(root,'offline.html'),standalone,'utf8');console.log('Built offline.html');
