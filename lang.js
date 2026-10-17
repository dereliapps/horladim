(function(){
  var d=document.documentElement,lang='tr';
  try{lang=localStorage.getItem('hl_lang')||''}catch(e){}
  var h=(location.hash||'').replace('#','');
  if(h==='en'||h==='tr')lang=h;
  if(!lang)lang=((navigator.language||'tr').toLowerCase().indexOf('tr')===0)?'tr':'en';
  function set(l){
    d.setAttribute('data-lang',l);d.lang=l;
    try{localStorage.setItem('hl_lang',l)}catch(e){}
    var b=document.querySelectorAll('.lang button');
    for(var i=0;i<b.length;i++)b[i].className=(b[i].getAttribute('data-set')===l)?'on':'';
    var t=document.documentElement.getAttribute('data-title-'+l);if(t)document.title=t;
  }
  window.addEventListener('DOMContentLoaded',function(){
    var b=document.querySelectorAll('.lang button');
    for(var i=0;i<b.length;i++)b[i].addEventListener('click',function(){set(this.getAttribute('data-set'))});
    set(lang);
  });
  d.setAttribute('data-lang',lang);
})();
