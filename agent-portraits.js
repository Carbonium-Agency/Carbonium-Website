/* Cinematic AI-agent portrait scenes — layered SVG, one per team card.
   Shared framing: figure 3/4 chest-up on the right, glowing code monitors on
   the left, city-bokeh window behind, teal/blue ambient. Per-character: skin,
   hair, accent trim, eyes, expression, accessories, element badge. */
(function () {
  var R = function (n) { return (+n).toFixed(2); };

  // ---- repeating colored code-bars inside a clipped, scrolling group ----
  function codeLines(x, y, w, n, step, cols, dur, delay) {
    var s = '<g class="ag-code" style="animation-duration:' + dur + 's;animation-delay:' + (delay || 0) + 's">';
    for (var d = 0; d < 2; d++) {
      for (var k = 0; k < n; k++) {
        var ww = (0.30 + ((k * 37) % 62) / 100) * w;
        var ind = ((k * 29) % 3) * 0.12 * w;
        var yy = d * (n * step) + k * step;
        s += '<rect x="' + R(x + ind) + '" y="' + R(y + yy) + '" width="' + R(ww) + '" height="' + R(step * 0.5) + '" rx="0.3" fill="' + cols[k % cols.length] + '" opacity="0.92"/>';
      }
    }
    return s + '</g>';
  }

  function defs(o) {
    var id = o.id, a = o.accent;
    return '<defs>' +
      '<linearGradient id="sky' + id + '" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#26405f"/><stop offset="0.5" stop-color="#1a3050"/><stop offset="1" stop-color="#0c1b32"/></linearGradient>' +
      '<radialGradient id="amb' + id + '" cx="50%" cy="42%" r="60%">' +
        '<stop offset="0" stop-color="' + o.glow + '"/><stop offset="1" stop-color="rgba(0,0,0,0)"/></radialGradient>' +
      '<radialGradient id="skin' + id + '" cx="38%" cy="30%" r="78%">' +
        '<stop offset="0" stop-color="' + o.skin[0] + '"/><stop offset="0.5" stop-color="' + o.skin[1] + '"/><stop offset="1" stop-color="' + o.skin[2] + '"/></radialGradient>' +
      '<linearGradient id="hair' + id + '" x1="0.2" y1="0" x2="0.8" y2="1">' +
        '<stop offset="0" stop-color="' + o.hair[0] + '"/><stop offset="0.55" stop-color="' + o.hair[1] + '"/><stop offset="1" stop-color="' + o.hair[2] + '"/></linearGradient>' +
      '<linearGradient id="suit' + id + '" x1="0.1" y1="0" x2="0.9" y2="1">' +
        '<stop offset="0" stop-color="' + o.cloth[0] + '"/><stop offset="0.55" stop-color="' + o.cloth[1] + '"/><stop offset="1" stop-color="' + o.cloth[2] + '"/></linearGradient>' +
      '<radialGradient id="iris' + id + '" cx="42%" cy="36%" r="62%">' +
        '<stop offset="0" stop-color="#ffffff"/><stop offset="0.18" stop-color="' + o.eye[0] + '"/><stop offset="0.62" stop-color="' + o.eye[1] + '"/><stop offset="0.8" stop-color="#0a0a12"/></radialGradient>' +
      '<filter id="soft' + id + '" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="0.7"/></filter>' +
      '<filter id="blur' + id + '" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.6"/></filter>' +
      '<clipPath id="m1' + id + '"><rect x="3" y="13.5" width="40" height="29" rx="1.4"/></clipPath>' +
      '<clipPath id="m2' + id + '"><rect x="6" y="46" width="35" height="22" rx="1.4"/></clipPath>' +
    '</defs>';
  }

  function background(o) {
    var id = o.id, a = o.accent;
    var s = '<rect x="0" y="0" width="100" height="84" fill="url(#sky' + id + ')"/>';
    // city skyline
    var bld = [[44,52,8],[50,46,11],[57,55,7],[63,40,12],[70,49,9],[76,44,13],[84,53,8],[90,47,11],[96,56,6]];
    for (var i = 0; i < bld.length; i++) {
      var b = bld[i];
      s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="6.4" height="' + (84 - b[1]) + '" fill="#0d2138" opacity="0.9"/>';
      // lit windows
      for (var wy = b[1] + 2; wy < 80; wy += 3) {
        for (var wx = 0; wx < 3; wx++) {
          if (((i + wx + wy) % 3) === 0) s += '<rect x="' + (b[0] + 1 + wx * 1.8) + '" y="' + wy + '" width="0.9" height="1.2" fill="#cfe6ff" opacity="0.5"/>';
        }
      }
    }
    // bokeh
    var bok = [[52,30,2.2,0],[71,24,3,0.8],[88,32,2.6,1.6],[63,20,1.8,0.5],[80,26,2.2,2.2],[95,22,2.8,1.2],[58,38,1.6,1.8]];
    for (var j = 0; j < bok.length; j++) {
      var k = bok[j];
      s += '<circle class="ag-bokeh" style="animation-duration:' + (3 + (j % 3)) + 's;animation-delay:' + k[3] + 's" cx="' + k[0] + '" cy="' + k[1] + '" r="' + k[2] + '" fill="' + a + '" filter="url(#blur' + id + ')" opacity="0.4"/>';
    }
    // window mullions
    s += '<g stroke="#0a1a30" stroke-width="0.8" opacity="0.5"><line x1="0" y1="30" x2="100" y2="30"/><line x1="66" y1="0" x2="66" y2="84"/><line x1="88" y1="0" x2="88" y2="84"/></g>';
    s += '<rect x="0" y="0" width="100" height="84" fill="url(#amb' + id + ')" class="ag-glow"/>';
    return s;
  }

  function monitors(o) {
    var id = o.id;
    var cols = o.screenCols || ['#7fd0ff', '#9b8bff', '#6ee7b7', '#4a6da3', '#f2a8e0'];
    var s = '';
    // screen 1 (large, slight skew)
    s += '<g transform="rotate(-6 23 28)">' +
      '<rect x="2.2" y="12.7" width="41.6" height="30.6" rx="2" fill="#0a1426" stroke="' + o.accent + '" stroke-opacity="0.55" stroke-width="0.7"/>' +
      '<rect x="3" y="13.5" width="40" height="29" rx="1.4" fill="#060f1e"/>' +
      '<g clip-path="url(#m1' + id + ')">' + codeLines(5, 14.5, 17, 9, 2.7, cols, 6, 0) +
        '<rect x="24" y="15" width="17" height="26" fill="#0a1830" opacity="0.6"/>' + codeLines(25.5, 16, 14, 8, 2.7, cols, 7.5, 0.4) + '</g>' +
      '<rect x="3" y="13.5" width="40" height="29" rx="1.4" fill="' + o.accent + '" opacity="0.05"/>' +
    '</g>';
    // screen 2 (lower)
    s += '<g transform="rotate(4 23 57)">' +
      '<rect x="5.2" y="45.2" width="36.6" height="23.6" rx="2" fill="#0a1426" stroke="' + o.accent + '" stroke-opacity="0.5" stroke-width="0.7"/>' +
      '<rect x="6" y="46" width="35" height="22" rx="1.4" fill="#070f1f"/>' +
      '<g clip-path="url(#m2' + id + ')">' +
        '<rect x="7" y="47.5" width="15" height="3" rx="0.6" fill="' + o.accent + '" opacity="0.7"/>' +
        '<rect x="7" y="52" width="33" height="1.4" rx="0.4" fill="#2a4a7d"/>' +
        '<rect x="7" y="55" width="33" height="1.4" rx="0.4" fill="#2a4a7d"/>' +
        '<rect x="7" y="58.5" width="9" height="7" rx="0.8" fill="' + o.accent + '" opacity="0.45"/>' +
        '<rect x="18" y="58.5" width="9" height="7" rx="0.8" fill="#2a4a7d" opacity="0.6"/>' +
        '<rect x="29" y="58.5" width="9" height="7" rx="0.8" fill="#2a4a7d" opacity="0.6"/>' +
      '</g>' +
    '</g>';
    return s;
  }

  function desk(o) {
    return '<rect x="0" y="82" width="100" height="18" fill="#0a1626"/>' +
      '<rect x="0" y="82" width="100" height="0.8" fill="' + o.accent + '" opacity="0.45"/>' +
      // keyboard
      '<g transform="rotate(-3 30 92)"><rect x="10" y="88" width="40" height="9" rx="1.5" fill="#13233c" stroke="' + o.accent + '" stroke-opacity="0.4" stroke-width="0.5"/>' +
      '<rect x="11.5" y="89.5" width="37" height="2" rx="0.4" fill="#0c1a30"/><rect x="11.5" y="92.5" width="37" height="3.4" rx="0.4" fill="#0c1a30"/></g>' +
      // coffee cup with element badge
      '<g transform="translate(80 84)"><path d="M3 4 L13 4 L12 17 L4 17 Z" fill="#e9edf3"/><path d="M3 4 L13 4 L12.7 7 L3.3 7 Z" fill="#cfd6e0"/>' +
      '<rect x="4" y="9" width="8" height="5" fill="' + o.accent + '" opacity="0.85"/>' +
      '<text x="8" y="13.2" font-family="DM Sans, sans-serif" font-size="3.6" font-weight="800" fill="#0c1a30" text-anchor="middle">' + o.sym + '</text></g>';
  }

  // ---- the character: suit + neck + head + full face + hair ----
  function figure(o) {
    var id = o.id, hx = 67, sw = o.stocky ? 1.12 : 1;
    var s = '<g class="ag-fig">';
    // ambient rim glow behind figure
    s += '<ellipse cx="' + hx + '" cy="46" rx="' + (24 * sw) + '" ry="30" fill="url(#amb' + id + ')" class="ag-glow" opacity="0.6"/>';

    // suit / shoulders
    s += '<path d="M' + (hx - 22 * sw) + ' 100 C' + (hx - 21 * sw) + ' 80 ' + (hx - 13 * sw) + ' 71 ' + hx + ' 70 C' + (hx + 13 * sw) + ' 71 ' + (hx + 21 * sw) + ' 80 ' + (hx + 22 * sw) + ' 100 Z" fill="url(#suit' + id + ')"/>';
    // suit inner shading
    s += '<path d="M' + (hx - 22 * sw) + ' 100 C' + (hx - 21 * sw) + ' 80 ' + (hx - 13 * sw) + ' 71 ' + hx + ' 70 C' + (hx + 13 * sw) + ' 71 ' + (hx + 21 * sw) + ' 80 ' + (hx + 22 * sw) + ' 100 Z" fill="#000" opacity="0.16"/>';
    // collar with accent trim
    s += '<path d="M' + (hx - 9) + ' 73 L' + hx + ' 82 L' + (hx + 9) + ' 73 L' + (hx + 13) + ' 76 L' + hx + ' 90 L' + (hx - 13) + ' 76 Z" fill="' + o.cloth[2] + '"/>';
    s += '<path d="M' + (hx - 9) + ' 73 L' + hx + ' 82 L' + (hx + 9) + ' 73" fill="none" stroke="' + o.accent + '" stroke-width="0.9" opacity="0.9"/>';
    s += '<path d="M' + (hx - 13) + ' 76 L' + hx + ' 90 L' + (hx + 13) + ' 76" fill="none" stroke="' + o.accent + '" stroke-width="0.7" opacity="0.55"/>';
    // shoulder seam glow + element badge
    s += '<rect x="' + (hx + 8) + '" y="80" width="7" height="5" rx="1" fill="' + o.cloth[0] + '" opacity="0.6"/>';
    s += '<text x="' + (hx + 11.5) + '" y="84" font-family="DM Sans, sans-serif" font-size="3.2" font-weight="800" fill="' + o.accent + '" text-anchor="middle">' + o.sym + '</text>';

    // neck
    s += '<path d="M' + (hx - 4.5) + ' 58 L' + (hx + 4.5) + ' 58 L' + (hx + 5.5) + ' 72 L' + (hx - 5.5) + ' 72 Z" fill="url(#skin' + id + ')"/>';
    s += '<path d="M' + (hx - 5) + ' 59 C' + (hx - 2) + ' 63 ' + (hx + 2) + ' 63 ' + (hx + 5) + ' 59 L' + (hx + 5) + ' 64 C' + (hx + 2) + ' 67 ' + (hx - 2) + ' 67 ' + (hx - 5) + ' 64 Z" fill="#000" opacity="0.18"/>';

    // ---- head base ----
    var fL = 54, fR = 80;
    s += '<path d="M' + hx + ' 21 C75 21 ' + fR + ' 28 ' + fR + ' 38 C' + fR + ' 48 75 57 ' + hx + ' 60 C59 57 ' + fL + ' 48 ' + fL + ' 38 C' + fL + ' 28 59 21 ' + hx + ' 21 Z" fill="url(#skin' + id + ')"/>';
    // form shadow on right + jaw, cheek highlight
    s += '<path d="M76 30 C80 36 79 48 71 56 C76 50 77 40 74 32 Z" fill="#000" opacity="0.14" filter="url(#soft' + id + ')"/>';
    s += '<ellipse cx="61" cy="44" rx="4" ry="5" fill="' + o.skin[0] + '" opacity="0.35" filter="url(#soft' + id + ')"/>';
    // ear (left/viewer side)
    s += '<path d="M54 39 C51 38 50 42 52 45 C53 47 55 47 55 45 Z" fill="url(#skin' + id + ')"/><path d="M53 40 C52 41 52 43 53 44" stroke="#000" stroke-opacity="0.2" stroke-width="0.5" fill="none"/>';

    // hair behind
    s += hairBack(o, hx);

    // ---- brows ----
    var bA = o.brow || 0;
    s += '<path d="M' + (61 - 3) + ' ' + (34 + bA * 0.04) + ' Q61 ' + (32 + bA * 0.02) + ' ' + (61 + 3) + ' ' + (34 - bA * 0.04) + '" stroke="' + o.hair[2] + '" stroke-width="1.3" stroke-linecap="round" fill="none"/>';
    s += '<path d="M' + (73 - 3) + ' ' + (34 - bA * 0.04) + ' Q73 ' + (32 + bA * 0.02) + ' ' + (73 + 3) + ' ' + (34 + bA * 0.04) + '" stroke="' + o.hair[2] + '" stroke-width="1.3" stroke-linecap="round" fill="none"/>';

    // ---- eyes (blink group) ----
    s += '<g class="ag-blink">' + eye(o, 61, 39) + eye(o, 73, 39) + '</g>';

    // ---- nose ----
    s += '<path d="M67 40 C66 44 65.5 46 66 47.5 C66.5 48.5 68 48.5 68 47.5" fill="none" stroke="#000" stroke-opacity="0.18" stroke-width="0.7"/>';
    s += '<path d="M64.6 47.6 C65.4 49 68.6 49 69.4 47.6 C69 49 65 49 64.6 47.6 Z" fill="#000" opacity="0.18"/>';
    s += '<path d="M66.4 40 C66 43 65.8 45 66.2 46.5" stroke="' + o.skin[0] + '" stroke-opacity="0.5" stroke-width="0.5" fill="none"/>';

    // ---- mouth ----
    s += mouth(o, 67, 52);

    // ---- hair front ----
    s += hairFront(o, hx);

    // glasses
    if (o.glasses) s += glasses(o);
    // red scan (Dwight)
    if (o.scan) s += '<rect class="ag-scan" x="56" y="38.5" width="22" height="2.4" rx="1.2" fill="#ff5a5a" opacity="0.8" filter="url(#soft' + id + ')"/>';

    // left-edge rim light (cinematic teal)
    s += '<path d="M54 38 C54 28 59 21 ' + hx + ' 21" fill="none" stroke="' + o.rim + '" stroke-width="1.1" stroke-linecap="round" opacity="0.5" filter="url(#soft' + id + ')"/>';
    s += '</g>';
    return s;
  }

  function eye(o, cx, cy) {
    var id = o.id;
    return '<g>' +
      '<path d="M' + (cx - 3.4) + ' ' + cy + ' C' + (cx - 1.6) + ' ' + (cy - 2) + ' ' + (cx + 1.6) + ' ' + (cy - 2) + ' ' + (cx + 3.4) + ' ' + cy + ' C' + (cx + 1.6) + ' ' + (cy + 1.8) + ' ' + (cx - 1.6) + ' ' + (cy + 1.8) + ' ' + (cx - 3.4) + ' ' + cy + ' Z" fill="#eef1f6"/>' +
      '<circle cx="' + cx + '" cy="' + (cy - 0.1) + '" r="2.1" fill="url(#iris' + id + ')"/>' +
      '<circle cx="' + cx + '" cy="' + (cy - 0.1) + '" r="0.9" fill="#05060a"/>' +
      '<circle cx="' + cx + '" cy="' + (cy - 0.1) + '" r="2.1" fill="none" stroke="' + o.eye[1] + '" stroke-width="0.4" opacity="0.8"/>' +
      '<circle cx="' + (cx - 0.7) + '" cy="' + (cy - 0.9) + '" r="0.5" fill="#fff"/>' +
      '<path d="M' + (cx - 3.4) + ' ' + cy + ' C' + (cx - 1.6) + ' ' + (cy - 2) + ' ' + (cx + 1.6) + ' ' + (cy - 2) + ' ' + (cx + 3.4) + ' ' + cy + '" fill="none" stroke="#1c2230" stroke-width="0.7" stroke-linecap="round"/>' +
    '</g>';
  }

  function mouth(o, cx, cy) {
    if (o.smile) {
      return '<path d="M' + (cx - 4) + ' ' + cy + ' Q' + cx + ' ' + (cy + 0.6) + ' ' + (cx + 4) + ' ' + cy + ' Q' + cx + ' ' + (cy + 3.2) + ' ' + (cx - 4) + ' ' + cy + ' Z" fill="' + o.lip + '"/>' +
        '<path d="M' + (cx - 4) + ' ' + cy + ' Q' + cx + ' ' + (cy + 1.2) + ' ' + (cx + 4) + ' ' + cy + '" fill="none" stroke="#5a2630" stroke-width="0.6"/>' +
        '<path d="M' + (cx - 2.6) + ' ' + (cy + 0.9) + ' Q' + cx + ' ' + (cy + 1.6) + ' ' + (cx + 2.6) + ' ' + (cy + 0.9) + '" fill="none" stroke="#fff" stroke-width="0.5" opacity="0.5"/>';
    }
    // neutral / stern
    return '<path d="M' + (cx - 3.4) + ' ' + cy + ' Q' + cx + ' ' + (cy - 0.4) + ' ' + (cx + 3.4) + ' ' + cy + ' Q' + cx + ' ' + (cy + 2) + ' ' + (cx - 3.4) + ' ' + cy + ' Z" fill="' + o.lip + '"/>' +
      '<path d="M' + (cx - 3.4) + ' ' + cy + ' Q' + cx + ' ' + (cy + 0.4) + ' ' + (cx + 3.4) + ' ' + cy + '" fill="none" stroke="#5a2630" stroke-width="0.6"/>';
  }

  function hairBack(o, hx) {
    var id = o.id, st = o.hair[3];
    if (st === 'buzz') return '';
    if (st === 'bob') {
      return '<path d="M52 30 C52 50 53 54 56 56 L57 40 C56 34 60 30 ' + hx + ' 30 C74 30 78 34 77 40 L78 56 C81 54 82 50 82 30 C82 20 74 17 ' + hx + ' 17 C60 17 52 20 52 30 Z" fill="url(#hair' + id + ')"/>';
    }
    if (st === 'volume') {
      return '<path d="M50 34 C48 20 60 14 ' + hx + ' 14 C74 14 86 20 84 34 C84 26 78 22 ' + hx + ' 22 C56 22 50 26 50 34 Z" fill="url(#hair' + id + ')"/>' +
        '<path d="M51 30 C50 44 52 50 55 53 C53 46 53 38 55 33 Z" fill="url(#hair' + id + ')"/>';
    }
    return ''; // short/slick handled in front
  }

  function hairFront(o, hx) {
    var id = o.id, st = o.hair[3], grey = o.greyTemple;
    var s = '';
    if (st === 'buzz') {
      s += '<path d="M53 35 C53 26 59 21 ' + hx + ' 21 C75 21 81 26 81 35 C78 30 73 28 ' + hx + ' 28 C61 28 56 30 53 35 Z" fill="url(#hair' + id + ')" opacity="0.96"/>';
    } else if (st === 'slick') {
      s += '<path d="M53 34 C52 23 60 18 ' + hx + ' 18 C74 18 82 23 81 34 C80 27 74 25 ' + hx + ' 26 C70 26 67 27 65 29 C62 26 57 28 53 34 Z" fill="url(#hair' + id + ')"/>';
      s += '<path d="M55 30 C60 26 64 26 67 28" stroke="' + o.hair[0] + '" stroke-width="0.7" fill="none" opacity="0.7"/>';
    } else if (st === 'bob') {
      s += '<path d="M53 33 C52 22 60 17 ' + hx + ' 17 C74 17 82 22 81 33 C77 28 72 27 ' + hx + ' 27 C62 26 58 30 53 33 Z" fill="url(#hair' + id + ')"/>';
      s += '<path d="M63 19 C58 22 55 27 54 32" stroke="' + o.hair[0] + '" stroke-width="0.6" fill="none" opacity="0.6"/>';
    } else if (st === 'volume') {
      s += '<path d="M52 33 C51 21 60 16 ' + hx + ' 16 C74 16 83 21 82 33 C78 26 72 25 ' + hx + ' 26 C61 26 56 28 52 33 Z" fill="url(#hair' + id + ')"/>';
      if (o.streak) s += '<path d="M70 17 C66 22 64 28 64 33 C66 28 70 23 74 19 Z" fill="' + o.streak + '" opacity="0.95"/>';
    } else { // short
      s += '<path d="M53 35 C52 24 60 19 ' + hx + ' 19 C74 19 82 24 81 35 C79 28 73 26 ' + hx + ' 27 C61 27 56 29 53 35 Z" fill="url(#hair' + id + ')"/>';
      s += '<path d="M56 30 C61 26 66 26 70 28" stroke="' + o.hair[0] + '" stroke-width="0.6" fill="none" opacity="0.6"/>';
    }
    if (grey) {
      s += '<path d="M53 35 C53 31 55 28 57 27 C56 30 55 33 55 36 Z" fill="#e8ecf3" opacity="0.8"/>';
      s += '<path d="M81 35 C81 31 79 28 77 27 C78 30 79 33 79 36 Z" fill="#e8ecf3" opacity="0.8"/>';
    }
    return s;
  }

  function glasses(o) {
    var id = o.id, a = o.accent;
    return '<g opacity="0.95">' +
      '<rect x="56.4" y="36.2" width="9.2" height="6" rx="2.2" fill="rgba(120,180,255,0.12)" stroke="' + a + '" stroke-width="0.7"/>' +
      '<rect x="68.4" y="36.2" width="9.2" height="6" rx="2.2" fill="rgba(120,180,255,0.12)" stroke="' + a + '" stroke-width="0.7"/>' +
      '<line x1="65.6" y1="38.6" x2="68.4" y2="38.6" stroke="' + a + '" stroke-width="0.7"/>' +
      '<g clip-path="none" opacity="0.5"><line x1="57.4" y1="38" x2="64.6" y2="38" stroke="' + a + '" stroke-width="0.4"/><line x1="57.4" y1="40" x2="62.6" y2="40" stroke="' + a + '" stroke-width="0.4"/>' +
      '<line x1="69.4" y1="38" x2="76.6" y2="38" stroke="' + a + '" stroke-width="0.4"/><line x1="69.4" y1="40" x2="74.6" y2="40" stroke="' + a + '" stroke-width="0.4"/></g></g>';
  }

  function buildAgent(o) {
    return '<svg class="ag" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
      defs(o) + background(o) + monitors(o) + desk(o) + figure(o) +
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
      '<rect class="ag-sweep" x="-20" y="0" width="30" height="100" fill="' + o.rim + '" opacity="0" filter="url(#blur' + o.id + ')"/>' +
      '<rect x="0" y="0" width="100" height="100" fill="url(#amb' + o.id + ')" opacity="0.12" style="mix-blend-mode:screen"/>' +
      // vignette
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
    '</svg>';
  }

  var ROBOT_CSS = ".rb{position:absolute;inset:0;overflow:hidden;container-type:inline-size;background:radial-gradient(120% 100% at 50% 40%,#1b2950,#0c1730 56%,#05091a);}"
    + ".rb *{box-sizing:border-box;}"
    + ".rb-coreglow{position:absolute;left:50%;top:46%;width:72%;height:72%;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(90,150,255,.5),rgba(150,90,255,.26) 45%,transparent 70%);filter:blur(7px);animation:rbPulse 4s ease-in-out infinite;}"
    + "@keyframes rbPulse{0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(.9)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.08)}}"
    + ".rb-aura{position:absolute;left:50%;top:46%;width:104%;height:104%;transform:translate(-50%,-50%);pointer-events:none;}"
    + ".rb-aura svg{width:100%;height:100%;overflow:visible;}"
    + ".rb-aura .w{fill:none;stroke-linecap:round;animation:rbShimmer 4s ease-in-out infinite;}"
    + "@keyframes rbShimmer{0%,100%{opacity:.2}50%{opacity:.65}}"
    + ".rb-aura-rot{transform-box:fill-box;transform-origin:center;animation:rbRot 30s linear infinite;}"
    + "@keyframes rbRot{to{transform:rotate(360deg)}}"
    + ".rb-shadow{position:absolute;left:50%;bottom:13%;width:34%;height:5.5%;transform:translateX(-50%);background:radial-gradient(circle,rgba(0,0,0,.55),transparent 70%);filter:blur(4px);animation:rbShadow 3s ease-in-out infinite;}"
    + "@keyframes rbShadow{0%,100%{opacity:.45;transform:translateX(-50%) scale(.9)}50%{opacity:.7;transform:translateX(-50%) scale(1.06)}}"
    + ".rb-bot{position:absolute;left:50%;top:50%;width:46%;transform:translate(-50%,-50%);animation:rbFloat 3s ease-in-out infinite;}"
    + "@keyframes rbFloat{0%,100%{transform:translate(-50%,-55%)}50%{transform:translate(-50%,-45%)}}"
    + ".rb-head{position:relative;width:70%;margin:0 auto;aspect-ratio:1.06;border-radius:48% 48% 46% 46%/50% 50% 48% 48%;background:radial-gradient(circle at 36% 26%,#ffffff,#eef2f8 52%,#c9d2e0);box-shadow:inset -5px -7px 12px rgba(150,165,190,.5),inset 5px 5px 10px rgba(255,255,255,.9),0 8px 16px rgba(0,0,0,.42);}"
    + ".rb-face{position:absolute;left:50%;top:50%;width:64%;height:46%;transform:translate(-50%,-50%);border-radius:34%;background:radial-gradient(circle at 50% 32%,#1f2c48,#0a1020);box-shadow:inset 0 0 8px #000,0 0 0 2px rgba(120,150,200,.3);overflow:hidden;}"
    + ".rb-eye{position:absolute;top:24%;width:13%;height:30%;border-radius:50%;background:#cfeaff;box-shadow:0 0 4px #5fc8ff,0 0 9px #4aa8ff,inset 0 0 2px #fff;animation:rbBlink 4s infinite;transform-origin:center;}"
    + ".rb-eye.l{left:28%}.rb-eye.r{right:28%}"
    + ".rb-smile{position:absolute;left:50%;top:57%;width:30%;height:20%;transform:translateX(-50%);border:2.6px solid transparent;border-bottom-color:#bfe6ff;border-radius:50%;box-shadow:0 2px 7px rgba(90,200,255,.6);}"
    + "@keyframes rbBlink{0%,92%,100%{transform:scaleY(1)}96%{transform:scaleY(.12)}}"
    + ".rb-neck{position:relative;width:16%;height:0;padding-bottom:4%;margin:-1% auto 0;background:linear-gradient(#cfd6e2,#9aa6ba);border-radius:0 0 3px 3px;box-shadow:inset 0 -2px 3px rgba(0,0,0,.3);}"
    + ".rb-torso{position:relative;width:54%;margin:-1% auto 0;aspect-ratio:.92;border-radius:48% 48% 50% 50%/40% 40% 60% 60%;background:radial-gradient(circle at 38% 24%,#ffffff,#eef2f8 52%,#c9d2e0);box-shadow:inset -7px -9px 15px rgba(150,165,190,.5),inset 6px 6px 12px rgba(255,255,255,.9),0 10px 20px rgba(0,0,0,.42);}"
    + ".rb-mark{position:absolute;left:50%;top:50%;transform:translate(-50%,-46%);font-family:'Satoshi','DM Sans',sans-serif;font-weight:800;font-size:8.5cqw;letter-spacing:.04em;color:#c4cdda;text-shadow:0 1.2px 0 rgba(255,255,255,.85),0 -1px 1px rgba(70,90,120,.5);}"
    + ".rb-arm{position:absolute;top:4%;width:24%;height:42%;border-radius:50% 50% 50% 50%/40% 40% 60% 60%;background:radial-gradient(circle at 40% 30%,#ffffff,#dbe2ee 60%,#a8b4c8);box-shadow:0 4px 8px rgba(0,0,0,.35);}"
    + ".rb-arm.l{left:-15%;transform-origin:85% 8%;animation:rbSway 4s ease-in-out infinite;}"
    + "@keyframes rbSway{0%,100%{transform:rotate(20deg)}50%{transform:rotate(29deg)}}"
    + ".rb-arm.r{right:-16%;top:-2%;transform-origin:15% 10%;animation:rbWave 2s ease-in-out infinite;}"
    + "@keyframes rbWave{0%,100%{transform:rotate(-44deg)}25%{transform:rotate(-80deg)}50%{transform:rotate(-44deg)}75%{transform:rotate(-80deg)}}"
    + "@media (prefers-reduced-motion: reduce){.rb *{animation:none!important}}";

  function robotWave(y, amp, ph, freq, w, steps) {
    var d = 'M0 ' + y.toFixed(1);
    for (var i = 1; i <= steps; i++) { var x = w * i / steps; var yy = y + amp * Math.sin(ph + freq * (i / steps) * Math.PI * 2); d += ' L' + x.toFixed(1) + ' ' + yy.toFixed(1); }
    return d;
  }
  function buildRobot(o) {
    var waves = '';
    for (var i = 0; i < 9; i++) {
      var y = 56 + i * 11, amp = 12 + (i % 3) * 10, ph = i * 0.7, fr = 3 + (i % 2);
      waves += '<path class="w" d="' + robotWave(y, amp, ph, fr, 200, 64) + '" stroke="url(#rbgrad)" stroke-width="' + (0.8 + (i % 2) * 0.6) + '" style="animation-delay:' + (i * 0.3).toFixed(1) + 's"/>';
    }
    return '<style>' + ROBOT_CSS + '</style>' +
      '<div class="rb">' +
        '<div class="rb-coreglow"></div>' +
        '<div class="rb-aura"><svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><linearGradient id="rbgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4aa8ff"/><stop offset="0.5" stop-color="#7a7bff"/><stop offset="1" stop-color="#b06bff"/></linearGradient>' +
          '<radialGradient id="rbmaskg"><stop offset="0" stop-color="#fff"/><stop offset="0.5" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient>' +
          '<mask id="rbmask"><rect width="200" height="200" fill="url(#rbmaskg)"/></mask></defs>' +
          '<g mask="url(#rbmask)"><g class="rb-aura-rot">' + waves + '</g></g></svg></div>' +
        '<div class="rb-shadow"></div>' +
        '<div class="rb-bot">' +
          '<div class="rb-head"><div class="rb-face"><div class="rb-eye l"></div><div class="rb-eye r"></div><div class="rb-smile"></div></div></div>' +
          '<div class="rb-neck"></div>' +
          '<div class="rb-torso"><div class="rb-arm l"></div><div class="rb-arm r"></div><div class="rb-mark">' + (o.sym || 'Ti') + '</div></div>' +
        '</div>' +
      '</div>';
  }

  /* ───────── Glossy white "AI" mascot — precise replica of reference ─────────
     Rounded-square head with dark visor + cyan capsule eyes, ridged silver neck,
     teardrop body with "AI" emblem, two detached petal arms (one raised/one low),
     floating over a swirling blue energy aura. */
  var ROBOT_AI_CSS =
      ".air{position:absolute;inset:0;overflow:hidden;container-type:inline-size;background:radial-gradient(125% 105% at 50% 38%,#1a2a4e 0%,#0d1a36 52%,#060c20 100%);}"
    + ".air *{box-sizing:border-box;}"
    /* swirling energy aura */
    + ".air-core{position:absolute;left:50%;top:44%;width:66%;height:66%;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(70,150,255,.55),rgba(120,90,255,.22) 46%,transparent 70%);filter:blur(8px);animation:airPulse 4.2s ease-in-out infinite;}"
    + "@keyframes airPulse{0%,100%{opacity:.55;transform:translate(-50%,-50%) scale(.92)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.08)}}"
    + ".air-aura{position:absolute;left:50%;top:44%;width:108%;height:108%;transform:translate(-50%,-50%);pointer-events:none;}"
    + ".air-aura svg{width:100%;height:100%;overflow:visible;}"
    + ".air-aura .w{fill:none;stroke-linecap:round;animation:airShimmer 4s ease-in-out infinite;}"
    + "@keyframes airShimmer{0%,100%{opacity:.18}50%{opacity:.6}}"
    + ".air-rot{transform-box:fill-box;transform-origin:center;animation:airRot 34s linear infinite;}"
    + "@keyframes airRot{to{transform:rotate(360deg)}}"
    + ".air-shadow{position:absolute;left:50%;bottom:12%;width:30%;height:5%;transform:translateX(-50%);background:radial-gradient(circle,rgba(0,0,0,.55),transparent 70%);filter:blur(4px);animation:airShadow 3.2s ease-in-out infinite;}"
    + "@keyframes airShadow{0%,100%{opacity:.45;transform:translateX(-50%) scale(.9)}50%{opacity:.72;transform:translateX(-50%) scale(1.06)}}"
    + ".air-bot{position:absolute;left:50%;top:50%;width:50%;transform:translate(-50%,-50%);animation:airFloat 3.4s ease-in-out infinite;}"
    + "@keyframes airFloat{0%,100%{transform:translate(-50%,-54%)}50%{transform:translate(-50%,-46%)}}"
    /* head — rounded square */
    + ".air-head{position:relative;width:80%;margin:0 auto;aspect-ratio:1.16;border-radius:32%/38%;background:radial-gradient(circle at 36% 24%,#ffffff,#eef2f8 50%,#c6cfde);box-shadow:inset -6px -8px 14px rgba(146,160,188,.5),inset 6px 6px 12px rgba(255,255,255,.92),0 9px 18px rgba(0,0,0,.45);}"
    /* dark visor */
    + ".air-face{position:absolute;left:50%;top:50%;width:76%;height:58%;transform:translate(-50%,-50%);border-radius:30%/40%;background:radial-gradient(circle at 50% 26%,#2b3c60,#111c34 55%,#070d1e);box-shadow:inset 0 2px 6px rgba(120,160,230,.4),inset 0 -4px 8px #000,0 0 0 2px rgba(150,175,215,.28);overflow:hidden;}"
    + ".air-face::before{content:'';position:absolute;left:8%;top:6%;width:84%;height:34%;border-radius:50%;background:linear-gradient(180deg,rgba(160,190,240,.34),transparent);}"
    + ".air-eye{position:absolute;top:26%;width:11%;height:42%;border-radius:999px;background:linear-gradient(180deg,#e6f5ff,#9fd6ff);box-shadow:0 0 5px #6fcaff,0 0 12px #4aa8ff,inset 0 0 3px #fff;animation:airBlink 4.6s infinite;transform-origin:center;}"
    + ".air-eye.l{left:27%}.air-eye.r{right:27%}"
    + "@keyframes airBlink{0%,93%,100%{transform:scaleY(1)}96.5%{transform:scaleY(.12)}}"
    /* ridged silver neck */
    + ".air-neck{position:relative;width:17%;height:0;padding-bottom:5.5%;margin:-1.5% auto -0.5%;border-radius:2px;background:repeating-linear-gradient(180deg,#eef1f6 0,#eef1f6 1px,#b9c2d0 1.5px,#8a94a6 3px);box-shadow:inset 0 0 2px rgba(0,0,0,.35),0 2px 3px rgba(0,0,0,.3);}"
    /* teardrop body */
    + ".air-body{position:relative;width:58%;margin:0 auto;aspect-ratio:.84;border-radius:50% 50% 50% 50%/62% 62% 42% 42%;background:radial-gradient(circle at 40% 22%,#ffffff,#eef2f8 50%,#c6cfde);box-shadow:inset -8px -10px 16px rgba(146,160,188,.5),inset 7px 7px 13px rgba(255,255,255,.92),0 11px 22px rgba(0,0,0,.45);}"
    + ".air-mark{position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);font-family:'Satoshi','DM Sans',sans-serif;font-weight:800;font-size:17cqw;letter-spacing:.02em;color:#aab8cf;text-shadow:0 1.4px 0 rgba(255,255,255,.85),0 -1px 1px rgba(70,90,120,.45);}"
    /* detached petal arms */
    + ".air-arm{position:absolute;width:21%;height:40%;border-radius:54% 54% 50% 50%/68% 68% 32% 32%;background:radial-gradient(circle at 42% 28%,#ffffff,#dfe5ef 58%,#a6b2c6);box-shadow:0 4px 9px rgba(0,0,0,.38),inset 2px 2px 4px rgba(255,255,255,.85),inset -2px -3px 5px rgba(150,165,190,.5);}"
    + ".air-arm.l{left:-22%;top:-6%;transform:rotate(-32deg);animation:airArmL 4s ease-in-out infinite;}"
    + "@keyframes airArmL{0%,100%{transform:rotate(-32deg)}50%{transform:rotate(-40deg)}}"
    + ".air-arm.r{right:-21%;top:34%;transform:rotate(28deg);animation:airArmR 4.6s ease-in-out infinite;}"
    + "@keyframes airArmR{0%,100%{transform:rotate(28deg)}50%{transform:rotate(34deg)}}"
    + "@media (prefers-reduced-motion: reduce){.air *{animation:none!important}}";

  function buildRobotAI(o) {
    var waves = '';
    for (var i = 0; i < 9; i++) {
      var y = 56 + i * 11, amp = 12 + (i % 3) * 10, ph = i * 0.7, fr = 3 + (i % 2);
      waves += '<path class="w" d="' + robotWave(y, amp, ph, fr, 200, 64) + '" stroke="url(#airgrad)" stroke-width="' + (0.8 + (i % 2) * 0.6) + '" style="animation-delay:' + (i * 0.3).toFixed(1) + 's"/>';
    }
    return '<style>' + ROBOT_AI_CSS + '</style>' +
      '<div class="air">' +
        '<div class="air-core"></div>' +
        '<div class="air-aura"><svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><linearGradient id="airgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#39a0ff"/><stop offset="0.5" stop-color="#6f8bff"/><stop offset="1" stop-color="#9a6bff"/></linearGradient>' +
          '<radialGradient id="airmaskg"><stop offset="0" stop-color="#fff"/><stop offset="0.5" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient>' +
          '<mask id="airmask"><rect width="200" height="200" fill="url(#airmaskg)"/></mask></defs>' +
          '<g mask="url(#airmask)"><g class="air-rot">' + waves + '</g></g></svg></div>' +
        '<div class="air-shadow"></div>' +
        '<div class="air-bot">' +
          '<div class="air-head"><div class="air-face"><div class="air-eye l"></div><div class="air-eye r"></div></div></div>' +
          '<div class="air-neck"></div>' +
          '<div class="air-body"><div class="air-arm l"></div><div class="air-arm r"></div><div class="air-mark">AI</div></div>' +
        '</div>' +
      '</div>';
  }

  window.buildAgent = buildAgent;
  window.buildRobot = buildRobot;
  window.buildRobotAI = buildRobotAI;
  window.AGENTS_DATA = [
    { n: 'Michael the Titanium', r: 'Orchestrator', o: { id: 'a1', sym: 'Ti', robot: true,
      skin: ['#d8dde6', '#aeb6c4', '#7e8799'], hair: ['#eef1f6', '#c2c8d4', '#8a91a1', 'short'], greyTemple: true,
      cloth: ['#9fb2d2', '#4f628a', '#2a3a58'],
      eye: ['#bfe6ff', '#3f8fd0'], accent: '#7fd0ff', glow: 'rgba(80,160,255,0.42)', rim: '#5fd0ff',
      lip: '#9b8a86', brow: 8, smile: false } },
    { n: 'Pam the Silver', r: 'Project Manager', o: { id: 'a2', sym: 'Ag', robot: true,
      skin: ['#ffdcc2', '#eeb38d', '#c5855f'], hair: ['#f6f8fc', '#d2d8e2', '#9ba3b3', 'bob'],
      cloth: ['#dfe4ec', '#a9b1c0', '#6e7688'], eye: ['#9fd0d0', '#4f8a8a'], accent: '#cfe0f5',
      glow: 'rgba(150,180,210,0.4)', rim: '#9fd6e0', lip: '#c87a78', brow: 3, smile: true } },
    { n: 'Aiden the Cobalt', r: 'Developer', o: { id: 'a3', sym: 'AI', aibot: true } },
    { n: 'Kelly the Neon', r: 'Copywriter', o: { id: 'a4', sym: 'Ne',
      skin: ['#ffe6d6', '#f2c0a4', '#cf9476'], hair: ['#3a2c34', '#241a20', '#140e12', 'volume'], streak: '#ff3ea5',
      cloth: ['#ff7fc6', '#c83b9e', '#7b2f8f'], eye: ['#ffb3e6', '#c83b9e'], accent: '#ff5cc0',
      glow: 'rgba(220,80,200,0.4)', rim: '#ff7ad4', lip: '#d24b86', brow: 6, smile: true } },
    { n: 'Ryan the Radium', r: 'SEO Strategist', o: { id: 'a5', sym: 'Ra',
      skin: ['#9c6b50', '#774a36', '#4c2e20'], hair: ['#2a2a30', '#1a1a1f', '#0e0e12', 'buzz'],
      cloth: ['#3b8a5f', '#1c4a31', '#0e2418'], eye: ['#7dffb8', '#28b070'], accent: '#48f0a0',
      glow: 'rgba(50,210,130,0.36)', rim: '#48f0a0', lip: '#7a4636', brow: 11, smile: false } },
    { n: 'Dwight the Iron', r: 'QA & Security', o: { id: 'a6', sym: 'Fe',
      skin: ['#f0d2b8', '#d6a784', '#a3724e'], hair: ['#4a4a50', '#2c2c32', '#17171b', 'buzz'], stocky: true,
      cloth: ['#a6adb8', '#5d646f', '#363c45'],
      eye: ['#ff8a8a', '#c83030'], accent: '#c0c7d2', glow: 'rgba(150,70,80,0.4)', rim: '#ff6a6a',
      lip: '#a06250', brow: 15, smile: false, scan: true } },
    { n: 'Andy the Iridium', r: 'Video & Content', o: { id: 'a7', sym: 'Ir',
      skin: ['#e9b38a', '#c98a5e', '#92603c'], hair: ['#3a2c22', '#241a13', '#140d09', 'short'],
      cloth: ['#9fd4ff', '#b07ce0', '#e88fc8'], eye: ['#ffe6b0', '#c99a4a'], accent: '#ffd27f',
      glow: 'rgba(255,200,120,0.34)', rim: '#9fd4ff', lip: '#a86a52', brow: 3, smile: true } },
    { n: 'Oscar the Platinum', r: 'Finance & Analytics', o: { id: 'a8', sym: 'Pt',
      skin: ['#e6c2a4', '#c89a76', '#946a48'], hair: ['#f4f6fa', '#cfd5e0', '#9aa2b2', 'slick'], greyTemple: true,
      cloth: ['#c2c9d6', '#7c8696', '#4a5260'], eye: ['#bcd0e6', '#5f7da0'], accent: '#cfe0f5',
      glow: 'rgba(150,180,210,0.38)', rim: '#bcd6e6', lip: '#a06a58', brow: 4, smile: false } },
  ];

  if (document.getElementById('agentGrid') && window.__renderAgents) window.__renderAgents();
})();
