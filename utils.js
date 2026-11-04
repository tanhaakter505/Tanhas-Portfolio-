/* Shared helpers and global state */
if(!window.PORTFOLIO){document.getElementById('app').innerHTML='<p style="padding:2rem;font-family:sans-serif;line-height:1.6"><b>Could not load the portfolio data.</b><br>Extract the whole zip folder first, keep all its folders together (css, js, data, assets), then open <b>index.html</b>.</p>';throw new Error('data/data.js not found')}
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url=u=>/^(https?:|mailto:|tel:)/i.test(u||'')?u:'';
const ls={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const SECS=[['education','🎓','Education','Academic background & achievements'],['volunteering','🤝','Volunteering','Social work & service'],['hobbies','🎨','Hobbies','What I enjoy'],['extra','🏆','Extra Activities','Activities & achievements'],['projects','💻','Projects','Things I have built'],['connect','✉️','Connect With Me',''],['others','✨','Others','More about me']];
const App={S:structuredClone(window.PORTFOLIO),BASE:window.PORTFOLIO.v||1,admin:false,dirty:false,AO:{},T:{theme:'rose',mode:'auto',font:'Inter',fs:16,ts:100,bg:'',...ls.get('tp_set',{})}};
const ini=()=>App.S.p.name.split(/\s+/).filter(Boolean).map(w=>w[0]).join('').slice(0,2).toUpperCase()||'T';
function shrink(f,max){return new Promise(r=>{if(!f)return r(null);const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);r(c.toDataURL('image/jpeg',.8))};im.onerror=()=>r(null);im.src=fr.result};fr.readAsDataURL(f)})}
