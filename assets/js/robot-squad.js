window.CarboniumBuildSquad = function(){

  const STAR = '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2.2 6.3L21 9l-5 4.2L17.6 21 12 17.2 6.4 21 8 13.2 3 9l6.8-.7z"/></svg>';

  const SHIELD = '<svg width="34" height="38" viewBox="0 0 34 38"><path d="M17 3 L31 8 V19 C31 28 25 33 17 36 C9 33 3 28 3 19 V8 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M11 19 l4 4 l8-9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const BARS = '<svg width="34" height="30" viewBox="0 0 34 30"><rect x="3"  y="16" width="6" height="12" rx="1" fill="currentColor"/><rect x="13" y="9"  width="6" height="19" rx="1" fill="currentColor"/><rect x="23" y="3"  width="6" height="25" rx="1" fill="currentColor"/></svg>';

  const HOLO_BARS = '<svg viewBox="0 0 50 44"><g stroke="rgba(255,215,140,.85)" stroke-width="2" fill="none"><path d="M6 38 L16 26 L26 31 L44 12"/></g><g fill="rgba(255,215,140,.7)"><rect x="8"  y="30" width="5" height="9"/><rect x="18" y="24" width="5" height="15"/><rect x="28" y="27" width="5" height="12"/><rect x="38" y="16" width="5" height="23"/></g></svg>';

  const SPLATS = [
    ['#ff5cc0', 18, 22, 14], ['#9a6bff', 60, 40, 10], ['#5fc8ff', 30, 60, 9],
    ['#ffd27f', 70, 66, 7],  ['#ff5cc0', 48, 72, 6]
  ];

  /* ── extended SVGs ── */
  const CLOCK = '<svg class="clock" viewBox="0 0 40 40">' +
    '<circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="2"/>' +
    Array.from({length:12}, (_,i)=>{const a=i*30*Math.PI/180;return '<line x1="'+(20+15*Math.sin(a)).toFixed(1)+'" y1="'+(20-15*Math.cos(a)).toFixed(1)+'" x2="'+(20+17*Math.sin(a)).toFixed(1)+'" y2="'+(20-17*Math.cos(a)).toFixed(1)+'" stroke="currentColor" stroke-width="1.4"/>';}).join('') +
    '<g class="hr"><line x1="20" y1="20" x2="20" y2="11" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></g>' +
    '<g class="min"><line x1="20" y1="20" x2="20" y2="7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></g>' +
    '<circle cx="20" cy="20" r="2" fill="currentColor"/></svg>';

  const GALAXY = '<svg class="galaxy" viewBox="0 0 40 40"><defs><radialGradient id="gxc"><stop offset="0" stop-color="#cfe0ff"/><stop offset="0.4" stop-color="#5a7bd0"/><stop offset="1" stop-color="#0b1430"/></radialGradient></defs>' +
    '<circle cx="20" cy="20" r="19" fill="url(#gxc)"/>' +
    '<g class="rot">' +
      '<path d="M20 20 C26 14 30 18 28 24 C26 29 21 28 20 20" fill="none" stroke="#dbe6ff" stroke-width="1.2" opacity="0.8"/>' +
      '<path d="M20 20 C14 26 10 22 12 16 C14 11 19 12 20 20" fill="none" stroke="#bcd0ff" stroke-width="1.2" opacity="0.7"/>' +
      Array.from({length:14},()=>{const a=Math.random()*6.28,r=4+Math.random()*14;return '<circle cx="'+(20+r*Math.cos(a)).toFixed(1)+'" cy="'+(20+r*Math.sin(a)).toFixed(1)+'" r="'+(0.5+Math.random()).toFixed(1)+'" fill="#fff" opacity="'+(0.5+Math.random()*0.5).toFixed(2)+'"/>';}).join('') +
    '</g><circle cx="20" cy="20" r="2.4" fill="#fff"/></svg>';

  const SUNFACE = '<svg class="sunface" viewBox="0 0 40 40"><g class="rays">' +
    Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180;return '<line x1="'+(20+11*Math.sin(a)).toFixed(1)+'" y1="'+(20-11*Math.cos(a)).toFixed(1)+'" x2="'+(20+17*Math.sin(a)).toFixed(1)+'" y2="'+(20-17*Math.cos(a)).toFixed(1)+'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>';}).join('') +
    '</g><circle cx="20" cy="20" r="8" fill="currentColor"/><circle cx="20" cy="20" r="8" fill="none" stroke="#fff" stroke-width="1" opacity="0.6"/></svg>';

  const FLASK = '<svg width="28" height="32" viewBox="0 0 28 32"><path d="M11 3 L11 12 L4 26 A3 3 0 0 0 7 30 L21 30 A3 3 0 0 0 24 26 L17 12 L17 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M7.5 20 L20.5 20 L24 26 A3 3 0 0 1 21 30 L7 30 A3 3 0 0 1 4 26 Z" fill="currentColor" opacity="0.55"/><line x1="9" y1="3" x2="19" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="24" r="1.2" fill="#fff"/><circle cx="16" cy="26" r="1" fill="#fff"/></svg>';

  const BOLT = '<svg width="22" height="32" viewBox="0 0 22 32"><path d="M13 2 L3 18 L10 18 L8 30 L19 12 L12 12 Z" fill="currentColor" stroke="#fff" stroke-width="1" stroke-linejoin="round"/></svg>';

  const INFINITY = '<svg width="36" height="20" viewBox="0 0 36 20"><path d="M9 10 C9 4 3 4 3 10 C3 16 9 16 12 10 C15 4 21 4 21 10 C21 16 15 16 12 10 M21 10 C21 4 27 4 27 10 C27 16 21 16 18 10" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>';

  const RULER = '<svg width="100%" height="100%" viewBox="0 0 50 40"><path d="M5 38 L45 38 L5 6 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>' +
    Array.from({length:5},(_,i)=>'<line x1="'+(11+i*7)+'" y1="38" x2="'+(11+i*7)+'" y2="34" stroke="currentColor" stroke-width="1.2"/>').join('') + '</svg>';

  const HOLO_CUBE = '<svg viewBox="0 0 50 44"><g stroke="rgba(95,168,255,.9)" stroke-width="1.6" fill="rgba(95,168,255,.12)" stroke-linejoin="round">' +
    '<path d="M16 14 L34 14 L34 30 L16 30 Z"/><path d="M16 14 L22 8 L40 8 L34 14"/><path d="M34 14 L40 8 L40 24 L34 30"/></g></svg>';

  /* ── extended characters F–P ── */
  const CHARS2 = [
    { key:'time', name:'Tempus', role:'The Time Keeper',
      tag:'Every deadline, tracked to the millisecond. Time is now.',
      vars:{'--accent':'#d98a3a','--accent2':'#8a5a2c','--eye':'#ffcf9a','--glow':'rgba(210,138,58,.42)',
        '--b1':'#ffe6c6','--b2':'#cf9b5f','--b3':'#7e5226','--visor-bg':'radial-gradient(circle at 50% 26%,#3a2614,#1c1206 60%,#0e0903)',
        '--visor-ring':'rgba(217,138,58,.5)','--head-ar':'1.1','--torso-ar':'.8','--torso-w':'58%','--bob-delay':'0s'},
      classes:'reach', face:'clock' },

    { key:'ghost', name:'Wisp', role:'The Ghost',
      tag:'Half here, half elsewhere. Phasing between your tabs.',
      vars:{'--accent':'#7fe6ff','--accent2':'#3aa0c0','--eye':'#c9f6ff','--glow':'rgba(120,230,255,.4)',
        '--b1':'rgba(240,250,255,.75)','--b2':'rgba(200,235,250,.6)','--b3':'rgba(150,200,230,.5)',
        '--visor-bg':'radial-gradient(circle at 50% 26%,#16344a,#0a1c2c 60%,#06121c)','--visor-ring':'rgba(127,230,255,.5)',
        '--head-ar':'1.14','--torso-ar':'.82','--torso-w':'60%','--bob-delay':'-.6s'},
      classes:'surprised wave ghostbody', wrap:'ghostwrap', omouth:true, fx:['wisps'] },

    { key:'alch', name:'Mordin', role:'The Alchemist',
      tag:'Brews data into gold. Mostly. Results may bubble.',
      vars:{'--accent':'#ffce5a','--accent2':'#9a6bff','--eye':'#e2c6ff','--glow':'rgba(150,90,255,.44)',
        '--b1':'#f3ecff','--b2':'#d8c8f0','--b3':'#a98fce','--visor-bg':'radial-gradient(circle at 50% 26%,#2e1a52,#160a30 60%,#0c0420)',
        '--visor-ring':'rgba(255,206,90,.45)','--head-ar':'1.1','--torso-ar':'.82','--torso-w':'60%','--bob-delay':'-1.1s'},
      classes:'wide', topper:'wizard', chest:{type:'flask'}, smile:true, handOrbs:true, smoke:true },

    { key:'star', name:'Cosmo', role:'The Stargazer',
      tag:'Maps the noise into constellations. Forever looking up.',
      vars:{'--accent':'#9fc0ff','--accent2':'#4a6da3','--eye':'#cfe0ff','--glow':'rgba(90,130,220,.42)',
        '--b1':'#3a4d82','--b2':'#27376a','--b3':'#15224a','--visor-bg':'#05091a','--visor-ring':'rgba(159,192,255,.5)',
        '--head-ar':'1.12','--torso-ar':'.82','--torso-w':'60%','--bob-delay':'-.4s'},
      classes:'wave', topper:'dish', face:'galaxy', starBody:true, fx:['orbit'] },

    { key:'speed', name:'Dash', role:'The Speedster',
      tag:'Ships before you finish the ticket. Already three sprints ahead.',
      vars:{'--accent':'#ffe14a','--accent2':'#d9b800','--eye':'#fff3a0','--glow':'rgba(255,225,74,.42)',
        '--b1':'#ffffff','--b2':'#f4f0d8','--b3':'#cfc89a','--visor-bg':'radial-gradient(circle at 50% 26%,#3a3410,#1c1806 60%,#0e0c03)',
        '--visor-ring':'rgba(255,225,74,.5)','--head-ar':'1.1','--torso-ar':'.8','--torso-w':'58%','--bob-delay':'-.9s'},
      classes:'narrow sprint', lean:true, chest:{type:'bolt'}, fx:['speed'] },

    { key:'quantum', name:'Qubit', role:'The Quantum',
      tag:'In every state at once until you open the dashboard.',
      vars:{'--accent':'#5fe0ff','--accent2':'#9a6bff','--eye':'#bdfcff','--glow':'rgba(120,200,255,.42)',
        '--b1':'#ffffff','--b2':'#e6f0fb','--b3':'#aec4dc','--visor-bg':'radial-gradient(circle at 50% 26%,#16244a,#0a1430 60%,#060c20)',
        '--visor-ring':'rgba(95,224,255,.5)','--head-ar':'1.12','--torso-ar':'.82','--torso-w':'60%','--bob-delay':'-1s'},
      classes:'wave', wrap:'hue', face:'quantum', chest:{type:'infinity'}, ghostDup:true },

    { key:'glitch', name:'Null', role:'The Glitch',
      tag:'404: personality not found. Or maybe too much of it.',
      vars:{'--accent':'#ff3b6b','--accent2':'#28e0ff','--eye':'#ff6d9a','--glow':'rgba(255,59,107,.4)',
        '--b1':'#ffffff','--b2':'#e6e9f0','--b3':'#aeb6c6','--visor-bg':'radial-gradient(circle at 50% 26%,#1a1030,#0a0418 60%,#050210)',
        '--visor-ring':'rgba(40,224,255,.5)','--head-ar':'1.12','--torso-ar':'.82','--torso-w':'60%','--bob-delay':'-.25s'},
      classes:'wave glitchT', face:'error', glitch:true, fx:['pixels'] },

    { key:'arch', name:'Vector', role:'The Architect',
      tag:'Draws the blueprint, then builds the building inside it.',
      vars:{'--accent':'#5fa8ff','--accent2':'#2a6fdb','--eye':'#bce0ff','--glow':'rgba(95,168,255,.42)',
        '--b1':'#ffffff','--b2':'#e6eefb','--b3':'#aebfdc','--visor-bg':'radial-gradient(circle at 50% 26%,#10233f,#0a1830 60%,#060f20)',
        '--visor-ring':'rgba(95,168,255,.5)','--head-ar':'1.1','--torso-ar':'.82','--torso-w':'60%','--bob-delay':'-1.25s'},
      classes:'present wave', topper:'ruler', smile:true, grid:true, wire:true, holo:'cube' },

    { key:'phantom', name:'Umbra', role:'The Phantom',
      tag:'You never see it work. You only see it done.',
      vars:{'--accent':'#a06bff','--accent2':'#6a3bb0','--eye':'#c9a0ff','--glow':'rgba(160,107,255,.45)',
        '--b1':'#2a2438','--b2':'#181426','--b3':'#0c0a16','--visor-bg':'radial-gradient(circle at 50% 26%,#1a1030,#0a0418 60%,#050210)',
        '--visor-ring':'rgba(160,107,255,.5)','--head-ar':'1.12','--torso-ar':'.82','--torso-w':'60%','--bob-delay':'-.7s'},
      classes:'phantom', face:'slit', cloak:true },

    { key:'solar', name:'Helios', role:'The Solar',
      tag:'Powers the whole grid on optimism alone. Eternally on.',
      vars:{'--accent':'#ff8a3a','--accent2':'#e0560a','--eye':'#ffd9a0','--glow':'rgba(255,138,58,.46)',
        '--b1':'#fff4ea','--b2':'#ffcf9a','--b3':'#e08a4a','--visor-bg':'radial-gradient(circle at 50% 26%,#3a2410,#1c1206 60%,#0e0903)',
        '--visor-ring':'rgba(255,138,58,.5)','--head-ar':'1.1','--torso-ar':'.8','--torso-w':'58%','--bob-delay':'-1.4s'},
      classes:'wide', sunrays:true, face:'sun', fx:['heat'] }
  ];

  const CHARS = [
    {
      key: 'cmd', name: 'Vega', role: 'The Commander',
      tag: 'Mission control. Calls the shots, salutes nobody but the metric.',
      vars: { '--accent':'#7fd0ff', '--accent2':'#3f8fd0', '--eye':'#9fd6ff',
              '--glow':'rgba(80,160,255,.42)', '--b1':'#ffffff', '--b2':'#eaeef7', '--b3':'#bcc8dd',
              '--head-ar':'1.06', '--torso-ar':'.78', '--torso-w':'58%', '--bob-delay':'0s' },
      classes: 'salute', antenna: 'rod', chest: { type:'num', text:'01' }, smile: true
    },
    {
      key: 'hack', name: 'Byte', role: 'The Hacker',
      tag: 'Lives in the terminal. Speaks fluent regex and dark mode.',
      vars: { '--accent':'#48f0a0', '--accent2':'#1f9d63', '--eye':'#5dffb0',
              '--glow':'rgba(50,210,130,.42)', '--b1':'#ffffff', '--b2':'#e9eef4', '--b3':'#b6c0cf',
              '--visor-ring':'rgba(72,240,160,.5)',
              '--head-ar':'1.14', '--torso-ar':'.84', '--torso-w':'62%', '--bob-delay':'-.7s' },
      classes: 'typing', hoodie: true, eyeSmall: true,
      chest: { type:'code', text:'&lt;/&gt;' }, smile: false
    },
    {
      key: 'creative', name: 'Iris', role: 'The Creative',
      tag: 'Ideas on tap. Turns blank canvases into chaos, then magic.',
      vars: { '--accent':'#ff5cc0', '--accent2':'#9a6bff', '--eye':'#ffb3e6',
              '--glow':'rgba(220,90,210,.46)', '--b1':'#ffffff', '--b2':'#f1ecf6', '--b3':'#cdbfe0',
              '--visor-bg':'radial-gradient(circle at 50% 26%, #3a2a52, #1c1230 55%, #100820)',
              '--visor-ring':'rgba(255,92,192,.45)',
              '--head-ar':'1.18', '--torso-ar':'.82', '--torso-w':'60%', '--bob-delay':'-1.4s' },
      classes: 'point', tilt: -8, antenna: 'star', splat: true, smile: true
    },
    {
      key: 'guard', name: 'Atlas', role: 'The Guardian',
      tag: 'The wall. Nothing gets past without a signed permission slip.',
      vars: { '--accent':'#ff6a6a', '--accent2':'#c83030', '--eye':'#ffd0d0',
              '--glow':'rgba(190,60,60,.44)', '--b1':'#f3f5f8', '--b2':'#cdd3dc', '--b3':'#9aa3b1',
              '--visor-bg':'radial-gradient(circle at 50% 26%, #7a1f22, #3a0f12 60%, #200709)',
              '--visor-ring':'rgba(255,106,106,.55)',
              '--head-ar':'1.08', '--torso-ar':'.92', '--torso-w':'74%', '--neck-h':'8px',
              '--shadow-w':'56%', '--bob-delay':'-.35s' },
      classes: 'crossed', stocky: true, redEye: true,
      chest: { type:'shield' }, smile: false
    },
    {
      key: 'analyst', name: 'Lumen', role: 'The Analyst',
      tag: 'Reads the tea leaves in your dashboards. Always one chart ahead.',
      vars: { '--accent':'#ffce5a', '--accent2':'#d99b2a', '--eye':'#ffe6b0',
              '--glow':'rgba(255,200,110,.4)', '--b1':'#ffffff', '--b2':'#f3eee2', '--b3':'#cdc4ad',
              '--visor-ring':'rgba(255,206,90,.4)',
              '--head-ar':'1.1', '--torso-ar':'.78', '--torso-w':'54%', '--bob-delay':'-1.05s' },
      classes: 'present wave', monocle: true, chest: { type:'chart' }, smile: true
    }
  ];

  function buildChest(c) {
    if (!c.chest) return '';
    const ch = c.chest;
    if (ch.type === 'num')     return '<div class="chest num">'  + ch.text + '</div>';
    if (ch.type === 'code')    return '<div class="chest code">' + ch.text + '</div>';
    if (ch.type === 'shield')  return '<div class="chest">' + SHIELD + '</div>';
    if (ch.type === 'chart')   return '<div class="chest">' + BARS + '</div>';
    if (ch.type === 'flask')   return '<div class="chest">' + FLASK + '</div>';
    if (ch.type === 'bolt')    return '<div class="chest">' + BOLT + '</div>';
    if (ch.type === 'infinity')return '<div class="chest">' + INFINITY + '</div>';
    return '';
  }

  function buildAntenna(c) {
    if (c.antenna === 'rod')  return '<div class="antenna"><div class="rod"></div><div class="ball"></div></div>';
    if (c.antenna === 'star') return '<div class="antenna" style="color:var(--accent)">' + STAR + '</div>';
    return '';
  }

  function buildTopper(c) {
    if (c.topper === 'wizard') return '<div class="wizhat"><div class="tip">' + STAR + '</div><div class="cone"></div><div class="band"></div><div class="brim"></div></div>';
    if (c.topper === 'ruler')  return '<div class="ruler">' + RULER + '</div>';
    if (c.topper === 'dish')   return '<div class="dish"><div class="plate"><div class="feed"></div></div><div class="rod"></div></div>';
    return '';
  }

  function buildSplat(c) {
    if (!c.splat) return '';
    return SPLATS.map(s =>
      '<span class="splat" style="left:' + s[1] + '%;top:' + s[2] + '%;width:' + s[3] + 'px;height:' + s[3] + 'px;background:' + s[0] + ';opacity:.85"></span>'
    ).join('');
  }

  function buildFace(c) {
    if (c.face === 'clock')   return '<div class="visor">' + CLOCK + '</div>';
    if (c.face === 'galaxy')  return '<div class="visor">' + GALAXY + '</div>';
    if (c.face === 'sun')     return '<div class="visor">' + SUNFACE + '</div>';
    if (c.face === 'error')   return '<div class="visor"><div class="err">[!]</div></div>';
    if (c.face === 'slit')    return '<div class="visor"><div class="slit"></div></div>';
    if (c.face === 'quantum') {
      const dots = [[28,30],[58,26],[42,52],[64,56],[34,62]]
        .map((d,i)=>'<span class="qd" style="left:'+d[0]+'%;top:'+d[1]+'%;animation-delay:'+(i*0.25)+'s"></span>').join('');
      return '<div class="visor"><div class="qdots">' + dots + '</div></div>';
    }
    const eyeStyle = c.eyeSmall ? ' style="width:11%;height:24%"' : '';
    return '<div class="visor">' +
        '<div class="eyes">' +
          '<div class="eye l"' + eyeStyle + '></div>' +
          '<div class="eye r"' + eyeStyle + '></div>' +
          (c.smile ? '<div class="smile"></div>' : '') +
          (c.omouth ? '<div class="omouth"></div>' : '') +
        '</div>' +
        (c.monocle ? '<div class="monocle"></div>' : '') +
      '</div>';
  }

  function buildSkin(c) {
    if (!(c.starBody || c.script || c.grid || c.glitch || c.wire)) return '';
    let inner = '';
    if (c.grid)   inner += '<div class="grid-fx"></div>';
    if (c.wire)   inner += '<div class="wire-fx"></div>';
    if (c.script) inner += '<div class="script-fx">道&nbsp;気&nbsp;心</div>';
    if (c.glitch) inner += '<div class="glitch-fx"></div>';
    if (c.starBody) {
      const dots = Array.from({length:11}, () => {
        const x = (8 + Math.random()*84).toFixed(0), y = (8 + Math.random()*84).toFixed(0), r = (1 + Math.random()*1.6).toFixed(1);
        return '<span class="st" style="left:'+x+'%;top:'+y+'%;width:'+r+'px;height:'+r+'px"></span>';
      }).join('');
      inner += dots;
    }
    return '<div class="torso-skin">' + inner + '</div>';
  }

  function buildFX(c) {
    if (!c.fx) return '';
    let s = '';
    c.fx.forEach(f => {
      if (f === 'hourglass') {
        s += [[14,30],[80,40],[24,70],[74,72]].map((p,i)=>'<span class="hg" style="left:'+p[0]+'%;top:'+p[1]+'%;animation-delay:'+(i*0.6)+'s"><svg width="14" height="16" viewBox="0 0 14 16"><path d="M2 1 L12 1 L7 8 L12 15 L2 15 L7 8 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4.5 12 L9.5 12 L7 8.5 Z" fill="currentColor"/></svg></span>').join('');
      } else if (f === 'lotus') {
        s += [[16,34],[78,44],[28,74],[72,70]].map((p,i)=>'<span class="lotus" style="left:'+p[0]+'%;top:'+p[1]+'%;animation-delay:'+(i*0.7)+'s"><svg width="14" height="11" viewBox="0 0 14 11"><path d="M7 1 C8 4 8 7 7 10 C6 7 6 4 7 1 M7 10 C4 9 2 6 2 3 C5 4 6 7 7 10 M7 10 C10 9 12 6 12 3 C9 4 8 7 7 10" fill="currentColor" opacity="0.85"/></svg></span>').join('');
      } else if (f === 'orbit') {
        const stars = [[0,50],[50,0],[100,50],[50,100],[15,15],[85,85]].map(p=>'<span class="ostar" style="left:'+p[0]+'%;top:'+p[1]+'%"></span>').join('');
        s += '<div class="orbit">' + stars + '</div>';
      } else if (f === 'pixels') {
        s += '<div class="pixels">' + Array.from({length:8},(_,i)=>{const col=['#ff3b6b','#28e0ff','#6dff5d'][i%3];const dx=((Math.random()*2-1)*40).toFixed(0),dy=((Math.random()*2-1)*40).toFixed(0);return '<span class="px" style="left:'+(30+Math.random()*40).toFixed(0)+'%;top:'+(30+Math.random()*40).toFixed(0)+'%;background:'+col+';--dx:'+dx+'px;--dy:'+dy+'px;animation-delay:'+(i*0.2)+'s"></span>';}).join('') + '</div>';
      } else if (f === 'speed') {
        s += '<div class="speed"><i style="width:40px"></i><i style="width:28px"></i><i style="width:34px"></i><i style="width:22px"></i></div>';
      } else if (f === 'heat') {
        s += '<div class="heat"></div>';
      } else if (f === 'wisps') {
        s += [[40,'0s'],[52,'.8s'],[46,'1.5s']].map(w=>'<span class="wisp" style="left:'+w[0]+'%;animation-delay:'+w[1]+'"></span>').join('');
      }
    });
    return s;
  }

  function buildBot(c) {
    const head =
      '<div class="head">' +
        (c.sunrays ? '<div class="sunrays"></div>' : '') +
        (c.hoodie ? '<div class="hoodie"></div>' : '') +
        buildTopper(c) +
        buildAntenna(c) +
        buildFace(c) +
      '</div>';

    const arms = '<div class="arm l"></div><div class="arm r"></div>' +
      (c.handOrbs ? '<span class="orb" style="left:-26%;top:18%"></span><span class="orb" style="right:-24%;top:30%;animation-delay:1s"></span>' : '');

    const torso =
      '<div class="torso">' +
        buildSkin(c) +
        buildSplat(c) +
        buildChest(c) +
        arms +
        (c.smoke ? '<span class="smoke" style="left:6%"></span><span class="smoke" style="right:6%;animation-delay:1.6s"></span>' : '') +
        (c.holo === 'cube' ? '<div class="holo cube">' + HOLO_CUBE + '</div>' : (c.holo ? '<div class="holo">' + HOLO_BARS + '</div>' : '')) +
      '</div>';

    const tiltStyle = c.tilt ? ' style="transform:rotate(' + c.tilt + 'deg)"' : '';
    const headWrap = '<div' + tiltStyle + '>' + head + '</div>';
    const cloak = c.cloak ? '<div class="cloak"></div>' : '';
    return '<div class="bot ' + c.classes + '">' + cloak + headWrap + '<div class="neck"></div>' + torso + '</div>';
  }

  function buildScene(c) {
    let inner = buildBot(c);
    if (c.lean) inner = '<div class="lean">' + inner + '</div>';
    if (c.wrap) inner = '<div class="' + c.wrap + '">' + inner + '</div>';
    const dup = c.ghostDup ? '<div class="dupwrap">' + buildBot(c) + '</div>' : '';
    const cls = c.ghostDup ? 'scene has-dup' : 'scene';
    return '<div class="' + cls + '">' + buildFX(c) + dup + inner + '</div>';
  }

  function renderRow(id, list) {
    document.getElementById(id).innerHTML = list.map(c => {
      const varStr = Object.entries(c.vars).map(([k, v]) => k + ':' + v).join(';');
      return '<div class="char" data-key="' + c.key + '" style="' + varStr + '">' +
          buildScene(c) +
          '<div class="name">' + c.name + '</div>' +
          '<div class="role">' + c.role + '</div>' +
          '<div class="tag">' + c.tag + '</div>' +
        '</div>';
    }).join('');
  }

  renderRow('row', CHARS.slice(0,5));

  /* ═══════════ Interactive click reactions (vanilla JS) ═══════════ */
  const LOTUS_SVG = '<svg width="17" height="14" viewBox="0 0 14 11"><path d="M7 1 C8 4 8 7 7 10 C6 7 6 4 7 1 M7 10 C4 9 2 6 2 3 C5 4 6 7 7 10 M7 10 C10 9 12 6 12 3 C9 4 8 7 7 10" fill="currentColor"/></svg>';
  const BP_SVG = '<svg width="84" height="84" viewBox="0 0 84 84" fill="none" stroke="currentColor" stroke-width="1.4">' +
    '<rect x="4" y="4" width="76" height="76"/>' +
    '<line x1="4" y1="28" x2="80" y2="28"/><line x1="4" y1="56" x2="80" y2="56"/>' +
    '<line x1="28" y1="4" x2="28" y2="80"/><line x1="56" y1="4" x2="56" y2="80"/>' +
    '<path d="M20 60 L42 30 L64 60 Z" stroke-width="1.8"/><line x1="42" y1="30" x2="42" y2="60"/>' +
    '<circle cx="42" cy="46" r="4"/></svg>';

  const byKey = k => document.querySelector('.char[data-key="' + k + '"]');

  /* Zen — lotus burst */
  (function () {
    const el = byKey('sage'); if (!el) return;
    el.addEventListener('click', () => {
      const scene = el.querySelector('.scene');
      for (let i = 0; i < 11; i++) {
        const s = document.createElement('span');
        s.className = 'burst-lotus';
        s.style.left = (38 + Math.random() * 24) + '%';
        s.style.setProperty('--dx', ((Math.random() * 2 - 1) * 70).toFixed(0) + 'px');
        s.style.setProperty('--rot', ((Math.random() * 2 - 1) * 90).toFixed(0) + 'deg');
        s.style.setProperty('--dur', (1.8 + Math.random() * 1.3).toFixed(2) + 's');
        s.style.animationDelay = (Math.random() * 0.35).toFixed(2) + 's';
        s.innerHTML = LOTUS_SVG;
        scene.appendChild(s);
        setTimeout(() => s.remove(), 3400);
      }
    });
  })();

  /* Null — glitch flash + reboot bar */
  (function () {
    const el = byKey('glitch'); if (!el) return;
    el.addEventListener('click', () => {
      const flash = document.createElement('div'); flash.className = 'fx-glitch-flash';
      document.body.appendChild(flash); setTimeout(() => flash.remove(), 320);
      const torso = el.querySelector('.torso'); if (!torso) return;
      const bar = document.createElement('div'); bar.className = 'reboot-bar'; bar.innerHTML = '<i></i>';
      setTimeout(() => torso.appendChild(bar), 300);
      setTimeout(() => bar.remove(), 1400);
    });
  })();

  /* Vector — air blueprint grid (hover) + blueprint burst (click) */
  (function () {
    const el = byKey('arch'); if (!el) return;
    const scene = el.querySelector('.scene');
    const ag = document.createElement('div'); ag.className = 'airgrid'; scene.appendChild(ag);
    el.addEventListener('click', () => {
      const torso = el.querySelector('.torso'); if (!torso) return;
      const bp = document.createElement('div'); bp.className = 'blueprint-burst'; bp.innerHTML = BP_SVG;
      torso.appendChild(bp); setTimeout(() => bp.remove(), 1400);
    });
  })();

  /* Umbra — silent ops (default) · reveal (hover) · vanish & rematerialize (click) */
  (function () {
    const el = byKey('phantom'); if (!el) return;
    const scene = el.querySelector('.scene');
    const aura = document.createElement('div'); aura.className = 'phantom-aura'; scene.insertBefore(aura, scene.firstChild);
    const scan = document.createElement('div'); scan.className = 'phantom-scan'; scene.appendChild(scan);

    const LOCK = '<svg width="13" height="15" viewBox="0 0 13 15" fill="none" stroke="currentColor" stroke-width="1.4">' +
      '<rect x="1.6" y="6" width="9.8" height="7.6" rx="1.5"/><path d="M3.6 6 V4.1 a2.9 2.9 0 0 1 5.8 0 V6"/><circle cx="6.5" cy="9.6" r="1" fill="currentColor" stroke="none"/></svg>';
    function spawnLock() {
      if (el.classList.contains('seen') || el.classList.contains('gone')) return;
      const l = document.createElement('div'); l.className = 'phantom-lock';
      l.style.left = (18 + Math.random() * 62) + '%';
      l.style.top = (24 + Math.random() * 50) + '%';
      l.innerHTML = LOCK;
      scene.appendChild(l); setTimeout(() => l.remove(), 1050);
    }
    setInterval(spawnLock, 1250); setTimeout(spawnLock, 400);

    const BADGES = ['Done', 'Handled', 'Resolved', 'Secured'];
    const BPOS = [[6, 18], [70, 14], [4, 58], [70, 56]];
    let badgeEls = [], msgT = null;
    function clearBadges() { badgeEls.forEach(b => b.remove()); badgeEls = []; }
    el.addEventListener('mouseenter', () => {
      if (el.classList.contains('gone')) return;
      el.classList.add('seen');
      clearBadges();
      BADGES.forEach((t, i) => {
        const b = document.createElement('div'); b.className = 'phantom-badge';
        b.style.left = BPOS[i][0] + '%'; b.style.top = BPOS[i][1] + '%';
        b.innerHTML = '<span class="tick">\u2713</span>' + t;
        scene.appendChild(b); badgeEls.push(b);
        setTimeout(() => b.classList.add('show'), 90 + i * 130);
      });
      scene.querySelectorAll('.ghost-msg').forEach(m => m.remove());
      const msg = document.createElement('div'); msg.className = 'ghost-msg'; msg.textContent = 'It was already done.';
      scene.appendChild(msg); clearTimeout(msgT); msgT = setTimeout(() => msg.remove(), 2100);
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('seen');
      badgeEls.forEach(b => { b.classList.remove('show'); setTimeout(() => b.remove(), 400); }); badgeEls = [];
    });

    el.addEventListener('click', () => {
      if (el.classList.contains('gone')) return;
      el.classList.remove('seen'); clearBadges();
      scene.querySelectorAll('.ghost-msg').forEach(m => m.remove());
      el.classList.add('gone');
      const dark = document.createElement('div'); dark.className = 'phantom-dark'; scene.appendChild(dark);
      requestAnimationFrame(() => dark.classList.add('on'));
      const eye = document.createElement('div'); eye.className = 'phantom-eye'; dark.appendChild(eye);
      setTimeout(() => eye.classList.add('lit'), 430);
      setTimeout(() => eye.classList.add('blink'), 820);
      setTimeout(() => {
        const flash = document.createElement('div'); flash.className = 'phantom-flash'; scene.appendChild(flash);
        requestAnimationFrame(() => flash.classList.add('go'));
        dark.classList.remove('on');
        el.classList.remove('gone'); el.classList.add('materialize');
        const msg = document.createElement('div'); msg.className = 'ghost-msg'; msg.textContent = 'I was never gone.';
        scene.appendChild(msg);
        setTimeout(() => { dark.remove(); flash.remove(); el.classList.remove('materialize'); }, 720);
        setTimeout(() => msg.remove(), 2100);
      }, 1250);
    });
  })();

  /* Helios — solar flare burst + screen bloom */
  (function () {
    const el = byKey('solar'); if (!el) return;
    el.addEventListener('click', () => {
      const scene = el.querySelector('.scene');
      const burst = document.createElement('div'); burst.className = 'flare-burst';
      let rays = '';
      for (let i = 0; i < 16; i++) rays += '<i style="--ang:' + (i * 22.5) + 'deg"></i>';
      burst.innerHTML = rays; scene.appendChild(burst); setTimeout(() => burst.remove(), 1000);
      const bloom = document.createElement('div'); bloom.className = 'fx-solar-bloom';
      document.body.appendChild(bloom); setTimeout(() => bloom.remove(), 1000);
    });
  })();

  /* ═══════════ Row 1 interactive click reactions ═══════════ */

  /* Vega — reticle + standby (hover) · fire arm + typed command (click) */
  (function () {
    const el = byKey('cmd'); if (!el) return;
    const scene = el.querySelector('.scene');
    // stern command-face overlay (brows + determined mouth) — shown only on hover via CSS
    const visor = el.querySelector('.visor');
    if (visor) {
      const sf = document.createElement('div'); sf.className = 'vega-stern';
      sf.innerHTML = '<i class="brow bl"></i><i class="brow br"></i><i class="mouth"></i>';
      visor.appendChild(sf);
    }
    const ret = document.createElement('div'); ret.className = 'reticle';
    ret.innerHTML = '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4">' +
      '<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="3.4"/>' +
      '<line x1="20" y1="1" x2="20" y2="9"/><line x1="20" y1="31" x2="20" y2="39"/>' +
      '<line x1="1" y1="20" x2="9" y2="20"/><line x1="31" y1="20" x2="39" y2="20"/></svg>';
    scene.appendChild(ret);
    let standby = null, sbIv = null;
    el.addEventListener('mouseenter', () => {
      if (standby) return;
      standby = document.createElement('div'); standby.className = 'cmd-standby'; scene.appendChild(standby);
      const txt = 'STANDING BY FOR ORDERS'; let i = 0;
      sbIv = setInterval(() => {
        standby.textContent = txt.slice(0, ++i) + (i < txt.length ? '▋' : '');
        if (i >= txt.length) clearInterval(sbIv);
      }, 45);
    });
    el.addEventListener('mouseleave', () => {
      clearInterval(sbIv);
      if (standby) { const s = standby; standby = null; s.style.transition = 'opacity .3s'; s.style.opacity = '0'; setTimeout(() => s.remove(), 300); }
    });
    el.addEventListener('click', () => {
      const armR = el.querySelector('.arm.r'); armR.classList.add('fire');
      setTimeout(() => armR.classList.remove('fire'), 950);
      const old = scene.querySelector('.cmd-order'); if (old) old.remove();
      const o = document.createElement('div'); o.className = 'cmd-order'; scene.appendChild(o);
      const txt = 'EXECUTING ORDER'; let i = 0;
      const iv = setInterval(() => {
        o.textContent = txt.slice(0, ++i) + (i < txt.length ? '▋' : '');
        if (i >= txt.length) {
          clearInterval(iv);
          setTimeout(() => { o.style.transition = 'opacity .5s'; o.style.opacity = '0'; setTimeout(() => o.remove(), 500); }, 1000);
        }
      }, 55);
    });
  })();

  /* Byte — matrix code rain (hover) + full hack (click) */
  (function () {
    const el = byKey('hack'); if (!el) return;
    const scene = el.querySelector('.scene');
    const rain = document.createElement('div'); rain.className = 'coderain';
    const glyphs = '01<>{}[]#$%&*/|=+';
    for (let c = 0; c < 14; c++) {
      const col = document.createElement('div'); col.className = 'col' + (c >= 8 ? ' extra' : '');
      col.style.left = (c * 7.1).toFixed(1) + '%';
      col.style.animationDuration = (1 + Math.random() * 1.6).toFixed(2) + 's';
      col.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
      let str = ''; for (let r = 0; r < 16; r++) str += glyphs[Math.floor(Math.random() * glyphs.length)] + '\n';
      col.textContent = str; rain.appendChild(col);
    }
    scene.appendChild(rain);
    // keyboard (parented to torso so it sits right under the hands)
    const torso = el.querySelector('.torso');
    const cols = 7, rows = 3, kw = 66, kh = 24, pad = 4, gx = 2, gy = 2;
    const cw = (kw - pad * 2 - (cols - 1) * gx) / cols, chh = (kh - pad * 2 - (rows - 1) * gy) / rows;
    let keys = '';
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = pad + c * (cw + gx), y = pad + r * (chh + gy);
      keys += '<rect class="key" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + cw.toFixed(1) + '" height="' + chh.toFixed(1) + '" rx="1" fill="rgba(45,255,138,.1)" stroke="#3dff8a" stroke-width=".6"/>';
    }
    const kbd = document.createElement('div'); kbd.className = 'kbd';
    kbd.innerHTML = '<svg viewBox="0 0 66 24"><rect x=".6" y=".6" width="64.8" height="22.8" rx="3" fill="rgba(6,20,10,.55)" stroke="#3dff8a" stroke-width="1"/>' + keys + '</svg>';
    torso.appendChild(kbd);

    // individual keys flicker as keystrokes — slow random by default, chaotic on hover
    const keyEls = Array.from(kbd.querySelectorAll('.key'));
    let lit = [];
    function strike() {
      lit.forEach(k => k.classList.remove('lit'));
      lit = [];
      const hovering = el.matches(':hover');
      const n = hovering ? 4 + Math.floor(Math.random() * 4) : 1;
      for (let i = 0; i < n; i++) {
        const k = keyEls[Math.floor(Math.random() * keyEls.length)];
        k.classList.add('lit'); lit.push(k);
      }
      setTimeout(strike, el.matches(':hover') ? 70 + Math.random() * 50 : 450 + Math.random() * 350);
    }
    strike();

    el.addEventListener('click', () => {
      if (rain.classList.contains('full')) return;
      rain.classList.add('full');
      const frame = document.createElement('div'); frame.className = 'hackframe'; scene.appendChild(frame);
      const acc = document.createElement('div'); acc.className = 'access'; acc.textContent = 'ACCESS GRANTED'; scene.appendChild(acc);
      setTimeout(() => { rain.classList.remove('full'); frame.remove(); acc.remove(); }, 2000);
    });
  })();

  /* Iris — live easel painting + chin/brush (default), frenzy splatter + card splash (hover), paint canvas (click) */
  (function () {
    const el = byKey('creative'); if (!el) return;
    const scene = el.querySelector('.scene');
    const palette = ['#ff5cc0', '#9a6bff', '#5fc8ff', '#ffd27f', '#46c98a', '#ff8a3a'];

    // easel — Iris paints recognisable mini-artworks that draw themselves, hold, fade, cycle
    const easel = document.createElement('div'); easel.className = 'easel';
    easel.innerHTML = '<div class="frame"><svg viewBox="0 0 40 48" preserveAspectRatio="xMidYMid meet"></svg></div>';
    scene.appendChild(easel);
    const esvg = easel.querySelector('svg');
    const NS = 'http://www.w3.org/2000/svg';
    const P = { pink:'#ff5cc0', yellow:'#ffe14a', cyan:'#5fc8ff', purple:'#9a6bff', red:'#ff5470' };
    // each piece returns layers: { tag, attrs, mode:'draw'|'fill', color, delay, dur }
    const PIECES = [
      () => [ // simple expressive face
        { tag:'circle', attrs:{cx:20,cy:21,r:12}, mode:'fill', color:P.yellow, delay:1.1 },
        { tag:'circle', attrs:{cx:20,cy:21,r:12}, mode:'draw', color:P.pink,   delay:0,  dur:.9 },
        { tag:'circle', attrs:{cx:15.5,cy:18,r:1.7}, mode:'fill', color:P.purple, delay:.7 },
        { tag:'circle', attrs:{cx:24.5,cy:18,r:1.7}, mode:'fill', color:P.purple, delay:.85 },
        { tag:'path', attrs:{d:'M14 25 Q20 31 26 25'}, mode:'draw', color:P.purple, delay:1.0, dur:.5 },
      ],
      () => [ // radiating star
        { tag:'path', attrs:{d:'M20 7 L23.6 17.6 L34.5 17.8 L25.8 24.4 L29 35 L20 28.4 L11 35 L14.2 24.4 L5.5 17.8 L16.4 17.6 Z'}, mode:'fill', color:P.cyan, delay:1.0 },
        { tag:'path', attrs:{d:'M20 7 L23.6 17.6 L34.5 17.8 L25.8 24.4 L29 35 L20 28.4 L11 35 L14.2 24.4 L5.5 17.8 L16.4 17.6 Z'}, mode:'draw', color:P.yellow, delay:0, dur:1.1 },
      ],
      () => [ // heart with bloom
        { tag:'path', attrs:{d:'M20 33 C 6 23, 11 9, 20 17 C 29 9, 34 23, 20 33 Z'}, mode:'fill', color:P.red, delay:.95 },
        { tag:'path', attrs:{d:'M20 33 C 6 23, 11 9, 20 17 C 29 9, 34 23, 20 33 Z'}, mode:'draw', color:P.pink, delay:0, dur:1.0 },
      ],
      () => { // abstract flower
        const arr = []; const cx=20, cy=21, r=8;
        for (let i=0;i<6;i++){ const a=i/6*Math.PI*2; arr.push({ tag:'circle', attrs:{cx:+(cx+Math.cos(a)*r).toFixed(1), cy:+(cy+Math.sin(a)*r).toFixed(1), r:5}, mode:'fill', color:i%2?P.pink:P.purple, delay:.2+i*.13 }); }
        arr.push({ tag:'circle', attrs:{cx:cx,cy:cy,r:4.5}, mode:'fill', color:P.yellow, delay:1.1 });
        return arr;
      },
    ];
    function drawPiece(layers, g, spd) {
      layers.forEach(L => {
        const n = document.createElementNS(NS, L.tag);
        for (const k in L.attrs) n.setAttribute(k, L.attrs[k]);
        if (L.mode === 'draw') {
          n.setAttribute('fill','none'); n.setAttribute('stroke', L.color);
          n.setAttribute('stroke-width','2'); n.setAttribute('stroke-linecap','round'); n.setAttribute('stroke-linejoin','round');
          n.setAttribute('pathLength','1'); n.style.strokeDasharray='1'; n.style.strokeDashoffset='1';
          n.style.animation = 'paintDraw ' + ((L.dur||.8)/spd).toFixed(2) + 's ease forwards ' + (L.delay/spd).toFixed(2) + 's';
        } else {
          n.setAttribute('fill', L.color); n.setAttribute('stroke','none');
          n.style.opacity='0'; n.style.transformOrigin='center'; n.style.transform='scale(.3)';
          n.style.transition='opacity .4s ease, transform .4s ease';
          setTimeout(()=>{ n.style.opacity='.88'; n.style.transform='scale(1)'; }, (L.delay/spd)*1000);
        }
        g.appendChild(n);
      });
    }
    let pieceIdx = 0, playTimer = null;
    function playCycle() {
      const fast = el.matches(':hover'); const spd = fast ? 3 : 1;
      esvg.innerHTML = ''; esvg.style.opacity = '1';
      const count = fast ? 3 : 1;
      for (let c = 0; c < count; c++) {
        const layers = PIECES[(pieceIdx + c) % PIECES.length]();
        const g = document.createElementNS(NS, 'g');
        if (fast) {
          const tx=(Math.random()*16-8).toFixed(1), ty=(Math.random()*16-8).toFixed(1), sc=(.6+Math.random()*.5).toFixed(2), rot=(Math.random()*40-20).toFixed(0);
          g.setAttribute('transform', 'translate('+tx+' '+ty+') rotate('+rot+' 20 22) scale('+sc+')');
        }
        drawPiece(layers, g, spd);
        esvg.appendChild(g);
      }
      pieceIdx = (pieceIdx + count) % PIECES.length;
      const hold = fast ? 0.3 : 2.0;
      const total = ((2.3) / spd + hold) * 1000;
      playTimer = setTimeout(() => {
        esvg.style.transition = 'opacity .5s'; esvg.style.opacity = '0';
        setTimeout(() => { esvg.style.transition=''; playCycle(); }, fast ? 200 : 500);
      }, total);
    }
    playCycle();
    el.addEventListener('mouseenter', () => { clearTimeout(playTimer); playCycle(); });
    el.addEventListener('mouseleave', () => { clearTimeout(playTimer); playCycle(); });

    // sparkles
    const spk = document.createElement('div'); spk.className = 'sparkles';
    for (let i = 0; i < 9; i++) {
      const s = document.createElement('span'); s.className = 'sp';
      s.style.left = (8 + Math.random() * 84) + '%'; s.style.top = (8 + Math.random() * 84) + '%';
      s.style.animationDelay = (Math.random()).toFixed(2) + 's';
      s.innerHTML = STAR; spk.appendChild(s);
    }
    scene.appendChild(spk);

    // brush-tip splatter (hover)
    const pf = document.createElement('div'); pf.className = 'paintfx';
    for (let i = 0; i < 10; i++) {
      const d = document.createElement('span'); d.className = 'pd';
      const sz = 5 + Math.random() * 7; d.style.width = sz + 'px'; d.style.height = sz + 'px';
      d.style.background = palette[i % palette.length];
      d.style.setProperty('--ang', (i * 36) + 'deg');
      d.style.animationDelay = (Math.random() * 0.6).toFixed(2) + 's';
      pf.appendChild(d);
    }
    scene.appendChild(pf);

    // card-background color splashes (hover)
    const cs = document.createElement('div'); cs.className = 'cardsplash';
    for (let i = 0; i < 7; i++) {
      const b = document.createElement('span'); b.className = 'bl';
      const sz = 22 + Math.random() * 40; b.style.width = sz + 'px'; b.style.height = sz + 'px';
      b.style.left = (Math.random() * 88) + '%'; b.style.top = (Math.random() * 84) + '%';
      b.style.background = palette[i % palette.length];
      b.style.animationDelay = (Math.random() * 1.6).toFixed(2) + 's';
      cs.appendChild(b);
    }
    scene.appendChild(cs);

    el.addEventListener('click', () => {
      const cv = document.createElement('div'); cv.className = 'paintcanvas';
      let paths = '';
      for (let i = 0; i < 6; i++) {
        const y = 24 + i * 42, c = palette[i % palette.length];
        paths += '<path d="M-10 ' + (y + Math.random() * 24) + ' C 60 ' + (y - 30) + ', 150 ' + (y + 50) + ', 230 ' + y + '" stroke="' + c + '" stroke-width="' + (8 + Math.random() * 10).toFixed(0) + '" fill="none" stroke-linecap="round" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:1;animation:paintDraw 1.1s ease forwards ' + (i * 0.13).toFixed(2) + 's"/>';
      }
      cv.innerHTML = '<svg viewBox="0 0 210 280" preserveAspectRatio="none">' + paths + '</svg>';
      scene.appendChild(cv);
      setTimeout(() => { cv.style.transition = 'opacity .6s'; cv.style.opacity = '0'; setTimeout(() => cv.remove(), 600); }, 1700);
    });
  })();

  /* Atlas — laser scan (hover) + alert response (click) */
  (function () {
    const el = byKey('guard'); if (!el) return;
    const scene = el.querySelector('.scene');
    const laser = document.createElement('div'); laser.className = 'laser'; laser.innerHTML = '<i></i>'; scene.appendChild(laser);
    el.addEventListener('click', () => {
      if (el.classList.contains('alert')) return;
      el.classList.add('alert');
      const banner = document.createElement('div'); banner.className = 'alert-banner'; banner.textContent = '⚠ ALERT'; scene.appendChild(banner);
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div'); ring.className = 'pulse-ring'; ring.style.animationDelay = (i * 0.25).toFixed(2) + 's';
        scene.appendChild(ring); setTimeout(() => ring.remove(), 1600 + i * 250);
      }
      const msg = document.createElement('div'); msg.className = 'secured-msg'; msg.textContent = 'PERIMETER SECURED'; scene.appendChild(msg);
      setTimeout(() => { el.classList.remove('alert'); banner.remove(); msg.remove(); }, 2000);
    });
  })();

  /* Lumen — holographic monitors (default + hover) + dashboard (click) */
  (function () {
    const el = byKey('analyst'); if (!el) return;
    const scene = el.querySelector('.scene');

    const lineSVG = '<svg viewBox="0 0 70 44" fill="none"><line x1="4" y1="38" x2="66" y2="38" stroke="rgba(255,206,90,.3)" stroke-width="1"/><line x1="4" y1="6" x2="4" y2="38" stroke="rgba(255,206,90,.3)" stroke-width="1"/><path class="mon-line" d="M5 34 L18 26 L30 30 L44 14 L66 8" stroke="var(--accent)" stroke-width="2" pathLength="1"/></svg>';
    const spikeSVG = '<svg viewBox="0 0 70 40" fill="none"><path class="mon-spike" d="M4 32 L14 30 L20 12 L26 34 L34 8 L42 30 L52 18 L66 26" stroke="var(--accent)" stroke-width="2" pathLength="1"/></svg>';
    const barSVG = '<svg viewBox="0 0 70 44">' +
      [10, 22, 34, 46, 58].map((x, i) => '<rect class="mon-bar" x="' + x + '" y="8" width="8" height="30" rx="1" fill="var(--accent)" style="animation-delay:' + (i * 0.15).toFixed(2) + 's"/>').join('') +
      '<line x1="2" y1="38" x2="68" y2="38" stroke="rgba(255,206,90,.3)" stroke-width="1"/></svg>';
    const pieSVG = '<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="13" fill="none" stroke="rgba(255,206,90,.25)" stroke-width="8"/><circle class="mon-pie" cx="22" cy="22" r="13" fill="none" stroke="var(--accent)" stroke-width="8" stroke-dasharray="42 82"/></svg>';

    const monitors = document.createElement('div'); monitors.className = 'monitors';
    const mk = (cls, l, t, w, h, html) => {
      const m = document.createElement('div'); m.className = 'lmon' + (cls ? ' ' + cls : '');
      m.style.cssText = 'left:' + l + 'px;top:' + t + 'px;width:' + w + 'px;height:' + h + 'px';
      m.innerHTML = html; monitors.appendChild(m); return m;
    };
    // default: single monitor at chest, live line chart
    mk('', 66, 150, 78, 50, lineSVG);
    // hover arc: left (bars), right (pie), above (spiking line + counting number)
    mk('arc', 4, 86, 60, 42, barSVG);
    mk('arc', 146, 86, 60, 42, pieSVG);
    const topMon = mk('arc', 62, 12, 86, 40, spikeSVG + '<div class="mon-num" data-v="0">0</div>');
    scene.appendChild(monitors);

    // rapid counting while hovered
    const num = topMon.querySelector('.mon-num');
    let countTimer = null;
    el.addEventListener('mouseenter', () => {
      clearInterval(countTimer);
      countTimer = setInterval(() => {
        let v = +num.dataset.v + Math.floor(20 + Math.random() * 200);
        if (v > 99999) v = 1000;
        num.dataset.v = v; num.textContent = v.toLocaleString();
      }, 60);
    });
    el.addEventListener('mouseleave', () => { clearInterval(countTimer); num.dataset.v = 0; num.textContent = '0'; });

    el.addEventListener('click', () => {
      if (scene.querySelector('.dashboard')) return;
      const dash = document.createElement('div'); dash.className = 'dashboard';
      dash.innerHTML =
        '<div style="position:absolute;inset:0;padding:10px;color:#dfe7f5;font-family:\'DM Mono\',monospace">' +
          '<div style="font-size:9px;letter-spacing:.2em;color:var(--accent)">ANALYTICS</div>' +
          '<div class="count" data-t="84213" style="font-size:19px;color:#fff;margin-top:2px">0</div>' +
          '<svg viewBox="0 0 190 64" style="width:100%;height:60px;margin-top:6px" fill="none">' +
            '<line x1="0" y1="58" x2="190" y2="58" stroke="#24344f" stroke-width="1"/>' +
            '<path d="M2 56 L40 38 L78 46 L120 20 L188 6" stroke="var(--accent)" stroke-width="2.5" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:1;animation:lineDraw 1.2s ease forwards .25s"/>' +
          '</svg>' +
          '<div style="display:flex;gap:9px;align-items:center;margin-top:6px">' +
            '<svg viewBox="0 0 40 40" width="46" height="46" style="transform-origin:center;animation:pieIn .8s ease forwards .1s"><circle cx="20" cy="20" r="13" fill="none" stroke="#24344f" stroke-width="8"/><circle cx="20" cy="20" r="13" fill="none" stroke="var(--accent)" stroke-width="8" stroke-dasharray="50 82" transform="rotate(-90 20 20)"/></svg>' +
            '<div><div class="count" data-t="1240" style="font-size:13px;color:var(--accent)">0</div><div style="font-size:8px;color:#8497bd;letter-spacing:.1em">CONVERSIONS</div></div>' +
            '<div><div class="count" data-t="97" style="font-size:13px;color:#46c98a">0</div><div style="font-size:8px;color:#8497bd;letter-spacing:.1em">SCORE</div></div>' +
          '</div>' +
        '</div>';
      scene.appendChild(dash);
      dash.querySelectorAll('.count').forEach(n => {
        const target = +n.dataset.t; let v = 0; const step = target / 38;
        const iv = setInterval(() => { v += step; if (v >= target) { v = target; clearInterval(iv); } n.textContent = Math.round(v).toLocaleString(); }, 26);
      });
      setTimeout(() => dash.remove(), 2650);
    });
  })();

  /* ═══════════ Row 2 interactive reactions (Tempus · Wisp · Mordin · Cosmo · Dash) ═══════════ */

  /* Tempus — sand fall + clock (default) · VHS speed-up (hover) · time freeze (click) */
  (function () {
    const el = byKey('time'); if (!el) return;
    const scene = el.querySelector('.scene');

    /* Option C — clock orbit rings (two elliptical rings around the body) */
    const orbits = document.createElement('div'); orbits.className = 'tempus-orbits';
    // inner ring — 12 hour dots, viewBox 160x80, ellipse rx64 ry22
    let dots = '';
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      dots += '<circle cx="' + (80 + Math.cos(a) * 64).toFixed(1) + '" cy="' + (40 + Math.sin(a) * 22).toFixed(1) + '" r="2.4" fill="#f0a955"/>';
    }
    const inner = '<svg class="t-ring t-inner" viewBox="0 0 160 80">' +
      '<ellipse cx="80" cy="40" rx="64" ry="22" fill="none" stroke="rgba(217,138,58,.42)" stroke-width="1.1"/>' +
      '<g class="t-orbit">' + dots + '</g></svg>';
    // outer ring — minute dashes, viewBox 184x94, ellipse rx80 ry30
    const outer = '<svg class="t-ring t-outer" viewBox="0 0 184 94">' +
      '<g class="t-orbit"><ellipse cx="92" cy="47" rx="80" ry="30" fill="none" stroke="rgba(229,160,80,.7)" stroke-width="1.6" stroke-dasharray="1.5 7"/></g></svg>';
    orbits.innerHTML = inner + outer;
    scene.insertBefore(orbits, scene.firstChild);

    /* Option B — meeting notification bubbles */
    const notes = document.createElement('div'); notes.className = 'tempus-notes'; scene.appendChild(notes);
    const NOTES = ['📅 9:00 AM', '⏰ Reminder', '🤝 Sync Call', '✅ Confirmed', '🔔 In 5 mins'];
    const DONE = ['✅ 9:00 AM Done', '✅ Report Sent', '✅ Team Synced', '✅ On Schedule', '✅ All Clear'];
    let noteIdx = 0, doneIdx = 0, noteTimer = null;
    function spawnNote(done) {
      const n = document.createElement('div'); n.className = 't-note' + (done ? ' done' : '');
      n.textContent = done ? DONE[doneIdx++ % DONE.length] : NOTES[noteIdx++ % NOTES.length];
      n.style.left = (42 + Math.random() * 16) + '%';
      const dur = done ? 2.4 : 3.4;
      n.style.animationDuration = dur + 's';
      notes.appendChild(n);
      setTimeout(() => n.remove(), dur * 1000 + 120);
    }
    function tick() {
      if (el.classList.contains('frozen')) { noteTimer = setTimeout(tick, 700); return; }
      const hot = el.matches(':hover');
      if (hot) {
        const count = 2 + Math.floor(Math.random() * 2); // 2-3 at once, staggered
        for (let i = 0; i < count; i++) setTimeout(() => { if (!el.classList.contains('frozen')) spawnNote(true); }, i * 180);
      } else {
        spawnNote(false);
      }
      noteTimer = setTimeout(tick, hot ? 850 + Math.random() * 400 : 3000 + Math.random() * 1000);
    }
    noteTimer = setTimeout(tick, 600);
    const aura = document.createElement('div'); aura.className = 'tempus-aura'; scene.insertBefore(aura, scene.firstChild);
    el.addEventListener('mouseenter', () => { if (!el.classList.contains('frozen')) el.classList.add('t-fast'); });
    el.addEventListener('mouseleave', () => el.classList.remove('t-fast'));
    el.addEventListener('click', () => {
      if (el.classList.contains('frozen')) return;
      el.classList.remove('t-fast');
      el.classList.add('frozen');
      const msg = document.createElement('div'); msg.className = 'time-stopped'; msg.textContent = 'TIME STOPPED'; scene.appendChild(msg);
      requestAnimationFrame(() => { msg.style.opacity = '1'; });
      setTimeout(() => {
        msg.style.opacity = '0'; setTimeout(() => msg.remove(), 250);
        el.classList.remove('frozen');
      }, 1500);
    });
  })();

  /* Wisp — pulse + tilt (default) · spook ripple (hover) · vanish & reassemble (click) */
  (function () {
    const el = byKey('ghost'); if (!el) return;
    const scene = el.querySelector('.scene');
    const bot = el.querySelector('.bot');
    let ripple = null;
    el.addEventListener('mouseenter', () => {
      if (el.classList.contains('busy')) return;
      el.classList.add('spook');
      if (!ripple) { ripple = document.createElement('div'); ripple.className = 'wisp-ripple'; scene.appendChild(ripple); }
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('spook');
      if (ripple) { ripple.remove(); ripple = null; }
    });
    el.addEventListener('click', () => {
      if (el.classList.contains('busy')) return;
      el.classList.add('busy'); el.classList.remove('spook');
      if (ripple) { ripple.remove(); ripple = null; }
      bot.style.transition = 'none'; bot.style.opacity = '0';
      const trails = [];
      for (let i = 0; i < 16; i++) {
        const p = document.createElement('span'); p.className = 'wisp-particle';
        p.style.left = (35 + Math.random() * 30) + '%';
        p.style.top = (30 + Math.random() * 40) + '%';
        p.style.setProperty('--dx', ((Math.random() * 2 - 1) * 40).toFixed(0) + 'px');
        p.style.animationDelay = (Math.random() * 0.4).toFixed(2) + 's';
        scene.appendChild(p); trails.push(p);
      }
      setTimeout(() => {
        trails.forEach(p => {
          p.style.animation = 'none';
          p.style.transition = 'left .5s ease, top .5s ease, opacity .5s ease';
          p.style.left = '50%'; p.style.top = '46%'; p.style.opacity = '0';
        });
        setTimeout(() => trails.forEach(p => p.remove()), 540);
        bot.style.transition = 'none'; bot.style.opacity = '1';
        el.classList.add('reassemble');
        setTimeout(() => { el.classList.remove('reassemble', 'busy'); bot.style.opacity = ''; }, 900);
      }, 1500);
    });
  })();

  /* Mordin — stir + flask bubbles (default) · cast & overflow (hover) · transmutation (click) */
  (function () {
    const el = byKey('alch'); if (!el) return;
    const scene = el.querySelector('.scene');
    const torso = el.querySelector('.torso');
    const aura = document.createElement('div'); aura.className = 'alch-aura'; scene.insertBefore(aura, scene.firstChild);
    if (torso) {
      const fb = document.createElement('div'); fb.className = 'flask-bubbles';
      for (let i = 0; i < 4; i++) { const b = document.createElement('i'); b.style.left = (3 + Math.random() * 12) + 'px'; b.style.animationDelay = (i * 0.45).toFixed(2) + 's'; fb.appendChild(b); }
      torso.appendChild(fb);
    }
    /* DEFAULT — 6 raw data ingredients orbiting the cauldron */
    const data = document.createElement('div'); data.className = 'alch-data';
    const ICONS = [
      { gl:'#ffce5a', r:72,  dur:9,    dly:0,    svg:'<svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor"><rect x="2" y="10" width="4" height="8" rx="1"/><rect x="9" y="5" width="4" height="13" rx="1"/><rect x="16" y="2" width="4" height="16" rx="1"/></svg>' },
      { gl:'#5fc8ff', r:92,  dur:13,   dly:-4,   svg:'<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/><path d="M11 11 L11 2 A9 9 0 0 1 19 14 Z" fill="currentColor"/></svg>' },
      { gl:'#b69bff', r:78,  dur:11,   dly:-2,   html:'<div class="orb-num">1,204<br>89%<br>$42K</div>' },
      { gl:'#46c98a', r:98,  dur:14,   dly:-6,   svg:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1.5" y="1.5" width="21" height="21" rx="2"/><line x1="1.5" y1="8.5" x2="22.5" y2="8.5"/><line x1="1.5" y1="15.5" x2="22.5" y2="15.5"/><line x1="8.5" y1="1.5" x2="8.5" y2="22.5"/><line x1="15.5" y1="1.5" x2="15.5" y2="22.5"/></svg>' },
      { gl:'#ff8a3a', r:84,  dur:10.5, dly:-8,   svg:'<svg width="24" height="18" viewBox="0 0 24 18"><polyline points="1,14 6,7 11,11 16,3 23,9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
      { gl:'#eef3ff', r:104, dur:15,   dly:-10.5,svg:'<svg width="18" height="22" viewBox="0 0 18 22" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 1 H11 L16 6 V21 H2 Z"/><line x1="5" y1="9" x2="13" y2="9"/><line x1="5" y1="13" x2="13" y2="13"/><line x1="5" y1="17" x2="10" y2="17"/></svg>' }
    ];
    ICONS.forEach(c => {
      const orbiter = document.createElement('div'); orbiter.className = 'orbiter';
      orbiter.style.setProperty('--dur', c.dur + 's'); orbiter.style.setProperty('--dly', c.dly + 's');
      const arm = document.createElement('div'); arm.className = 'orb-arm'; arm.style.setProperty('--r', c.r + 'px');
      const cent = document.createElement('div'); cent.className = 'orb-cent';
      const ico = document.createElement('div'); ico.className = 'orb-ico';
      ico.style.setProperty('--gl', c.gl); ico.style.setProperty('--dur', c.dur + 's'); ico.style.setProperty('--dly', c.dly + 's');
      ico.style.color = c.gl;
      ico.innerHTML = c.svg || c.html;
      cent.appendChild(ico); arm.appendChild(cent); orbiter.appendChild(arm); data.appendChild(orbiter);
    });
    scene.appendChild(data);

    /* collision flash + emerging report (HOVER) */
    const mixflash = document.createElement('div'); mixflash.className = 'alch-mixflash'; scene.appendChild(mixflash);
    const report = document.createElement('div'); report.className = 'alch-report';
    report.innerHTML = '<div class="rep-inner"><div class="rep-bar"></div><div class="rep-bar s"></div>' +
      '<div class="rep-chart"><i style="height:7px"></i><i style="height:13px"></i><i style="height:9px"></i><i style="height:16px"></i></div>' +
      '<div class="rep-check">\u2713</div></div>';
    scene.appendChild(report);

    let reportTimer = null;
    el.addEventListener('mouseenter', () => {
      el.classList.add('mixing');
      clearTimeout(reportTimer);
      reportTimer = setTimeout(() => report.classList.add('show'), 540);
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('mixing');
      clearTimeout(reportTimer);
      report.classList.remove('show');
    });
    el.addEventListener('click', () => {
      const sp = document.createElement('div'); sp.className = 'alch-splash';
      const pcols = ['#ffce5a', '#46c98a', '#9a6bff', '#ff8a3a', '#5fc8ff'];
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('i'); const ang = i / 18 * Math.PI * 2; const dist = 50 + Math.random() * 70;
        p.style.setProperty('--tx', (Math.cos(ang) * dist).toFixed(0) + 'px');
        p.style.setProperty('--ty', (Math.sin(ang) * dist).toFixed(0) + 'px');
        p.style.background = pcols[i % pcols.length];
        p.style.animationDelay = (Math.random() * 0.1).toFixed(2) + 's';
        sp.appendChild(p);
      }
      scene.appendChild(sp); setTimeout(() => sp.remove(), 1000);
      const fl = document.createElement('div'); fl.className = 'alch-flash'; scene.appendChild(fl); setTimeout(() => fl.remove(), 750);
      const msg = document.createElement('div'); msg.className = 'alch-msg'; msg.textContent = 'TRANSMUTATION COMPLETE'; scene.appendChild(msg);
      msg.style.transition = 'opacity .3s'; requestAnimationFrame(() => msg.style.opacity = '1');
      setTimeout(() => { msg.style.opacity = '0'; setTimeout(() => msg.remove(), 300); }, 1300);
    });
  })();

  /* Cosmo — dish scan + drifting stars (default) · signal & constellation (hover) · deep space (click) */
  (function () {
    const el = byKey('star'); if (!el) return;
    const scene = el.querySelector('.scene');
    const sf = document.createElement('div'); sf.className = 'cosmo-stars';
    for (let i = 0; i < 12; i++) {
      const s = document.createElement('i'); s.style.top = (6 + Math.random() * 88) + '%';
      s.style.animationDuration = (5 + Math.random() * 5).toFixed(2) + 's';
      s.style.animationDelay = (Math.random() * 5).toFixed(2) + 's';
      sf.appendChild(s);
    }
    scene.appendChild(sf);
    const star = document.createElement('div'); star.className = 'cosmo-star'; scene.appendChild(star);
    const pts = [[26, 22], [44, 14], [60, 26], [76, 18], [50, 40], [34, 54], [68, 52]];
    let d = '';
    for (let i = 0; i < pts.length - 1; i++) d += '<path pathLength="1" d="M' + pts[i][0] + ' ' + pts[i][1] + ' L' + pts[i + 1][0] + ' ' + pts[i + 1][1] + '"/>';
    const cst = document.createElement('div'); cst.className = 'cosmo-const';
    cst.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%;height:100%">' + d + '</svg>';
    scene.appendChild(cst);
    el.addEventListener('mouseenter', () => el.classList.add('signal'));
    el.addEventListener('mouseleave', () => el.classList.remove('signal'));
    el.addEventListener('click', () => {
      if (scene.querySelector('.cosmo-space')) return;
      const sp = document.createElement('div'); sp.className = 'cosmo-space'; scene.appendChild(sp);
      sp.style.transition = 'opacity .4s'; requestAnimationFrame(() => sp.style.opacity = '1');
      const sh = document.createElement('div'); sh.className = 'cosmo-shoot'; sh.style.transform = 'rotate(28deg)'; sp.appendChild(sh);
      sh.animate([
        { left: '-60px', top: '8%', opacity: 0 },
        { opacity: 1, offset: 0.25 },
        { left: '210px', top: '82%', opacity: 0 }
      ], { duration: 900, easing: 'ease-in' });
      const msg = document.createElement('div'); msg.className = 'cosmo-msg'; msg.textContent = 'SIGNAL RECEIVED'; sp.appendChild(msg);
      msg.style.transition = 'opacity .3s'; setTimeout(() => msg.style.opacity = '1', 350);
      setTimeout(() => { sp.style.opacity = '0'; setTimeout(() => sp.remove(), 450); }, 1600);
    });
  })();

  /* Dash — bolt pulse + dart (default) · sprint lines & afterimage (hover) · teleport (click) */
  (function () {
    const el = byKey('speed'); if (!el) return;
    const scene = el.querySelector('.scene');
    const lean = el.querySelector('.lean');
    const lines = document.createElement('div'); lines.className = 'dash-lines';
    for (let i = 0; i < 7; i++) {
      const l = document.createElement('i'); l.style.top = (14 + i * 11) + '%';
      l.style.width = (30 + Math.random() * 40).toFixed(0) + 'px'; l.style.left = '-20px';
      l.style.animationDelay = (Math.random() * 0.5).toFixed(2) + 's';
      l.style.animationDuration = (0.35 + Math.random() * 0.3).toFixed(2) + 's';
      lines.appendChild(l);
    }
    scene.appendChild(lines);
    const bloom = document.createElement('div'); bloom.className = 'dash-bloom'; scene.appendChild(bloom);
    let ghost = null;
    el.addEventListener('mouseenter', () => {
      if (el.classList.contains('busy')) return;
      el.classList.add('run');
      if (!ghost && lean) { ghost = document.createElement('div'); ghost.className = 'dash-ghost'; ghost.innerHTML = '<div class="lean">' + lean.innerHTML + '</div>'; scene.appendChild(ghost); }
    });
    el.addEventListener('mouseleave', () => { el.classList.remove('run'); if (ghost) { ghost.remove(); ghost = null; } });
    function flash(lx) { const f = document.createElement('div'); f.className = 'dash-flash'; f.style.left = (lx || 50) + '%'; scene.appendChild(f); setTimeout(() => f.remove(), 300); }
    el.addEventListener('click', () => {
      if (el.classList.contains('busy') || !lean) return;
      el.classList.add('busy'); el.classList.remove('run');
      if (ghost) { ghost.remove(); ghost = null; }
      lean.style.animation = 'none';
      const base = 'rotate(9deg)';
      flash(50);
      lean.style.transition = 'opacity .1s'; lean.style.opacity = '0';
      setTimeout(() => {
        lean.style.transition = 'none'; lean.style.transform = base + ' translateX(78px)';
        requestAnimationFrame(() => {
          lean.style.transition = 'opacity .12s'; lean.style.opacity = '1'; flash(74);
          setTimeout(() => { lean.style.transition = 'transform .35s cubic-bezier(.2,1,.3,1)'; lean.style.transform = base + ' translateX(0)'; }, 130);
        });
      }, 160);
      const msg = document.createElement('div'); msg.className = 'dash-msg'; msg.textContent = 'TOO FAST'; scene.appendChild(msg);
      msg.style.transition = 'opacity .3s'; requestAnimationFrame(() => msg.style.opacity = '1');
      setTimeout(() => { msg.style.opacity = '0'; setTimeout(() => msg.remove(), 300); }, 900);
      setTimeout(() => { el.classList.remove('busy'); lean.style.transition = ''; lean.style.transform = ''; lean.style.opacity = ''; lean.style.animation = ''; }, 1150);
    });
  })();

  /* Qubit — superposition ghosts + probability dots (default) · wave-function collapse (hover) · multiply & restore (click) */
  (function () {
    const el = byKey('quantum'); if (!el) return;
    const scene = el.querySelector('.scene');
    const mainWrap = el.querySelector('.hue');
    const mainBot = mainWrap && mainWrap.querySelector('.bot');
    if (!mainBot) return;

    /* second ghost duplicate (right) */
    const ghost2 = document.createElement('div'); ghost2.className = 'q-ghost2';
    ghost2.innerHTML = mainBot.outerHTML;
    scene.insertBefore(ghost2, scene.firstChild);

    /* quantum probability dots — varied elliptical orbits */
    const dots = document.createElement('div'); dots.className = 'q-dots';
    const DCOL = ['#5fe0ff', '#9a6bff', '#ff7adf', '#bdfcff', '#7d9bff', '#5fe0ff', '#c08bff'];
    for (let i = 0; i < 7; i++) {
      const orbiter = document.createElement('div'); orbiter.className = 'q-orbiter';
      orbiter.style.setProperty('--tilt', (Math.random() * 180 - 90).toFixed(0) + 'deg');
      orbiter.style.setProperty('--sx', (0.7 + Math.random() * 0.6).toFixed(2));
      orbiter.style.setProperty('--sy', (0.35 + Math.random() * 0.4).toFixed(2));
      const spin = document.createElement('div'); spin.className = 'q-spin';
      spin.style.setProperty('--dur', (1.8 + Math.random() * 4).toFixed(2) + 's');
      spin.style.setProperty('--dir', Math.random() < 0.5 ? 'normal' : 'reverse');
      spin.style.setProperty('--dly', (-Math.random() * 5).toFixed(2) + 's');
      const arm = document.createElement('div'); arm.className = 'q-arm';
      arm.style.setProperty('--r', (52 + Math.random() * 60).toFixed(0) + 'px');
      const dot = document.createElement('div'); dot.className = 'q-dot';
      dot.style.background = 'radial-gradient(circle,#fff,' + DCOL[i] + ' 70%)';
      dot.style.color = DCOL[i];
      arm.appendChild(dot); spin.appendChild(arm); orbiter.appendChild(spin); dots.appendChild(orbiter);
    }
    scene.appendChild(dots);

    /* hover overlays */
    const flash = document.createElement('div'); flash.className = 'q-flash'; scene.appendChild(flash);
    const measure = document.createElement('div'); measure.className = 'q-measure';
    measure.innerHTML = '<div class="hline"></div><div class="vline"></div>' +
      '<div class="corner tl"></div><div class="corner tr"></div><div class="corner bl"></div><div class="corner br"></div>';
    scene.appendChild(measure);
    const observe = document.createElement('div'); observe.className = 'q-observe'; scene.appendChild(observe);

    let scatterT = null, typeIv = null;
    el.addEventListener('mouseenter', () => {
      el.classList.add('collapsing');
      clearTimeout(scatterT);
      scatterT = setTimeout(() => el.classList.add('scatter'), 500); // freeze 0.5s then scatter
      // type OBSERVING...
      clearInterval(typeIv);
      const txt = 'OBSERVING...'; let i = 0; observe.textContent = '';
      typeIv = setInterval(() => {
        observe.textContent = txt.slice(0, ++i);
        if (i >= txt.length) clearInterval(typeIv);
      }, 75);
    });
    el.addEventListener('mouseleave', () => {
      clearTimeout(scatterT); clearInterval(typeIv);
      el.classList.remove('collapsing', 'scatter');
      observe.textContent = '';
    });

    /* click — multiply then collapse to one */
    const botHTML = mainBot.outerHTML;
    el.addEventListener('click', () => {
      if (el.classList.contains('q-busy')) return;
      el.classList.add('q-busy');
      const clones = [];
      for (let i = 0; i < 6; i++) {
        const c = document.createElement('div'); c.className = 'q-clone';
        c.style.setProperty('--x', (Math.random() * 150 - 75).toFixed(0) + 'px');
        c.style.setProperty('--y', (Math.random() * 120 - 60).toFixed(0) + 'px');
        c.style.opacity = (0.28 + Math.random() * 0.5).toFixed(2);
        c.style.filter = 'hue-rotate(' + (Math.random() * 220 - 110).toFixed(0) + 'deg) blur(.4px)';
        c.innerHTML = botHTML;
        scene.appendChild(c); clones.push(c);
      }
      requestAnimationFrame(() => clones.forEach(c => c.classList.add('out')));
      setTimeout(() => {
        clones.forEach(c => { c.classList.remove('out'); c.classList.add('in'); });
        const ring = document.createElement('div'); ring.className = 'q-shock'; scene.appendChild(ring); setTimeout(() => ring.remove(), 720);
        const msg = document.createElement('div'); msg.className = 'q-restored'; msg.textContent = 'SUPERPOSITION RESTORED'; scene.appendChild(msg);
        msg.style.transition = 'opacity .3s'; requestAnimationFrame(() => msg.style.opacity = '1');
        setTimeout(() => { msg.style.opacity = '0'; setTimeout(() => msg.remove(), 300); }, 1100);
        setTimeout(() => { clones.forEach(c => c.remove()); el.classList.remove('q-busy'); }, 520);
      }, 650);
    });
  })();
  /* Vector — focused architect expression overlay (hover only, CSS-driven) */
  (function () {
    const el = byKey('arch'); if (!el) return;
    const visor = el.querySelector('.visor'); if (!visor) return;
    const f = document.createElement('div'); f.className = 'arch-focus';
    f.innerHTML = '<i class="furrow fl"></i><i class="furrow fr"></i>' +
      '<i class="abrow al"></i><i class="abrow ar"></i>' +
      '<i class="amouth"></i>';
    visor.appendChild(f);
  })();

};