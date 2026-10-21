const IMG={r10:"images/r10.jpg",r11:"images/r11.jpg",r12:"images/r12.jpg",r13:"images/r13.jpg",r20:"images/r20.jpg",r21:"images/r21.jpg",r22:"images/r22.jpg",r23:"images/r23.jpg"};
const ic=p=>`<svg viewBox="0 0 24 24"><path d="${p}"/></svg>`;
const CATS=[["home","หน้าแรก","M12 3 2 12h3v9h5v-6h4v6h5v-9h3z"],["main","อาหารจานหลัก","M7 2v8c0 1.5 1 2.5 2 2.7V22h2V12.7c1-.2 2-1.2 2-2.7V2h-1.5v6H10V2H8.500v6H8.500V2zM17 2c-2 1-3 4-3 7 0 2 1 3 3 3v10h2V2z"],["noodle","ก๋วยเตี๋ยว","M3 11h18a9 9 0 0 1-18 0zm4-8 1 6H6.500L6 3zm5 0 .5 6h-2L10 3zm5-1-2 8h1.500L18 2z"],["order","อาหารตามสั่ง","M12 4a1.500 1.500 0 1 0 0-3 1.500 1.500 0 0 0 0 3zM2 19h20v2H2zm1-2a9 9 0 0 1 18 0z"],["drink","เครื่องดื่ม / ของหวาน","M5 5h13l-1.500 15H6.500zm2-3h10v2H7zm9 6h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v-2h3v-2h-3z"],["street","ของว่าง / สตรีทฟู้ด","M4 8l3-3 2 3 3-4 3 4 2-3 3 3v4a8 8 0 0 1-16 0zm-2 3 2 1v-3zm20 0-2 1v-3z"],["thai","ขนมไทย","M3 18h18v3H3zm2-2a7 7 0 0 1 14 0zm6-9h2v3h-2z"],["near","ร้านใกล้ฉัน","M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z"]];
const SH=[
{n:"ครัวป่าแดง",t:"อาหารตามสั่ง",c:["order"],r:4.8,v:"1.2k",d:"1.2 กม.",m:1200,i:"r10",e:"🐔",bg:"#ff7a12",menu:[["กะเพราหมูสับไข่ดาว",60],["ผัดซีอิ๊วหมู",60],["ข้าวไข่เจียวหมูสับ",50]]},
{n:"ก๋วยเตี๋ยวเรือป่าจันทร์",t:"ก๋วยเตี๋ยว",c:["noodle"],r:4.6,v:"892",d:"800 ม.",m:800,i:"r11",e:"🍜",bg:"#e8263a",menu:[["ก๋วยเตี๋ยวเรือหมู",45],["เส้นเล็กน้ำตก",50],["ลูกชิ้นเพิ่ม",15]]},
{n:"ไก่ทอดบ้านสวน",t:"อาหารจานหลัก",c:["main"],r:4.7,v:"654",d:"1.5 กม.",m:1500,i:"r12",e:"🐔",bg:"#ff9a1f",menu:[["ไก่ทอดสมุนไพร + ข้าวเหนียว",80],["ปีกไก่ทอด 5 ชิ้น",70],["น้ำจิ้มแจ่ว",10]]},
{n:"แม่มณี ขนมไทย",t:"ขนมไทย",c:["thai"],r:4.5,v:"430",d:"950 ม.",m:950,i:"r13",e:"🌶️",bg:"#e8263a",menu:[["ข้าวเหนียวมะม่วง",90],["บัวลอยน้ำขิง",35],["ลอดช่องกะทิ",30]]},
{n:"ชานมไข่มุกคุณฝ้าย",t:"เครื่องดื่ม / ของหวาน",c:["drink"],r:4.7,v:"763",d:"1.8 กม.",m:1800,i:"r20",e:"🥤",bg:"#ffa94d",menu:[["ชานมไข่มุก",45],["ชาไทยเย็น",40],["เฉาก๊วยนมสด",35]]},
{n:"ส้มตำแม่เอ้อ",t:"อาหารอีสาน",c:["main"],r:4.5,v:"430",d:"950 ม.",m:950,i:"r21",e:"🌶️",bg:"#ff6a2b",menu:[["ส้มตำไทย",50],["ตำปูปลาร้า",55],["ไก่ย่าง + ข้าวเหนียว",70]]},
{n:"ครัวป่าล้อย",t:"อาหารใต้",c:["main"],r:4.6,v:"521",d:"2.1 กม.",m:2100,i:"r22",e:"🥘",bg:"#f5b400",menu:[["แกงเหลืองปลา",90],["คั่วกลิ้งหมู",70],["ผัดสะตอกุ้ง",120]]},
{n:"ปิ้งย่างลุงหนวด",t:"สตรีทฟู้ด",c:["street"],r:4.4,v:"378",d:"1.3 กม.",m:1300,i:"r23",e:"🍢",bg:"#ff6a2b",menu:[["หมูปิ้ง 5 ไม้",50],["ไส้กรอกอีสาน",40],["ข้าวเหนียว",10]]}];
let page="home",user=null,cart=[],shop=null;
try{user=JSON.parse(localStorage.getItem("lf_user")||"null")}catch(e){}
const $=s=>document.getElementById(s);
function go(p,all){page=p;$("q").value="";render();scrollTo(0,0)}
function render(){
 $("nav").innerHTML=CATS.map(c=>`<a class="${c[0]==page?"on":""}" onclick="go('${c[0]}')">${ic(c[2])}<span>${c[1]}</span></a>`).join("");
 const q=$("q").value.trim();let l=SH.slice();
 if(page=="near")l.sort((a,b)=>a.m-b.m);else if(page!="home")l=l.filter(s=>s.c.includes(page));
 if(q)l=l.filter(s=>(s.n+s.t+s.menu.map(m=>m[0]).join()).includes(q));
 const cn=CATS.find(c=>c[0]==page)[1];
 $("ttl").textContent=page=="home"?"🔥 ร้านค้าแนะนำ":cn;
 $("grid").innerHTML=l.map(s=>`<div class="card"><span class="fv" onclick="fav(${SH.indexOf(s)})">${favs.includes(SH.indexOf(s))?"❤️":"🤍"}</span><img src="${IMG[s.i]}" alt=""><div class="in"><div class="ic" style="background:${s.bg}">${s.e}</div><div><b>${s.n}</b><span>${s.t}</span><div class="meta"><span><i>★</i> ${s.r} (${s.v})</span><span>📍 ${s.d}</span></div></div></div><button class="btn" onclick="openShop(${SH.indexOf(s)})">ดูรายละเอียด ›</button></div>`).join("")||'<div class="empty">ไม่พบร้านที่ค้นหา</div>';
 renderAuth();
}
function renderAuth(){
 $("auth").innerHTML=user?`<button class="acc" onclick="event.stopPropagation();$('um').classList.toggle('on')"><span class="av">👤</span>${user.name} ⌄<div class="menu" id="um"><div onclick="openOrders()">📦 ออเดอร์ของฉัน</div><div onclick="openFavs()">❤️ ร้านโปรด</div><div onclick="openCart()">🛒 ตะกร้า</div><div onclick="logout()">ออกจากระบบ</div></div></button>`:`<button class="reg" onclick="openReg()">ลงทะเบียน</button>`;
}
function show(h){$("md").innerHTML='<button class="x" onclick="closeM()">×</button>'+h;$("ov").classList.add("on")}
function closeM(){$("ov").classList.remove("on")}
$("ov").onclick=e=>{if(e.target.id=="ov")closeM()};
document.onclick=()=>{const m=$("um");m&&m.classList.remove("on")};
function openReg(){show(`<h3>ลงทะเบียน</h3><input id="rn" placeholder="ชื่อ"><input id="re" type="email" placeholder="อีเมล"><input id="rp" type="password" placeholder="รหัสผ่าน (6 ตัวขึ้นไป)"><input id="rt" placeholder="เบอร์โทร"><button class="pri" onclick="doReg()">ลงทะเบียน</button><p class="note">เมื่อลงทะเบียนแล้วจะสามารถชำระเงินได้</p>`)}
function doReg(){const n=$("rn").value.trim(),e=$("re").value.trim(),p=$("rp").value;
 if(!n||!/\S+@\S+\.\S+/.test(e)||p.length<6){alert("กรุณากรอกชื่อ อีเมล และรหัสผ่าน (6 ตัวขึ้นไป) ให้ถูกต้อง");return}
 user={name:n,email:e};try{localStorage.setItem("lf_user",JSON.stringify(user))}catch(x){}
 closeM();renderAuth();if(cart.length)openCart()}
function logout(){user=null;try{localStorage.removeItem("lf_user")}catch(e){}renderAuth()}
function openShop(i){shop=i;const s=SH[i];
 show(`<h3>${s.n}</h3><img src="${IMG[s.i]}" style="width:100%;height:150px;object-fit:cover;border-radius:12px;margin-bottom:8px" alt=""><div style="color:var(--mu);margin-bottom:6px">${s.t} · ★ ${s.r} (${s.v}) · 📍 ${s.d}</div>`+s.menu.map((m,j)=>`<div class="mi"><span>${m[0]}<br><small style="color:var(--o)">฿${m[1]}</small></span><button class="btn" style="margin:0" onclick="add(${i},${j})">+ เพิ่ม</button></div>`).join("")+`<button class="pri" style="margin-top:16px" onclick="openCart()">ดูตะกร้า (${cart.reduce((a,b)=>a+b.q,0)})</button>`)}
function add(i,j){const m=SH[i].menu[j],k=SH[i].n+m[0],x=cart.find(c=>c.k==k);x?x.q++:cart.push({k,n:m[0],s:SH[i].n,p:m[1],q:1});openShop(i)}
function chg(k,d){const x=cart.find(c=>c.k==k);x.q+=d;if(x.q<=0)cart=cart.filter(c=>c!=x);openCart()}
let cp=0;const sub=()=>cart.reduce((a,b)=>a+b.p*b.q,0),fee=()=>cart.length?20:0,disc=()=>Math.round(sub()*cp),tot=()=>sub()+fee()-disc();
function openCart(){renderAuth();
 if(!cart.length){show('<h3>ตะกร้าของฉัน</h3><div class="empty">ยังไม่มีสินค้า กด “ดูรายละเอียด” ที่ร้านเพื่อเลือกเมนู</div>');return}
 show(`<h3>ตะกร้าของฉัน</h3>`+cart.map(c=>`<div class="mi"><span>${c.n}<br><small style="color:var(--mu)">${c.s} · ฿${c.p}</small></span><span class="q"><button onclick="chg('${c.k}',-1)">−</button>${c.q}<button onclick="chg('${c.k}',1)">+</button></span></div>`).join("")+`<div class="mi" style="border:0"><input id="cpn" placeholder="โค้ดส่วนลด (ลอง LOCAL10)" style="margin:0;flex:1"><button class="btn" style="margin:0 0 0 8px" onclick="coupon()">ใช้โค้ด</button></div><div class="mi"><span>ค่าอาหาร</span><span>฿${sub()}</span></div><div class="mi"><span>ค่าจัดส่ง</span><span>฿${fee()}</span></div>${cp?`<div class="mi" style="color:#2bb673"><span>ส่วนลด 10%</span><span>-฿${disc()}</span></div>`:""}<div class="tot"><span>รวม</span><span>฿${tot()}</span></div><button class="pri" onclick="checkout()">ชำระเงิน</button>`+(user?"":'<p class="note">ต้องลงทะเบียนก่อนจึงจะชำระเงินได้</p>'))}
function checkout(){if(!user){openReg();return}
 show(`<h3>ชำระเงิน</h3><div class="pay"><label><input type="radio" name="pm" value="qr" checked onchange="pm()">QR พร้อมเพย์</label><label><input type="radio" name="pm" value="card" onchange="pm()">บัตรเครดิต</label><label><input type="radio" name="pm" value="cod" onchange="pm()">เงินสดปลายทาง</label></div><div id="pb"></div><div class="tot"><span>ยอดชำระ</span><span>฿${tot()}</span></div><button class="pri" onclick="done()">ยืนยันการชำระเงิน</button><p class="note">* ระบบจำลอง ไม่มีการตัดเงินจริง</p>`);pm()}
function pm(){const v=document.querySelector('[name=pm]:checked').value;let h="";
 if(v=="qr"){let s="";for(let i=0;i<21;i++)for(let j=0;j<21;j++){const f=(i<7&&j<7)||(i<7&&j>13)||(i>13&&j<7);if(f?(i%6==0||j%6==0||i%6==6||(i%6>1&&i%6<5&&j%6>1&&j%6<5)||(((i>13?i-14:i)>1&&(i>13?i-14:i)<5)&&((j>13?j-14:j)>1&&(j>13?j-14:j)<5))):((i*7+j*13+i*j)%5<2))s+=`<rect x="${j*8}" y="${i*8}" width="8" height="8"/>`}
  h=`<div style="text-align:center;margin-bottom:8px"><svg width="170" height="170" viewBox="0 0 168 168" style="background:#fff;padding:8px;border-radius:10px">${s}</svg><div style="color:var(--mu);font-size:14px">สแกนเพื่อชำระ ฿${tot()}</div></div>`}
 if(v=="card")h='<input placeholder="เลขบัตร 16 หลัก" maxlength="19"><div style="display:flex;gap:8px"><input placeholder="MM/YY"><input placeholder="CVV" maxlength="3"></div>';
 if(v=="cod")h='<input placeholder="ที่อยู่จัดส่ง"><div style="color:var(--mu);font-size:14px;margin-bottom:8px">ชำระเงินสดเมื่อได้รับอาหาร</div>';
 $("pb").innerHTML=h}
function done(){const n="LF"+Math.floor(100000+Math.random()*900000),t=tot();cart=[];renderAuth();
 show(`<div class="ok"><div class="c">✓</div><h3>ชำระเงินสำเร็จ</h3><p>ขอบคุณคุณ ${user.name}<br>หมายเลขคำสั่งซื้อ <b>${n}</b><br>ยอดรวม ฿${t}</p><button class="pri" onclick="closeM()">กลับหน้าแรก</button></div>`)}
// ===== ฟังก์ชันเพิ่มเติม: ติดตามออเดอร์ / แจ้งเตือน / ร้านโปรด / โค้ดส่วนลด =====
document.body.insertAdjacentHTML("beforeend",'<div id="tc"></div>');
let orders=[],notes=[],favs=[],tid=null;const STEP=10000;
try{orders=JSON.parse(localStorage.getItem("lf_orders")||"[]");notes=JSON.parse(localStorage.getItem("lf_notes")||"[]");favs=JSON.parse(localStorage.getItem("lf_favs")||"[]")}catch(e){}
const sv=()=>{try{localStorage.setItem("lf_orders",JSON.stringify(orders));localStorage.setItem("lf_notes",JSON.stringify(notes));localStorage.setItem("lf_favs",JSON.stringify(favs))}catch(e){}};
const ST=[["รับออเดอร์แล้ว","ร้านได้รับออเดอร์ของคุณแล้ว","📋"],["ร้านกำลังเตรียมอาหาร","พ่อครัวกำลังปรุงอาหารให้คุณ","👨‍🍳"],["ไรเดอร์รับอาหารแล้ว","ไรเดอร์กำลังออกเดินทางไปหาคุณ","🛵"],["กำลังจัดส่ง","ไรเดอร์ใกล้ถึงแล้ว เตรียมรับอาหารได้เลย","📍"],["จัดส่งสำเร็จ","ขอให้อร่อยกับมื้อนี้!","✅"]];
const RID=["สมชาย ใจดี","วิภา รักไว","ธนา เร็วจัด"];
const hm=t=>new Date(t).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"});
function toast(t,m){const d=document.createElement("div");d.className="toast";d.innerHTML=`<b>${t}</b>${m?`<br><small>${m}</small>`:""}`;$("tc").appendChild(d);setTimeout(()=>d.remove(),4500)}
function pushNote(o,s){notes.unshift({t:ST[s][0],m:ST[s][1]+" · ออเดอร์ "+o.id,e:ST[s][2],at:Date.now(),r:0});notes=notes.slice(0,30);toast(ST[s][2]+" "+ST[s][0],ST[s][1])}
const _ra=renderAuth;
renderAuth=function(){_ra();if(!user)return;const n=notes.filter(x=>!x.r).length,c=cart.reduce((a,b)=>a+b.q,0);
 $("auth").insertAdjacentHTML("afterbegin",`<span class="hb" onclick="openCart()">🛒${c?`<i>${c}</i>`:""}</span><span class="hb" onclick="openNotes()">🔔${n?`<i>${n}</i>`:""}</span>`)};
function coupon(){const v=$("cpn").value.trim().toUpperCase();if(v=="LOCAL10"){cp=.1;toast("ใช้โค้ดสำเร็จ","ลด 10%");openCart()}else toast("โค้ดไม่ถูกต้อง","ลองใช้ LOCAL10")}
function fav(i){favs=favs.includes(i)?favs.filter(x=>x!=i):[...favs,i];sv();render();toast(favs.includes(i)?"❤️ เพิ่มในร้านโปรดแล้ว":"ลบออกจากร้านโปรดแล้ว",SH[i].n)}
function openFavs(){show('<h3>ร้านโปรด</h3>'+(favs.length?favs.map(i=>`<div class="mi" style="cursor:pointer" onclick="openShop(${i})"><span>${SH[i].n}<br><small style="color:var(--mu)">${SH[i].t} · ★ ${SH[i].r}</small></span><span>›</span></div>`).join(""):'<div class="empty">ยังไม่มีร้านโปรด กดรูปหัวใจที่การ์ดร้านได้เลย</div>'))}
function done(){const o={id:"LF"+Math.floor(100000+Math.random()*900000),items:cart.map(c=>({...c})),total:tot(),at:Date.now(),st:0,rider:RID[Math.floor(Math.random()*3)],shop:cart[0].s};
 orders.unshift(o);cart=[];cp=0;pushNote(o,0);sv();renderAuth();trackOrder(o.id,1)}
function trackOrder(id,fresh){tid=id;const o=orders.find(x=>x.id==id);if(!o)return;
 show((fresh?'<div class="ok"><div class="c">✓</div></div>':"")+`<h3>${fresh?"ชำระเงินสำเร็จ · ":""}ติดตามออเดอร์ ${o.id}</h3><div style="color:var(--mu);font-size:14px">${o.shop} · ฿${o.total}${o.st<4?` · ถึงใน ~${(4-o.st)*8+3} นาที`:""}</div><div class="road"><i style="width:${o.st*25}%"></i><b style="left:${o.st*25}%">${o.st<2?"🍳":"🛵"}</b><em>🏠</em></div>`
 +ST.map((s,i)=>`<div class="stp ${i<=o.st?"d":""} ${i==o.st?"c":""}"><span>${i<=o.st?s[2]:"○"}</span><div><b>${s[0]}</b><small>${i<=o.st?s[1]:"รอดำเนินการ"}</small></div></div>`).join("")
 +(o.st>=2?`<div class="rider">🛵 ไรเดอร์ ${o.rider} · ☎️ 08x-xxx-xxxx</div>`:"")+'<button class="pri" style="margin-top:14px" onclick="closeM()">ปิด</button>')}
function openOrders(){show('<h3>ออเดอร์ของฉัน</h3>'+(orders.length?orders.map(o=>`<div class="mi" style="cursor:pointer" onclick="trackOrder('${o.id}',0)"><span><b>${o.id}</b> · ${o.shop}<br><small style="color:var(--mu)">${o.items.reduce((a,b)=>a+b.q,0)} รายการ · ฿${o.total} · ${hm(o.at)}</small></span><span style="color:${o.st>=4?"#2bb673":"var(--o)"};font-size:14px;text-align:right">${ST[o.st][0]} ›</span></div>`).join(""):'<div class="empty">ยังไม่มีออเดอร์</div>'))}
function openNotes(){show('<h3>การแจ้งเตือน</h3>'+(notes.length?notes.map(n=>`<div class="mi"><span>${n.e} <b>${n.t}</b><br><small style="color:var(--mu)">${n.m} · ${hm(n.at)}</small></span></div>`).join(""):'<div class="empty">ไม่มีการแจ้งเตือน</div>'));notes.forEach(n=>n.r=1);sv();renderAuth()}
setInterval(()=>{let ch=0;orders.forEach(o=>{const s=Math.min(4,Math.floor((Date.now()-o.at)/STEP));while(o.st<s){o.st++;pushNote(o,o.st);ch=1}});
 if(ch){sv();renderAuth();if($("ov").classList.contains("on")&&$("md").querySelector(".road")&&tid)trackOrder(tid,0)}},1000);

render();
