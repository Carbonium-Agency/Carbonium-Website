// Extracted verbatim from ui_kits/website/WebsiteAnimatedServices.jsx
// (ContentComposerVis + AnimSvcCard) with asset paths rebased to this page.
var React = window.React;

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
      s.textContent = '@keyframes aiScan{0%{top:0%;opacity:1}85%{top:100%;opacity:1}100%{top:100%;opacity:0}}@keyframes laserReveal{0%{clip-path:inset(0 0 100% 0)}100%{clip-path:inset(0 0 0% 0)}}@keyframes laserLine{0%{top:0%;opacity:1}90%{top:100%;opacity:1}100%{top:100%;opacity:0}}@keyframes slideFromLeft{from{transform:translateX(-16px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes citedPop{0%{transform:scale(0.7);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}@keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes slideFromBottom{from{transform:translateY(18px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes recBlink{0%,100%{opacity:1}50%{opacity:0}}@keyframes textReveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0% 0 0)}}@keyframes ugcLineIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.vis-paused,.vis-paused *{animation-play-state:paused!important}';
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
                  <img src="assets/pasted-1781872631658-0.png" onLoad={function(){ if (adInnerRef.current) setAdNaturalH(adInnerRef.current.offsetHeight); }} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center center'}} />
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
                      <img src="assets/pasted-1781875944713-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
                      <img src="assets/pasted-1781875951150-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',clipPath:lpStep>=3?undefined:'inset(0 0 100% 0)',animation:lpStep>=3?'laserReveal 2s linear forwards':'none'}} />
                      {lpStep >= 3 && lpStep < 5 && <div style={{position:'absolute',left:0,right:0,height:'2px',background:'linear-gradient(to right,transparent,#00D4FF 40%,#00D4FF 60%,transparent)',boxShadow:'0 0 12px 5px rgba(0,212,255,0.85)',animation:'laserLine 2s linear forwards',pointerEvents:'none'}}></div>}
                    </div>
                    <div style={{flex:1,borderRadius:'8px',overflow:'hidden',height:'200px',background:'#F5F5F5',position:'relative'}}>
                      <img src="assets/pasted-1781875956737-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
                      <img src="assets/pasted-1781875959676-0.png" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',clipPath:lpStep>=3?undefined:'inset(0 0 100% 0)',animation:lpStep>=3?'laserReveal 2s linear forwards':'none'}} />
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
                      {['assets/pasted-1781880325387-0.png','assets/pasted-1781880331439-0.png','assets/pasted-1781880334937-0.png','assets/pasted-1781880340249-0.png','assets/pasted-1781880345398-0.png'].map(function(src,i){
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
                  <video ref={function(el){ if(el){el.muted=true;el.volume=0;el.defaultMuted=true;} }} autoPlay loop muted playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} src="assets/Download.mp4"></video>
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
                      <video ref={function(el){ if(el){el.muted=true;el.volume=0;el.defaultMuted=true;} }} autoPlay loop muted playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} src="assets/13929641-uhd_2160_3840_24fps.mp4"></video>
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
        <div style={{fontSize:'13px',fontWeight:500,color:'#9A9A9A',letterSpacing:'0.06em',marginBottom:tightText?'2px':'10px',fontFamily:'DM Sans,sans-serif'}}>{num}</div>
        <h3 style={{fontSize:tightText?'23px':'26px',fontWeight:700,color:'#0A0A0A',fontFamily:"'Satoshi','DM Sans',sans-serif",marginBottom:tightText?'3px':'8px',lineHeight:tightText?1.15:1.2,letterSpacing:'-0.02em'}}>{title}</h3>
        <p style={{fontSize:tightText?'14px':'15px',color:'#555555',fontFamily:'DM Sans,sans-serif',lineHeight:tightText?1.3:1.6,margin:0}}>{desc}</p>
      </div>
    </div>
  );
}


// Wrapper: drives the composer animation only while the card is in view,
// mirroring the homepage's IntersectionObserver behaviour.
function ContentGenCard(){
  var [active, setActive] = React.useState(true);
  var ref = React.useRef(null);
  React.useEffect(function(){
    var el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ setActive(e.isIntersecting); });
    }, { threshold: 0.2 });
    io.observe(el);
    return function(){ io.disconnect(); };
  }, []);
  return React.createElement(
    'div',
    {
      ref: ref,
      style: {
        background: 'linear-gradient(170deg,#FAFAFA 0%,#F3F3F3 100%)',
        border: 'none',
        borderTop: '1.5px solid rgba(255,255,255,0.88)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0.71px 0.71px -0.67px rgba(0,0,0,.08), 0 1.81px 1.81px -1.33px rgba(0,0,0,.08), 0 3.62px 3.62px -2px rgba(0,0,0,.07), 0 6.87px 6.87px -2.67px rgba(0,0,0,.07), 0 13.65px 13.65px -3.33px rgba(0,0,0,.05), 0 30px 30px -4px rgba(0,0,0,.02), inset 0 1px 0 #FFFFFF',
      }
    },
    React.createElement(
      'div',
      {
        className: active ? '' : 'vis-paused',
        style: {
          height: '714px',
          flexShrink: 0,
          background: '#F5F5F5',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'stretch',
          width: '100%',
          borderRadius: '20px',
        }
      },
      React.createElement(ContentComposerVis, { active: active })
    )
  );
}

Object.assign(window, { ContentComposerVis: ContentComposerVis, AnimSvcCard: AnimSvcCard, ContentGenCard: ContentGenCard });
