const DATA=window.OX3K_DATA;
const LEVEL_COUNTS=window.OX3K_LEVEL_COUNTS;
const TX={"A1|a, an":["неопределённый артикль (один, какой-то)","I have a dog and an umbrella."],"A1|about":["о, про; около","We talked about the weather."],"A1|above":["над, выше","The picture is above the sofa."],"A1|across":["через, поперёк","He swam across the river."],"A1|action":["действие","The police took action quickly."],"A1|activity":["занятие, деятельность","Swimming is my favourite activity."],"A1|actor":["актёр","My brother wants to be an actor."],"A1|actress":["актриса","The actress won a big prize."],"A1|add":["добавлять","Add some sugar to your tea."],"A1|address":["адрес","What is your email address?"],"A1|adult":["взрослый","Tickets cost ten dollars for an adult."],"A1|advice":["совет","Can you give me some advice?"],"A1|afraid":["испуганный; бояться","She is afraid of spiders."],"A1|after":["после","We go home after school."],"A1|afternoon":["время после полудня","I usually rest in the afternoon."],"A1|again":["снова","Please say that again."],"A1|age":["возраст","What is your age?"],"A1|ago":["тому назад","I met him two years ago."],"A1|agree":["соглашаться","I agree with you."],"A1|air":["воздух","The air is fresh in the mountains."],"A1|airport":["аэропорт","The airport is far from the city."],"A1|all":["все, всё","All the students are here."],"A1|also":["также","She speaks English and also French."],"A1|always":["всегда","He always drinks coffee in the morning."],"A1|amazing":["удивительный","The view was amazing."],"A1|an":["неопределённый артикль (перед гласным звуком)","An hour is sixty minutes."],"A1|and":["и, а","I like tea and coffee."],"A1|angry":["сердитый","He was angry about the noise."],"A1|animal":["животное","A horse is a big animal."],"A1|another":["другой, ещё один","Can I have another cup of tea?"],"A1|answer":["ответ; отвечать","Do you know the answer?"],"A1|any":["какой-нибудь, любой","Do you have any questions?"],"A1|anyone":["кто-нибудь, любой","Is anyone at home?"],"A1|anything":["что-нибудь, всё что угодно","I can't see anything in the dark."],"A1|apartment":["квартира","They live in a small apartment."],"A1|apple":["яблоко","I eat an apple every day."],"A1|April":["апрель","My birthday is in April."],"A1|area":["район, область","This is a quiet area of the city."],"A1|arm":["рука (от плеча до кисти)","He broke his arm last year."],"A1|around":["вокруг, около","We walked around the lake."],"A1|arrive":["прибывать","The train arrives at six."],"A1|art":["искусство","She studies art at university."],"A1|article":["статья; предмет","I read an interesting article today."],"A1|artist":["художник","The artist painted a portrait."],"A1|as":["как; в качестве","He works as a teacher."],"A1|ask":["спрашивать, просить","Ask the teacher for help."],"A1|at":["в, на, у (место, время)","Meet me at the station at five."],"A1|August":["август","We go on holiday in August."],"A1|aunt":["тётя","My aunt lives in Spain."],"A1|autumn":["осень","Leaves fall in autumn."],"A1|away":["прочь, вдали","The shop is five minutes away."],"A1|baby":["ребёнок, младенец","The baby is sleeping."],"A1|back":["спина; назад","Please come back soon."],"A1|bad":["плохой","The weather is bad today."],"A1|bag":["сумка, пакет","She put the books in her bag."],"A1|ball":["мяч","The children play with a ball."],"A1|banana":["банан","I'd like a banana, please."],"A1|band":["группа, оркестр","My brother plays in a band."],"A1|bank (money)":["банк","I need to go to the bank."],"A1|bar":["бар","They met in a bar after work."],"A1|bath":["ванна; купание","I take a bath every evening."],"A1|bathroom":["ванная комната","The bathroom is on the left."],"A1|be":["быть","She is a doctor."],"A1|beach":["пляж","We walked along the beach."],"A1|beautiful":["красивый","What a beautiful garden!"],"A1|because":["потому что","I stayed home because I was ill."],"A1|because of":["из-за","We stayed in because of the rain."],"A1|become":["становиться","He wants to become a pilot."],"A1|bed":["кровать","I go to bed at eleven."],"A1|bedroom":["спальня","My bedroom is quite small."],"A1|beer":["пиво","He ordered a cold beer."],"A1|before":["перед, до","Wash your hands before dinner."],"A1|begin":["начинать(ся)","The film begins at eight."],"A1|beginning":["начало","I liked the beginning of the book."],"A1|behind":["позади, за","The cat is behind the door."],"A1|believe":["верить","I believe you."],"A1|below":["ниже, под","Please sign your name below."],"A1|best":["лучший","She is my best friend."],"A1|better":["лучше","This phone is better than my old one."],"A1|between":["между","The bank is between the shop and the cafe."],"A1|bicycle":["велосипед","He goes to work by bicycle."],"A1|big":["большой","They have a big house."],"A1|bike":["велосипед (разг.)","I ride my bike to school."],"A1|bill":["счёт","Can we have the bill, please?"],"A1|bird":["птица","A bird sat on the roof."],"A1|birthday":["день рождения","Happy birthday!"],"A1|black":["чёрный","She wore a black dress."],"A1|blog":["блог","He writes a travel blog."],"A1|blonde":["светловолосый","My sister has blonde hair."],"A1|blue":["синий, голубой","The sky is blue today."],"A1|boat":["лодка, судно","We crossed the lake by boat."],"A1|body":["тело","Exercise is good for your body."],"A1|book":["книга","I'm reading a good book."],"A1|boot":["ботинок, сапог","These boots are warm."],"A1|bored":["скучающий","I was bored during the lesson."],"A1|boring":["скучный","The film was really boring."],"A1|born":["рождённый","I was born in 1998."],"A1|both":["оба","Both of my parents are teachers."],"A1|bottle":["бутылка","He bought a bottle of water."],"A1|box":["коробка","The box is full of toys."],"A1|boy":["мальчик","The boy is playing football."],"A1|boyfriend":["парень, молодой человек","She introduced her boyfriend to us."],"A1|bread":["хлеб","I bought fresh bread."],"A1|break":["ломать; перерыв","Don't break the glass."],"A1|breakfast":["завтрак","I have breakfast at seven."],"A1|bring":["приносить","Please bring your passport."],"A1|brother":["брат","My brother is older than me."],"A1|brown":["коричневый","He has brown eyes."],"A1|build":["строить","They build houses here."],"A1|building":["здание","The building is very old."],"A1|bus":["автобус","I take the bus to work."],"A1|business":["бизнес, дело","She runs a small business."],"A1|busy":["занятой","I'm busy right now."],"A1|but":["но","I like tea, but I don't like coffee."],"A1|butter":["масло (сливочное)","Put some butter on the bread."],"A1|buy":["покупать","I want to buy a new phone."],"A1|by":["у, рядом; на (транспорте); к (сроку)","We travel by train."],"A1|bye":["пока","Bye, see you tomorrow!"],"A1|cafe":["кафе","Let's meet at the cafe."],"A1|cake":["торт, пирожное","She baked a chocolate cake."],"A1|call":["звонить; звонок","I'll call you tonight."],"A1|camera":["фотоаппарат, камера","He bought a new camera."],"A1|can1":["мочь, уметь","I can swim very well."],"A1|cannot":["не может, не умеет","I cannot come to the party."],"A1|capital":["столица","Paris is the capital of France."]};
const HINT={n:'Существительное — предмет, человек, место, идея: a book, the city.',noun:'Существительное — предмет, человек, место, идея.',v:'Глагол — действие или состояние: I work, she works, they worked.',adj:'Прилагательное — описывает существительное: a big house; также после be: it is big.',adv:'Наречие — как, когда, где происходит действие, либо усиливает слово: quickly, very, here.',prep:'Предлог — показывает место, время, направление, связь: in, on, at, with.',pron:'Местоимение — заменяет существительное: he, this, anything.',det:'Определитель — стоит перед существительным: this book, some water, my friend.',conj:'Союз — соединяет слова и предложения: and, but, because.',exclam:'Восклицание — отдельное слово-реакция: wow, hello, sorry.','modal v':'Модальный глагол — ставится перед обычным глаголом без to: can swim, must go.','auxiliary v':'Вспомогательный глагол — помогает строить времена, вопросы, отрицания: do you…?, I have seen.','indefinite article':'Неопределённый артикль: a/an перед исчисляемым существительным в ед. числе.','definite article':'Определённый артикль the — когда ясно, о каком предмете речь.','infinitive marker':'Частица to перед инфинитивом: want to go.',number:'Числительное — количество или порядок.'};
const LV=['A1','A2','B1','B2'],PER=25,LM={A1:'Начальный',A2:'Элементарный',B1:'Средний',B2:'Выше среднего'};
const ent=id=>{const r=DATA[id.slice(0,2)]?.[Number(id.slice(2))];return Array.isArray(r)?r:r?[r.en,r.pos,r.also]:['','', '']};
const record=id=>DATA[id.slice(0,2)]?.[Number(id.slice(2))]||null;
const loadedLevels=new Set(['A1']),levelPromises={};let searchIndex=null;
function loadLevel(level){
 if(DATA[level]?.length)return Promise.resolve(DATA[level]);
 if(levelPromises[level])return levelPromises[level];
 levelPromises[level]=fetch('./data/'+level+'.json').then(response=>{if(!response.ok)throw new Error('Не удалось загрузить уровень '+level);return response.json()}).then(records=>{if(!Array.isArray(records)||!records.length)throw new Error('Файл уровня пуст: '+level);DATA[level]=records;loadedLevels.add(level);return records}).catch(error=>{levelPromises[level]=null;throw error});
 return levelPromises[level]
}
async function ensureAllLevels(){await Promise.all(LV.map(loadLevel));buildSearchIndex()}
function buildSearchIndex(){if(searchIndex||LV.some(level=>!DATA[level]?.length))return;searchIndex=LV.flatMap(level=>DATA[level].map((item,i)=>{const id=level+i,senses=(item.senses||[]).flatMap(s=>[...(s.ru||[]),...(s.ex||[]).flatMap(x=>[x.en,x.ru])]).join(' '),forms=Object.values(item.forms||{}).flat().join(' ');return {id,text:normalizeSearch([item.en,item.lemma,senses,forms,translation(id).join(' ')].join(' '))}}))}

const StorageCore=window.OX3KStorageCore;
const LEGACY_MAP=window.OX3K_LEGACY_MAP;
const STABLE_TO_LEGACY=Object.fromEntries(Object.entries(LEGACY_MAP).map(([oldId,newId])=>[newId,oldId]));
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ICONS={
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 volume:'<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13"/>',
 slow:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5m4-1v5l3 2"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 repeat:'<path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.5M4 4v4.5h4.5"/><path d="M12 8v4l2.5 1.5"/>',
 award:'<circle cx="12" cy="8" r="5"/><path d="m8.2 12-1 9 4.8-2.8 4.8 2.8-1-9"/>',
 book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21Z"/><path d="M4 5.5v13A2.5 2.5 0 0 1 6.5 16H20"/>',
 flame:'<path d="M12 22a7 7 0 0 0 7-7c0-3.3-2.2-5.5-4.1-7.3.1 2.2-1 3.4-2 4.1C12.5 8 10.5 5.5 8 3 8 7 5 9.5 5 15a7 7 0 0 0 7 7Z"/><path d="M12 22a3.5 3.5 0 0 0 3.5-3.5c0-1.4-.9-2.6-2.2-3.7-.2 1.2-.8 1.8-1.5 2.3-.5-1.5-1.2-2.3-2-3.1-.4 1.8-1.3 2.7-1.3 4.5A3.5 3.5 0 0 0 12 22Z"/>',
 chevron:'<path d="m6 9 6 6 6-6"/>',
 close:'<path d="m18 6-12 12M6 6l12 12"/>',
 sparkle:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/>',
 play:'<path d="m8 5 11 7-11 7z"/>',
 pause:'<path d="M8 5h3v14H8zM15 5h3v14h-3z"/>',
 moon:'<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 system:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>'
};
function icon(name,className='icon'){return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||''}</svg>`}
const cloneState=s=>JSON.parse(JSON.stringify(s));
const EMPTY=()=>StorageCore.normalizeState({p:{},own:{}});
let S=EMPTY(),storageBlocked=false,storageWarning='',storageTimer=null,storageReady=false,storageDirty=0,storagePersistAsked=false;
let pendingImport=null,undoState=null,undoTimer=null,returnFocus=null;
const STORAGE_KEY='ox3k',BACKUP_KEY='ox3k_backups_v2',DB_NAME='ox3k-progress-v2';
const toStableId=id=>StorageCore.toStable(id)||id;
const toLegacyId=id=>StorageCore.toLegacy(id);
function saveLabel(text,failed=false){const el=$('#saveState');if(el){el.textContent=text;el.dataset.error=failed?'true':'false';el.setAttribute('aria-live','polite')}}
function readLocalProgress(){
 try{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return null;const parsed=StorageCore.parseStored(raw);if(parsed.state)return parsed.state;
   const q='ox3k_quarantine_'+Date.now();try{localStorage.setItem(q,raw);localStorage.removeItem(STORAGE_KEY);storageWarning='Найден повреждённый файл прогресса. Сохранена копия для восстановления.';return null}catch(e){storageBlocked=true;storageWarning='Не удалось прочитать или сохранить повреждённый прогресс. Экспортируй копии до новых изменений.';saveLabel('Нужна проверка хранилища',true);return null}
  }catch(err){storageWarning='Браузер не разрешил чтение локального хранилища.';return null}
}
function openProgressDB(){return new Promise((resolve,reject)=>{if(!('indexedDB'in window))return reject(new Error('IndexedDB unavailable'));const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains('progress'))db.createObjectStore('progress');if(!db.objectStoreNames.contains('snapshots'))db.createObjectStore('snapshots')};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error||new Error('IndexedDB open failed'))})}
async function idbRead(store,key){const db=await openProgressDB();return new Promise((resolve,reject)=>{const tx=db.transaction(store,'readonly'),req=tx.objectStore(store).get(key);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error||new Error('IndexedDB read failed'));tx.oncomplete=()=>db.close();tx.onerror=()=>{db.close();reject(tx.error||new Error('IndexedDB transaction failed'))}})}
async function idbWrite(store,key,value){const db=await openProgressDB();return new Promise((resolve,reject)=>{const tx=db.transaction(store,'readwrite');tx.objectStore(store).put(value,key);tx.oncomplete=()=>{db.close();resolve(true)};tx.onerror=()=>{const e=tx.error||new Error('IndexedDB write failed');db.close();reject(e)};tx.onabort=()=>{const e=tx.error||new Error('IndexedDB write aborted');db.close();reject(e)}})}
function readBackupLocal(){try{const v=JSON.parse(localStorage.getItem(BACKUP_KEY)||'[]');return Array.isArray(v)?v:[]}catch(e){return []}}
async function getBackupRing(){try{const ring=await idbRead('snapshots','ring');if(Array.isArray(ring))return ring}catch(e){}return readBackupLocal()}
async function putBackupRing(ring){const limited=ring.slice(0,10);let ok=false;try{await idbWrite('snapshots','ring',limited);ok=true}catch(e){}try{localStorage.setItem(BACKUP_KEY,JSON.stringify(limited));ok=true}catch(e){}return ok}
async function createBackup(reason='daily',dailyOnly=false){const ring=await getBackupRing(),now=Date.now();if(dailyOnly&&ring[0]&&now-ring[0].createdAt<86400000)return true;const copy={createdAt:now,reason,state:cloneState(S),counts:StorageCore.statusCounts(S)};ring.unshift(copy);return putBackupRing(ring)}
function askStoragePersist(){if(storagePersistAsked)return;storagePersistAsked=true;try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{})}catch(e){}}
async function initializeStorage(){
 const raw=getLegacyRaw(),hadLegacy=!!raw&&raw.schemaVersion!==2;const local=readLocalProgress();let durable=null;
 try{durable=await idbRead('progress','current');if(durable)durable=StorageCore.normalizeState(durable)}catch(e){}
 S=StorageCore.mergeStates(S,local,durable);
 if(!local&&!durable&&storageWarning){const ring=await getBackupRing();if(ring[0])S=StorageCore.normalizeState(ring[0].state)}
 storageReady=true;
 if((hadLegacy||(!durable&&local)||(!local&&!durable&&Object.keys(S.p).length))&&!storageBlocked){S.updatedAt=Date.now();await flushSave()}else if(!storageBlocked)saveLabel('Хранилище готово · изменения сохраняются автоматически');
 if(Object.keys(S.p).length)createBackup('daily',true).catch(()=>{});
 render();if(storageWarning)toast(storageWarning);maybeBackupReminder();
}
async function flushSave(){
 clearTimeout(storageTimer);storageTimer=null;if(storageBlocked){saveLabel('Не удалось сохранить — скачай копию',true);return false}
 let local=null;try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){try{local=StorageCore.normalizeState(JSON.parse(raw))}catch(e){const q='ox3k_quarantine_'+Date.now();try{localStorage.setItem(q,raw);localStorage.removeItem(STORAGE_KEY);storageWarning='Повреждённая копия перенесена в карантин.'}catch(x){storageBlocked=true;saveLabel('Не удалось сохранить — скачай копию',true);return false}}}}catch(e){}
 let durable=null;try{durable=await idbRead('progress','current');if(durable)durable=StorageCore.normalizeState(durable)}catch(e){}
 S=StorageCore.mergeStates(S,local,durable);S.schemaVersion=2;S.updatedAt=Date.now();
 const result=await StorageCore.writeWithFallback(cloneState(S),v=>idbWrite('progress','current',v),v=>localStorage.setItem(STORAGE_KEY,JSON.stringify(v)));
 if(result.ok){saveLabel('Сохранено ✓ '+new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'}));try{if(syncChannel)syncChannel.postMessage({type:'state',state:S})}catch(e){}return true}
 const quota=result.errors.some(e=>e&&(/quota/i.test(e.name||'')||/quota/i.test(e.message||'')));
 saveLabel(quota?'Хранилище заполнено — скачай копию':'Не удалось сохранить — скачай копию',true);return false
}
function save(){S.schemaVersion=2;S.updatedAt=Date.now();storageDirty++;askStoragePersist();saveLabel('Сохранение…');clearTimeout(storageTimer);storageTimer=setTimeout(()=>flushSave(),300)}
function status(id){const key=toStableId(id),v=S.p[key];return typeof v==='number'?v:(v&&Number(v.s))||0}
function statusRecord(id){return S.p[toStableId(id)]||null}
function applyStatus(id,value,markActivity=true){const key=toStableId(id),old=statusRecord(id),now=Date.now(),s=Number(value);if(![0,1,2].includes(s))return;let box=old?Number(old.box)||0:0;if(s===2)box=Math.min(6,box+1);else if(s===1)box=0;else box=0;const days=[0,1,3,7,14,30,60];if(s===0)delete S.p[key];else S.p[key]={s,t:now,box,due:now+days[box]*86400000};if(markActivity)touch();S.updatedAt=now}
function setStatus(id,value){applyStatus(id,value);save();updateStatusRow(id);refreshProgressOnly()}
function getLegacyRaw(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch(e){return null}}
let syncChannel=null;try{if('BroadcastChannel'in window){syncChannel=new BroadcastChannel('ox3k-sync-v2');syncChannel.onmessage=e=>{if(e.data&&e.data.type==='state'){const before=JSON.stringify(S.p);S=StorageCore.mergeStates(S,e.data.state);if(JSON.stringify(S.p)!==before){render();saveLabel('Синхронизировано ✓');save()}}}}}catch(e){}
window.addEventListener('storage',e=>{if(e.key!==STORAGE_KEY||!e.newValue)return;try{const remote=StorageCore.normalizeState(JSON.parse(e.newValue));S=StorageCore.mergeStates(S,remote);render()}catch(err){}});
function flushLocalSync(){if(!storageDirty||storageBlocked)return;try{const raw=localStorage.getItem(STORAGE_KEY);let other=null;if(raw){const parsed=StorageCore.parseStored(raw);if(parsed.state)other=parsed.state}S=StorageCore.mergeStates(S,other);S.schemaVersion=2;S.updatedAt=Date.now();localStorage.setItem(STORAGE_KEY,JSON.stringify(S))}catch(e){saveLabel('Не удалось сохранить — скачай копию',true)}}
window.addEventListener('pagehide',()=>{if(storageTimer){flushLocalSync();flushSave()}});document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&storageTimer){flushLocalSync();flushSave()}});
let filter='all';
const clean=t=>t.replace(/\(.*?\)/g,'').replace(/™/g,'').split(',')[0].replace(/(\D)\d+\b/g,'$1').replace(/\s+/g,' ').trim();
const HOMONYM_RU={
 'bank|money':'финансовое учреждение','bank|river':'берег реки',
 'kind|type':'тип; вид','kind|caring':'добрый; заботливый',
 'last|final':'последний; финальный','last|taking time':'длительный; продолжающийся',
 'light|from the sun/a lamp':'свет от солнца или лампы','light|not heavy':'не тяжёлый',
 'like|similar':'похожий; как','like|find sb/sth pleasant':'нравиться',
 'match|contest/correspond':'соревнование или соответствие',
 'second|next after the first':'следующий по порядку','second|unit of time':'единица времени',
 'bear|animal':'медведь','bear|deal with':'выносить; терпеть',
 'mine|belongs to me':'мой; принадлежащий мне','mine|hole in the ground':'шахта',
 'race|competition':'гонка; соревнование','race|of people':'раса',
 'rest|remaining part':'оставшаяся часть','rest|sleep/relax':'отдых; отдыхать',
 'rock|stone':'камень; скала','rock|music':'рок-музыка',
 'lie|tell a lie':'лгать','set|put':'поставить; положить','set|group':'набор; комплект',
 'stick|push into/attach':'воткнуть; прикрепить','stick|piece of wood':'палка'
};
function homonymLabel(text){const m=String(text||'').match(/\(([^)]+)\)/);if(!m)return '';const lemma=clean(text).toLowerCase().replace(/\d+$/,'');return HOMONYM_RU[lemma+'|'+m[1].toLowerCase()]||''}
function displayWord(text){return text==='a, an'?'a / an':clean(text)}
const wordKey=t=>clean(String(t||'')).toLowerCase().replace(/[’']/g,"'").replace(/[–—]/g,'-').trim();
const AUTO_TRANSLATION_KEY='ox3k_ru_cache_v1';
let RU_CACHE={},translationsLoading=true,ruLoadStarted=false;
try{RU_CACHE=JSON.parse(localStorage.getItem(AUTO_TRANSLATION_KEY)||'{}')||{}}catch(e){RU_CACHE={}}
const translation=id=>{
 const r=record(id),head=ent(id)[0],local=TX[id.slice(0,2)+'|'+head]||[],remote=RU_CACHE[wordKey(head)]||[];
 if(r?.senses?.length&&!r.review)return [r.senses.flatMap(s=>s.ru||[]).join('; '),r.senses[0]?.ex?.[0]?.en||''];
 if(local[0])return [local[0],local[1]||remote[1]||''];
 return remote;
};
function translationSource(id){
 const r=record(id),head=ent(id)[0];
 if(r?.senses?.length&&!r.review)return 'reviewed';
 if(TX[id.slice(0,2)+'|'+head]?.[0])return 'local';
 if(RU_CACHE[wordKey(head)]?.[0])return 'auto';
 return 'none';
}
function parseTranslationCSV(text){
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){const ch=text[i],next=text[i+1];if(ch==='"'&&quoted&&next==='"'){cell+='"';i++}else if(ch==='"'){quoted=!quoted}else if(ch===','&&!quoted){row.push(cell);cell=''}else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&next==='\n')i++;row.push(cell);if(row.some(x=>x.trim()))rows.push(row);row=[];cell=''}else cell+=ch}
 if(cell.length||row.length){row.push(cell);rows.push(row)}return rows
}
function refreshTranslationViews(){
 searchIndex=null;vocabCatalog=null;buildSearchIndex();
 const open=new Set(Array.from(document.querySelectorAll('#list .word-card[data-open="true"]')).map(x=>x.dataset.id)),y=window.scrollY||0;
 render();
 for(const id of open){const card=document.querySelector(`#list [data-id="${CSS.escape(id)}"]`);if(card){const body=card.querySelector('.word-body'),button=card.querySelector('.word-toggle');card.dataset.open='true';if(body)body.hidden=false;if(button)button.setAttribute('aria-expanded','true')}}
 if(window.scrollTo)window.scrollTo(0,y);
 if(document.body.dataset.page==='vocab')renderVocab();
}
async function loadSupplementTranslations(){
 if(ruLoadStarted)return;ruLoadStarted=true;translationsLoading=true;
 try{
  const response=await fetch('https://raw.githubusercontent.com/ascat41/Oxford3000_en-ru/main/oxford3000_vocabulary_with_collocations_and_definitions_datasets.csv',{cache:'force-cache'});
  if(!response.ok)throw new Error('HTTP '+response.status);
  const rows=parseTranslationCSV(await response.text()),header=rows.shift().map(x=>x.trim().toLowerCase()),wi=header.indexOf('word'),ri=header.indexOf('russian translation'),ei=header.indexOf('example sentence');
  if(wi<0||ri<0)throw new Error('Неожиданный формат словаря');
  const fresh={...RU_CACHE};
  for(const row of rows){const key=wordKey(row[wi]),ru=(row[ri]||'').trim(),example=(ei>=0?(row[ei]||'').trim():'');if(key&&ru&&!fresh[key])fresh[key]=[ru,example]}
  RU_CACHE=fresh;try{localStorage.setItem(AUTO_TRANSLATION_KEY,JSON.stringify(RU_CACHE))}catch(e){}
  translationsLoading=false;refreshTranslationViews();
  await ensureAllLevels();
  const total=LV.reduce((n,l)=>n+DATA[l].length,0),filled=LV.reduce((n,l)=>n+DATA[l].filter((w,i)=>!!translation(l+i)[0]).length,0);
  toast(`Автоперевод загружен: ${filled} из ${total} слов`);
 }catch(err){
  translationsLoading=false;refreshTranslationViews();
  if(!Object.keys(RU_CACHE).length)toast('Не удалось загрузить автоперевод. Проверь интернет и обнови страницу.');
  console.warn('Supplement translations unavailable:',err);
 }
}


const cur=()=>S.st[S.lvl]||0,nSt=l=>Math.ceil(LEVEL_COUNTS[l]/PER);
const normalizeSearch=s=>String(s||'').toLocaleLowerCase('ru-RU').replace(/ё/g,'е').normalize('NFKC');
let searchQuery='',listPage=0;const LIST_PAGE_SIZE=50;
function highlight(text){const raw=String(text||'');if(!searchQuery)return esc(raw);const folded=normalizeSearch(raw),i=folded.indexOf(searchQuery);if(i<0)return esc(raw);return esc(raw.slice(0,i))+'<mark>'+esc(raw.slice(i,i+searchQuery.length))+'</mark>'+esc(raw.slice(i+searchQuery.length))}
function todaySelection(){const now=Date.now(),all=LV.flatMap(l=>Array.from({length:LEVEL_COUNTS[l]},(_,i)=>l+i)),due=all.filter(id=>{const r=statusRecord(id);return status(id)>0&&r&&Number(r.due||0)<=now}).sort((a,b)=>(statusRecord(a)?.due||0)-(statusRecord(b)?.due||0)).slice(0,20),fresh=all.filter(id=>status(id)===0).slice(0,5);return {ids:[...due,...fresh],review:due.length,fresh:fresh.length}}
function stageIds(l,s){const a=[];for(let i=s*PER;i<Math.min((s+1)*PER,LEVEL_COUNTS[l]);i++)a.push(l+i);return a}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2200)}
const speechSupported=typeof window.speechSynthesis!=='undefined'&&typeof window.SpeechSynthesisUtterance==='function';
let VO=null,preferredVoice='';
function speechVoices(){return speechSupported?window.speechSynthesis.getVoices().filter(x=>/^en([-_]|$)/i.test(x.lang)):[]}
function voiceKey(v){return v?`${v.voiceURI||v.name}|${v.lang}`:''}
function pick(){if(!speechSupported)return;const v=speechVoices();VO=v.find(x=>voiceKey(x)===preferredVoice)||v.find(x=>/^en[-_]US/i.test(x.lang)&&/Google US|Samantha|Aria|Jenny|Ava|Allison|Zira|Alex|Natural/i.test(x.name))||v.find(x=>/^en[-_]US/i.test(x.lang))||v[0]||null}
function voiceOptions(){if(!speechSupported)return '<option value="">Озвучка браузера недоступна</option>';const voices=speechVoices();if(!voices.length)return '<option value="">Английские голоса загружаются…</option>';return `<option value="">Автоматический выбор</option>${voices.map(v=>`<option value="${esc(voiceKey(v))}" ${voiceKey(v)===preferredVoice?'selected':''}>${esc(v.name)} · ${esc(v.lang)}</option>`).join('')}`}
function setPreferredVoice(value){preferredVoice=value||'';pick();const status=$('#speechStatus');if(status)status.textContent=speechSupported?`Озвучка: ${VO?.name||'голос браузера'}.`:'Встроенная озвучка недоступна; кнопка звука откроет Oxford Dictionary.'}
if(speechSupported){pick();$('#speechStatus').textContent=VO?`Озвучка: ${VO.name}.`:'Будет выбран английский голос браузера.';window.speechSynthesis.onvoiceschanged=()=>{pick();const select=$('#voiceSelect');if(select)select.innerHTML=voiceOptions();const status=$('#speechStatus');if(status)status.textContent=VO?`Озвучка: ${VO.name}.`:'Будет выбран английский голос браузера.'}}else{$('#speechStatus').textContent='Встроенная озвучка недоступна; кнопка звука откроет Oxford Dictionary.';document.documentElement.dataset.speech='external'}
function speechText(text,type='word'){let value=String(text||'').replace(/™/g,'').replace(/(\D)\d+\b/g,'$1').replace(/\s+/g,' ').trim();if(type!=='example')value=value.replace(/\([^)]*\)/g,'').replace(/\s+/g,' ').trim();return value}
function openSpeechFallback(text,type='word'){
 const encoded=encodeURIComponent(speechText(text,type));
 const url=type==='example'?`https://youglish.com/pronounce/${encoded}/english/us`:`https://www.oxfordlearnersdictionaries.com/us/search/english/?q=${encoded}`;
 const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.style.display='none';document.body.appendChild(link);link.click();link.remove();
 toast(type==='example'?'Встроенная озвучка недоступна — открыл примеры произношения.':'Встроенная озвучка недоступна — открыл Oxford Dictionary.');
}
function speak(t,slow=false,type='word'){
 if(!speechSupported)return openSpeechFallback(t,type);
 window.speechSynthesis.cancel();const u=new window.SpeechSynthesisUtterance(speechText(t,type));u.lang=VO?.lang||'en-US';if(VO)u.voice=VO;u.rate=(slow||S.slow)?.65:.9;window.speechSynthesis.speak(u)
}
function touch(){const d=new Date(),f=x=>x.toISOString().slice(0,10),t=f(d);if(S.last===t)return;const y=new Date(d-864e5);S.streak=S.last===f(y)?S.streak+1:1;S.last=t}
function counts(){
 const c={rev:0,total:0,known:0};LV.forEach(l=>c[l]={k:0,r:0,st:Array(nSt(l)).fill(0)});
 for(const [stable,value] of Object.entries(S.p)){const id=toLegacyId(stable),l=id.slice(0,2),v=typeof value==='number'?value:value.s;if(!c[l])continue;const i=Number(id.slice(2));if(v===2){c[l].k++;c[l].st[Math.floor(i/PER)]++}else if(v===1){c[l].r++;c.rev++}}
 LV.forEach(l=>{c.total+=LEVEL_COUNTS[l];c.known+=c[l].k});return c
}

function detail(id,own=true){
 const [h,p,o]=ent(id),r=record(id),w=encodeURIComponent(clean(h)),sid=toStableId(id),userExamples=S.own[sid]||[],senses=r?.senses&&!r.review?r.senses:[],legacy=translation(id);
 const senseHtml=senses.length?senses.map(s=>`<section class="sense"><h4>${esc(s.pos)} · ${esc(s.level)}</h4><div class="sense-ru">${(s.ru||[]).map(x=>`<span>${esc(x)}</span>`).join(' · ')}</div><p>${esc(s.use||'')}</p>${(s.ex||[]).map(ex=>`<div class="example"><span lang="en">${esc(ex.en)}</span><span class="example-ru">${esc(ex.ru)}</span><button class="sound example-sound" data-a="sayExample" data-text="${esc(ex.en)}" aria-label="Озвучить пример">${icon('volume')}</button></div>`).join('')}</section>`).join(''):`${legacy[0]?`<div class="word-translation translation-fallback">${esc(legacy[0])}</div>`:''}${legacy[1]?`<h4>Пример</h4><div class="example"><span lang="en">${esc(legacy[1])}</span></div>`:''}<div class="muted">Подробное значение пока не подготовлено.</div>`;
 const forms=Object.entries(r?.forms||{}).filter(([,v])=>Array.isArray(v)?v.length:!!v).map(([k,v])=>`<div><b>${esc(k)}:</b> ${esc(Array.isArray(v)?v.join(', '):v)}</div>`).join('');
 const collocations=(r?.collocations||[]).map(x=>`<span class="collocation" lang="en">${esc(x)}</span>`).join(' · ');
 const notes=(r?.notes||[]).map(x=>`<div class="note">${esc(x)}</div>`).join('');
 const alt=(r?.alt||[]).map(x=>`<span lang="en">${esc(x)}</span>`).join(' · ');
 return `${senseHtml}${alt?`<h4>Вариант написания</h4><div>${alt}</div>`:''}${forms?`<h4>Формы</h4>${forms}`:''}${collocations?`<h4>Словосочетания</h4><div>${collocations}</div>`:''}${notes?`<h4>Обрати внимание</h4>${notes}`:''}${o&&!senses.length?`<div class="muted homonym-note">Также встречается: ${esc(o)}</div>`:''}${own?`<h4>Мои предложения</h4><div class="own">${userExamples.map((x,i)=>`<div class="example"><span lang="en">${esc(x)}</span><button class="btn small" data-a="delown" data-v="${i}" type="button">Удалить</button></div>`).join('')}</div><div class="add-row"><input placeholder="Составь своё предложение…"><button class="btn soft" data-a="addown" type="button" aria-label="Добавить предложение">＋</button></div>`:''}<h4>Полезные ссылки</h4><a target="_blank" rel="noopener" href="https://www.oxfordlearnersdictionaries.com/us/search/english/?q=${w}">Oxford Dictionary ↗</a><a target="_blank" rel="noopener" href="https://youglish.com/pronounce/${w}/english/us">YouGlish ↗</a><a target="_blank" rel="noopener" href="https://tatoeba.org/en/sentences/search?query=${w}&from=eng">Примеры ↗</a>`
}

function row(id){
 const [h,p]=ent(id),tx=translation(id),st=status(id),display=displayWord(h),context=homonymLabel(h);
 const translationText=tx[0]||(translationsLoading?'Загружаю перевод…':'Перевод пока недоступен офлайн');
 const autoBadge=translationSource(id)==='auto'?'<span class="translation-source auto">Автоперевод</span>':'';
 return `<article class="word-card" data-id="${id}" data-s="${st}" data-open="false"><div class="word-row"><button class="status" data-a="st" type="button" title="Изменить статус" aria-label="${st===2?'Статус: знаю':st===1?'Статус: повторить':'Статус: новое'}. Изменить">${st===2?'✓':st===1?'↻':'○'}</button><button class="word-toggle" data-a="toggle" type="button" aria-expanded="false" aria-controls="word-detail-${id}"><span class="word-main"><span class="word-title" lang="en">${highlight(display)}</span>${context?`<span class="word-meaning-label">${esc(context)}</span>`:''}<span class="word-translation">${highlight(translationText)}</span>${autoBadge}</span><span class="pos">${esc(p)}</span><span class="chevron" aria-hidden="true">${icon('chevron')}</span></button><button class="sound" data-a="say" type="button" title="Произношение" aria-label="Произнести ${esc(display)}">${icon('volume')}</button></div><div class="word-body" id="word-detail-${id}" hidden>${detail(id)}</div></article>`
}

let vocabPage=0,vocabMode='table',vocabFront='en',vocabItems=[],vocabCatalog=null;
function setPage(page){
 document.body.dataset.page=page;
 const activeAction=page==='study'?'pageStudy':'pageVocab';
 document.querySelectorAll('#pageTabs [data-a^="page"],.mobile-nav [data-a^="page"]').forEach(b=>{const active=b.dataset.a===activeAction;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
 $('#studyPage').hidden=page!=='study';
 $('#vocabPage').hidden=page!=='vocab';
 if(page==='vocab')ensureAllLevels().then(()=>renderVocab()).catch(()=>renderVocab());
 else render();
}
function openDictSetup(){
 const sections=LV.map(l=>{
  const n=nSt(l),checked=(l===S.lvl?cur():0);
  return `<fieldset class="dict-setup-level" data-v="${l}"><legend class="sr-only">${l} · ${LM[l]}</legend><label class="dict-setup-level-head"><input type="checkbox" data-dict-level="${l}"><span>${l} · ${LM[l]}</span><span class="muted level-count">${LEVEL_COUNTS[l].toLocaleString('ru-RU')} слов</span></label><div class="dict-setup-stages">${Array.from({length:n},(_,i)=>`<label class="dict-setup-stage"><input type="checkbox" data-dict-stage="${l+i}" ${l===S.lvl&&i===checked?'checked':''}><span>Этап ${i+1} · ${stageIds(l,i).length}</span></label>`).join('')}</div></fieldset>`;
 }).join('');
 $('#dlg').hidden=false;
 $('#dbody').innerHTML=`<div class="dialog-top"><div><strong id="dialogTitle">Настроить диктант</strong><div class="muted">Выбери этапы или целые уровни. Диктант может включать все выбранные слова.</div></div><button class="dialog-close" data-a="close" type="button" aria-label="Закрыть">${icon('close')}</button></div>
 <div class="settings-buttons"><button class="btn small" data-a="dictAll" type="button">Выбрать всё</button><button class="btn small" data-a="dictClear" type="button">Снять выбор</button></div>
 <div id="dictSetupSections">${sections}</div>
 <div class="dict-setup-footer"><div id="dictSelectedCount" class="muted" aria-live="polite">Выбрано: 0 слов</div><button class="btn primary" data-a="dictStart" type="button">Начать диктант ${icon('arrow')}</button></div>`;
 updateDictCount();
}
function updateDictCount(){
 const chosen=$$('#dbody [data-dict-stage]:checked'),n=chosen.length;
 const count=chosen.reduce((sum,x)=>{const l=x.dataset.dictStage.slice(0,2),stage=Number(x.dataset.dictStage.slice(2));return sum+stageIds(l,stage).length},0);
 const el=$('#dictSelectedCount');if(el)el.textContent=`Выбрано этапов: ${n} · слов: ${count.toLocaleString('ru-RU')}`;
}
function $$(sel){return Array.from(document.querySelectorAll(sel))}
async function startSelectedDict(){
 const selected=$$('#dbody [data-dict-stage]:checked').map(x=>x.dataset.dictStage);
 // Разворачиваем каждый выбранный этап во все его слова, а не в один ID этапа.
 const words=Array.from(new Set(selected.flatMap(key=>{
  const level=key.slice(0,2),stage=Number(key.slice(2));
  return stageIds(level,stage);
 })));
 if(!words.length)return toast('Сначала выбери хотя бы один этап');
 await ensureAllLevels();startDict(words);
}
function allVocabItems(){
 if(vocabCatalog)return vocabCatalog;
 const items=[];LV.forEach(l=>(DATA[l]||[]).forEach((w,i)=>{const id=l+i,entry=ent(id),r=record(id),senses=(r?.senses||[]).flatMap(s=>[...(s.ru||[]),...(s.ex||[]).map(x=>x.en)]).join(' '),forms=Object.values(r?.forms||{}).flat().join(' ');items.push({id,level:l,word:entry[0],pos:entry[1],translation:translation(id)[0]||'Перевод пока не добавлен',source:translationSource(id),search:normalizeSearch([entry[0],entry[1],translation(id)[0],senses,forms].join(' '))})}));
 return vocabCatalog=items;
}
function renderVocab(){
 const q=normalizeSearch($('#q')?.value||''),lev=$('#vocabLevel')?.value||'all';
 $('#clearSearch').hidden=!q;
 vocabItems=allVocabItems().filter(x=>(lev==='all'||x.level===lev)&&(!q||x.search.includes(q)));
 const pages=Math.max(1,Math.ceil(vocabItems.length/(vocabMode==='table'?50:24)));
 vocabPage=Math.min(vocabPage,pages-1);
 const size=vocabMode==='table'?50:24,shown=vocabItems.slice(vocabPage*size,(vocabPage+1)*size);
 $('#vocabMeta').textContent=`Найдено ${vocabItems.length.toLocaleString('ru-RU')} слов · страница ${vocabPage+1} из ${pages}`;
 $('#vocabContent').innerHTML=!shown.length?`<div class="empty"><strong>Ничего не найдено</strong><span>Измени запрос или выбери другой уровень.</span></div>`:vocabMode==='table'?`<div class="vocab-table-wrap"><table class="vocab-table"><thead><tr><th scope="col">English</th><th scope="col">Русский перевод</th><th scope="col">Уровень</th><th scope="col">Звук</th></tr></thead><tbody>${shown.map(x=>`<tr><td lang="en">${esc(displayWord(x.word))}</td><td>${esc(x.translation)}${x.source==='auto'?'<span class="translation-source auto">Автоперевод</span>':''}</td><td><span class="vocab-level-tag" data-v="${x.level}">${x.level}</span></td><td><button class="vocab-audio" data-a="vocabSay" data-v="${esc(x.id)}" type="button" aria-label="Произнести ${esc(displayWord(x.word))}">${icon('volume')}</button></td></tr>`).join('')}</tbody></table></div>`:
 `<div class="vocab-card-grid">${shown.map(x=>{const front=vocabFront==='en'?displayWord(x.word):x.translation,back=vocabFront==='en'?x.translation:displayWord(x.word);return `<button class="vocab-flip" type="button" aria-label="Перевернуть карточку: ${esc(displayWord(x.word))}" aria-pressed="false" data-word="${esc(x.word)}" data-level="${x.level}" data-a="flip"><span class="vocab-flip-inner"><span class="vocab-face front"><small>${vocabFront==='en'?'ENGLISH':'РУССКИЙ'} · ${x.level}</small><strong>${esc(front)}</strong>${x.source==='auto'?'<span class="translation-source auto">Автоперевод</span>':''}<small>Нажми, чтобы перевернуть</small></span><span class="vocab-face back"><small>${vocabFront==='en'?'РУССКИЙ':'ENGLISH'}</small><strong>${esc(back)}</strong><small>${esc(x.pos)}</small></span></span></button>`}).join('')}</div>`;
 $('#vocabPagination').innerHTML=`<button class="btn" data-a="vocabPrev" ${vocabPage===0?'disabled':''}>← Назад</button><span class="muted">${vocabPage+1} / ${pages}</span><button class="btn" data-a="vocabNext" ${vocabPage>=pages-1?'disabled':''}>Вперёд →</button>`;
 $('#vocabPage').querySelectorAll('[data-a="vocabTable"],[data-a="vocabCards"]').forEach(b=>{const active=(vocabMode==='table'&&b.dataset.a==='vocabTable')||(vocabMode==='cards'&&b.dataset.a==='vocabCards');b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 $('#vocabPage').querySelectorAll('[data-a="frontEnglish"],[data-a="frontRussian"]').forEach(b=>{const active=(vocabFront==='en'&&b.dataset.a==='frontEnglish')||(vocabFront==='ru'&&b.dataset.a==='frontRussian');b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
}

function render(){
 const q=normalizeSearch($('#q').value.trim()),c=counts(),l=S.lvl,s=cur(),today=S.mode==='today',todaySet=todaySelection(),ids=today?todaySet.ids:stageIds(l,s);searchQuery=q;
 document.body.dataset.l=l;
 const resolvedTheme=(S.theme==='system'||!S.theme)?(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):S.theme;
 document.documentElement.dataset.theme=resolvedTheme;
 document.documentElement.style.fontSize=`${16*Math.max(.9,Math.min(1.15,S.fontScale||1))}px`;
 const themeColor=document.querySelector('meta[name="theme-color"]');if(themeColor)themeColor.content=resolvedTheme==='dark'?'#111621':'#f4f5f9';
 $('#clearSearch').hidden=!q;
 const streak=S.streak?`${icon('flame')}<span>${S.streak} ${S.streak===1?'день':'дн.'}</span>`:'';
 $('#stk').innerHTML=streak;$('#streakSummary').innerHTML=streak?`${icon('flame')}<span>Серия ${S.streak} ${S.streak===1?'день':'дн.'}</span>`:'';
 const continueText=`Продолжить: ${l} · этап ${s+1}`;$('#continueLabel').textContent=continueText;$('#continueMobileLabel').textContent=continueText;
 $('#stats').innerHTML=`<div class="stat"><div class="stat-label">Всего слов</div><div class="stat-value">${c.total.toLocaleString('ru-RU')}</div></div><div class="stat"><div class="stat-label">Уже знаю</div><div class="stat-value">${c.known.toLocaleString('ru-RU')}</div></div><div class="stat"><div class="stat-label">На повторение</div><div class="stat-value">${c.rev.toLocaleString('ru-RU')}</div></div>`;
 $('#nav').innerHTML=LV.map(x=>{const p=Math.round(c[x].k/LEVEL_COUNTS[x]*100);return `<button class="level ${x===l?'active':''}" data-a="lvl" data-v="${x}" type="button" aria-pressed="${x===l}"><strong>${x}</strong><small>${LM[x]} · ${c[x].k}/${LEVEL_COUNTS[x]}</small><span class="mini-track" role="progressbar" aria-label="Знаю слов уровня ${x}" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></span></button>`}).join('');
 $('#stageTitle').textContent=`${l} · ${LM[l]} · этап ${s+1} из ${nSt(l)}`;
 $('#stageMeta').textContent=`Слова ${s*PER+1}–${s*PER+ids.length} · отмечено «знаю»: ${c[l].st[s]||0} из ${ids.length}`;
 const pct=Math.round((c[l].st[s]||0)/Math.max(1,stageIds(l,s).length)*100);$('#stagePct').textContent=pct+'%';$('#stageProgress').style.width=pct+'%';$('#stageProgress').parentElement.setAttribute('aria-valuenow',String(pct));
 $('#chips').innerHTML=c[l].st.map((n,i)=>`<button class="stage ${i===s?'active':''}" data-a="stg" data-v="${i}" type="button" title="Этап ${i+1}" ${i===s?'aria-current="step"':''}>${i+1}</button>`).join('');
 $('#filters').querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 let found=[];
 if(q){const index=searchIndex||LV.flatMap(lev=>(DATA[lev]||[]).map((e,i)=>({id:lev+i,text:normalizeSearch([ent(lev+i)[0],translation(lev+i).join(' '),(record(lev+i)?.senses||[]).flatMap(s=>[...(s.ru||[]),...(s.ex||[]).map(x=>x.en)]).join(' ')].join(' '))})));found=index.filter(x=>x.text.includes(q)).map(x=>x.id)}
 else found=ids.slice();
 if(filter!=='all')found=found.filter(id=>status(id)===Number(filter));
 const searching=!!q,pages=Math.max(1,Math.ceil(found.length/LIST_PAGE_SIZE));listPage=Math.min(listPage,pages-1);const visible=searching?found.slice(listPage*LIST_PAGE_SIZE,(listPage+1)*LIST_PAGE_SIZE):found;
 $('#wordCount').textContent=searching?`Найдено: ${found.length.toLocaleString('ru-RU')}`:today?`Сегодня: ${todaySet.review} на повторение · ${todaySet.fresh} новых`:`${found.length} слов`;
 $('#list').innerHTML=visible.length?visible.map(row).join(''):`<div class="empty"><strong>${searching?'Ничего не найдено':'В этой категории пока пусто'}</strong>${searching?'Попробуй другое слово или часть перевода.':'Выбери другой фильтр или перейди к следующему этапу.'}</div>`;
 $('#stagePanel').hidden=searching||today;$('#nav').hidden=searching||today;$('#nav').closest('.level-panel').hidden=searching||today;
 $('#pager').hidden=today&&!searching;
 $('#pager').innerHTML=searching?`<button class="btn" data-a="searchPrev" ${listPage===0?'disabled':''}>← Назад</button><span class="muted">Страница ${listPage+1} из ${pages}</span><button class="btn primary" data-a="searchNext" ${listPage>=pages-1?'disabled':''}>Дальше ${icon('arrow')}</button>`:`<button class="btn" data-a="pg" data-v="-1" ${l==='A1'&&!s?'disabled':''}>← Предыдущий этап</button><button class="btn primary" data-a="pg" data-v="1" ${l==='B2'&&s===nSt(l)-1?'disabled':''}>Следующий этап ${icon('arrow')}</button>`;
}
function go(l,s){S.lvl=l;S.st[l]=s;S.mode='stages';filter='all';listPage=0;save();if(DATA[l]?.length)render();else loadLevel(l).then(render).catch(()=>toast('Не удалось открыть уровень '+l))}
let SS=null,pendingCardIds=[];const cid=()=>SS.q[SS.i];
function closeDlg(){$('#dlg').hidden=true;if('speechSynthesis'in window)speechSynthesis.cancel();SS=null;pendingCardIds=[];if(returnFocus&&returnFocus.isConnected)returnFocus.focus();returnFocus=null;}
function openCardsSetup(ids){if(!ids.length)return toast('В этой подборке пока нет слов');pendingCardIds=[...ids];$('#dlg').hidden=false;$('#dbody').innerHTML=`<div class="dialog-top"><div><strong id="dialogTitle">Карточки</strong><div class="muted">Выбери длину короткого занятия. Если слов меньше, покажем все доступные.</div></div><button class="dialog-close" data-a="close" type="button" aria-label="Закрыть">${icon('close')}</button></div><div class="card-session-options"><button class="btn session-option" data-a="cardsStart" data-v="10" type="button"><strong>10 слов</strong><span>Короткое занятие</span></button><button class="btn session-option" data-a="cardsStart" data-v="20" type="button"><strong>20 слов</strong><span>Обычное занятие</span></button><button class="btn session-option" data-a="cardsStart" data-v="40" type="button"><strong>40 слов</strong><span>Длинное занятие</span></button></div><p class="muted">В занятии ${ids.length.toLocaleString('ru-RU')} ${ids.length===1?'доступное слово':'доступных слов'}.</p>`;$('#dbody').querySelector('[data-a="cardsStart"]')?.focus()}
function startCards(ids,limit=20){if(!ids.length)return toast('В этой подборке пока нет слов');const q=shuffle(ids).slice(0,Math.max(1,Number(limit)||20));SS={t:'c',q,i:0,k:0,r:0,missed:[],revealed:false,limit};$('#dlg').hidden=false;paintCard()}
function paintCard(){
 if(SS.i>=SS.q.length)return finishCards();
 const id=cid(),[word,pos]=ent(id),tx=translation(id),source=translationSource(id),r=record(id),sense=(r?.senses||[]).find(x=>(x.ru||[]).length),example=sense?.ex?.[0]||null,progress=Math.round((SS.i/SS.q.length)*100);
 $('#dbody').innerHTML=`<section class="session-screen" aria-labelledby="dialogTitle"><div class="session-topline"><span class="session-count" id="dialogTitle">Карточка ${SS.i+1} из ${SS.q.length}</span><button class="dialog-close" data-a="close" type="button" aria-label="Закрыть занятие">${icon('close')}</button></div><div class="session-track" role="progressbar" aria-label="Ход занятия" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><i style="width:${progress}%"></i></div><div class="session-audio"><button class="btn small" data-a="sayc" type="button">${icon('volume')} Слушать</button><button class="btn small" data-a="sayc2" type="button">${icon('slow')} Медленно</button></div><div class="session-card-area"><div class="study-flip ${SS.revealed?'is-flipped':''}" role="button" tabindex="0" data-a="flipCard" aria-pressed="${SS.revealed}" aria-label="${SS.revealed?'Скрыть перевод слова':'Показать перевод слова'} ${esc(displayWord(word))}"><div class="study-flip-inner"><div class="study-face front" aria-hidden="${SS.revealed}"><small>ENGLISH · ${id.slice(0,2)}</small><strong lang="en">${esc(displayWord(word))}</strong><span class="study-pos">${esc(pos)}</span><small>Вспомни перевод</small></div><div class="study-face back" aria-hidden="${!SS.revealed}"><small>РУССКИЙ ПЕРЕВОД</small><strong class="study-answer">${esc(tx[0]||'Перевод пока не добавлен')}</strong>${source==='auto'?'<span class="translation-source auto">Автоперевод</span>':''}${example?`<div class="study-detail"><b lang="en">${esc(example.en)}</b><br><span>${esc(example.ru||'')}</span></div>`:tx[1]?`<div class="study-detail"><b lang="en">${esc(tx[1])}</b></div>`:''}${r?.notes?.length?`<div class="study-detail">${esc(r.notes[0])}</div>`:''}</div></div></div><div class="session-controls">${SS.revealed?`<button class="btn repeat-answer" data-a="cardRepeat" type="button">${icon('repeat')} Повторить</button><button class="btn known-answer" data-a="cardKnow" type="button">${icon('check')} Знаю</button>`:`<button class="btn primary reveal-btn" data-a="flipCard" type="button">Показать перевод ${icon('arrow')}</button>`}</div><p class="keyboard-hint"><kbd>←</kbd> или <kbd>1</kbd> — повторить · <kbd>2</kbd>/<kbd>Space</kbd> — перевод · <kbd>→</kbd> или <kbd>3</kbd> — знаю · <kbd>S</kbd> — звук</p></section>`;
 if(!SS.revealed)speak(word);
}
function answerCard(known){if(!SS||SS.t!=='c')return;const id=cid();setStatus(id,known?2:1);if(known)SS.k++;else{SS.r++;SS.missed.push(id)}SS.i++;SS.revealed=false;paintCard()}
function finishCards(){const missed=SS.missed.length,known=SS.k,total=SS.q.length;$('#dbody').innerHTML=`<section class="finish-screen" aria-labelledby="dialogTitle">${icon('award')}<h2 id="dialogTitle">Занятие завершено</h2><p class="finish-score">Знаю: <b>${known}</b> из ${total} · повторить: <b>${missed}</b></p><div class="finish-actions">${missed?`<button class="btn primary" data-a="retryMissed" type="button">${icon('repeat')} Повторить ошибки (${missed})</button>`:''}<button class="btn" data-a="close" type="button">Завершить</button></div></section>`}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function startDict(ids){if(!ids.length)return toast('В этой подборке пока нет слов');SS={t:'d',q:shuffle(ids),i:0,ok:0,done:false,revealed:false};$('#dlg').hidden=false;paintDict()}
function paintDict(){
 if(SS.i>=SS.q.length)return finish(`Верно: ${SS.ok} из ${SS.q.length}`);
 SS.done=false;SS.revealed=false;
 const id=cid(),[word]=ent(id),tx=translation(id),meaning=tx[0]||'Перевод пока недоступен — можно открыть слово и проверить себя';
 $('#dbody').innerHTML=`<section class="session-screen" aria-labelledby="dialogTitle"><div class="dialog-top"><div><strong id="dialogTitle">Диктант ${SS.i+1} из ${SS.q.length}</strong><div class="muted">Послушай и напиши английское слово.</div></div><button class="dialog-close" data-a="close" type="button" aria-label="Закрыть диктант">${icon('close')}</button></div><div class="session-track" role="progressbar" aria-label="Ход диктанта" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(SS.i/SS.q.length*100)}"><i style="width:${Math.round(SS.i/SS.q.length*100)}%"></i></div><div class="dict-meaning"><small>ПОДСКАЗКА · ПЕРЕВОД</small><strong>${esc(meaning)}</strong>${translationSource(id)==='auto'?'<span class="translation-source auto">Автоперевод</span>':''}</div><div class="session-audio"><button class="btn small" data-a="sayc" type="button">${icon('volume')} Слушать</button><button class="btn small" data-a="sayc2" type="button">${icon('slow')} Медленно</button></div><div id="dictWord" class="dict-word-reveal" hidden>${esc(displayWord(word))}</div><button class="btn soft" data-a="dshow" id="dictRevealBtn" type="button">Показать английское слово</button><label class="sr-only" for="di">Введи услышанное английское слово</label><input id="di" class="dialog-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Напиши услышанное слово" aria-describedby="dictHelp"><p class="keyboard-hint" id="dictHelp">Нажми <kbd>Enter</kbd>, чтобы проверить ответ или перейти дальше.</p><div class="dialog-actions"><button class="btn" data-a="dskip" type="button">Не знаю</button><button class="btn primary" data-a="dcheck" type="button">Проверить</button></div><div id="fb" aria-live="polite"></div></section>`;
 $('#di').focus();speak(word);
}
function normalizeDictAnswer(value){return String(value||'').toLocaleLowerCase('en-US').normalize('NFKC').replace(/[’‘]/g,"'").replace(/[‐‑‒–—]/g,'-').replace(/\s+/g,' ').trim().replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi,'')}
function acceptedSpellings(id){
 const r=record(id),raw=String(ent(id)[0]||''),alt=Array.isArray(r?.alt)?r.alt:r?.alt?[r.alt]:[];
 return [...new Set([...raw.split(/[,;]\s*/),...alt.flatMap(x=>String(x||'').split(/[,;]\s*/))].map(x=>String(x).replace(/\([^)]*\)/g,'').replace(/™/g,'').trim()).filter(Boolean))];
}
function spellingDiff(typed,correct){
 const a=Array.from(String(typed||'')),b=Array.from(String(correct||'')),dp=Array.from({length:a.length+1},()=>new Uint16Array(b.length+1));
 for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)dp[i][j]=a[i]===b[j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
 const wrong=[],right=[];let i=0,j=0;
 while(i<a.length||j<b.length){if(i<a.length&&j<b.length&&a[i]===b[j]){wrong.push(esc(a[i]));right.push(esc(b[j]));i++;j++}else if(i<a.length&&(j===b.length||dp[i+1][j]>=dp[i][j+1]))wrong.push(`<b class="diff-wrong">${esc(a[i++])}</b>`);else right.push(`<b class="diff-correct">${esc(b[j++])}</b>`)}
 return `<div class="spelling-diff"><span><b>Твой ответ:</b> ${wrong.join('')||'—'}</span><span><b>Правильно:</b> ${right.join('')||'—'}</span></div>`;
}
function dcheck(skip){
 if(SS.done){SS.i++;return paintDict()}
 const id=cid(),answers=acceptedSpellings(id),expected=displayWord(ent(id)[0]),typed=$('#di').value,tx=translation(id),ok=!skip&&answers.some(x=>normalizeDictAnswer(x)===normalizeDictAnswer(typed));
 SS.done=true;if(ok)SS.ok++;setStatus(id,ok?2:1);
 $('#fb').innerHTML=`<div class="dict-feedback ${ok?'correct':'incorrect'}"><h3>${ok?'Верно':'Правильное написание'}</h3>${!ok?`${spellingDiff(typed,expected)}${answers.length>1?`<p>Также принимаются варианты: ${answers.slice(1).map(esc).join(', ')}</p>`:''}`:''}<p>${esc(tx[0]||'')}</p></div><div class="dialog-actions"><button class="btn" data-a="sayc" type="button">${icon('volume')} Послушать ещё раз</button>${!ok?`<button class="btn" data-a="dshow" type="button">Показать написание</button>`:''}</div>`;
 $('#dbody').querySelector('[data-a=dcheck]').textContent='Дальше';
 $('#dbody').querySelector('[data-a=dskip]').textContent='Следующее слово';
 $('#dbody').querySelector('[data-a=dcheck]').focus();
}
function finish(t){$('#dbody').innerHTML=`<section class="finish-screen" aria-labelledby="dialogTitle">${icon('award')}<h2 id="dialogTitle">${esc(t)}</h2><p class="finish-score">Диктант завершён</p><div class="finish-actions"><button class="btn primary" data-a="close" type="button">Завершить</button></div></section>`}
function toast(message,action=''){
 const e=$('#toast');e.replaceChildren(document.createTextNode(message));if(action){const b=document.createElement('button');b.type='button';b.className='btn small';b.dataset.a=action;b.textContent='Отменить';e.append(' ',b)}e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),action?12000:3000)
}
function updateStatusRow(id){const card=$(`#list [data-id="${CSS.escape(id)}"]`);if(!card)return;const s=status(id),button=card.querySelector('[data-a="st"]');card.dataset.s=String(s);if(button){button.textContent=s===2?'✓':s===1?'↻':'○';button.setAttribute('aria-label',s===2?'Статус: знаю. Изменить':s===1?'Статус: повторить. Изменить':'Статус: новое. Изменить')}}
function refreshProgressOnly(){
 render();
}
function revealUndo(before,message){undoState=before;clearTimeout(undoTimer);toast(message,'undo');undoTimer=setTimeout(()=>{undoState=null},12000)}
function undoLast(){if(!undoState)return;S=StorageCore.normalizeState(undoState);undoState=null;save();render();toast('Изменение отменено')}
async function bulkMarkKnown(){const ids=stageIds(S.lvl,cur());if(!window.confirm('Отметить все слова этапа как известные?'))return;const before=cloneState(S);if(!await createBackup('массовая отметка'))return toast('Не удалось создать резервную копию — операция отменена');for(const id of ids)applyStatus(id,2,false);touch();save();render();revealUndo(before,'Весь этап отмечен.');}
async function exportProgress(){const data=StorageCore.normalizeState(S),payload={schemaVersion:2,exportedAt:new Date().toISOString(),checksum:StorageCore.checksum(data),data};const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));a.href=url;a.download='oxford3000-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);try{localStorage.setItem('ox3k_last_export_v2',String(Date.now()))}catch(e){}toast('Резервная копия скачана')}
async function previewImport(file){try{const text=await file.text(),parsed=JSON.parse(text);pendingImport=StorageCore.validateImport(parsed);const from=StorageCore.statusCounts(pendingImport),now=StorageCore.statusCounts(S);$('#dlg').hidden=false;$('#dbody').innerHTML=`<div class="dialog-top"><div><strong id="dialogTitle">Проверка импорта</strong><div class="muted">Файл прошёл проверку структуры</div></div><button class="btn small" data-a="close">Закрыть ✕</button></div><div class="data-preview"><p>В файле: <b>${from.known}</b> знаю · <b>${from.review}</b> повторить</p><p>Сейчас: <b>${now.known}</b> знаю · <b>${now.review}</b> повторить</p></div><div class="dialog-actions"><button class="btn" data-a="impMerge">Объединить по дате изменения</button><button class="btn primary" data-a="impReplace">Заменить прогресс</button></div><p class="muted">Перед применением будет создана резервная копия. Старый JSON экспорт импортируется автоматически.</p>`;$('#dbody').querySelector('button')?.focus()}catch(err){toast(err.message||'Не удалось прочитать файл')}}
async function applyImport(replace){if(!pendingImport)return;const before=cloneState(S);if(!await createBackup('импорт'))return toast('Не удалось создать резервную копию — импорт отменён');S=replace?StorageCore.normalizeState(pendingImport):StorageCore.mergeStates(S,pendingImport);pendingImport=null;save();render();$('#dlg').hidden=true;revealUndo(before,replace?'Прогресс заменён.':'Прогресс объединён.')}
async function resetProgress(){const typed=window.prompt('Для сброса введи слово СБРОС.');if(typed!=='СБРОС')return;const before=cloneState(S);if(!await createBackup('сброс'))return toast('Не удалось создать резервную копию — сброс отменён');const fresh=EMPTY();fresh.theme=S.theme;fresh.slow=S.slow;fresh.fontScale=S.fontScale;S=fresh;save();render();revealUndo(before,'Прогресс сброшен.')}
async function restoreBackup(index){const ring=await getBackupRing(),backup=ring[index];if(!backup)return;const before=cloneState(S);if(!await createBackup('перед восстановлением'))return toast('Не удалось создать резервную копию');S=StorageCore.normalizeState(backup.state);save();render();revealUndo(before,'Копия восстановлена.')}
async function openDataPanel(){
 const ring=await getBackupRing(),backups=ring.map((b,i)=>`<div class="backup-row"><span><b>${new Date(b.createdAt).toLocaleString('ru-RU')}</b><small>${esc(b.reason||'резервная копия')} · знаю ${b.counts?.known??0} · повторить ${b.counts?.review??0}</small></span><button class="btn small" data-a="restoreBackup" data-v="${i}" type="button">Восстановить</button></div>`).join('')||'<p class="muted">Резервных копий пока нет.</p>';
 const theme=S.theme||'system';$('#dlg').hidden=false;
 $('#dbody').innerHTML=`<div class="dialog-top"><div><strong id="dialogTitle">Настройки и данные</strong><div class="muted">Прогресс хранится в этом браузере и объединяется между вкладками.</div></div><button class="dialog-close" data-a="close" type="button" aria-label="Закрыть настройки">${icon('close')}</button></div>
 <section class="dialog-section" aria-labelledby="settingsTitle"><h3 id="settingsTitle">Внешний вид и звук</h3><div class="settings-grid"><label class="settings-field" for="themeSelect"><span>Тема</span><select class="settings-select" id="themeSelect"><option value="system" ${theme==='system'?'selected':''}>Как на устройстве</option><option value="light" ${theme==='light'?'selected':''}>Светлая</option><option value="dark" ${theme==='dark'?'selected':''}>Тёмная</option></select></label><label class="settings-field" for="voiceSelect"><span>Голос произношения</span><select class="settings-select" id="voiceSelect" ${speechSupported?'':'disabled'}>${voiceOptions()}</select><small>${speechSupported?'Доступны установленные в браузере английские голоса. Выбор действует до перезагрузки страницы.':'Браузер не поддерживает синтез речи; кнопки звука открывают Oxford Dictionary.'}</small></label></div><div class="settings-field settings-font"><span>Размер текста</span><div class="settings-buttons"><button class="btn" data-a="fontDown" type="button" aria-label="Уменьшить размер текста">A−</button><button class="btn" data-a="fontUp" type="button" aria-label="Увеличить размер текста">A+</button><button class="btn" data-a="slow" type="button">${S.slow?icon('slow')+' Медленная речь включена':icon('slow')+' Включить медленную речь'}</button></div></div><p class="setting-feedback" id="voiceFeedback" aria-live="polite">${speechSupported?(VO?`Сейчас выбран голос: ${esc(VO.name)}.`:'Будет выбран английский голос браузера.'):'Для звука используется Oxford Dictionary.'}</p></section>
 <section class="dialog-section" aria-labelledby="dataTitle"><h3 id="dataTitle">Резервная копия</h3><p>Экспортируй прогресс, чтобы перенести его на другое устройство.</p><div class="settings-buttons"><button class="btn primary" data-a="exp" type="button">Скачать прогресс ${icon('arrow')}</button><button class="btn" data-a="imp" type="button">Импортировать JSON</button></div></section>
 <section class="dialog-section" aria-labelledby="backupTitle"><h3 id="backupTitle">Автоматические копии · последние 10</h3><div class="backup-list">${backups}</div></section>
 <section class="dialog-section danger-zone" aria-labelledby="resetTitle"><h3 id="resetTitle">Сбросить прогресс</h3><p>Отметки и личные примеры будут удалены после подтверждения. Перед сбросом создаётся резервная копия.</p><button class="btn danger" data-a="rst" type="button">Сбросить прогресс</button></section>`;
 $('#dbody').querySelector('[data-a="close"]')?.focus();
}
function maybeBackupReminder(){try{const last=Number(localStorage.getItem('ox3k_last_export_v2'))||0,month=Math.floor(Date.now()/2592000000),shown=Number(localStorage.getItem('ox3k_nudge_month_v2'));if(counts().known>50&&Date.now()-last>14*86400000&&shown!==month){localStorage.setItem('ox3k_nudge_month_v2',String(month));toast('Пора скачать резервную копию прогресса.')}}catch(e){}}
const ACT={
 st:(b,w,id)=>{setStatus(id,(status(id)+1)%3)},toggle:b=>{const card=b.closest('.word-card'),body=card.querySelector('.word-body'),open=body.hidden;body.hidden=!open;card.dataset.open=String(open);b.setAttribute('aria-expanded',String(open))},flip:b=>{const card=b.closest('.vocab-flip'),active=card.classList.toggle('flipped');card.setAttribute('aria-pressed',String(active))},flipCard:()=>{if(!SS||SS.t!=='c')return;SS.revealed=!SS.revealed;paintCard()},
 say:(b,w)=>speak(ent(w.dataset.id)[0]),sayExample:b=>speak(b.dataset.text,false,'example'),lvl:b=>go(b.dataset.v,S.st[b.dataset.v]||0),stg:b=>go(S.lvl,+b.dataset.v),
 pg:b=>{let l=S.lvl,s=cur()+Number(b.dataset.v);if(s<0){l=LV[LV.indexOf(l)-1];s=nSt(l)-1}else if(s>=nSt(l)){l=LV[LV.indexOf(l)+1];s=0}go(l,s)},
 cards:()=>openCardsSetup(stageIds(S.lvl,cur()).filter(id=>filter==='all'||status(id)===Number(filter))),cardsStart:b=>{const ids=pendingCardIds;pendingCardIds=[];startCards(ids,Number(b.dataset.v))},cardRepeat:()=>answerCard(false),cardKnow:()=>answerCard(true),retryMissed:()=>{const ids=[...SS.missed];startCards(ids,ids.length)},
 dict:()=>openDictSetup(),
 rev:()=>ensureAllLevels().then(()=>openCardsSetup(LV.flatMap(l=>Array.from({length:nSt(l)},(_,s)=>stageIds(l,s))).flat().filter(id=>status(id)===1))),modeToday:()=>ensureAllLevels().then(()=>{S.mode='today';save();render()}),modeStages:()=>{S.mode='stages';save();render()},
 allk:()=>bulkMarkKnown(),
 addown:(b,w,id)=>{const i=b.previousElementSibling,v=i.value.trim(),sid=toStableId(id);if(!v)return;(S.own[sid]=S.own[sid]||[]).push(v);save();w.querySelector('.word-body').innerHTML=detail(id,true)},
 delown:(b,w,id)=>{S.own[toStableId(id)].splice(+b.dataset.v,1);save();w.querySelector('.word-body').innerHTML=detail(id,true)},
 close:closeDlg,sayc:()=>SS?.t==='c'?speak(ent(cid())[0]):SS?.t==='d'?speak(ent(cid())[0]):null,sayc2:()=>SS&&speak(ent(cid())[0],true),
 pageStudy:()=>setPage('study'),pageVocab:()=>setPage('vocab'),
 dictAll:()=>{$$('#dbody [data-dict-stage]').forEach(x=>x.checked=true);$$('#dbody [data-dict-level]').forEach(x=>x.checked=true);updateDictCount()},
 dictClear:()=>{$$('#dbody [data-dict-stage],#dbody [data-dict-level]').forEach(x=>x.checked=false);updateDictCount()},
 dictStart:()=>startSelectedDict(),
 vocabTable:()=>{vocabMode='table';vocabPage=0;renderVocab()},vocabCards:()=>{vocabMode='cards';vocabPage=0;renderVocab()},
 frontEnglish:()=>{vocabFront='en';renderVocab()},frontRussian:()=>{vocabFront='ru';renderVocab()},
 searchPrev:()=>{listPage=Math.max(0,listPage-1);render()},searchNext:()=>{listPage++;render()},
 vocabPrev:()=>{vocabPage=Math.max(0,vocabPage-1);renderVocab()},vocabNext:()=>{vocabPage++;renderVocab()},
 vocabSay:(b)=>{const id=b.dataset.v;speak(ent(id)[0])},
 dcheck:()=>dcheck(false),dskip:()=>{if(SS&&SS.done){SS.i++;paintDict()}else dcheck(true)},
 dshow:()=>{const el=$('#dictWord'),btn=$('#dictRevealBtn');if(!el)return;SS.revealed=!SS.revealed;el.hidden=!SS.revealed;if(btn){btn.textContent=SS.revealed?'Скрыть английское слово':'Показать английское слово';btn.setAttribute('aria-expanded',String(SS.revealed))}},
 thm:()=>{const modes=['system','light','dark'];S.theme=modes[(modes.indexOf(S.theme||'system')+1)%modes.length];save();render();toast('Тема: '+({system:'как на устройстве',light:'светлая',dark:'тёмная'}[S.theme]))},
 fontDown:()=>{S.fontScale=Math.max(.9,+(S.fontScale||1)-.05);save();render();toast('Размер текста уменьшен')},
 fontUp:()=>{S.fontScale=Math.min(1.15,+(S.fontScale||1)+.05);save();render();toast('Размер текста увеличен')},
 exp:()=>exportProgress(),
 imp:()=>$('#fi').click(),data:()=>openDataPanel(),impMerge:()=>applyImport(false),impReplace:()=>applyImport(true),restoreBackup:b=>restoreBackup(Number(b.dataset.v)),undo:()=>undoLast(),slow:()=>{S.slow=!S.slow;save();openDataPanel()},
 rst:()=>resetProgress()
};
document.addEventListener('click',e=>{
 const f=e.target.closest('[data-filter]');
 if(f){e.preventDefault();filter=f.dataset.filter;listPage=0;render();return}
 const b=e.target.closest('[data-a]');if(!b||!ACT[b.dataset.a])return;
 e.preventDefault();const w=b.closest('.word-card');
 if($('#dlg').hidden&&['cards','dict','data'].includes(b.dataset.a))returnFocus=b;
 ACT[b.dataset.a](b,w,w&&w.dataset.id);
 if(b.closest('#moreMenu'))$('#moreMenu').removeAttribute('open');
 if(!$('#dlg').hidden&&['cards','dict'].includes(b.dataset.a))$('#dbody').querySelector('button,input,select,[tabindex="0"]')?.focus();
});
document.addEventListener('keydown',e=>{
 if(e.key==='Enter'&&e.target.id==='di'){ACT.dcheck();return}
 if(e.key==='Escape'&&!$('#dlg').hidden){closeDlg();return}
 if(!$('#dlg').hidden&&e.key==='Tab'){const items=Array.from($('#dbody').querySelectorAll('button,input,select,[tabindex="0"]')).filter(x=>!x.disabled);if(items.length){const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'&&undoState){e.preventDefault();undoLast();return}
 if(e.target.matches('.vocab-flip')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();ACT.flip(e.target);return}
 if(SS?.t==='c'&&!$('#dlg').hidden&&!['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)){
  if(e.key==='ArrowLeft'||e.key==='1'){e.preventDefault();answerCard(false);return}
  if(e.key==='ArrowRight'||e.key==='3'){e.preventDefault();answerCard(true);return}
  if(e.key==='2'||e.key===' '||e.key==='Enter'&&e.target.matches('.study-flip')){e.preventDefault();ACT.flipCard();return}
  if(e.key.toLowerCase()==='s'){e.preventDefault();speak(ent(cid())[0]);return}
 }
 if((e.key==='/'||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'))&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();$('#q').focus()}
});
document.addEventListener('change',e=>{
 if(e.target.id==='themeSelect'){S.theme=['system','light','dark'].includes(e.target.value)?e.target.value:'system';save();render();return}
 if(e.target.id==='voiceSelect'){setPreferredVoice(e.target.value);const feedback=$('#voiceFeedback');if(feedback)feedback.textContent=VO?`Сейчас выбран голос: ${VO.name} · ${VO.lang}.`:'Сейчас используется автоматический выбор английского голоса.';return}
 if(e.target.matches('[data-dict-level]')){
  const l=e.target.dataset.dictLevel;
  $$('#dbody [data-dict-stage]').filter(x=>x.dataset.dictStage.startsWith(l)).forEach(x=>x.checked=e.target.checked);
  updateDictCount();
 }
 if(e.target.matches('[data-dict-stage]')){
  const l=e.target.dataset.dictStage.slice(0,2),all=$$('#dbody [data-dict-stage]').filter(x=>x.dataset.dictStage.startsWith(l));
  const level=$(`#dbody [data-dict-level="${l}"]`);if(level)level.checked=all.every(x=>x.checked);
  updateDictCount();
 }
});
$('#vocabLevel').addEventListener('change',()=>{vocabPage=0;renderVocab()});
let queryTimer=null;$('#q').addEventListener('input',()=>{clearTimeout(queryTimer);listPage=0;vocabPage=0;queryTimer=setTimeout(()=>{if(document.body.dataset.page==='vocab'){if(LV.some(l=>!DATA[l]?.length))ensureAllLevels().then(renderVocab).catch(renderVocab);else renderVocab()}else if($('#q').value.trim())ensureAllLevels().then(render).catch(()=>render());else render()},150)});$('#clearSearch').addEventListener('click',()=>{$('#q').value='';listPage=0;vocabPage=0;if(document.body.dataset.page==='vocab')renderVocab();else render();$('#q').focus()});
$('#fi').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;previewImport(f).finally(()=>{e.target.value=''})});
$('#dlg').addEventListener('click',e=>{if(e.target===$('#dlg'))closeDlg()});
render();
initializeStorage().then(()=>setTimeout(()=>ensureAllLevels().then(()=>{buildSearchIndex();render()}).catch(()=>{}),0));
loadSupplementTranslations();
