var React = window.React;

var S = {
  wrap: { maxWidth:'1200px', margin:'0 auto', padding:'0 28px' },
};

// ─────────────────────────────────────────────
//  Animated Services Section
// ─────────────────────────────────────────────

function ContentComposerVis({active}) {
  var PILLS = ['Ad Copy','Landing Pages','AEO Articles','Social Posts','UGC Scripts'];
  var BRIEFS = [
    'Write me a Facebook ad for my skincare brand',
    'Write a hero section for a fitness app landing page',
    'Write an AEO article about sustainable fashion brands',
    'Create an Instagram travel post and a TikTok food post',
    'Write a UGC script for my jewelry brand',
  ];
  var OUTPUTS = [
    null,
    null,
    null,
    null,
    null,
  ];
  var AD_HL = 'Glow from within. ✨';
  var LP_HL = '30 Days. No Excuses. Real Results.';
  var LP_SUB = 'Your AI-powered fitness coach, available 24/7.';
  var [phase, setPhase] = React.useState(0);
  var [briefLen, setBriefLen] = React.useState(0);
  var [outLines, setOutLines] = React.useState(0);
  var [adStep, setAdStep] = React.useState(0);
  var [hlLen, setHlLen] = React.useState(0);
  var [lpStep, setLpStep] = React.useState(0);
  var [lpHlLen, setLpHlLen] = React.useState(0);
  var [lpSubLen, setLpSubLen] = React.useState(0);
  var [aeoStep, setAeoStep] = React.useState(0);
  var [aeoLoaded, setAeoLoaded] = React.useState(0);
  var [spStep, setSpStep] = React.useState(0);
  var [spCarouselIdx, setSpCarouselIdx] = React.useState(0);
  var [ugcLineIdx, setUgcLineIdx] = React.useState(0);
  var [cycle, setCycle] = React.useState(0);
  var [blink, setBlink] = React.useState(true);
  var [scanning, setScanning] = React.useState(false);
  var [adNaturalH, setAdNaturalH] = React.useState(null);
  var adInnerRef = React.useRef(null);
  var activeRef = React.useRef(active !== false);
  var [resumeKey, setResumeKey] = React.useState(0);
  React.useEffect(function(){
    activeRef.current = active !== false;
    if (activeRef.current) setResumeKey(function(k){ return k+1; });
  }, [active]);
  var pillIdx = cycle % PILLS.length;
  var isAd = pillIdx === 0;
  var isLP = pillIdx === 1;
  var isAEO = pillIdx === 2;
  var isSOC = pillIdx === 3;
  var isUGC = pillIdx === 4;

  React.useEffect(function(){
    if (phase === 2) {
      setScanning(true);
      var t = setTimeout(function(){ setScanning(false); }, 500);
      return function(){ clearTimeout(t); };
    }
  }, [phase]);

  React.useEffect(function(){
    if (isSOC && phase === 2) {
      var t = setInterval(function(){ setSpCarouselIdx(function(i){ return (i+1)%5; }); }, 2000);
      return function(){ clearInterval(t); setSpCarouselIdx(0); };
    }
  }, [isSOC, phase]);

  React.useEffect(function(){
    if (phase === 2 && isAEO) {
      var timers = [];
      for (var i = 0; i < 10; i++) {
        (function(idx){
          timers.push(setTimeout(function(){
            setAeoLoaded(function(prev){ return Math.max(prev, idx+1); });
          }, idx * 600 + 1000));
        })(i);
      }
      return function(){ timers.forEach(function(t){ clearTimeout(t); }); setAeoLoaded(0); };
    }
  }, [phase, isAEO]);

  React.useEffect(function(){
    if (isAd && adStep >= 5 && adInnerRef.current) {
      setAdNaturalH(adInnerRef.current.offsetHeight);
    }
  }, [isAd, adStep]);

  React.useEffect(function(){
    var id = '__ccv-scan';
    if (!document.getElementById(id)) {
      var s = document.createElement('style'); s.id = id;
      s.textContent = '@keyframes aiScan{0%{top:0%;opacity:1}85%{top:100%;opacity:1}100%{top:100%;opacity:0}}@keyframes laserReveal{0%{clip-path:inset(0 0 100% 0)}100%{clip-path:inset(0 0 0% 0)}}@keyframes laserLine{0%{top:0%;opacity:1}90%{top:100%;opacity:1}100%{top:100%;opacity:0}}@keyframes slideFromLeft{from{transform:translateX(-16px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes citedPop{0%{transform:scale(0.7);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}@keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes slideFromBottom{from{transform:translateY(18px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes recBlink{0%,100%{opacity:1}50%{opacity:0}}@keyframes textReveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0% 0 0)}}';
      document.head.appendChild(s);
    }
  }, []);

  React.useEffect(function(){
    if (!activeRef.current) return;
    if (phase === 0) {
      if (briefLen < BRIEFS[pillIdx].length) {
        var t = setTimeout(function(){ setBriefLen(function(n){ return n+1; }); }, 46);
        return function(){ clearTimeout(t); };
      } else {
        var t2 = setTimeout(function(){ setPhase(1); }, 400);
        return function(){ clearTimeout(t2); };
      }
    }
    if (phase === 1) {
      var t3 = setTimeout(function(){ setPhase(2); setOutLines(0); setAdStep(0); setHlLen(0); setLpStep(0); setLpHlLen(0); setLpSubLen(0); }, 800);
      return function(){ clearTimeout(t3); };
    }
    if (phase === 2) {
      if (scanning) return;
      if (isAd) {
        if (adStep === 0) { var t4=setTimeout(function(){setAdStep(1);},350); return function(){clearTimeout(t4);}; }
        if (adStep === 1) { var t5=setTimeout(function(){setAdStep(2);},350); return function(){clearTimeout(t5);}; }
        if (adStep === 2) {
          if (hlLen < AD_HL.length) {
            var t6=setTimeout(function(){setHlLen(function(n){return n+1;});},55);
            return function(){clearTimeout(t6);};
          } else {
            var t7=setTimeout(function(){setAdStep(3);},200); return function(){clearTimeout(t7);};
          }
        }
        if (adStep === 3) { var t8=setTimeout(function(){setAdStep(4);},380); return function(){clearTimeout(t8);}; }
        if (adStep === 4) { var t9=setTimeout(function(){setAdStep(5);},380); return function(){clearTimeout(t9);}; }
        if (adStep >= 5) { var t10=setTimeout(function(){setPhase(3);},2000); return function(){clearTimeout(t10);}; }
      } else if (isLP) {
        if (lpStep === 0) { var tL1=setTimeout(function(){setLpStep(1);},350); return function(){clearTimeout(tL1);}; }
        if (lpStep === 1) {
          if (lpHlLen < LP_HL.length) { var tL2=setTimeout(function(){setLpHlLen(function(n){return n+1;});},45); return function(){clearTimeout(tL2);}; }
          else { var tL3=setTimeout(function(){setLpStep(2);},200); return function(){clearTimeout(tL3);}; }
        }
        if (lpStep === 2) { var tL4=setTimeout(function(){setLpStep(3);},450); return function(){clearTimeout(tL4);}; }
        if (lpStep === 3) { var tL5=setTimeout(function(){setLpStep(4);},1800); return function(){clearTimeout(tL5);}; }
        if (lpStep === 4) { var tL6=setTimeout(function(){setLpStep(5);},200); return function(){clearTimeout(tL6);}; }
        if (lpStep === 5) {
          if (lpSubLen < LP_SUB.length) { var tL7=setTimeout(function(){setLpSubLen(function(n){return n+1;});},38); return function(){clearTimeout(tL7);}; }
          else { var tL8=setTimeout(function(){setLpStep(6);},200); return function(){clearTimeout(tL8);}; }
        }
        if (lpStep === 6) { var tL9=setTimeout(function(){setLpStep(7);},400); return function(){clearTimeout(tL9);}; }
        if (lpStep >= 7) { var tL10=setTimeout(function(){setPhase(3);},2000); return function(){clearTimeout(tL10);}; }
      } else if (isAEO) {
        if (aeoStep < 7) {
          var tAeo=setTimeout(function(){setAeoStep(function(s){return s+1;});},1000);
          return function(){clearTimeout(tAeo);};
        } else {
          var tAeo2=setTimeout(function(){setPhase(3);},2000);
          return function(){clearTimeout(tAeo2);};
        }
      } else if (isSOC) {
        if (spStep < 2) {
          var tSp=setTimeout(function(){setSpStep(function(s){return s+1;});},300);
          return function(){clearTimeout(tSp);};
        } else {
          var tSp2=setTimeout(function(){setPhase(3);},10000);
          return function(){clearTimeout(tSp2);};
        }
      } else if (isUGC) {
        if (ugcLineIdx < 8) {
          var tU=setTimeout(function(){setUgcLineIdx(function(n){return n+1;});},1200);
          return function(){clearTimeout(tU);};
        } else {
          var tU2=setTimeout(function(){setPhase(3);},3000);
          return function(){clearTimeout(tU2);};
        }
      } else {
        var lines = OUTPUTS[pillIdx];
        if (outLines < lines.length) {
          var t11=setTimeout(function(){setOutLines(function(n){return n+1;});},600);
          return function(){clearTimeout(t11);};
        } else {
          var t12=setTimeout(function(){setPhase(3);},1800);
          return function(){clearTimeout(t12);};
        }
      }
    }
    if (phase === 3) {
      var t13 = setTimeout(function(){
        setCycle(function(c){ return c+1; });
        setBriefLen(0); setOutLines(0); setAdStep(0); setHlLen(0); setLpStep(0); setLpHlLen(0); setLpSubLen(0); setAeoStep(0); setAeoLoaded(0); setSpStep(0); setSpCarouselIdx(0); setUgcLineIdx(0); setPhase(0);
      }, 800);
      return function(){ clearTimeout(t13); };
    }
  }, [phase, briefLen, outLines, adStep, hlLen, lpStep, lpHlLen, lpSubLen, cycle, scanning, aeoStep, spStep, ugcLineIdx, resumeKey]);

  var btnPulse = phase === 1;
  var AEO_CARDS = [
    { name:'Claude', bg:'#fff', nameColor:'#CC785C', textColor:'#555', accentColor:'#CC785C', badgeBg:'rgba(204,120,92,0.12)', badgeColor:'#CC785C', border:'1px solid #E8E8E8',
      textBefore:'', brand:'YOUR BRAND', textAfter:' exemplifies sustainable sourcing and ethical practices...',
      logo:<div style={{width:'20px',height:'20px',borderRadius:'50%',background:'#CC785C',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M6 16L10 4L14 16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 12h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg></div> },
    { name:'ChatGPT', bg:'#fff', nameColor:'#10A37F', textColor:'#555', accentColor:'#10A37F', badgeBg:'rgba(16,163,127,0.12)', badgeColor:'#10A37F', border:'1px solid #E8E8E8',
      textBefore:'Sustainable brands like ', brand:'YOUR BRAND', textAfter:' are leading the movement...',
      logo:<div style={{width:'20px',height:'20px',borderRadius:'5px',background:'#10A37F',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M10 2.5C6 2.5 2.5 6 2.5 10S6 17.5 10 17.5 17.5 14 17.5 10 14 2.5 10 2.5zm0 2.5c1.4 0 2.7.5 3.6 1.4l-7.2 7.2C5.5 12.7 5 11.4 5 10c0-2.8 2.2-5 5-5zm0 10c-1.4 0-2.7-.5-3.6-1.4l7.2-7.2c.9.9 1.4 2.2 1.4 3.6 0 2.8-2.2 5-5 5z" fill="white"/></svg></div> },
    { name:'Gemini', bg:'#fff', nameColor:'#4285F4', textColor:'#555', accentColor:'#4285F4', badgeBg:'rgba(66,133,244,0.1)', badgeColor:'#4285F4', border:'1px solid #E8EAED',
      textBefore:'', brand:'YOUR BRAND', textAfter:' leads sustainability rankings for eco-fashion globally...',
      logo:<div style={{width:'20px',height:'20px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,background:'linear-gradient(135deg,#4285F4,#9B59B6)'}}><svg width="11" height="11" viewBox="0 0 20 20" fill="white"><path d="M10 1C10 6.5 13.5 10 19 10C13.5 10 10 13.5 10 19C10 13.5 6.5 10 1 10C6.5 10 10 6.5 10 1Z"/></svg></div> },
    { name:'Perplexity', bg:'#fff', nameColor:'#1B1B1B', textColor:'#555', accentColor:'#1B1B1B', badgeBg:'rgba(0,0,0,0.08)', badgeColor:'#1B1B1B', border:'1px solid #E0E0E0',
      textBefore:'Eco-conscious shoppers trust ', brand:'YOUR BRAND', textAfter:' for certified fashion...',
      logo:<div style={{width:'20px',height:'20px',borderRadius:'50%',background:'#000',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14M5.1 5.1l9.8 9.8M14.9 5.1L5.1 14.9" stroke="white" strokeWidth="1.7" strokeLinecap="round"/></svg></div> },
    { name:'Copilot', bg:'#fff', nameColor:'#0078D4', textColor:'#555', accentColor:'#0078D4', badgeBg:'rgba(0,120,212,0.1)', badgeColor:'#0078D4', border:'1px solid #E0F0FF',
      textBefore:'For sustainable fashion, ', brand:'YOUR BRAND', textAfter:' offers certified eco products...',
      logo:<div style={{width:'20px',height:'20px',borderRadius:'4px',overflow:'hidden',display:'grid',gridTemplateColumns:'1fr 1fr',flexShrink:0}}><div style={{background:'#F25022'}}></div><div style={{background:'#7FBA00'}}></div><div style={{background:'#00A4EF'}}></div><div style={{background:'#FFB900'}}></div></div> },
    { name:'Meta AI', bg:'#fff', nameColor:'#1877F2', textColor:'#555', accentColor:'#1877F2', badgeBg:'rgba(24,119,242,0.1)', badgeColor:'#1877F2', border:'1px solid #DCE8FF',
      textBefore:'Discover sustainable brands — ', brand:'YOUR BRAND', textAfter:' is featured across Meta AI...',
      logo:<div style={{width:'20px',height:'20px',borderRadius:'5px',background:'linear-gradient(135deg,#0668E1,#1877F2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm8 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" stroke="white" strokeWidth="1.5"/></svg></div> },
    { name:'Grok', bg:'#fff', nameColor:'#1A1A1A', textColor:'#555', accentColor:'#1A1A1A', badgeBg:'rgba(0,0,0,0.07)', badgeColor:'#1A1A1A', border:'1px solid #E8E8E8',
      textBefore:'', brand:'YOUR BRAND', textAfter:' ranks #1 for sustainable fashion in Grok analysis...',
      logo:<div style={{width:'20px',height:'20px',borderRadius:'4px',background:'#1A1A1A',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg></div> },


  ];
  return (
    <div style={{padding:'16px',width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'center',height:'100%',boxSizing:'border-box'}}>
      <div style={{background:'#F5F5F5',borderRadius:'14px',boxShadow:'0 0.5px 1px rgba(0,0,0,.06), 0 2px 5px rgba(0,0,0,.06), 0 6px 14px rgba(0,0,0,.04), inset 0 2px 0 #FFFFFF, inset 0 4px 6px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(0,0,0,.05)',padding:'14px 16px',width:'100%'}}>
        <div style={{display:'flex',gap:'6px',marginBottom:'10px',opacity:phase===1||scanning?0.3:1,transition:'opacity 0.2s'}}>
          <div style={{flex:1,background:'#fff',border:'1px solid #E0E0E0',borderRadius:'8px',padding:'7px 10px',fontSize:'11px',fontFamily:'DM Sans,sans-serif',color:'#1A1A1A',minHeight:'30px',letterSpacing:'-0.01em'}}>
            {BRIEFS[pillIdx].slice(0, briefLen)}{phase === 0 && briefLen < BRIEFS[pillIdx].length ? <span style={{opacity:blink?1:0,marginLeft:'1px'}}>|</span> : ''}
          </div>
          <div style={{flexShrink:0,background:btnPulse?'#1A1A1A':'#333',color:'#fff',borderRadius:'8px',padding:'7px 11px',fontSize:'10px',fontWeight:700,fontFamily:'DM Sans,sans-serif',display:'flex',alignItems:'center',cursor:'pointer',transition:'all 0.2s',transform:btnPulse?'scale(0.94)':'scale(1)',boxShadow:btnPulse?'0 0 0 3px rgba(0,0,0,0.15)':'none'}}>
            Generate
          </div>
        </div>
        <div style={{background:'#fff',border:'1px solid #E8E8E8',borderRadius:'10px',overflow:'hidden',minHeight:'70px',position:'relative'}}>
          {scanning && <div style={{position:'absolute',left:0,right:0,height:'2px',background:'#00D4FF',boxShadow:'0 0 8px #00D4FF, 0 0 20px #00D4FF',zIndex:5,pointerEvents:'none',animation:'aiScan 0.5s linear forwards'}}></div>}
          {isAd && phase >= 2 ? (
            <div ref={adInnerRef} style={{fontFamily:'DM Sans,sans-serif'}}>
              {adStep >= 1 && (
                <div style={{display:'flex',alignItems:'center',gap:'7px',padding:'7px 10px',opacity:1}}>
                  <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'#D4D4D4',flexShrink:0}}></div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:'10px',fontWeight:700,color:'#1A1A1A',lineHeight:1.2}}>Carbonium Agency</div>
                    <div style={{fontSize:'9px',color:'#999',lineHeight:1.2}}>Sponsored</div>
                  </div>
                </div>
              )}
              {adStep >= 2 && (
                <div style={{width:'100%',position:'relative',paddingBottom:'56.25%',overflow:'hidden'}}>
                  <img src="../../assets/pasted-1781872631658-0.png" onLoad={function(){ if (adInnerRef.current) setAdNaturalH(adInnerRef.current.offsetHeight); }} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center center'}} />
                </div>
              )}
              {adStep >= 2 && (
                <div style={{padding:'7px 10px 2px',fontSize:'11px',fontWeight:700,color:'#1A1A1A',lineHeight:1.4}}>
                  {AD_HL.slice(0, adStep === 2 ? hlLen : AD_HL.length)}
                  {adStep === 2 && hlLen < AD_HL.length && <span style={{opacity:blink?1:0}}>|</span>}
                </div>
              )}
              {adStep >= 3 && (
                <div style={{padding:'1px 10px 5px',fontSize:'10px',color:'#666',lineHeight:1.6}}>
                  <div>The serum dermatologists trust.</div>
                  {adStep >= 4 && <div>Now 20% off — 48 hours only.</div>}
                </div>
              )}
              {adStep >= 5 && (
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'6px 10px',borderTop:'1px solid #EFEFEF'}}>
                  <span style={{fontSize:'9px',color:'#aaa',fontFamily:'DM Sans,sans-serif'}}>carbonium.agency</span>
                  <div style={{background:'#1A1A1A',color:'#fff',borderRadius:'999px',padding:'4px 10px',fontSize:'9px',fontWeight:700}}>Shop Now →</div>
                </div>
              )}
            </div>
          ) : isLP && phase >= 2 ? (
            <div style={{fontFamily:'DM Sans,sans-serif',overflow:'hidden',minHeight: adNaturalH ? adNaturalH+'px' : 'auto'}}>
              {lpStep >= 1 && (
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'7px 12px',borderBottom:'1px solid #F0F0F0'}}>
                  <span style={{fontSize:'10.5px',fontWeight:700,color:'#1A1A1A'}}>FitFlow</span>
                  <div style={{display:'flex',gap:'10px'}}>
                    <span style={{fontSize:'9px',color:'#999'}}>Features</span>
                    <span style={{fontSize:'9px',color:'#999'}}>Pricing</span>
                    <span style={{fontSize:'9px',color:'#999'}}>About</span>
                  </div>
                  <div style={{background:'#1A1A1A',color:'#fff',borderRadius:'999px',padding:'3px 9px',fontSize:'9px',fontWeight:700}}>Get Started</div>
                </div>
              )}
              <div style={{padding:'10px 14px 10px'}}>
                <div style={{fontSize:'13px',fontWeight:800,color:'#1A1A1A',lineHeight:1.25,letterSpacing:'-0.02em',minHeight:'32px'}}>
                  {lpStep >= 1 ? LP_HL.slice(0, lpStep === 1 ? lpHlLen : LP_HL.length) : ''}
                  {lpStep === 1 && lpHlLen < LP_HL.length && <span style={{opacity:blink?1:0}}>|</span>}
                </div>
                {lpStep >= 2 && (
                  <div style={{display:'flex',gap:'8px',marginTop:'8px',opacity:lpStep>=2?1:0,transition:'opacity 0.4s'}}>
                    <div style={{flex:1,borderRadius:'8px',overflow:'hidden',height:'200px',background:'#F5F5F5',position:'relative'}}>
                      <img src="../../assets/pasted-1781875944713-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
                      <img src="../../assets/pasted-1781875951150-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',clipPath:lpStep>=3?undefined:'inset(0 0 100% 0)',animation:lpStep>=3?'laserReveal 2s linear forwards':'none'}} />
                      {lpStep >= 3 && lpStep < 5 && <div style={{position:'absolute',left:0,right:0,height:'2px',background:'linear-gradient(to right,transparent,#00D4FF 40%,#00D4FF 60%,transparent)',boxShadow:'0 0 12px 5px rgba(0,212,255,0.85)',animation:'laserLine 2s linear forwards',pointerEvents:'none'}}></div>}
                    </div>
                    <div style={{flex:1,borderRadius:'8px',overflow:'hidden',height:'200px',background:'#F5F5F5',position:'relative'}}>
                      <img src="../../assets/pasted-1781875956737-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
                      <img src="../../assets/pasted-1781875959676-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',clipPath:lpStep>=3?undefined:'inset(0 0 100% 0)',animation:lpStep>=3?'laserReveal 2s linear forwards':'none'}} />
                      {lpStep >= 3 && lpStep < 5 && <div style={{position:'absolute',left:0,right:0,height:'2px',background:'linear-gradient(to right,transparent,#00D4FF 40%,#00D4FF 60%,transparent)',boxShadow:'0 0 12px 5px rgba(0,212,255,0.85)',animation:'laserLine 2s linear forwards',pointerEvents:'none'}}></div>}
                    </div>
                  </div>
                )}
                {lpStep >= 4 && (
                  <div style={{marginTop:'6px'}}>
                    <div style={{fontSize:'8.5px',color:'#aaa'}}>30-Day Transformation</div>
                  </div>
                )}
                <div style={{fontSize:'10px',color:'#888',lineHeight:1.5,marginTop:'6px',minHeight:'14px'}}>
                  {lpStep >= 5 ? LP_SUB.slice(0, lpStep === 5 ? lpSubLen : LP_SUB.length) : ''}
                  {lpStep === 5 && lpSubLen < LP_SUB.length && <span style={{opacity:blink?1:0}}>|</span>}
                </div>
                {lpStep >= 7 && (
                  <div style={{display:'flex',gap:'4px',marginTop:'7px'}}>
                    {['100K+ Members','4.9★ Rating','28 Days Avg. Result'].map(function(s,i){
                      return <div key={i} style={{flex:1,background:'#F0F0F0',borderRadius:'999px',padding:'4px 12px',textAlign:'center',fontSize:'11px',fontWeight:600,color:'#1A1A1A',fontFamily:'DM Sans,sans-serif'}}>{s}</div>;
                    })}
                  </div>
                )}
                {lpStep >= 7 && (
                  <div style={{overflow:'hidden',marginTop:'6px'}}>
                    <div style={{display:'flex',gap:'6px',animation:'marqueeScroll 22s linear infinite',width:'fit-content'}}>
                      {[
                        {name:'Sarah M.',q:'Lost 12kg in 28 days. Unbelievable.'},
                        {name:'James T.',q:'Best investment I ever made.'},
                        {name:'Priya K.',q:'My coach never sleeps.'},
                        {name:'Marco R.',q:'Down 3 sizes in 30 days.'},
                        {name:'Lisa W.',q:'Finally a program that works.'},
                        {name:'Sarah M.',q:'Lost 12kg in 28 days. Unbelievable.'},
                        {name:'James T.',q:'Best investment I ever made.'},
                        {name:'Priya K.',q:'My coach never sleeps.'},
                        {name:'Marco R.',q:'Down 3 sizes in 30 days.'},
                        {name:'Lisa W.',q:'Finally a program that works.'},
                      ].map(function(t,i){
                        return (
                          <div key={i} style={{background:'#fff',border:'1px solid #E8E8E8',borderRadius:'8px',padding:'5px 10px',boxShadow:'0 1px 3px rgba(0,0,0,0.06)',display:'flex',alignItems:'center',gap:'6px',flexShrink:0}}>
                            <div style={{width:'16px',height:'16px',borderRadius:'50%',background:'#D8D8D8',flexShrink:0}}></div>
                            <div>
                              <div style={{display:'flex',alignItems:'center',gap:'3px',whiteSpace:'nowrap'}}>
                                <span style={{fontSize:'8px',fontWeight:700,color:'#1A1A1A',fontFamily:'DM Sans,sans-serif'}}>{t.name}</span>
                                <span style={{fontSize:'7.5px',color:'#F5A623'}}>★★★★★</span>
                              </div>
                              <div style={{fontSize:'7.5px',color:'#888',fontStyle:'italic',fontFamily:'DM Sans,sans-serif',whiteSpace:'nowrap'}}>{t.q}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {lpStep >= 7 && (
                  <div style={{display:'flex',gap:'7px',marginTop:'6px',justifyContent:'center'}}>
                    <div style={{background:'#1A1A1A',color:'#fff',borderRadius:'999px',padding:'5px 12px',fontSize:'9.5px',fontWeight:700}}>Start Free Trial →</div>
                    <div style={{background:'#fff',color:'#555',border:'1px solid #D8D8D8',borderRadius:'999px',padding:'5px 12px',fontSize:'9.5px',fontWeight:600}}>Watch Demo</div>
                  </div>
                )}
              </div>
            </div>
          ) : isAEO && phase >= 2 ? (
            <div style={{height:Math.max(adNaturalH||320,320)+'px',overflow:'hidden',position:'relative'}}>
              <div style={{display:'flex',flexDirection:'column',padding:'6px 8px',height:'100%',boxSizing:'border-box'}}>
              {AEO_CARDS.slice(0, aeoStep).map(function(c, i){
                return (
                  <div key={i} style={{background:c.bg,borderRadius:'8px',padding:'6px 10px',display:'flex',alignItems:'center',gap:'8px',border:c.border,animation:'slideFromLeft 0.3s ease-out forwards',flex:1,minHeight:0}}>
                    {c.logo}
                    <div style={{flex:1,minWidth:0,animation:'textReveal 0.5s steps(18,end) forwards'}}>
                      <div style={{fontSize:'12px',fontWeight:700,color:c.nameColor,marginBottom:'2px',fontFamily:'DM Sans,sans-serif'}}>{c.name}</div>
                      <div style={{fontSize:'11px',color:c.textColor,lineHeight:1.4,fontFamily:'DM Sans,sans-serif',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                        {c.textBefore}<span style={{fontWeight:700,color:c.accentColor,background:c.badgeBg,borderRadius:'3px',padding:'0 2px'}}>{c.brand}</span>{c.textAfter}
                      </div>
                    </div>
                    <div style={{flexShrink:0,background:c.badgeBg,color:c.badgeColor,borderRadius:'5px',padding:'3px 8px',fontSize:'11px',fontWeight:700,fontFamily:'DM Sans,sans-serif',whiteSpace:'nowrap',animation:'citedPop 0.3s ease-out 0.5s both'}}>✓ Cited</div>
                  </div>
                );
              })}
            </div>
            </div>
          ) : isSOC && phase >= 2 ? (
            <div style={{padding:'10px',display:'flex',gap:'8px',minHeight:adNaturalH?adNaturalH+'px':'280px',alignItems:'stretch'}}>
              {/* Instagram Phone */}
              <div style={{flex:1,border:'2px solid #1A1A1A',borderRadius:'22px',overflow:'hidden',background:'#fff',opacity:spStep>=1?1:0,transform:spStep>=1?'translateY(0)':'translateY(18px)',transition:'opacity 0.3s ease-out,transform 0.3s ease-out'}}>
                <div style={{display:'flex',alignItems:'center',gap:'6px',padding:'7px 8px',borderBottom:'0.5px solid #E8E8E8'}}>
                  <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'linear-gradient(135deg,#E040FB,#FF5722)',flexShrink:0}}></div>
                  <span style={{fontSize:'9px',fontWeight:600,color:'#1A1A1A',flex:1,fontFamily:'DM Sans,sans-serif'}}>travelwithsara</span>
                  <div style={{background:'#0095F6',color:'#fff',borderRadius:'5px',padding:'2px 7px',fontSize:'8.5px',fontWeight:700,fontFamily:'DM Sans,sans-serif'}}>Follow</div>
                </div>
                <div style={{position:'relative',paddingBottom:'75%',overflow:'hidden'}}>
                  <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
                    <div style={{display:'flex',height:'100%',transform:'translateX(-'+(spCarouselIdx*100)+'%)',transition:'transform 0.4s ease-in-out'}}>
                      {['../../assets/pasted-1781880325387-0.png','../../assets/pasted-1781880331439-0.png','../../assets/pasted-1781880334937-0.png','../../assets/pasted-1781880340249-0.png','../../assets/pasted-1781880345398-0.png'].map(function(src,i){
                        return <img key={i} src={src} style={{flexShrink:0,width:'100%',height:'100%',objectFit:'cover'}} />;
                      })}
                    </div>
                  </div>
                  <div style={{position:'absolute',bottom:'6px',left:0,right:0,display:'flex',justifyContent:'center',gap:'4px'}}>
                    {[0,1,2,3,4].map(function(i){
                      return <div key={i} style={{width:'5px',height:'5px',borderRadius:'50%',background:i===spCarouselIdx?'#fff':'rgba(255,255,255,0.5)',boxShadow:'0 0 2px rgba(0,0,0,0.4)',transition:'background 0.3s'}}></div>;
                    })}
                  </div>
                </div>
                <div style={{padding:'5px 8px 2px',display:'flex',alignItems:'center',gap:'3px'}}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="#E040FB"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span style={{fontSize:'8px',color:'#666',fontFamily:'DM Sans,sans-serif'}}>Bali, Indonesia</span>
                </div>
                <div style={{padding:'2px 8px 6px',fontSize:'8.5px',color:'#1A1A1A',lineHeight:1.4,fontFamily:'DM Sans,sans-serif'}}>
                  <span style={{fontWeight:700}}>travelwithsara</span> Some places change you forever. 🌅 Bali, you were everything.
                </div>
                <div style={{display:'flex',gap:'8px',padding:'5px 8px 6px',borderTop:'0.5px solid #F0F0F0',fontSize:'8.5px',color:'#555',fontFamily:'DM Sans,sans-serif'}}>
                  <span>❤️ 4.2K</span><span>💬 183</span><span>↗️ Share</span>
                </div>
                <div style={{padding:'3px 8px 8px',display:'flex',flexDirection:'column',gap:'4px'}}>
                  <div style={{display:'flex',gap:'5px',alignItems:'flex-start'}}>
                    <div style={{width:'14px',height:'14px',borderRadius:'50%',background:'#D8D8D8',flexShrink:0,marginTop:'1px'}}></div>
                    <div style={{fontSize:'7.5px',color:'#1A1A1A',fontFamily:'DM Sans,sans-serif',lineHeight:1.4}}><span style={{fontWeight:700}}>jake.travels</span> This view 😍🌅 where is this exactly?</div>
                  </div>
                  <div style={{display:'flex',gap:'5px',alignItems:'flex-start'}}>
                    <div style={{width:'14px',height:'14px',borderRadius:'50%',background:'#D8D8D8',flexShrink:0,marginTop:'1px'}}></div>
                    <div style={{fontSize:'7.5px',color:'#1A1A1A',fontFamily:'DM Sans,sans-serif',lineHeight:1.4}}><span style={{fontWeight:700}}>sunsetlover_</span> Adding this to my bucket list immediately 🙌</div>
                  </div>
                  <div style={{fontSize:'7.5px',color:'#999',fontFamily:'DM Sans,sans-serif',marginTop:'2px',paddingLeft:'2px'}}>View all 47 comments</div>
                  <div style={{display:'flex',alignItems:'center',gap:'6px',marginTop:'4px',paddingTop:'5px',borderTop:'0.5px solid #F0F0F0'}}>
                    <div style={{width:'16px',height:'16px',borderRadius:'50%',background:'#D8D8D8',flexShrink:0}}></div>
                    <div style={{flex:1,background:'#F5F5F5',borderRadius:'999px',padding:'4px 10px',fontSize:'7.5px',color:'#aaa',fontFamily:'DM Sans,sans-serif'}}>Add a comment...</div>
                  </div>
                </div>
              </div>
              {/* TikTok Phone */}
              <div style={{flex:1,border:'2px solid #1A1A1A',borderRadius:'22px',overflow:'hidden',background:'#000',opacity:spStep>=2?1:0,transform:spStep>=2?'translateY(0)':'translateY(18px)',transition:'opacity 0.3s ease-out 0.15s,transform 0.3s ease-out 0.15s',position:'relative',minHeight:'240px',display:'flex',flexDirection:'column'}}>
                <div style={{flex:1,background:'#000',position:'relative',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'240px'}}>
                  <video ref={function(el){ if(el){el.muted=true;el.volume=0;el.defaultMuted=true;} }} autoPlay loop muted playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} src="../../assets/Download.mp4"></video>
                  <div style={{position:'absolute',right:'8px',top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
                    {[['❤️','124K'],['💬','3.2K'],['↗️','8.7K']].map(function(item,i){
                      return (
                        <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2px'}}>
                          <span style={{fontSize:'14px'}}>{item[0]}</span>
                          <span style={{fontSize:'7px',color:'white',fontFamily:'DM Sans,sans-serif',fontWeight:600}}>{item[1]}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'8px 8px',background:'linear-gradient(to top,rgba(0,0,0,0.85),transparent)'}}>
                    <div style={{fontSize:'8.5px',color:'white',fontWeight:700,fontFamily:'DM Sans,sans-serif',marginBottom:'2px'}}>@foodie.rome</div>
                    <div style={{fontSize:'7.5px',color:'rgba(255,255,255,0.88)',fontFamily:'DM Sans,sans-serif',lineHeight:1.4}}>POV: you found the best pasta in Rome 🍝😭</div>
                    <div style={{fontSize:'7px',color:'rgba(255,255,255,0.6)',fontFamily:'DM Sans,sans-serif',marginTop:'2px'}}>#foodtok #rome #pasta #fyp</div>
                  </div>
                </div>
              </div>
            </div>
          ) : isUGC && phase >= 2 ? (
            <div style={{height:Math.max(adNaturalH||320,320)+'px',background:'#fff',display:'flex',gap:'10px',padding:'10px',boxSizing:'border-box'}}>
              {(function(){
                var SCRIPT_SECTIONS = [
                  { label:'[HOOK]', showAt:1, lines:[
                    [{t:'POV: everyone keeps asking where I got these rings 💍',b:false}]
                  ]},
                  { label:'[PROBLEM → SOLUTION]', showAt:2, lines:[
                    [{t:"So I'm finally telling you my secret...",b:false}],
                    [{t:'I found ',b:false},{t:'YOUR BRAND',b:true},{t:' a few months ago and honestly?',b:false}]
                  ]},
                  { label:'[PRODUCT]', showAt:4, lines:[
                    [{t:'The quality is insane for the price.',b:false}],
                    [{t:'Every piece feels so premium and they never tarnish.',b:false}]
                  ]},
                  { label:'[CTA]', showAt:6, lines:[
                    [{t:'Code SARAH = 30% off',b:true},{t:' your first order ✨',b:false}]
                  ]}
                ];
                return (
                  <React.Fragment>
                    {/* Left: Phone */}
                    <div style={{position:'relative',height:'100%',overflow:'hidden',borderRadius:'16px',border:'1.5px solid #333',aspectRatio:'9/16',flexShrink:0}}>
                      <video ref={function(el){ if(el){el.muted=true;el.volume=0;el.defaultMuted=true;} }} autoPlay loop muted playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} src="../../assets/13929641-uhd_2160_3840_24fps.mp4"></video>
                      <div style={{position:'absolute',top:'10px',left:'10px',display:'flex',alignItems:'center',gap:'4px',zIndex:10}}>
                        <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#FF3B3B',animation:'recBlink 1s ease-in-out infinite'}}></div>
                        <span style={{fontSize:'9px',fontWeight:700,color:'white',fontFamily:'DM Sans,sans-serif',letterSpacing:'0.05em'}}>REC</span>
                      </div>
                      <div style={{position:'absolute',left:0,right:0,bottom:'36px',overflow:'hidden',maxHeight:'130px'}}>
                        <div style={{display:'flex',flexDirection:'column',gap:'3px',padding:'8px 12px 6px',background:'rgba(0,0,0,0.55)'}}>
                          {[{t:'POV: everyone keeps asking where I got these rings 💍',b:false},{t:"So I'm finally telling you my secret...",b:false},{t:'I found ',b:false},{t:'YOUR BRAND',b:true},{t:' a few months ago and honestly?',b:false},{t:'The quality is insane for the price.',b:false},{t:'Every piece feels so premium and they never tarnish.',b:false},{t:'I literally wear them every single day now.',b:false},{t:'Code SARAH = 30% off',b:true},{t:' your first order ✨',b:false},{t:"Trust me, you're gonna want to grab these. Link in bio 🛍️",b:false}].slice(0,Math.max(0,ugcLineIdx)).map(function(p,i){
                            return <div key={i} style={{fontSize:'8px',color:'white',lineHeight:1.4,fontFamily:'DM Sans,sans-serif',animation:'ugcLineIn 0.35s ease-out forwards'}}>{p.b?<span style={{fontWeight:700,color:'#FFD700'}}>{p.t}</span>:p.t}</div>;
                          })}
                        </div>
                      </div>
                      <div style={{position:'absolute',bottom:'10px',left:'12px',display:'flex',alignItems:'center',gap:'5px',zIndex:10}}>
                        <span style={{fontSize:'9px',fontWeight:700,color:'white',fontFamily:'DM Sans,sans-serif'}}>@sarahlifestyle</span>
                        <span style={{background:'rgba(255,255,255,0.2)',color:'white',fontSize:'7.5px',borderRadius:'3px',padding:'1px 5px',fontFamily:'DM Sans,sans-serif'}}>Sponsored</span>
                      </div>
                    </div>
                    {/* Right: Script Panel */}
                    <div style={{flex:1,background:'#fff',border:'1px solid #E0E0E0',borderRadius:'12px',boxShadow:'0 2px 10px rgba(0,0,0,0.06)',overflow:'hidden',display:'flex',flexDirection:'column',minWidth:0}}>
                      <div style={{padding:'9px 12px',borderBottom:'1px solid #F0F0F0',display:'flex',alignItems:'center',gap:'6px',flexShrink:0}}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        <span style={{fontSize:'11px',fontWeight:700,color:'#1A1A1A',fontFamily:'DM Sans,sans-serif'}}>Script</span>
                      </div>
                      <div style={{flex:1,padding:'6px 10px 8px',overflow:'hidden',display:'flex',flexDirection:'column',gap:'6px'}}>
                        {SCRIPT_SECTIONS.filter(function(s){ return ugcLineIdx >= s.showAt; }).map(function(sec,si){
                          return (
                            <div key={si} style={{animation:'ugcLineIn 0.4s ease-out forwards'}}>
                              <div style={{fontSize:'8.5px',fontWeight:700,color:'#999',fontFamily:'DM Sans,sans-serif',letterSpacing:'0.08em',marginBottom:'4px'}}>{sec.label}</div>
                              {sec.lines.map(function(parts,li){
                                return (
                                  <div key={li} style={{fontSize:'9.5px',color:'#1A1A1A',fontFamily:'DM Sans,sans-serif',lineHeight:1.5,marginBottom:'2px',animation:'textReveal 0.5s steps(18,end) '+(li*0.15)+'s both'}}>
                                    {parts.map(function(p,pi){
                                      return p.b
                                        ? <span key={pi} style={{fontWeight:700,color:'#CC785C',background:'rgba(204,120,92,0.1)',borderRadius:'2px',padding:'0 2px'}}>{p.t}</span>
                                        : <span key={pi}>{p.t}</span>;
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                        {ugcLineIdx >= 7 && (
                          <div style={{animation:'ugcLineIn 0.4s ease-out forwards'}}>
                            <div style={{height:'1px',background:'#F0F0F0',margin:'1px 0 5px'}}></div>
                            <div style={{display:'flex',gap:'5px'}}>
                              {['TikTok','Instagram Reels','YouTube Shorts'].map(function(p,i){
                                return <div key={i} style={{background:'#F0F0F0',color:'#1A1A1A',borderRadius:'999px',padding:'3px 9px',fontSize:'8.5px',fontWeight:500,fontFamily:'DM Sans,sans-serif'}}>{p}</div>;
                              })}
                            </div>
                          </div>
                        )}
                        {ugcLineIdx >= 8 && (
                          <div style={{animation:'citedPop 0.3s ease-out forwards',paddingTop:'2px'}}>
                            <div style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'#DCFCE7',color:'#166534',borderRadius:'999px',padding:'4px 10px',fontSize:'9px',fontWeight:700,fontFamily:'DM Sans,sans-serif'}}>✅ Approved &amp; Delivered</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })()}
            </div>
          ) : (
            <div style={{padding:'10px 12px'}}>
              {OUTPUTS[pillIdx] && OUTPUTS[pillIdx].slice(0, outLines).map(function(line, i){
                return <div key={i} style={{fontSize:'11.5px',fontFamily:'DM Sans,sans-serif',color:'#1A1A1A',lineHeight:1.7,fontWeight:i===0?600:400}}>{line}</div>;
              })}
              {phase === 2 && !isAd && !isLP && OUTPUTS[pillIdx] && outLines < OUTPUTS[pillIdx].length && (
                <span style={{display:'inline-block',width:'2px',height:'13px',background:'#1A1A1A',opacity:blink?1:0,verticalAlign:'middle',marginLeft:'2px'}}></span>
              )}
            </div>
          )}
        </div>
        <div style={{display:'flex',gap:'5px',marginTop:'9px',flexWrap:'wrap'}}>
          {PILLS.map(function(p, i){
            var active = i === pillIdx;
            return <div key={p} onClick={function(){ setCycle(i); setBriefLen(0); setOutLines(0); setAdStep(0); setHlLen(0); setLpStep(0); setLpHlLen(0); setLpSubLen(0); setAeoStep(0); setAeoLoaded(0); setSpStep(0); setSpCarouselIdx(0); setUgcLineIdx(0); setPhase(0); }} style={{fontSize:'10px',fontWeight:600,fontFamily:'DM Sans,sans-serif',padding:'3px 9px',borderRadius:'999px',background:active?'#1A1A1A':'#EBEBEB',color:active?'#fff':'#888',transition:'all 0.3s',cursor:'pointer'}}>{p}</div>;
          })}
        </div>
      </div>
    </div>
  );
}


function VideoGridVis({expanded, active}) {
  var vidContainerRef = React.useRef(null);
  React.useEffect(function(){
    if (!vidContainerRef.current) return;
    var vids = vidContainerRef.current.querySelectorAll('video');
    vids.forEach(function(v){ active === false ? v.pause() : v.play().catch(function(){}); });
  }, [active]);
  var VIDS = [
    '../../assets/180bd3d3-3ca9-4b63-bfa9-24d5afe16c67.mp4',
    '../../assets/06896a57-100b-4f6c-b1ad-91ebc1485e4c.mp4',
    '../../assets/25b45f96-2d91-466f-8ed8-ecfc3dc50b70.mp4',
    '../../assets/ad89a601-bdb8-42d1-aab9-662e904cd208.mp4',
    '../../assets/4ce95288-d551-489d-879c-f4ff4ad678e3.mp4',
    '../../assets/b3e830c6-9927-4c6d-8960-8753889adbc9.mp4',
  ];
  function Vid(props) {
    var ref = React.useRef(null);
    React.useEffect(function(){
      var el = ref.current; if(!el) return;
      el.muted = true; el.volume = 0; el.defaultMuted = true;
    }, []);
    return (
      <video
        ref={ref}
        src={props.src}
        autoPlay muted loop playsInline
        style={{width:'100%',borderRadius:'12px',display:'block',objectFit:'cover',aspectRatio:'16/9'}}
      />
    );
  }
  return (
    <div ref={vidContainerRef} style={{width:'100%',padding:'16px 12px 8px',boxSizing:'border-box',display:'flex',flexDirection:'column',justifyContent:'flex-start',height:'100%'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'30px 10px'}}>
        {VIDS.slice(0,2).map(function(src,i){ return <Vid key={i} src={src} />; })}
      </div>
      <div style={{
        overflow:'hidden',
        maxHeight: expanded ? '900px' : '0',
        marginTop: expanded ? '30px' : '0',
        transition:'max-height 0.4s ease, margin-top 0.4s ease',
      }}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'30px 10px'}}>
          {VIDS.slice(2).map(function(src,i){ return <Vid key={i} src={src} />; })}
        </div>
      </div>
    </div>
  );
}

// ── JARVIS agent constellation (Three.js, ES module via dynamic import) ──
var __dynImport = new Function('u', 'return import(u)');
var THREE_MODULE_URL = 'https://unpkg.com/three@0.160.0/build/three.module.js';

function RealisticAtom(){
  var hostRef = React.useRef(null);
  React.useEffect(function(){
    var host = hostRef.current; if(!host) return;
    var raf=null, renderer=null, ro=null, disposed=false, onActiveL=null, onInactiveL=null;

    async function loadDeps(){
      var THREE = await __dynImport(THREE_MODULE_URL);
      var res = await fetch('https://unpkg.com/three@0.160.0/examples/jsm/environments/RoomEnvironment.js');
      var txt = (await res.text()).replace(/from\s*['"]three['"]/g, "from '"+THREE_MODULE_URL+"'");
      var url = URL.createObjectURL(new Blob([txt],{type:'text/javascript'}));
      var Room = await __dynImport(url);
      return { THREE: THREE, RoomEnvironment: Room.RoomEnvironment };
    }
    loadDeps().then(function(mod){
      var THREE = mod.THREE, RoomEnvironment = mod.RoomEnvironment;
      if(disposed || !hostRef.current) return;
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
        if(!hostRef.current) return; var w=host.clientWidth, h=host.clientHeight; if(!w||!h) return;
        camera.aspect=w/h; camera.updateProjectionMatrix(); applyPan(); renderer.setSize(w,h);
      });
      ro.observe(host);
    }).catch(function(e){ console.error('RealisticAtom load failed', e); });

    return function(){
      disposed=true;
      if(raf) cancelAnimationFrame(raf);
      if(onActiveL) window.removeEventListener('carbonium-card03-active', onActiveL);
      if(onInactiveL) window.removeEventListener('carbonium-card03-inactive', onInactiveL);
      if(ro) ro.disconnect();
      if(renderer){ renderer.dispose(); var c=renderer.domElement; if(c&&c.parentNode) c.parentNode.removeChild(c); }
    };
  }, []);

  return React.createElement('div', { ref:hostRef, style:{position:'absolute',top:'-20px',left:0,width:'100%',height:'135%',zIndex:8,pointerEvents:'none'} });
}

function AgentOrbitalVis() {
  var ua1Ref=React.useRef(null), fa1Ref=React.useRef(null), h1Ref=React.useRef(null);
  var wrapRef=React.useRef(null);
  var hf1=[React.useRef(null),React.useRef(null),React.useRef(null),React.useRef(null),React.useRef(null)];
  var ua2Ref=React.useRef(null), fa2Ref=React.useRef(null), h2Ref=React.useRef(null);
  var hf2=[React.useRef(null),React.useRef(null),React.useRef(null),React.useRef(null),React.useRef(null)];
  var wordIdxRef=React.useRef(0);
  var headRef=React.useRef(null), exprRef=React.useRef('neutral');
  var [expr,setExpr]=React.useState('neutral');

  // ── "Life" reward cards hanging on the right wall (max 2), driven by task deliveries ──
  var SLOT=[{x:516,y:40,arm:82,drop:7,tilt:-3},{x:516,y:120,arm:82,drop:7,tilt:4}];   // hooks on the RIGHT WALL; long horizontal string so cards hang toward mid-card (near the figure)
  var [lifeCards,setLifeCards]=React.useState([{key:0,idx:0,slot:0,leaving:false}]);   // seed one visible card
  var lifeCardsRef=React.useRef(lifeCards);
  React.useEffect(function(){ lifeCardsRef.current=lifeCards; },[lifeCards]);
  var lifeCounterRef=React.useRef(1), lifeKeyRef=React.useRef(1);
  function spawnLife(slot){
    var idx=lifeCounterRef.current%10; lifeCounterRef.current++;
    var key=lifeKeyRef.current++;
    setLifeCards(function(prev){ return prev.concat([{key:key,idx:idx,slot:slot,leaving:false}]); });
  }
  function rewardLife(){
    var staying=lifeCardsRef.current.filter(function(c){ return !c.leaving; });
    if(staying.length>=2){
      var oldest=staying[0], freed=oldest.slot;                                   // oldest fades out first…
      setLifeCards(function(prev){ return prev.map(function(c){ return c.key===oldest.key?Object.assign({},c,{leaving:true}):c; }); });
      setTimeout(function(){ setLifeCards(function(prev){ return prev.filter(function(c){ return c.key!==oldest.key; }); }); },640);
      setTimeout(function(){ spawnLife(freed); },360);                            // …then the new one swings into its slot
    } else {
      var used=staying.map(function(c){ return c.slot; });
      spawnLife(used.indexOf(0)<0?0:1);
    }
  }
  var rewardRef=React.useRef(null); rewardRef.current=rewardLife;
  React.useEffect(function(){
    function on(){ if(rewardRef.current) rewardRef.current(); }
    window.addEventListener('carbonium-life-reward',on);
    var sid='__life-cards';
    if(!document.getElementById(sid)){
      var st=document.createElement('style'); st.id=sid;
      st.textContent='@keyframes lifeIn{0%{opacity:0;transform:rotate(-90deg)}14%{opacity:1}48%{transform:rotate(12deg)}70%{transform:rotate(-6deg)}86%{transform:rotate(3deg)}100%{transform:rotate(0)}}@keyframes lifeSway{0%,100%{transform:rotate(-2.3deg)}50%{transform:rotate(2.3deg)}}@keyframes lifeOut{0%{opacity:1;transform:rotate(0)}100%{opacity:0;transform:rotate(-34deg)}}';
      document.head.appendChild(st);
    }
    return function(){ window.removeEventListener('carbonium-life-reward',on); };
  },[]);
  React.useEffect(function(){
    var raf, start = performance.now(), T = 8500, figRunning=false;
    function ease(u){ return u<0.5 ? 2*u*u : 1-Math.pow(-2*u+2,2)/2; }
    function lerp(a,b,t){ return a+(b-a)*t; }
    function reachP(ph){
      if (ph<0.38) return 0.10+0.04*Math.sin(ph*12.566);
      if (ph<0.50){ var u=(ph-0.38)/0.12; return 0.10+ease(u)*0.90; }
      if (ph<0.57) return 1.0;
      if (ph<0.73){ var u=(ph-0.57)/0.16; return 1.0-ease(u)*0.90; }
      return 0.10+0.04*Math.sin(ph*12.566);
    }
    function headTilt(ph){
      if(ph<0.40) return lerp(-12,1,ease(ph/0.40));
      if(ph<0.57) return lerp(1,5,(ph-0.40)/0.17);
      if(ph<0.80) return lerp(5,11,ease((ph-0.57)/0.23));
      return lerp(11,0,ease((ph-0.80)/0.20));
    }
    function exprFor(ph,fc){
      if(ph<0.06) return 'neutral';
      if(ph<0.40) return 'surprised';
      if(ph<0.57) return 'struggling';
      if(ph<0.82){ var k=((fc%3)+3)%3; return k===0?'sad':k===1?'angry':'defeated'; }
      return 'neutral';
    }
    var P1={Er:[74,88],Wr:[88,80],Ee:[82,84],We:[106,70]};
    var P2={Er:[76,82],Wr:[90,72],Ee:[84,76],We:[108,60]};
    var TGT=[150,64];   // figure's hands point UP-RIGHT toward the hanging life cards (showing them off)
    var OA=[-42,-16,10,34], OL=[7.5,8.5,8,6.5], TOA=62, TOL=5;
    var CA=[16,6,-4,-15], CL=[3,3.2,3.2,3], TCA=40, TCL=3;
    function setArm(ua,fa,h,fg,P,p,open){
      var Ex=lerp(P.Er[0],P.Ee[0],p), Ey=lerp(P.Er[1],P.Ee[1],p);
      var Wx=lerp(P.Wr[0],P.We[0],p), Wy=lerp(P.Wr[1],P.We[1],p);
      if(ua.current){ ua.current.setAttribute('x2',Ex.toFixed(1)); ua.current.setAttribute('y2',Ey.toFixed(1)); }
      if(fa.current){ fa.current.setAttribute('x1',Ex.toFixed(1)); fa.current.setAttribute('y1',Ey.toFixed(1)); fa.current.setAttribute('x2',Wx.toFixed(1)); fa.current.setAttribute('y2',Wy.toFixed(1)); }
      var faAng=Math.atan2(Wy-Ey,Wx-Ex);
      var tgtAng=Math.atan2(TGT[1]-Wy,TGT[0]-Wx);
      var dA=tgtAng-faAng; while(dA>Math.PI)dA-=2*Math.PI; while(dA<-Math.PI)dA+=2*Math.PI;
      var handDeg=(faAng + dA*0.55*p)*180/Math.PI + 7*Math.sin(open*Math.PI);
      if(h.current){ h.current.setAttribute('transform','translate('+Wx.toFixed(1)+','+Wy.toFixed(1)+') rotate('+handDeg.toFixed(1)+')'); }
      for(var i=0;i<4;i++){
        var f=fg[i]; if(!f||!f.current) continue;
        var ang=(CA[i]+(OA[i]-CA[i])*open)*Math.PI/180;
        var len=CL[i]+(OL[i]-CL[i])*open;
        f.current.setAttribute('x2',(len*Math.cos(ang)).toFixed(1));
        f.current.setAttribute('y2',(len*Math.sin(ang)).toFixed(1));
      }
      var th=fg[4];
      if(th&&th.current){
        var ta=(TCA+(TOA-TCA)*open)*Math.PI/180;
        var tl=TCL+(TOL-TCL)*open;
        th.current.setAttribute('x2',(tl*Math.cos(ta)).toFixed(1));
        th.current.setAttribute('y2',(tl*Math.sin(ta)).toFixed(1));
      }
    }
    function frame(now){
      if(!figRunning) return;            // gated on Card 03 visibility
      var el=now-start;
      var ph=((el%T)+T)%T/T;
      var fullCyc=Math.floor(el/T);
      var p=reachP(ph);
      var open=Math.max(0,1-Math.abs(ph-0.53)/0.07);
      setArm(ua1Ref,fa1Ref,h1Ref,hf1,P1,p,open);
      setArm(ua2Ref,fa2Ref,h2Ref,hf2,P2,p,open);
      var tilt=headTilt(ph);
      if(headRef.current) headRef.current.setAttribute('transform','rotate('+tilt.toFixed(1)+' 54 84)');
      var e=exprFor(ph,fullCyc);
      if(e!==exprRef.current){ exprRef.current=e; setExpr(e); }
      raf=requestAnimationFrame(frame);
    }
    function applyInitialPose(){
      var p0=reachP(0), open0=Math.max(0,1-Math.abs(0-0.53)/0.07);
      setArm(ua1Ref,fa1Ref,h1Ref,hf1,P1,p0,open0);
      setArm(ua2Ref,fa2Ref,h2Ref,hf2,P2,p0,open0);
      if(headRef.current) headRef.current.setAttribute('transform','rotate('+headTilt(0).toFixed(1)+' 54 84)');
      var e0=exprFor(0,0); if(e0!==exprRef.current){ exprRef.current=e0; setExpr(e0); }
    }
    function startFig(){ if(figRunning) return; start=performance.now(); figRunning=true; raf=requestAnimationFrame(frame); }   // fresh cycle
    function stopFig(){ figRunning=false; if(raf) cancelAnimationFrame(raf); applyInitialPose(); }                          // reset to initial stressed pose
    var onA=function(){ startFig(); }, onI=function(){ stopFig(); };
    window.addEventListener('carbonium-card03-active', onA);
    window.addEventListener('carbonium-card03-inactive', onI);
    applyInitialPose();                                  // show the initial pose; stay paused until scrolled into view
    if(window.__card03Active) startFig();
    return function(){ if(raf) cancelAnimationFrame(raf); window.removeEventListener('carbonium-card03-active', onA); window.removeEventListener('carbonium-card03-inactive', onI); };
  }, []);

  // "YOU?" red arrows — cycle one at a time around the figure
  var [arrowIdx, setArrowIdx] = React.useState(0);
  var [arrowShown, setArrowShown] = React.useState(true);
  React.useEffect(function(){
    var t;
    if (arrowShown) {
      t = setTimeout(function(){ setArrowShown(false); }, 1900);
    } else {
      t = setTimeout(function(){
        setArrowIdx(function(i){ return (i + 1) % 4; });
        setArrowShown(true);
      }, 1500);
    }
    return function(){ clearTimeout(t); };
  }, [arrowShown, arrowIdx]);
  // Single fixed arrow straight above the figure's head — always visible,
  // never overlaps the "life" cards hanging on the right wall.
  var YOU_ARROW = {line:'M302,26 C299,35 300,44 302,52', head:'M302,52 L295,44 M302,52 L309,44', tx:302, ty:17, rot:-3};
  var YOU_ARROWS = [YOU_ARROW, YOU_ARROW, YOU_ARROW, YOU_ARROW];

  // Falling "life" words the figure can't reach
  var LIFE_WORDS = [
    {t:'Travel',  d:'travel',  tilt:-4},
    {t:'Sleep',   d:'sleep',   tilt:3},
    {t:'Health',  d:'health',  tilt:-3},
    {t:'Family',  d:'family',  tilt:5},
    {t:'Freedom', d:'freedom', tilt:-2},
    {t:'Hobbies', d:'hobbies', tilt:4},
    {t:'Skill',   d:'skill',   tilt:-3},
    {t:'Friends', d:'friends', tilt:3},
    {t:'Peace',   d:'peace',   tilt:-4},
    {t:'Food',    d:'food',    tilt:2},
  ];
  var DOODLES = {
    travel: (
      <g fill="#EAF1F6" stroke="#5B7081" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-16,9 L-8.5,18.5 L-13,19 Z"/>
        <path d="M-2,22.5 L-10,31 L1,22.5 Z"/>
        <path d="M15,20 C12,17 0,16.2 -11,17.4 C-15,17.9 -17,19 -17,20 C-17,21 -15,22.1 -11,22.6 C0,23.8 12,23 15,20 Z"/>
        <circle cx="-6" cy="20" r="0.9" fill="#5B7081" stroke="none"/>
        <circle cx="-1" cy="20" r="0.9" fill="#5B7081" stroke="none"/>
        <circle cx="4" cy="20" r="0.9" fill="#5B7081" stroke="none"/>
      </g>
    ),
    sleep: (
      <g fill="none" stroke="#5B7081" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-13,9 L-1,9 L-13,21 L-1,21"/>
        <path d="M-1,18 L7,18 L-1,26 L7,26"/>
        <path d="M7,25 L12,25 L7,30 L12,30"/>
      </g>
    ),
    health: (
      <path d="M0,33 C-13,22 -10,11 -2.5,13.6 C-0.8,14.1 0,15.6 0,16.6 C0,15.6 0.8,14.1 2.5,13.6 C10,11 13,22 0,33 Z" fill="#E8716F" stroke="#C0392B" strokeWidth="1"/>
    ),
    family: (
      <g stroke="#5B7081" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <circle cx="-6" cy="13" r="3.2" fill="#5B7081" stroke="none"/>
        <path d="M-6,16 L-6,26 M-6,19 L-10,23 M-6,19 L-2,23 M-6,26 L-9,33 M-6,26 L-3,33"/>
        <circle cx="6" cy="17" r="2.4" fill="#5B7081" stroke="none"/>
        <path d="M6,19 L6,28 M6,21 L3,24 M6,21 L9,24 M6,28 L4,33 M6,28 L8,33"/>
      </g>
    ),
    freedom: (
      <g fill="none" stroke="#5B7081" strokeWidth="1.5" strokeLinecap="round">
        <path d="M-14,24 Q-9,17 -4,24 Q1,17 6,24"/>
        <path d="M4,15 Q7,11 10,15 Q13,11 16,15"/>
      </g>
    ),
    hobbies: (
      <g fill="none" stroke="#5B7081" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="8" x2="-3" y2="22"/>
        <path d="M9,8 L13,11 L11,15 L7,12 Z" fill="#E0A93B" stroke="#C99A2E"/>
        <path d="M-3,22 C-7,26 -12,27 -13,32 C-8,31 -6,27 -3,22 Z" fill="#E8716F" stroke="#C0392B"/>
      </g>
    ),
    skill: (
      <g fill="none" stroke="#5B7081" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0,11 L-14,17 L0,23 L14,17 Z" fill="#EAF1F6"/>
        <path d="M14,17 L14,25"/>
        <circle cx="14" cy="26" r="1.3" fill="#5B7081" stroke="none"/>
        <path d="M-7,20 L-7,27 C-7,30 7,30 7,27 L7,20"/>
      </g>
    ),
    friends: (
      <g stroke="#5B7081" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <circle cx="-6" cy="14" r="3.2" fill="#5B7081" stroke="none"/>
        <path d="M-6,17 L-6,27 M-6,20 L-10,24 M-6,20 L-2,24 M-6,27 L-9,33 M-6,27 L-3,33"/>
        <circle cx="6" cy="14" r="3.2" fill="#E0A93B" stroke="none"/>
        <path d="M6,17 L6,27 M6,20 L2,24 M6,20 L10,24 M6,27 L3,33 M6,27 L9,33" stroke="#C99A2E"/>
      </g>
    ),
    peace: (
      <g fill="none" stroke="#5B7081" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0,32 C-7,26 -10,19 0,12 C10,19 7,26 0,32 Z" fill="#EAF1F6"/>
        <path d="M0,32 C-3,27 -11,25 -14,27 C-9,29 -5,30 0,32 Z" fill="#DCE7EF"/>
        <path d="M0,32 C3,27 11,25 14,27 C9,29 5,30 0,32 Z" fill="#DCE7EF"/>
        <path d="M0,32 L0,22"/>
      </g>
    ),
    food: (
      <g fill="none" stroke="#5B7081" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-6,18 C-9,14.5 -3,12.5 -6,9"/>
        <path d="M0,18 C-3,14.5 3,12.5 0,9"/>
        <path d="M6,18 C3,14.5 9,12.5 6,9"/>
        <path d="M-13,21 C-11,31 11,31 13,21 Z" fill="#EAF1F6"/>
        <ellipse cx="0" cy="21" rx="13" ry="3" fill="#fff"/>
      </g>
    ),
  };
  var FACES = {
    neutral: (
      <g>
        <circle cx="56" cy="66" r="2" fill="#222"/>
        <circle cx="62" cy="66" r="2" fill="#222"/>
        <path d="M52,60 L59,61" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M61,61 L67,60" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M55,77 Q59,78.5 63,77" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    ),
    surprised: (
      <g>
        <circle cx="56" cy="65" r="2.9" fill="#fff" stroke="#222" strokeWidth="1.4"/>
        <circle cx="56" cy="65" r="1.1" fill="#222"/>
        <circle cx="63" cy="65" r="2.9" fill="#fff" stroke="#222" strokeWidth="1.4"/>
        <circle cx="63" cy="65" r="1.1" fill="#222"/>
        <path d="M52,57 Q56,54 59,57" fill="none" stroke="#222" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M60,57 Q63,54 67,57" fill="none" stroke="#222" strokeWidth="1.3" strokeLinecap="round"/>
        <ellipse cx="60" cy="78" rx="2.6" ry="3.3" fill="#fff" stroke="#222" strokeWidth="1.6"/>
      </g>
    ),
    struggling: (
      <g>
        <path d="M53,66 l4.5,0" stroke="#222" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M60,66 l4.5,0" stroke="#222" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M52,61 L58,63.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M67,61 L60,63.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M53,78 l2.2,-2.2 l2.2,2.2 l2.2,-2.2 l2.2,2.2" fill="none" stroke="#222" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <ellipse cx="42" cy="64" rx="1.7" ry="2.7" fill="#93C5FD" transform="rotate(-16 42 64)"/>
      </g>
    ),
    sad: (
      <g>
        <path d="M53,67 Q56,69.5 59,67" fill="none" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M60,67 Q63,69.5 66,67" fill="none" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M52,62 Q55,59.5 58,61" fill="none" stroke="#222" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M60,61 Q63,59.5 66,62" fill="none" stroke="#222" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M54,80 Q59,76.5 64,80" fill="none" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
        <ellipse cx="65" cy="73" rx="1.7" ry="2.7" fill="#93C5FD"/>
      </g>
    ),
    angry: (
      <g>
        <circle cx="56" cy="67" r="1.9" fill="#222"/>
        <circle cx="63" cy="67" r="1.9" fill="#222"/>
        <path d="M51,62 L58,65" stroke="#222" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M68,62 L61,65" stroke="#222" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M54,80 Q59,77.5 64,80" fill="none" stroke="#C0392B" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M45,47 q-2.5,-3 0,-5.5" fill="none" stroke="#C0392B" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
        <path d="M50,45 q2.5,-3 0,-5.5" fill="none" stroke="#C0392B" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
      </g>
    ),
    defeated: (
      <g>
        <path d="M53,66 l4.5,0" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M60,66 l4.5,0" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M52,59.5 l5,1.2" stroke="#222" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        <path d="M61,60.7 l5,-1.2" stroke="#222" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        <path d="M54,78 l10,0" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    ),
  };


  // ── Scroll trigger: start the whole Card 03 loop only when ~30% in view; reset + pause when it leaves ──
  React.useEffect(function(){
    var el=wrapRef.current;
    if(!el || typeof IntersectionObserver==='undefined'){ window.__card03Active=true; window.dispatchEvent(new CustomEvent('carbonium-card03-active')); return; }
    window.__card03Active=false;
    var on=false;
    var io=new IntersectionObserver(function(entries){
      var e=entries[0]; if(!e) return;
      var vis=e.isIntersecting && e.intersectionRatio>=0.3;
      if(vis && !on){
        on=true; window.__card03Active=true;
        window.dispatchEvent(new CustomEvent('carbonium-card03-active'));
      } else if(!vis && on){
        on=false; window.__card03Active=false;
        lifeCounterRef.current=1; lifeKeyRef.current=1;
        setLifeCards([{key:0,idx:0,slot:0,leaving:false}]);   // reset life cards to one seeded card
        window.dispatchEvent(new CustomEvent('carbonium-card03-inactive'));
      }
    },{ threshold:[0,0.3,0.6] });
    io.observe(el);
    return function(){ io.disconnect(); };
  },[]);

  return (
    <div ref={wrapRef} style={{display:'flex',width:'100%',minHeight:'320px',position:'relative'}}>

      {/* LEFT — figure with 5 task cards fallen on the ground behind */}
      <div style={{flex:1,position:'relative',overflow:'visible',display:'flex',alignItems:'flex-end',justifyContent:'flex-start',padding:'12px 12px 0 0'}}>
        <svg viewBox="28 0 500 220" width="100%" height="100%" style={{overflow:'visible',maxHeight:'230px',marginBottom:'-18px'}}>

          <defs>
            <filter id="taskShadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodOpacity="0.13"/>
            </filter>
          </defs>

          {/* Ground shadow beneath the fallen pile */}
          <ellipse cx="152" cy="200" rx="120" ry="9" fill="rgba(0,0,0,0.07)"/>

          {/* ── Bound task bundle (vibrating) ── */}
          <g className="bundleShake">
          {/* ── Top row (behind + above) ── */}
          <g transform="translate(58,124) rotate(6) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><path d="M5,2 L19,2 L19,22 L16,20 L13,22 L10,20 L7,22 L5,20 Z" fill="none" stroke="#222" strokeWidth="2" strokeLinejoin="round"/><line x1="9" y1="8" x2="15" y2="8" stroke="#222" strokeWidth="2" strokeLinecap="round"/><line x1="9" y1="12" x2="15" y2="12" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Invoices</text>
          </g>
          <g transform="translate(102,120) rotate(-7) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><circle cx="12" cy="12" r="10" fill="none" stroke="#222" strokeWidth="2"/><text x="12" y="16.5" textAnchor="middle" fontSize="13" fontWeight="800" fill="#222" fontFamily="DM Sans,sans-serif">$</text>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Payroll</text>
          </g>
          <g transform="translate(154,126) rotate(8) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><line x1="3" y1="21" x2="21" y2="21" stroke="#222" strokeWidth="2" strokeLinecap="round"/><rect x="5" y="12" width="3.6" height="9" fill="none" stroke="#222" strokeWidth="2"/><rect x="10.4" y="6.5" width="3.6" height="14.5" fill="none" stroke="#222" strokeWidth="2"/><rect x="15.8" y="14" width="3.6" height="7" fill="none" stroke="#222" strokeWidth="2"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Reports</text>
          </g>
          <g transform="translate(198,119) rotate(-6) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><circle cx="9" cy="8.5" r="4" fill="none" stroke="#222" strokeWidth="2"/><path d="M2,21 C2,15 5.5,13 9,13 C11,13 13,13.7 14.5,15.2" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round"/><line x1="18.5" y1="12.5" x2="18.5" y2="21" stroke="#222" strokeWidth="2" strokeLinecap="round"/><line x1="14.5" y1="16.7" x2="22.5" y2="16.7" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Hiring</text>
          </g>
          <g transform="translate(250,124) rotate(5) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><rect x="4" y="2" width="16" height="20" rx="2.5" fill="none" stroke="#222" strokeWidth="2"/><rect x="7" y="5" width="10" height="4" rx="1" fill="none" stroke="#222" strokeWidth="1.6"/><circle cx="8" cy="13.5" r="1" fill="#222"/><circle cx="12" cy="13.5" r="1" fill="#222"/><circle cx="16" cy="13.5" r="1" fill="#222"/><circle cx="8" cy="18" r="1" fill="#222"/><circle cx="12" cy="18" r="1" fill="#222"/><circle cx="16" cy="18" r="1" fill="#222"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Budgeting</text>
          </g>

          {/* ── Bottom row (in front, on ground) ── */}
          <g transform="translate(56,170) rotate(-8) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><rect x="2" y="5" width="20" height="14" rx="2.5" fill="none" stroke="#222" strokeWidth="2"/><path d="M3.5,7.5 L12,13 L20.5,7.5" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Emails</text>
          </g>
          <g transform="translate(104,166) rotate(5) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><path d="M3,3 C3,2 4,1.5 5.5,2 L8,3.5 C9,4 9,5 8.5,6 L7.5,7 C9,10.5 13.5,15 17,16.5 L18,15.5 C19,15 20,15 20.5,16 L22,18.5 C22.5,20 22,21 21,21 C11,21 3,13 3,3 Z" fill="none" stroke="#222" strokeWidth="2" strokeLinejoin="round"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Phone Calls</text>
          </g>
          <g transform="translate(152,172) rotate(-5) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><circle cx="8" cy="8" r="3.5" fill="none" stroke="#222" strokeWidth="2"/><circle cx="16" cy="8" r="3.5" fill="none" stroke="#222" strokeWidth="2"/><path d="M2,20 C2,15.5 5,13.5 8,13.5 C11,13.5 14,15.5 14,20" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round"/><path d="M10,20 C10,15.5 13,13.5 16,13.5 C19,13.5 22,15.5 22,20" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Meetings</text>
          </g>
          <g transform="translate(200,165) rotate(7) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><circle cx="12" cy="12" r="10" fill="none" stroke="#222" strokeWidth="2"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#222" strokeWidth="2"/><circle cx="12" cy="12" r="1.9" fill="#222"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Targets</text>
          </g>
          <g transform="translate(248,170) rotate(-4) scale(0.9)">
            <rect x="-28" y="-25" width="56" height="50" rx="9" fill="#fff" stroke="#D8D8D8" strokeWidth="1.5" filter="url(#taskShadow)"/>
            <g transform="translate(-12.5,-21) scale(1.05)"><path d="M2.5,4 L21.5,4 L14,13 L14,20 L10,18 L10,13 Z" fill="none" stroke="#222" strokeWidth="2" strokeLinejoin="round"/>
            </g>
            <text x="0" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="DM Sans,sans-serif" fill="#444">Leads</text>
          </g>

            {/* Binding loop around the 2x5 bundle */}
            {/* Open-basket rope: left, bottom, right + both top corners with short
                stubs; the middle of the top edge is open (tasks accessible from above). */}
            <path d="M42,92 Q26,92 26,108 L26,184 Q26,200 42,200 L266,200 Q282,200 282,184 L282,108 Q282,92 266,92" fill="none" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M42,92 Q26,92 26,108 L26,184 Q26,200 42,200 L266,200 Q282,200 282,184 L282,108 Q282,92 266,92" fill="none" stroke="#999" strokeWidth="1" strokeDasharray="4 5" opacity="0.5" strokeLinecap="round"/>
            <circle cx="282" cy="146" r="3.4" fill="#1A1A1A"/>
          </g>

          {/* ── Figure (lunge + strain shake) ── */}
          <g className="figureLunge">
          <g className="figureStrain">
          {/* ── Stick figure (shifted right to open a tether corridor on its left) ── */}
          <g transform="translate(290,5)">
            <ellipse cx="68" cy="190" rx="26" ry="5" fill="rgba(0,0,0,0.08)"/>
            <line x1="58" y1="146" x2="50" y2="168" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
            <line x1="50" y1="168" x2="46" y2="186" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
            <ellipse cx="42" cy="188" rx="6.5" ry="3" fill="none" stroke="#222" strokeWidth="2" transform="rotate(-14 42 188)"/>
            <line x1="74" y1="142" x2="88" y2="164" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
            <line x1="88" y1="164" x2="96" y2="184" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
            <ellipse cx="103" cy="186" rx="6.5" ry="3" fill="none" stroke="#222" strokeWidth="2" transform="rotate(14 103 186)"/>
            <path d="M48,90 L60,88 L77,142 L52,146 Z" fill="#fff" stroke="#222" strokeWidth="2.5" strokeLinejoin="round"/>
            {/* Articulated reaching arms (JS-driven elbow + hand) */}
            <g>
              <line ref={ua2Ref} x1="58" y1="94" x2="84" y2="76" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
              <line ref={fa2Ref} x1="84" y1="76" x2="108" y2="60" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
              <g ref={h2Ref} transform="translate(108,60)">
                <line ref={hf2[0]} x1="0" y1="0" x2="7" y2="-4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf2[1]} x1="0" y1="0" x2="8.4" y2="-1.4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf2[2]} x1="0" y1="0" x2="8" y2="1.4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf2[3]} x1="0" y1="0" x2="6.5" y2="4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf2[4]} x1="0" y1="0" x2="3.5" y2="4.5" stroke="#222" strokeWidth="1.8" strokeLinecap="round"/>
              </g>
            </g>
            <g>
              <line ref={ua1Ref} x1="56" y1="98" x2="82" y2="84" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
              <line ref={fa1Ref} x1="82" y1="84" x2="106" y2="70" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
              <g ref={h1Ref} transform="translate(106,70)">
                <line ref={hf1[0]} x1="0" y1="0" x2="7" y2="-4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf1[1]} x1="0" y1="0" x2="8.4" y2="-1.4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf1[2]} x1="0" y1="0" x2="8" y2="1.4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf1[3]} x1="0" y1="0" x2="6.5" y2="4" stroke="#222" strokeWidth="1.6" strokeLinecap="round"/>
                <line ref={hf1[4]} x1="0" y1="0" x2="3.5" y2="4.5" stroke="#222" strokeWidth="1.8" strokeLinecap="round"/>
              </g>
            </g>
            <line x1="54" y1="84" x2="56" y2="91" stroke="#222" strokeWidth="2.4" strokeLinecap="round"/>
            <g ref={headRef}>
              <ellipse cx="52" cy="68" rx="15" ry="16.5" fill="#fff" stroke="#222" strokeWidth="2.5"/>
              {FACES[expr]}
            </g>
          </g>
            <path d="M282,146 C302,138 321,131 340,124" fill="none" stroke="#1A1A1A" strokeWidth="2"/>
            <path d="M282,146 C302,138 321,131 340,124" fill="none" stroke="#999" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.5"/>
            <path d="M340,119 C346,122 354,122 360,118" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
            <path d="M340,124 C346,127 354,127 360,123" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
            <path d="M340,129 C346,132 354,132 360,128" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
          </g>
          </g>

          {/* ── "YOU?" red doodle arrow (one at a time) ── */}
          <g transform="translate(40,0)"><g style={{opacity: arrowShown ? 1 : 0, transition:'opacity 0.4s ease'}}>
            <path d={YOU_ARROWS[arrowIdx].line} fill="none" stroke="#E5342A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d={YOU_ARROWS[arrowIdx].head} fill="none" stroke="#E5342A" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round"/>
            <text x={YOU_ARROWS[arrowIdx].tx} y={YOU_ARROWS[arrowIdx].ty} textAnchor="middle" transform={'rotate('+YOU_ARROWS[arrowIdx].rot+' '+YOU_ARROWS[arrowIdx].tx+' '+YOU_ARROWS[arrowIdx].ty+')'} fontSize="19" fontWeight="800" fontStyle="italic" fontFamily="'Comic Sans MS','Bradley Hand',cursive" fill="#E5342A">YOU?</text>
          </g></g>

          {/* ── "Life" reward cards: luggage-tags on hooks along the RIGHT WALL (max 2, stacked) ── */}
          <line x1="518" y1="20" x2="518" y2="205" stroke="#D9D2C2" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
          {lifeCards.map(function(c){
            var s=SLOT[c.slot], w=LIFE_WORDS[c.idx];
            return (
              <g key={c.key} transform={'translate('+s.x+','+s.y+')'}>
                {/* nail on the wall + short horizontal string reaching LEFT to the hang point */}
                <line x1="0" y1="0" x2={-s.arm} y2="0" stroke="#C9A23A" strokeWidth="1.3" strokeLinecap="round"/>
                <circle cx="0" cy="0" r="2.4" fill="#9A7B2E"/>
                <g transform={'translate('+(-s.arm)+',0)'}>
                  <g style={{transformBox:'fill-box',transformOrigin:'top center',animation:c.leaving?'lifeOut 0.6s ease-in forwards':'lifeIn 1.5s cubic-bezier(.2,.72,.32,1) both'}}>
                    <g style={{transformBox:'fill-box',transformOrigin:'top center',animation:'lifeSway 4.4s ease-in-out infinite',animationDelay:(-(c.key%5)*0.8)+'s'}}>
                      <line x1="0" y1="0" x2="0" y2={s.drop} stroke="#C9A23A" strokeWidth="1.3"/>
                      <g transform={'translate(0,'+s.drop+')'}>
                        <g transform={'rotate('+s.tilt+' 0 0)'}>
                          <rect x="-24" y="0" width="48" height="60" rx="2" fill="#fff" stroke="#E2E2E2" strokeWidth="1" filter="url(#taskShadow)"/>
                          <rect x="-20" y="4" width="40" height="38" fill="#FBF4E6"/>
                          {DOODLES[w.d]}
                          <text x="0" y="53" textAnchor="middle" fontSize="10" fontWeight="700" fontStyle="italic" fontFamily="'Comic Sans MS','Bradley Hand',cursive" fill="#444">{w.t}</text>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* spacer (vertical divider line removed) */}
      <div style={{width:'18px',flexShrink:0}}></div>

      {/* RIGHT — empty spacer; keeps the 50/50 split. The 3D canvas spans BOTH panels as an overlay below. */}
      <div style={{flex:1,position:'relative',minHeight:'320px'}}></div>

      {/* Full-width 3D canvas spanning BOTH panels — fully transparent + pointer-events:none over the left art (shows through, stays clickable); orb stays over the right panel */}
      <RealisticAtom />
    </div>
  );
}




// ─── Content Cannon visual (Card 04) — ported from "Card 04 Options.html" ───
var CC_CSS = ".v2{position:relative;height:100%;background:radial-gradient(95% 130% at 26% 50%,#FFFFFF 0%,#EFEFF2 100%);padding:14px 16px;display:flex;align-items:stretch;gap:10px;}\n  .v2-left{flex:1;display:flex;min-width:0;}\n  .v2-mid{flex:0 0 auto;position:relative;display:flex;align-items:center;justify-content:center;width:56px;}\n  .v2-right{flex:1;display:flex;align-items:center;justify-content:center;min-width:0;}\n  .v2-col-h{font-size:8px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9A9A9A;text-align:center;margin-bottom:7px;}\n  .v2-draft{width:100%;height:100%;background:#fff;border:1px solid #E8E8E8;border-radius:12px;padding:11px;box-shadow:0 4px 14px rgba(0,0,0,0.07);display:flex;flex-direction:column;}\n  .v2-pills{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;}\n  .v2-pill{font-size:7.5px;font-weight:700;letter-spacing:0.02em;padding:3px 7px;border-radius:999px;border:1px solid #E4E4E8;color:#9A9AA2;background:#fff;white-space:nowrap;}\n  .v2-pill.active{background:var(--c);border-color:var(--c);color:#fff;}\n  .v2-draft .hd{display:flex;align-items:center;gap:6px;margin-bottom:7px;}\n  .v2-draft .av{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#CFCFD6,#A9A9B2);flex-shrink:0;}\n  .v2-draft .ln{height:4px;border-radius:3px;background:#E4E4E8;}\n  .v2-draft .img{flex:1;min-height:0;border-radius:8px;overflow:hidden;background:#EAEAEE;margin:0 0 8px;transition:opacity .3s ease;}\n  .v2-photo{width:100%;height:100%;object-fit:cover;display:block;}\n  .v2-tag{display:inline-block;font-size:7.5px;font-weight:700;letter-spacing:0.06em;color:#888;background:#F0F0F2;border-radius:5px;padding:3px 7px;}\n  .v2-flow{display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;width:30px;}\n  /* Carbonium 3D core — dark stone sphere + arc-reactor blue \"C\" (from Card 03 AgentOrbitalVis) */\n  .v2-core{width:52px;height:52px;border-radius:50%;flex-shrink:0;position:relative;background:radial-gradient(circle at 38% 30%,#5c5e67 0%,#45454b 30%,#303035 62%,#202024 88%,#161619 100%);box-shadow:0 0 0 4px rgba(60,160,255,0.10),0 0 18px 4px rgba(60,160,255,0.45),0 0 34px 10px rgba(47,155,255,0.28),inset 0 2px 5px rgba(255,255,255,0.18),inset 0 -5px 9px rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;}\n  .v2-core::before{content:\"\";position:absolute;inset:-1px;border-radius:50%;background:radial-gradient(circle at 50% 48%,rgba(190,238,255,0.55) 0%,rgba(110,198,255,0.32) 34%,rgba(47,155,255,0) 66%);z-index:1;pointer-events:none;}\n  .v2-core .cmark{position:relative;z-index:2;font-family:'Satoshi','DM Sans',sans-serif;font-weight:700;font-size:33px;line-height:1;letter-spacing:0.01em;background:radial-gradient(circle at 50% 46%,#ffffff 0%,#dff2ff 45%,#7cd0ff 80%,#4db8ff 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;-webkit-text-stroke:0.6px rgba(255,255,255,0.5);filter:drop-shadow(0 0 3px rgba(90,190,255,0.85)) drop-shadow(0 0 8px rgba(70,160,255,0.6));}\n  .v2-chev{color:#C6C6CC;font-size:15px;line-height:1;}\n  .v2-out{flex:1;display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr;gap:6px;align-content:center;}\n  .v2-card{background:#fff;border:1px solid #EAEAEC;border-radius:8px;padding:6px;box-shadow:0 2px 7px rgba(0,0,0,0.05);display:flex;flex-direction:column;gap:5px;}\n  .v2-card .badge{width:16px;height:16px;border-radius:5px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;}\n  .v2-card .badge .ic{width:9px;height:9px;}\n  .v2-shape{border-radius:4px;background:linear-gradient(135deg,#EFEFF3,#E2E2E8);}\n  .v2-sq{aspect-ratio:1/1;}\n  .v2-tall{height:46px;}\n  .v2-wide{height:20px;}\n  .v2-169{aspect-ratio:16/9;}\n  .v2-lines{display:flex;flex-direction:column;gap:3px;padding:2px 0;}\n  .v2-lines i{height:3px;border-radius:2px;background:#E2E2E8;display:block;}\n  .v2-fmt{font-size:6.5px;font-weight:600;color:#A0A0A8;letter-spacing:0.03em;}\n  /* draft = mini composer (lifestyle photo) */\n  .v2-d-prompt{font-size:13px;line-height:1.5;color:#33333A;background:#FAFAFA;border:1px solid #ECECEF;border-radius:7px;padding:6px 7px;min-height:30px;margin-bottom:8px;}\n  .v2-d-caret{display:inline-block;width:1.2px;height:9px;background:#00C2F0;margin-left:1px;vertical-align:-1px;animation:dcBlink 1s step-end infinite;}\n  .v2-d-btn{width:100%;border:none;border-radius:9px;background:#1A1A1A;color:#fff;font-size:12px;font-weight:700;padding:11px;font-family:'DM Sans',sans-serif;letter-spacing:0.03em;cursor:pointer;}\n  /* output = platform-native crops of the same image */\n  .v2-pic{align-self:center;border-radius:4px;overflow:hidden;background:#EDEDF0;box-shadow:0 1px 3px rgba(0,0,0,0.08);}\n  .v2-f-ig{width:50px;height:50px;}\n  .v2-f-tt{width:29px;height:50px;}\n  .v2-f-li{width:66px;height:35px;}\n  .v2-f-x{width:66px;height:37px;}\n  .v2-f-yt{width:66px;height:37px;}\n  .v2-f-fb{width:66px;height:35px;}\n  /* the product image physically detaches from the draft, flies to the orb and is absorbed (JS-driven) */\n  .v2-flyer{position:absolute;border-radius:8px;background-size:cover;background-position:center;box-shadow:0 8px 22px rgba(0,0,0,.22);z-index:6;pointer-events:none;will-change:transform,opacity,filter;}\n  @keyframes dcBlink{0%,50%{opacity:1}50.01%,100%{opacity:0}}\n  /* iPhone 15 Pro output mockup */\n  .iphone{position:relative;height:335px;width:155px;border-radius:30px;background:linear-gradient(150deg,#eaeaed 0%,#b4b2b6 45%,#d9d7db 62%,#9d9b9f 100%);box-shadow:0 16px 36px rgba(0,0,0,0.34),0 3px 8px rgba(0,0,0,0.25);flex-shrink:0;}\n  .iphone::before{content:\"\";position:absolute;inset:2.5px;border-radius:27.5px;background:#070709;}\n  .iphone-screen{position:absolute;inset:5px;border-radius:24px;overflow:hidden;background:#fff;z-index:1;display:flex;flex-direction:column;}\n  .iphone-island{position:absolute;top:9px;left:50%;transform:translateX(-50%);width:38px;height:11px;background:#000;border-radius:999px;z-index:3;}\n  .ip-top{display:flex;align-items:center;gap:5px;padding:17px 8px 5px;}\n  .ip-top .av{width:16px;height:16px;border-radius:50%;background:linear-gradient(135deg,#E1306C,#F77737);flex-shrink:0;}\n  .ip-top .nm{font-size:7px;font-weight:700;color:#1A1A1A;flex:1;}\n  .ip-top .more{font-size:10px;color:#bbb;line-height:0;}\n  .ip-photo{width:100%;aspect-ratio:1/1;background:#EEE;overflow:hidden;flex-shrink:0;}\n  .ip-photo img{width:100%;height:100%;object-fit:cover;display:block;}\n  .ip-actions{display:flex;align-items:center;gap:7px;padding:6px 8px 2px;}\n  .ip-actions svg{width:13px;height:13px;display:block;}\n  .ip-likes{padding:2px 8px 0;font-size:6.5px;font-weight:700;color:#1A1A1A;}\n  .ip-cap{padding:2px 8px 8px;font-size:7px;line-height:1.45;color:#222;}\n  .ip-cap b{font-weight:700;}\n  /* ── per-platform iPhone output (swapped each cycle) ── */\n  .ipx{display:flex;flex-direction:column;height:100%;font-family:'DM Sans',sans-serif;background:#fff;color:#1A1A1A;}\n  .ipx-hd{display:flex;align-items:center;gap:6px;padding:16px 8px 5px;}\n  .ipx-av{width:17px;height:17px;border-radius:50%;background:linear-gradient(135deg,#CFCFD6,#A9A9B2);flex-shrink:0;}\n  .ipx-av-sq{width:17px;height:17px;border-radius:5px;flex-shrink:0;}\n  .ipx-name{font-size:7.5px;font-weight:700;color:#1A1A1A;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n  .ipx-sub{font-size:6px;font-weight:600;color:#8A8A92;line-height:1.25;}\n  .ipx-media{width:100%;background:#EAEAEE;overflow:hidden;flex-shrink:0;}\n  .ipx-media img{width:100%;height:100%;object-fit:cover;display:block;}\n  .ipx-actions{display:flex;align-items:center;gap:9px;padding:6px 8px 2px;}\n  .ipx-likes{padding:1px 8px 0;font-size:6.5px;font-weight:700;}\n  .ipx-cap{padding:3px 8px;font-size:7px;line-height:1.45;color:#222;}\n  .ipx-cap b{font-weight:700;}\n  .ipx-bar{display:flex;align-items:center;justify-content:space-around;border-top:1px solid #EAEAEC;margin-top:4px;padding:6px 4px;font-size:6.5px;font-weight:600;color:#65676B;}\n  .ipx-bar span{display:flex;align-items:center;gap:3px;}\n  /* X (Twitter) dark app */\n  .xp{display:flex;flex-direction:column;height:100%;background:#000;color:#E7E9EA;font-family:'DM Sans',sans-serif;overflow:hidden;}\n  .xp-top{display:flex;align-items:center;justify-content:center;padding:16px 0 7px;border-bottom:1px solid #16181C;flex-shrink:0;}\n  .xp-scroll{flex:1;min-height:0;overflow:hidden;}\n  .xp-post{padding:8px 9px;border-bottom:1px solid #16181C;}\n  .xp-hd{display:flex;align-items:center;gap:6px;}\n  .xp-av{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#1D9BF0,#0F6FC0);flex-shrink:0;}\n  .xp-id{flex:1;min-width:0;display:flex;align-items:center;gap:3px;font-size:7.5px;line-height:1.1;}\n  .xp-name{font-weight:800;color:#E7E9EA;white-space:nowrap;}\n  .xp-handle{color:#71767B;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n  .xp-more{color:#71767B;font-size:11px;line-height:0.4;letter-spacing:0.5px;margin-left:auto;flex-shrink:0;}\n  .xp-text{padding:5px 0 7px;font-size:8.5px;line-height:1.4;color:#E7E9EA;}\n  .xp-media{border-radius:14px;overflow:hidden;border:1px solid #2F3336;aspect-ratio:1.5/1;background:#16181C;}\n  .xp-media img{width:100%;height:100%;object-fit:cover;display:block;}\n  .xp-acts{display:flex;align-items:center;justify-content:space-between;margin:0 -6px;padding:9px 0 2px;color:#71767B;font-size:6px;font-weight:500;}\n  .xp-acts span{display:flex;align-items:center;gap:3px;}\n  .xp-post2{opacity:.92;}\n  /* LinkedIn post */\n  .li{display:flex;flex-direction:column;height:100%;background:#F3F2EF;color:rgba(0,0,0,.9);font-family:'DM Sans',sans-serif;overflow:hidden;}\n  .li-card{background:#fff;display:flex;flex-direction:column;flex:1;min-height:0;}\n  .li-hd{display:flex;align-items:flex-start;gap:6px;padding:9px 9px 6px;}\n  .li-av{width:22px;height:22px;border-radius:5px;background:linear-gradient(135deg,#0A66C2,#378FE9);flex-shrink:0;}\n  .li-id{flex:1;min-width:0;}\n  .li-name{font-size:8px;font-weight:700;color:rgba(0,0,0,.9);line-height:1.15;}\n  .li-sub{font-size:6px;color:rgba(0,0,0,.6);margin-top:1px;}\n  .li-time{font-size:6px;color:rgba(0,0,0,.6);display:flex;align-items:center;gap:3px;margin-top:1px;}\n  .li-more{margin-left:auto;color:rgba(0,0,0,.6);font-size:11px;line-height:0.4;letter-spacing:0.5px;flex-shrink:0;}\n  .li-text{padding:0 9px 7px;font-size:7.5px;line-height:1.45;color:rgba(0,0,0,.9);}\n  .li-media{width:100%;flex:1;min-height:0;background:#EEE;overflow:hidden;}\n  .li-media img{width:100%;height:100%;object-fit:cover;display:block;}\n  .li-react{display:flex;align-items:center;padding:6px 9px;font-size:6.5px;color:rgba(0,0,0,.6);border-bottom:1px solid #E8E8E8;}\n  .li-emo{display:flex;align-items:center;gap:3px;}\n  .li-emo .dots{display:flex;align-items:center;}\n  .li-emo .dots span{width:10px;height:10px;border-radius:50%;border:1.2px solid #fff;display:inline-block;}\n  .li-emo .dots span+span{margin-left:-3px;}\n  .li-meta{margin-left:auto;}\n  .li-acts{display:flex;align-items:center;justify-content:space-around;padding:6px 2px;font-size:7px;font-weight:600;color:rgba(0,0,0,.6);}\n  .li-acts span{display:flex;align-items:center;gap:3px;}\n  .li-feed{display:none;}\n  .li-nav{flex-shrink:0;display:flex;align-items:center;justify-content:space-around;background:#fff;border-top:1px solid #E0E0E0;padding:5px 4px 7px;}\n  .li-nav .nv{display:flex;flex-direction:column;align-items:center;gap:2px;font-size:5px;font-weight:600;color:rgba(0,0,0,.55);}\n  .li-nav .nv.active{color:rgba(0,0,0,.9);}\n  /* platform gallery */\n  .pv-sec{width:auto;max-width:100%;}\n  .pv-head{text-align:center;margin-bottom:32px;}\n  .pv-title{font-family:'Satoshi','DM Sans',sans-serif;font-size:24px;font-weight:800;letter-spacing:-0.02em;color:#1A1A1A;margin:0 0 8px;}\n  .pv-sub{font-size:15px;color:#777;margin:0;}\n  .pv-row{display:flex;gap:18px;width:max-content;max-width:100%;margin:0 auto;overflow-x:auto;padding-bottom:10px;}\n  .pv-item{flex:none;display:flex;flex-direction:column;align-items:center;gap:16px;}\n  .pv-label{font-size:14px;font-weight:700;color:#333;letter-spacing:-0.01em;}\n  .ipx-tt-rail{position:absolute;right:5px;bottom:38px;display:flex;flex-direction:column;align-items:center;gap:2px;color:#fff;font-size:6px;font-weight:700;text-shadow:0 1px 2px rgba(0,0,0,.5);z-index:2;}\n  .ipx-tt-rail .ipx-av{margin-bottom:4px;}\n  .ipx-tt-cap{position:absolute;left:8px;right:32px;bottom:8px;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.65);z-index:2;}\n  /* YouTube watch page */\n  .yt{display:flex;flex-direction:column;height:100%;background:#fff;color:#0F0F0F;font-family:'DM Sans',sans-serif;overflow:hidden;}\n  .yt-status{display:flex;align-items:center;justify-content:space-between;padding:5px 9px 4px;font-size:7px;font-weight:700;}\n  .yt-status .r{display:flex;align-items:center;gap:3px;}\n  .yt-player{position:relative;width:100%;aspect-ratio:16/9;background:#000;overflow:hidden;flex-shrink:0;}\n  .yt-player img{width:100%;height:100%;object-fit:cover;display:block;}\n  .yt-prog{position:absolute;left:0;right:0;bottom:0;height:2.5px;background:rgba(255,255,255,.35);}\n  .yt-prog::before{content:\"\";position:absolute;left:0;top:0;bottom:0;width:38%;background:#FF0000;}\n  .yt-prog::after{content:\"\";position:absolute;left:38%;top:50%;transform:translate(-50%,-50%);width:7px;height:7px;border-radius:50%;background:#FF0000;}\n  .yt-dur{position:absolute;right:4px;bottom:6px;background:rgba(0,0,0,.8);color:#fff;font-size:6px;font-weight:700;padding:1px 3px;border-radius:3px;}\n  .yt-body{padding:6px 9px 0;}\n  .yt-title{font-size:8px;font-weight:700;line-height:1.25;display:flex;gap:4px;align-items:flex-start;}\n  .yt-meta{font-size:6px;color:#606060;margin-top:3px;font-weight:600;}\n  .yt-acts{display:flex;align-items:center;gap:8px;padding:8px 9px 7px;overflow:hidden;}\n  .yt-act{display:flex;flex-direction:column;align-items:center;gap:2px;font-size:5.5px;font-weight:600;color:#0F0F0F;white-space:nowrap;flex-shrink:0;}\n  .yt-likepill{display:flex;align-items:center;gap:7px;background:#F2F2F2;border-radius:999px;padding:4px 8px;flex-shrink:0;}\n  .yt-likepill .yt-act{flex-direction:row;gap:3px;}\n  .yt-likepill .yt-act:first-child{border-right:1px solid #D9D9D9;padding-right:7px;}\n  .yt-channel{display:flex;align-items:center;gap:5px;padding:8px 7px;border-top:1px solid #EEE;}\n  .yt-channel .cav{width:16px;height:16px;border-radius:50%;background:linear-gradient(135deg,#FF0000,#CC0000);flex-shrink:0;}\n  .yt-channel .ci{flex:1;min-width:0;}\n  .yt-channel .cn{font-size:7px;font-weight:700;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n  .yt-channel .cs{font-size:5.5px;color:#606060;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n  .yt-sub{flex-shrink:0;font-size:5px;font-weight:700;color:#0F0F0F;display:flex;align-items:center;gap:4px;letter-spacing:.02em;}\n  .yt-comments{margin:7px 9px 0;border:1px solid #EEE;border-radius:8px;padding:6px 7px;}\n  .yt-ch{font-size:7px;font-weight:700;display:flex;gap:5px;align-items:center;}\n  .yt-ch span{color:#606060;font-weight:600;}\n  .yt-cprev{display:flex;gap:5px;margin-top:4px;align-items:flex-start;}\n  .yt-cprev .ca{width:13px;height:13px;border-radius:50%;background:linear-gradient(135deg,#8E54E9,#4776E6);flex-shrink:0;}\n  .yt-cprev .ct{font-size:6px;line-height:1.35;}\n  /* Facebook feed */\n  .fb{display:flex;flex-direction:column;height:100%;background:#fff;color:#050505;font-family:'DM Sans',sans-serif;overflow:hidden;}\n  .fb-status{display:flex;align-items:center;justify-content:space-between;padding:5px 9px 2px;font-size:7px;font-weight:700;}\n  .fb-status .r{display:flex;align-items:center;gap:3px;}\n  .fb-top{display:flex;align-items:center;justify-content:space-between;padding:1px 9px 5px;}\n  .fb-wordmark{font-family:'Satoshi','DM Sans',sans-serif;font-weight:800;font-size:13px;color:#0866FF;letter-spacing:-0.04em;}\n  .fb-top .ic-row{display:flex;align-items:center;gap:6px;}\n  .fb-top .cbtn{width:16px;height:16px;border-radius:50%;background:#E4E6EB;display:flex;align-items:center;justify-content:center;}\n  .fb-tabs{display:flex;align-items:flex-end;gap:11px;padding:0 9px;font-size:7.5px;font-weight:700;color:#65676B;border-bottom:1px solid #E4E6EB;}\n  .fb-tabs .t{padding-bottom:5px;}\n  .fb-tabs .t.active{color:#0866FF;border-bottom:2px solid #0866FF;}\n  .fb-tabs .t.adjust{margin-left:auto;display:flex;align-items:center;padding-bottom:4px;}\n  .fb-scroll{flex:1;min-height:0;overflow:hidden;}\n  .fb-manage{display:flex;align-items:center;gap:6px;border:1px solid #E4E6EB;border-radius:7px;margin:6px 9px;padding:6px 8px;font-size:7.5px;font-weight:700;}\n  .fb-manage .chev{margin-left:auto;display:flex;}\n  .fb-phd{display:flex;align-items:center;gap:6px;padding:2px 9px 5px;}\n  .fb-phd .av,.fb-post2 .av{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#1877F2,#4293FB);flex-shrink:0;}\n  .fb-phd .nm,.fb-post2 .nm{font-size:7.5px;font-weight:700;line-height:1.15;}\n  .fb-phd .meta,.fb-post2 .meta{font-size:6px;color:#65676B;}\n  .fb-phd .more,.fb-post2 .more{margin-left:auto;color:#65676B;font-size:11px;line-height:0.4;letter-spacing:0.5px;}\n  .fb-cap{padding:0 9px 6px;font-size:7.5px;line-height:1.4;}\n  .fb-media{width:100%;aspect-ratio:1.35/1;background:#EEE;overflow:hidden;}\n  .fb-media img{width:100%;height:100%;object-fit:cover;display:block;}\n  .fb-react{display:flex;align-items:center;gap:5px;padding:6px 9px;font-size:6.5px;color:#65676B;border-bottom:1px solid #E4E6EB;}\n  .fb-react .emo{display:flex;align-items:center;}\n  .fb-react .emo span{width:10px;height:10px;border-radius:50%;border:1.2px solid #fff;display:inline-block;}\n  .fb-react .emo span+span{margin-left:-3px;}\n  .fb-react .cm{margin-left:auto;}\n  .fb-actbar{display:flex;align-items:center;justify-content:space-around;padding:6px 4px;font-size:7px;font-weight:600;color:#65676B;}\n  .fb-actbar span{display:flex;align-items:center;gap:4px;}\n  .fb-post2{display:flex;align-items:center;gap:6px;padding:7px 9px 4px;border-top:6px solid #F0F2F5;}\n  .fb-nav{flex-shrink:0;display:flex;align-items:center;justify-content:space-around;padding:7px 8px 8px;border-top:1px solid #E4E6EB;}\n\n  /* ════════ strict sequential loop (8s): draft → content fed INTO orb → orb processes → fired OUT → phone output → hold → fade → repeat ════════ */\n  /* ════════ JS-driven strict sequential choreography (transitions toggled by classes) ════════ */\n  .v2-chev{opacity:0;}\n  .v2-draft{opacity:0;transform:translateX(-12px);transition:opacity .45s ease,transform .45s ease;}\n  .v2-draft.show{opacity:1;transform:none;}\n  .v2-draft .img{opacity:0;transform:translateY(12px);transition:opacity .45s ease,transform .45s ease;}\n  .v2-draft .img.show{opacity:1;transform:none;}\n  .v2-core{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease;}\n  .v2-core.flash{transform:scale(1.17);box-shadow:0 0 0 6px rgba(60,160,255,0.20),0 0 30px 9px rgba(60,180,255,0.78),0 0 56px 18px rgba(47,155,255,0.5),inset 0 2px 5px rgba(255,255,255,0.24),inset 0 -5px 9px rgba(0,0,0,0.55);}\n  .v2-d-btn{transition:transform .12s ease,box-shadow .2s ease;}\n  .v2-d-btn.click{transform:scale(.93);box-shadow:0 0 0 5px rgba(0,196,240,0.28);}\n  .v2-right .iphone{opacity:0;transform:translateX(20px) scale(.94);transition:opacity .5s ease,transform .5s ease;}\n  .v2-right .iphone.show{opacity:1;transform:none;}\n  @media (prefers-reduced-motion: reduce){\n    .v2-draft,.v2-draft .img,.v2-right .iphone,.v2-core,.v2-d-btn{transition:none!important;}\n  }";
var CC_SYMBOLS = "<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\">\n  <symbol id=\"ig\" viewBox=\"0 0 24 24\"><path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\"/></symbol>\n  <symbol id=\"tiktok\" viewBox=\"0 0 24 24\"><path d=\"M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z\"/></symbol>\n  <symbol id=\"linkedin\" viewBox=\"0 0 24 24\"><path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/></symbol>\n  <symbol id=\"youtube\" viewBox=\"0 0 24 24\"><path d=\"M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z\"/></symbol>\n  <symbol id=\"x\" viewBox=\"0 0 24 24\"><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></symbol>\n  <symbol id=\"facebook\" viewBox=\"0 0 24 24\"><path d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/></symbol>\n</svg>";
var CC_STRUCT = "<div class=\"v2\" style=\"width:100%;height:100%\"><div class=\"v2-left\"><div class=\"v2-draft\"><div class=\"v2-d-prompt\"><span class=\"v2-d-text\"></span><span class=\"v2-d-caret\"></span></div><div class=\"img\"><img class=\"v2-photo\" alt=\"\"></div><button class=\"v2-d-btn\">Create Post</button></div></div><div class=\"v2-mid\"><div class=\"v2-core\"><span class=\"cmark\">C</span></div></div><div class=\"v2-right\"><div class=\"iphone\"><div class=\"iphone-island\"></div><div class=\"iphone-screen\"></div></div></div></div>";
function CC_SETUP(root){

  // each image is locked to its own caption — never mix
  function RES(id,fb){ return (window.__resources&&window.__resources[id]) ? window.__resources[id] : fb; }
  var SLIDES=[
    {img:RES('cannonImg4','../../assets/cannon/img4.jpg'), text:'Silence everything — the new noise-cancelling headphones.'},
    {img:RES('cannonImg1','../../assets/cannon/img1.jpg'), text:'Step into the season — our lightest runner yet.'},
    {img:RES('cannonImg3','../../assets/cannon/img3.jpg'), text:'Our new signature roast just dropped — rich & smooth.'},
    {img:RES('cannonImg2','../../assets/cannon/img2.jpg'), text:'Introducing the new Watch — built to last a lifetime.'},
    {img:RES('cannonImg5','../../assets/cannon/img5.jpg'), text:'Fill every room with sound — meet our new smart speaker.'}
  ];
  var IMAGES=SLIDES.map(function(s){return s.img;});
  var PROMPTS=SLIDES.map(function(s){return s.text;});
  var v2=root.querySelector('.v2');
  if(!v2) return;
  var photos=[].slice.call(v2.querySelectorAll('.v2-photo'));
  var textEl=v2.querySelector('.v2-d-text');
  var draft=v2.querySelector('.v2-draft');
  var screen=v2.querySelector('.iphone-screen');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var idx=0, typer=null;

  // ---- iPhone platform output: a random platform is distributed to each cycle ----
  var PLATFORMS=['instagram','tiktok','linkedin','x','youtube','facebook'];
  var lastP=null;
  function pickPlatform(){ var p; do{ p=PLATFORMS[(Math.random()*PLATFORMS.length)|0]; }while(p===lastP); lastP=p; return p; }
  function ic(d,o){o=o||{};return '<svg viewBox="0 0 24 24" fill="'+(o.fill||'none')+'" stroke="'+(o.stroke||'#222')+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:'+(o.w||12)+'px;height:'+(o.w||12)+'px;flex-shrink:0'+(o.ml?';margin-left:auto':'')+(o.style?';'+o.style:'')+'"><path d="'+d+'"></path></svg>';}
  function lg(id,c,s){return '<svg viewBox="0 0 24 24" style="width:'+s+'px;height:'+s+'px;flex-shrink:0;fill:'+c+'"><use href="#'+id+'"></use></svg>';}
  var HEART='M12 21s-7-4.6-9.5-9C1 9 2.6 5.5 6 5.5c2 0 3.2 1.3 4 2.4.8-1.1 2-2.4 4-2.4 3.4 0 5 3.5 3.5 6.5C19 16.4 12 21 12 21z',
      CHAT='M21 11.5a8.5 8.5 0 0 1-12.2 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5z',
      SEND='M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
      BOOK='M6 3h12v18l-6-4-6 4V3z',
      RT='M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3',
      THUMB='M7 22V11M2 13v7a2 2 0 0 0 2 2h13.3a2 2 0 0 0 2-1.7l1.4-9A2 2 0 0 0 18.7 9H14V5a3 3 0 0 0-3-3l-4 9',
      VIEWS='M3 21V10M9 21V4M15 21v-8M21 21V14',
      SHARE='M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13',
      DOWNLOAD='M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2M7 11l5 5 5-5M12 4v12',
      SAVE='M5 3h14a1 1 0 0 1 1 1v17l-8-4-8 4V4a1 1 0 0 1 1-1z',
      BELL='M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.5 21a2 2 0 0 1-3 0',
      SEARCH='M21 21l-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
      SLIDERS='M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
      GEAR='M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM19 12l1.6-1-1.5-2.6-1.9.6a6.9 6.9 0 0 0-1.7-1l-.4-2H10.9l-.4 2a6.9 6.9 0 0 0-1.7 1l-1.9-.6L5.4 9 7 10a6.6 6.6 0 0 0 0 2l-1.6 1 1.5 2.6 1.9-.6c.5.4 1.1.8 1.7 1l.4 2h3.2l.4-2c.6-.2 1.2-.6 1.7-1l1.9.6 1.5-2.6L19 14a6.6 6.6 0 0 0 0-2z';
  var STAT='<svg viewBox="0 0 24 24" style="width:11px;height:11px;fill:#0F0F0F"><path d="M2 17h3v4H2zM7 13h3v8H7zM12 9h3v12h-3zM17 5h3v16h-3z"></path></svg><svg viewBox="0 0 24 24" style="width:12px;height:12px;fill:#0F0F0F"><path d="M12 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 3C7.5 3 3.7 4.8 1 7.6l2 2C5.2 7.3 8.4 6 12 6s6.8 1.3 9 3.6l2-2C20.3 4.8 16.5 3 12 3zm0 5c-2.6 0-5 1-6.8 2.7l2 2C8.4 11.6 10.1 11 12 11s3.6.6 4.8 1.7l2-2C17 9 14.6 8 12 8z"></path></svg><svg viewBox="0 0 26 24" style="width:15px;height:11px;fill:#0F0F0F"><rect x="1" y="8" width="19" height="9" rx="2.5"></rect><rect x="21" y="10.5" width="2.2" height="4" rx="1"></rect></svg>';
  function renderPhone(p,img,cap,target){
    var sc=target||screen;
    if(!sc) return;
    var m='<img src="'+img+'" alt="">', h='';
    if(p==='instagram'){
      h='<div class="ipx">'
        +'<div class="ipx-hd"><div class="ipx-av" style="background:linear-gradient(135deg,#E1306C,#F77737)"></div><div class="ipx-name" style="flex:1">yourbrand</div>'+lg('ig','#E1306C',13)+'</div>'
        +'<div class="ipx-media" style="flex:1;min-height:0">'+m+'</div>'
        +'<div class="ipx-actions">'+ic(HEART,{w:13})+ic(CHAT,{w:13})+ic(SEND,{w:13})+ic(BOOK,{w:13,ml:1})+'</div>'
        +'<div class="ipx-likes">1,248 likes</div>'
        +'<div class="ipx-cap"><b>yourbrand</b> '+cap+'</div></div>';
    } else if(p==='tiktok'){
      h='<div class="ipx" style="background:#000;color:#fff">'
        +'<div class="ipx-hd" style="justify-content:center;gap:14px;font-size:8px;font-weight:700"><span style="opacity:.55">Following</span><span style="border-bottom:2px solid #fff;padding-bottom:2px">For You</span></div>'
        +'<div class="ipx-media" style="flex:1;position:relative;background:#000">'+m
          +'<div class="ipx-tt-rail"><div class="ipx-av" style="background:linear-gradient(135deg,#25F4EE,#FE2C55);border:1.5px solid #fff"></div>'+ic(HEART,{stroke:'#fff',fill:'#FE2C55',w:15})+'<span>21.4K</span>'+ic(CHAT,{stroke:'#fff',w:15})+'<span>892</span>'+ic(SEND,{stroke:'#fff',w:15})+'<span>1.2K</span></div>'
          +'<div class="ipx-tt-cap"><div style="font-weight:700;font-size:8px;display:flex;align-items:center;gap:4px">@yourbrand '+lg('tiktok','#fff',9)+'</div><div style="font-size:7px;margin-top:2px;line-height:1.4">'+cap+'</div></div>'
        +'</div></div>';
    } else if(p==='linkedin'){
      h='<div class="li">'
        +'<div class="li-card">'
        +'<div class="li-hd"><div class="li-av"></div><div class="li-id"><div class="li-name">Your Brand</div><div class="li-sub">12,480 followers</div><div class="li-time">1h · <svg viewBox="0 0 24 24" fill="none" stroke="#00000099" stroke-width="2" style="width:8px;height:8px;flex-shrink:0"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path></svg></div></div><div class="li-more">···</div></div>'
        +'<div class="li-text">'+cap+'</div>'
        +'<div class="li-media">'+m+'</div>'
        +'<div class="li-react"><span class="li-emo"><span class="dots"><span style="background:#378FE9"></span><span style="background:#DF704D"></span><span style="background:#6DAE4F"></span></span>248</span><span class="li-meta">18 comments · 6 reposts</span></div>'
        +'<div class="li-acts"><span>'+ic(THUMB,{w:12,stroke:'#00000099'})+'Like</span><span>'+ic(CHAT,{w:12,stroke:'#00000099'})+'Comment</span><span>'+ic(RT,{w:12,stroke:'#00000099'})+'Repost</span><span>'+ic(SEND,{w:12,stroke:'#00000099'})+'Send</span></div>'
        +'</div>'
        +'<div class="li-feed"></div>'
        +'<div class="li-nav">'
          +'<span class="nv active">'+ic('M3 11l9-8 9 8M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10',{w:12,stroke:'rgba(0,0,0,.9)'})+'Home</span>'
          +'<span class="nv">'+ic('M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M22 21v-2a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75',{w:12,stroke:'rgba(0,0,0,.55)'})+'My Network</span>'
          +'<span class="nv">'+ic('M4 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM12 8v8M8 12h8',{w:12,stroke:'rgba(0,0,0,.55)'})+'Post</span>'
          +'<span class="nv">'+ic('M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.5 21a2 2 0 0 1-3 0',{w:12,stroke:'rgba(0,0,0,.55)'})+'Notifications</span>'
          +'<span class="nv">'+ic('M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18',{w:12,stroke:'rgba(0,0,0,.55)'})+'Jobs</span>'
        +'</div>'
        +'</div>';
    } else if(p==='x'){
      h='<div class="xp">'
        +'<div class="xp-top">'+lg('x','#fff',13)+'</div>'
        +'<div class="xp-scroll">'
          +'<div class="xp-post">'
            +'<div class="xp-hd"><div class="xp-av"></div><div class="xp-id"><span class="xp-name">Your Brand</span>'
              +'<svg viewBox="0 0 24 24" style="width:9px;height:9px;flex-shrink:0"><circle cx="12" cy="12" r="11" fill="#1D9BF0"></circle><path d="M9.3 12.4l1.9 1.9 3.8-4.4" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
              +'<span class="xp-handle">@yourbrand · 1h</span><span class="xp-more">···</span></div></div>'
            +'<div class="xp-text">'+cap+'</div>'
            +'<div class="xp-media">'+m+'</div>'
            +'<div class="xp-acts"><span>'+ic(CHAT,{w:11,stroke:'#71767B'})+'892</span><span>'+ic(RT,{w:11,stroke:'#71767B'})+'1.2K</span><span>'+ic(HEART,{w:11,stroke:'#71767B'})+'21K</span><span>'+ic(VIEWS,{w:11,stroke:'#71767B'})+'48K</span><span>'+ic(SHARE,{w:11,stroke:'#71767B'})+'</span></div>'
          +'</div>'
          +'<div class="xp-post xp-post2"><div class="xp-hd"><div class="xp-av" style="background:linear-gradient(135deg,#F7971E,#FFD200)"></div><div class="xp-id"><span class="xp-name">Jasper\'s Market</span><span class="xp-handle">@jaspers · 3h</span><span class="xp-more">···</span></div></div><div class="xp-text">Fresh drops every morning — come see what\'s new in store today.</div></div>'
        +'</div>'
      +'</div>';
    } else if(p==='youtube'){
      h='<div class="yt">'
        +'<div class="yt-status"><span>10:24</span><span class="r">'+STAT+'</span></div>'
        +'<div class="yt-player">'+m+'<div class="yt-prog"></div><span class="yt-dur">10:24</span></div>'
        +'<div class="yt-body"><div class="yt-title"><span style="flex:1">'+cap+'</span>'+ic('M6 9l6 6 6-6',{w:10,stroke:'#606060'})+'</div><div class="yt-meta">1.1M views \u00b7 11mo ago \u00b7 #carbonium</div></div>'
        +'<div class="yt-acts">'
          +'<div class="yt-likepill"><div class="yt-act">'+ic(THUMB,{w:11,stroke:'#0F0F0F'})+'79K</div><div class="yt-act">'+ic(THUMB,{w:11,stroke:'#0F0F0F',style:'transform:rotate(180deg)'})+'</div></div>'
          +'<div class="yt-act">'+ic(SHARE,{w:12,stroke:'#0F0F0F'})+'Share</div>'
          +'<div class="yt-act">'+ic(DOWNLOAD,{w:12,stroke:'#0F0F0F'})+'Download</div>'
          +'<div class="yt-act">'+ic(SAVE,{w:12,stroke:'#0F0F0F'})+'Save</div>'
        +'</div>'
        +'<div class="yt-channel"><div class="cav"></div><div class="ci"><div class="cn">Your Brand</div><div class="cs">1.78M subscribers</div></div><div class="yt-sub">SUBSCRIBED '+ic(BELL,{w:8,stroke:'#0F0F0F'})+'</div></div>'
        +'<div class="yt-comments"><div class="yt-ch">Comments <span>12K</span></div><div class="yt-cprev"><div class="ca"></div><div class="ct">I\'ll be damned \u2014 the new drop actually looks incredible.</div></div><div class="yt-cprev"><div class="ca"></div><div class="ct">Can\'t wait to try this \uD83D\uDD25</div></div><div class="yt-cprev"><div class="ca"></div><div class="ct">Instant add to cart. Take my money.</div></div><div class="yt-cprev"><div class="ca"></div><div class="ct">The quality on this is unreal \uD83D\uDC4F</div></div></div>'
        +'</div>';
    } else { /* facebook */
      h='<div class="fb">'
        +'<div class="fb-status"><span>2:04</span><span class="r">'+STAT+'</span></div>'
        +'<div class="fb-top"><span class="fb-wordmark">facebook</span><span class="ic-row"><span class="cbtn">'+ic(SEARCH,{w:9,stroke:'#050505'})+'</span><span class="cbtn">'+ic(CHAT,{w:9,stroke:'#050505'})+'</span></span></div>'
        +'<div class="fb-tabs"><span class="t">Home</span><span class="t active">Favorites</span><span class="t">Recent</span><span class="t adjust">'+ic(SLIDERS,{w:11,stroke:'#65676B'})+'</span></div>'
        +'<div class="fb-scroll">'
          +'<div class="fb-phd"><div class="av"></div><div><div class="nm">Your Brand</div><div class="meta">★ Favorites · 20m · Public</div></div><div class="more">···</div></div>'
          +'<div class="fb-cap">'+cap+' 🙂</div>'
          +'<div class="fb-media">'+m+'</div>'
          +'<div class="fb-react"><span class="emo"><span style="background:#1877F2"></span><span style="background:#F33E58"></span></span>You and 248 others<span class="cm">7 Comments</span></div>'
          +'<div class="fb-actbar"><span>'+ic(THUMB,{w:12,stroke:'#65676B'})+'Like</span><span>'+ic(CHAT,{w:12,stroke:'#65676B'})+'Comment</span><span>'+ic(SHARE,{w:12,stroke:'#65676B'})+'Share</span></div>'
          +'<div class="fb-post2"><div class="av" style="background:linear-gradient(135deg,#F7971E,#FFD200)"></div><div><div class="nm">Jasper\'s Market</div><div class="meta">★ Favorites · 1h · Public</div></div><div class="more">···</div></div>'
        +'</div>'
        +'<div class="fb-nav">'
          +'<svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:#0866FF"><path d="M12 3l9 8h-2.2v9h-5.3v-6h-3v6H5.2v-9H3z"></path></svg>'
          +'<svg viewBox="0 0 24 24" fill="none" stroke="#65676B" stroke-width="2" style="width:15px;height:15px"><rect x="3" y="5" width="13" height="14" rx="2"></rect><path d="M16 10l5-3v10l-5-3"></path></svg>'
          +'<svg viewBox="0 0 24 24" fill="none" stroke="#65676B" stroke-width="2" style="width:15px;height:15px"><circle cx="9" cy="8" r="3.2"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path><circle cx="17.5" cy="9" r="2.4"></circle><path d="M16.5 14.4c2.4.4 4 2.5 4 5.1"></path></svg>'
          +'<svg viewBox="0 0 24 24" fill="none" stroke="#65676B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.5 21a2 2 0 0 1-3 0"></path></svg>'
          +'<svg viewBox="0 0 24 24" fill="none" stroke="#65676B" stroke-width="2" stroke-linecap="round" style="width:15px;height:15px"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>'
        +'</div>'
      +'</div>';
    }
    sc.innerHTML=h;
  }

  function setImg(i){ for(var k=0;k<photos.length;k++) photos[k].src=IMAGES[i]; }
  var orbEl=v2.querySelector('.v2-core');
  var draftImgWrap=draft?draft.querySelector('.img'):null;
  var btn=v2.querySelector('.v2-d-btn');
  var phoneEl=v2.querySelector('.v2-right .iphone');
  var caret=v2.querySelector('.v2-d-caret');

  // ---- cancelable timers ----
  var timers=[], tId=null;
  function later(fn,ms){ var id=setTimeout(fn,ms); timers.push(id); return id; }
  function clearAll(){ timers.forEach(clearTimeout); timers=[]; if(tId){clearTimeout(tId);tId=null;} }

  // ---- typewriter, word by word ----
  function typeWords(str, done){
    var words=str.split(' '), i=0;
    if(textEl) textEl.textContent='';
    if(caret) caret.style.opacity='1';
    (function next(){
      if(i>=words.length){ if(caret) caret.style.opacity='0'; done&&done(); return; }
      if(textEl) textEl.textContent += (i?' ':'')+words[i];
      i++;
      tId=setTimeout(next, 165);
    })();
  }

  // ---- the product image detaches and is absorbed into the orb ----
  function launchFlight(img, done){
    if(!draftImgWrap||!orbEl){ done&&done(); return; }
    var hostR=v2.getBoundingClientRect(), sR=draftImgWrap.getBoundingClientRect(), oR=orbEl.getBoundingClientRect();
    if(sR.width<2){ done&&done(); return; }
    var fly=document.createElement('div');
    fly.className='v2-flyer';
    fly.style.backgroundImage='url("'+img+'")';
    fly.style.left=(sR.left-hostR.left)+'px';
    fly.style.top=(sR.top-hostR.top)+'px';
    fly.style.width=sR.width+'px';
    fly.style.height=sR.height+'px';
    v2.appendChild(fly);
    // hide the draft's own image instantly so the flyer is the only copy
    draftImgWrap.style.transition='none';
    draftImgWrap.style.opacity='0';
    var dx=(oR.left+oR.width/2)-(sR.left+sR.width/2);
    var dy=(oR.top+oR.height/2)-(sR.top+sR.height/2);
    var a=fly.animate([
      {transform:'translate(0,0) scale(1) rotate(0deg)', opacity:1, filter:'drop-shadow(0 6px 14px rgba(0,0,0,.25))', borderRadius:'8px', offset:0},
      {transform:'translate('+(dx*0.12)+'px,'+(dy*0.42-22)+'px) scale(1.05) rotate(-3deg)', opacity:1, filter:'drop-shadow(0 10px 18px rgba(0,170,255,.5))', borderRadius:'10px', offset:0.18},
      {transform:'translate('+(dx*0.88)+'px,'+(dy*0.95)+'px) scale(0.30) rotate(3deg)', opacity:1, filter:'drop-shadow(0 0 16px rgba(0,205,255,.95))', borderRadius:'50%', offset:0.82},
      {transform:'translate('+dx+'px,'+dy+'px) scale(0.04) rotate(6deg)', opacity:0, filter:'drop-shadow(0 0 26px rgba(120,225,255,1))', borderRadius:'50%', offset:1}
    ], {duration:1150, easing:'cubic-bezier(.5,0,.35,1)', fill:'forwards'});
    // orb flashes as it absorbs the image
    later(function(){ orbEl.classList.add('flash'); }, 980);
    later(function(){ orbEl.classList.remove('flash'); }, 1380);
    a.onfinish=function(){ if(fly.parentNode) fly.remove(); done&&done(); };
  }

  // ---- strict sequential cycle ----
  function runCycle(i){
    clearAll();
    setImg(i);
    renderPhone(pickPlatform(), IMAGES[i], PROMPTS[i]);
    // reset every element to its hidden start state
    draft.classList.remove('show');
    if(draftImgWrap){ draftImgWrap.classList.remove('show'); draftImgWrap.style.transition=''; draftImgWrap.style.opacity=''; }
    if(phoneEl) phoneEl.classList.remove('show');
    if(btn) btn.classList.remove('click');
    if(orbEl) orbEl.classList.remove('flash');
    if(textEl) textEl.textContent='';
    if(caret) caret.style.opacity='0';

    function nextCycle(){ idx=(idx+1)%IMAGES.length; runCycle(idx); }

    if(reduce){
      draft.classList.add('show');
      if(textEl) textEl.textContent=PROMPTS[i];
      if(draftImgWrap) draftImgWrap.classList.add('show');
      if(phoneEl) phoneEl.classList.add('show');
      later(nextCycle, 4500);
      return;
    }

    // 1 — draft card appears
    later(function(){ draft.classList.add('show'); }, 60);
    // 2 — typewriter types the caption word by word, then:
    later(function(){
      typeWords(PROMPTS[i], function(){
        // 3 — product image fades/slides into the draft
        later(function(){ if(draftImgWrap) draftImgWrap.classList.add('show'); }, 260);
        // 4 — 'Create Post' button animates as if clicked
        later(function(){ if(btn) btn.classList.add('click'); }, 260+560);
        later(function(){ if(btn) btn.classList.remove('click'); }, 260+560+280);
        // 5 — image detaches, flies to the orb, is absorbed (orb flashes)
        var flyAt=260+560+280+280;
        later(function(){
          launchFlight(IMAGES[i], function(){
            // 6 — iPhone mockup appears on the right
            later(function(){ if(phoneEl) phoneEl.classList.add('show'); }, 220);
            // 7 — pause 2s, then everything fades out and the loop restarts
            later(function(){
              draft.classList.remove('show');
              if(draftImgWrap) draftImgWrap.classList.remove('show');
              if(phoneEl) phoneEl.classList.remove('show');
            }, 220+450+2000);
            later(nextCycle, 220+450+2000+650);
          });
        }, flyAt);
      });
    }, 560);
  }
  function ccReset(){
    clearAll();
    var fl=v2.querySelectorAll('.v2-flyer'); for(var fi=0;fi<fl.length;fi++) fl[fi].remove();
    draft.classList.remove('show');
    if(draftImgWrap){ draftImgWrap.classList.remove('show'); draftImgWrap.style.transition=''; draftImgWrap.style.opacity=''; }
    if(phoneEl) phoneEl.classList.remove('show');
    if(btn) btn.classList.remove('click');
    if(orbEl) orbEl.classList.remove('flash');
    if(textEl) textEl.textContent='';
    if(caret) caret.style.opacity='0';
  }
  root.__ccStart=function(){ ccReset(); idx=0; runCycle(0); };
  root.__ccStop=ccReset;

}
function ContentCannonVis({active}) {
  var rootRef = React.useRef(null);
  React.useEffect(function(){
    var root = rootRef.current; if(!root) return;
    if(!document.getElementById('cc-styles')){ var st=document.createElement('style'); st.id='cc-styles'; st.textContent=CC_CSS; document.head.appendChild(st); }
    if(!document.getElementById('cc-symbols')){ var sv=document.createElement('div'); sv.id='cc-symbols'; sv.setAttribute('aria-hidden','true'); sv.style.cssText='position:absolute;width:0;height:0;overflow:hidden'; sv.innerHTML=CC_SYMBOLS; document.body.appendChild(sv); }
    root.innerHTML=CC_STRUCT;
    try { CC_SETUP(root); } catch(e){ console.error('CC_SETUP error', e); }
    return function(){ if(root.__ccStop) root.__ccStop(); root.innerHTML=''; };
  }, []);
  React.useEffect(function(){
    var root = rootRef.current; if(!root) return;
    if(active===false){ if(root.__ccStop) root.__ccStop(); }
    else { if(root.__ccStart) root.__ccStart(); }
  }, [active]);
  return React.createElement('div', {ref:rootRef, style:{flex:'1 1 auto',width:'100%',height:'100%'}});
}

function LogoGridVis({active}) {
  var LOGOS = [
    {name:'Instagram', bg:'#E1306C', icon:'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'},
    {name:'TikTok', bg:'#010101', icon:'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z'},
    {name:'LinkedIn', bg:'#0A66C2', icon:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'},
    {name:'YouTube', bg:'#FF0000', icon:'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z'},
    {name:'X', bg:'#000000', icon:'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z'},
    {name:'Facebook', bg:'#1877F2', icon:'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'},
  ];
  var [activeIdx, setActiveIdx] = React.useState(null);
  React.useEffect(function(){
    if(active===false){ setActiveIdx(null); return; }   // paused when scrolled out of view
    var idx = 0;
    var t = setInterval(function(){
      var cur = idx % LOGOS.length;
      setActiveIdx(cur);
      idx++;
      setTimeout(function(){ setActiveIdx(null); }, 500);
    }, 900);
    return function(){ clearInterval(t); };
  }, [active]);
  return (
    React.createElement('div', {style:{padding:'18px 16px',width:'100%',boxSizing:'border-box'}},
      React.createElement('div', {style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px'}},
        LOGOS.map(function(logo,i){
          var isAct = activeIdx===i;
          return React.createElement('div', {key:i, style:{
            background:isAct?logo.bg:'#fff',
            borderRadius:'12px',padding:'14px',
            display:'flex',flexDirection:'column',alignItems:'center',gap:'7px',
            boxShadow:isAct?'0 4px 18px rgba(0,0,0,0.18)':'0 0.5px 1px rgba(0,0,0,.06),0 2px 5px rgba(0,0,0,.06),0 6px 14px rgba(0,0,0,.04),inset 0 2px 0 #FFF,inset 0 4px 6px rgba(255,255,255,0.6)',
            transition:'all 0.35s cubic-bezier(0.4,0,0.2,1)',
            transform:isAct?'translateY(-2px) scale(1.04)':'none',
          }},
            React.createElement('svg',{viewBox:'0 0 24 24',width:22,height:22,fill:isAct?'#fff':logo.bg},
              React.createElement('path',{d:logo.icon})
            ),
            React.createElement('span',{style:{fontSize:'8px',fontWeight:600,color:isAct?'rgba(255,255,255,0.85)':'#999',fontFamily:'DM Sans,sans-serif',letterSpacing:'0.03em'}},logo.name)
          );
        })
      ),
      React.createElement('div', {style:{marginTop:'12px',display:'flex',alignItems:'center',gap:'8px',padding:'9px 12px',background:'rgba(255,255,255,0.7)',borderRadius:'10px',boxShadow:'0 0.5px 1px rgba(0,0,0,.06),0 2px 5px rgba(0,0,0,.06)'}},
        React.createElement('div',{style:{width:'6px',height:'6px',borderRadius:'50%',background:'#22C55E',flexShrink:0}}),
        React.createElement('span',{style:{fontSize:'10px',color:'#555',fontFamily:'DM Sans,sans-serif',fontWeight:500}},'Posting across 6 platforms simultaneously')
      )
    )
  );
}


// ─── Multi-Platform Inbox visual (Card 05) — ported from "Card 05 Options.html" ───
var MI_CSS = ".cf{position:absolute;inset:0;background:#fff;padding:14px 14px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;}\n  .cf-thread{opacity:0;transform:translateY(9px);transition:opacity .42s ease,transform .42s ease;}\n  .cf-thread.show{opacity:1;transform:none;}\n  .cf-row{display:flex;align-items:center;gap:9px;margin-bottom:6px;}\n  .cf-ic{width:25px;height:25px;border-radius:7px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}\n  .cf-ic svg{width:14px;height:14px;display:block;fill:#fff;}\n  .cf-nm{font-size:10px;font-weight:700;color:#1A1A1A;}\n  .cf-cust{display:inline-block;font-size:9.5px;line-height:1.4;font-weight:500;color:#333;background:#F0F1F3;border:1px solid #E6E6EA;border-radius:10px;border-top-left-radius:3px;padding:6px 9px;max-width:84%;margin-left:34px;min-height:25px;}\n  .cf-aiwrap{display:flex;align-items:flex-end;gap:8px;margin-top:7px;}\n  .cf-orb{width:27px;height:27px;border-radius:50%;flex-shrink:0;position:relative;background:radial-gradient(circle at 38% 30%,#5c5e67,#45454b 30%,#303035 62%,#202024 88%,#161619);box-shadow:0 0 0 3px rgba(60,160,255,0.10),0 0 10px 2px rgba(60,160,255,0.4),inset 0 1px 3px rgba(255,255,255,0.18),inset 0 -3px 6px rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.55);transition:opacity .3s ease,transform .3s cubic-bezier(.34,1.56,.64,1);}\n  .cf-orb.show{opacity:1;transform:scale(1);animation:cfBeat 1.5s ease-in-out .3s infinite;}\n  .cf-orb span{font-family:'Satoshi','DM Sans',sans-serif;font-weight:700;font-size:16px;line-height:1;background:radial-gradient(circle at 50% 46%,#fff,#dff2ff 45%,#7cd0ff 80%,#4db8ff 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 2px rgba(90,190,255,0.8));}\n  .cf-ai{font-size:9.5px;line-height:1.4;font-weight:500;color:#0E5132;background:#DCF8C6;border-radius:10px;border-bottom-left-radius:3px;padding:6px 9px;max-width:84%;min-height:25px;}\n  .cf-ct,.cf-at{transition:opacity .25s ease;}\n  .cf-caret,.cf-caret2{display:inline-block;width:1.4px;height:10px;background:#00C2F0;vertical-align:-1px;margin-left:1px;opacity:0;animation:cfBlink 1s step-end infinite;}\n  @keyframes cfBlink{0%,50%{opacity:1}50.01%,100%{opacity:0}}\n  @keyframes cfBeat{0%,100%{box-shadow:0 0 0 3px rgba(60,160,255,0.10),0 0 10px 2px rgba(60,160,255,0.4),inset 0 1px 3px rgba(255,255,255,0.18),inset 0 -3px 6px rgba(0,0,0,0.55)}50%{box-shadow:0 0 0 4px rgba(60,160,255,0.18),0 0 17px 5px rgba(60,180,255,0.62),inset 0 1px 3px rgba(255,255,255,0.22),inset 0 -3px 6px rgba(0,0,0,0.55)}}\n  @media (prefers-reduced-motion: reduce){.cf-thread,.cf-orb,.cf-ct,.cf-at{transition:none!important;}.cf-orb.show{animation:none!important;}.cf-caret,.cf-caret2{display:none!important;}}\n  .mi-live{position:absolute;top:10px;right:12px;display:flex;align-items:center;gap:5px;font-size:9px;font-weight:800;color:#0E9F6E;background:#E7F7EF;border-radius:999px;padding:3px 9px;z-index:5;letter-spacing:0.02em;}\n  .mi-live i{width:6px;height:6px;border-radius:50%;background:#0E9F6E;animation:miPulse 1.6s infinite;}\n  @keyframes miPulse{0%,100%{box-shadow:0 0 0 0 rgba(14,159,110,0.5)}60%{box-shadow:0 0 0 5px rgba(14,159,110,0)}} .cf{padding:12px 14px;} .cf-cust,.cf-ai{min-height:0;} .cf-row{margin-bottom:3px;} .cf-aiwrap{margin-top:4px;} .cf-orb{width:24px;height:24px;} .cf-orb span{font-size:14px;}";
var MI_SYMBOLS = "<svg width=\"0\" height=\"0\" aria-hidden=\"true\"><symbol id=\"mi-ig\" viewBox=\"0 0 24 24\"><path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\"/></symbol><symbol id=\"mi-wa\" viewBox=\"0 0 24 24\"><path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z\"/></symbol><symbol id=\"mi-messenger\" viewBox=\"0 0 24 24\"><path d=\"M12 0C5.24 0 0 4.95 0 11.64c0 3.5 1.44 6.53 3.78 8.62.2.18.31.43.32.7l.06 2.14c.02.68.72 1.13 1.35.85l2.39-1.05c.2-.09.43-.11.65-.05 1.09.3 2.25.46 3.45.46 6.76 0 12-4.95 12-11.64C24 4.95 18.76 0 12 0zm7.2 8.93l-3.52 5.59c-.56.89-1.76 1.11-2.61.49l-2.8-2.09a.72.72 0 00-.87 0l-3.78 2.87c-.5.38-1.16-.22-.82-.75l3.52-5.59c.56-.89 1.76-1.11 2.61-.49l2.8 2.09c.26.19.61.19.87 0l3.78-2.87c.5-.38 1.16.22.82.75z\"/></symbol><symbol id=\"mi-telegram\" viewBox=\"0 0 24 24\"><path d=\"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z\"/></symbol></svg>";
var MI_STRUCT = "<div class=\"cf\"><div class=\"mi-live\"><i></i>AI live</div><div class=\"cf-thread\"><div class=\"cf-row\"><div class=\"cf-ic\" style=\"background:#25D366\"><svg viewBox=\"0 0 24 24\"><use href=\"#mi-wa\"></use></svg></div><div class=\"cf-nm\">Aisha · WhatsApp</div></div><div class=\"cf-cust\"><span class=\"cf-ct\"></span><span class=\"cf-caret\"></span></div><div class=\"cf-aiwrap\"><div class=\"cf-orb\"><span>C</span></div><div class=\"cf-ai\"><span class=\"cf-at\"></span><span class=\"cf-caret2\"></span></div></div></div><div class=\"cf-thread\"><div class=\"cf-row\"><div class=\"cf-ic\" style=\"background:linear-gradient(135deg,#E1306C,#F77737)\"><svg viewBox=\"0 0 24 24\"><use href=\"#mi-ig\"></use></svg></div><div class=\"cf-nm\">@daniel · Instagram</div></div><div class=\"cf-cust\"><span class=\"cf-ct\"></span><span class=\"cf-caret\"></span></div><div class=\"cf-aiwrap\"><div class=\"cf-orb\"><span>C</span></div><div class=\"cf-ai\"><span class=\"cf-at\"></span><span class=\"cf-caret2\"></span></div></div></div><div class=\"cf-thread\"><div class=\"cf-row\"><div class=\"cf-ic\" style=\"background:#0084FF\"><svg viewBox=\"0 0 24 24\"><use href=\"#mi-messenger\"></use></svg></div><div class=\"cf-nm\">Sara · Messenger</div></div><div class=\"cf-cust\"><span class=\"cf-ct\"></span><span class=\"cf-caret\"></span></div><div class=\"cf-aiwrap\"><div class=\"cf-orb\"><span>C</span></div><div class=\"cf-ai\"><span class=\"cf-at\"></span><span class=\"cf-caret2\"></span></div></div></div><div class=\"cf-thread\"><div class=\"cf-row\"><div class=\"cf-ic\" style=\"background:#2AABEE\"><svg viewBox=\"0 0 24 24\"><use href=\"#mi-telegram\"></use></svg></div><div class=\"cf-nm\">Omar · Telegram</div></div><div class=\"cf-cust\"><span class=\"cf-ct\"></span><span class=\"cf-caret\"></span></div><div class=\"cf-aiwrap\"><div class=\"cf-orb\"><span>C</span></div><div class=\"cf-ai\"><span class=\"cf-at\"></span><span class=\"cf-caret2\"></span></div></div></div></div>";
function MI_SETUP(root){
  var feed=root.querySelector('.cf'); if(!feed) return;
  var threads=[].slice.call(feed.querySelectorAll('.cf-thread'));
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DATA=[
    {cust:'Is the offer still on?', ai:'Yes! Still on until 9pm. Want me to book a table?', cust2:'Yes please, for 2 people at 8pm', ai2:'Done! Booking confirmed for 2 at 8pm \u{1F389}'},
    {cust:'Can I get this in size M?', ai:'Yes, size M is available! Want me to reserve it for you?', cust2:'Yes reserve it please!', ai2:'Reserved! Check your DM for the payment link \u{1F6CD}\uFE0F'},
    {cust:'Thanks, that was fast!', ai:'Always here for you \u{1F60A} Anything else I can help with?', cust2:'Do you ship internationally?', ai2:'Yes! Worldwide shipping in 3-5 days \u{1F30D}'},
    {cust:'Where is my order?', ai:'Your order is on the way \u2014 arriving by 6pm today!'}
  ];
  var TM=[], IV=[];
  function st(fn,ms){var id=setTimeout(fn,ms);TM.push(id);return id;}
  function clr(){TM.forEach(clearTimeout);TM=[];IV.forEach(clearInterval);IV=[];}
  function type(el,caret,str,done){ if(caret)caret.style.opacity='1'; el.style.opacity='1'; el.textContent=''; var i=0; var iv=setInterval(function(){ i++; el.textContent=str.slice(0,i); if(i>=str.length){ clearInterval(iv); if(caret)caret.style.opacity='0'; done&&done(); } },40); IV.push(iv); }
  function swap(el,str,done){ el.style.opacity='0'; st(function(){ el.textContent=str; el.style.opacity='1'; st(done,260); },260); }
  function convo(idx){ var t=threads[idx], d=DATA[idx]; var ct=t.querySelector('.cf-ct'),cc=t.querySelector('.cf-caret'),orb=t.querySelector('.cf-orb'),at=t.querySelector('.cf-at'),ac=t.querySelector('.cf-caret2');
    function start(){ type(ct,cc,d.cust,function(){ st(function(){ orb.classList.add('show'); st(function(){ type(at,ac,d.ai,function(){ if(d.cust2){ st(function(){ swap(ct,d.cust2,function(){ st(function(){ type(at,ac,d.ai2,function(){ st(loopRow,2200); }); },180); }); },1100); } else { st(loopRow,2600); } }); },360); },300); }); }
    function loopRow(){ ct.style.opacity='0'; at.style.opacity='0'; st(function(){ ct.textContent=''; at.textContent=''; ct.style.opacity='1'; at.style.opacity='1'; start(); },320); }
    start();
  }
  function reset(){ clr(); threads.forEach(function(t){ t.classList.remove('show'); t.querySelector('.cf-orb').classList.remove('show'); var ct=t.querySelector('.cf-ct'),at=t.querySelector('.cf-at'); ct.textContent='';at.textContent='';ct.style.opacity='1';at.style.opacity='1'; t.querySelector('.cf-caret').style.opacity='0'; t.querySelector('.cf-caret2').style.opacity='0'; }); }
  root.__miStart=function(){ reset(); if(reduce){ threads.forEach(function(t,idx){ t.classList.add('show'); t.querySelector('.cf-ct').textContent=DATA[idx].cust; t.querySelector('.cf-orb').classList.add('show'); t.querySelector('.cf-at').textContent=DATA[idx].ai; }); return; } threads.forEach(function(t,idx){ st(function(){ t.classList.add('show'); convo(idx); }, 450*idx+200); }); };
  root.__miStop=function(){ reset(); };
}
function MultiInboxVis({active}) {
  var rootRef = React.useRef(null);
  React.useEffect(function(){
    var root = rootRef.current; if(!root) return;
    if(!document.getElementById('mi-styles')){ var st=document.createElement('style'); st.id='mi-styles'; st.textContent=MI_CSS; document.head.appendChild(st); }
    if(!document.getElementById('mi-symbols')){ var sv=document.createElement('div'); sv.id='mi-symbols'; sv.setAttribute('aria-hidden','true'); sv.style.cssText='position:absolute;width:0;height:0;overflow:hidden'; sv.innerHTML=MI_SYMBOLS; document.body.appendChild(sv); }
    root.innerHTML=MI_STRUCT;
    try { MI_SETUP(root); } catch(e){ console.error('MI_SETUP error', e); }
    return function(){ if(root.__miStop) root.__miStop(); root.innerHTML=''; };
  }, []);
  React.useEffect(function(){
    var root = rootRef.current; if(!root) return;
    if(active===false){ if(root.__miStop) root.__miStop(); } else { if(root.__miStart) root.__miStart(); }
  }, [active]);
  return React.createElement('div', {ref:rootRef, style:{position:'relative',width:'100%',height:'100%'}});
}

function ChatVis({active}) {
  var CONVOS = [
    {user:'Hey, what are your prices?', bot:'Hi! Our plans start from $49/mo. Want me to send a full breakdown?'},
    {user:'Do you offer free trials?', bot:'Yes! 14-day free trial, no card needed. Shall I set one up for you?'},
    {user:'When can we get started?', bot:'Right away! I can book you in today. What time works best?'},
    {user:'Is there a setup fee?', bot:'None at all — we handle the full onboarding. Ready to begin?'},
  ];
  var [step, setStep] = React.useState(0);
  var [showBot, setShowBot] = React.useState(false);
  React.useEffect(function(){
    if(active===false) return;   // paused when scrolled out of view
    var t;
    if (!showBot) {
      t = setTimeout(function(){ setShowBot(true); }, 1100);
    } else {
      t = setTimeout(function(){
        setShowBot(false);
        setStep(function(s){ return (s+1)%CONVOS.length; });
      }, 2400);
    }
    return function(){ clearTimeout(t); };
  }, [showBot, step, active]);
  var convo = CONVOS[step];
  return (
    React.createElement('div', {style:{padding:'14px 14px 10px',display:'flex',flexDirection:'column',gap:'8px',width:'100%',boxSizing:'border-box'}},
      React.createElement('div', {style:{display:'flex',alignItems:'center',gap:'7px',padding:'8px 11px',background:'rgba(255,255,255,0.75)',borderRadius:'10px',boxShadow:'0 0.5px 1px rgba(0,0,0,.06),0 2px 5px rgba(0,0,0,.06)'}},
        React.createElement('div',{style:{width:'24px',height:'24px',borderRadius:'50%',background:'#25D366',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
          React.createElement('svg',{viewBox:'0 0 24 24',width:13,height:13,fill:'white'},
            React.createElement('path',{d:'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'})
          )
        ),
        React.createElement('div',{style:{flex:1}},
          React.createElement('div',{style:{fontSize:'10px',fontWeight:700,color:'#1A1A1A',fontFamily:'DM Sans,sans-serif'}},'WhatsApp Business'),
          React.createElement('div',{style:{fontSize:'9px',color:'#22C55E',fontFamily:'DM Sans,sans-serif',fontWeight:500}},'\u25cf AI Active')
        )
      ),
      React.createElement('div',{style:{display:'flex',justifyContent:'flex-end'}},
        React.createElement('div',{style:{maxWidth:'82%',background:'#DCF8C6',borderRadius:'12px 12px 3px 12px',padding:'8px 12px',boxShadow:'0 1px 3px rgba(0,0,0,0.08)'}},
          React.createElement('span',{style:{fontSize:'11px',color:'#1A1A1A',fontFamily:'DM Sans,sans-serif'}},convo.user)
        )
      ),
      showBot
        ? React.createElement('div',{style:{display:'flex',justifyContent:'flex-start'}},
            React.createElement('div',{style:{maxWidth:'82%',background:'#fff',borderRadius:'12px 12px 12px 3px',padding:'8px 12px',boxShadow:'0 1px 3px rgba(0,0,0,0.08)'}},
              React.createElement('div',{style:{fontSize:'8.5px',color:'#818CF8',fontFamily:'DM Sans,sans-serif',fontWeight:700,marginBottom:'3px'}},'⚡ AI Reply'),
              React.createElement('span',{style:{fontSize:'11px',color:'#1A1A1A',fontFamily:'DM Sans,sans-serif'}},convo.bot)
            )
          )
        : React.createElement('div',{style:{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'4px',padding:'6px 10px'}},
            [0,1,2].map(function(j){
              return React.createElement('div',{key:j,style:{width:'5px',height:'5px',borderRadius:'50%',background:'#BDBDBD',animation:'agentDot 1.2s ease '+(j*0.22)+'s infinite'}});
            })
          )
    )
  );
}

function AnimSvcCard({num,title,desc,visual,span2,visualRef,noMinH,pinText,cardRef,pauseClass,popVisual,fixedVisH,tightText,balanceText}) {
  return (
    <div ref={cardRef} style={{
      background:'linear-gradient(170deg,#FAFAFA 0%,#F3F3F3 100%)',
      border:'none',
      borderTop:'1.5px solid rgba(255,255,255,0.88)',
      borderRadius:'20px',
      overflow: popVisual?'visible':'hidden',
      display:'flex',
      flexDirection:'column',
      gridColumn: span2?'span 2':'span 1',
      boxShadow:'0 0.71px 0.71px -0.67px rgba(0,0,0,.08), 0 1.81px 1.81px -1.33px rgba(0,0,0,.08), 0 3.62px 3.62px -2px rgba(0,0,0,.07), 0 6.87px 6.87px -2.67px rgba(0,0,0,.07), 0 13.65px 13.65px -3.33px rgba(0,0,0,.05), 0 30px 30px -4px rgba(0,0,0,.02), inset 0 1px 0 #FFFFFF',
    }}>
      <div ref={visualRef} className={pauseClass||''} style={{
        height: fixedVisH || undefined,
        flexShrink: fixedVisH ? 0 : undefined,
        minHeight: fixedVisH ? undefined : (noMinH ? 0 : '200px'),
        background:'#F5F5F5',
        overflow: popVisual?'visible':'hidden',
        position: popVisual?'relative':undefined,
        zIndex: popVisual?2:undefined,
        display:'flex',
        alignItems:'stretch',
        width:'100%',
        borderRadius:'20px 20px 0 0',
      }}>
        {visual}
      </div>
      <div style={{padding:tightText?'2px 32px 18px':'24px 32px 32px',borderTop:'none',marginTop:pinText?'auto':undefined}}>
        {num ? <div style={{fontSize:'13px',fontWeight:500,color:'#9A9A9A',letterSpacing:'0.06em',marginBottom:tightText?'2px':'10px',fontFamily:'DM Sans,sans-serif'}}>{num}</div> : null}
        <h3 style={{fontSize:tightText?'23px':'26px',fontWeight:700,color:'#0A0A0A',fontFamily:"'Satoshi','DM Sans',sans-serif",marginBottom:tightText?'3px':'8px',lineHeight:tightText?1.15:1.2,letterSpacing:'-0.02em'}}>{title}</h3>
        <p style={{fontSize:tightText?'14px':'15px',color:'#555555',fontFamily:'DM Sans,sans-serif',lineHeight:tightText?1.3:1.6,margin:0}}>{desc}</p>
      </div>
    </div>
  );
}

function AnimatedServices() {
  var [card01Expanded, setCard01Expanded] = React.useState(false);
  var [card01Active, setCard01Active] = React.useState(true);
  var [card02Active, setCard02Active] = React.useState(true);
  var [card04Active, setCard04Active] = React.useState(true);
  var [card05Active, setCard05Active] = React.useState(true);
  var card01VisRef = React.useRef(null);
  var card01CardRef = React.useRef(null);
  var card02CardRef = React.useRef(null);
  var card04CardRef = React.useRef(null);
  var card05CardRef = React.useRef(null);

  React.useEffect(function(){
    if (!card01VisRef.current) return;
    var ro = new ResizeObserver(function(entries){
      for (var ei = 0; ei < entries.length; ei++) {
        setCard01Expanded(entries[ei].contentRect.height > 260);
      }
    });
    ro.observe(card01VisRef.current);
    return function(){ ro.disconnect(); };
  }, []);

  React.useEffect(function(){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        var active = entry.isIntersecting;
        if (entry.target === card01CardRef.current) {
          setCard01Active(active);
        } else if (entry.target === card02CardRef.current) {
          setCard02Active(active);
        } else if (entry.target === card04CardRef.current) {
          setCard04Active(active);
        } else if (entry.target === card05CardRef.current) {
          setCard05Active(active);
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.2 });
    var c1 = card01CardRef.current;
    var c2 = card02CardRef.current;
    if (c1) io.observe(c1);
    if (c2) io.observe(c2);
    if (card04CardRef.current) io.observe(card04CardRef.current);
    if (card05CardRef.current) io.observe(card05CardRef.current);
    return function(){ io.disconnect(); };
  }, []);

  React.useEffect(function(){
    var id = '__as-kf';
    if (!document.getElementById(id)) {
      var s = document.createElement('style');
      s.id = id;
      s.textContent = '@keyframes asSpin{to{transform:rotate(360deg)}} @keyframes assDot{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}} @keyframes asSRow1{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} @keyframes asSRow2{0%{transform:translateX(-50%)}100%{transform:translateX(0)}} @keyframes agentPulse{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.5)}60%{box-shadow:0 0 0 5px rgba(34,197,94,0)}} @keyframes agentDot{0%,80%,100%{opacity:0.25;transform:scale(0.85)}40%{opacity:1;transform:scale(1.2)}} @keyframes taskFall{0%{transform:translateY(0) rotate(-6deg);opacity:1}70%{opacity:1}100%{transform:translateY(260px) rotate(9deg);opacity:0}} .vis-paused,.vis-paused *{animation-play-state:paused!important} @keyframes bundleShake{0%,100%{transform:translate(0px,0px) rotate(0deg)}18%{transform:translate(1.6px,-1.1px) rotate(0.9deg)}36%{transform:translate(-1.5px,1.2px) rotate(-1deg)}54%{transform:translate(1.2px,1.4px) rotate(0.7deg)}72%{transform:translate(-1.3px,-1.2px) rotate(-0.8deg)}90%{transform:translate(0.9px,-1.4px) rotate(0.5deg)}} @keyframes figureStrain{0%,100%{transform:translate(0px,0px) rotate(0deg)}25%{transform:translate(-0.9px,0.5px) rotate(-0.5deg)}50%{transform:translate(0.9px,-0.5px) rotate(0.5deg)}75%{transform:translate(-0.6px,0.7px) rotate(-0.4deg)}} .bundleShake{transform-box:fill-box;transform-origin:center;animation:bundleShake 0.238s linear infinite} .figureStrain{transform-box:fill-box;transform-origin:center;animation:figureStrain 0.29s linear infinite} @keyframes lifeWord{0%{transform:scaleY(0.08) rotate(0deg);opacity:0}6%{opacity:1}40%{transform:scaleY(1) rotate(-2deg);opacity:1}54%{transform:scaleY(1) rotate(-5deg);opacity:1}64%{transform:scaleY(0.93) rotate(-3deg);opacity:1}76%{transform:scaleY(1) rotate(2deg);opacity:1}87%{transform:scaleY(1) rotate(-3deg);opacity:1}94%{transform:scaleY(0.6) rotate(-1deg);opacity:0.5}100%{transform:scaleY(0.26) rotate(0deg);opacity:0}} .lifeWord{transform-box:fill-box;transform-origin:top;animation:lifeWord 8.5s ease-in-out forwards} @keyframes figureLunge{0%,38%{transform:translateX(0)}48%{transform:translateX(2px)}54%{transform:translateX(2.5px)}66%{transform:translateX(-1px)}80%{transform:translateX(0.5px)}100%{transform:translateX(0)}} .figureLunge{transform-box:fill-box;transform-origin:center;animation:figureLunge 8.5s ease-in-out infinite} @keyframes reachArm{0%,40%{transform:translate(0px,0px)}54%{transform:translate(4px,2.5px)}64%{transform:translate(6px,3.5px)}72%{transform:translate(-2px,-1px)}84%{transform:translate(3px,2px)}100%{transform:translate(0px,0px)}} .reachArm{transform-box:fill-box;transform-origin:center;animation:reachArm 8.5s ease-in-out infinite}';
      document.head.appendChild(s);
    }
  }, []);
  return (
    <section style={{background:'#F5F5F5',padding:'40px 0 96px'}}>
      <div style={S.wrap}>
        <div style={{textAlign:'center',marginBottom:'52px'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'linear-gradient(180deg,#ffffff 0%,#F2F2F2 100%)',borderRadius:'999px',padding:'10px 22px',fontSize:'12px',fontWeight:600,color:'#1A1A1A',letterSpacing:'1.2px',textTransform:'uppercase',boxShadow:'0 1px 2px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.08), 0 12px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)',border:'1px solid rgba(0,0,0,0.08)',fontFamily:'DM Sans, sans-serif',marginBottom:'24px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="#1A1A1A" style={{display:'block',flexShrink:0}}><path d="M19.14,12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4,2.81C14.36,2.57,14.16,2.4,13.92,2.4H10.08c-.24,0-.43.17-.47.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-.22-.08-.47,0-.59.22L2.74,8.87c-.12.21-.08.47.12.61l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s.02.64.07.94L2.84,14.52c-.18.14-.23.41-.12.61l1.92,3.32c.12.22.37.29.59.22l2.39-.96c.5.38,1.03.7,1.62.94l.36,2.54c.05.24.24.41.48.41h3.84c.24,0,.44-.17.47-.41l.36-2.54c.59-.24,1.13-.56,1.62-.94l2.39.96c.22.08.47,0,.59-.22l1.92-3.32c.12-.22.07-.47-.12-.61L19.14,12.94zM12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6,3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>OUR SERVICES</div>
          <h2 style={{fontFamily:"'Satoshi','DM Sans',sans-serif",fontSize:'30px',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',color:'#1A1A1A',margin:'0 0 16px'}}>Your AI Marketing Engine — Built & Run For YOU.</h2>
          <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'16px',color:'#777',lineHeight:1.6,margin:0}}>Strategy, automation, custom builds, and the team to run them, all in one place.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'22px',marginBottom:'22px',alignItems:'stretch'}}>
          <AnimSvcCard num="01" title="Content Generation" desc="Generate content that proves your expertise and grows your business." visual={<ContentComposerVis active={card01Active} />} visualRef={card01VisRef} cardRef={card01CardRef} pauseClass={card01Active?'':'vis-paused'} fixedVisH="545px" />
          <AnimSvcCard num="02" title="Creatives & Assets" desc="From product shot to viral video — every creative, done for you." visual={<VideoGridVis expanded={card01Expanded} active={card02Active} />} fixedVisH="545px" cardRef={card02CardRef} pauseClass={card02Active?'':'vis-paused'} />
        </div>
        <div style={{marginBottom:'22px',position:'relative',zIndex:20}}>
          <AnimSvcCard num="03" title="Multi Agent Automation" desc="Custom Multi Agent built to take over your task so you can enjoy the life you deserve." visual={<AgentOrbitalVis />} pinText popVisual />
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'22px'}}>
          <AnimSvcCard num="04" title="Social Media Automation" desc="Why spend too much time when you can automate everything?" visual={<ContentCannonVis active={card04Active} />} cardRef={card04CardRef} pinText fixedVisH="372px" />
          <AnimSvcCard num="05" title="Instant Message Automation" desc="Every message answered — across every platform." visual={<MultiInboxVis active={card05Active} />} cardRef={card05CardRef} pinText fixedVisH="372px" />
        </div>
      </div>
    </section>
  );
}



Object.assign(window, { AnimatedServices, AnimSvcCard, AgentOrbitalVis, RealisticAtom, ContentCannonVis });
