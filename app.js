'use strict';
const english={
  skip:'Skip to content',brandSmall:'CHURCH OF CHRIST',navCommunity:'The community',navFaith:'Our faith',navVisit:'Your visit',navContact:'Say hello <span aria-hidden="true">↗</span>',
  heroLabel:'CHURCH OF CHRIST IN MADRID',heroTitle:'Together in Madrid.<br><em>United in Christ.</em>',heroDescription:'A community to know Jesus, learn from the Bible and share life. There is a place for you.',heroCta:'Join us this Sunday <span aria-hidden="true">↗</span>',heroMore:'Explore our faith <span aria-hidden="true">↓</span>',heroNote:'We meet every Sunday at <strong>10:30 a.m.</strong>.',photoCaption:'Our city. A shared journey.',stripWhen:'WHEN',stripTime:'Sundays, 10:30 a.m.',stripWhere:'WHERE',stripMetro:'BY METRO',
  welcomeLabel:'THE COMMUNITY',welcomeTitle:'A faith to live.<br>A life to share.',welcomeLead:'Amid the pace of Madrid, we gather to return to what matters: Jesus, His Word and love for our neighbors.',welcomeCopy:'We are Christians seeking to follow the Way of Jesus Christ and the example of the first-century church found in the New Testament. We want to grow in faith and encourage one another.',welcomeInvitation:'Whether you live here or are passing through, know the Bible or have your first questions, you are welcome.',welcomeCta:'Plan your first visit <span aria-hidden="true">↗</span>',
  faithLabel:'OUR FAITH',faithTitle:'Jesus at the center.<br>The Bible as our guide.',faithIntro:'We seek a faith rooted in Scripture and present in everyday life.',faith1Title:'Following Jesus',faith1Copy:'Knowing His life, listening to His teaching and learning to love as He loved us.',faith1Verse:'John 13:34-35 ↗',faith2Title:'Learning from the Word',faith2Copy:'Reading the Bible, asking questions and letting its message shape what we believe and how we live.',faith2Verse:'2 Timothy 3:16-17 ↗',faith3Title:'Walking together',faith3Copy:'Sharing faith, praying and encouraging one another to live with love, hope and good works.',faith3Verse:'Hebrews 10:24-25 ↗',wayCopy:'The book of Acts calls the faith followed by the first Christians “the Way.” That is the invitation we seek to live: following Jesus.',wayVerse:'Acts 24:14 ↗',
  visitLabel:'YOUR FIRST VISIT',visitTitle:'This Sunday,<br><em>meet us here.</em>',visitIntro:'You do not need all the answers. Come to listen, learn and get to know the community.',visitMaps:'Open Google Maps <span aria-hidden="true">↗</span>',visitCardLabel:'SUNDAY GATHERING',visitSunday:'every Sunday',visitAddress:'Local 2 · Madrid, Spain',visitEarly:'Worship begins at 10:30 a.m. You can arrive a few minutes early to meet us.',visitCall:'Questions? Call Ángel ↗',
  directionsLabel:'GETTING HERE',directionsTitle:'A Metro ride<br>away.',directionsIntro:'Follow these directions from the station to our meeting place.',route1Label:'MADRID METRO · LINE 2',route1Title:'Las Rosas station',route1Copy:'Take Line 2 and get off at Las Rosas.',route2Label:'LEAVING THE STATION',route2Title:'Use the elevator exit',route2Copy:'When you come out, go to the street behind the elevator.',route3Label:'OUR MEETING PLACE',route3Copy:'If you need help finding the premises, call Ángel on +34 660 00 76 73.',
  questionsLabel:'BEFORE YOU VISIT',qCatholic:'Is this a Catholic church?',aCatholic:'No. We are a Church of Christ: a community of Christians seeking to follow the Way of Jesus Christ and the teaching and practice of the first-century church, as recorded in the New Testament. The Bible is our guide. We respect our neighbors of other traditions.',questionsTitle:'There is room<br>for your questions.',q1:'Do I need to be a member to attend?',a1:'No. You can come to meet the community and learn with us, even if this is your first visit to a church.',q2:'Can I come if I do not know the Bible?',a2:'Yes. Bring your questions and a willingness to listen. You do not need any previous knowledge.',q3:'When and where do you meet?',a3:'Sunday worship begins at 10:30 a.m., Madrid local time, at Paseo de Ginebra 35, local 2. The Metro stop is Las Rosas, Line 2.',q4:'Is there information in English?',a4:'Yes. Use ES / EN to read this website in English. Contact Ángel to ask about the language of the gatherings or interpretation arrangements.',
  contactLabel:'SAY HELLO',contactTitle:'Your first visit<br>starts with a hello.',contactCopy:'If you need directions or want to know more before coming, get in touch with Ángel.',contactCall:'Call <span aria-hidden="true">↗</span>',contactWhatsapp:'Open WhatsApp <span aria-hidden="true">↗</span>',contactTime:'Sundays · 10:30 a.m. · Paseo de Ginebra 35, local 2',footerBrand:'Madrid Church of Christ<span>One community. A shared journey.</span>',footerTop:'Back to top ↑',footerAddress:'Paseo de Ginebra 35, local 2 · Madrid, Spain',photoCreditTitle:'Photo credit',photoCreditCopy:'City photograph, not our meeting place. Original retained; smaller responsive image copies, crop and color overlay shared under the same license.'
};
Object.assign(english,{
  "navWorship": "Our worship",
  "worshipLabel": "HOW WE WORSHIP",
  "worshipTitle": "Simple worship.<br>Guided by Scripture.",
  "worshipIntro": "Jesus teaches us to worship the Father in spirit and in truth. His words and the teaching and example of the first-century church guide how we worship together.",
  "worshipIntroVerse": "John 4:23-24 ↗",
  "worshipRead": "Select a Bible reference to read the passage in full.",
  "qWorship": "What happens during worship?",
  "aWorship": "We sing a cappella, pray, learn from Scripture, share the Lord’s Supper and give freely. Read <a href=\"#adoracion\">how we worship and the passages that guide us ↗</a>.",
  "worshipTeachingTitle": "Learning from Scripture",
  "worshipTeachingCopy": "The first Christians devoted themselves to the apostles’ teaching. We read and study the Bible so its message guides our faith and our lives, helping us grow together in our knowledge of God.",
  "worshipTeachingVerse1": "Acts 2:42 ↗",
  "worshipTeachingVerse2": "2 Timothy 3:16-17 ↗",
  "worshipPrayerTitle": "Praying together",
  "worshipPrayerCopy": "Prayer was part of the life of the first church. We thank God, bring our needs before Him and pray for one another, seeking a life of continual prayer.",
  "worshipPrayerVerse1": "Acts 2:42 ↗",
  "worshipPrayerVerse2": "1 Thessalonians 5:16-18 ↗",
  "worshipSingingTitle": "Singing from the heart",
  "worshipSingingCopy": "We sing together <strong>a cappella, without instruments</strong>. We seek to follow the New Testament teaching to praise God from the heart and to teach and encourage one another with psalms, hymns and spiritual songs.",
  "worshipSingingVerse1": "Ephesians 5:19 ↗",
  "worshipSingingVerse2": "Colossians 3:16 ↗",
  "worshipSupperTitle": "The Lord’s Supper",
  "worshipSupperCopy": "We share the Lord’s Supper <strong>each Sunday</strong>, following the example of the disciples who gathered on the first day of the week to break bread. With the bread and the cup, we remember Jesus’ sacrifice, proclaim His death and examine ourselves.",
  "worshipSupperVerse1": "Acts 20:7 ↗",
  "worshipSupperVerse2": "1 Corinthians 11:23-29 ↗",
  "worshipGivingTitle": "Giving freely and gladly",
  "worshipGivingCopy": "Paul instructed churches to set aside gifts on the first day of the week to help believers in need. His teaching guides our giving: a personal, generous choice made without pressure. <strong>Visitors are not expected to contribute.</strong>",
  "worshipGivingVerse1": "1 Corinthians 16:1-2 ↗",
  "worshipGivingVerse2": "2 Corinthians 9:6-7 ↗",
  "worshipEncouragementTitle": "Building one another up",
  "worshipEncouragementCopy": "We gather to encourage love and good works. We want worship to strengthen the community, with everything done respectfully and in order, for everyone’s encouragement.",
  "worshipEncouragementVerse1": "Hebrews 10:24-25 ↗",
  "worshipEncouragementVerse2": "1 Corinthians 14:26-40 ↗"
});
Object.assign(english,{welcomeCopy:english.welcomeCopy+" We are Madrid Church of Christ, meeting near Las Rosas Metro for worship and Bible study."});
const nodes=[...document.querySelectorAll('[data-i18n]')];
const spanish=Object.fromEntries(nodes.map(n=>[n.dataset.i18n,n.innerHTML]));
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
let language='es';
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');updateMenuLabel();}
function updateMenuLabel(){menu.setAttribute('aria-label',language==='en'?(menu.getAttribute('aria-expanded')==='true'?'Close menu':'Open menu'):(menu.getAttribute('aria-expanded')==='true'?'Cerrar menú':'Abrir menú'));}
function setLanguage(next){
  if(!['es','en'].includes(next))return;
  language=next;
  const dict=next==='en'?english:spanish;
  nodes.forEach(n=>{if(dict[n.dataset.i18n])n.innerHTML=dict[n.dataset.i18n];});
  document.documentElement.lang=next;
  document.querySelector('.brand').setAttribute('aria-label',next==='en'?'Madrid Church of Christ':'Iglesia de Cristo en Madrid');
  document.querySelector('.hero-photo img').alt=next==='en'?'Gran Vía in Madrid at sunset':'La Gran Vía de Madrid al atardecer';
  nav.setAttribute('aria-label',next==='en'?'Main navigation':'Navegación principal');
  document.querySelector('.meeting-strip').setAttribute('aria-label',next==='en'?'Gathering information':'Información de la reunión');
  document.querySelectorAll('[data-verse-es]').forEach(a=>{a.href='https://www.biblegateway.com/passage/?search='+a.dataset[next==='en'?'verseEn':'verseEs']+'&version='+(next==='en'?'KJV':'RVR1960');});
  updateMenuLabel();
  try{localStorage.setItem('idc-madrid-language',next);}catch{}
}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));updateMenuLabel();});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
// Explicit, crawlable language URLs take precedence over browser storage.
const pageLanguage=document.documentElement.lang;
const requested=new URLSearchParams(location.search).get('lang');
if((requested==='es'||requested==='en')&&requested!==pageLanguage){
  const target=new URL(document.querySelector('link[hreflang="'+requested+'"]').href);
  target.hash=location.hash;
  location.replace(target.href);
}else setLanguage(pageLanguage);
