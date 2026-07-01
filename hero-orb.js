/* Carbonium hero orb — vanilla port of WebsiteHero.jsx's HeroAtom (Three.js).
   Mounts the exact 3D graphite carbon-atom sphere (glowing "C", orbiting
   satellite agents, glass struts, heartbeat ripple, magnetic cursor pull)
   into any host element. Used on About.html to replace the PORTRAIT slot. */
(function () {
  var __dyn = new Function('u', 'return import(u)');
  var THREE_URL = 'https://unpkg.com/three@0.160.0/build/three.module.js';

  function mountHeroOrb(host) {
    if (!host) return;
    var disposed = false, renderer, raf, ro, io, running = false, cleanup = null, onMagMove = null;

    async function loadDeps() {
      var THREE = await __dyn(THREE_URL);
      var res = await fetch('https://unpkg.com/three@0.160.0/examples/jsm/environments/RoomEnvironment.js');
      var txt = (await res.text()).replace(/from\s*['"]three['"]/g, "from '" + THREE_URL + "'");
      var url = URL.createObjectURL(new Blob([txt], { type: 'text/javascript' }));
      var Room = await __dyn(url);
      return { THREE: THREE, RoomEnvironment: Room.RoomEnvironment };
    }

    loadDeps().then(function (mod) {
      if (disposed || !host) return;
      var THREE = mod.THREE, RoomEnvironment = mod.RoomEnvironment;
      var W = host.clientWidth || 200, H = host.clientHeight || 200;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(W, H);
      renderer.setClearAlpha(0);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.18;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;display:block;z-index:1';
      host.appendChild(renderer.domElement);

      var magNDC = { x: 0, y: 0 }, magInside = false, _magTmp = new THREE.Vector3(), _magZero = new THREE.Vector3();
      onMagMove = function (ev) {
        var _r = renderer.domElement.getBoundingClientRect();
        if (_r.width <= 0 || _r.height <= 0) { magInside = false; return; }
        if (ev.clientX >= _r.left && ev.clientX <= _r.right && ev.clientY >= _r.top && ev.clientY <= _r.bottom) {
          magNDC.x = ((ev.clientX - _r.left) / _r.width) * 2 - 1;
          magNDC.y = -(((ev.clientY - _r.top) / _r.height) * 2 - 1);
          magInside = true;
        } else { magInside = false; }
      };
      window.addEventListener('pointermove', onMagMove, { passive: true });

      var scene = new THREE.Scene();
      var pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

      var camera = new THREE.PerspectiveCamera(38, W / H, 0.5, 4000);
      camera.position.set(0, 4, 360); camera.lookAt(0, 0, 0);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x555555, 0.65));
      var key = new THREE.DirectionalLight(0xffffff, 1.7);
      key.position.set(4, 7, 5).multiplyScalar(40); key.castShadow = true;
      key.shadow.mapSize.set(2048, 2048); key.shadow.radius = 12; key.shadow.bias = -0.0004;
      var scam = key.shadow.camera; scam.near = 1; scam.far = 1200; scam.left = -260; scam.right = 260; scam.top = 260; scam.bottom = -260;
      scene.add(key);
      var fill = new THREE.DirectionalLight(0xffffff, 0.4); fill.position.set(-5, 2, -4).multiplyScalar(40); scene.add(fill);

      function stoneBump() {
        var S = 1024, c = document.createElement('canvas'); c.width = c.height = S; var x = c.getContext('2d');
        var img = x.createImageData(S, S), d = img.data;
        for (var i = 0; i < d.length; i += 4) { var v = 128 + (Math.random() - 0.5) * 150; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
        x.putImageData(img, 0, 0);
        for (var k = 0; k < 4000; k++) { var r = 2 + Math.random() * 7; var dk = Math.random() > 0.5; x.fillStyle = dk ? 'rgba(10,10,10,0.85)' : 'rgba(245,245,245,0.7)'; x.beginPath(); x.arc(Math.random() * S, Math.random() * S, r, 0, Math.PI * 2); x.fill(); }
        var t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 6); return t;
      }
      var stone = new THREE.MeshStandardMaterial({ color: 0x3e3e42, roughness: 1.0, metalness: 0.05, envMapIntensity: 0.55, bumpMap: stoneBump(), bumpScale: 1.05, emissive: new THREE.Color(0x3d8bfd), emissiveIntensity: 0.04 });
      var glass = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.96, roughness: 0.0, ior: 1.45, thickness: 0.4, metalness: 0.0, transparent: true, clearcoat: 1.0, clearcoatRoughness: 0.04, envMapIntensity: 1.4 });

      var atom = new THREE.Group(); scene.add(atom);
      var CORE_R = 38, AGENT_R = 17, ORBIT = 92;
      var core = new THREE.Mesh(new THREE.SphereGeometry(CORE_R, 96, 96), stone); core.castShadow = core.receiveShadow = true; atom.add(core);

      function glowSprite() {
        var S = 64, c = document.createElement('canvas'); c.width = c.height = S; var x = c.getContext('2d');
        var g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
        g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(220,240,255,0.85)');
        g.addColorStop(0.55, 'rgba(150,200,255,0.30)'); g.addColorStop(1, 'rgba(120,180,255,0)');
        x.fillStyle = g; x.fillRect(0, 0, S, S);
        var t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
      }
      var sparkTex = glowSprite();

      function letterTex(shimmer) {
        var S = 512, c = document.createElement('canvas'); c.width = c.height = S; var x = c.getContext('2d');
        x.clearRect(0, 0, S, S);
        var grd = x.createRadialGradient(S / 2, S * 0.54, S * 0.04, S / 2, S * 0.54, S * 0.42);
        grd.addColorStop(0.0, '#ffffff'); grd.addColorStop(0.45, '#dff2ff'); grd.addColorStop(0.8, '#7cd0ff'); grd.addColorStop(1.0, '#4db8ff');
        x.font = '700 360px Satoshi, "DM Sans", system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
        x.shadowColor = 'rgba(90,190,255,0.8)'; x.shadowBlur = 16; x.fillStyle = grd; x.fillText('C', S / 2, S * 0.54);
        x.shadowBlur = 0; x.lineWidth = 7; x.strokeStyle = 'rgba(255,255,255,' + (0.5 + 0.5 * shimmer) + ')'; x.strokeText('C', S / 2, S * 0.54);
        var t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
      }
      var cTexBase = letterTex(0);
      var markGroup = new THREE.Group(); scene.add(markGroup);
      var markSize = CORE_R * 1.6;
      var cMark = new THREE.Mesh(new THREE.PlaneGeometry(markSize, markSize), new THREE.MeshStandardMaterial({ map: cTexBase, transparent: true, depthWrite: false, emissive: 0xbfe6ff, emissiveIntensity: 1.2, emissiveMap: cTexBase, roughness: 1, metalness: 0, toneMapped: false }));
      markGroup.add(cMark);
      function haloSprite(color, scale, opacity) {
        var s = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkTex, color: color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: opacity, toneMapped: false }));
        s.scale.set(markSize * scale, markSize * scale, 1); s.position.z = -2; return s;
      }
      var cHaloInner = haloSprite(0xd6f0ff, 1.5, 0.28), cHaloMid = haloSprite(0x6fc6ff, 2.2, 0.4), cHaloOuter = haloSprite(0x2f9bff, 3.2, 0.3);
      markGroup.add(cHaloOuter); markGroup.add(cHaloMid); markGroup.add(cHaloInner);
      var cBaseScales = { inner: 1.5, mid: 2.2, outer: 3.2 };
      cMark.material.depthTest = false; cMark.renderOrder = 1000;
      [cHaloOuter, cHaloMid, cHaloInner].forEach(function (h) { h.material.depthTest = false; h.renderOrder = 999; });

      var ripple = new THREE.Mesh(new THREE.RingGeometry(CORE_R * 0.9, CORE_R * 0.9 + 3.6, 96), new THREE.MeshBasicMaterial({ color: 0x4db8ff, transparent: true, opacity: 0, side: THREE.DoubleSide, toneMapped: false }));
      ripple.renderOrder = 998; atom.add(ripple);

      function fib(n) { var pts = [], ga = Math.PI * (3 - Math.sqrt(5)); for (var i = 0; i < n; i++) { var y = 1 - (i / (n - 1)) * 2; var r = Math.sqrt(Math.max(0, 1 - y * y)); var th = ga * i; pts.push(new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r)); } return pts; }
      var nodeGeo = new THREE.SphereGeometry(AGENT_R, 48, 48);
      var agents = [];
      fib(9).forEach(function (dir, i) {
        var baseDir = dir.clone();
        var n = new THREE.Mesh(nodeGeo, stone); n.position.copy(baseDir.clone().multiplyScalar(ORBIT)); n.castShadow = n.receiveShadow = true; atom.add(n);
        var perp = new THREE.Vector3(0, 1, 0); if (Math.abs(baseDir.y) > 0.9) perp.set(1, 0, 0);
        var ax1 = new THREE.Vector3().crossVectors(baseDir, perp).normalize();
        var ax2 = new THREE.Vector3().crossVectors(baseDir, ax1).normalize();
        var curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3());
        var tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 28, 0.5, 10, false), glass); atom.add(tube);
        agents.push({ baseDir: baseDir, mesh: n, curve: curve, tube: tube, ax1: ax1, ax2: ax2, phase: i * 0.7, sp1: 0.5 + (i % 3) * 0.18, sp2: 0.37 + (i % 4) * 0.13, amp: 10 + (i % 3) * 4 });
      });
      function rebuildArc(a) {
        var pos = a.mesh.position, dir = pos.clone().normalize();
        var start = dir.clone().multiplyScalar(CORE_R * 0.9);
        var end = pos.clone().sub(dir.clone().multiplyScalar(AGENT_R * 0.7));
        var mid = start.clone().add(end).multiplyScalar(0.5).add(dir.clone().multiplyScalar(10));
        a.curve.v0.copy(start); a.curve.v1.copy(mid); a.curve.v2.copy(end); a.curve.updateArcLengths();
        a.tube.geometry.dispose(); a.tube.geometry = new THREE.TubeGeometry(a.curve, 28, 0.5, 10, false);
      }
      agents.forEach(rebuildArc);

      atom.rotation.set(0.3, 0, 0.1);
      var t = 0;
      function frameTick() {
        if (!running) return;
        raf = requestAnimationFrame(frameTick);
        t += 0.01;
        atom.rotation.y += 0.0022; atom.rotation.x += 0.0007;
        atom.position.y = Math.sin(t * 0.6) * 4;
        core.rotation.y += 0.0014;
        var hb = t % 2.1, beat = 0;
        if (hb < 0.16) beat = Math.sin((hb / 0.16) * Math.PI) * 0.08;
        else if (hb < 0.46) beat = Math.sin(((hb - 0.30) / 0.16) * Math.PI) * 0.05;
        if (beat < 0) beat = 0;
        var sc2 = 1 + beat; core.scale.set(sc2, sc2, sc2);
        var coreWorld = new THREE.Vector3(); atom.getWorldPosition(coreWorld);
        var toCam = camera.position.clone().sub(coreWorld).normalize();
        markGroup.position.copy(coreWorld).addScaledVector(toCam, CORE_R * sc2 + 2.5);
        markGroup.lookAt(camera.position);
        var flare = beat * 3.2, shimmer = 0.5 + 0.5 * Math.sin(t * 4.0);
        cMark.material.emissiveIntensity = 0.95 + flare + shimmer * 0.18;
        var hpc = 1 + beat * 2.6;
        cHaloInner.material.opacity = 0.16 + beat * 1.1; cHaloMid.material.opacity = 0.22 + beat * 1.5; cHaloOuter.material.opacity = 0.16 + beat * 1.2 + shimmer * 0.03;
        cHaloInner.scale.set(markSize * cBaseScales.inner * hpc, markSize * cBaseScales.inner * hpc, 1);
        cHaloMid.scale.set(markSize * cBaseScales.mid * hpc, markSize * cBaseScales.mid * hpc, 1);
        cHaloOuter.scale.set(markSize * cBaseScales.outer * (1 + beat * 1.8), markSize * cBaseScales.outer * (1 + beat * 1.8), 1);
        var ringPhase = hb / 0.7;
        if (ringPhase <= 1) { var e = 1 + ringPhase * 1.55; ripple.scale.set(e, e, e); ripple.material.opacity = 0.9 * (1 - ringPhase); ripple.quaternion.copy(camera.quaternion); ripple.visible = true; }
        else ripple.visible = false;
        var _magCursor = null, _magNear = -1;
        if (magInside) {
          var _cr = new THREE.Vector3(magNDC.x, magNDC.y, 0.5).unproject(camera);
          _cr.sub(camera.position).normalize();
          var _ct = -camera.position.z / _cr.z;
          _magCursor = atom.worldToLocal(camera.position.clone().addScaledVector(_cr, _ct));
          var _mBest = Infinity, _mPv = new THREE.Vector3();
          for (var _mi = 0; _mi < agents.length; _mi++) {
            _mPv.copy(agents[_mi].mesh.position); atom.localToWorld(_mPv); _mPv.project(camera);
            var _mdx = _mPv.x - magNDC.x, _mdy = _mPv.y - magNDC.y, _mdsq = _mdx * _mdx + _mdy * _mdy;
            if (_mdsq < _mBest) { _mBest = _mdsq; _magNear = _mi; }
          }
        }
        var _vDir = atom.worldToLocal(camera.position.clone()).normalize();
        var _side = new THREE.Vector3().crossVectors(_vDir, new THREE.Vector3(0, 1, 0));
        if (_side.lengthSq() < 1e-4) _side.set(1, 0, 0);
        _side.normalize();
        var _biasR = markSize * 0.5 + AGENT_R * 1.1;
        for (var i = 0; i < agents.length; i++) {
          var a = agents[i];
          var d1 = Math.sin(t * a.sp1 + a.phase) * a.amp, d2 = Math.cos(t * a.sp2 + a.phase * 1.3) * a.amp;
          var breathe = 1 + Math.sin(t * 0.5 + a.phase) * 0.03;
          a.mesh.position.copy(a.baseDir).multiplyScalar(ORBIT * breathe).addScaledVector(a.ax1, d1).addScaledVector(a.ax2, d2);
          if (!a.attract) a.attract = new THREE.Vector3();
          if (i === _magNear && _magCursor) { a.attract.lerp(_magTmp.copy(_magCursor).sub(a.mesh.position), 0.05); }
          else { a.attract.lerp(_magZero, 0.05); }
          a.mesh.position.add(a.attract);
          var _fr = a.mesh.position.dot(_vDir);
          var _lv = a.mesh.position.clone().addScaledVector(_vDir, -_fr);
          var _ll = _lv.length();
          if (_ll < _biasR) {
            var _cw = THREE.MathUtils.clamp(1 - _ll / _biasR, 0, 1); _cw = _cw * _cw * (3 - 2 * _cw);
            var _nl = _ll + (_biasR - _ll) * _cw;
            var _dir = _ll > 1e-3 ? _lv.multiplyScalar(1 / _ll) : _side;
            a.mesh.position.copy(_dir).multiplyScalar(_nl).addScaledVector(_vDir, _fr);
          }
          rebuildArc(a);
        }
        renderer.render(scene, camera);
      }
      function startA() { if (running || disposed) return; running = true; raf = requestAnimationFrame(frameTick); }
      function stopA() { running = false; if (raf) cancelAnimationFrame(raf); }

      renderer.render(scene, camera);
      if (typeof IntersectionObserver !== 'undefined') {
        io = new IntersectionObserver(function (es) { var e = es[0]; if (e.isIntersecting) startA(); else stopA(); }, { threshold: 0.04 });
        io.observe(host);
      } else startA();

      ro = new ResizeObserver(function () { if (!host) return; var w = host.clientWidth, h = host.clientHeight; if (!w || !h) return; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h); renderer.render(scene, camera); });
      ro.observe(host);

      cleanup = function () { stopA(); if (onMagMove) window.removeEventListener('pointermove', onMagMove); if (io) io.disconnect(); if (ro) ro.disconnect(); if (renderer) { renderer.dispose(); var c = renderer.domElement; if (c && c.parentNode) c.parentNode.removeChild(c); } };
    });
  }

  function boot() {
    var host = document.getElementById('heroOrb');
    if (host) mountHeroOrb(host);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
