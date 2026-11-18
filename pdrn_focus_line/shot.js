const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1080}});
for(const f of process.argv.slice(2)){await p.goto('file://'+process.cwd()+'/'+f);await p.waitForLoadState('networkidle');await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:f.replace('.html','.png')});}
await b.close()})();
