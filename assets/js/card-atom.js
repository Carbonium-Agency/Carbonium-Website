// ── Card 03 "Multi Agent Automation" realistic atom (transparent canvas) ──
// Extracted verbatim from the bundle's AnimatedServices RealisticAtom effect.
// Pause/resume via window events 'carbonium-card03-active'/'-inactive'
// (dispatched by the page's IntersectionObserver gating). Desktop only.
import * as THREE from './vendor/three.module.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';

export function initCardAtom(host) {
  if (!host) return;
  var raf = null, renderer = null, ro = null, disposed = false, onActiveL = null, onInactiveL = null;

      var W = host.clientWidth||320, H = host.clientHeight||320;

      renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
      renderer.setSize(W, H);
      renderer.setClearAlpha(0);                       // transparent — blends seamlessly into the card (no grey box)
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.18;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;display:block';
      host.appendChild(renderer.domElement);

      var scene = new THREE.Scene();      // no scene.background — fully transparent canvas

      // Studio reflections from RoomEnvironment
      var pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

      var camera = new THREE.PerspectiveCamera(38, W/H, 0.5, 4000);
      camera.position.set(0, 6, 400);
      camera.lookAt(0,0,0);
      // Canvas now spans BOTH panels. Keep the orb fixed over the RIGHT panel by panning the camera
      // so world-origin renders at 75% of the full-width canvas (= centre of the right half).
      // Aspect-independent: as the canvas widens, the pan scales with it, so the orb never moves or resizes.
      var ORB_FRAC = 0.75;
      var _halfW=0,_halfH=0,_camX=0;   // live camera frustum half-extents at z=0 (for reach targeting)
      function applyPan(){
        var halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov/2)) * camera.position.z;
        var halfW = halfH * camera.aspect;
        var camX = -((ORB_FRAC-0.5)*2) * halfW;
        camera.position.x = camX;
        camera.lookAt(camX, 0, 0);
        _halfW=halfW; _halfH=halfH; _camX=camX;
      }
      applyPan();

      // Lighting: RoomEnvironment reflections + hemisphere ambient + key/fill
      scene.add(new THREE.HemisphereLight(0xffffff, 0x555555, 0.65));
      var key = new THREE.DirectionalLight(0xffffff, 1.7);
      key.position.set(4,7,5).multiplyScalar(40); key.castShadow = true;
      key.shadow.mapSize.set(2048,2048); key.shadow.radius = 12; key.shadow.bias = -0.0004;
      var scam = key.shadow.camera; scam.near=1; scam.far=1200; scam.left=-260; scam.right=260; scam.top=260; scam.bottom=-260;
      scene.add(key);
      var fill = new THREE.DirectionalLight(0xffffff, 0.4); fill.position.set(-5,2,-4).multiplyScalar(40); scene.add(fill);

      // ── Matte stone bumpMap: fine grain + scattered micro-craters ──
      function stoneBump(){
        var S=1024, c=document.createElement('canvas'); c.width=c.height=S; var x=c.getContext('2d');
        var img=x.createImageData(S,S), d=img.data;
        for(var i=0;i<d.length;i+=4){ var v=128+(Math.random()-0.5)*150; d[i]=d[i+1]=d[i+2]=v; d[i+3]=255; }
        x.putImageData(img,0,0);
        for(var k=0;k<4000;k++){ var r=2+Math.random()*7; var dark=Math.random()>0.5; x.fillStyle=dark?'rgba(10,10,10,0.85)':'rgba(245,245,245,0.7)'; x.beginPath(); x.arc(Math.random()*S,Math.random()*S,r,0,Math.PI*2); x.fill(); }
        var t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.repeat.set(6,6); return t;
      }

      // ── Materials ──
      var stone = new THREE.MeshStandardMaterial({ color:0x3e3e42, roughness:1.0, metalness:0.05, envMapIntensity:0.55, bumpMap:stoneBump(), bumpScale:1.05 });
      var glass = new THREE.MeshPhysicalMaterial({ color:0xffffff, transmission:0.96, roughness:0.0, ior:1.45, thickness:0.4, metalness:0.0, transparent:true, clearcoat:1.0, clearcoatRoughness:0.04, envMapIntensity:1.4, emissive:0x111111, emissiveIntensity:0.5 });

      // Soft radial glow sprite texture (additive particles + halos)
      function glowSprite(){
        var S=64, c=document.createElement('canvas'); c.width=c.height=S; var x=c.getContext('2d');
        var g=x.createRadialGradient(S/2,S/2,0,S/2,S/2,S/2);
        g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(0.25,'rgba(220,240,255,0.85)');
        g.addColorStop(0.55,'rgba(150,200,255,0.30)'); g.addColorStop(1,'rgba(120,180,255,0)');
        x.fillStyle=g; x.fillRect(0,0,S,S);
        var t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t;
      }
      var sparkTex = glowSprite();

      var atom = new THREE.Group(); scene.add(atom);
      var CORE_R=38, AGENT_R=17, ORBIT=92;

      var core = new THREE.Mesh(new THREE.SphereGeometry(CORE_R,96,96), stone);
      core.castShadow=core.receiveShadow=true; atom.add(core);

      // ── Carbonium "C" identity mark — billboarded arc-reactor glow ──
      function letterTex(shimmer){
        var S=512, c=document.createElement('canvas'); c.width=c.height=S; var x=c.getContext('2d');
        x.clearRect(0,0,S,S);
        var grd=x.createRadialGradient(S/2,S*0.54,S*0.04,S/2,S*0.54,S*0.42);
        grd.addColorStop(0.0,'#ffffff'); grd.addColorStop(0.45,'#dff2ff'); grd.addColorStop(0.8,'#7cd0ff'); grd.addColorStop(1.0,'#4db8ff');
        x.font='700 360px Satoshi, "DM Sans", system-ui, sans-serif'; x.textAlign='center'; x.textBaseline='middle';
        x.shadowColor='rgba(90,190,255,0.8)'; x.shadowBlur=16; x.fillStyle=grd; x.fillText('C',S/2,S*0.54);
        x.shadowBlur=0; x.lineWidth=7; x.strokeStyle='rgba(255,255,255,'+(0.5+0.5*shimmer)+')'; x.strokeText('C',S/2,S*0.54);
        var t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=8; return t;
      }
      var cTexBase = letterTex(0);
      var markGroup = new THREE.Group(); scene.add(markGroup);
      var markSize = CORE_R*1.6;
      var cMark = new THREE.Mesh(new THREE.PlaneGeometry(markSize,markSize), new THREE.MeshStandardMaterial({ map:cTexBase, transparent:true, depthWrite:false, emissive:0xbfe6ff, emissiveIntensity:1.2, emissiveMap:cTexBase, roughness:1, metalness:0, toneMapped:false }));
      markGroup.add(cMark);
      function haloSprite(color, scale, opacity){
        var s=new THREE.Sprite(new THREE.SpriteMaterial({ map:sparkTex, color:color, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, opacity:opacity, toneMapped:false }));
        s.scale.set(markSize*scale, markSize*scale, 1); s.position.z=-2; return s;
      }
      var cHaloInner=haloSprite(0xd6f0ff,1.5,0.28), cHaloMid=haloSprite(0x6fc6ff,2.2,0.4), cHaloOuter=haloSprite(0x2f9bff,3.2,0.3);
      markGroup.add(cHaloOuter); markGroup.add(cHaloMid); markGroup.add(cHaloInner);
      var cBaseScales={ inner:1.5, mid:2.2, outer:3.2 };

      // The Carbonium "C" + its glow always render LAST and ON TOP of everything
      // (orbs, glass, core) — depthTest off + high renderOrder — so no agent orb
      // can ever visually cover the mark, while orbs still orbit freely in 3D.
      cMark.material.depthTest=false; cMark.renderOrder=1000;
      [cHaloOuter,cHaloMid,cHaloInner].forEach(function(h){ h.material.depthTest=false; h.renderOrder=999; });

      // True-3D Fibonacci sphere distribution
      function fib(n){
        var pts=[], ga=Math.PI*(3-Math.sqrt(5));
        for(var i=0;i<n;i++){ var y=1-(i/(n-1))*2; var r=Math.sqrt(Math.max(0,1-y*y)); var th=ga*i; pts.push(new THREE.Vector3(Math.cos(th)*r, y, Math.sin(th)*r)); }
        return pts;
      }
      var nodeGeo=new THREE.SphereGeometry(AGENT_R,64,64);
      var arcs=[], agents=[], _perp=new THREE.Vector3();
      fib(10).forEach(function(dir, i){
        var baseDir=dir.clone();
        var pos=baseDir.clone().multiplyScalar(ORBIT);
        var agentMat=stone.clone(); agentMat.emissive=new THREE.Color(0xcfe8ff); agentMat.emissiveIntensity=0.0;
        var n=new THREE.Mesh(nodeGeo, agentMat); n.position.copy(pos); n.castShadow=n.receiveShadow=true; atom.add(n);
        _perp.set(0,1,0); if(Math.abs(baseDir.y)>0.9) _perp.set(1,0,0);
        var ax1=new THREE.Vector3().crossVectors(baseDir,_perp).normalize();
        var ax2=new THREE.Vector3().crossVectors(baseDir,ax1).normalize();
        var curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3());
        var tube=new THREE.Mesh(new THREE.TubeGeometry(curve,40,0.5,12,false), glass); atom.add(tube);
        arcs.push(curve);
        agents.push({ baseDir:baseDir, mesh:n, mat:agentMat, flash:0, goldFlash:0, pop:0, curve:curve, tube:tube, ax1:ax1, ax2:ax2, phase:i*0.7, sp1:0.5+(i%3)*0.18, sp2:0.37+(i%4)*0.13, amp:12+(i%3)*5 });
      });

      function rebuildArc(a, flex){
        var pos=a.mesh.position; var dir=pos.clone().normalize();
        var start=dir.clone().multiplyScalar(CORE_R*0.9);
        var end=pos.clone().sub(dir.clone().multiplyScalar(AGENT_R*0.7));
        var mid=start.clone().add(end).multiplyScalar(0.5).add(dir.clone().multiplyScalar(10)).add(flex);
        a.curve.v0.copy(start); a.curve.v1.copy(mid); a.curve.v2.copy(end);
        a.curve.updateArcLengths();
        a.tube.geometry.dispose();
        a.tube.geometry=new THREE.TubeGeometry(a.curve,40,0.5,12,false);
      }

      // ── Electric neural-synapse firing along the glass tubes ──
      var TRAIL=7;
      function rand(a,b){ return a+Math.random()*(b-a); }
      function newSprite(scale){
        var s=new THREE.Sprite(new THREE.SpriteMaterial({ map:sparkTex, color:0xcfe8ff, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, opacity:0, toneMapped:false }));
        s.scale.set(scale,scale,1); s.visible=false; atom.add(s); return s;
      }
      var synapses=agents.map(function(a,i){
        var head=newSprite(6.5); var trail=[]; for(var k=0;k<TRAIL;k++) trail.push(newSprite(5.5-k*0.4));
        return { agent:a, curve:a.curve, head:head, trail:trail, next:rand(0.3,2.0), firing:false, u:0, dir:1, speed:0.05 };
      });
      function fire(syn){ syn.firing=true; syn.dir=Math.random()<0.5?1:-1; syn.u=0; syn.speed=rand(0.04,0.07); syn.next=rand(0.4,2.5); }
      var cascadeTimer=rand(3,6);

      // ── Assignment pulse: ONE directed white-gold pulse, core → next agent in sequence (0→9 looping) ──
      function goldGlow(){
        var S=64, c=document.createElement('canvas'); c.width=c.height=S; var x=c.getContext('2d');
        var g=x.createRadialGradient(S/2,S/2,0,S/2,S/2,S/2);
        g.addColorStop(0,'rgba(255,255,250,1)'); g.addColorStop(0.22,'rgba(255,244,214,0.96)');
        g.addColorStop(0.55,'rgba(255,207,87,0.5)'); g.addColorStop(1,'rgba(255,190,40,0)');
        x.fillStyle=g; x.fillRect(0,0,S,S);
        var tx=new THREE.CanvasTexture(c); tx.colorSpace=THREE.SRGBColorSpace; return tx;
      }
      var goldTex=goldGlow();
      var GTRAIL=11;
      function goldSprite(scale){
        var s=new THREE.Sprite(new THREE.SpriteMaterial({ map:goldTex, color:0xffe9a8, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, opacity:0, toneMapped:false }));
        s.scale.set(scale,scale,1); s.visible=false; atom.add(s); return s;
      }
      var assignHead=goldSprite(11);
      var assignTrail=[]; for(var gi=0;gi<GTRAIL;gi++) assignTrail.push(goldSprite(10-gi*0.55));
      var assignIndex=0;              // deterministic 0..9 looping target
      var assignActive=false, assignU=0, assignSpeed=0.032;
      var assignTimer=2.0;           // first assignment soon, then every ~3.5s

      // Delivery FX: a brighter gold pulse fired orb->core when a task is delivered,
      // plus a gold "received" flash on the core.
      var delivHead=goldSprite(13);
      var delivTrail=[]; for(var _dvi=0;_dvi<8;_dvi++) delivTrail.push(goldSprite(12-_dvi*0.8));
      var coreFlash=0;
      // Permanent task removal + rain replenishment bookkeeping.
      var taskRemoved={}, rains=[];
      function easeOutBounce(x){ var n1=7.5625,d1=2.75; if(x<1/d1)return n1*x*x; if(x<2/d1){x-=1.5/d1;return n1*x*x+0.75;} if(x<2.5/d1){x-=2.25/d1;return n1*x*x+0.9375;} x-=2.625/d1;return n1*x*x+0.984375; }

      // ── Heartbeat ripple ring (faces camera, expands + fades each beat) ──
      var ripple=new THREE.Mesh(new THREE.RingGeometry(CORE_R*0.9, CORE_R*0.9+2.2, 96), new THREE.MeshBasicMaterial({ color:0xcfe8ff, transparent:true, opacity:0, blending:THREE.AdditiveBlending, side:THREE.DoubleSide, depthWrite:false, toneMapped:false }));
      atom.add(ripple);

      // ── Animate: slow weightless tumble + core self-rotation ──
      atom.rotation.set(0.32, 0.0, 0.12);

      // ── Reach-and-return: when the gold pulse hits an orb, that orb lobs out
      // over the LEFT panel toward a random task cell, hovers, then arcs back.
      // Path stays ABOVE the figure's head the whole way except the final dip.
      var REACH_DUR=3.2;                       // seconds, < assignTimer so only one reaches at a time
      var _zeroFlex=new THREE.Vector3();
      var _tmpF=new THREE.Vector3(), _tmpQ=new THREE.Quaternion(), _unitX=new THREE.Vector3(1,0,0);
      var _tmpUp=new THREE.Vector3(), _tmpQ2=new THREE.Quaternion();
      function eio(u){ u=u<0?0:u>1?1:u; return u<0.5?2*u*u:1-Math.pow(-2*u+2,2)/2; }
      // task cells live in the FAR-LEFT grid; aim at their real on-screen
      // positions at trigger time. These fractions are only a fallback.
      var REACH_LABELS=['Emails','Phone Calls','Meetings','Targets','Leads','Invoices','Payroll','Reports','Hiring','Budgeting','Proposals','Follow-ups','Scheduling','Contracts','Expenses','Analytics','Support','Social Posts','Client Calls','Onboarding'];
      // Per-task icons (raw SVG, drawn in the cell's 0..24 icon frame). Swapped onto a
      // cell whenever its label changes, so every task name shows its own matching icon.
      var ICONS={
        'Emails':'<rect x="2" y="5" width="20" height="14" rx="2.5" fill="none" stroke="#222" stroke-width="2"/><path d="M3.5,7.5 L12,13 L20.5,7.5" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Phone Calls':'<path d="M3,3 C3,2 4,1.5 5.5,2 L8,3.5 C9,4 9,5 8.5,6 L7.5,7 C9,10.5 13.5,15 17,16.5 L18,15.5 C19,15 20,15 20.5,16 L22,18.5 C22.5,20 22,21 21,21 C11,21 3,13 3,3 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/>',
        'Meetings':'<circle cx="8" cy="8" r="3.5" fill="none" stroke="#222" stroke-width="2"/><circle cx="16" cy="8" r="3.5" fill="none" stroke="#222" stroke-width="2"/><path d="M2,20 C2,15.5 5,13.5 8,13.5 C11,13.5 14,15.5 14,20" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round"/><path d="M10,20 C10,15.5 13,13.5 16,13.5 C19,13.5 22,15.5 22,20" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round"/>',
        'Targets':'<circle cx="12" cy="12" r="10" fill="none" stroke="#222" stroke-width="2"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#222" stroke-width="2"/><circle cx="12" cy="12" r="1.9" fill="#222"/>',
        'Leads':'<path d="M2.5,4 L21.5,4 L14,13 L14,20 L10,18 L10,13 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/>',
        'Invoices':'<path d="M5,2 L19,2 L19,22 L16,20 L13,22 L10,20 L7,22 L5,20 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/><line x1="9" y1="8" x2="15" y2="8" stroke="#222" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="12" x2="15" y2="12" stroke="#222" stroke-width="2" stroke-linecap="round"/>',
        'Payroll':'<circle cx="12" cy="12" r="10" fill="none" stroke="#222" stroke-width="2"/><text x="12" y="16.5" text-anchor="middle" font-size="13" font-weight="800" fill="#222" font-family="DM Sans,sans-serif">$</text>',
        'Reports':'<line x1="3" y1="21" x2="21" y2="21" stroke="#222" stroke-width="2" stroke-linecap="round"/><rect x="5" y="12" width="3.6" height="9" fill="none" stroke="#222" stroke-width="2"/><rect x="10.4" y="6.5" width="3.6" height="14.5" fill="none" stroke="#222" stroke-width="2"/><rect x="15.8" y="14" width="3.6" height="7" fill="none" stroke="#222" stroke-width="2"/>',
        'Hiring':'<circle cx="9" cy="8.5" r="4" fill="none" stroke="#222" stroke-width="2"/><path d="M2,21 C2,15 5.5,13 9,13 C11,13 13,13.7 14.5,15.2" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round"/><line x1="18.5" y1="12.5" x2="18.5" y2="21" stroke="#222" stroke-width="2" stroke-linecap="round"/><line x1="14.5" y1="16.7" x2="22.5" y2="16.7" stroke="#222" stroke-width="2" stroke-linecap="round"/>',
        'Budgeting':'<rect x="4" y="2" width="16" height="20" rx="2.5" fill="none" stroke="#222" stroke-width="2"/><rect x="7" y="5" width="10" height="4" rx="1" fill="none" stroke="#222" stroke-width="1.6"/><circle cx="8" cy="13.5" r="1" fill="#222"/><circle cx="12" cy="13.5" r="1" fill="#222"/><circle cx="16" cy="13.5" r="1" fill="#222"/><circle cx="8" cy="18" r="1" fill="#222"/><circle cx="12" cy="18" r="1" fill="#222"/><circle cx="16" cy="18" r="1" fill="#222"/>',
        'Proposals':'<path d="M5,2 L19,2 L19,22 L5,22 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/><line x1="8" y1="7" x2="16" y2="7" stroke="#222" stroke-width="1.6" stroke-linecap="round"/><path d="M7.5,17 q2,-3 4,0 t4,0" fill="none" stroke="#222" stroke-width="1.8" stroke-linecap="round"/><path d="M16,10.5 L19,7.5 L20.5,9 L17.5,12 Z" fill="none" stroke="#222" stroke-width="1.5" stroke-linejoin="round"/>',
        'Follow-ups':'<path d="M19.5,12 A7.5,7.5 0 1 0 12,19.5" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round"/><path d="M12,15.5 L12,19.7 L8,19.7" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Scheduling':'<rect x="3" y="4" width="18" height="17" rx="2" fill="none" stroke="#222" stroke-width="2"/><line x1="3" y1="9" x2="21" y2="9" stroke="#222" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="#222" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="2" x2="16" y2="6" stroke="#222" stroke-width="2" stroke-linecap="round"/><circle cx="8.5" cy="14" r="1.3" fill="#222"/><circle cx="13" cy="14" r="1.3" fill="#222"/><circle cx="17" cy="14" r="1.3" fill="#222"/>',
        'Contracts':'<path d="M5,2 L19,2 L19,22 L5,22 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/><line x1="8" y1="7" x2="16" y2="7" stroke="#222" stroke-width="1.6" stroke-linecap="round"/><line x1="8" y1="11" x2="16" y2="11" stroke="#222" stroke-width="1.6" stroke-linecap="round"/><circle cx="13.5" cy="16.5" r="3" fill="none" stroke="#222" stroke-width="1.6"/><path d="M11.8,18.8 L11,21.5 L13.5,20 L16,21.5 L15.2,18.8" fill="none" stroke="#222" stroke-width="1.3" stroke-linejoin="round"/>',
        'Expenses':'<path d="M6,2 L18,2 L18,21 L15.5,19.5 L13,21 L10.5,19.5 L8,21 L6,19.5 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/><line x1="9" y1="7" x2="15" y2="7" stroke="#222" stroke-width="1.5" stroke-linecap="round"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="800" fill="#222" font-family="DM Sans,sans-serif">$</text>',
        'Analytics':'<line x1="3" y1="21" x2="21" y2="21" stroke="#222" stroke-width="2" stroke-linecap="round"/><rect x="5" y="14" width="3.4" height="7" fill="none" stroke="#222" stroke-width="2"/><rect x="10.3" y="11" width="3.4" height="10" fill="none" stroke="#222" stroke-width="2"/><rect x="15.6" y="8" width="3.4" height="13" fill="none" stroke="#222" stroke-width="2"/><polyline points="6.7,12 12,9 17.3,5.5" fill="none" stroke="#222" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
        'Support':'<path d="M4,14 V11 a8,8 0 0 1 16,0 V14" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round"/><rect x="2.5" y="13" width="3.8" height="7" rx="1.6" fill="none" stroke="#222" stroke-width="2"/><rect x="17.7" y="13" width="3.8" height="7" rx="1.6" fill="none" stroke="#222" stroke-width="2"/>',
        'Social Posts':'<path d="M4,4 L20,4 a2,2 0 0 1 2,2 L22,14 a2,2 0 0 1 -2,2 L12,16 L7,20 L7,16 L4,16 a2,2 0 0 1 -2,-2 L2,6 a2,2 0 0 1 2,-2 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/><path d="M12,13.5 C8.3,10.8 9.6,7.3 12,9.2 C14.4,7.3 15.7,10.8 12,13.5 Z" fill="none" stroke="#222" stroke-width="1.5" stroke-linejoin="round"/>',
        'Client Calls':'<path d="M3,3 C3,2 4,1.5 5.5,2 L8,3.5 C9,4 9,5 8.5,6 L7.5,7 C9,10.5 13.5,15 17,16.5 L18,15.5 C19,15 20,15 20.5,16 L22,18.5 C22.5,20 22,21 21,21 C11,21 3,13 3,3 Z" fill="none" stroke="#222" stroke-width="2" stroke-linejoin="round"/><path d="M14.5,2.5 a4,4 0 0 1 4,4" fill="none" stroke="#222" stroke-width="1.3" stroke-linecap="round"/><path d="M14,6 a2,2 0 0 1 2,2" fill="none" stroke="#222" stroke-width="1.3" stroke-linecap="round"/>',
        'Onboarding':'<circle cx="9" cy="8" r="4" fill="none" stroke="#222" stroke-width="2"/><path d="M2,21 C2,15.5 5.5,13.5 9,13.5 C10.8,13.5 12.4,14 13.6,15" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round"/><path d="M14.5,17.5 L17,20 L21.5,14.5" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
      };
      var REACH_FX=[0.05,0.09,0.13,0.17,0.21], REACH_FY=[0.60,0.74];
      var _rp=new THREE.Vector3();
      function reachWorld(rt, home, tx, ty){
        var HY=_halfH*0.7, tz=0;                 // HY = high travel altitude (above the figure's head)
        function seg(a,b){ return eio(THREE.MathUtils.clamp((rt-a)/(b-a),0,1)); }
        // CLAW-MACHINE L-PATH. Horizontal legs ride high; only the leg over the
        // basket (far left of the figure) drops vertically. Rounded corners come
        // from the X and Y eased timelines overlapping slightly in time.
        var hp=seg(0.10,0.34)-seg(0.70,0.92);    // horizontal: home -> task (out) -> home (back)
        var x=home.x+(tx-home.x)*hp;
        var z=home.z+(tz-home.z)*hp;
        var y;
        if(rt<0.14)      y=home.y+(HY-home.y)*seg(0,0.14);     // 1) rise straight up out of the slot
        else if(rt<0.32) y=HY;                                 // 2) travel left, high, over+past the figure
        else if(rt<0.46) y=HY+(ty-HY)*seg(0.32,0.46);          // 3) drop straight down onto the task (left of figure)
        else if(rt<0.58) y=ty;                                 // 4) hover (~0.4s)
        else if(rt<0.70) y=ty+(HY-ty)*seg(0.58,0.70);          // 5) rise straight back up
        else if(rt<0.90) y=HY;                                 // 6) travel right, high, back over the cluster
        else             y=HY+(home.y-HY)*seg(0.90,1.0);       // 7) drop into the orbit slot
        return _rp.set(x,y,z);
      }
      var t=0, running=false;
      function tick(){
        if(!running) return;            // gated on Card 03 visibility (IntersectionObserver in AgentOrbitalVis)
        raf=requestAnimationFrame(tick);
        t+=0.01;
        atom.rotation.y+=0.0024; atom.rotation.x+=0.0009;
        atom.position.y=Math.sin(t*0.6)*6+Math.sin(t*1.7)*1.5;   // gentle weightless bob, centered on 0
        atom.position.x=Math.sin(t*0.45)*3;
        core.rotation.y+=0.0016;
        var hb=t%1.4, beat=0;
        if(hb<0.12) beat=Math.sin((hb/0.12)*Math.PI)*0.06;             // lub
        else if(hb<0.34) beat=Math.sin(((hb-0.22)/0.12)*Math.PI)*0.04; // dub
        if(beat<0) beat=0;
        var sc2=1+beat; core.scale.set(sc2,sc2,sc2);
        // gold "task received" flash on the core (~0.2s, quick expand + glow)
        if(coreFlash>0){ coreFlash=Math.max(0,coreFlash-(1/0.2)/60); var _cfk=Math.sin(THREE.MathUtils.clamp(coreFlash,0,1)*Math.PI);
          core.material.emissive.setHex(0xfff4d6); core.material.emissiveIntensity=_cfk*1.9; var _cfs=sc2*(1+_cfk*0.09); core.scale.set(_cfs,_cfs,_cfs);
        } else { core.material.emissiveIntensity=0; }

        // Carbonium "C": billboarded on the camera-facing core surface, pulses with the beat
        var coreWorld=new THREE.Vector3(); atom.getWorldPosition(coreWorld);
        var toCam=camera.position.clone().sub(coreWorld).normalize();
        markGroup.position.copy(coreWorld).addScaledVector(toCam, CORE_R*sc2+2.5);
        markGroup.lookAt(camera.position);
        var flare=beat*7.0, shimmer=0.5+0.5*Math.sin(t*4.0);
        cMark.material.emissiveIntensity=1.7+flare+shimmer*0.3;
        var hpc=1+beat*3.0;
        cHaloInner.material.opacity=0.28+beat*1.6; cHaloMid.material.opacity=0.4+beat*2.2; cHaloOuter.material.opacity=0.3+beat*1.8+shimmer*0.04;
        cHaloInner.scale.set(markSize*cBaseScales.inner*hpc, markSize*cBaseScales.inner*hpc, 1);
        cHaloMid.scale.set(markSize*cBaseScales.mid*hpc, markSize*cBaseScales.mid*hpc, 1);
        cHaloOuter.scale.set(markSize*cBaseScales.outer*(1+beat*2.0), markSize*cBaseScales.outer*(1+beat*2.0), 1);

        // agents drift; glass flexes to follow
        // Gentle lateral bias: ease any orb that drifts into the small
        // front-and-centre zone over the C sideways out to the zone edge.
        // Depth (distance toward camera) is left untouched, so no orb is ever
        // hidden, shrunk, or pushed behind — it only slides around the ring.
        var _vDir=atom.worldToLocal(camera.position.clone()).normalize();
        var _side=new THREE.Vector3().crossVectors(_vDir,new THREE.Vector3(0,1,0));
        if(_side.lengthSq()<1e-4)_side.set(1,0,0);
        _side.normalize();
        var _biasR=CORE_R*0.8+AGENT_R;   // clear the C's footprint
        for(var ai=0;ai<agents.length;ai++){
          var a=agents[ai];
          var d1=Math.sin(t*a.sp1+a.phase)*a.amp, d2=Math.cos(t*a.sp2+a.phase*1.3)*a.amp;
          var breathe=1+Math.sin(t*0.5+a.phase)*0.04;
          a.mesh.position.copy(a.baseDir).multiplyScalar(ORBIT*breathe).addScaledVector(a.ax1,d1).addScaledVector(a.ax2,d2);
          if(a.reaching){
            // the just-assigned orb lobs out to the left panel and back; its
            // normal-drift position above is the live "home" anchor it returns to.
            a.reachT += 1/60;
            var _rt=THREE.MathUtils.clamp(a.reachT/REACH_DUR,0,1);
            var _home=atom.localToWorld(a.mesh.position.clone());
            var _w=reachWorld(_rt, _home, a.reachTX, a.reachTY);
            a.mesh.position.copy(atom.worldToLocal(_w.clone()));
            // ROUND-SILHOUETTE CORRECTION (perspective, not a mesh stretch):
            // a rigid sphere this far off the wide-FOV optical axis projects to
            // an ellipse. Cancel it by squashing the orb by cos(off-axis angle)
            // along the view-radial. The correction is WEIGHTED by reach phase so
            // it fades fully to zero (true round sphere) as the orb rejoins its
            // slot — identical to the other 9 cluster orbs once home.
            var _pw=eio(THREE.MathUtils.clamp((_rt-0.08)/0.10,0,1))*(1-eio(THREE.MathUtils.clamp((_rt-0.90)/0.10,0,1)));
            var _cf=camera.getWorldDirection(_tmpF);
            var _to=_w.clone().sub(camera.position); var _dd=_to.length();
            var _cos=THREE.MathUtils.clamp(_to.dot(_cf)/_dd,0.4,1);
            _to.addScaledVector(_cf,-_to.dot(_cf));     // view-radial (world)
            if(_pw>0.001 && _to.lengthSq()>1e-6 && _cos<0.999){
              _to.normalize().applyQuaternion(atom.getWorldQuaternion(_tmpQ).invert()); // -> orb-local
              a.mesh.quaternion.setFromUnitVectors(_unitX,_to);
              a.mesh.scale.set(1+(_cos-1)*_pw,1,1);     // squash ramps out as _pw -> 0
            } else { a.mesh.quaternion.identity(); a.mesh.scale.set(1,1,1); }
            if(_rt>=1){ a.reaching=false; a.pop=0; a.mesh.quaternion.identity(); a.mesh.scale.set(1,1,1);
              if(a.task && a.task.clone){ a.delivering=true; a.deliverT=0; a.coreHit=false; }   // hand off to the delivery sequence
              else { if(a.task&&a.task.g){ a.task.g.setAttribute('transform',a.task.orig); a.task.g.style.opacity=''; if(a.task.ov) a.task.ov.remove(); } a.task=null; } }
            // Route the glass tether through a fixed GATEWAY that is LEFT of and
            // ABOVE the figure whenever the orb is on the figure's left side. For
            // EVERY task (incl. right-column near ones) the tube then arches over
            // the head (core->gateway crosses the figure x up high) and descends
            // on the LEFT of the figure (gateway->orb stays left of it) — never
            // into the arm/body. Weighted in only once the orb is past the figure.
            var _figRX=_camX+(0.363-0.5)*2*_halfW;                 // figure right edge (world x)
            var _routeW=eio(THREE.MathUtils.clamp((_figRX-_w.x)/(_halfW*0.30),0,1));
            var _pos=a.mesh.position, _dir=_pos.clone().normalize();
            var _gmid=_dir.clone().multiplyScalar(CORE_R*0.9).add(_pos.clone().addScaledVector(_dir,-AGENT_R*0.7)).multiplyScalar(0.5).addScaledVector(_dir,10);
            var _gateW=_tmpUp.set(_camX+(0.22-0.5)*2*_halfW, _halfH*0.7, 0);   // gateway: left of + above figure
            var _flex=atom.worldToLocal(_gateW.clone()).sub(_gmid).multiplyScalar(_routeW);
            rebuildArc(a, _flex);   // glass connector stretches/retracts + arches over the figure
            // ── MAGNET GRAB + CARRY + FADE (placeholder for "delivered") ──
            // <0.40: cell sits in the grid. 0.40-0.46: magnet jitter + lift toward
            // the descending orb. >=0.46: snapped onto the orb (shrunk, just under
            // it) and rides the claw path back, fading out as it nears the cluster.
            if(a.task && a.task.g){
              var _tg=a.task.g, _T=a.task;
              if(_rt<0.40){
                _tg.setAttribute('transform', _T.orig); _tg.style.opacity='';   // still resting in the grid
              } else {
                // GRABBED: a CLONE rides in an overlay ABOVE the 3D canvas (z-index 30),
                // locked to the orb's screen position EVERY frame; the original cell is
                // hidden immediately so the task never lingers/detaches at the basket.
                if(!_T.clone){
                  var _ov=document.createElement('div');
                  _ov.style.cssText='position:absolute;inset:0;pointer-events:none;overflow:visible;z-index:30';
                  var _osvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
                  _osvg.style.cssText='position:absolute;inset:0;width:100%;height:100%;overflow:visible';
                  var _cl=_tg.cloneNode(true); _cl.style.opacity='';
                  _osvg.appendChild(_cl); _ov.appendChild(_osvg); host.appendChild(_ov);
                  _T.ov=_ov; _T.clone=_cl;
                }
                _tg.style.opacity='0';
                var _cr=host.getBoundingClientRect();
                var _vv=_w.clone().project(camera);
                var _rc=renderer.domElement.getBoundingClientRect();
                var _sx=_rc.left+(_vv.x*0.5+0.5)*_rc.width, _sy=_rc.top+(-_vv.y*0.5+0.5)*_rc.height;
                var _jw=_rt<0.4726?(0.4726-_rt)/0.0726:0;                 // brief settle wobble right after the grab (10% slower snap, twice)
                var _jx=Math.sin(_rt*150)*2.0*_jw, _jy=Math.cos(_rt*168)*1.6*_jw;
                _T.clone.setAttribute('transform','translate('+(_sx-_cr.left+_jx).toFixed(1)+','+(_sy-_cr.top+_jy).toFixed(1)+') scale(0.75)');   // centered ON the orb
                _T.clone.style.opacity='1';
              }
            }
            continue;
          }
          var _fr=a.mesh.position.dot(_vDir);
          var _lv=a.mesh.position.clone().addScaledVector(_vDir,-_fr);
          var _ll=_lv.length();
          if(_fr>0 && _ll<_biasR){
            var _fg=THREE.MathUtils.clamp(_fr/(CORE_R*0.6),0,1); _fg=_fg*_fg*(3-2*_fg);
            var _cw=THREE.MathUtils.clamp(1-_ll/_biasR,0,1); _cw=_cw*_cw*(3-2*_cw);
            var _g=_fg*_cw;
            var _nl=_ll+(_biasR-_ll)*_g;
            var _dir=_ll>1e-3?_lv.multiplyScalar(1/_ll):_side;
            a.mesh.position.copy(_dir).multiplyScalar(_nl).addScaledVector(_vDir,_fr);
          }
          var flex=a.ax1.clone().multiplyScalar(d1*1.5).addScaledVector(a.ax2,d2*1.5).addScaledVector(a.ax1, Math.sin(t*1.3+a.phase*2.0)*a.amp*0.9).addScaledVector(a.ax2, Math.cos(t*0.9+a.phase)*a.amp*0.9);
          rebuildArc(a, flex);
        }

        glass.emissiveIntensity=0.5+beat*5.0;

        var ringPhase=hb/0.7;
        if(ringPhase<=1){ var e=1+ringPhase*2.2; ripple.scale.set(e,e,e); ripple.material.opacity=0.5*(1-ringPhase); ripple.quaternion.copy(camera.quaternion); ripple.visible=true; }
        else ripple.visible=false;

        // synapse firing + cascades
        var dt=1/60;
        cascadeTimer-=dt;
        if(cascadeTimer<=0){
          cascadeTimer=rand(3,6);
          var idxs=synapses.map(function(_,k){return k;}).sort(function(){return Math.random()-0.5;}).slice(0, 3+(Math.random()<0.5?1:0));
          idxs.forEach(function(k,nn){ if(!synapses[k].firing) synapses[k].next=Math.min(synapses[k].next, 0.04+nn*0.05); });
        }
        for(var si=0;si<synapses.length;si++){
          var syn=synapses[si];
          if(!syn.firing){ syn.next-=dt; if(syn.next<=0) fire(syn); }
          if(syn.firing){
            syn.u+=syn.speed;
            var headU=syn.dir>0?syn.u:1-syn.u;
            syn.head.visible=true;
            syn.head.position.copy(syn.curve.getPoint(THREE.MathUtils.clamp(headU,0,1)));
            syn.head.material.opacity=0.95;
            syn.head.scale.setScalar(6.5*(1+beat*1.2));
            for(var k2=0;k2<syn.trail.length;k2++){
              var tu=syn.u-(k2+1)*0.05; var spr=syn.trail[k2];
              if(tu<0){ spr.visible=false; continue; }
              var su=syn.dir>0?tu:1-tu;
              spr.visible=true; spr.position.copy(syn.curve.getPoint(THREE.MathUtils.clamp(su,0,1)));
              spr.material.opacity=0.8*(1-(k2+1)/(syn.trail.length+1));
            }
            if(syn.u>=1){ if(syn.dir>0) syn.agent.flash=1; syn.firing=false; syn.head.visible=false; syn.trail.forEach(function(s){ s.visible=false; }); }
          }
        }
        // ── Assignment pulse (deterministic gold, core → agents[assignIndex]) ──
        assignTimer-=dt;
        if(!assignActive && assignTimer<=0){ assignActive=true; assignU=0; }
        if(assignActive){
          var tgt=agents[assignIndex];
          assignU+=assignSpeed;
          assignHead.visible=true;
          assignHead.position.copy(tgt.curve.getPoint(THREE.MathUtils.clamp(assignU,0,1)));
          assignHead.material.opacity=1.0;
          assignHead.scale.setScalar(11*(1+beat*1.0));
          for(var gk=0;gk<assignTrail.length;gk++){
            var gu=assignU-(gk+1)*0.045; var gs=assignTrail[gk];
            if(gu<0){ gs.visible=false; continue; }
            gs.visible=true; gs.position.copy(tgt.curve.getPoint(THREE.MathUtils.clamp(gu,0,1)));
            gs.material.opacity=0.95*(1-(gk+1)/(assignTrail.length+1.5));
          }
          if(assignU>=1){
            tgt.goldFlash=1; tgt.pop=1;        // "you're assigned" — strong gold flash + scale pop
            // begin reach-and-return toward a random task cell on the left panel
            tgt.reaching=true; tgt.reachT=0; tgt.task=null;
            // Aim the dip at a REAL task cell in the far-left grid (never the figure):
            // read the on-screen rect of a random labelled cell and map it to world,
            // and keep that cell so it can be magnet-grabbed & carried back.
            var _cv=renderer.domElement.getBoundingClientRect(), _fx, _fy;
            var _lsvg=host.parentNode.querySelector('svg');   // left-panel grid SVG only (never the overlay clone)
            var _cells=[].slice.call(_lsvg.querySelectorAll('text')).filter(function(tn){
              return REACH_LABELS.indexOf((tn.textContent||'').trim())>=0 && !tn.parentNode.__rm;   // only remaining (non-removed) tasks
            });
            if(!_cells.length){ _cells=[].slice.call(_lsvg.querySelectorAll('text')).filter(function(tn){ return REACH_LABELS.indexOf((tn.textContent||'').trim())>=0; }); _cells.forEach(function(tn){ tn.parentNode.__rm=false; }); }
            if(_cells.length){
              var _pick=_cells[Math.floor(Math.random()*_cells.length)];
              var _c=_pick.getBoundingClientRect();
              _fx=(_c.left+_c.width/2-_cv.left)/_cv.width;
              _fy=(_c.top+_c.height/2-_cv.top)/_cv.height-0.03;   // nudge onto the cell body (label sits at its base)
              var _cg=_pick.parentNode;
              tgt.task={ g:_cg, svg:_cg.ownerSVGElement, orig:(_cg.getAttribute('transform')||''), label:(_pick.textContent||'').trim() };
            } else {
              var _ri=Math.floor(Math.random()*10);
              _fx=REACH_FX[_ri%5]; _fy=REACH_FY[Math.floor(_ri/5)];
            }
            tgt.reachTX=_camX+(_fx-0.5)*2*_halfW;
            tgt.reachTY=(0.5-_fy)*2*_halfH;
            assignActive=false; assignTimer=3.5; assignIndex=(assignIndex+1)%agents.length;
            assignHead.visible=false; assignTrail.forEach(function(s){ s.visible=false; });
          }
        }

        for(var fi=0;fi<agents.length;fi++){
          var ag=agents[fi];
          if(ag.goldFlash>0){
            ag.goldFlash=Math.max(0, ag.goldFlash-dt/0.6);   // slower, lingering gold
            ag.mat.emissive.setHex(0xffcf57);
            ag.mat.emissiveIntensity=ag.goldFlash*2.2;
          } else if(ag.flash>0){
            ag.flash=Math.max(0, ag.flash-dt/0.3);
            ag.mat.emissive.setHex(0xcfe8ff);
            ag.mat.emissiveIntensity=ag.flash*0.9;
          } else {
            ag.mat.emissiveIntensity=0;
          }
          if(ag.reaching){
            /* scale/orientation handled by the round-silhouette correction in the reach block */
          } else {
            if(ag.pop>0) ag.pop=Math.max(0, ag.pop-dt/0.5);   // brief scale-pop, up-then-settle
            ag.mesh.scale.setScalar(1+Math.sin(ag.pop*Math.PI)*0.42);
          }
        }

        // ── DELIVERY SEQUENCE: processing shimmer → dissolve into the glass tube
        // → gold pulse down the tube to the core → core flash → cleanup (~1.2s) ──
        for(var dvj=0;dvj<agents.length;dvj++){
          var dag=agents[dvj];
          if(!dag.delivering) continue;
          dag.deliverT+=1/60;
          var _DT=dag.deliverT, _Tk=dag.task, _cl=_Tk&&_Tk.clone;
          var _ovr=host.getBoundingClientRect(), _rcr=renderer.domElement.getBoundingClientRect();
          var _owp=dag.mesh.getWorldPosition(new THREE.Vector3()).project(camera);
          var _osx=_rcr.left+(_owp.x*0.5+0.5)*_rcr.width, _osy=_rcr.top+(-_owp.y*0.5+0.5)*_rcr.height;
          var _cwp=atom.getWorldPosition(new THREE.Vector3()).project(camera);
          var _csx=_rcr.left+(_cwp.x*0.5+0.5)*_rcr.width, _csy=_rcr.top+(-_cwp.y*0.5+0.5)*_rcr.height;
          if(_cl){
            if(_DT<0.30){                                     // (1) processing shimmer on the orb
              var _br=1+0.5*Math.sin((_DT/0.30)*Math.PI);
              _cl.style.filter='brightness('+_br.toFixed(2)+')'; _cl.style.opacity='1';
              _cl.setAttribute('transform','translate('+(_osx-_ovr.left).toFixed(1)+','+(_osy-_ovr.top).toFixed(1)+') scale(0.75)');
            } else {                                          // (2) SHATTER: split into fragments that scatter, spin, shrink + fade
              if(!_Tk.frags){
                _cl.style.opacity='0'; _cl.style.filter='';
                var _fc=document.createElement('div');
                _fc.style.cssText='position:absolute;left:'+(_osx-_ovr.left).toFixed(1)+'px;top:'+(_osy-_ovr.top).toFixed(1)+'px;width:0;height:0;pointer-events:none';
                var _cwp2=52,_chp2=46,_cols=5,_rows=4,_fw=_cwp2/_cols,_fh=_chp2/_rows;
                var _gs=_cl.cloneNode(true); _gs.removeAttribute('transform'); _gs.style.opacity='';
                var _cellHTML='<svg width="'+_cwp2+'" height="'+_chp2+'" viewBox="-30 -30 60 60" style="overflow:visible;position:absolute;left:0;top:0">'+_gs.outerHTML+'</svg>';
                _Tk.frags=[];
                for(var _rr=0;_rr<_rows;_rr++)for(var _coo=0;_coo<_cols;_coo++){
                  var _fo=document.createElement('div');
                  _fo.style.cssText='position:absolute;overflow:hidden;width:'+_fw+'px;height:'+_fh+'px;left:'+(_coo*_fw-_cwp2/2)+'px;top:'+(_rr*_fh-_chp2/2)+'px;transform-origin:center';
                  var _fi=document.createElement('div');
                  _fi.style.cssText='position:absolute;left:'+(-_coo*_fw)+'px;top:'+(-_rr*_fh)+'px;width:'+_cwp2+'px;height:'+_chp2+'px';
                  _fi.innerHTML=_cellHTML; _fo.appendChild(_fi); _fc.appendChild(_fo);
                  var _ang=Math.random()*6.283, _dist=10+Math.random()*10;
                  _Tk.frags.push({el:_fo, dx:Math.cos(_ang)*_dist, dy:Math.sin(_ang)*_dist, rot:Math.random()*30-15, stag:(_rr*_cols+_coo)*0.012});
                }
                _Tk.ov.appendChild(_fc);
              }
              for(var _fk=0;_fk<_Tk.frags.length;_fk++){
                var _F=_Tk.frags[_fk], _lt=_DT-0.30-_F.stag, _fr=THREE.MathUtils.clamp(_lt/0.5,0,1), _e=_fr*_fr*(3-2*_fr);
                _F.el.style.transform='translate('+(_F.dx*_e).toFixed(1)+'px,'+(_F.dy*_e).toFixed(1)+'px) rotate('+(_F.rot*_e).toFixed(1)+'deg) scale('+(1-_e).toFixed(3)+')';
                _F.el.style.opacity=(1-_e).toFixed(3);
              }
            }
          }
          if(_DT>=0.30 && _DT<0.95){                          // (3) gold pulse orb -> core down the tube
            var _gu=1-THREE.MathUtils.clamp((_DT-0.30)/0.60,0,1);
            delivHead.visible=true; delivHead.position.copy(dag.curve.getPoint(_gu)); delivHead.material.opacity=1.0; delivHead.scale.setScalar(13);
            for(var dk=0;dk<delivTrail.length;dk++){
              var _tu=_gu+(dk+1)*0.05, _ds=delivTrail[dk];
              if(_tu>1){ _ds.visible=false; continue; }
              _ds.visible=true; _ds.position.copy(dag.curve.getPoint(_tu)); _ds.material.opacity=0.85*(1-(dk+1)/(delivTrail.length+1));
            }
          } else { delivHead.visible=false; for(var dk2=0;dk2<delivTrail.length;dk2++) delivTrail[dk2].visible=false; }
          if(!dag.coreHit && _DT>=0.90){ dag.coreHit=true; coreFlash=1; }   // (4) core flash on arrival
          if(_DT>=1.2){                                        // (5) cleanup + PERMANENT removal + schedule rain
            delivHead.visible=false; for(var dk3=0;dk3<delivTrail.length;dk3++) delivTrail[dk3].visible=false;
            if(_Tk&&_Tk.g){
              _Tk.g.setAttribute('transform',_Tk.orig); _Tk.g.style.opacity='';
              _Tk.g.style.visibility='hidden';                 // permanent removal (no space, not targetable)
              _Tk.g.__rm=true;
              try{ window.dispatchEvent(new CustomEvent('carbonium-life-reward')); }catch(_e){}   // → a life card swings in on the wall
              rains.push({g:_Tk.g, orig:_Tk.orig, label:_Tk.label, delay:0.8, t:0});   // rain a fresh one in shortly
              if(_Tk.ov) _Tk.ov.remove();
            }
            dag.delivering=false; dag.task=null;
          }
        }

        // ── RAIN: a fresh task drops from above the open basket top into its slot
        // (gentle easeOutBounce settle), then becomes grabbable again. ──
        for(var _rj=rains.length-1;_rj>=0;_rj--){
          var _R=rains[_rj];
          if(_R.delay>0){ _R.delay-=1/60; if(_R.delay<=0){
            _R.g.style.visibility=''; _R.g.style.opacity='0.8';
            var _mY=(_R.orig.match(/translate\([^,]+,([\d.]+)/)||[])[1]; var _cy=_mY?parseFloat(_mY):170;
            // spawn at the SVG's true TOP edge: convert the element's screen-top into viewBox coords via getScreenCTM
            var _svg=_R.g.ownerSVGElement, _spawnSvgY=0;
            if(_svg && _svg.getScreenCTM){
              var _rect=_svg.getBoundingClientRect(), _p=_svg.createSVGPoint();
              _p.x=_rect.left; _p.y=_rect.top;
              _spawnSvgY=_p.matrixTransform(_svg.getScreenCTM().inverse()).y;
            }
            _R.startYoff=_spawnSvgY-_cy;   // start at the SVG top, fall down into the basket
            var _newLbl=REACH_LABELS[Math.floor(Math.random()*REACH_LABELS.length)];
            var _lbl=[].slice.call(_R.g.children).filter(function(n){return n.tagName&&n.tagName.toLowerCase()==='text';})[0];
            if(_lbl) _lbl.textContent=_newLbl;   // set the fresh name BEFORE the drop, so no mid-fall flicker
            var _ig=_R.g.querySelector('g');     // swap the icon to match the new task (no stale/mismatched icon)
            if(_ig && ICONS[_newLbl]) _ig.innerHTML=ICONS[_newLbl];
            _R.g.setAttribute('transform','translate(0,'+_R.startYoff.toFixed(1)+') '+_R.orig);
          } continue; }
          _R.t+=1/60;
          var _rprog=THREE.MathUtils.clamp(_R.t/1.2,0,1);
          var _yoff=(_R.startYoff||0)*(1-easeOutBounce(_rprog));
          _R.g.setAttribute('transform','translate(0,'+_yoff.toFixed(1)+') '+_R.orig);
          _R.g.style.opacity=(0.8+0.2*_rprog).toFixed(3);   // 0.8 → 1.0 as it lands
          if(_rprog>=1){ _R.g.setAttribute('transform',_R.orig); _R.g.style.opacity='';
            _R.g.__rm=false; rains.splice(_rj,1);
          }
        }

        renderer.render(scene, camera);
      }
      function resetScene(){
        for(var _i=0;_i<agents.length;_i++){
          var _a=agents[_i];
          if(_a.task){
            if(_a.task.g){ _a.task.g.setAttribute('transform',_a.task.orig); _a.task.g.style.opacity=''; _a.task.g.style.visibility=''; _a.task.g.__rm=false; }
            if(_a.task.ov) _a.task.ov.remove();
          }
          _a.task=null; _a.reaching=false; _a.delivering=false; _a.coreHit=false;
          _a.goldFlash=0; _a.flash=0; _a.pop=0;
          _a.mesh.scale.set(1,1,1); _a.mesh.quaternion.identity();
          _a.mesh.position.copy(_a.baseDir).multiplyScalar(ORBIT);
          rebuildArc(_a, _zeroFlex);
        }
        for(var _r=0;_r<rains.length;_r++){ var _R2=rains[_r]; if(_R2.g){ _R2.g.setAttribute('transform',_R2.orig); _R2.g.style.opacity=''; _R2.g.style.visibility=''; _R2.g.__rm=false; } }
        rains.length=0;
        var _ls=host.parentNode&&host.parentNode.querySelector('svg');
        if(_ls){ [].slice.call(_ls.querySelectorAll('text')).forEach(function(tn){
          if(REACH_LABELS.indexOf((tn.textContent||'').trim())>=0){
            var g=tn.parentNode;
            if(g.__lbl0==null) g.__lbl0=tn.textContent;   // snapshot original task name once
            else { tn.textContent=g.__lbl0; var _ig0=g.querySelector('g'); if(_ig0&&ICONS[g.__lbl0]) _ig0.innerHTML=ICONS[g.__lbl0]; }   // restore original name + matching icon on later resets
            g.style.visibility=''; g.style.opacity=''; g.__rm=false;
          }
        }); }
        if(host){ [].slice.call(host.querySelectorAll('div')).forEach(function(d){ if(d.style&&d.style.zIndex==='30') d.remove(); }); }   // stray carried-task overlays
        assignActive=false; assignTimer=2.0; assignIndex=0; assignU=0;
        assignHead.visible=false; assignTrail.forEach(function(s){ s.visible=false; });
        delivHead.visible=false; delivTrail.forEach(function(s){ s.visible=false; });
        coreFlash=0;
        if(renderer) renderer.render(scene, camera);
      }
      function startScene(){ if(running||disposed) return; resetScene(); running=true; raf=requestAnimationFrame(tick); }   // fresh from S1
      function stopScene(){ running=false; if(raf) cancelAnimationFrame(raf); resetScene(); }                              // reset + pause
      onActiveL=function(){ startScene(); }; onInactiveL=function(){ stopScene(); };
      window.addEventListener('carbonium-card03-active', onActiveL);
      window.addEventListener('carbonium-card03-inactive', onInactiveL);
      resetScene();                                  // establish initial rest pose; stays paused until scrolled into view
      if(window.__card03Active) startScene();

      ro=new ResizeObserver(function(){
        if(!host) return; var w=host.clientWidth, h=host.clientHeight; if(!w||!h) return;
        camera.aspect=w/h; camera.updateProjectionMatrix(); applyPan(); renderer.setSize(w,h);
      });
      ro.observe(host);
    
}
