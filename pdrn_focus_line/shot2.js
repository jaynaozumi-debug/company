const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
await p.goto('file://'+process.cwd()+'/all_in_one.html');await p.waitForLoadState('networkidle');await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:'all_in_one.png'});await b.close()})();
