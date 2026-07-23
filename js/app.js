(function () {
  var root = document;
  var SVG = {
    spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
    arrow: "M5 12h14 M13 6l6 6-6 6",
    globe:
      "M12 3a9 9 0 100 18 9 9 0 000-18 M3 12h18 M12 3c2.5 2.6 2.5 15.4 0 18 M12 3c-2.5 2.6-2.5 15.4 0 18",
    check: "M20 6L9 17l-5-5",
    checkc: "M12 3a9 9 0 100 18 9 9 0 000-18 M8.5 12.5l2.5 2.5 4.5-5",
    compass: "M12 3a9 9 0 100 18 9 9 0 000-18 M15.5 8.5l-2 5-5 2 2-5z",
    user: "M12 12a4 4 0 100-8 4 4 0 000 8 M5 20c0-3.3 3-6 7-6s7 2.7 7 6",
    mega: "M3 11v2a1 1 0 001 1h2l7 4V6L6 10H4a1 1 0 00-1 1z M16 9a3 3 0 010 6",
    flag: "M5 21V4 M5 4h11l-2 4 2 4H5",
    refresh:
      "M3 12a9 9 0 0115-6.7L21 8 M21 3v5h-5 M21 12a9 9 0 01-15 6.7L3 16 M3 21v-5h5",
    home: "M4 11l8-7 8 7 M6 10v9h12v-9",
    zap: "M13 3L5 13h5l-1 8 8-10h-5z",
    chart: "M4 20V10 M10 20V4 M16 20v-7 M22 20H2",
    edit: "M12 20h9 M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z",
    target:
      "M12 3a9 9 0 100 18 9 9 0 000-18 M12 7a5 5 0 100 10 5 5 0 000-10 M12 11a1 1 0 100 2 1 1 0 000-2",
    bulb: "M9 18h6 M10 21h4 M12 3a6 6 0 00-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0012 3z",
    send: "M22 2L11 13 M22 2l-7 20-4-9-9-4z",
    img: "M4 5h16v14H4z M8.5 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3 M4 16l4-3 3 2 4-3 5 4",
    vid: "M4 6h10v12H4z M14 10l6-3v10l-6-3z",
    txt: "M5 6h14 M5 12h14 M5 18h9",
    out: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
    mail: "M3 6h18v12H3z M3 7l9 6 9-6",
    plus: "M12 5v14 M5 12h14",
    chev: "M6 9l6 6 6-6",
    board: "M4 5h16v14H4z M9.3 5v14 M14.7 5v14",
    list: "M8 6h12 M8 12h12 M8 18h12 M4 6h.01 M4 12h.01 M4 18h.01",
    close: "M6 6l12 12 M18 6L6 18",
    grip: "M9 5h.01 M9 12h.01 M9 19h.01 M15 5h.01 M15 12h.01 M15 19h.01",
    cal: "M4 5h16v15H4z M4 9h16 M8 3v4 M16 3v4",
    bell: "M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.7 21a2 2 0 01-3.4 0",
    search: "M10.5 3a7.5 7.5 0 100 15 7.5 7.5 0 000-15 M21 21l-5.3-5.3",
    star: "M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 17l-5.3 2.8 1.1-6L3.4 9.4l6-.8z",
    upload: "M12 15V4 M8 8l4-4 4 4 M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3",
    mic: "M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3 M5 11a7 7 0 0014 0 M12 18v3 M8 21h8",
    chat: "M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H9l-4 4V6a1 1 0 011-1z M8 10h8 M8 13h5",
    moon: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z",
    sun: "M12 8a4 4 0 100 8 4 4 0 000-8 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.4 1.4 M17.6 17.6L19 19 M19 5l-1.4 1.4 M6.4 17.6L5 19",
  };
  function gLogo(){return '<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>';}
  function LS(){try{return window.localStorage;}catch(e){return null;}}
  function loadProfile(){var s=LS();if(!s)return null;try{return JSON.parse(s.getItem("clarity_profile"));}catch(e){return null;}}
  function loadAccount(){var s=LS();if(!s)return null;try{return JSON.parse(s.getItem("clarity_account"));}catch(e){return null;}}
  function saveAccount(){var s=LS();if(!s)return;try{s.setItem("clarity_account",JSON.stringify(S.account));}catch(e){}}
  function loadTheme(){var s=LS();if(!s)return false;try{return s.getItem("clarity_theme")==="dark";}catch(e){return false;}}
  function saveTheme(){var s=LS();if(!s)return;try{s.setItem("clarity_theme",S.dark?"dark":"light");}catch(e){}}
  function applyTheme(){try{var el=(root.documentElement||document.documentElement);if(el)el.classList[S.dark?"add":"remove"]("dark");}catch(e){}}
  function setSession(v){var s=LS();if(!s)return;try{v?s.setItem("clarity_session","1"):s.removeItem("clarity_session");}catch(e){}}
  function hasSession(){var s=LS();if(!s)return false;try{return s.getItem("clarity_session")==="1";}catch(e){return false;}}
  function fullReset(){var s=LS();if(s){try{s.removeItem("clarity_profile");s.removeItem("clarity_session");s.removeItem("clarity_biz");}catch(e){}}}
  // ---- Multi-business engine ----
  var PBFIELDS=["p","name","sentence","done","twhy","queue","pub","qtext","qedit","qdraft","posts","ownTasks","camp","sel","cols","cardCol","threads","tweak","whySeen","insSeen","insSaved","insDismiss","extra","createdAt","hist","personas","pthreads"];
  function newBizId(){return "b"+Date.now().toString(36)+Math.floor(Math.random()*1e4).toString(36);}
  function makeBiz(){return {id:newBizId(),p:{ind:"other",goal:"customers",aud:"any",tone:"warm",type:"",goalSel:"",goals:[],channels:[],budget:"",loc:"",locs:[]},name:"",sentence:"",done:{},twhy:{},queue:[],pub:{},qtext:{},qedit:{},qdraft:{},posts:{},ownTasks:{},camp:{status:"off"},sel:{},cols:[],cardCol:{},threads:{},tweak:{},whySeen:{},insSeen:false,insSaved:{},insDismiss:{},extra:[],createdAt:"",hist:{},personas:[],pthreads:{}};}
  function bizById(id){for(var i=0;i<S.biz.length;i++)if(S.biz[i].id===id)return S.biz[i];return null;}
  function bizByIdIn(arr,id){for(var i=0;i<arr.length;i++)if(arr[i].id===id)return arr[i];return null;}
  function snapshot(){if(S.cur==null)return;var r=bizById(S.cur);if(!r)return;PBFIELDS.forEach(function(f){r[f]=S[f];});}
  function loadBiz(id){snapshot();var r=bizById(id);if(!r)return;PBFIELDS.forEach(function(f){S[f]=r[f];});normBiz();S.cur=id;S.tab="today";}
  function normBiz(){["done","twhy","pub","qtext","qedit","qdraft","posts","ownTasks","sel","cardCol","threads","tweak","whySeen","wtext","insSaved","insDismiss"].forEach(function(f){if(!S[f]||typeof S[f]!=="object")S[f]={};});if(!Array.isArray(S.queue))S.queue=[];if(!Array.isArray(S.cols))S.cols=[];if(!Array.isArray(S.extra))S.extra=[];if(S.p&&!Array.isArray(S.p.locs))S.p.locs=S.p.loc?[S.p.loc]:[];if(!S.hist||typeof S.hist!=="object")S.hist={};if(!S.createdAt){var _cd=new Date();_cd.setDate(_cd.getDate()-21);S.createdAt=isoOf(_cd);}if(S.insSeen===undefined)S.insSeen=true;if(!S.camp||typeof S.camp!=="object")S.camp={status:"off"};if(!S.p||typeof S.p!=="object")S.p={ind:"other",goal:"customers",aud:"any",tone:"warm",type:"",goalSel:"",channels:[],budget:"",loc:""};if(!Array.isArray(S.personas)||!S.personas.length||!S.personas[0].moves)S.personas=seedPersonas();if(!S.pthreads||typeof S.pthreads!=="object")S.pthreads={};}
  function blankWorking(){S.p={ind:"other",goal:"customers",aud:"any",tone:"warm",type:"",goalSel:"",goals:[],channels:[],budget:"",loc:"",locs:[]};S.name="";S.sentence="";S.done={};S.twhy={};S.queue=[];S.pub={};S.qtext={};S.qedit={};S.qdraft={};S.posts={};S.ownTasks={};S.camp={status:"off"};S.sel={};S.cols=[];S.cardCol={};S.threads={};S.tweak={};S.whySeen={};S.wtext={};S.insSeen=false;S.insSaved={};S.insDismiss={};S.extra=[];S.createdAt="";S.hist={};S.personas=[];S.pthreads={};S.website="";S.useWeb=false;S.why=false;S.helping=false;S.helpOpen=false;S.suggestion="";S.step=1;}
  function deriveName(sent,ind){var t=(sent||"").trim();if(t){t=t.replace(/^(i\s+(?:run|own|have|am|bake|make|coach|sell|do|offer|build|teach|help)\s+(?:a|an|my|the)?\s*)/i,"").replace(/\s+(?:and|but|so|because|that|which)\b.*$/i,"").replace(/,.*$/,"").replace(/[.!?].*$/,"").trim();t=t.split(/\s+/).slice(0,4).join(" ").trim();if(t)return t.charAt(0).toUpperCase()+t.slice(1);}return (typeof INDS!=="undefined"&&INDS[ind])||"My business";}
  function initials(nm){nm=(nm||"").trim();if(!nm)return "YB";var w=nm.split(/\s+/);return ((w[0][0]||"")+(w[1]?w[1][0]:(w[0][1]||""))).toUpperCase();}
  function saveAll(){snapshot();var s=LS();if(!s)return;try{s.setItem("clarity_biz",JSON.stringify({list:S.biz,cur:S.cur,email:S.email||""}));}catch(e){}}
  function loadBizData(){var s=LS();if(!s)return null;try{return JSON.parse(s.getItem("clarity_biz"));}catch(e){return null;}}
  function finalizeBiz(){var b=makeBiz();PBFIELDS.forEach(function(f){b[f]=S[f];});if(!b.name)b.name=deriveName(S.sentence,S.p.ind);b.insSeen=false;b.createdAt=todayISO();S.createdAt=b.createdAt;b.hist={};S.hist={};S.biz.push(b);S.cur=b.id;S.name=b.name;S.insSeen=false;saveAll();setSession(true);S.screen="insights";S.tab="today";render();toast("Now advising "+b.name);}
  function bootstrap(){var acc=loadAccount();if(acc)S.account=Object.assign(S.account||{},acc);S.dark=loadTheme();applyTheme();var data=loadBizData();if(data&&data.list&&data.list.length){S.biz=data.list;S.email=data.email||"";var cur=data.cur;if(!bizByIdIn(S.biz,cur))cur=S.biz[0].id;loadBiz(cur);S.screen=hasSession()?"app":"login";S.tab="today";return;}var prof=loadProfile();if(prof&&prof.p){var b=makeBiz();b.p=prof.p;b.sentence=prof.sentence||"";b.name=prof.name||deriveName(prof.sentence,prof.p.ind);S.biz=[b];S.email=prof.email||"";loadBiz(b.id);S.screen=hasSession()?"app":"login";S.tab="today";return;}S.screen="welcome";}
  function ico(n, cls) {
    return (
      '<svg class="' +
      (cls || "ic") +
      '" viewBox="0 0 24 24">' +
      SVG[n]
        .split(" M")
        .map(function (p, i) {
          return '<path d="' + (i ? "M" : "") + p + '"/>';
        })
        .join("") +
      "</svg>"
    );
  }
  function mk(size) {
    return (
      '<span class="mark m" style="width:' +
      size +
      "px;height:" +
      size +
      'px"><svg viewBox="0 0 24 24" style="width:' +
      Math.round(size * 0.55) +
      "px;height:" +
      Math.round(size * 0.55) +
      'px;stroke:#fff;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/></svg></span>'
    );
  }
  var ARCH = {
    food: {
      label: "Local food & drink",
      channels: ["Instagram", "Local partnerships", "Email"],
      persona: {
        name: "The neighbourhood regular",
        desc: "Lives nearby, values freshness and story, happy to pay a little more for something made with care.",
      },
      pos: "Win on craft and community — not convenience or price.",
      insight:
        "Your real competition isn’t other bakeries, it’s convenience — so I’ve built your plan around craft and story.",
    },
    saas: {
      label: "Software / SaaS",
      channels: ["LinkedIn", "Content & SEO", "Email"],
      persona: {
        name: "The time-poor operator",
        desc: "Drowning in tools, allergic to hype, buys what visibly saves hours in the first week.",
      },
      pos: "Sell the hours saved, not the feature list.",
      insight:
        "Buyers don’t want features, they want hours back — that’s what your plan leads with.",
    },
    fitness: {
      label: "Fitness / wellness",
      channels: ["Instagram", "TikTok", "Community"],
      persona: {
        name: "The comeback starter",
        desc: "Has tried and stopped before; wants belief and a plan more than a discount.",
      },
      pos: "Sell the identity shift, not the workout.",
      insight:
        "People don’t need more motivation, they need a week-one plan they can’t fail — that’s your hook.",
    },
    shop: {
      label: "Online shop / product",
      channels: ["Instagram", "TikTok", "Email"],
      persona: {
        name: "The considered browser",
        desc: "Saves before they buy, reads reviews, converts when the story and the proof line up.",
      },
      pos: "Win on story and proof, not on being cheapest.",
      insight:
        "You win on story and proof, not price — so the plan points at both.",
    },
    services: {
      label: "Services / clinic",
      channels: ["Instagram", "Google profile", "LinkedIn"],
      persona: {
        name: "The cautious researcher",
        desc: "Choosing a person to trust, not a product. Wants evidence, credibility and zero risk.",
      },
      pos: "Sell trust and outcomes, not hours or process.",
      insight:
        "Your clients are choosing someone to trust, not a service — so credibility leads everything.",
    },
    creator: {
      label: "Creator / coach",
      channels: ["YouTube", "Email", "Instagram"],
      persona: {
        name: "The aspiring learner",
        desc: "Follows for free value, buys when they believe you can get them a specific result.",
      },
      pos: "Sell the transformation, not the content.",
      insight:
        "Audiences buy the transformation, not the content — so the plan points straight there.",
    },
    other: {
      label: "Your business",
      channels: ["Instagram", "Email", "Word of mouth"],
      persona: {
        name: "Your ideal customer",
        desc: "The person who feels the problem you solve most sharply and can act on it soonest.",
      },
      pos: "Win on the one thing you do better than anyone nearby.",
      insight:
        "We’ll win on the one thing you do better than anyone nearby — the plan builds from there.",
    },
  };
  // ---- Personas (2–3 per business, Clara-seeded, user-editable) ----
  var PERSONAS = {
    food: [
      { name: "The neighbourhood regular", desc: "Lives nearby, values freshness and story, happy to pay a little more for something made with care.", wants: "somewhere that feels like theirs, made with care", fear: "paying more for something that turns out ordinary", where: "Instagram and local Facebook groups", spend: "£8–15 a visit, more at weekends", finds: "walking past, and Instagram", moves: "warmth, story, and seeing regulars love it" },
      { name: "The weekend treat-seeker", desc: "Comes out on Saturdays for something special, follows food accounts, shares what looks good.", wants: "a little weekend ritual worth photographing", fear: "queuing for something that disappoints", where: "Instagram and TikTok", spend: "£15–30 on a weekend treat", finds: "Instagram and TikTok reels", moves: "something photogenic worth the trip" },
      { name: "The gifting planner", desc: "Buys for birthdays and office treats, needs it to look thoughtful and arrive on time.", wants: "an easy order that makes them look thoughtful", fear: "it arriving late or looking cheap", where: "Google and word of mouth", spend: "£25–60 per order", finds: "Google and recommendations", moves: "looks thoughtful and turns up on time" },
    ],
    saas: [
      { name: "The time-poor operator", desc: "Drowning in tools, allergic to hype, buys what visibly saves hours in the first week.", wants: "hours back and one less tab open", fear: "another tool that adds work instead of removing it", where: "LinkedIn and peer communities", spend: "$30–100/mo, usually expensed", finds: "LinkedIn and peer Slack groups", moves: "a clear before/after of hours saved" },
      { name: "The cautious evaluator", desc: "Compares options carefully, reads docs and reviews, needs proof before committing budget.", wants: "proof it works before they stake their name on it", fear: "picking wrong and owning the fallout", where: "LinkedIn and review sites", spend: "$100–500/mo, needs sign-off", finds: "review sites and comparison searches", moves: "proof, docs, and a low-risk trial" },
      { name: "The scaling founder", desc: "Growing fast, wants something that won't break at 10x, cares about roadmap and support.", wants: "something that grows with them, not against them", fear: "outgrowing it in six months", where: "founder communities and referrals", spend: "$500+/mo and rising", finds: "founder communities and referrals", moves: "roadmap, support, and it scaling with them" },
    ],
    fitness: [
      { name: "The comeback starter", desc: "Has tried and stopped before; wants belief and a plan more than a discount.", wants: "a week-one plan they genuinely can't fail", fear: "starting again and quitting again", where: "Instagram and TikTok", spend: "£20–50/mo", finds: "Instagram and TikTok", moves: "belief and a week-one plan they can't fail" },
      { name: "The busy parent", desc: "Wants to feel strong again but has 30 minutes, not two hours, and no time to waste.", wants: "results that fit around real life", fear: "committing to something they can't keep up", where: "Instagram and local groups", spend: "£30–60/mo", finds: "Instagram and local groups", moves: "results that fit 30 minutes around real life" },
      { name: "The goal-driven improver", desc: "Already active, chasing a specific goal — a race, a number, a look — and wants structure.", wants: "a clear plan to hit a specific target", fear: "plateauing or training without direction", where: "YouTube and Instagram", spend: "£50–120/mo", finds: "YouTube and Instagram", moves: "a clear plan to hit a specific target" },
    ],
    shop: [
      { name: "The considered browser", desc: "Saves before they buy, reads reviews, converts when the story and the proof line up.", wants: "to feel sure before they spend", fear: "buyer's remorse on something they can't return", where: "Instagram and TikTok", spend: "£25–80 per order", finds: "Instagram and TikTok", moves: "reviews, proof, and a story that lines up" },
      { name: "The gift buyer", desc: "Shopping for someone else, needs it to feel special and land on time.", wants: "a gift that looks thoughtful and arrives on time", fear: "it turning up late or looking cheap", where: "Instagram and Google", spend: "£30–70 per gift", finds: "Instagram and Google", moves: "it looks special and lands on time" },
      { name: "The trend follower", desc: "Discovers through what's hot right now, buys fast when something catches the moment.", wants: "to be early on something that's about to blow up", fear: "missing the moment or looking behind", where: "TikTok and Instagram", spend: "£15–50, often impulse", finds: "TikTok and Instagram", moves: "being early on something about to blow up" },
    ],
    services: [
      { name: "The cautious researcher", desc: "Choosing a person to trust, not a product. Wants evidence, credibility and zero risk.", wants: "to feel safe they've picked the right person", fear: "trusting the wrong provider and regretting it", where: "Google and your profile", spend: "£200–2,000+ per engagement", finds: "Google and your profile", moves: "evidence, credibility, and zero risk" },
      { name: "The referred lead", desc: "Came from a recommendation, half-sold already, just needs reassurance to book.", wants: "quick proof the referral was right about you", fear: "the recommendation not living up to the hype", where: "referrals and your website", spend: "£200–2,000+", finds: "referrals and your website", moves: "quick reassurance the referral was right" },
      { name: "The comparison shopper", desc: "Getting a few quotes, weighing price against trust, deciding who feels most credible.", wants: "clear reasons you're worth choosing over cheaper options", fear: "overpaying, or under-paying and regretting it", where: "Google and LinkedIn", spend: "£150–1,500", finds: "Google and LinkedIn", moves: "clear reasons you beat the cheaper option" },
    ],
    creator: [
      { name: "The aspiring learner", desc: "Follows for free value, buys when they believe you can get them a specific result.", wants: "to believe you can get them a specific result", fear: "buying another course they never finish", where: "YouTube and Instagram", spend: "£20–200 per course", finds: "YouTube and Instagram", moves: "believing you'll get them a specific result" },
      { name: "The loyal superfan", desc: "Watches everything you make, ready to buy — they just need you to actually ask.", wants: "more of you, and a way to support you", fear: "missing something you released", where: "email and Instagram", spend: "£50–500+/yr", finds: "email and Instagram", moves: "more of you, and a way to support you" },
      { name: "The skeptical newcomer", desc: "Just found you, not sure you're the real deal yet, needs a quick win to trust you.", wants: "a fast reason to believe you're worth their time", fear: "wasting time on another overhyped creator", where: "TikTok and YouTube", spend: "£0 at first", finds: "TikTok and YouTube", moves: "a fast free win that proves you're worth it" },
    ],
    other: [
      { name: "Your ideal customer", desc: "The person who feels the problem you solve most sharply and can act on it soonest.", wants: "the one thing you do better than anyone nearby", fear: "settling for a worse option because they didn't know about you", where: "Instagram and word of mouth", spend: "varies", finds: "Instagram and word of mouth", moves: "the one thing you do better than anyone nearby" },
      { name: "The ready-to-act buyer", desc: "Already looking for what you offer, just needs to find you and trust you quickly.", wants: "to solve their problem now, with someone they trust", fear: "choosing wrong under time pressure", where: "Google and referrals", spend: "ready to spend now", finds: "Google and referrals", moves: "solving it now with someone they trust" },
      { name: "The curious follower", desc: "Interested but not ready yet, warming up until the timing or the proof is right.", wants: "to keep learning until the moment is right", fear: "committing before they're sure", where: "Instagram and email", spend: "not spending yet", finds: "Instagram and email", moves: "learning until the timing is right" },
    ],
  };
  function seedPersonas() {
    var src = PERSONAS[S.p.ind] || PERSONAS.other;
    return src.map(function (p, i) { return { id: "p" + i, name: p.name, desc: p.desc, wants: p.wants, fear: p.fear, where: p.where, spend: p.spend, finds: p.finds, moves: p.moves }; });
  }
  // deterministic synthetic headline stats for a persona (illustrative)
  function personaStats(id) {
    var l = personasList(), idx = 0;
    for (var i = 0; i < l.length; i++) if (l[i].id === id) idx = i;
    var seed = (idx + 1) * 37;
    var shares = l.map(function (_, k) { return 30 + ((k + 1) * 53) % 45; });
    var tot = shares.reduce(function (a, b) { return a + b; }, 0);
    return {
      share: Math.round((shares[idx] / tot) * 100),
      engage: 4 + (seed % 7) + Math.round((seed % 10) / 10 * 10) / 10,
      convert: 1 + (seed % 5),
      fit: 68 + (seed % 28),
    };
  }
  function personasList() {
    if (!Array.isArray(S.personas) || !S.personas.length) S.personas = seedPersonas();
    return S.personas;
  }
  function personaById(id) {
    var l = personasList();
    for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i];
    return l[0];
  }
  function pickPersonaId(i) {
    var l = personasList();
    if (!l.length) return null;
    return l[(((i || 0) % l.length) + l.length) % l.length].id;
  }
  function personaFor(i) {
    var post = S.posts[i];
    if (post && post.personaId) return personaById(post.personaId);
    return personaById(pickPersonaId(i));
  }
  function personaWhy(persona, plat) {
    if (!persona) return "";
    return "This speaks to " + persona.name.replace(/^The /, "the ") + " — they want " + persona.wants + (plat ? ", and " + plat + " is where they are" : "") + ".";
  }
  // Clara matches a finished (user-created) post to the best-fit persona
  function bestPersonaFor(post, task) {
    var l = personasList();
    var text = (((task && task.title) || "") + " " + ((task && task.body) || "") + " " + ((post && post.caption) || "") + " " + ((post && post.brief && post.brief.message) || "")).toLowerCase();
    var plat = ((post && post.platform) || "").toLowerCase();
    var best = l[0], bestScore = -1;
    l.forEach(function (p) {
      var bag = (p.wants + " " + p.moves + " " + p.desc + " " + p.where + " " + p.finds).toLowerCase();
      var seen = {}, score = 0;
      bag.split(/[^a-z]+/).forEach(function (w) { if (w.length > 3 && !seen[w] && text.indexOf(w) >= 0) { seen[w] = 1; score++; } });
      if (plat && (p.where.toLowerCase().indexOf(plat) >= 0 || p.finds.toLowerCase().indexOf(plat) >= 0)) score += 2;
      if (score > bestScore) { bestScore = score; best = p; }
    });
    return { id: best.id, weak: bestScore < 2 };
  }
  // when nothing fits, Clara builds a persona from the post itself
  function newPersonaFromPost(post, task) {
    var l = personasList();
    var kw = (((task && task.title) || "this content").replace(/[^a-zA-Z ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")).toLowerCase();
    var np = {
      id: "p" + Date.now().toString(36),
      name: "The " + (kw || "new") + " crowd",
      desc: "A segment Clara built from this specific post, because none of your existing personas matched it well.",
      wants: "content that speaks to the moment this post is about",
      fear: "generic content that doesn't feel made for them",
      where: (post && post.platform) || "your channels",
      spend: "still learning",
      finds: (post && post.platform) || "your channels",
      moves: "posts like this one",
      custom: true,
    };
    l.push(np);
    return np.id;
  }
  function mapInd(t) {
    t = (t || "").toLowerCase();
    if (/bak|cafe|coffee|restaurant|food|kitchen|brew|deli/.test(t))
      return "food";
    if (
      /saas|software|app|tech|platform|b2b|startup|api|dev|productbox/.test(t)
    )
      return "saas";
    if (/gym|fitness|coach|train|wellness|yoga|pilates|nutri/.test(t))
      return "fitness";
    if (
      /shop|store|ecom|brand|product|dtc|boutique|jewel|cloth|candle|sell/.test(
        t,
      )
    )
      return "shop";
    if (
      /consult|agency|clinic|law|account|dental|dentist|salon|therap|service|implant/.test(
        t,
      )
    )
      return "services";
    if (/creator|course|content|influencer|newsletter|podcast|youtub/.test(t))
      return "creator";
    return "other";
  }
  function mapGoal(t) {
    t = (t || "").toLowerCase();
    if (/revenue|sales|turnover|profit|money/.test(t)) return "revenue";
    if (/compet|beat|stand out|differen|rival|edge|crowd/.test(t))
      return "edge";
    if (/aware|visib|known|follower|reach|brand aware/.test(t))
      return "visibility";
    return "customers";
  }
  function mapAud(t) {
    t = (t || "").toLowerCase();
    if (/b2b|business|compan|enterprise|team/.test(t)) return "smb";
    if (/parent|family|mum|dad|kid/.test(t)) return "parents";
    if (/local|near|city|town|manchester|london|leeds/.test(t)) return "local";
    if (/young|professional/.test(t)) return "prof";
    return "";
  }
  var INDS = {
    food: "Local food & drink",
    saas: "Software / SaaS",
    fitness: "Fitness / wellness",
    shop: "Online shop / product",
    services: "Services / clinic",
    creator: "Creator / coach",
    other: "Something else",
  };
  var GOALS = {
    customers: "Get more customers",
    visibility: "Get more visible",
    edge: "Stand out from rivals",
    revenue: "Grow revenue",
  };
  var AUDS = {
    local: "Local customers",
    smb: "Small businesses",
    prof: "Young professionals",
    parents: "Parents & families",
    any: "A wide audience",
  };
  var TONES = {
    warm: "Warm & personal",
    bold: "Bold & punchy",
    pro: "Professional & trusted",
    playful: "Playful & fun",
  };
  var TONE_DEF = {
    food: "warm",
    saas: "pro",
    fitness: "bold",
    shop: "warm",
    services: "pro",
    creator: "playful",
    other: "warm",
  };
  var AUD_DEF = {
    food: "local",
    saas: "smb",
    fitness: "prof",
    shop: "any",
    services: "local",
    creator: "any",
    other: "any",
  };
  var EX = [
    "I run a small dental clinic and want more implant patients",
    "I bake sourdough in Leeds and sell at markets",
    "B2B software for accountants — need to stand out",
    "I make candles and sell them online",
  ];
  // ---- Finalized onboarding option sets (Q1,Q2,Q4,Q5) ----
  var BT = { small: "Small business", ecom: "Online store or ecommerce brand", service: "Service-based business", saas: "SaaS or tech company", creator: "Creator or personal brand", agency: "Agency or consultant", nonprofit: "Nonprofit", other: "Other" };
  var BT_IND = { small: "other", ecom: "shop", service: "services", saas: "saas", creator: "creator", agency: "services", nonprofit: "other", other: "other" };
  var IND_BT = { food: "small", fitness: "service", shop: "ecom", services: "service", saas: "saas", creator: "creator", other: "other" };
  var GT = { leads: "Get more leads", sales: "Increase sales", understand: "Understand my customers better", content: "Improve my content or marketing", launch: "Launch a new product or service", test: "Test ideas before I spend money", competitors: "Keep up with competitors", plan: "Build a growth plan from scratch" };
  var GT_GOAL = { leads: "customers", sales: "revenue", understand: "customers", content: "visibility", launch: "revenue", test: "visibility", competitors: "edge", plan: "customers" };
  var GOAL_GT = { customers: "leads", revenue: "sales", visibility: "content", edge: "competitors" };
  var BUD = { "0-250": "$0–$250", "250-1k": "$250–$1,000", "1k-5k": "$1,000–$5,000", "5k-15k": "$5,000–$15,000", "15k+": "$15,000+", unsure: "I’m not sure yet" };
  var CHANS = ["Website", "Instagram", "Facebook", "TikTok", "LinkedIn", "Email", "Google Ads", "Meta Ads", "SEO or blog", "In-person sales", "Referrals or word of mouth", "I’m not marketing yet"];
  var POSTABLE_CH = { Instagram: 1, LinkedIn: 1, TikTok: 1, Facebook: 1, Email: 1, "SEO or blog": 1 };
  // ---- Depth content for the "Clara's thinking" panel ----
  var DEEP = {
    food: { market: "Local food discovery has moved to social and search — most new customers find places like yours on Instagram or Google before they ever walk in.", rivals: "Most nearby spots compete on price or convenience and neglect story. That is the gap you own.", sources: ["Local Consumer Review Trends 2025", "Instagram for Local Business — usage study"] },
    saas: { market: "Buyers self-educate long before they talk to sales. The winning play is proving value fast, not gating it behind a demo.", rivals: "Competitors lead with feature lists. Buyers are drowning in features and buying outcomes.", sources: ["B2B Buyer Behaviour Report 2025", "SaaS Onboarding Benchmarks"] },
    fitness: { market: "Demand spikes at fresh-start moments like new year and spring, and trust converts better than discounts.", rivals: "Most programs sell motivation. What converts is a week-one plan people cannot fail.", sources: ["Wellness Consumer Trends 2025", "Fitness Retention Study"] },
    shop: { market: "Shoppers save before they buy and convert on proof. Reviews and real customer content move more than a lower price.", rivals: "Rivals race to the bottom on price. You win on story and social proof.", sources: ["Ecommerce Conversion Report 2025", "Social Proof & UGC Study"] },
    services: { market: "Clients are choosing a person to trust, not a product. Credibility signals and reviews drive the enquiry.", rivals: "Competitors sell hours and process. Clients buy trust and outcomes.", sources: ["Local Services Trust Report 2025", "Google Business Profile Impact Study"] },
    creator: { market: "Audiences follow for free value and buy the transformation. A clear promise outperforms simply making more content.", rivals: "Most creators sell content. Audiences pay for a specific result.", sources: ["Creator Economy Report 2025", "Audience-to-Customer Study"] },
    other: { market: "Your customers find you where they already spend attention. The fastest wins come from doing one channel well before adding more.", rivals: "The field is crowded. Winning means owning the one thing you do better than anyone nearby.", sources: ["SMB Marketing Benchmarks 2025", "Channel Focus Study"] },
  };
  var S = {
    screen: "welcome",
    sentence: "",
    website: "",
    useWeb: false,
    name: "",
    p: { ind: "other", goal: "customers", aud: "any", tone: "warm", type: "", goalSel: "", goals: [], channels: [], budget: "", loc: "", locs: [] },
    why: false,
    helping: false,
    helpOpen: false,
    suggestion: "",
    tab: "today",
    done: {},
    twhy: {},
    queue: [],
    pub: {},
    qtext: {},
    qedit: {},
    qdraft: {},
    cFilter: "all",
    createView: "list",
    createDetail: null,
    cMonth: null,
    composing: false,
    compose: { type: "", platform: "", angleSel: null, ownText: "", angles: [], format: "", brief: null, ctrl: null },
    ownTasks: {},
    posts: {},
    camp: { status: "off" },
    sel: {},
    publishing: null,
    biz: [],
    cur: null,
    switch: false,
    email: "",
    todayView: "list",
    brain: false,
    step: 1,
    cols: [],
    cardCol: {},
    createdAt: "",
    hist: {},
    day: "today",
    dayTo: "",
    rangeAnchor: "",
    cal: false,
    calMonth: null,
    threads: {},
    tweak: {},
    whySeen: {},
    wtext: {},
    whyOpen: null,
    locInput: "",
    locOpen: false,
    notifOpen: false,
    acctOpen: false,
    dark: false,
    emailOpen: false,
    proposal: {},
    propEdit: {},
    todoOpen: false,
    todoTitle: "",
    todoBody: "",
    account: { fullName: "", email: "", phone: "", title: "", tz: "(GMT+00:00) London" },
    trail: ["today"],
    resultView: "list",
    resultPost: null,
    rq: "",
    rStatus: "all",
    rPlat: "all",
    rType: "all",
    rDate: "all",
    insSeen: false,
    insSaved: {},
    insDismiss: {},
    extra: [],
    insDetail: null,
    personas: [],
    pthreads: {},
    pchat: null,
    pEdit: null,
    cTag: "all",
  };
  var app = root.querySelector("#app"),
    toastEl = root.querySelector("#toast");
  function arch() {
    return ARCH[S.p.ind] || ARCH.other;
  }
  function esc(s) {
    return (s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function nameOf() {
    return S.name || "there";
  }
  function toast(m) {
    toastEl.textContent = m;
    toastEl.classList.add("show");
    clearTimeout(toastEl._h);
    toastEl._h = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 1800);
  }
  function parse() {
    var t = S.useWeb ? S.website : S.sentence;
    var indText = mapInd(t);
    if (indText !== "other") S.p.ind = indText;
    else S.p.ind = BT_IND[S.p.type] || S.p.ind || "other";
    S.p.goal = GT_GOAL[S.p.goalSel] || S.p.goal || "customers";
    S.p.aud = mapAud(t) || AUD_DEF[S.p.ind] || "any";
    S.p.tone = TONE_DEF[S.p.ind] || "warm";
    if (!(S.p.locs && S.p.locs.length)) {
      var lc = parseLoc(t);
      if (lc) {
        S.p.locs = [lc];
        S.p.loc = lc;
      }
    } else {
      S.p.loc = S.p.locs[0];
    }
  }
  function parseLoc(t) {
    var m = (t || "").match(
      /\b(?:in|based in|located in|near|around|from)\s+([A-Z][a-zA-Z.'-]+(?:\s+[A-Z][a-zA-Z.'-]+)?)/,
    );
    return m ? m[1].trim() : "";
  }
  function detectLoc() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      var city = tz.split("/").pop().replace(/_/g, " ");
      var lang =
        (typeof navigator !== "undefined" &&
          (navigator.language || navigator.userLanguage)) ||
        "";
      var region = lang.split("-")[1];
      var country = "";
      if (region) {
        try {
          country = new Intl.DisplayNames(["en"], { type: "region" }).of(
            region,
          );
        } catch (e) {}
      }
      if (city && country) return city + ", " + country;
      return city || country || "";
    } catch (e) {
      return "";
    }
  }
  function draftSentence() {
    var ind = BT_IND[S.p.type] || "other";
    return {
      food: "Local people who care about quality and story over the cheapest option — I sell them freshly made food and drink they can feel good about.",
      shop: "Online shoppers who research and read reviews before they buy — I sell them a well-made product with a story and proof they can trust.",
      services: "Local clients who want someone they can trust, not the cheapest quote — I sell them a service that takes a real problem off their plate.",
      saas: "Busy teams drowning in tools and short on time — I sell them software that visibly saves them hours in the first week.",
      creator: "People who follow me for free value and want a specific result — I sell them a course or product that gets them there faster.",
      other: "The customers who feel the problem I solve most sharply — I sell them the thing that makes that problem go away.",
    }[ind];
  }
  function genName() {
    var ind = BT_IND[S.p.type] || "other";
    var pools = {
      food: ["Hearth & Crumb", "The Daily Loaf", "Copper Kitchen", "Maple & Rye"],
      shop: ["Northlight Goods", "Everyday & Co", "Willow & Pine", "The Make Shop"],
      services: ["Clearpath", "Trueline", "Anchor & Co", "Bright Path"],
      saas: ["Flowstate", "Clarity Labs", "Northstack", "Tidewave"],
      creator: ["The Signal", "Craft & Co", "Bold Notes", "Framewise"],
      other: ["Northbound", "Everline", "Bright & Co", "Kindred"],
    };
    var pool = pools[ind] || pools.other;
    var seed = ((S.sentence || "").length + (S.p.loc || "").length + (S.name || "").length + 1) % pool.length;
    return pool[seed];
  }
  var LOC_OPTS = ["United Kingdom", "United States", "Canada", "Australia", "Ireland", "London", "Manchester", "Leeds", "Birmingham", "New York", "Dubai", "Online / nationwide"];
  function locField() {
    var chips = (S.p.locs || [])
      .map(function (l) {
        return '<span class="locchip">' + esc(l) + '<button class="locx" data-a="locdel" data-k="' + esc(l) + '" aria-label="Remove">' + ico("close") + "</button></span>";
      })
      .join("");
    var remaining = LOC_OPTS.filter(function (o) { return (S.p.locs || []).indexOf(o) < 0; });
    var menu = S.locOpen
      ? '<div class="loc-ov" data-a="locclose"></div><div class="locmenu">' +
        (remaining.length
          ? remaining.map(function (o) { return '<button class="locopt" data-a="locpick" data-k="' + esc(o) + '">' + esc(o) + "</button>"; }).join("")
          : '<div class="locmenu-empty">Type your own above and hit add</div>') +
        "</div>"
      : "";
    return (
      (S.p.locs && S.p.locs.length ? '<div class="locchips">' + chips + "</div>" : "") +
      '<div class="locwrap' + (S.locOpen ? " open" : "") + '"><div class="locadd"><input class="webinp wide" data-locadd placeholder="Add a city or country…" autocomplete="off" value="' + esc(S.locInput || "") +
      '"><button class="loc-caret' + (S.locOpen ? " open" : "") + '" data-a="locdrop" aria-label="Suggestions">' + ico("chev") +
      '</button><button class="btn sm loc-addbtn" data-a="locadd" aria-label="Add">' + ico("plus") + "</button></div>" + menu + "</div>"
    );
  }
  function locLabel() {
    var l = S.p.locs || [];
    return l.length ? l.join(", ") : S.p.loc || "";
  }
  function primaryChannel() {
    var ch = S.p.channels || [];
    for (var i = 0; i < ch.length; i++) if (POSTABLE_CH[ch[i]]) return ch[i];
    return arch().channels[0];
  }
  function prefillLoc() {
    if (!S.p.locs) S.p.locs = [];
    if (S.p.locs.length) return;
    var fromText = parseLoc(S.useWeb ? S.website : S.sentence);
    var guess = fromText || detectLoc();
    if (guess) {
      S.p.locs = [guess];
      S.p.loc = guess;
      S.p.locAuto = true;
    }
  }
  function firstMove() {
    var a = arch(),
      ch = primaryChannel(),
      g = S.p.goal;
    var m = {
      customers: {
        t: "Introduce yourself, problem-first",
        b:
          "A short " +
          ch +
          " post that opens with the problem you solve — not your menu of features.",
      },
      visibility: {
        t: "Post your signature take",
        b:
          "A strong point of view on " +
          ch +
          ", written to be shared, not just seen.",
      },
      edge: {
        t: "Claim the ground rivals ignore",
        b:
          "A " + ch + " piece on the one thing competitors near you get wrong.",
      },
      revenue: {
        t: "Point attention at your best offer",
        b:
          "Lead " + ch + " this week with the one thing you most want to sell.",
      },
    };
    return m[g] || m.customers;
  }
  function suggest(t) {
    t = (t || "").trim().replace(/\s+/g, " ");
    var whatPart = t
      .replace(/,?\s*(and\s+)?my main goal is to\b.*$/i, "")
      .replace(
        /\b(and\s+)?(i\s+)?(want|need|looking to|hoping to|trying to|so i can|to get)\b.*$/i,
        "",
      )
      .replace(/[\s,.;:—–-]+$/, "")
      .trim();
    if (!whatPart) whatPart = t.replace(/[\s,.;:—–-]+$/, "");
    whatPart = whatPart.charAt(0).toUpperCase() + whatPart.slice(1);
    var ge =
      /\b(want|need|goal|grow|attract|more|sales|revenue|visib|aware|stand out|compet|reach|customer|patient|client|book|lead|follower)\b/i.test(
        t,
      );
    if (ge) {
      var gp = {
        customers: "bring in more customers",
        visibility: "become more visible",
        edge: "stand out from competitors",
        revenue: "grow revenue",
      }[mapGoal(t)];
      return whatPart + ", and my main goal is to " + gp + ".";
    }
    return whatPart + ".";
  }
  function helpBlock() {
    if (S.helping)
      return '<div class="helping"><span class="spin"></span> Clara’s tidying your wording…</div>';
    if (S.helpOpen) {
      var same =
        (S.suggestion || "").trim().toLowerCase() ===
        (S.sentence || "").trim().toLowerCase();
      if (same)
        return (
          '<div class="compare"><div class="ch">' +
          ico("check") +
          ' That already reads clearly</div><div class="note">Nothing to tidy — I didn’t change anything. You’re good to build your plan.</div><div class="oact2"><button class="keep" data-a="keepmine">Got it</button></div></div>'
        );
      return (
        '<div class="compare"><div class="ch">' +
        ico("spark") +
        ' A clearer way to say it — your call</div><div class="opt2 sug"><div class="otext">' +
        esc(S.suggestion) +
        '</div></div><div class="note">' +
        ico("check") +
        ' I only tidied your wording — I didn’t add anything you didn’t say.</div><div class="oact2"><button class="use" data-a="usesug">Use this</button><button class="keep" data-a="keepmine">Keep mine</button></div></div>'
      );
    }
    return (
      '<button class="helpbtn" data-a="help">' +
      ico("spark") +
      " Help me describe it</button>"
    );
  }
  function optRow(field, key, label) {
    var on = S.p[field] === key;
    return (
      '<button class="optrow' +
      (on ? " on" : "") +
      '" data-a="pickone" data-t="' +
      field +
      '" data-k="' +
      key +
      '"><span class="opt-l">' +
      label +
      '</span><span class="opt-r">' +
      (on ? ico("check") : "") +
      "</span></button>"
    );
  }
  var STEPS = [
    { q: "What kind of business are you growing?", sub: "Pick the closest — you can refine it later." },
    { q: "What do you want Clarity to help you with first?", sub: "Pick all that apply — Clara focuses on these." },
    { q: "Who is your ideal customer, and what do you sell them?", sub: "A line or two is plenty. Type it, or let Clara draft one you can tweak." },
    { q: "What do you call your business?", sub: "Your business name — type it, or let Clara suggest one." },
    { q: "Where are you currently marketing your business?", sub: "Select all that apply." },
    { q: "What monthly marketing budget should Clarity plan around?", sub: "Choose one. Clara plans within it." },
    { q: "Where is your business based?", sub: "City or country. This helps Clara surface local suggestions, timing and market signals." },
  ];
  function vSteps() {
    var n = S.step,
      total = STEPS.length,
      meta = STEPS[n - 1],
      inner = "";
    if (n === 1) {
      for (var k1 in BT) inner += optRow("type", k1, BT[k1]);
      inner = '<div class="optlist">' + inner + "</div>";
    } else if (n === 2) {
      var gc = "";
      for (var k2 in GT) {
        var on2 = (S.p.goals || []).indexOf(k2) >= 0;
        gc +=
          '<button class="mchip' + (on2 ? " on" : "") + '" data-a="goalpick" data-k="' + k2 + '">' +
          (on2 ? ico("check") : "") + GT[k2] + "</button>";
      }
      inner = '<div class="mchips">' + gc + "</div>";
    } else if (n === 3) {
      inner =
        '<textarea class="ta" data-model="sentence" placeholder="e.g. Marketing managers at mid-sized companies who need better insight into what their customers want, which messages will resonate, and where to focus their next campaign.">' +
        esc(S.sentence) +
        "</textarea><button class=\"genbtn\" data-a=\"gensentence\">" +
        ico("spark") + " Draft this for me</button>";
    } else if (n === 4) {
      inner =
        '<input class="webinp wide" data-model="name" placeholder="e.g. Hearth & Crumb" value="' +
        esc(S.name || "") +
        '"><button class="genbtn" data-a="genname">' + ico("spark") + " Suggest a name for me</button>";
    } else if (n === 5) {
      var chans = "";
      CHANS.forEach(function (c) {
        var on = (S.p.channels || []).indexOf(c) >= 0;
        chans +=
          '<button class="mchip' + (on ? " on" : "") + '" data-a="chan" data-k="' + esc(c) + '">' +
          (on ? ico("check") : "") + c + "</button>";
      });
      inner = '<div class="mchips">' + chans + "</div>";
    } else if (n === 6) {
      for (var k6 in BUD)
        inner +=
          '<button class="optrow' + (S.p.budget === k6 ? " on" : "") + '" data-a="bud" data-k="' + k6 +
          '"><span class="opt-l">' + BUD[k6] + '</span><span class="opt-r">' + (S.p.budget === k6 ? ico("check") : "") + "</span></button>";
      inner = '<div class="optlist">' + inner + "</div>";
    } else {
      inner =
        locField() +
        (S.p.locAuto && S.p.locs && S.p.locs.length
          ? '<div class="autohint">' + ico("compass") + " We recognised your location and added it — add more or remove it if it’s not right.</div>"
          : "");
    }
    var canNext = n === 1 ? !!S.p.type : n === 2 ? !!(S.p.goals && S.p.goals.length) : true;
    var nextLabel = n === total ? "Build my plan" : "Continue";
    var back =
      '<button class="lk mut" data-a="sback">' +
      (n === 1 ? "Back" : ico("arrow") + " Back") +
      "</button>";
    return (
      '<div class="center"><div class="cwrap step"><div class="stepbar"><div class="stepbar-i" style="width:' +
      Math.round((n / total) * 100) +
      '%"></div></div><div class="stepnum">Question ' +
      n +
      " of " +
      total +
      '</div><div class="clara">' +
      mk(28) +
      '<span class="nm">Clara</span></div><h1 class="q">' +
      meta.q +
      '</h1><p class="sub">' +
      meta.sub +
      "</p>" +
      inner +
      '<div class="stepfoot">' +
      back +
      '<button class="btn' +
      (canNext ? "" : " disabled") +
      '" data-a="snext"' +
      (canNext ? "" : " disabled") +
      ">" +
      nextLabel +
      " " +
      ico("arrow") +
      "</button></div></div></div>" +
      restart()
    );
  }
  function authAside(returning) {
    function tick(t) {
      return '<div class="as-tick">' + ico("checkc") + " " + t + "</div>";
    }
    return (
      '<div class="wr"><div class="aside2">' +
      '<div class="as-orb">' + mk(72).replace('class="mark m"', 'class="mark asmark"') + "</div>" +
      '<p class="as-line">“' + (returning ? "Good to see you — today’s moves are ready." : "Tell me what you’re building. I’ll handle the marketing thinking.") + '”</p>' +
      '<div class="as-ticks">' + tick("A few smart moves a day") + tick("Written in your voice") + tick("Learns what actually works") + "</div>" +
      "</div></div>"
    );
  }
  function vAuth() {
    var list = S.biz || [],
      returning = list.length > 0,
      cur = returning ? bizById(S.cur) || list[0] : null,
      who = cur ? (cur.name && cur.name.trim() ? cur.name : INDS[cur.p.ind] || "your business") : "";
    var head = returning ? "Welcome back" + (who ? ", " + who : "") + "." : "Marketing that runs itself.";
    var tag = returning ? "Pick up where you left off — today’s moves are ready." : "Tell Clara what you’re building. She does the marketing thinking — you just approve the moves.";
    var email = S.emailOpen
      ? '<div class="authmail"><input class="webinp" data-model="email" placeholder="you@business.com" value="' + esc(S.email || "") + '"><button class="btn block" data-a="magiclink">' + ico("mail") + " Email me a sign-in link</button></div>"
      : "";
    var toggle = '<button class="lk mut authtoggle" data-a="emailtoggle">' + (S.emailOpen ? "Hide email sign-in" : "Sign in with email") + "</button>";
    var actions = returning
      ? '<button class="btn block gsi" data-a="google">' + gLogo() + " Continue with Google</button>" + toggle + email + '<div class="hint">New here? <button class="lk" data-a="start">Set up a business</button></div>'
      : '<button class="btn block big" data-a="start">Get started ' + ico("arrow") + "</button>" +
        '<div class="authdiv"><span>already have an account?</span></div>' +
        '<button class="btn block gsi" data-a="google">' + gLogo() + " Continue with Google</button>" +
        toggle + email +
        '<div class="hint">A minute of setup. No marketing know-how needed.</div>';
    function step(ic, n, h, p) {
      return '<div class="step3"><div class="step3-n">' + n + '</div><div class="step3-ic">' + ico(ic) + '</div><div class="step3-tx"><div class="step3-h">' + h + '</div><div class="step3-p">' + p + "</div></div></div>";
    }
    var stepsR =
      '<div class="authR-steps">' +
      step("compass", "1", "Tell Clara about your business", "A minute of quick questions — no jargon.") +
      step("spark", "2", "Get a few smart moves a day", "She does the marketing thinking for you.") +
      step("checkc", "3", "Approve them, and grow", "You stay in control — approve, tweak, or skip.") +
      "</div>";
    return (
      '<div class="authsplit">' +
      '<div class="authL"><div class="authL-in">' +
      '<div class="authbrand">' + mk(34).replace('class="mark m"', 'class="mark authmark"') + '<span class="authword">Clarity<span class="d">.</span></span></div>' +
      '<h1 class="authhead">' + head + "</h1>" +
      '<p class="authtag">' + tag + "</p>" +
      '<div class="authcta">' + actions + "</div>" +
      "</div></div>" +
      '<div class="authR"><div class="authR-in"><div class="authR-title">' + ico("spark") + " How Clarity works</div>" + stepsR +
      '<div class="authR-foot">' + ico("checkc") + " Set up in about a minute.</div></div></div>" +
      "</div>" +
      restart()
    );
  }
  function vWelcome() {
    return vAuth();
  }
  function vInput() {
    var exs = "";
    EX.forEach(function (e, i) {
      exs +=
        '<button class="ex" data-a="ex" data-k="' + i + '">' + e + "</button>";
    });
    return (
      '<div class="center"><div class="cwrap"><div class="clara">' +
      mk(32) +
      '<span class="nm">Clara</span></div><h1 class="q">Who’s your ideal customer, and what do you sell them?</h1><p class="sub">One or two lines is plenty. I’ll read it and build your plan — you can fix anything I get wrong.</p><textarea class="ta" data-model="sentence" placeholder="e.g. Marketing managers at mid-sized firms who need better insight into what their customers want — I sell them a research + messaging tool">' +
      esc(S.sentence) +
      "</textarea>" +
      helpBlock() +
      '<div class="exlabel">Or start from one of these</div><div class="exs">' +
      exs +
      '</div><div class="divider"><span>or, even quicker</span></div><div class="weblink"><input class="webinp" data-model="website" placeholder="paste your website — clarity.co" value="' +
      esc(S.website) +
      '"><button class="btn sm" data-a="readweb">' +
      ico("globe") +
      ' Read my site</button></div><div class="inputfoot"><button class="btn" data-a="build">Build my plan ' +
      ico("arrow") +
      '</button><span class="hint">Clara reads it and fills everything in.</span></div></div></div>' +
      restart()
    );
  }
  function vThink() {
    return (
      '<div class="think"><div class="orb"><div class="ring"></div><div class="ring r2"></div><div class="core">' +
      ico("spark") +
      "</div></div><h3>" +
      (S.useWeb ? "Reading your website" : "Reading your sentence") +
      '</h3><div class="line" id="tl">Understanding your business…</div><div class="pbar"><i id="pb"></i></div></div>' +
      restart()
    );
  }
  function vContext() {
    var chans = "";
    CHANS.forEach(function (c) {
      var on = (S.p.channels || []).indexOf(c) >= 0;
      chans +=
        '<button class="mchip' +
        (on ? " on" : "") +
        '" data-a="chan" data-k="' +
        esc(c) +
        '">' +
        (on ? ico("check") : "") +
        c +
        "</button>";
    });
    var buds = "";
    for (var kb in BUD)
      buds +=
        '<button class="mchip' +
        (S.p.budget === kb ? " on" : "") +
        '" data-a="bud" data-k="' +
        kb +
        '">' +
        BUD[kb] +
        "</button>";
    return (
      '<div class="center"><div class="cwrap"><div class="clara">' +
      mk(32) +
      '<span class="nm">Clara</span></div><h1 class="q">A few quick things, so I plan around reality.</h1><p class="sub">Tap what applies — this shapes which channels and moves I suggest. Only your location needs typing.</p>' +
      '<div class="ctxblock"><div class="ctxlbl">Where are you marketing right now?<span class="ctxsub">select all that apply</span></div><div class="mchips">' +
      chans +
      "</div></div>" +
      '<div class="ctxblock"><div class="ctxlbl">Monthly marketing budget to plan around?</div><div class="mchips">' +
      buds +
      "</div></div>" +
      '<div class="ctxblock"><div class="ctxlbl">Where’s your business based?<span class="ctxsub">city or country</span></div><input class="webinp wide" data-pmodel="loc" placeholder="e.g. Leeds, UK" value="' +
      esc(S.p.loc || "") +
      '">' +
      (S.p.locAuto && S.p.loc
        ? '<div class="autohint">' +
          ico("compass") +
          " We recognised your location and filled this in — change it if it’s not right."
          + "</div>"
        : "") +
      "</div>" +
      '<div class="inputfoot"><button class="btn" data-a="ctxdone">Build my plan ' +
      ico("arrow") +
      '</button><button class="lk mut" data-a="ctxback">Back</button></div></div></div>' +
      restart()
    );
  }
  function sel(key, opts) {
    var o = "";
    for (var k in opts)
      o +=
        '<option value="' +
        k +
        '"' +
        (S.p[key] === k ? " selected" : "") +
        ">" +
        opts[k] +
        "</option>";
    return '<select class="sel" data-sel="' + key + '">' + o + "</select>";
  }
  function goalChipsHTML() {
    var out = "";
    for (var g in GT) {
      var on = (S.p.goals || []).indexOf(g) >= 0;
      out +=
        '<button class="mchip' + (on ? " on" : "") + '" data-a="goalpick" data-k="' + g + '">' +
        (on ? ico("check") : "") + GT[g] + "</button>";
    }
    return out;
  }
  function selP(key, opts, blank) {
    var o = blank
      ? '<option value=""' + (!S.p[key] ? " selected" : "") + ">" + blank + "</option>"
      : "";
    for (var k in opts)
      o +=
        '<option value="' +
        k +
        '"' +
        (S.p[key] === k ? " selected" : "") +
        ">" +
        opts[k] +
        "</option>";
    return '<select class="sel" data-sel="' + key + '">' + o + "</select>";
  }
  function pcard(icon, kick, t, d, i) {
    return (
      '<div class="pcard" style="animation-delay:' +
      i * 0.08 +
      's"><div class="pk">' +
      ico(icon) +
      kick +
      '</div><div class="pt">' +
      t +
      "</div>" +
      (d ? '<div class="pd">' + d + "</div>" : "") +
      "</div>"
    );
  }
  function pcardChips(icon, kick, chips, i) {
    return (
      '<div class="pcard wide" style="animation-delay:' +
      i * 0.08 +
      's"><div class="pk">' +
      ico(icon) +
      kick +
      '</div><div class="chiprow">' +
      chips +
      "</div></div>"
    );
  }
  function pcardMove(icon, kick, mv, i) {
    var open = S.why ? " open" : "";
    return (
      '<div class="pcard wide" style="animation-delay:' +
      i * 0.08 +
      's"><div class="pk">' +
      ico(icon) +
      kick +
      '</div><div class="move"><div class="mi">' +
      ico("arrow") +
      '</div><div><div class="pt">' +
      mv.t +
      '</div><div class="pd">' +
      mv.b +
      '</div></div></div><div class="why' +
      open +
      '"><p>I chose this because it’s the highest-leverage first step for your goal — it puts your effort where ' +
      (AUDS[S.p.aud] || "your customers").toLowerCase() +
      ' will actually see it, and it’s something you can do today.</p></div><button class="whybtn" data-a="why">' +
      (S.why ? "Hide reasoning" : "Why this?") +
      "</button></div>"
    );
  }
  function planCardsHTML() {
    var a = arch(),
      mv = firstMove();
    var uc = (S.p.channels || []).filter(function (c) {
      return c !== "I’m not marketing yet";
    });
    var chList = uc.length ? uc : a.channels;
    var chips = "";
    chList.forEach(function (c) {
      chips += '<span class="chip">' + c + "</span>";
    });
    var kick =
      (uc.length ? "Channels you use" : "Recommended channels") +
      " · " +
      TONES[S.p.tone].toLowerCase() +
      " voice";
    return (
      pcard("compass", "Positioning", a.pos, "", 0) +
      pcard("user", "Your customer", a.persona.name, a.persona.desc, 1) +
      pcardChips("mega", kick, chips, 2) +
      pcardMove("flag", "Your first move", mv, 3)
    );
  }
  function revrow(label, field) {
    return '<div class="revrow"><label class="revlbl">' + label + "</label>" + field + "</div>";
  }
  function vPlan() {
    var nm = nameOf();
    var chanChips = "";
    CHANS.forEach(function (c) {
      var on = (S.p.channels || []).indexOf(c) >= 0;
      chanChips += '<button class="mchip' + (on ? " on" : "") + '" data-a="chan" data-k="' + esc(c) + '">' + (on ? ico("check") : "") + c + "</button>";
    });
    var body =
      '<div class="review">' +
      revrow("What you’re growing", selP("type", BT)) +
      revrow("What you want" + ((S.p.goals || []).length > 1 ? " (pick any)" : " first"), '<div class="mchips plan">' + goalChipsHTML() + "</div>") +
      revrow("Your ideal customer & what you sell", '<textarea class="ta rev" data-model="sentence">' + esc(S.sentence) + "</textarea>") +
      revrow("Your business name", '<input class="webinp wide" data-model="name" value="' + esc(S.name || "") + '">') +
      revrow("Where you’re marketing now", '<div class="mchips plan">' + chanChips + "</div>") +
      revrow("Monthly budget", selP("budget", BUD, "Not set")) +
      revrow("Location(s)", locField()) +
      "</div>";
    return (
      '<div class="center"><div class="cwrap review-wrap"><div class="clara">' +
      mk(28) +
      '<span class="nm">Clara</span></div><h1 class="q">Review your answers' +
      (nm === "there" ? "" : ", " + nm) +
      '</h1><p class="sub">Here’s everything you told me. Edit anything that’s off, then continue — I’ll build from this.</p>' +
      body +
      '<div class="stepfoot"><button class="lk mut" data-a="planback">' + ico("arrow") + ' Back</button><button class="btn" data-a="finish">Build my plan ' + ico("arrow") + "</button></div></div></div>" +
      restart()
    );
  }
  function vDone() {
    var nm = nameOf();
    var items = [
      "Understood your business",
      "Found your ideal customer",
      "Mapped how you should stand out",
      "Drafted your first move for today",
    ];
    var ch = "";
    items.forEach(function (t, i) {
      ch +=
        '<div class="chk" style="animation-delay:' +
        i * 0.1 +
        's"><span class="cb">' +
        ico("check") +
        "</span>" +
        t +
        "</div>";
    });
    return (
      '<div class="done"><div class="checkwrap"><div class="badge">' +
      ico("checkc") +
      ' Your advisor is ready</div><h2 class="rh" style="text-align:center">All set' +
      (nm === "there" ? "" : ", " + nm) +
      '.</h2><p class="rs" style="text-align:center">Clara has your plan. Here’s what she set up:</p><div class="checks">' +
      ch +
      '</div><div class="emailrow"><input data-model="email" placeholder="Where should Clara send your plan?"><button class="btn sm" data-a="enter">Enter Clarity</button></div><div class="hint" style="text-align:center">You’ll land on Today — your first moves, waiting.</div></div></div>' +
      restart()
    );
  }
  function restart() {
    return (
      '<button class="restart" data-a="restart">' +
      ico("refresh") +
      " Restart</button>"
    );
  }
  function todayDate() {
    var d = new Date();
    return d.toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }
  function baseTasks() {
    var a = arch(),
      ch = a.channels,
      nm = nameOf() === "there" ? "your business" : nameOf(),
      au = (AUDS[S.p.aud] || "your customers").toLowerCase(),
      g = S.p.goal;
    var sets = {
      customers: [
        {
          icon: "user",
          title: "Introduce " + nm + " to " + au,
          body:
            "Post a short " +
            ch[0] +
            " piece that opens with the problem you solve — not your features.",
          why:
            "You want new customers. " +
            ch[0] +
            " is where " +
            au +
            " first meet brands like yours, and a problem-led hook beats a product-led one with a cold audience.",
        },
        {
          icon: "target",
          title: "Reach 10 ideal customers directly",
          body: "I’ve drafted a warm message — send it to 10 people who match your customer.",
          why: "When you’re small, ten real conversations convert far better than a thousand impressions. Direct beats broadcast this week.",
        },
        {
          icon: "bulb",
          title: "Publish one proof piece",
          body:
            "Share a real result or story on " +
            (ch[2] || ch[0]) +
            " so interest turns into a first sale.",
          why: "New customers need a reason to believe. Proof lowers the risk they feel before buying.",
        },
      ],
      visibility: [
        {
          icon: "mega",
          title: "Post your signature take",
          body:
            "A strong point of view on " +
            ch[0] +
            ", written to be shared — not just seen.",
          why:
            "Reach compounds when people share. An opinion travels further than an update, and " +
            ch[0] +
            " rewards it.",
        },
        {
          icon: "user",
          title: "Show up where " + au + " gather",
          body: "Add value in 3 communities or threads your audience follows — no pitching.",
          why: "Borrowed audiences grow you faster than starting from zero. Being useful in the room beats shouting from outside it.",
        },
        {
          icon: "bulb",
          title: "Turn one idea into three",
          body:
            "Reshape your best point for " +
            ch[1] +
            " and " +
            (ch[2] || ch[0]) +
            ".",
          why: "Visibility is repetition. One idea across formats multiplies reach without multiplying work.",
        },
      ],
      edge: [
        {
          icon: "flag",
          title: "Claim the ground rivals ignore",
          body:
            "Publish a " +
            ch[0] +
            " piece on the one thing competitors near you get wrong.",
          why: "You want an edge. The fastest one is owning a position nobody else is claiming, loudly and first.",
        },
        {
          icon: "compass",
          title: "Sharpen your one-line difference",
          body:
            "I’ve drafted three versions of what makes " +
            nm +
            " different — pick one.",
          why:
            "In a crowded market a fuzzy difference is invisible. A sharp line is what " +
            au +
            " remember and repeat.",
        },
        {
          icon: "bulb",
          title: "Answer the comparison first",
          body:
            "Make a piece that helps " +
            au +
            " choose — before a competitor frames it for them.",
          why: "Whoever explains the decision usually wins it. Get there first.",
        },
      ],
      revenue: [
        {
          icon: "flag",
          title: "Point " + nm + " at your best offer",
          body:
            "Lead this week’s " +
            ch[0] +
            " content with the thing you most want to sell.",
          why: "Revenue follows attention. I’ve aimed your effort at the offer that moves the number, not the busiest one.",
        },
        {
          icon: "target",
          kind: "action",
          title: "Re-approach 10 warm leads",
          body: "People who showed interest and went quiet — I’ve drafted the nudge.",
          why: "The cheapest revenue is interest you already earned. Reviving warm leads beats chasing strangers.",
        },
        {
          icon: "bulb",
          kind: "content",
          title: "Publish a proof post",
          body:
            "Post one real testimonial or result on " +
            (ch[2] || ch[0]) +
            ", aimed where " +
            au +
            " decide to buy.",
          why: "A little proof at the deciding moment lifts conversion more than more traffic does.",
        },
      ],
    };
    return (sets[g] || sets.customers).concat(S.extra || []);
  }
  function campaignFor(){var a=arch(),ch=a.channels,nm=(nameOf()==="there"?"your business":nameOf()),au=(AUDS[S.p.aud]||"your customers").toLowerCase();var meta=({food:{name:"Weekend market push",occ:"Your busiest weekend is a couple of weeks out — worth a run-up."},saas:{name:"Feature-launch push",occ:"You’ve got something worth a proper moment, not a quiet post."},fitness:{name:"Fresh-start push",occ:"There’s a natural ‘new me’ window coming — a good time to ride it."},shop:{name:"Seasonal push",occ:"A seasonal buying moment is coming up."},services:{name:"Fill-the-book fortnight",occ:"A focused two weeks can fill your quieter slots."},creator:{name:"Launch-week push",occ:"You’ve got a launch worth building up to."},other:{name:"Two-week growth push",occ:"A short, focused sprint could move things."}})[S.p.ind]||{name:"Two-week growth push",occ:"A short, focused sprint could move things."};var moves=[{icon:"mega",title:"Announce it early",body:"A "+ch[0]+" post that builds anticipation — tell "+au+" it’s coming.",why:"Campaigns win on the run-up. Warming people up beats a cold launch-day post."},{icon:"bulb",title:"Share the story behind it",body:"One piece on why this matters — the reason, not the features.",why:"Story is what makes a push feel like an event, not an ad."},{icon:"flag",title:"Make the ask, clearly",body:"A direct "+(ch[2]||ch[0])+" post with one clear action for "+au+".",why:"Every campaign needs a moment where you actually ask. This is it."}];return {name:meta.name,occ:meta.occ,dayN:2,dayTotal:14,moves:moves,status:"active"};}
  function campaignPreview(){var c=campaignFor();return {name:c.name,occ:c.occ,dayTotal:c.dayTotal,moves:c.moves.length};}
  function campCount(){return 0;}
  function currentTrend(){var T=[["fresh-start energy","new-year-reset"],["fresh-start energy","new-year-reset"],["spring refresh","spring-refresh"],["spring refresh","spring-refresh"],["early-summer buzz","summer-launch"],["summer social season","summer-social"],["summer social season","summer-social"],["back-to-routine mood","back-to-routine"],["autumn / fall colours","fall-colours"],["autumn / fall colours","fall-colours"],["festive run-up","festive-season"],["festive gifting","festive-gifting"]];var x=T[new Date().getMonth()]||T[0];return {label:x[0],tag:x[1]};}
  function trendTask(){var tr=currentTrend(),au=(AUDS[S.p.aud]||"your customers").toLowerCase();return {icon:"bulb",trend:true,tag:tr.tag,title:"Ride the "+tr.label+" trend",body:"“"+tr.label.charAt(0).toUpperCase()+tr.label.slice(1)+"” is trending right now — post a piece that ties what you do to the moment for "+au+".",why:"Trends give you a timely reason to post that doesn’t feel salesy. Clara auto-tags everything from this trend as #"+tr.tag+" so the related posts stay grouped together."};}
  function todayTasks(){return baseTasks().concat([trendTask()]);}
  function taskKind(t){if(t&&t.kind)return t.kind;var s=((t&&t.title)||"")+" "+((t&&t.body)||"");s=s.toLowerCase();if(/send it to|reach \d+|add value in|communities or threads|pick one|re-approach|put one testimonial|warm leads/.test(s))return "action";return "content";}
  function kindOf(i){return taskKind(taskAt(i));}
  var PLATS = { instagram: "Instagram", linkedin: "LinkedIn", tiktok: "TikTok", facebook: "Facebook", youtube: "YouTube", email: "Email", x: "X", twitter: "X", pinterest: "Pinterest" };
  function movePlat(i) {
    if (S.tweak && S.tweak[i] && S.tweak[i].platform) return S.tweak[i].platform;
    return primaryChannel();
  }
  function audiencePhrase() {
    return (AUDS[S.p.aud] || "your customers").toLowerCase();
  }
  var ANGLE_ALTS = ["warmer and value-first", "customer-story led", "a bold, contrarian hook", "short and punchy", "an educational how-to framing"];
  function detectTitle(msg) {
    var pats = [
      /(?:change|set|update|rename|edit)\s+(?:the\s+)?(?:title|name|heading)\s+(?:to|:|as|=|into)\s*(.+)/i,
      /rename\s+(?:it|this|the\s+\w+)?\s*to\s*(.+)/i,
      /call\s+(?:it|this)\s+(.+)/i,
      /\b(?:title|name)\s*(?:to|:|=)\s*(.+)/i,
    ];
    for (var p = 0; p < pats.length; p++) {
      var m = (msg || "").match(pats[p]);
      if (m && m[1]) {
        var v = m[1].trim().replace(/^["'“”]+|["'“”]+$/g, "").replace(/[.!,]+$/, "").trim();
        if (v) return v;
      }
    }
    return null;
  }
  function claraTaskIntro(title, kind) {
    var au = (AUDS[S.p.aud] || "your customers").toLowerCase();
    var tt = (title || "this").trim();
    if (kind === "content")
      return "Love that you added “" + tt + ".” Want me to draft it, pick the best platform, or sharpen the angle for " + au + "? Tell me what you’re going for and I’ll help.";
    return "Nice — “" + tt + "” is a solid move. Want a quick plan, a message to use, or the best time to do it? Tell me your goal and I’ll help you make it land.";
  }
  function claraReply(i, msg) {
    var t = (msg || "").toLowerCase(),
      found = null,
      kk;
    var newTitle = detectTitle(msg);
    if (newTitle)
      return { text: "Sure — I’ll rename it to “" + newTitle + "”. Want me to add that as a move?", propose: true, kind: "title", tweak: { title: newTitle }, summary: "Rename this move to “" + newTitle + "”", editText: newTitle };
    for (kk in PLATS) if (new RegExp("\\b" + kk + "\\b").test(t)) found = PLATS[kk];
    if (found)
      return { text: "Good call — " + found + " fits " + audiencePhrase() + " better here. Want me to switch it?", propose: true, kind: "platform", tweak: { platform: found }, summary: "Switch this move to " + found, editText: found };
    if (/sales|salesy|pushy|hard sell|promotional|too much/.test(t))
      return { text: "I can soften it — less pitch, more value. Here’s the change:", propose: true, kind: "angle", tweak: { angle: "warmer and value-first" }, summary: "Rewrite it warmer and value-first, less of a pitch", editText: "warmer and value-first" };
    if (/change|reword|rewrite|shorten|longer|wording|the text|make it|tone|edit/.test(t))
      return { text: "Sure — here’s how I’d change it:", propose: true, kind: "angle", tweak: { angle: "reworked to your note" }, summary: "Rework the wording the way you described", editText: "reworked to your note" };
    if (/angle|different|another|alternativ|other idea|instead/.test(t))
      return { text: "Here’s a different angle you could take:", propose: true, kind: "angle", tweak: { angle: "customer-story led" }, summary: "Lead with a quick customer story instead of the tip", editText: "customer-story led" };
    if (/platform|channel|where/.test(t))
      return { text: "I chose " + movePlat(i) + " because that’s where " + audiencePhrase() + " are most active for this. Name another and I’ll switch." };
    if (/now|timing|today|wait|later/.test(t))
      return { text: "It’s today’s highest-leverage move for your goal — small effort, and it compounds. It can wait, though; skip it and I’ll resurface it tomorrow." };
    if (/\bno\b|disagree|don.?t|why should|not sure|push/.test(t))
      return { text: "Fair to push back. I rank it first because it moves your main goal fastest — but if it doesn’t fit, skip it and I’ll learn from that." };
    return { text: "In short: this targets " + audiencePhrase() + " on " + movePlat(i) + ", aimed at your main goal. Tell me what feels off — the platform, angle, or timing — and I’ll propose a change." };
  }
  function proposalCard(i, pr) {
    var editing = S.propEdit && S.propEdit[i];
    return (
      '<div class="wprop"><div class="wprop-h">' + ico("spark") + " Proposed change</div>" +
      '<div class="wprop-s">' + esc(pr.summary) + "</div>" +
      (editing ? '<textarea class="wprop-edit" data-pe="' + i + '" placeholder="Write exactly what you want…">' + esc(pr.userText != null ? pr.userText : pr.editText || "") + "</textarea>" : "") +
      '<div class="wprop-a">' +
      (editing
        ? '<button class="btn xs" data-a="wpropsaveedit" data-k="' + i + '">' + ico("check") + " Use my version</button><button class=\"lk mut\" data-a=\"wpropedit\" data-k=\"" + i + '">Cancel</button>'
        : '<button class="btn xs" data-a="wpropok" data-k="' + i + '">' + ico("check") + " Approve</button>" +
          '<button class="lk mut" data-a="wpropno" data-k="' + i + '">Reject</button>' +
          '<button class="lk mut" data-a="wpropregen" data-k="' + i + '">' + ico("refresh") + " Regenerate</button>" +
          '<button class="lk mut" data-a="wpropedit" data-k="' + i + '">' + ico("edit") + " Enter your own</button>") +
      "</div></div>"
    );
  }
  function thread(i, t) {
    var msgs = [{ from: "clara", text: t.why }].concat((S.threads && S.threads[i]) || []);
    var body = msgs
      .map(function (m) {
        return '<div class="wmsg ' + m.from + '">' + (m.from === "clara" ? '<span class="wm-ic">' + ico("spark") + "</span>" : "") + '<div class="wm-b">' + esc(m.text) + "</div></div>";
      })
      .join("");
    var sugg = ["Why this platform?", "Make it less salesy", "Try a different angle", "Why now?"];
    var chips = sugg
      .map(function (c) {
        return '<button class="wchip" data-a="wsend" data-k="' + i + '" data-t="' + esc(c) + '">' + c + "</button>";
      })
      .join("");
    var input =
      '<div class="winput"><input class="wtext" data-wt="' + i + '" placeholder="Ask Clara, or tell her what feels off…" value="' + esc((S.wtext && S.wtext[i]) || "") +
      '"><button class="wsendbtn" data-a="wsend" data-k="' + i + '" aria-label="Send">' + ico("send") + "</button></div>";
    var pr = S.proposal && S.proposal[i];
    var mid = pr ? proposalCard(i, pr) : '<div class="wchips">' + chips + "</div>";
    return '<div class="wl">' + ico("spark") + " Here’s my thinking — ask why, or tell me what feels off</div><div class=\"wmsgs\">" + body + "</div>" + mid + input;
  }
  function tweakNote(i) {
    var tw = S.tweak && S.tweak[i];
    if (!tw) return "";
    var bits = [];
    if (tw.platform) bits.push("now on " + tw.platform);
    if (tw.angle) bits.push("angle: " + tw.angle);
    if (!bits.length) return "";
    return '<div class="tc-tweak">' + ico("check") + " Refined with Clara — " + bits.join(" · ") + "</div>";
  }
  function tcard(t, i) {
    var kind = taskKind(t);
    var st = S.done[i]
      ? "done"
      : S.queue && S.queue.indexOf(i) >= 0
        ? "drafting"
        : "open";
    var _un = unreadWhy(i);
    var whyLabel = t.user ? "Discuss" : "Why this?";
    var whyBtn = '<button class="lk mut whybtn" data-a="twhy" data-k="' + i + '">' + ico("chat") + whyLabel + (_un > 0 ? '<span class="why-badge">' + _un + "</span>" : "") + "</button>";
    var perBtn = taskKind(t) === "content" ? '<button class="lk mut perbtn" data-a="pmodal" data-k="' + personaFor(i).id + '">' + ico("user") + "Persona</button>" : "";
    var actions;
    if (st === "done")
      actions =
        '<span class="doneflag">' +
        ico("checkc") +
        (S.done[i] === "skip" ? "Skipped" : S.done[i] === "replaced" ? "Replaced" : S.done[i] === "done" ? "Done" : "Published") +
        '</span><button class="lk mut" data-a="tundo" data-k="' + i + '">Undo</button>';
    else if (st === "drafting")
      actions =
        '<button class="lk" data-a="tab" data-k="create">' + ico("arrow") + "Finish in Create</button>" + whyBtn + perBtn;
    else if (kind === "action")
      actions =
        '<button class="lk" data-a="tdone" data-k="' + i + '">' + ico("check") + "Mark as done</button>" + whyBtn +
        '<button class="lk mut" data-a="tskip" data-k="' + i + '">Skip</button>';
    else
      actions =
        '<button class="lk" data-a="tapprove" data-k="' + i + '">' + ico("check") + "Approve</button>" + whyBtn + perBtn +
        '<button class="lk mut" data-a="tskip" data-k="' + i + '">Skip</button>';
    var post = kind === "content" ? (S.posts[i] || buildPost(t, i)) : null;
    var platBadge = post ? '<span class="tc-plat">' + ico(typeIcon(post.type)) + post.platform + "</span>" : "";
    var kbadge = '<span class="kbadge ' + kind + '">' + (kind === "action" ? "Action" : "Content") + "</span>";
    var personaChip = (kind === "content" && post) ? '<span class="tc-persona">' + ico("user") + " " + esc(personaFor(i).name) + "</span>" : "";
    var trendChip = t.trend ? '<span class="tc-trend">' + ico("bulb") + " Trending</span>" : "";
    var tagRow = (post && post.tags && post.tags.length) ? tagChips(post.tags) : (t.tag ? tagChips([t.tag]) : "");
    var chatChip = "";
    var chk =
      st === "open" && kind === "content"
        ? '<button class="tcheck' + (S.sel[i] ? " on" : "") + '" data-a="tsel" data-k="' + i + '" aria-label="Select">' + (S.sel[i] ? ico("check") : "") + "</button>"
        : "";
    return (
      '<div class="tcard' +
      (st === "done" ? " done" : "") +
      (S.sel[i] && st === "open" ? " selected" : "") +
      '"><div class="tc-h">' +
      chk +
      '<div class="tc-ic">' +
      ico(t.icon) +
      '</div><div class="tc-tx"><div class="tc-t">' +
      t.title +
      kbadge +
      platBadge +
      personaChip +
      trendChip +
      chatChip +
      '</div><div class="tc-b">' +
      t.body +
      "</div>" +
      tagRow +
      tweakNote(i) +
      '</div></div><div class="tc-a">' +
      actions +
      "</div></div>"
    );
  }
  function totalClaraMsgs(i) {
    var n = 1;
    var th = S.threads && S.threads[i];
    if (th) th.forEach(function (m) { if (m.from === "clara") n++; });
    return n;
  }
  function unreadWhy(i) {
    return Math.max(0, totalClaraMsgs(i) - ((S.whySeen && S.whySeen[i]) || 0));
  }
  function newTodoFromChange(origIdx, tweak) {
    var orig = todayTasks()[origIdx] || {};
    if (!Array.isArray(S.extra)) S.extra = [];
    var title = tweak && tweak.title ? tweak.title : orig.title || "New move";
    var task = { icon: orig.icon || "spark", kind: taskKind(orig), title: title, body: orig.body || "", why: orig.why || "", fromChat: true };
    S.extra.push(task);
    var idx = baseTasks().length - 1;
    var rest = {};
    if (tweak) { if (tweak.platform) rest.platform = tweak.platform; if (tweak.angle) rest.angle = tweak.angle; }
    if (Object.keys(rest).length) { if (!S.tweak) S.tweak = {}; S.tweak[idx] = rest; }
    // carry the whole conversation over to the new move
    if (!S.threads) S.threads = {};
    S.threads[idx] = (S.threads[origIdx] || []).slice();
    if (!S.whySeen) S.whySeen = {};
    S.whySeen[idx] = S.whySeen[origIdx] || 0;
    // remove the original from Today
    if (!S.done) S.done = {};
    S.done[origIdx] = "replaced";
    return idx;
  }
  function whyModal() {
    var i = S.whyOpen,
      t = todayTasks()[i];
    if (!t) return "";
    if (!S.whySeen) S.whySeen = {};
    S.whySeen[i] = totalClaraMsgs(i);
    return (
      '<div class="modal-ov" data-a="closewhy"></div><div class="whymod"><div class="whymod-h"><div class="whymod-ttl"><div class="tc-ic">' +
      ico("spark") +
      '</div><div class="wm-title">Let’s talk it through</div></div><button class="brain-x" data-a="closewhy" aria-label="Close">' +
      ico("close") +
      '</button></div><div class="whymod-body">' +
      thread(i, t) +
      tweakNote(i) +
      "</div></div>"
    );
  }
  function todoModal() {
    return (
      '<div class="modal-ov" data-a="todoclose"></div><div class="whymod todomod"><div class="whymod-h"><div class="whymod-ttl"><div class="tc-ic">' +
      ico("check") +
      '</div><div class="wm-title">Add a to-do</div></div><button class="brain-x" data-a="todoclose" aria-label="Close">' +
      ico("close") +
      '</button></div><div class="whymod-body">' +
      '<div class="efield"><label>What do you need to do?</label><input class="pf-inp" data-model="todoTitle" value="' + esc(S.todoTitle || "") + '" placeholder="e.g. Call 10 warm leads"></div>' +
      '<div class="efield" style="margin-top:12px"><label>Details (optional)</label><textarea class="pf-inp todobody" data-model="todoBody" placeholder="Anything that helps you remember">' + esc(S.todoBody || "") + "</textarea></div>" +
      '<div class="todomod-hint">' + ico("spark") + ' Creating content to publish? <button class="lk" data-a="todopost">Create a post instead</button></div>' +
      '<div class="todomod-foot"><button class="lk mut" data-a="todoclose">Cancel</button><button class="btn sm" data-a="todosave">' + ico("plus") + " Add to-do</button></div>" +
      "</div></div>"
    );
  }
  function vToday() {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(S.day)) S.day = todayISO();
    var nm = nameOf() === "there" ? "" : ", " + nameOf();
    var tasks = todayTasks();
    var cc = campCount();
    var baseLen = tasks.length - cc;
    var offer = "";
    if (S.camp && S.camp.status === "offer") {
      var sug = campaignPreview();
      offer =
        '<div class="campoffer"><div class="co-h">' +
        ico("spark") +
        " Clara suggests a campaign</div><div class=\"co-t\">" +
        sug.name +
        '</div><div class="co-b">' +
        sug.occ +
        " I can line up a short push — " +
        sug.dayTotal +
        " days, " +
        sug.moves +
        " moves — and weave it into your days. You just approve each one.</div><div class=\"co-a\"><button class=\"btn sm\" data-a=\"campaccept\">" +
        ico("check") +
        ' Run this push</button><button class="lk mut" data-a="campdecline">Not now</button></div></div>';
    }
    var banner = "";
    if (cc) {
      var cdone = 0;
      for (var j = baseLen; j < tasks.length; j++) if (S.done[j]) cdone++;
      banner =
        '<div class="campbanner"><div class="cb-l"><span class="cb-dot"></span><b>' +
        S.camp.name +
        "</b> · day " +
        S.camp.dayN +
        " of " +
        S.camp.dayTotal +
        '</div><div class="cb-r">' +
        cdone +
        " of " +
        cc +
        " moves done</div></div>";
    }
    var cards = "";
    for (var i = 0; i < baseLen; i++) if (!S.done[i]) cards += tcard(tasks[i], i);
    if (cc) {
      var nextC = -1;
      for (var c = baseLen; c < tasks.length; c++)
        if (!S.done[c]) {
          nextC = c;
          break;
        }
      if (nextC >= 0) cards += tcard(tasks[nextC], nextC);
    }
    if (!cards)
      cards =
        '<div class="tnote donenote"><div class="tn-h">' +
        ico("checkc") +
        ' All done for today</div><p>Every move’s handled — nice work. Fresh moves land tomorrow. You can review what went out in <button class="lk" data-a="tab" data-k="results">Results</button>.</p></div>';
    var baseDone = 0;
    for (var b = 0; b < baseLen; b++) if (S.done[b]) baseDone++;
    var sub =
      baseDone >= baseLen
        ? "You’re all caught up for today — nice work. Fresh moves land tomorrow."
        : "These are the few moves worth your time today. Approve, tweak, or skip each one — Clara learns from what you do.";
    var openIdx = [];
    for (var o = 0; o < baseLen; o++)
      if (!S.done[o] && !(S.queue && S.queue.indexOf(o) >= 0) && kindOf(o) === "content") openIdx.push(o);
    var selCount = openIdx.filter(function (x) {
      return S.sel[x];
    }).length;
    var aa =
      openIdx.length > 1
        ? '<div class="selbar"><button class="lk mut" data-a="tselall">' +
          (selCount === openIdx.length ? "Clear" : "Select all") +
          '</button><button class="btn sm" data-a="draftsel">' +
          (selCount > 0
            ? "Draft selected (" + selCount + ")"
            : "Draft all " + openIdx.length) +
          "</button></div>"
        : "";
    var toggle =
      '<div class="viewtog"><button class="vt' +
      (S.todayView !== "board" && S.todayView !== "calendar" ? " on" : "") +
      '" data-a="todayview" data-k="list">' +
      ico("list") +
      ' List</button><button class="vt' +
      (S.todayView === "board" ? " on" : "") +
      '" data-a="todayview" data-k="board">' +
      ico("board") +
      ' Board</button><button class="vt' +
      (S.todayView === "calendar" ? " on" : "") +
      '" data-a="todayview" data-k="calendar">' +
      ico("cal") +
      " Calendar</button></div>";
    var isTodaySingle = S.day === todayISO() && !isRange();
    var isCal = S.todayView === "calendar";
    var head =
      '<div class="todayhead"><div class="th-day">' +
      todayDate() +
      '</div><h1 class="th-t">Here’s what Clara lined up for today</h1><p class="th-s">' +
      sub +
      '</p><div class="todayctrls">' +
      toggle +
      (isCal ? "" : '<div class="boardtools">' + dateNav() + "</div>") +
      "</div></div>";
    var tnote =
      '<div class="tnote"><div class="tn-h">' +
      ico("spark") +
      " Why so few?</div><p>Your full strategy runs behind the scenes. I only surface today’s highest-leverage moves, so you’re never overwhelmed — approve, tweak, or skip and I’ll adapt tomorrow.</p><button class=\"lk\" data-a=\"tab\" data-k=\"thinking\">" +
      ico("spark") +
      " See Clara’s full thinking</button></div>";
    var body = isCal
      ? vTodayCal()
      : S.todayView === "board"
        ? vBoard()
        : isTodaySingle
          ? aa + cards + tnote
          : vHistList();
    var addBtn = '<button class="btn sm createnew" data-a="todoadd">' + ico("plus") + " Add to-do</button>";
    var top = '<div class="createtop">' + head + addBtn + "</div>";
    return top + (isTodaySingle && !isCal ? offer + banner : "") + body;
  }
  function defaultCols() {
    return [
      { id: "c1", name: "To approve" },
      { id: "c2", name: "In progress" },
      { id: "c3", name: "Scheduled" },
      { id: "c4", name: "Published" },
    ];
  }
  function ensureBoard() {
    if (!S.cols || !S.cols.length) S.cols = defaultCols();
    if (!S.cardCol) S.cardCol = {};
  }
  function isoOf(d) {
    return (
      d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0")
    );
  }
  function todayISO() {
    return isoOf(new Date());
  }
  function recordHist(entry) {
    var d = todayISO();
    if (!S.hist) S.hist = {};
    if (!S.hist[d]) S.hist[d] = [];
    S.hist[d].push(entry);
  }
  function parseISO(s) {
    var p = (s || "").split("-");
    return new Date(+p[0], (+p[1] || 1) - 1, +(p[2] || 1));
  }
  function dayDiff(a, b) {
    return Math.round((parseISO(b).getTime() - parseISO(a).getTime()) / 86400000);
  }
  function dayLabel(s) {
    var t = todayISO();
    if (s === t) return "Today";
    var diff = dayDiff(s, t);
    if (diff === 1) return "Yesterday";
    if (diff === -1) return "Tomorrow";
    return parseISO(s).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  }
  function cardState(i) {
    if (S.done[i] === "skip") return "skip";
    if (S.pub[i]) return S.posts[i] && S.posts[i].live ? "published" : "scheduled";
    if (S.done[i] === "done") return "done";
    if (S.posts[i]) return "progress";
    return "approve";
  }
  function startISO() {
    return S.createdAt || todayISO();
  }
  function clampDate(iso) {
    var lo = startISO(),
      hi = todayISO();
    if (iso < lo) return lo;
    if (iso > hi) return hi;
    return iso;
  }
  function inBounds(iso) {
    return iso >= startISO() && iso <= todayISO();
  }
  function isRange() {
    return !!(S.dayTo && S.dayTo !== S.day);
  }
  function daysInRange() {
    var lo = clampDate(S.day),
      hi = clampDate(isRange() ? S.dayTo : S.day);
    if (lo > hi) { var t = lo; lo = hi; hi = t; }
    var out = [], d = parseISO(lo), hd = parseISO(hi), guard = 0;
    while (d.getTime() <= hd.getTime() && guard < 130) { out.push(isoOf(d)); d.setDate(d.getDate() + 1); guard++; }
    return out;
  }
  function dayCards(day) {
    var out = [];
    if (day === todayISO()) {
      var b = baseTasks(), baseLen = b.length;
      for (var i = 0; i < baseLen; i++) {
        if (cardState(i) === "skip") continue;
        out.push({ key: "today:" + i, i: i, icon: b[i].icon, title: b[i].title, body: b[i].body, state: cardState(i), post: S.posts[i] });
      }
    } else {
      var h = (S.hist && S.hist[day]) || [];
      h.forEach(function (e, k) {
        out.push({ key: day + ":" + k, icon: e.icon, title: e.title, historical: true, kind: e.kind, status: e.status });
      });
    }
    return out;
  }
  function rangeCards() {
    var days = daysInRange(), all = [];
    days.forEach(function (dt) { all = all.concat(dayCards(dt)); });
    return all;
  }
  function colExists(id) {
    for (var i = 0; i < S.cols.length; i++) if (S.cols[i].id === id) return true;
    return false;
  }
  function colOfCard(c) {
    var stored = S.cardCol[c.key];
    if (stored && colExists(stored)) return stored;
    if (c.historical) return S.cols[S.cols.length - 1].id;
    var idx = { approve: 0, progress: 1, scheduled: 2, published: 3, done: 3, skip: 3 }[c.state] || 0;
    return S.cols[Math.min(idx, S.cols.length - 1)].id;
  }
  function bcard2(c) {
    var drag = ' draggable="true" data-carddrag="' + c.key + '"';
    if (c.historical) {
      return (
        '<div class="bcard"' + drag + '><div class="bc-top"><div class="bc-ic">' +
        ico(c.icon) + '</div><div class="bc-t2">' + c.title +
        '</div></div><div class="bc-a"><span class="bc-live">' + ico("checkc") + "Published</span></div></div>"
      );
    }
    var st = c.state,
      post = c.post || {},
      kind = taskKind(c),
      a;
    if (st === "approve")
      a =
        (kind === "action"
          ? '<button class="lk" data-a="tdone" data-k="' + c.i + '">' + ico("check") + "Mark done</button>"
          : '<button class="lk" data-a="bapprove" data-k="' + c.i + '">' + ico("check") + "Approve</button>") +
        '<button class="lk mut" data-a="tskip" data-k="' + c.i + '">Skip</button>';
    else if (st === "progress")
      a = '<button class="lk" data-a="tab" data-k="create">' + ico("arrow") + "Open in Create</button>";
    else if (st === "scheduled")
      a = '<span class="bc-sch">' + ico("refresh") + "Scheduled</span>";
    else if (st === "done")
      a = '<span class="bc-live">' + ico("checkc") + "Done</span>";
    else
      a = '<span class="bc-live">' + ico("checkc") + 'Live</span><button class="lk mut" data-a="tab" data-k="results">Results</button>';
    var meta =
      (st === "scheduled" || st === "published") && post.platform
        ? '<div class="bc-meta">' + ico(typeIcon(post.type || "text")) + post.platform + (post.scheduled ? " · " + post.scheduled : "") + "</div>"
        : "";
    return (
      '<div class="bcard"' + drag + '><div class="bc-top"><div class="bc-ic">' +
      ico(c.icon) + '</div><div class="bc-t2">' + c.title + '</div><span class="kbadge sm ' + kind + '">' + (kind === "action" ? "Action" : "Content") + "</span></div>" +
      (c.body ? '<div class="bc-b2">' + c.body + "</div>" : "") + meta +
      '<div class="bc-a">' + a + "</div></div>"
    );
  }
  function vCal() {
    var cm = S.calMonth || { y: parseISO(S.day).getFullYear(), m: parseISO(S.day).getMonth() };
    var first = new Date(cm.y, cm.m, 1);
    var startDow = (first.getDay() + 6) % 7;
    var dim = new Date(cm.y, cm.m + 1, 0).getDate();
    var title = first.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    var dows = ["M", "T", "W", "T", "F", "S", "S"];
    var head =
      '<div class="cal-h"><button class="cal-nav prev" data-a="calshift" data-k="-1">' + ico("arrow") +
      '</button><span class="cal-title">' + title + '</span><button class="cal-nav" data-a="calshift" data-k="1">' + ico("arrow") + "</button></div>";
    var dowRow = '<div class="cal-grid cal-dow">' + dows.map(function (d) { return "<span>" + d + "</span>"; }).join("") + "</div>";
    var cells = "";
    for (var i = 0; i < startDow; i++) cells += '<span class="cal-cell empty"></span>';
    var t = todayISO();
    for (var d = 1; d <= dim; d++) {
      var iso = cm.y + "-" + String(cm.m + 1).padStart(2, "0") + "-" + String(d).padStart(2, "0");
      if (!inBounds(iso)) {
        cells += '<span class="cal-cell disabled">' + d + "</span>";
        continue;
      }
      var sel = iso === S.day || (isRange() && iso === S.dayTo);
      var inr = isRange() && iso > S.day && iso < S.dayTo;
      cells += '<button class="cal-cell' + (sel ? " sel" : "") + (inr ? " inrange" : "") + (iso === t ? " today" : "") + (S.rangeAnchor && iso === S.rangeAnchor ? " sel" : "") + '" data-a="pickdate" data-k="' + iso + '">' + d + "</button>";
    }
    var hint = '<div class="cal-hint">' + (S.rangeAnchor ? "Pick an end date for a range" : "Pick a day — or click a start then an end for a range") + "</div>";
    return '<div class="cal-ov" data-a="closecal"></div><div class="calpop">' + head + dowRow + '<div class="cal-grid">' + cells + "</div>" + hint + "</div>";
  }
  function dateNav() {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(S.day)) S.day = todayISO();
    var atStart = S.day <= startISO();
    var atEnd = (isRange() ? S.dayTo : S.day) >= todayISO();
    var label = isRange() ? dayLabel(S.day) + " – " + dayLabel(S.dayTo) : dayLabel(S.day);
    var isNow = S.day === todayISO() && !isRange();
    return (
      '<div class="datenav"><button class="dn-arrow prev' + (atStart ? " off" : "") + '" data-a="dayshift" data-k="-1" aria-label="Previous day">' + ico("arrow") +
      '</button><button class="dn-date" data-a="opencal">' + ico("cal") + " " + label +
      '</button><button class="dn-arrow' + (atEnd ? " off" : "") + '" data-a="dayshift" data-k="1" aria-label="Next day">' + ico("arrow") + "</button>" +
      (isNow ? "" : '<button class="lk mut dn-today" data-a="daytoday">Jump to today</button>') +
      (S.cal ? vCal() : "") + "</div>"
    );
  }
  function histListCard(c) {
    var status = c.historical
      ? (c.kind === "action" || c.status === "done" ? "Done" : "Published")
      : ({ published: "Published", scheduled: "Scheduled", done: "Done", progress: "In progress", approve: "To do" }[c.state] || "");
    return (
      '<div class="histcard"><div class="tc-ic">' + ico(c.icon) + '</div><div class="hc-tx"><div class="hc-t">' + c.title + "</div>" +
      (c.body ? '<div class="hc-b">' + c.body + "</div>" : "") + '</div><span class="hc-st">' + ico("checkc") + status + "</span></div>"
    );
  }
  function vHistList() {
    var days = daysInRange(), out = "";
    days.forEach(function (dt) {
      var cards = dayCards(dt);
      out += '<div class="histday"><div class="histday-h"><span>' + dayLabel(dt) + '</span><span class="histday-n">' + cards.length + " done</span></div>";
      out += cards.length ? cards.map(histListCard).join("") : '<div class="histday-empty">Nothing recorded on this day.</div>';
      out += "</div>";
    });
    return '<div class="histlist">' + out + "</div>";
  }
  function vBoard() {
    ensureBoard();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(S.day)) S.day = todayISO();
    var cards = rangeCards();
    var out = "";
    S.cols.forEach(function (col) {
      var inCol = cards.filter(function (c) { return colOfCard(c) === col.id; });
      var body = inCol.map(bcard2).join("") || '<div class="bempty">Drop cards here</div>';
      out +=
        '<div class="bcol"><div class="bcol-h"><span class="colgrip" draggable="true" data-coldrag="' + col.id + '">' +
        ico("grip") + '</span><input class="colname" data-colname="' + col.id + '" value="' + esc(col.name) +
        '"><span class="bc-n">' + inCol.length + '</span><button class="colx" data-a="delcol" data-k="' + col.id +
        '" aria-label="Remove column">' + ico("close") + '</button></div><div class="bcol-body" data-boardcol="' + col.id + '">' + body + "</div></div>";
    });
    out += '<button class="addcol" data-a="addcol">' + ico("plus") + " Add column</button>";
    return '<div class="board custom">' + out + "</div>";
  }
  function moveCol(src, target) {
    if (src === target) return;
    var arr = S.cols,
      si = -1,
      ti = -1,
      i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].id === src) si = i;
      if (arr[i].id === target) ti = i;
    }
    if (si < 0 || ti < 0) return;
    var item = arr.splice(si, 1)[0];
    ti = -1;
    for (i = 0; i < arr.length; i++) if (arr[i].id === target) ti = i;
    arr.splice(ti, 0, item);
  }
  function navItem(id, label, icon) {
    return (
      '<button class="rail-item' +
      (S.tab === id ? " on" : "") +
      '" data-a="tab" data-k="' +
      id +
      '">' +
      ico(icon) +
      "<span>" +
      label +
      "</span></button>"
    );
  }
  function stubTab(id) {
    var t = id === "create" ? "Create" : "Results";
    var d =
      id === "create"
        ? "This is where Clara pre-fills content in your voice — pick a type, tweak, publish. We’re designing it next."
        : "This is where your results show in plain terms and feed back into tomorrow’s Today. We’re designing it next.";
    return (
      '<div class="stub"><div class="stub-ic">' +
      ico(id === "create" ? "zap" : "chart") +
      "</div><h2>" +
      t +
      "</h2><p>" +
      d +
      '</p><button class="btn sm" data-a="tab" data-k="today">' +
      ico("arrow") +
      " Back to Today</button></div>"
    );
  }
  function bizMenu() {
    var items = "";
    for (var i = 0; i < S.biz.length; i++) {
      var b = S.biz[i];
      var on = b.id === S.cur;
      var bn = b.name && b.name.trim() ? b.name : INDS[b.p.ind] || "Business";
      items +=
        '<button class="bizitem' +
        (on ? " on" : "") +
        '" data-a="switchto" data-k="' +
        b.id +
        '"><div class="avatar sm">' +
        initials(bn) +
        '</div><div class="bi-t"><div class="bi-n">' +
        esc(bn) +
        '</div><div class="bi-s">' +
        esc(INDS[b.p.ind] || "") +
        "</div></div>" +
        (on ? '<span class="bi-ck">' + ico("check") + "</span>" : "") +
        "</button>";
    }
    return (
      '<div class="bizmenu"><div class="bm-h">Your businesses</div>' +
      items +
      '<button class="bizadd" data-a="addbiz">' +
      ico("plus") +
      " Add a business</button></div>"
    );
  }
  function notifDropdown() {
    var items = [
      { icon: "bulb", t: "New market insight", d: "62% of first sales now start from a single social post.", time: "2h ago", to: "insights" },
      { icon: "send", t: "Your post went live", d: "Your scheduled post published at its peak time.", time: "5h ago", to: "results" },
      { icon: "spark", t: "Clara refreshed your moves", d: "3 new highest-leverage moves are ready in Today.", time: "1d ago", to: "today" },
    ];
    var body = items
      .map(function (n) {
        return '<button class="notif-item" data-a="notifgo" data-k="' + n.to + '"><span class="notif-ic">' + ico(n.icon) + '</span><span class="notif-tx"><span class="notif-t">' + n.t + '</span><span class="notif-d">' + n.d + '</span><span class="notif-time">' + n.time + "</span></span></button>";
      })
      .join("");
    return '<div class="nav-ov" data-a="closemenus"></div><div class="navpop notifpop"><div class="navpop-h">Notifications<span class="navpop-n">3 new</span></div>' + body + "</div>";
  }
  function acctDropdown() {
    var nm = nameOf() === "there" ? "Your business" : nameOf();
    return (
      '<div class="nav-ov" data-a="closemenus"></div><div class="navpop acctpop"><div class="acct-name">' + esc(nm) + '</div>' +
      '<button class="navmenu-item" data-a="navpersonas">' + ico("user") + " Personas</button>" +
      '<button class="navmenu-item" data-a="navtraining">' + ico("spark") + " Clara training</button>" +
      '<button class="navmenu-item" data-a="navprofile">' + ico("user") + " Profile settings</button>" +
      '<button class="navmenu-item" data-a="theme">' + ico(S.dark ? "sun" : "moon") + (S.dark ? " Light mode" : " Dark mode") + "</button>" +
      '<button class="navmenu-item" data-a="navins">' + ico("bulb") + " Insights</button>" +
      '<button class="navmenu-item" data-a="tab" data-k="thinking">' + ico("spark") + " Clara’s thinking</button>" +
      '<button class="navmenu-item" data-a="restart">' + ico("refresh") + " Restart demo</button>" +
      '<button class="navmenu-item" data-a="logout">' + ico("out") + " Log out</button></div>"
    );
  }
  function vProfile() {
    var a = S.account || (S.account = { fullName: "", email: "", phone: "", title: "", tz: "(GMT+00:00) London" });
    if (!a.email) a.email = S.email || "";
    var av = initials(a.fullName || (nameOf() === "there" ? "" : nameOf()));
    function field(label, path, val, ph, type) {
      return '<div class="pf-field"><label>' + label + '</label><input class="pf-inp" data-model="account.' + path + '" value="' + esc(val || "") + '" placeholder="' + (ph || "") + '"' + (type === "email" ? ' type="email"' : "") + "></div>";
    }
    var tzs = ["(GMT+00:00) London", "(GMT+01:00) Berlin", "(GMT-05:00) New York", "(GMT-08:00) Los Angeles", "(GMT+05:00) Karachi", "(GMT+05:30) Mumbai", "(GMT+04:00) Dubai", "(GMT+08:00) Singapore", "(GMT+10:00) Sydney"];
    var tzsel = '<div class="pf-field"><label>Time zone</label><select class="pf-inp" data-model="account.tz">' + tzs.map(function (z) { return "<option" + (a.tz === z ? " selected" : "") + ">" + z + "</option>"; }).join("") + "</select></div>";
    return (
      '<div class="todayhead"><div class="th-day">Account</div><h1 class="th-t">Profile settings</h1><p class="th-s">Manage the details linked to your account. Your email address is what you use to sign in.</p></div>' +
      '<div class="pf-card"><div class="pf-top"><div class="avatar lg">' + av + '</div><div class="pf-top-t"><div class="pf-name">' + esc(a.fullName || "Your name") + '</div><div class="pf-sub">' + esc(a.email || S.email || "you@business.com") + "</div></div></div>" +
      '<div class="rsec">Personal</div><div class="pf-grid">' +
      field("Full name", "fullName", a.fullName, "Jane Doe") +
      field("Email address", "email", a.email, "you@business.com", "email") +
      field("Phone", "phone", a.phone, "Optional") +
      field("Job title", "title", a.title, "e.g. Founder") +
      tzsel +
      "</div>" +
      '<div class="rsec">Security</div><div class="pf-grid">' +
      '<div class="pf-field"><label>Password</label><div class="pf-static">•••••••••• <button class="lk" data-a="pfpass">Change password</button></div></div>' +
      '<div class="pf-field"><label>Signed in with</label><div class="pf-static">' + gLogo() + " Google</div></div>" +
      "</div>" +
      '<div class="pf-foot"><button class="btn" data-a="saveprofile">' + ico("check") + ' Save changes</button><button class="lk mut" data-a="tab" data-k="today">Cancel</button></div>'
    );
  }
  function tabLabel(t) {
    return { today: "Today", create: "Create", personas: "Personas", training: "Clara training", results: "Results", insights: "Insights", thinking: "Clara’s thinking", profile: "Profile settings" }[t] || t;
  }
  function crumbs() {
    var tr = (S.trail || []).slice(-3);
    if (tr.length <= 1) return "";
    return (
      '<div class="crumbs">' +
      tr
        .map(function (t, idx) {
          var last = idx === tr.length - 1;
          return '<button class="crumb' + (last ? " on" : "") + '" data-a="tab" data-k="' + t + '">' + tabLabel(t) + "</button>" + (last ? "" : '<span class="crumb-sep">›</span>');
        })
        .join("") +
      "</div>"
    );
  }
  function navbar() {
    return (
      '<div class="navbar">' + crumbs() + '<div class="nav-sp"></div><div class="nav-right">' +
      '<button class="navbtn theme" data-a="theme" aria-label="Toggle theme" title="' + (S.dark ? "Switch to light mode" : "Switch to dark mode") + '">' + ico(S.dark ? "sun" : "moon") + "</button>" +
      '<div class="nav-item"><button class="navbtn bell" data-a="notif" aria-label="Notifications">' + ico("bell") + '<span class="nav-badge">3</span></button>' + (S.notifOpen ? notifDropdown() : "") + "</div>" +
      '<div class="nav-item"><button class="acctbtn' + (S.acctOpen ? " open" : "") + '" data-a="acctmenu"><span class="avatar sm">' + initials(nameOf() === "there" ? "" : nameOf()) + "</span>" + ico("chev") + "</button>" + (S.acctOpen ? acctDropdown() : "") + "</div>" +
      "</div></div>"
    );
  }
  function vApp() {
    if (!S.trail || !S.trail.length) S.trail = [S.tab];
    else if (S.trail[S.trail.length - 1] !== S.tab) {
      var _ix = S.trail.indexOf(S.tab);
      if (_ix >= 0) S.trail = S.trail.slice(0, _ix + 1);
      else {
        S.trail.push(S.tab);
        if (S.trail.length > 10) S.trail = S.trail.slice(-10);
      }
    }
    var nm = nameOf() === "there" ? "Your business" : nameOf();
    var ini = initials(nameOf() === "there" ? "" : nameOf());
    var content =
      S.tab === "today"
        ? vToday()
        : S.tab === "create"
          ? vCreate()
          : S.tab === "personas"
          ? vPersonasTab()
          : S.tab === "training"
          ? vTraining()
          : S.tab === "insights"
            ? vInsights()
            : S.tab === "thinking"
              ? vThinking()
              : S.tab === "profile"
                ? vProfile()
                : vResults();
    var foot =
      '<div class="rail-foot">' +
      (S.switch ? bizMenu() : "") +
      '<button class="rail-biz' +
      (S.switch ? " open" : "") +
      '" data-a="switch" aria-label="Switch business"><div class="avatar">' +
      ini +
      '</div><div class="rail-me"><div class="me-n">' +
      esc(nm) +
      '</div><div class="me-s">' +
      arch().label +
      '</div></div><span class="chev">' +
      ico("chev") +
      "</span></button></div>";
    return (
      '<div class="app"><div class="rail"><div class="rail-logo">' +
      mk(30) +
      '<span>Clarity</span></div><nav class="rail-nav">' +
      navItem("today", "Today", "home") +
      navItem("create", "Create", "zap") +
      navItem("results", "Results", "chart") +
      "</nav>" +
      foot +
      '</div><div class="main">' +
      navbar() +
      '<div class="main-scroll' +
      (S.tab === "today" && S.todayView === "board" ? " full" : "") +
      '">' +
      content +
      "</div></div></div>"
    );
  }
  function captionFor(task,rev){var a=arch(),tone=S.p.tone,nm=(nameOf()==="there"?"":nameOf());var hooks=({warm:["Here’s the honest version.","A little something from us this week.","Real talk for a second."],bold:["Most people get this wrong.","Let’s be blunt.","Stop scrolling — this matters."],pro:["A quick, useful note.","Worth two minutes.","One thing worth knowing."],playful:["Okay, confession time. ✨","Plot twist. 👀","Hot take incoming. 🌶"]})[tone]||["Here’s the honest version."];var cta=({warm:"If that sounds like you, come say hi.",bold:"Stop settling — you know where to find us.",pro:"Happy to help if this is on your list — just reach out.",playful:"Drop a 🙋 if you’re in — we got you."})[tone]||"";return hooks[(rev||0)%hooks.length]+"\n\n"+a.pos+"\n\n"+cta+(nm?"\n\n— "+nm:"");}
  function inferType(p){if(/instagram|pinterest|facebook/i.test(p))return "image";if(/tiktok|youtube/i.test(p))return "video";return "text";}
  var FMT_OPTS={image:["Feed post","Carousel","Story","Pin"],video:["Reel","Short","Story"],text:["Post","Article","Thread","Newsletter"],audio:["Podcast","Audiogram","Voice note"]};
  function fmtFor(type,p){var pf=({image:{Instagram:"Feed post",Pinterest:"Pin",Facebook:"Feed post"},video:{TikTok:"Short video",YouTube:"Short",Instagram:"Reel"},text:{LinkedIn:"Post",Email:"Newsletter",X:"Post","Content & SEO":"Article"}})[type]||{};return pf[p]||FMT_OPTS[type][0];}
  var POSTKIT={food:{media:"A close, natural shot of your product mid-craft — flour-dusted, soft daylight, real not staged.",tags:"#madelocal #craftfood #smallbatch #supportlocal"},saas:{media:"A clean before/after or a simple UI frame showing the hours saved — minimal, high-contrast.",tags:"#b2bsaas #productivity #founders #workflow"},fitness:{media:"A candid, real-person shot mid-session — energy over perfection, natural light.",tags:"#fitnessjourney #week1 #coaching #showup"},shop:{media:"A styled-but-honest flat-lay or lifestyle shot — story first, price never.",tags:"#smallbusiness #handmade #shopindie #thestory"},services:{media:"A warm, trustworthy shot — you or your space, faces and credibility over stock.",tags:"#trusted #local #realresults #askanexpert"},creator:{media:"A bold thumbnail-style frame with one clear promise — your face plus the transformation.",tags:"#learnwithme #creator #howto #growth"},other:{media:"A clean, on-brand image that leads with your one clear difference.",tags:"#yourbrand #local #thedifference"}};
  function buildPost(task,i){var a=arch(),POSTABLE={Instagram:1,LinkedIn:1,TikTok:1,YouTube:1,X:1,Facebook:1,Pinterest:1,Email:1,"Content & SEO":1,"SEO or blog":1,"Google profile":1,Community:1},uc=(S.p.channels||[]).filter(function(c){return POSTABLE[c];}),cands=uc.length?uc:a.channels.filter(function(c){return POSTABLE[c];});if(!cands.length)cands=[a.channels[0]];var idx=(i!=null?i:0)%cands.length;var p=cands[(idx+cands.length)%cands.length];if(i!=null&&S.tweak&&S.tweak[i]&&S.tweak[i].platform)p=S.tweak[i].platform;var ty=inferType(p),kit=POSTKIT[S.p.ind]||POSTKIT.other;var post={type:ty,platform:p,format:fmtFor(ty,p),caption:captionFor(task,0),media:ty==="text"?"":kit.media,hashtags:kit.tags,rev:0};post.personaId=(i!=null&&S.tweak&&S.tweak[i]&&S.tweak[i].personaId)?S.tweak[i].personaId:pickPersonaId(i);post.tags=(task&&Array.isArray(task.tags))?task.tags.slice():(task&&task.tag?[task.tag]:[]);initEngineFields(post,task);return post;}
  var CGEN_CONTROLS={
    text:[
      {key:"length",label:"Word count",type:"select",opts:["Short (~60 words)","Medium (~120 words)","Long (~250 words)"],def:"Medium (~120 words)"},
      {key:"tone",label:"Tone",type:"select",opts:["Match brand tone","Warm","Bold","Professional","Playful"],def:"Match brand tone"},
      {key:"style",label:"Format style",type:"select",opts:["Story-led","Listicle","Punchy one-liner","Q&A / hook"],def:"Story-led"},
    ],
    image:[
      {key:"aspect",label:"Aspect ratio",type:"ro"},
      {key:"styleDir",label:"Style direction",type:"select",opts:["Editorial craft","Minimal clean","Bold promo","Documentary / BTS"],def:"Editorial craft"},
      {key:"textOverlay",label:"Text overlay",type:"toggle",def:"On"},
    ],
    video:[
      {key:"vtype",label:"Video type",type:"ro"},
      {key:"duration",label:"Duration",type:"ro"},
      {key:"aspect",label:"Aspect ratio",type:"ro"},
      {key:"visualStyle",label:"Visual style",type:"select",opts:["Casual / UGC","Cinematic","Animated / Motion graphics","Documentary BTS"],def:"Casual / UGC"},
      {key:"captions",label:"Burn-in captions",type:"toggle",def:"On"},
      {key:"script",label:"Script or scene description",type:"textarea",ph:"Key scenes, dialogue, or shot list…"},
    ],
    audio:[
      {key:"atype",label:"Audio type",type:"ro"},
      {key:"duration",label:"Duration",type:"ro"},
      {key:"voiceStyle",label:"Voice style",type:"select",opts:["Conversational","Calm","Energetic","Professional"],def:"Conversational"},
      {key:"musicBed",label:"Background music",type:"toggle",def:"On"},
      {key:"script",label:"Script or talking points",type:"textarea",ph:"Key messages, bullet points, or full script…"},
    ],
  };
  var CGEN_BRIEF=[
    {key:"goal",label:"Campaign objective",ph:"What measurable outcome do we want?",help:"What you want this piece to achieve."},
    {key:"whyNow",label:"Why this moment",ph:"Why this campaign now?",help:"The timing reason behind it."},
    {key:"persona",label:"Primary persona",type:"select",help:"Who this message should feel written for."},
    {key:"message",label:"Core message",type:"textarea",note:"— single clear sentence",ph:"What is the one idea the audience must remember?",help:"Keep it sharp: offer + differentiator + urgency."},
    {key:"proof",label:"Proof points",ph:"What makes this claim credible?",help:"Ingredients, process, data, social proof."},
    {key:"cta",label:"Call to action",ph:"What exactly should people do next?",help:"The one action you want them to take."},
  ];
  function ctrlDefs(type){return CGEN_CONTROLS[type]||CGEN_CONTROLS.text;}
  function personaOpts(){var a=AUDS[S.p.aud]||"Your ideal customer";return a==="Your ideal customer"?[a,"All segments"]:[a,"All segments"];}
  function aspectFor(fmt){fmt=fmt||"";if(/1\.91/.test(fmt))return "1.91:1";if(/9:16|reel|story|short(?!s)/i.test(fmt))return "9:16";if(/16:9|long/i.test(fmt))return "16:9";if(/4:5|portrait|pin/i.test(fmt))return "4:5";if(/1:1|feed|square|carousel/i.test(fmt))return "1:1";return "1:1";}
  function durFor(fmt,type){fmt=fmt||"";if(type==="audio"){if(/clip|voice/i.test(fmt))return "3–5 min";if(/video/i.test(fmt))return "20–60 min";return "25–45 min";}if(/story/i.test(fmt))return "0:15";if(/short(?!s)/i.test(fmt))return "0:60";if(/long/i.test(fmt))return "3:00";if(/feed/i.test(fmt))return "0:45";return "0:30";}
  function roVal(key,post){if(key==="aspect")return aspectFor(post.format);if(key==="duration")return durFor(post.format,post.type);if(key==="vtype"||key==="atype")return post.format||"—";return "—";}
  function goalPhrase(){return ({customers:"Win new customers",revenue:"Drive sales",visibility:"Grow visibility & reach",edge:"Sharpen your positioning"})[S.p.goal]||"Move your main goal forward";}
  function ctaFor(){return ({food:"Come taste it this week.",saas:"Start your free trial.",fitness:"Book your first session.",shop:"Shop the drop.",services:"Get in touch today.",creator:"Follow for more."})[S.p.ind]||"Get in touch today.";}
  function initEngineFields(post,task){
    if(!post.brief){var a=arch(),aud=AUDS[S.p.aud]||"Your ideal customer";post.brief={goal:goalPhrase(),whyNow:"This is today’s highest-leverage move.",persona:aud,message:(task&&task.title)||a.pos||"",proof:"",cta:ctaFor()};}
    if(!post.ctrl){var d={};ctrlDefs(post.type).forEach(function(c){if(c.def!=null)d[c.key]=c.def;});post.ctrl=d;}
  }
  function setPath(obj,path,val){var p=path.split("."),o=obj;for(var j=0;j<p.length-1;j++){if(!o[p[j]]||typeof o[p[j]]!=="object")o[p[j]]={};o=o[p[j]];}o[p[p.length-1]]=val;}
  function getPath(obj,path){var p=path.split("."),o=obj;for(var j=0;j<p.length;j++){if(o==null)return undefined;o=o[p[j]];}return o;}
  function typeIcon(ty){return ty==="image"?"img":ty==="video"?"vid":ty==="audio"?"mic":"txt";}
  function typeLabel(ty){return ty==="image"?"Image":ty==="video"?"Video":ty==="audio"?"Audio":"Text";}
  function mediaLabel(ty){return ty==="video"?"Video direction":ty==="audio"?"Audio direction / script":"Image direction";}
  function mediaWord(ty){return ty==="video"?"Video":ty==="audio"?"Audio":"Image";}
  function openCreate(indices){if(!Array.isArray(S.queue))S.queue=[];var tasks=todayTasks();indices.forEach(function(i){if(S.queue.indexOf(i)<0)S.queue.push(i);if(!S.posts[i])S.posts[i]=buildPost(tasks[i],i);});S.createView="list";S.cFilter="all";S.createDetail=null;S.screen="app";S.tab="create";render();}
  function qStatus(i){if(S.pub[i])return "scheduled";if(S.qdraft[i])return "draft";return "pending";}
  function draftCard(task,i){var post=S.posts[i]||(S.posts[i]=buildPost(task,i)),pub=!!S.pub[i],draft=!pub&&!!S.qdraft[i],edit=!pub&&!!S.qedit[i];var dest='<span class="dch">'+ico(typeIcon(post.type))+post.platform+" · "+post.format+'</span>'+(task.camp?'<span class="dc-camp">'+ico("mega")+task.camp+'</span>':'');if(pub)return '<div class="dcard done"><div class="dc-top">'+dest+'</div><div class="dtext">'+esc(post.caption)+"</div>"+(post.media?'<div class="pmedia"><span class="pm-l">'+mediaWord(post.type)+' direction</span> '+esc(post.media)+"</div>":"")+(post.hashtags?'<div class="ptags">'+esc(post.hashtags)+"</div>":"")+'<div class="dc-a"><span class="doneflag">'+ico("checkc")+(post.scheduled?"Scheduled · "+post.scheduled:"Published")+'</span><button class="lk" data-a="postresult" data-k="'+i+'">'+ico("chart")+' See results</button></div></div>';var flag=draft&&!edit?'<div class="draftflag">'+ico("checkc")+' Draft saved — it’s waiting under <b>Drafts</b>. Schedule it whenever you’re ready.</div>':"";var view;if(edit){var tc="";["text","image","video","audio"].forEach(function(ty){tc+='<button class="tchip'+(post.type===ty?" on":"")+'" data-a="settype" data-k="'+i+'" data-t="'+ty+'">'+ico(typeIcon(ty))+typeLabel(ty)+'</button>';});var pfo="";arch().channels.forEach(function(c){pfo+='<option value="'+c+'"'+(post.platform===c?" selected":"")+'>'+c+'</option>';});var fmo="";(FMT_OPTS[post.type]||[]).forEach(function(f){fmo+='<option value="'+f+'"'+(post.format===f?" selected":"")+'>'+f+'</option>';});view='<div class="editgrid"><div class="efield"><label>Content type</label><div class="tchips">'+tc+'</div></div><div class="erow"><div class="efield"><label>Platform</label><select class="sel" data-psel="platform" data-k="'+i+'">'+pfo+'</select></div><div class="efield"><label>Format</label><select class="sel" data-psel="format" data-k="'+i+'">'+fmo+'</select></div></div><div class="efield"><label>Caption</label><textarea class="dtext-edit" data-pf="caption" data-pi="'+i+'">'+esc(post.caption)+'</textarea></div>'+(post.type!=="text"?'<div class="efield"><label>'+mediaLabel(post.type)+'</label><textarea class="mtext-edit" data-pf="media" data-pi="'+i+'">'+esc(post.media)+'</textarea></div>':"")+'<div class="efield"><label>Hashtags</label><input class="hinp" data-pf="hashtags" data-pi="'+i+'" value="'+esc(post.hashtags)+'"></div></div>';}else{view='<div class="dtext">'+esc(post.caption)+"</div>"+(post.media?'<div class="pmedia"><span class="pm-l">'+mediaWord(post.type)+' direction</span> '+esc(post.media)+"</div>":"")+(post.hashtags?'<div class="ptags">'+esc(post.hashtags)+"</div>":"");}var pubBtn='<button class="btn sm" data-a="qpublish" data-k="'+i+'">'+ico("send")+(draft?' Schedule it':' Publish')+'</button>';var draftBtn='<button class="lk mut" data-a="qdraftsave" data-k="'+i+'">'+ico("flag")+(draft?"Update draft":"Save as draft")+'</button>';var editBtn='<button class="lk mut" data-a="qedit" data-k="'+i+'">'+ico("edit")+(edit?"Done editing":"Edit")+'</button>';var regenBtn='<button class="lk mut" data-a="qregen" data-k="'+i+'">'+ico("refresh")+"Regenerate</button>";var actions=pubBtn+draftBtn+editBtn+regenBtn;return '<div class="dcard'+(draft?" drafted":"")+(edit?" editing":"")+'"><div class="dc-top">'+dest+"</div>"+flag+view+'<div class="dc-a">'+actions+"</div></div>";}
  function createEmpty(){return '<div class="stub"><div class="stub-ic">'+ico("zap")+'</div><h2>Nothing queued yet</h2><p>Approve a move in Today and Clara will draft it here — or create a post of your own.</p><div class="stub-a"><button class="btn sm" data-a="conew">'+ico("plus")+' Create a post</button><button class="lk mut" data-a="tab" data-k="today">'+ico("arrow")+' Go to Today</button></div></div>';}
  function slotISO(k){var raw=(S.posts[k]&&S.posts[k].scheduled)||bestTime(k);var day=(raw.split(",")[0]||"").trim().toLowerCase();var base=new Date();if(day==="today")return isoOf(base);if(day==="this week"){var d0=new Date(base);d0.setDate(d0.getDate()+3);return isoOf(d0);}var names=["sun","mon","tue","wed","thu","fri","sat"];var idx=names.indexOf(day.slice(0,3));if(idx<0)return isoOf(base);var add=(idx-base.getDay()+7)%7;if(add===0)add=7;var d=new Date(base);d.setDate(d.getDate()+add);return isoOf(d);}
  function slotTime(k){var raw=(S.posts[k]&&S.posts[k].scheduled)||bestTime(k);return (raw.split(",")[1]||"").trim();}
  function schedPosts(){var out=[];(S.queue||[]).forEach(function(i){if(S.pub[i])out.push({i:i,iso:slotISO(i),time:slotTime(i),post:S.posts[i]||{},task:taskAt(i)});});return out;}
  function cCalMonth(){if(S.cMonth)return S.cMonth;var sched=schedPosts();var d=sched.length?parseISO(sched.map(function(s){return s.iso;}).sort()[0]):new Date();return {y:d.getFullYear(),m:d.getMonth()};}
  function calRender(byDay,cm,opts){
    opts=opts||{};
    var first=new Date(cm.y,cm.m,1),startDow=(first.getDay()+6)%7,dim=new Date(cm.y,cm.m+1,0).getDate();
    var title=first.toLocaleDateString("en-GB",{month:"long",year:"numeric"});
    var dows=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    var head='<div class="ccal-h"><button class="cal-nav prev" data-a="'+opts.monthAction+'" data-k="-1">'+ico("arrow")+'</button><span class="cal-title">'+title+'</span><button class="cal-nav" data-a="'+opts.monthAction+'" data-k="1">'+ico("arrow")+'</button></div>';
    var dowRow='<div class="ccal-grid ccal-dow">'+dows.map(function(d){return "<span>"+d+"</span>";}).join("")+"</div>";
    var cells="",t=todayISO();
    for(var e=0;e<startDow;e++)cells+='<div class="ccal-cell empty"></div>';
    for(var d=1;d<=dim;d++){
      var iso=cm.y+"-"+String(cm.m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0"),items=byDay[iso]||[];
      var chips=items.slice(0,2).map(function(s){return '<div class="ccal-chip'+(s.done?" done":"")+'">'+ico(s.icon)+'<span>'+s.label+'</span></div>';}).join("");
      if(items.length>2)chips+='<div class="ccal-more">+'+(items.length-2)+' more</div>';
      cells+='<div class="ccal-cell'+(iso===t?" today":"")+(items.length?" has":"")+'"><span class="ccal-d">'+d+'</span>'+chips+'</div>';
    }
    var grid='<div class="ccal-grid ccal-body">'+cells+"</div>";
    var agenda=Object.keys(byDay).sort().map(function(iso){var items=byDay[iso];return '<div class="sched-day"><div class="sched-day-h">'+ico("cal")+" "+dayLabel(iso)+'</div>'+items.map(function(s){var clk=s.i!=null,open=clk?"button":"div",at=clk?' data-a="postresult" data-k="'+s.i+'"':'';return '<'+open+' class="sched-row'+(clk?"":" static")+'"'+at+'><span class="rr-ic">'+ico(s.icon)+'</span><span class="rr-main"><span class="rr-name">'+s.title+'</span><span class="rr-sub">'+(s.sub||"")+'</span></span><span class="rr-status '+(s.statusCls||"sched")+'">'+(s.status||"")+'</span>'+(clk?ico("arrow"):"")+'</'+open+'>';}).join("")+"</div>";}).join("");
    return '<div class="ccal">'+head+dowRow+grid+'</div><div class="rsec">'+(opts.agendaTitle||"Scheduled posts")+'</div>'+agenda;
  }
  function postItem(s){return {icon:typeIcon(s.post.type),label:s.post.platform||"Post",title:s.task.title||"Post",sub:(s.post.platform||"")+(s.time?" · "+s.time:""),i:s.i,status:s.post.live?"Live":"Scheduled",statusCls:s.post.live?"live":"sched"};}
  function vCreateCal(){
    var sched=schedPosts();
    if(!sched.length)return '<div class="rempty" style="margin-top:14px">Nothing scheduled yet — publish a post and it’ll land on the calendar.</div>';
    var byDay={};sched.forEach(function(s){(byDay[s.iso]=byDay[s.iso]||[]).push(postItem(s));});
    return calRender(byDay,cCalMonth(),{monthAction:"cmonth",agendaTitle:"Scheduled posts"});
  }
  function vTodayCal(){
    var byDay={},t=todayISO();
    schedPosts().forEach(function(s){if(s.iso>=t){(byDay[s.iso]=byDay[s.iso]||[]).push(postItem(s));}});
    baseTasks().forEach(function(tk,i){if(!S.done[i]&&!S.pub[i]){(byDay[t]=byDay[t]||[]).push({icon:tk.icon,label:tk.title.split(" ").slice(0,2).join(" "),title:tk.title,sub:taskKind(tk)==="action"?"Action · to do":"Content · to draft",status:"Planned",statusCls:"sched"});}});
    Object.keys(S.hist||{}).forEach(function(iso){if(iso<t){(S.hist[iso]||[]).forEach(function(h){(byDay[iso]=byDay[iso]||[]).push({icon:h.icon||"checkc",label:(h.title||"Done").split(" ").slice(0,2).join(" "),title:h.title||"Done",sub:"Completed",done:true,status:"Done",statusCls:"live"});});}});
    if(!Object.keys(byDay).length)return '<div class="rempty" style="margin-top:14px">Nothing on your calendar yet — approve and schedule moves and they’ll show here.</div>';
    return calRender(byDay,cCalMonth(),{monthAction:"cmonth",agendaTitle:"Your content calendar"});
  }
  function taskAt(i){return todayTasks()[i]||(S.ownTasks&&S.ownTasks[i])||{};}
  function nextOwnIdx(){var n=900;while((S.ownTasks&&S.ownTasks[n])||S.posts[n])n++;return n;}
  function angleTitle(a){var w=(a||"Custom post").trim().replace(/[.!?]+$/,"").split(/\s+/).slice(0,6).join(" ");return w.charAt(0).toUpperCase()+w.slice(1);}
  function freshIdea(){var au=(AUDS[S.p.aud]||"your customers").toLowerCase();var nm=nameOf()==="there"?"your business":nameOf();var pool=["Share the story behind "+nm+" and why it exists","Show a real result "+au+" got from working with you","Teach one thing "+au+" always ask you about","Give your honest take on something everyone in your space gets wrong"];return pool[Math.floor(Math.random()*pool.length)];}
  function enhanceAngle(t){t=(t||"").trim();if(!t)return "";var au=(AUDS[S.p.aud]||"your customers").toLowerCase();var core=t.charAt(0).toUpperCase()+t.slice(1);core=core.replace(/[.!?]+$/,"");var lc=core.charAt(0).toLowerCase()+core.slice(1);var frames=[core+" — told as a short, honest story that "+au+" will remember, ending with one clear ask.",
    "Open with a hook, then "+lc+" — kept human and specific, so "+au+" feel it and know what to do next.",
    core+". Lead with why it matters to "+au+", back it with a real detail, and close with a simple next step."];
    return frames[t.length%frames.length];}
  function angleSuggestions(type,plat){
    var nm=nameOf()==="there"?"your business":nameOf();
    var au=(AUDS[S.p.aud]||"your customers").toLowerCase();
    var pool=[
      "Feature your best offer and why "+au+" need it right now",
      "Show the behind-the-scenes of how "+nm+" really works",
      "Teach one thing "+au+" always ask you about",
      "Share a customer win — a real before and after",
      "Give your honest take on something everyone in your space gets wrong",
      "Answer the question "+au+" have right before they buy",
      (type==="video"?"Walk through your process in a quick clip":"Break down your process step by step"),
    ];
    var s=(plat.length+type.length)%pool.length,out=[];
    for(var k=0;k<3;k++)out.push(pool[(s+k)%pool.length]);
    return out;
  }
  function captionFromAngle(angle,type,plat){
    var tone=S.p.tone,nm=(nameOf()==="there"?"":nameOf());
    var hook=({warm:"Here’s the honest version.",bold:"Let’s be blunt.",pro:"A quick, useful note.",playful:"Okay, confession time. ✨"})[tone]||"Here’s the honest version.";
    var cta=({warm:"If that sounds like you, come say hi.",bold:"Stop settling — you know where to find us.",pro:"Happy to help if this is on your list — just reach out.",playful:"Drop a 🙋 if you’re in — we got you."})[tone]||"";
    var b=(angle||"").trim();b=b.charAt(0).toUpperCase()+b.slice(1);if(b&&!/[.!?]$/.test(b))b+=".";
    return hook+"\n\n"+b+"\n\n"+cta+(nm?"\n\n— "+nm:"");
  }
  function briefEditC(c){
    return CGEN_BRIEF.map(function(f){
      var val=getPath(c,"brief."+f.key);if(val==null)val="";var inner;
      if(f.type==="select"){inner='<select class="sel" data-model="compose.brief.'+f.key+'">'+personaOpts().map(function(o){return "<option"+(val===o?" selected":"")+">"+esc(o)+"</option>";}).join("")+"</select>";}
      else if(f.type==="textarea"){inner='<textarea class="dtext-edit" data-model="compose.brief.'+f.key+'" placeholder="'+(f.ph||"")+'">'+esc(val)+"</textarea>";}
      else{inner='<input class="pf-inp" data-model="compose.brief.'+f.key+'" value="'+esc(val)+'" placeholder="'+(f.ph||"")+'">';}
      return '<div class="efield"><label>'+f.label+(f.note?' <span class="ef-note">'+f.note+"</span>":"")+"</label>"+inner+(f.help?'<div class="ef-help">'+f.help+"</div>":"")+"</div>";
    }).join("");
  }
  function ctrlEditC(c){
    return ctrlDefs(c.type).map(function(cc){
      var inner;
      if(cc.type==="ro")inner='<div class="pf-static">'+esc(roVal(cc.key,{format:c.format,type:c.type}))+" <span class=\"ef-note\">from format</span></div>";
      else if(cc.type==="select"){var val=getPath(c,"ctrl."+cc.key);if(val==null)val=cc.def;inner='<select class="sel" data-model="compose.ctrl.'+cc.key+'">'+cc.opts.map(function(o){return "<option"+(val===o?" selected":"")+">"+esc(o)+"</option>";}).join("")+"</select>";}
      else if(cc.type==="toggle"){var on=(getPath(c,"ctrl."+cc.key)||cc.def)==="On";inner='<button class="tog'+(on?" on":"")+'" data-a="ctoggle" data-t="'+cc.key+'"><span class="tog-dot"></span>'+(on?"On":"Off")+"</button>";}
      else if(cc.type==="textarea"){var tv=getPath(c,"ctrl."+cc.key)||"";inner='<textarea class="mtext-edit" data-model="compose.ctrl.'+cc.key+'" placeholder="'+(cc.ph||"")+'">'+esc(tv)+"</textarea>";}
      return '<div class="efield"><label>'+cc.label+"</label>"+inner+"</div>";
    }).join("");
  }
  function vCompose(){
    var c=S.compose,types=[["text","Text"],["image","Image"],["video","Video"],["audio","Audio"]];
    var tchips=types.map(function(tp){return '<button class="ocard'+(c.type===tp[0]?" on":"")+'" data-a="cotype" data-t="'+tp[0]+'">'+ico(typeIcon(tp[0]))+" "+tp[1]+"</button>";}).join("");
    var chans=(S.p.channels||[]).filter(function(x){return POSTABLE_CH[x];});if(!chans.length)chans=arch().channels.filter(function(x){return POSTABLE_CH[x];});if(!chans.length)chans=["Instagram"];
    var pchips=chans.map(function(pl){return '<button class="ocard'+(c.platform===pl?" on":"")+'" data-a="coplat" data-k="'+pl+'">'+pl+"</button>";}).join("");
    var angleSec="";
    if(c.type&&c.platform){
      if(!c.angles||!c.angles.length)c.angles=angleSuggestions(c.type,c.platform);
      var cards=c.angles.map(function(a,idx){return '<button class="anglecard'+(c.angleSel===idx?" on":"")+'" data-a="coangle" data-k="'+idx+'"><span class="ac-n">'+(idx+1)+'</span><span class="ac-t">'+esc(a)+"</span>"+(c.angleSel===idx?ico("check"):"")+"</button>";}).join("");
      var ownCard='<button class="anglecard own'+(c.angleSel==="own"?" on":"")+'" data-a="coangle" data-k="own"><span class="ac-n">'+ico("edit")+'</span><span class="ac-t">I have my own idea</span>'+(c.angleSel==="own"?ico("check"):"")+"</button>";
      var ownBox=c.angleSel==="own"?'<textarea class="ownbox" data-coown placeholder="Tell Clara what you want this post to be about — e.g. why I started this bakery">'+esc(c.ownText||"")+'</textarea><div class="ownbar"><button class="btn sm ghost" data-a="coenhance">'+ico("spark")+" Enhance with AI</button><span class=\"ownbar-h\">Type an idea and Clara will sharpen it — or leave it blank and she’ll draft one for you.</span></div>":"";
      angleSec='<div class="rsec">Pick an angle</div><div class="anglelist">'+cards+ownCard+"</div>"+ownBox;
    }
    var detailSec="";
    if(c.type&&c.platform&&c.angleSel!=null){
      var angleText=c.angleSel==="own"?(c.ownText||""):((c.angles&&c.angles[c.angleSel])||"");
      if(!c.format)c.format=fmtFor(c.type,c.platform);
      if(!c.brief)c.brief={goal:goalPhrase(),whyNow:"A fresh piece for your audience.",persona:AUDS[S.p.aud]||"Your ideal customer",message:angleText,proof:"",cta:ctaFor()};
      if(!c.ctrl){var dd={};ctrlDefs(c.type).forEach(function(cc){if(cc.def!=null)dd[cc.key]=cc.def;});c.ctrl=dd;}
      var fmo=(FMT_OPTS[c.type]||[]).map(function(f){return "<option"+(c.format===f?" selected":"")+">"+esc(f)+"</option>";}).join("");
      detailSec='<div class="co-perhint">'+ico("user")+" Clara will match this to the right persona once you generate it.</div>"+'<div class="rsec">Format</div><div class="editgrid"><div class="efield"><label>Format</label><select class="sel" data-model="compose.format">'+fmo+"</select></div></div>"+
        '<div class="rsec">Creative brief</div><div class="editgrid">'+briefEditC(c)+"</div>"+
        '<div class="rsec">'+typeLabel(c.type)+' settings</div><div class="editgrid">'+ctrlEditC(c)+"</div>";
    }
    var canGen=c.type&&c.platform&&c.angleSel!=null;
    var foot='<div class="stepfoot"><button class="lk mut" data-a="cocancel">'+ico("arrow")+' Cancel</button><button class="btn'+(canGen?"":" disabled")+'" data-a="cogen">'+ico("spark")+" Generate post</button></div>";
    return '<div class="todayhead"><div class="th-day">Create</div><h1 class="th-t">Create a post</h1><p class="th-s">Pick a type and platform, choose an angle, then shape the brief — the same fields Clara fills for you.</p></div>'+
      '<div class="rsec">Content type</div><div class="ocardrow">'+tchips+"</div>"+
      '<div class="rsec">Platform</div><div class="ocardrow">'+pchips+"</div>"+
      angleSec+detailSec+foot;
  }
  function personaTag(persona){if(!persona)return "";return '<span class="pers-tag">'+ico("user")+" "+esc(persona.name)+"</span>";}
  function tagChip(t){return '<span class="tagchip">#'+esc(t)+"</span>";}
  function tagChips(tags){if(!tags||!tags.length)return "";return '<div class="tagrow">'+tags.map(tagChip).join("")+"</div>";}
  function allQueueTags(){var set={},order=[];(S.queue||[]).forEach(function(i){var p=S.posts[i];if(p&&p.tags)p.tags.forEach(function(t){if(!set[t]){set[t]=1;order.push(t);}});});return order;}
  function ccard(task,i){
    var post=S.posts[i]||(S.posts[i]=buildPost(task,i));
    var st=qStatus(i),live=post.live;
    var sl=st==="scheduled"?(live?"Live":"Scheduled"):st==="draft"?"Draft":"Pending";
    var scls=st==="scheduled"?(live?"live":"sched"):st;
    var footL=st==="scheduled"?(ico("cal")+" "+(post.scheduled||"—")):(st==="draft"?"Saved as draft":"Ready to review");
    var persona=personaFor(i);
    return '<div class="pcard '+scls+'">'+
      '<div class="pcard-top"><span class="dch">'+ico(typeIcon(post.type))+post.platform+'</span><span class="pcard-st '+scls+'">'+sl+"</span></div>"+
      '<div class="pcard-for">'+esc(task.title||"Post")+"</div>"+
      '<div class="pcard-persona">'+personaTag(persona)+"</div>"+
      ((post.tags&&post.tags.length)?tagChips(post.tags):"")+
      '<div class="pcard-foot"><span class="pcard-fl">'+footL+'</span><button class="pcard-open" data-a="copen" data-k="'+i+'">Open '+ico("arrow")+"</button></div>"+
      "</div>";
  }
  function briefEdit(i,post){
    return CGEN_BRIEF.map(function(f){
      var val=getPath(post,"brief."+f.key);if(val==null)val="";var inner;
      if(f.type==="select"){inner='<select class="sel" data-psel="brief.'+f.key+'" data-k="'+i+'">'+personaOpts().map(function(o){return "<option"+(val===o?" selected":"")+">"+esc(o)+"</option>";}).join("")+"</select>";}
      else if(f.type==="textarea"){inner='<textarea class="dtext-edit" data-pf="brief.'+f.key+'" data-pi="'+i+'" placeholder="'+(f.ph||"")+'">'+esc(val)+"</textarea>";}
      else{inner='<input class="pf-inp" data-pf="brief.'+f.key+'" data-pi="'+i+'" value="'+esc(val)+'" placeholder="'+(f.ph||"")+'">';}
      return '<div class="efield"><label>'+f.label+(f.note?' <span class="ef-note">'+f.note+"</span>":"")+"</label>"+inner+(f.help?'<div class="ef-help">'+f.help+"</div>":"")+"</div>";
    }).join("");
  }
  function ctrlEdit(i,post){
    return ctrlDefs(post.type).map(function(c){
      var inner;
      if(c.type==="ro")inner='<div class="pf-static">'+esc(roVal(c.key,post))+" <span class=\"ef-note\">from format</span></div>";
      else if(c.type==="select"){var val=getPath(post,"ctrl."+c.key);if(val==null)val=c.def;inner='<select class="sel" data-psel="ctrl.'+c.key+'" data-k="'+i+'">'+c.opts.map(function(o){return "<option"+(val===o?" selected":"")+">"+esc(o)+"</option>";}).join("")+"</select>";}
      else if(c.type==="toggle"){var on=(getPath(post,"ctrl."+c.key)||c.def)==="On";inner='<button class="tog'+(on?" on":"")+'" data-a="ptoggle" data-k="'+i+'" data-t="ctrl.'+c.key+'"><span class="tog-dot"></span>'+(on?"On":"Off")+"</button>";}
      else if(c.type==="textarea"){var tv=getPath(post,"ctrl."+c.key)||"";inner='<textarea class="mtext-edit" data-pf="ctrl.'+c.key+'" data-pi="'+i+'" placeholder="'+(c.ph||"")+'">'+esc(tv)+"</textarea>";}
      return '<div class="efield"><label>'+c.label+"</label>"+inner+"</div>";
    }).join("");
  }
  function briefRead(post){
    var b=post.brief||{};
    var facts=[["Objective",b.goal],["Why now",b.whyNow],["Persona",b.persona],["Proof",b.proof],["CTA",b.cta]].filter(function(x){return (x[1]||"").toString().trim();});
    var f=facts.map(function(x){return '<div class="pd-fact"><span class="pd-fl">'+x[0]+'</span><span class="pd-fv">'+esc(x[1])+"</span></div>";}).join("");
    var msg=(b.message||"").trim()?'<div class="pd-box" style="margin-bottom:10px">'+esc(b.message)+"</div>":"";
    if(!f&&!msg)return "";
    return '<section class="pd-sec"><div class="pd-lab">'+ico("compass")+' Creative brief</div>'+msg+(f?'<div class="pd-facts">'+f+"</div>":"")+"</section>";
  }
  function ctrlRead(post){
    var items=ctrlDefs(post.type).filter(function(c){return c.type!=="textarea";}).map(function(c){
      var v=c.type==="ro"?roVal(c.key,post):(getPath(post,"ctrl."+c.key)!=null?getPath(post,"ctrl."+c.key):(c.def||"—"));
      return '<div class="pd-fact"><span class="pd-fl">'+c.label+'</span><span class="pd-fv">'+esc(v)+"</span></div>";
    }).join("");
    var sc=ctrlDefs(post.type).filter(function(c){return c.type==="textarea";})[0],scriptBox="";
    if(sc){var sv=getPath(post,"ctrl."+sc.key);if((sv||"").trim())scriptBox='<div class="pd-lab" style="margin-top:12px">'+esc(sc.label)+'</div><div class="pd-box pd-dir">'+esc(sv)+"</div>";}
    return '<section class="pd-sec"><div class="pd-lab">'+ico(typeIcon(post.type))+" "+typeLabel(post.type)+' settings</div><div class="pd-facts">'+items+"</div>"+scriptBox+"</section>";
  }
  function vPostDetail(i){
    var task=taskAt(i),post=S.posts[i]||(S.posts[i]=buildPost(task,i));
    initEngineFields(post,task);
    var persona=personaFor(i);
    var pub=!!S.pub[i],draft=!pub&&!!S.qdraft[i],edit=!pub&&!!S.qedit[i];
    var st=qStatus(i),live=post.live;
    var sl=st==="scheduled"?(live?"Live":"Scheduled"):st==="draft"?"Draft":"Pending";
    var scls=st==="scheduled"?(live?"live":"sched"):st;
    var back='<button class="lk mut resback" data-a="cback">'+ico("arrow")+" All posts</button>";
    var head='<div class="todayhead"><div class="th-day">Create · post</div><h1 class="th-t">'+esc(task.title||"Post")+'</h1><div class="pd-meta"><span class="dch">'+ico(typeIcon(post.type))+post.platform+" · "+post.format+'</span><span class="pcard-st '+scls+'">'+sl+"</span>"+(post.scheduled?'<span class="pd-when">'+ico("cal")+" "+post.scheduled+"</span>":"")+(persona?'<span class="pd-persona-pill">'+ico("user")+" "+esc(persona.name)+"</span>":"")+"</div></div>";
    function fact(l,v){return '<div class="pd-fact"><span class="pd-fl">'+l+'</span><span class="pd-fv">'+esc(v)+"</span></div>";}
    var body;
    if(edit){
      var tc="";["text","image","video","audio"].forEach(function(ty){tc+='<button class="tchip'+(post.type===ty?" on":"")+'" data-a="settype" data-k="'+i+'" data-t="'+ty+'">'+ico(typeIcon(ty))+typeLabel(ty)+"</button>";});
      var pfo="";arch().channels.forEach(function(c){pfo+='<option value="'+c+'"'+(post.platform===c?" selected":"")+'>'+c+"</option>";});
      var fmo="";(FMT_OPTS[post.type]||[]).forEach(function(f){fmo+='<option value="'+f+'"'+(post.format===f?" selected":"")+'>'+f+"</option>";});
      body='<div class="pd-body">'+
        '<section class="pd-sec"><div class="pd-lab">Details</div><div class="editgrid"><div class="efield"><label>Content type</label><div class="tchips">'+tc+'</div></div><div class="erow"><div class="efield"><label>Platform</label><select class="sel" data-psel="platform" data-k="'+i+'">'+pfo+'</select></div><div class="efield"><label>Format</label><select class="sel" data-psel="format" data-k="'+i+'">'+fmo+"</select></div></div></div></section>"+
        '<section class="pd-sec"><div class="pd-lab">'+ico("txt")+' Caption</div><textarea class="dtext-edit pd-fullw" data-pf="caption" data-pi="'+i+'">'+esc(post.caption)+"</textarea></section>"+
        '<section class="pd-sec"><div class="pd-lab">'+ico("user")+' Who this is for</div><div class="editgrid"><div class="efield"><label>Target persona</label><select class="sel" data-psel="personaId" data-k="'+i+'">'+personasList().map(function(pp){return '<option value="'+pp.id+'"'+(post.personaId===pp.id?" selected":"")+'>'+esc(pp.name)+"</option>";}).join("")+'</select><div class="ef-help">'+esc(personaWhy(persona,post.platform))+'</div></div></div></section>'+
        '<section class="pd-sec"><div class="pd-lab">'+ico("compass")+' Creative brief</div><div class="editgrid">'+briefEdit(i,post)+"</div></section>"+
        '<section class="pd-sec"><div class="pd-lab">'+ico(typeIcon(post.type))+" "+typeLabel(post.type)+' settings</div><div class="editgrid">'+ctrlEdit(i,post)+"</div></section>"+
        '<section class="pd-sec"><div class="pd-lab">'+ico("spark")+' Hashtags</div><input class="hinp pd-fullw" data-pf="hashtags" data-pi="'+i+'" value="'+esc(post.hashtags)+'"></section>'+
        '<section class="pd-sec"><div class="pd-lab">'+ico("mega")+' Tags</div><input class="hinp pd-fullw" data-ptags="'+i+'" value="'+esc((post.tags||[]).join(", "))+'" placeholder="Comma-separated, e.g. fall-colours, promo"><div class="ef-help">Auto-tags come from insights. Add your own to group related posts.</div></section>'+
        "</div>";
    }else{
      var facts='<section class="pd-sec"><div class="pd-lab">Details</div><div class="pd-facts">'+fact("Platform",post.platform)+fact("Format",post.format)+fact("Content type",typeLabel(post.type))+fact("Status",sl)+(post.scheduled?fact("Scheduled",post.scheduled):"")+"</div></section>";
      var caption='<section class="pd-sec"><div class="pd-lab">'+ico("txt")+' Caption</div><div class="pd-box pd-cap">'+esc(post.caption)+"</div></section>";
      var matchNote=post.personaAuto?'<div class="pd-matchnote">'+ico("spark")+" Clara matched this persona after you created the post — change it in Edit if it's off.</div>":"";
      var weakOffer=post.personaWeak?'<div class="pd-weakoffer">'+ico("bulb")+" Clara wasn't sure any of your personas fit this post. <button class=\"lk\" data-a=\"pnew\" data-k=\""+i+"\">Create a new persona for it</button></div>":"";
      var whoFor=persona?'<section class="pd-sec"><div class="pd-lab">'+ico("user")+' Who this is for</div><div class="pd-persona"><div class="pd-pn">'+esc(persona.name)+'</div><div class="pd-pd">'+esc(persona.desc)+'</div><div class="pd-pwhy">'+ico("spark")+" "+esc(personaWhy(persona,post.platform))+'</div>'+matchNote+weakOffer+'<button class="btn sm ghost pd-askp" data-a="askpersona" data-k="'+persona.id+'">'+ico("spark")+" Ask "+esc(persona.name)+"</button></div></section>":"";
      var tagSec='<section class="pd-sec"><div class="pd-lab">'+ico("mega")+' Tags</div>'+((post.tags&&post.tags.length)?tagChips(post.tags):'<div class="pd-pd">No tags yet — add some in Edit to group related posts.</div>')+"</section>";
      var tags=post.hashtags?'<section class="pd-sec"><div class="pd-lab">'+ico("spark")+' Hashtags</div><div class="pd-tags">'+esc(post.hashtags)+"</div></section>":"";
      body='<div class="pd-body">'+facts+caption+whoFor+briefRead(post)+ctrlRead(post)+tagSec+tags+"</div>";
    }
    var flag=draft&&!edit?'<div class="draftflag">'+ico("checkc")+" Draft saved — it’s waiting under <b>Drafts</b>. Schedule it whenever you’re ready.</div>":"";
    var actions;
    if(pub)actions='<span class="doneflag">'+ico("checkc")+(post.scheduled?"Scheduled · "+post.scheduled:"Published")+'</span><button class="btn sm" data-a="postresult" data-k="'+i+'">'+ico("chart")+" See results</button>";
    else actions='<button class="btn sm" data-a="qpublish" data-k="'+i+'">'+ico("send")+(draft?" Schedule it":" Publish")+'</button><button class="lk mut" data-a="qdraftsave" data-k="'+i+'">'+ico("flag")+(draft?"Update draft":"Save as draft")+'</button><button class="lk mut" data-a="qedit" data-k="'+i+'">'+ico("edit")+(edit?"Done editing":"Edit")+'</button><button class="lk mut" data-a="qregen" data-k="'+i+'">'+ico("refresh")+"Regenerate</button>";
    return back+head+flag+body+'<div class="pd-actions">'+actions+"</div>";
  }
  function vCreate(){if(S.composing)return vCompose();if(!S.queue||!S.queue.length)return createEmpty();if(S.createDetail!=null&&S.queue.indexOf(+S.createDetail)>=0)return vPostDetail(+S.createDetail);var q=S.queue;var nPend=0,nDraft=0,nSched=0;q.forEach(function(i){var st=qStatus(i);if(st==="scheduled")nSched++;else if(st==="draft")nDraft++;else nPend++;});var allPub=nSched===q.length;var head='<div class="todayhead"><div class="th-day">Create</div><h1 class="th-t">'+(allPub?"Published":q.length>1?"Your content, ready to review":"Ready to publish")+'</h1><p class="th-s">'+(allPub?"Nice work — that’s today’s content live.":"Clara drafted "+(q.length>1?("all "+q.length+" in your voice"):"this in your voice")+". Tap a card to review, edit, publish — or save as a draft.")+'</p></div>';var newBtn='<button class="btn sm createnew" data-a="conew">'+ico("plus")+' Create a post</button>';var top='<div class="createtop">'+head+newBtn+'</div>';var vtog=nSched>0?'<div class="viewtog cvtog"><button class="vt'+(S.createView!=="calendar"?" on":"")+'" data-a="createview" data-k="list">'+ico("list")+' List</button><button class="vt'+(S.createView==="calendar"?" on":"")+'" data-a="createview" data-k="calendar">'+ico("cal")+' Calendar</button></div>':"";if(nSched>0&&S.createView==="calendar")return top+vtog+vCreateCal();var filt=S.cFilter||"all";var bar="";if(q.length>1||nDraft){function cf(k,label,n){return '<button class="cf'+(filt===k?" on":"")+'" data-a="cfilter" data-k="'+k+'">'+label+' <span class="cf-n">'+n+'</span></button>';}bar='<div class="cfilter">'+cf("all","All",q.length)+cf("pending","Pending",nPend)+cf("draft","Drafts",nDraft)+cf("scheduled","Scheduled",nSched)+'</div>';}var qtags=allQueueTags();var curTag=S.cTag||"all";var tagBar=qtags.length?'<div class="cfilter tagfilter"><span class="tf-lab">'+ico("mega")+' Tags</span><button class="cf'+(curTag==="all"?" on":"")+'" data-a="ctag" data-k="all">All</button>'+qtags.map(function(tg){return '<button class="cf'+(curTag===tg?" on":"")+'" data-a="ctag" data-k="'+esc(tg)+'">#'+esc(tg)+"</button>";}).join("")+"</div>":"";var shown=q.filter(function(i){var okS=filt==="all"||qStatus(i)===filt;var pp=S.posts[i];var okT=curTag==="all"||(pp&&pp.tags&&pp.tags.indexOf(curTag)>=0);return okS&&okT;});var cards=shown.length?'<div class="pgrid">'+shown.map(function(i){return ccard(taskAt(i),i);}).join("")+"</div>":'<div class="rempty">No posts match'+(curTag!=="all"?" #"+esc(curTag):"")+' right now.</div>';var foot=allPub?'<div class="tnote"><div class="tn-h">'+ico("checkc")+' Done for today</div><p>Nicely done — that’s today live. <button class="lk" data-a="seeresults">See your results</button> · <button class="lk" data-a="tab" data-k="today">Back to Today</button></p></div>':"";return top+vtog+bar+tagBar+cards+foot;}
  function resultsEmpty(){return '<div class="stub"><div class="stub-ic">'+ico("chart")+'</div><h2>Nothing to measure yet</h2><p>Publish a move in Create and its results land here — then they feed back into tomorrow’s Today.</p><button class="btn sm" data-a="tab" data-k="today">'+ico("arrow")+' Go to Today</button></div>';}
  function fmtNum(n){return (n||0).toLocaleString("en-US");}
  function postMetrics(i){var seed=(i+1)*97;var reach=380+((seed*13)%760);var rate=9+(seed%12);var eng=Math.round(reach*rate/100);var clicks=Math.round(eng*(0.18+((seed%7)/50)));var conv=Math.max(0,Math.round(clicks*(0.10+(seed%6)/100)));return {reach:reach,eng:eng,clicks:clicks,conv:conv};}
  function paidEligible(){var ch=S.p.channels||[];if(ch.indexOf("Google Ads")>=0||ch.indexOf("Meta Ads")>=0)return true;return ["250-1k","1k-5k","5k-15k","15k+"].indexOf(S.p.budget)>=0;}
  function paidStats(nPub){if(!paidEligible())return null;var wk=({"0-250":55,"250-1k":190,"1k-5k":720,"5k-15k":2100,"15k+":4600})[S.p.budget];if(wk==null)wk=180;var seed=(nPub+3)*61;var cpc=+(0.8+(seed%22)/20).toFixed(2);var clicks=Math.round(wk/cpc);var convRate=0.04+(seed%6)/100;var conv=Math.max(1,Math.round(clicks*convRate));var roas=+(2.4+(seed%20)/10).toFixed(1);var cpr=+(wk/conv).toFixed(2);var ch=S.p.channels||[];var via=ch.indexOf("Meta Ads")>=0&&ch.indexOf("Google Ads")>=0?"Meta & Google Ads":ch.indexOf("Meta Ads")>=0?"Meta Ads":ch.indexOf("Google Ads")>=0?"Google Ads":"paid ads";return {spend:wk,cpc:cpc,clicks:clicks,conv:conv,roas:roas,cpr:cpr,via:via};}
  function trendSeries(nPub){var seed=(nPub+1)*37;var out=[];for(var i=0;i<7;i++){var g=0.5+i*0.09;var noise=((seed>>(i%5))%7)/40;out.push(Math.round((0.35+g+noise)*100));}return out;}
  function sparkArea(vals){var w=320,h=88,pad=8;var max=Math.max.apply(null,vals)||1,min=Math.min.apply(null,vals),rng=(max-min)||1;var pts=vals.map(function(v,i){var x=pad+i*((w-2*pad)/(vals.length-1));var y=h-pad-((v-min)/rng)*(h-2*pad);return [x,y];});var line=pts.map(function(p,i){return (i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1);}).join(" ");var area=line+" L"+pts[pts.length-1][0].toFixed(1)+" "+(h-pad)+" L"+pts[0][0].toFixed(1)+" "+(h-pad)+" Z";var last=pts[pts.length-1];return '<svg class="spark" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><path class="spark-fill" d="'+area+'"/><path class="spark-line" d="'+line+'"/><circle class="spark-dot" cx="'+last[0].toFixed(1)+'" cy="'+last[1].toFixed(1)+'" r="3.5"/></svg>';}
  function postRecords(){
    var out=[];
    for(var k in S.pub){if(!S.pub[k])continue;var i=+k;var p=S.posts[i]||{};var mv=taskAt(i);out.push({i:i,name:mv.title||"Post",platform:p.platform||"",type:p.type||"text",format:p.format||"",scheduled:p.scheduled||"",live:!!p.live,status:p.live?"Live":"Scheduled"});}
    return out;
  }
  function recFilters(recs){
    var q=(S.rq||"").toLowerCase();
    return recs.filter(function(r){
      if(q&&r.name.toLowerCase().indexOf(q)<0)return false;
      if(S.rStatus!=="all"&&r.status!==S.rStatus)return false;
      if(S.rPlat!=="all"&&r.platform!==S.rPlat)return false;
      if(S.rType!=="all"&&r.type!==S.rType)return false;
      if(S.rDate==="today"&&!/today/i.test(r.scheduled))return false;
      return true;
    });
  }
  function rfSelect(key,opts){var o="";for(var k in opts)o+='<option value="'+k+'"'+(S[key]===k?" selected":"")+'>'+opts[k]+"</option>";return '<select class="rfsel" data-rf="'+key+'">'+o+"</select>";}
  function rstatCard(l,v,d){return '<div class="rstat"><div class="rs-v">'+v+'</div><div class="rs-l">'+l+'</div>'+(d?'<div class="rs-d">'+d+"</div>":"")+"</div>";}
  function rrow(r){
    var x=postMetrics(r.i);
    var scls=r.live?"live":"sched";
    return '<div class="pcard rescard" data-rname="'+esc(r.name.toLowerCase())+'">'+
      '<div class="pcard-top"><span class="dch">'+ico(typeIcon(r.type))+(r.platform||"—")+'</span><span class="pcard-st '+scls+'">'+r.status+"</span></div>"+
      '<div class="pcard-for">'+esc(r.name)+"</div>"+
      '<div class="res-metric"><span class="res-v">'+fmtNum(x.reach)+"</span> views</div>"+
      '<div class="pcard-foot"><span class="pcard-fl">'+(r.scheduled?ico("cal")+" "+r.scheduled:"—")+'</span><button class="pcard-open" data-a="postresult" data-k="'+r.i+'">See stats '+ico("arrow")+"</button></div>"+
      "</div>";
  }
  function vResultsList(){
    var recs=postRecords();
    if(!recs.length)return resultsEmpty();
    var totR=0,totE=0,totV=0;recs.forEach(function(r){var x=postMetrics(r.i);totR+=x.reach;totE+=x.eng;totV+=x.conv;});
    var cards='<div class="rgrid r3">'+rstatCard("Total views",fmtNum(totR),"across "+recs.length+" post"+(recs.length>1?"s":""))+rstatCard("Total engagement",fmtNum(totE),(totR?Math.round((totE/totR)*100):0)+"% avg rate")+rstatCard("Conversions",fmtNum(totV),"leads & sales")+"</div>";
    var plats=[];recs.forEach(function(r){if(r.platform&&plats.indexOf(r.platform)<0)plats.push(r.platform);});
    var platOpts={all:"All platforms"};plats.forEach(function(p){platOpts[p]=p;});
    var toolbar='<div class="rtools"><div class="rsearch">'+ico("search")+'<input data-rsearch placeholder="Search by name…" value="'+esc(S.rq||"")+'"></div>'+rfSelect("rStatus",{all:"All statuses",Scheduled:"Scheduled",Live:"Live"})+rfSelect("rPlat",platOpts)+rfSelect("rType",{all:"All types",text:"Text",image:"Image",video:"Video",audio:"Audio"})+rfSelect("rDate",{all:"All dates",today:"Today"})+"</div>";
    var recsF=recFilters(recs);
    var rows=recsF.length?'<div class="pgrid">'+recsF.map(rrow).join("")+"</div>":'<div class="rempty">No posts match your filters.</div>';
    return '<div class="todayhead"><div class="th-day">Results</div><h1 class="th-t">Your posts</h1><p class="th-s">Everything you’ve scheduled and published. Search, filter, or open a post for full stats.</p></div>'+cards+toolbar+rows;
  }
  var CHART_COLORS=["#6c5ce7","#00b894","#0984e3","#f0a92e","#e17055","#e84393","#00cec9"];
  function pad2(n){return (n<10?"0":"")+n;}
  function aPct(a,b){return (b?((a/b)*100).toFixed(1):"0")+"%";}
  function last7Labels(){var nm=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var out=[];var d=new Date();for(var k=6;k>=0;k--){var dd=new Date(d);dd.setDate(d.getDate()-k);out.push(nm[dd.getDay()]);}return out;}
  function daySeries(i,total){var s=(i+1)*53;var raw=[],sum=0;for(var k=0;k<7;k++){var v=0.55+(((s>>(k%5))+k*7)%10)/10;raw.push(v);sum+=v;}return raw.map(function(v){return Math.max(1,Math.round(total*v/sum));});}
  function retenPts(i){var s=(i+1)*29;var base=[1,0.86,0.74,0.65,0.58,0.52,0.47,0.43,0.4];return base.map(function(v,k){return Math.max(0.12,Math.min(1,v-((s>>(k%5))%4)/100));});}
  function chartArea(vals,labels){
    var w=680,h=180,padL=40,padR=12,padT=14,padB=28,n=vals.length;var max=Math.max.apply(null,vals)||1,iw=w-padL-padR,ih=h-padT-padB;
    var P=vals.map(function(v,i){return [padL+(n===1?iw/2:i*(iw/(n-1))),padT+ih-(v/max)*ih];});
    var line=P.map(function(p,i){return (i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1);}).join(" ");
    var area=line+" L"+P[n-1][0].toFixed(1)+" "+(padT+ih)+" L"+P[0][0].toFixed(1)+" "+(padT+ih)+" Z";
    var grid="",yl="";[0,0.5,1].forEach(function(g){var y=padT+ih-g*ih;grid+='<line class="ch-grid" x1="'+padL+'" y1="'+y.toFixed(1)+'" x2="'+(w-padR)+'" y2="'+y.toFixed(1)+'"/>';yl+='<text class="ch-yl" x="'+(padL-8)+'" y="'+(y+4).toFixed(1)+'" text-anchor="end">'+fmtNum(Math.round(max*g))+'</text>';});
    var dots=P.map(function(p){return '<circle class="ch-dot" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3.2"/>';}).join("");
    var xl=(labels||[]).map(function(l,i){return '<text class="ch-xl" x="'+P[i][0].toFixed(1)+'" y="'+(h-8)+'" text-anchor="middle">'+l+'</text>';}).join("");
    return '<svg class="chart" viewBox="0 0 '+w+' '+h+'">'+grid+yl+'<path class="ch-area" d="'+area+'"/><path class="ch-line" d="'+line+'"/>'+dots+xl+'</svg>';
  }
  function chartBars(items,color){
    var max=Math.max.apply(null,items.map(function(it){return it[1];}))||1;
    return '<div class="bars">'+items.map(function(it){var wp=Math.max(3,(it[1]/max)*100);return '<div class="barrow"><span class="bar-l">'+it[0]+'</span><span class="bar-track"><span class="bar-fill" style="width:'+wp.toFixed(1)+'%;background:'+(color||"var(--accent)")+'"></span></span><span class="bar-v">'+fmtNum(it[1])+'</span></div>';}).join("")+'</div>';
  }
  function chartDonut(segs){
    var total=segs.reduce(function(a,s){return a+s.value;},0)||1,r=52,cx=60,cy=60,circ=2*Math.PI*r,off=0;
    var arcs=segs.map(function(s){var len=s.value/total*circ;var el='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+s.color+'" stroke-width="15" stroke-dasharray="'+len.toFixed(2)+' '+(circ-len).toFixed(2)+'" stroke-dashoffset="'+(-off).toFixed(2)+'" transform="rotate(-90 '+cx+' '+cy+')"/>';off+=len;return el;}).join("");
    var legend=segs.map(function(s){return '<div class="lg-i"><span class="lg-dot" style="background:'+s.color+'"></span><span class="lg-t">'+s.label+'</span><b>'+Math.round(s.value/total*100)+'%</b></div>';}).join("");
    return '<div class="donutwrap"><svg class="donut" viewBox="0 0 120 120">'+arcs+'<circle cx="60" cy="60" r="44" fill="var(--panel)"/></svg><div class="legend">'+legend+'</div></div>';
  }
  function chartReten(pts){
    var w=680,h=180,padL=40,padR=12,padT=14,padB=28,n=pts.length,iw=w-padL-padR,ih=h-padT-padB;
    var P=pts.map(function(y,i){return [padL+i*(iw/(n-1)),padT+ih-y*ih];});
    var line=P.map(function(p,i){return (i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1);}).join(" ");
    var area=line+" L"+P[n-1][0].toFixed(1)+" "+(padT+ih)+" L"+P[0][0].toFixed(1)+" "+(padT+ih)+" Z";
    var grid="",yl="";[0,0.5,1].forEach(function(g){var y=padT+ih-g*ih;grid+='<line class="ch-grid" x1="'+padL+'" y1="'+y.toFixed(1)+'" x2="'+(w-padR)+'" y2="'+y.toFixed(1)+'"/>';yl+='<text class="ch-yl" x="'+(padL-8)+'" y="'+(y+4).toFixed(1)+'" text-anchor="end">'+Math.round(g*100)+'%</text>';});
    var xn=["Start","25%","50%","75%","End"],xl="";xn.forEach(function(l,i){var x=padL+i*(iw/4);xl+='<text class="ch-xl" x="'+x.toFixed(1)+'" y="'+(h-8)+'" text-anchor="middle">'+l+'</text>';});
    return '<svg class="chart" viewBox="0 0 '+w+' '+h+'">'+grid+yl+'<path class="ch-area reten" d="'+area+'"/><path class="ch-line reten" d="'+line+'"/>'+xl+'</svg>';
  }
  function analyticsFor(plat,type,i){
    var x=postMetrics(i),r=x.reach,e=x.eng,c=x.clicks,cv=x.conv,s=(i+1)*97;
    function R(n){return Math.max(0,Math.round(n));}
    var impr=R(r*(1.18+(s%16)/100)),col=CHART_COLORS,p=(plat||"").toLowerCase();
    var A={engTitle:"Engagement",engColor:col[0],disc:null,discTitle:"How people found it"};
    if(/instagram/.test(p)){
      var likes=R(e*0.71),cm=R(e*0.07),sv=R(e*0.14),sh=R(e*0.08),pv=R(r*0.05),fol=R(r*0.009);
      A.kpis=[["Reach",fmtNum(r),"accounts"],["Impressions",fmtNum(impr),""],["Engagement",aPct(e,r),"rate"],["Saves",fmtNum(sv),""]];
      A.eng=[["Likes",likes],["Comments",cm],["Saves",sv],["Shares",sh]];
      A.disc=[{label:"Home",value:58,color:col[0]},{label:"Explore",value:22,color:col[1]},{label:"Profile",value:12,color:col[2]},{label:"Other",value:8,color:col[3]}];
      A.full=[["Accounts reached",fmtNum(r)],["Impressions",fmtNum(impr)],["Likes",fmtNum(likes)],["Comments",fmtNum(cm)],["Saves",fmtNum(sv)],["Shares",fmtNum(sh)],["Profile visits",fmtNum(pv)],["Follows from post",fmtNum(fol)],["Engagement rate",aPct(e,r)]];
      A.label="Instagram";A.note="Mirrors Instagram’s Professional dashboard / Graph API insights for a post or reel.";
    }else if(/linkedin/.test(p)){
      var reac=R(e*0.73),cm=R(e*0.10),rp=R(e*0.08),cl=c,lk=R(reac*0.60),cel=R(reac*0.15),sup=R(reac*0.09),insi=R(reac*0.11),lov=R(reac*0.05);
      A.kpis=[["Impressions",fmtNum(impr),""],["Members reached",fmtNum(r),""],["Engagement",aPct(e,impr),"rate"],["Clicks",fmtNum(cl),aPct(cl,impr)+" CTR"]];
      A.engColor=col[2];A.eng=[["Reactions",reac],["Comments",cm],["Reposts",rp],["Clicks",cl]];
      A.disc=[{label:"Feed",value:74,color:col[2]},{label:"Notifications",value:12,color:col[0]},{label:"Search",value:9,color:col[1]},{label:"Profile",value:5,color:col[3]}];A.discTitle="Where it was seen";
      A.full=[["Impressions",fmtNum(impr)],["Members reached",fmtNum(r)],["Reactions",fmtNum(reac)],["— Like",fmtNum(lk)],["— Celebrate",fmtNum(cel)],["— Support",fmtNum(sup)],["— Insightful",fmtNum(insi)],["— Love",fmtNum(lov)],["Comments",fmtNum(cm)],["Reposts",fmtNum(rp)],["Clicks",fmtNum(cl)],["CTR",aPct(cl,impr)],["Engagement rate",aPct(e,impr)]];
      A.label="LinkedIn";A.note="Mirrors LinkedIn’s post analytics / Marketing API fields.";
    }else if(/facebook/.test(p)){
      var org=R(r*0.82),paid=r-org,reac=R(e*0.66),cm=R(e*0.10),sh=R(e*0.08),lc=c,oc=R(c*0.4),neg=R(r*0.004),like=R(reac*0.62),love=R(reac*0.16),care=R(reac*0.07),haha=R(reac*0.08),wow=R(reac*0.05);
      A.kpis=[["Reach",fmtNum(r),""],["Impressions",fmtNum(impr),""],["Engagement",aPct(e,r),"rate"],["Link clicks",fmtNum(lc),""]];
      A.engColor=col[2];A.eng=[["Reactions",reac],["Comments",cm],["Shares",sh],["Link clicks",lc]];
      A.disc=[{label:"Feed",value:67,color:col[2]},{label:"Shares",value:16,color:col[1]},{label:"Groups",value:10,color:col[0]},{label:"Other",value:7,color:col[3]}];
      A.full=[["Reach",fmtNum(r)],["Organic reach",fmtNum(org)],["Paid reach",fmtNum(paid)],["Impressions",fmtNum(impr)],["— Like",fmtNum(like)],["— Love",fmtNum(love)],["— Care",fmtNum(care)],["— Haha",fmtNum(haha)],["— Wow",fmtNum(wow)],["Comments",fmtNum(cm)],["Shares",fmtNum(sh)],["Link clicks",fmtNum(lc)],["Other clicks",fmtNum(oc)],["Negative feedback",fmtNum(neg)]];
      A.label="Facebook";A.note="Mirrors Facebook Page insights / Graph API post fields.";
    }else if(/email/.test(p)){
      var sent=R(r*1.05),deliv=r,opens=R(r*0.44),uopens=R(opens*0.85),cl=c,ucl=R(c*0.82),unsub=R(r*0.004),spam=R(r*0.0006),bounce=sent-deliv;
      A.kpis=[["Open rate",aPct(opens,deliv),""],["Click rate",aPct(cl,deliv),""],["Delivered",fmtNum(deliv),""],["Unsubscribes",fmtNum(unsub),""]];
      A.engTitle="Delivery funnel";A.engColor=col[1];A.eng=[["Sent",sent],["Delivered",deliv],["Opened",opens],["Clicked",cl]];
      A.full=[["Sent",fmtNum(sent)],["Delivered",fmtNum(deliv)],["Bounce rate",aPct(bounce,sent)],["Unique opens",fmtNum(uopens)],["Open rate",aPct(opens,deliv)],["Total opens",fmtNum(opens)],["Unique clicks",fmtNum(ucl)],["Click rate",aPct(cl,deliv)],["Click-to-open",aPct(cl,opens)],["Unsubscribes",fmtNum(unsub)],["Spam reports",fmtNum(spam)]];
      A.label="Email";A.note="Mirrors what an ESP like Mailchimp or Klaviyo reports for a campaign.";
    }else if(/tiktok/.test(p)){
      var views=R(impr*1.15),lk=R(e*0.80),cm=R(e*0.06),sh=R(e*0.10),sv=R(e*0.04),pvz=R(r*0.05),fol=R(r*0.012);
      A.kpis=[["Views",fmtNum(views),""],["Avg watch","0:"+pad2(9+(s%14)),""],["Completed",(34+(s%26))+"%","of viewers"],["New followers",fmtNum(fol),""]];
      A.engColor=col[6];A.eng=[["Likes",lk],["Comments",cm],["Shares",sh],["Saves",sv]];
      A.disc=[{label:"For You",value:88,color:col[0]},{label:"Following",value:5,color:col[1]},{label:"Sound",value:3,color:col[2]},{label:"Search & profile",value:4,color:col[3]}];A.discTitle="Traffic source";
      A.full=[["Video views",fmtNum(views)],["Reach",fmtNum(r)],["Total play time",fmtNum(R(views*0.35))+" min"],["Avg watch time","0:"+pad2(9+(s%14))],["Watched full video",(34+(s%26))+"%"],["Likes",fmtNum(lk)],["Comments",fmtNum(cm)],["Shares",fmtNum(sh)],["Saves",fmtNum(sv)],["Profile views",fmtNum(pvz)],["New followers",fmtNum(fol)]];
      A.label="TikTok";A.note="Mirrors TikTok’s post analytics for a video.";
    }else if(/youtube/.test(p)){
      var views=R(impr*1.1),yimpr=R(views*14),likes=R(e*0.78),cm=R(e*0.12),sh=R(e*0.10),subs=R(views*0.012),wh=(views*(0.02+(s%5)/100)).toFixed(1);
      A.kpis=[["Views",fmtNum(views),""],["Watch time",wh+" hrs",""],["Avg view","0:"+pad2(20+(s%40)),"duration"],["Subscribers","+"+fmtNum(subs),""]];
      A.engColor=col[4];A.eng=[["Likes",likes],["Comments",cm],["Shares",sh]];
      A.disc=[{label:"Browse",value:32,color:col[0]},{label:"Suggested",value:29,color:col[1]},{label:"Search",value:22,color:col[2]},{label:"External",value:10,color:col[3]},{label:"Direct",value:7,color:col[4]}];A.discTitle="Traffic sources";
      A.full=[["Views",fmtNum(views)],["Impressions",fmtNum(yimpr)],["Impressions CTR",aPct(views,yimpr)],["Watch time",wh+" hrs"],["Avg view duration","0:"+pad2(20+(s%40))],["Avg percentage viewed",(38+(s%30))+"%"],["Likes",fmtNum(likes)],["Comments",fmtNum(cm)],["Shares",fmtNum(sh)],["Subscribers gained","+"+fmtNum(subs)]];
      A.label="YouTube";A.note="Mirrors YouTube Studio / Analytics API for a video.";
    }else if(/^x$|twitter/.test(p)){
      var lk=R(e*0.55),rp=R(e*0.12),rpl=R(e*0.08),bm=R(e*0.10),pc=R(r*0.02),lc=c,de=R(e*0.15),fl=R(r*0.004);
      A.kpis=[["Impressions",fmtNum(impr),""],["Engagements",fmtNum(e),""],["Engagement",aPct(e,impr),"rate"],["Link clicks",fmtNum(lc),""]];
      A.engColor=col[2];A.eng=[["Likes",lk],["Reposts",rp],["Replies",rpl],["Bookmarks",bm]];
      A.disc=[{label:"Timeline",value:72,color:col[0]},{label:"Search",value:12,color:col[1]},{label:"Profile",value:10,color:col[2]},{label:"Other",value:6,color:col[3]}];
      A.full=[["Impressions",fmtNum(impr)],["Engagements",fmtNum(e)],["Engagement rate",aPct(e,impr)],["Likes",fmtNum(lk)],["Reposts",fmtNum(rp)],["Replies",fmtNum(rpl)],["Bookmarks",fmtNum(bm)],["Profile clicks",fmtNum(pc)],["Link clicks",fmtNum(lc)],["Detail expands",fmtNum(de)],["New follows",fmtNum(fl)]];
      A.label="X";A.note="Mirrors X (Twitter) post analytics fields.";
    }else if(/pinterest/.test(p)){
      var sv=R(e*0.7),pc=R(e*0.2),ob=R(c),reac=R(e*0.1);
      A.kpis=[["Impressions",fmtNum(impr),""],["Saves",fmtNum(sv),""],["Pin clicks",fmtNum(pc),""],["Outbound clicks",fmtNum(ob),""]];
      A.engColor=col[5];A.eng=[["Saves",sv],["Pin clicks",pc],["Outbound clicks",ob],["Reactions",reac]];
      A.disc=[{label:"Home",value:54,color:col[0]},{label:"Search",value:30,color:col[1]},{label:"Related",value:12,color:col[2]},{label:"Other",value:4,color:col[3]}];
      A.full=[["Impressions",fmtNum(impr)],["Reach",fmtNum(r)],["Saves",fmtNum(sv)],["Pin clicks",fmtNum(pc)],["Outbound clicks",fmtNum(ob)],["Save rate",aPct(sv,impr)],["Engagement rate",aPct(e,impr)]];
      A.label="Pinterest";A.note="Mirrors Pinterest analytics for a Pin.";
    }else if(/seo|blog|content|website/.test(p)){
      var pvv=impr,uni=r,r25=R(uni*0.92),r50=R(uni*0.71),r75=R(uni*0.48),r100=R(uni*0.32);
      A.kpis=[["Pageviews",fmtNum(pvv),""],["Unique visitors",fmtNum(uni),""],["Avg time",(1+(s%3))+":"+pad2(10+(s%50)),"on page"],["Conversions",fmtNum(cv),""]];
      A.engTitle="Scroll depth";A.engColor=col[1];A.eng=[["Reached 25%",r25],["Reached 50%",r50],["Reached 75%",r75],["Finished",r100]];
      A.disc=[{label:"Organic",value:61,color:col[1]},{label:"Direct",value:18,color:col[0]},{label:"Social",value:14,color:col[2]},{label:"Referral",value:7,color:col[3]}];A.discTitle="Traffic sources";
      A.full=[["Pageviews",fmtNum(pvv)],["Unique visitors",fmtNum(uni)],["Avg time on page",(1+(s%3))+":"+pad2(10+(s%50))],["Bounce rate",(38+(s%30))+"%"],["Avg scroll depth",(52+(s%30))+"%"],["Conversions",fmtNum(cv)],["Conversion rate",aPct(cv,uni)]];
      A.label="Website";A.note="Mirrors GA4-style page and traffic metrics.";
    }else if(/google/.test(p)){
      var svv=R(r*0.62),mvv=r-svv,calls=R(r*0.02),dirs=R(r*0.03),wc=c,ph=R(r*0.2);
      A.kpis=[["Profile views",fmtNum(r),""],["Website clicks",fmtNum(wc),""],["Calls",fmtNum(calls),""],["Directions",fmtNum(dirs),""]];
      A.engTitle="Customer actions";A.engColor=col[3];A.eng=[["Calls",calls],["Directions",dirs],["Website clicks",wc],["Photo views",ph]];
      A.disc=[{label:"Search",value:68,color:col[0]},{label:"Maps",value:32,color:col[1]}];A.discTitle="Where you were found";
      A.full=[["Total views",fmtNum(r)],["Search views",fmtNum(svv)],["Maps views",fmtNum(mvv)],["Calls",fmtNum(calls)],["Direction requests",fmtNum(dirs)],["Website clicks",fmtNum(wc)],["Photo views",fmtNum(ph)]];
      A.label="Google Business Profile";A.note="Mirrors Google Business Profile performance metrics.";
    }else{
      var lk=R(e*0.7),cm=R(e*0.12),sh=R(e*0.1);
      A.kpis=[["Reach",fmtNum(r),""],["Engaged",fmtNum(e),aPct(e,r)+" rate"],["Clicks",fmtNum(c),""],["Conversions",fmtNum(cv),""]];
      A.eng=[["Reactions",lk],["Comments",cm],["Shares",sh]];
      A.full=[["Reach",fmtNum(r)],["Impressions",fmtNum(impr)],["Reactions",fmtNum(lk)],["Comments",fmtNum(cm)],["Shares",fmtNum(sh)],["Clicks",fmtNum(c)],["Conversions",fmtNum(cv)]];
      A.label=plat||"Post";A.note="Simulated engagement metrics for the mockup.";
    }
    return A;
  }
  function brkGrid(items){return '<div class="brk">'+items.map(function(it){return '<div class="brk-i"><div class="brk-v">'+it[1]+'</div><div class="brk-l">'+it[0]+'</div></div>';}).join("")+"</div>";}
  function vPostResult(i){
    var p=S.posts[i]||{},mv=taskAt(i),x=postMetrics(i),A=analyticsFor(p.platform,p.type,i);
    var lp=(p.platform||"").toLowerCase(),isAud=p.type==="audio",isVid=p.type==="video"||/youtube|tiktok/.test(lp),isMedia=isVid||isAud,isMail=/email/.test(lp);
    var meta='<div class="pr-meta"><span class="dch">'+ico(typeIcon(p.type||"text"))+(p.platform||"")+" · "+(p.format||"")+'</span><span class="rr-status '+(p.live?"live":"sched")+'">'+(p.live?"Live":"Scheduled")+"</span>"+(p.scheduled?'<span class="pr-when">'+ico("cal")+" "+p.scheduled+"</span>":"")+"</div>";
    var kpi='<div class="rgrid">'+A.kpis.map(function(k){return rstatCard(k[0],k[1],k[2]);}).join("")+"</div>";
    var reachLabel=isMail?"Opens":isAud?"Plays":isVid?"Views":"Reach";
    var total=isMail?Math.round(x.reach*0.44):isMedia?Math.round(x.reach*1.1):x.reach;
    var trend='<div class="rsec">'+reachLabel+" · last 7 days</div><div class=\"chartcard\">"+chartArea(daySeries(i,total),last7Labels())+"</div>";
    var engSec='<div class="rsec">'+A.engTitle+'</div><div class="chartcard">'+chartBars(A.eng,A.engColor)+"</div>";
    var vidSec="";
    if(isMedia){
      var plays=Math.round(x.reach*1.1),vw=isAud?"Listened":"Viewed";
      var funnel=[[vw+" 3s",Math.round(plays*0.82)],[vw+" 10s",Math.round(plays*0.55)],[vw+" 30s",Math.round(plays*0.34)],[(isAud?"Finished":"Watched to end"),Math.round(plays*0.29)]];
      vidSec='<div class="rsec">Audience retention</div><div class="chartcard">'+chartReten(retenPts(i))+'</div><div class="rsec">'+(isAud?"Listen-through":"Watch-through")+'</div><div class="chartcard">'+chartBars(funnel,CHART_COLORS[4])+"</div>";
    }
    var discSec=A.disc?'<div class="rsec">'+A.discTitle+'</div><div class="chartcard">'+chartDonut(A.disc)+"</div>":"";
    var full='<div class="rsec">Full breakdown · '+A.label+"</div>"+brkGrid(A.full);
    var cap=p.caption?'<div class="rsec">The post</div><div class="pr-cap">'+esc(p.caption)+"</div>":"";
    var rate=x.eng/(x.reach||1);
    var read="This "+A.label+" "+(isMail?"email":"post")+" reached "+fmtNum(x.reach)+(isMail?" inboxes":" people")+" and pulled "+fmtNum(x.eng)+" engagements. "+(rate>0.11?"That’s an above-average rate — worth doing more like it.":"Solid start — a sharper hook could lift engagement next time.");
    return '<button class="lk mut resback" data-a="resback">'+ico("arrow")+" All posts</button>"+
      '<div class="todayhead"><div class="th-day">Post statistics</div><h1 class="th-t">'+(mv.title||"Post")+"</h1>"+meta+"</div>"+
      kpi+trend+engSec+vidSec+discSec+full+cap+
      '<div class="pr-note">'+ico("spark")+" "+A.note+" Numbers are simulated for the mockup.</div>"+
      '<div class="rread"><div class="rr-h">'+ico("spark")+' Clara’s read</div><p>'+read+"</p></div>";
  }
  function vResults(){
    if(S.resultView==="post"&&S.resultPost!=null&&S.pub[S.resultPost])return vPostResult(S.resultPost);
    return vResultsList();
  }
  function bestTime(k){var p=(S.posts[k]||{}).platform||"";return ({Instagram:"today, 6:30pm",LinkedIn:"Tue, 8:15am","Content & SEO":"Wed, 10:00am",Email:"Thu, 9:00am",TikTok:"today, 7:45pm",YouTube:"Sat, 11:00am",Community:"today, 8:00pm",X:"today, 12:30pm",Pinterest:"Sun, 8:00pm",Facebook:"today, 1:00pm","Local partnerships":"this week",Referrals:"this week","Google profile":"today"})[p]||"today, 6:30pm";}
  function publishModal(){return '<div class="modal-ov"><div class="modal"><div class="orb"><div class="ring"></div><div class="ring r2"></div><div class="core">'+ico("spark")+'</div></div><h3>Clara’s finding the best time to post</h3><div class="line" id="publine">Reading when your audience is most active…</div><div class="pbar"><i id="pubpb"></i></div></div></div>';}
  function runPublish(k){var lines=["Reading when your audience is most active…","Checking your channel’s peak windows…","Locking in the best moment…"];var i=0;var pb=root.querySelector("#pubpb");if(pb)pb.style.width="15%";var iv=setInterval(function(){var el=root.querySelector("#publine");if(!el||S.publishing==null){clearInterval(iv);return;}i++;if(i<lines.length){el.textContent=lines[i];if(pb)pb.style.width=(15+i*30)+"%";}},560);setTimeout(function(){if(S.publishing==null)return;var t=bestTime(k);S.pub[k]=true;S.done[k]=true;S.qedit[k]=false;S.qdraft[k]=false;if(S.posts[k])S.posts[k].scheduled=t;S.publishing=null;var _tk=taskAt(+k);recordHist({icon:_tk.icon||"send",title:_tk.title||"Published a post",kind:"content"});saveAll();render();toast("Scheduled for "+t+" — Clara picked your peak time");setTimeout(function(){if(S.posts[k]&&S.pub[k]){S.posts[k].live=true;render();}},3200);},2050);}
  function vLogin(){var list=S.biz||[];var returning=list.length>0;var cur=returning?(bizById(S.cur)||list[0]):null;var who=cur?((cur.name&&cur.name.trim())?cur.name:(INDS[cur.p.ind]||"your business")):"";var many=list.length>1;var tag=returning?("Welcome back"+(who&&!many?", "+who:"")+". "+(many?"Sign in and pick up any of your "+list.length+" businesses.":"Your advisor’s kept thinking — pick up where you left off.")):"Your personal advisor to go-to-market. Sign in to get today’s moves.";return vAuth();}
  function vMagic(){return '<div class="center"><div class="cwrap" style="max-width:440px;text-align:center"><div style="text-align:center">'+mk(56).replace('class="mark m"','class="mark bigmark"')+'</div><h1 class="q" style="margin-top:6px">Check your inbox</h1><p class="sub">I’ve sent a sign-in link to <b>'+esc(S.email||"your email")+'</b>. Click it and you’re in — no password to remember.</p><button class="btn" data-a="magicopen">Open the sign-in link '+ico("arrow")+'</button><div class="hint" style="margin-top:16px"><button class="lk mut" data-a="tologin">Back</button> · Demo shortcut — no real email is sent.</div></div></div>'+restart();}
  function bsec(t, inner) {
    return '<section class="bp-sec"><h3 class="bp-h">' + t + "</h3>" + inner + "</section>";
  }
  function bfact(l, v) {
    return (
      '<div class="bp-fact"><span class="bp-fl">' +
      l +
      '</span><span class="bp-fv">' +
      esc(v) +
      "</span></div>"
    );
  }
  function vThinking() {
    var a = arch(),
      d = DEEP[S.p.ind] || DEEP.other;
    var bt = BT[S.p.type] || INDS[S.p.ind] || "Business";
    var goal = GT[S.p.goalSel] || GOALS[S.p.goal] || "—";
    var aud = AUDS[S.p.aud] || "your audience";
    var loc = locLabel() || "—";
    var bud = BUD[S.p.budget] || "Not set";
    var uc = (S.p.channels || []).filter(function (c) {
      return c !== "I’m not marketing yet";
    });
    var chList = uc.length ? uc : a.channels;

    var facts =
      '<div class="bp-facts">' +
      bfact("Business", bt) +
      bfact("Goal", goal) +
      bfact("Customer", aud) +
      bfact("Location", loc) +
      bfact("Budget", bud) +
      "</div>";
    var overview = bsec(
      "Clara’s read",
      '<p class="bp-p">' + a.insight + "</p>" + facts,
    );
    var persona = bsec(
      "Who I think your customer is",
      (S.sentence
        ? '<div class="bp-quote"><span class="bp-lbl">What you told me</span>“' +
          esc(S.sentence) +
          "”</div>"
        : "") +
        '<div class="bp-card"><div class="bp-cardh">' +
        ico("user") +
        " " +
        a.persona.name +
        '</div><p class="bp-p">' +
        a.persona.desc +
        '</p><div class="bp-tag">Some of this is my inference. Correct it anytime in setup and everything downstream updates.</div></div>',
    );
    var pos = bsec(
      "How you should stand out",
      '<p class="bp-p">' + a.pos + '</p><p class="bp-sub">' + d.rivals + "</p>",
    );
    var srcs = d.sources
      .map(function (s) {
        return '<span class="bp-src">' + ico("globe") + esc(s) + "</span>";
      })
      .join("");
    var market = bsec(
      "Your market",
      '<p class="bp-p">' +
        d.market +
        '</p><div class="bp-srcs">' +
        srcs +
        '</div><div class="bp-note">Illustrative sources — a live market scan connects here in the full product.</div>',
    );
    var chChips = chList
      .map(function (c) {
        return '<span class="chip">' + c + "</span>";
      })
      .join("");
    var channels = bsec(
      "Where and when to show up",
      '<div class="chiprow">' +
        chChips +
        '</div><p class="bp-sub">' +
        (uc.length
          ? "Built around the channels you already use."
          : "Recommended for your type of business.") +
        " Timing is set to your local peak windows" +
        (loc !== "—" ? " for " + esc(loc) : "") +
        ".</p>",
    );
    var moves = baseTasks(),
      ml = "";
    moves.forEach(function (m) {
      ml +=
        '<div class="bp-move"><div class="bp-moveh">' +
        ico(m.icon) +
        " " +
        m.title +
        '</div><p class="bp-p">' +
        m.why +
        "</p></div>";
    });
    var why = bsec("Why these moves today", ml);
    var steps = [
      "Read your business from what you told me",
      "Worked out who your customer is",
      "Scanned your market and competitors",
      "Set how you should stand out",
      "Chose your channels and timing",
      "Drafted today’s highest-leverage moves",
    ];
    var lg = steps
      .map(function (s, i) {
        return (
          '<div class="bp-step"><span class="bp-num">' +
          (i + 1) +
          "</span>" +
          s +
          "</div>"
        );
      })
      .join("");
    var log = bsec("What I did, step by step", '<div class="bp-log">' + lg + "</div>");
    return (
      '<div class="todayhead"><div class="th-day">' + ico("spark") + " Clara’s thinking</div><h1 class=\"th-t\">The full working behind your plan</h1><p class=\"th-s\">Everything Clara figured out about your business — read as much or as little as you like.</p></div>" +
      '<div class="thinkwrap">' +
      overview +
      persona +
      pos +
      market +
      channels +
      why +
      log +
      "</div>"
    );
  }
  var INS_POOL = [
    { stat: "3 in 4", line: "of local buyers check you online before they ever walk in", source: "Local Consumer Report" },
    { stat: "+18%", line: "more shoppers are choosing quality over the lowest price this quarter", source: "Bloomberg" },
    { stat: "62%", line: "of first sales now start from a single social post", source: "BBC" },
    { stat: "2×", line: "the reach when a post leads with a real customer story", source: "Social Media Today" },
    { stat: "40%", line: "of small businesses are shifting budget toward short video", source: "Reuters" },
    { stat: "1 in 3", line: "buyers say reviews matter to them more than price", source: "Trustpilot" },
    { stat: "9–11am", line: "is when your audience is most active midweek", source: "Channel Benchmarks" },
    { stat: "71%", line: "discover a new local business through a friend’s recommendation", source: "YouGov" },
    { stat: "+25%", line: "engagement on posts that answer a common customer question", source: "HubSpot" },
    { stat: "48hrs", line: "is how long a trend stays hot before it saturates", source: "TrendWatch" },
  ];
  function insightsFor(dateISO) {
    var base = dayDiff("2020-01-01", dateISO);
    var start = ((base % INS_POOL.length) + INS_POOL.length) % INS_POOL.length;
    var out = [];
    for (var i = 0; i < 5; i++) {
      var idx = (start + i) % INS_POOL.length;
      var p = INS_POOL[idx];
      out.push({ id: "h" + idx, stat: p.stat, line: p.line, source: p.source });
    }
    return out;
  }
  function insHeadCard(c, readonly) {
    var saved = !!(S.insSaved && S.insSaved[c.id]);
    return (
      '<div class="inshead"><div class="ih-stat">' + c.stat + '</div><div class="ih-line">' + c.line + '</div><div class="ih-foot"><span class="ih-src">' + ico("globe") + " " + c.source + "</span>" +
      (readonly ? "" : '<button class="ih-save' + (saved ? " on" : "") + '" data-a="inssave" data-k="' + c.id + '">' + ico("star") + (saved ? "Saved" : "Save") + "</button>") +
      "</div></div>"
    );
  }
  function vInsights() {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(S.day)) S.day = todayISO();
    var list = insightsFor(S.day).map(function (c) { return insHeadCard(c, false); }).join("");
    var savedCount = Object.keys(S.insSaved || {}).filter(function (k) { return S.insSaved[k]; }).length;
    var when = S.day === todayISO() ? "today’s read" : dayLabel(S.day) + "’s read";
    return (
      '<div class="todayhead"><div class="th-day">Insights · ' + when + '</div><h1 class="th-t">What’s moving in your market</h1><p class="th-s">Quick headlines Clara picked up. They refresh every day — save any worth keeping.</p><div class="todayctrls"><div class="boardtools">' +
      dateNav() +
      "</div></div></div>" +
      '<div class="inshead-grid">' + list + "</div>" +
      '<div class="tnote"><div class="tn-h">' + ico("spark") + " Illustrative</div><p>Sample stats and sources for the mockup. Live, these refresh daily from real market signals" + (savedCount ? " · " + savedCount + " saved" : "") + ".</p></div>"
    );
  }
  function vInsReveal() {
    var list = insightsFor(todayISO()).slice(0, 4).map(function (c) { return insHeadCard(c, true); }).join("");
    return (
      '<div class="center"><div class="cwrap insrev"><div class="clara">' +
      mk(28) +
      '<span class="nm">Clara</span></div><h1 class="q">Before you start, a quick read</h1><p class="sub">A few things moving in your market right now. Skim them — I’ll refresh these every day inside Insights.</p>' +
      '<div class="inshead-grid">' + list + "</div>" +
      '<div class="ins-cont"><button class="btn" data-a="inscontinue">Continue to Today ' + ico("arrow") + "</button></div></div></div>" +
      restart()
    );
  }
  var PCHIPS = ["Would you buy this?", "What puts you off?", "Where do you hang out?", "What content would grab you?"];
  function personaReply(persona, msg) {
    var t = (msg || "").toLowerCase();
    function r(x) { return { text: x }; }
    if (/buy|purchase|pay|convert|sign ?up|book|order|checkout/.test(t))
      return r("Honestly? I buy when I can see it'll give me " + persona.wants + ". Show me that fast and I'm in — make me dig for it and I'll move on.");
    if (/why not|wouldn'?t|would not|hesitat|put off|puts me off|stop|worry|worried|concern|objection|risk|doubt/.test(t))
      return r("What holds me back is simple — " + persona.fear + ". Take that worry away and most of my hesitation goes with it.");
    if (/where|find you|hang|platform|reach|channel|see you|scroll|discover/.test(t))
      return r("You'll usually catch me on " + persona.where + ". That's where I'm actually paying attention — meet me there, don't make me come looking.");
    if (/price|expensive|cost|cheap|afford|budget|discount|money/.test(t))
      return r("Price matters, but it's not the whole story. I'll happily pay more if I trust it delivers " + persona.wants + ". A discount won't win me while I'm still unsure.");
    if (/content|post|idea|what should|topic|angle|caption|write|say/.test(t))
      return r("If you want me to stop scrolling, talk about " + persona.wants + " — a real story or proof, not a sales pitch. That's what actually gets my attention.");
    if (/care|want|value|important|matter|looking for|need/.test(t))
      return r("What I really care about is " + persona.wants + ". Everything else is secondary — lead with that and you've got me.");
    return r("I'm " + persona.name.replace(/^The /, "the ") + " — " + persona.desc + " Ask me what I want, what puts me off, where I hang out, or what content would grab me.");
  }
  function vPersonas() {
    var list = personasList();
    var cards = list.map(function (p) {
      var st = personaStats(p.id);
      return '<div class="percard percard-btn" data-a="perdetail" data-k="' + p.id + '"><div class="per-top"><span class="per-av">' + ico("user") + '</span><div class="per-hd"><div class="per-n">' + esc(p.name) + '</div><div class="per-w">wants ' + esc(p.wants) + "</div></div></div>" +
        '<div class="per-desc">' + esc(p.desc) + "</div>" +
        '<div class="per-mini"><span class="per-mini-i"><b>' + st.share + '%</b> of your audience</span><span class="per-mini-i"><b>£</b> ' + esc(p.spend) + "</span></div>" +
        '<div class="per-a"><span class="per-open">View persona ' + ico("arrow") + "</span></div></div>";
    }).join("");
    return '<div class="todayhead"><div class="th-day">Personas</div><h1 class="th-t">Who you’re talking to</h1><p class="th-s">Clara built these from your business. Every post targets one of them. Open a persona for the full read — or talk to them directly.</p></div>' +
      '<div class="pergrid">' + cards + "</div>" +
      '<div class="tnote"><div class="tn-h">' + ico("spark") + ' Live consumer research</div><p>In the live product each persona is an agent doing real-time research on your market — here the numbers and replies are illustrative.</p></div>';
  }
  function vPersonaDetail(id) {
    var p = personaById(id), st = personaStats(id);
    function stat(v, l) { return '<div class="pstat"><div class="pstat-v">' + v + '</div><div class="pstat-l">' + l + "</div></div>"; }
    function fact(l, v) { return '<div class="pd-fact"><span class="pd-fl">' + l + '</span><span class="pd-fv">' + esc(v) + "</span></div>"; }
    return '<button class="lk mut resback" data-a="perback">' + ico("arrow") + " All personas</button>" +
      '<div class="todayhead"><div class="th-day">Personas · profile</div><h1 class="th-t">' + esc(p.name) + '</h1><p class="th-s">' + esc(p.desc) + "</p></div>" +
      '<div class="pstatrow">' + stat(st.share + "%", "of your audience") + stat(st.engage.toFixed(1) + "%", "engagement lean") + stat(st.convert + "%", "converts to action") + stat(st.fit + "%", "fit to your business") + "</div>" +
      '<section class="pd-sec"><div class="pd-lab">' + ico("user") + " Headline analytics</div><div class=\"pd-facts\">" +
        fact("Typical spend", p.spend) + fact("Finds you through", p.finds) + fact("What moves them", p.moves) + fact("What they want", p.wants) + fact("What puts them off", p.fear) + fact("Where they are", p.where) +
      "</div></section>" +
      '<div class="pd-actions"><button class="btn sm" data-a="pmodal" data-k="' + p.id + '">' + ico("spark") + " Talk to " + esc(p.name) + "</button></div>" +
      '<div class="tnote"><div class="tn-h">' + ico("spark") + ' Illustrative</div><p>Sample figures for the mockup. Live, these come from Clara’s ongoing consumer research for this persona.</p></div>';
  }
  function personaLog(id) {
    var p = personaById(id);
    var thread = S.pthreads[id] || (S.pthreads[id] = [{ from: "persona", text: "Hi — I'm " + p.name.replace(/^The /, "the ") + ". " + p.desc + " Ask me anything about what I want." }]);
    var msgs = thread.map(function (m) { return '<div class="pmsg ' + (m.from === "you" ? "me" : "them") + '"><div class="pmsg-b">' + esc(m.text) + "</div></div>"; }).join("");
    var chips = PCHIPS.map(function (c) { return '<button class="psugg" data-a="perask" data-k="' + esc(c) + '">' + esc(c) + "</button>"; }).join("");
    return '<div class="perchat-log">' + msgs + "</div><div class=\"psuggs\">" + chips + "</div>" +
      '<div class="perchat-in"><input class="pin" data-perin placeholder="Ask ' + esc(p.name) + ' something…" value="' + esc(S.pinput || "") + '"><button class="btn sm" data-a="persend">' + ico("send") + "</button></div>";
  }
  function personaModal() {
    var id = S.pModal, p = personaById(id);
    if (!p) return "";
    return '<div class="modal-ov" data-a="closepmodal"></div><div class="whymod permod"><div class="whymod-h"><div class="whymod-ttl"><span class="per-av sm">' + ico("user") +
      '</span><div class="wm-title">' + esc(p.name) + '<span class="wm-sub">talking to your persona</span></div></div><button class="brain-x" data-a="closepmodal" aria-label="Close">' + ico("close") +
      '</button></div><div class="whymod-body permod-body">' + personaLog(id) + "</div></div>";
  }
  function personaSend(msg) {
    msg = (msg || "").trim();
    var id = S.pModal || S.pchat;
    if (!msg || !id) return;
    var thread = S.pthreads[id] || (S.pthreads[id] = []);
    thread.push({ from: "you", text: msg });
    thread.push({ from: "persona", text: personaReply(personaById(id), msg).text });
    S.pinput = "";
    render();
  }
  function vPersonasTab() { return S.pDetail ? vPersonaDetail(S.pDetail) : vPersonas(); }
  function trainingPct() {
    var d = Math.min(60, Math.max(0, dayDiff(S.createdAt || todayISO(), todayISO())));
    var pub = 0; for (var k in (S.pub || {})) if (S.pub[k]) pub++;
    var done = 0; for (var k2 in (S.done || {})) if (S.done[k2]) done++;
    var chats = 0; for (var id in (S.pthreads || {})) chats += (S.pthreads[id] || []).filter(function (m) { return m.from === "you"; }).length;
    var pct = 8 + d * 0.7 + pub * 4 + done * 2 + chats * 2;
    return Math.max(6, Math.min(88, Math.round(pct)));
  }
  function trainRing(pct) {
    var r = 52, circ = 2 * Math.PI * r, len = pct / 100 * circ;
    return '<svg class="tring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--line)" stroke-width="12"/><circle cx="60" cy="60" r="52" fill="none" stroke="var(--accent)" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + len.toFixed(1) + " " + (circ - len).toFixed(1) + '" transform="rotate(-90 60 60)"/><text x="60" y="58" text-anchor="middle" class="tring-n">' + pct + '%</text><text x="60" y="76" text-anchor="middle" class="tring-l">trained</text></svg>';
  }
  function vTraining() {
    var pct = trainingPct();
    var pub = 0; for (var k in (S.pub || {})) if (S.pub[k]) pub++;
    var nm = nameOf() === "there" ? "your business" : esc(nameOf());
    var signals = [
      ["Business basics from onboarding", 92],
      ["Your personas", Math.min(96, 70 + pub * 3)],
      ["Content you've approved", Math.min(95, 35 + pub * 8)],
      ["Your edits & feedback", Math.min(90, 30 + pub * 6)],
      ["Results Clara has seen", Math.min(85, 20 + pub * 10)],
    ];
    return '<div class="todayhead"><div class="th-day">Clara training</div><h1 class="th-t">How well Clara knows you</h1><p class="th-s">The more you use Clara — approving moves, editing, chatting, publishing — the more she learns to sound and think like you.</p></div>' +
      '<div class="traingrid"><div class="traincard trainbig">' + trainRing(pct) + '<div class="trainbig-tx"><div class="trainbig-h">Clara is ' + pct + '% trained to run ' + nm + '</div><div class="trainbig-s">She started from an educated guess and sharpens every day you feed her. Keep going and this climbs.</div></div></div>' +
      '<div class="traincard"><div class="pd-lab">' + ico("spark") + ' What she\'s learned from</div>' + chartBars(signals) + "</div></div>" +
      '<div class="tnote"><div class="tn-h">' + ico("bulb") + ' If this dips, that\'s useful</div><p>A drop means Clara hit something she didn\'t know about your business — a nudge to feed her a bit more, not a failure. Illustrative for the mockup; the real figure comes from the agent.</p></div>';
  }
  function render() {
    var h =
      S.screen === "login"
        ? vLogin()
        : S.screen === "magic"
        ? vMagic()
        : S.screen === "welcome"
        ? vWelcome()
        : S.screen === "steps"
          ? vSteps()
          : S.screen === "input"
          ? vInput()
          : S.screen === "context"
          ? vContext()
          : S.screen === "think"
            ? vThink()
            : S.screen === "plan"
              ? vPlan()
              : S.screen === "done"
                ? vDone()
                : S.screen === "insights"
                  ? vInsReveal()
                  : vApp();
    if (S.publishing != null) h += publishModal();
    if (S.whyOpen != null) h += whyModal();
    if (S.todoOpen) h += todoModal();
    if (S.pModal != null) h += personaModal();
    app.innerHTML = h;
    bind();
  }
  function bind() {
    app.querySelectorAll("[data-model]").forEach(function (el) {
      var setModel = function () {
        var path = el.getAttribute("data-model");
        if (path.indexOf(".") >= 0) {
          var parts = path.split("."),
            o = S;
          for (var j = 0; j < parts.length - 1; j++) {
            if (!o[parts[j]]) o[parts[j]] = {};
            o = o[parts[j]];
          }
          o[parts[parts.length - 1]] = el.value;
        } else S[path] = el.value;
      };
      el.addEventListener("input", setModel);
      el.addEventListener("change", setModel);
    });
    app.querySelectorAll("[data-pf]").forEach(function (el) {
      el.addEventListener("input", function () {
        setPath(S.posts[el.getAttribute("data-pi")], el.getAttribute("data-pf"), el.value);
      });
    });
    app.querySelectorAll("[data-ptags]").forEach(function (el) {
      el.addEventListener("input", function () {
        var i = el.getAttribute("data-ptags"), p = S.posts[i];
        if (p) p.tags = el.value.split(",").map(function (s) { return s.trim().replace(/^#/, "").replace(/\s+/g, "-").toLowerCase(); }).filter(function (s) { return s; });
      });
    });
    app.querySelectorAll("[data-perin]").forEach(function (el) {
      el.addEventListener("input", function () { S.pinput = el.value; });
      el.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); act("persend"); } });
    });
    app.querySelectorAll("[data-coown]").forEach(function (el) {
      el.addEventListener("input", function () {
        S.compose.ownText = el.value;
      });
    });
    app.querySelectorAll("[data-psel]").forEach(function (el) {
      el.addEventListener("change", function () {
        var i = el.getAttribute("data-k"),
          f = el.getAttribute("data-psel");
        if (f.indexOf(".") >= 0) setPath(S.posts[i], f, el.value);
        else {
          S.posts[i][f] = el.value;
          if (f === "platform") S.posts[i].format = fmtFor(S.posts[i].type, el.value);
          if (f === "personaId") { S.posts[i].personaWeak = false; S.posts[i].personaAuto = false; }
        }
        render();
      });
    });
    app.querySelectorAll("[data-pmodel]").forEach(function (el) {
      el.addEventListener("input", function () {
        var key = el.getAttribute("data-pmodel");
        S.p[key] = el.value;
        if (key === "loc") {
          S.p.locAuto = false;
          var hint = el.parentNode && el.parentNode.querySelector(".autohint");
          if (hint) hint.style.display = "none";
        }
      });
    });
    app.querySelectorAll("[data-sel]").forEach(function (el) {
      el.addEventListener("change", function () {
        var key = el.getAttribute("data-sel");
        S.p[key] = el.value;
        if (key === "type") S.p.ind = BT_IND[el.value] || "other";
        if (key === "goalSel") S.p.goal = GT_GOAL[el.value] || "customers";
        refreshPlan();
      });
    });
    root.querySelectorAll("[data-a]").forEach(function (el) {
      el.addEventListener("click", function () {
        act(
          el.getAttribute("data-a"),
          el.getAttribute("data-k"),
          el.getAttribute("data-t"),
        );
      });
    });
    app.querySelectorAll("[data-carddrag]").forEach(function (el) {
      el.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", "card:" + el.getAttribute("data-carddrag"));
        e.dataTransfer.effectAllowed = "move";
        el.classList.add("dragging");
      });
      el.addEventListener("dragend", function () {
        el.classList.remove("dragging");
      });
    });
    app.querySelectorAll("[data-coldrag]").forEach(function (el) {
      el.addEventListener("dragstart", function (e) {
        e.stopPropagation();
        e.dataTransfer.setData("text/plain", "col:" + el.getAttribute("data-coldrag"));
        e.dataTransfer.effectAllowed = "move";
      });
    });
    app.querySelectorAll("[data-boardcol]").forEach(function (col) {
      col.addEventListener("dragover", function (e) {
        e.preventDefault();
        col.classList.add("dragover");
      });
      col.addEventListener("dragleave", function () {
        col.classList.remove("dragover");
      });
      col.addEventListener("drop", function (e) {
        e.preventDefault();
        col.classList.remove("dragover");
        var p = e.dataTransfer.getData("text/plain"),
          target = col.getAttribute("data-boardcol");
        if (p.indexOf("card:") === 0) act("movecard", p.slice(5), target);
        else if (p.indexOf("col:") === 0) act("movecol", p.slice(4), target);
      });
    });
    app.querySelectorAll("[data-colname]").forEach(function (el) {
      el.addEventListener("input", function () {
        var id = el.getAttribute("data-colname");
        for (var i = 0; i < S.cols.length; i++)
          if (S.cols[i].id === id) S.cols[i].name = el.value;
      });
    });
    app.querySelectorAll("[data-rf]").forEach(function (el) {
      el.addEventListener("change", function () {
        S[el.getAttribute("data-rf")] = el.value;
        render();
      });
    });
    app.querySelectorAll("[data-rsearch]").forEach(function (el) {
      el.addEventListener("input", function () {
        S.rq = el.value;
        var q = el.value.toLowerCase();
        app.querySelectorAll(".rescard").forEach(function (row) {
          var n = row.getAttribute("data-rname") || "";
          row.style.display = !q || n.indexOf(q) >= 0 ? "" : "none";
        });
      });
    });
    app.querySelectorAll("[data-pe]").forEach(function (el) {
      el.addEventListener("input", function () {
        var i = el.getAttribute("data-pe");
        if (S.proposal && S.proposal[i]) S.proposal[i].userText = el.value;
      });
    });
    app.querySelectorAll("[data-locadd]").forEach(function (el) {
      el.addEventListener("input", function () {
        S.locInput = el.value;
      });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          act("locadd");
        }
      });
    });
    app.querySelectorAll("[data-upfile]").forEach(function (el) {
      el.addEventListener("change", function () {
        var f = el.files && el.files[0];
        if (f) {
          S.p.siteFile = f.name;
          render();
        }
      });
    });
    app.querySelectorAll("[data-wt]").forEach(function (el) {
      var wi = el.getAttribute("data-wt");
      el.addEventListener("input", function () {
        if (!S.wtext) S.wtext = {};
        S.wtext[wi] = el.value;
      });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          act("wsend", wi);
        }
      });
    });
  }
  function refreshPlan() {
    var cards = root.querySelector("#cards");
    if (cards) cards.innerHTML = planCardsHTML();
    var ins = root.querySelector("#insight");
    if (ins) ins.textContent = arch().insight;
    bind();
  }
  function act(a, k, t) {
    switch (a) {
      case "start":
        S.step = 1;
        S.screen = "steps";
        render();
        break;
      case "pickone":
        S.p[t] = k;
        if (t === "type") S.p.ind = BT_IND[k] || S.p.ind;
        if (t === "goalSel") S.p.goal = GT_GOAL[k] || S.p.goal;
        render();
        break;
      case "snext":
        if (S.step === 1 && !S.p.type) {
          toast("Pick one to continue");
          return;
        }
        if (S.step === 2 && !(S.p.goals && S.p.goals.length)) {
          toast("Pick at least one");
          return;
        }
        if (S.step === 3 && !(S.sentence || "").trim()) {
          toast("Tell Clara a little about your customer");
          return;
        }
        if (S.step === 4 && !(S.name || "").trim()) {
          toast("Add a name, or let Clara suggest one");
          return;
        }
        if (S.step >= 7) {
          go();
        } else {
          S.step++;
          if (S.step === 7) prefillLoc();
          render();
        }
        break;
      case "goalpick":
        if (!S.p.goals) S.p.goals = [];
        var _gi = S.p.goals.indexOf(k);
        if (_gi >= 0) S.p.goals.splice(_gi, 1);
        else S.p.goals.push(k);
        S.p.goalSel = S.p.goals[0] || "";
        if (S.p.goalSel) S.p.goal = GT_GOAL[S.p.goalSel] || S.p.goal;
        render();
        break;
      case "gensentence":
        S.sentence = draftSentence();
        render();
        toast("Drafted — tweak it to fit");
        break;
      case "locadd":
        var lv = (S.locInput || "").trim();
        if (!lv) {
          toast("Type a location to add");
          return;
        }
        if (!S.p.locs) S.p.locs = [];
        if (S.p.locs.indexOf(lv) < 0) S.p.locs.push(lv);
        S.p.loc = S.p.locs[0];
        S.locInput = "";
        S.p.locAuto = false;
        S.locOpen = false;
        render();
        break;
      case "locdrop":
        S.locOpen = !S.locOpen;
        render();
        break;
      case "locclose":
        S.locOpen = false;
        render();
        break;
      case "locpick":
        if (!S.p.locs) S.p.locs = [];
        if (S.p.locs.indexOf(k) < 0) S.p.locs.push(k);
        S.p.loc = S.p.locs[0];
        S.locInput = "";
        S.p.locAuto = false;
        render();
        break;
      case "locdel":
        if (S.p.locs) {
          var _li = S.p.locs.indexOf(k);
          if (_li >= 0) S.p.locs.splice(_li, 1);
        }
        S.p.loc = (S.p.locs && S.p.locs[0]) || "";
        render();
        break;
      case "genname":
        S.name = genName();
        render();
        toast("Here’s a name — change it if you like");
        break;
      case "sback":
        if (S.step <= 1) {
          S.screen = "welcome";
        } else {
          S.step--;
        }
        render();
        break;
      case "planback":
        S.screen = "steps";
        if (!S.step || S.step < 1) S.step = STEPS.length;
        render();
        break;
      case "ex":
        S.sentence = EX[+k];
        S.useWeb = false;
        S.helpOpen = false;
        S.helping = false;
        render();
        break;
      case "help":
        if (!(S.sentence || "").trim()) {
          toast("Type a few words and I’ll help you sharpen it");
          return;
        }
        S.helpOpen = false;
        S.helping = true;
        render();
        setTimeout(function () {
          S.helping = false;
          S.suggestion = suggest(S.sentence);
          S.helpOpen = true;
          render();
        }, 850);
        break;
      case "usesug":
        S.sentence = S.suggestion;
        S.helpOpen = false;
        render();
        break;
      case "keepmine":
        S.helpOpen = false;
        render();
        break;
      case "build":
        if (!(S.sentence || "").trim()) {
          toast("Type a sentence, or pick an example");
          return;
        }
        S.useWeb = false;
        prefillLoc();
        S.screen = "context";
        render();
        break;
      case "readweb":
        if (!(S.website || "").trim()) {
          toast("Paste your website first");
          return;
        }
        S.useWeb = true;
        prefillLoc();
        S.screen = "context";
        render();
        break;
      case "chan":
        var cur = S.p.channels || (S.p.channels = []);
        var none = "I’m not marketing yet";
        if (k === none) {
          S.p.channels = cur.indexOf(none) >= 0 ? [] : [none];
        } else {
          if (cur.indexOf(none) >= 0) cur.splice(cur.indexOf(none), 1);
          var ix = cur.indexOf(k);
          if (ix >= 0) cur.splice(ix, 1);
          else cur.push(k);
        }
        render();
        break;
      case "bud":
        S.p.budget = S.p.budget === k ? "" : k;
        render();
        break;
      case "ctxdone":
        go();
        break;
      case "ctxback":
        S.screen = "input";
        render();
        break;
      case "why":
        S.why = !S.why;
        refreshPlan();
        break;
      case "finish":
        buildPlan();
        break;
      case "enter":
        finalizeBiz();
        break;
      case "google":
        setSession(true);
        if (S.biz && S.biz.length) {
          S.screen = "app";
          S.tab = "today";
        } else {
          S.step = 1;
          S.screen = "steps";
        }
        render();
        break;
      case "magiclink":
        if (!(S.email || "").trim()) {
          toast("Enter your email first");
          return;
        }
        S.screen = "magic";
        render();
        break;
      case "magicopen":
        setSession(true);
        if (S.biz && S.biz.length) {
          S.screen = "app";
          S.tab = "today";
        } else {
          S.screen = "welcome";
        }
        render();
        break;
      case "tologin":
        S.switch = false;
        S.screen = "login";
        render();
        break;
      case "gonew":
        blankWorking();
        S.cur = null;
        S.screen = "welcome";
        render();
        break;
      case "logout":
        snapshot();
        saveAll();
        setSession(false);
        S.switch = false;
        S.screen = "login";
        render();
        break;
      case "switch":
        S.switch = !S.switch;
        render();
        break;
      case "switchto":
        if (k !== S.cur) {
          loadBiz(k);
          saveAll();
          var _nb = bizById(k);
          toast("Now advising " + (_nb ? _nb.name : ""));
        }
        S.switch = false;
        S.screen = "app";
        S.tab = "today";
        render();
        break;
      case "addbiz":
        snapshot();
        blankWorking();
        S.cur = null;
        S.switch = false;
        S.step = 1;
        S.screen = "steps";
        render();
        break;
      case "tab":
        if (k !== "insights" && !S.insSeen) S.insSeen = true;
        if (k === "results") { S.resultView = "list"; S.resultPost = null; }
        if (k === "create") S.createDetail = null;
        S.tab = k;
        S.acctOpen = false;
        S.notifOpen = false;
        render();
        break;
      case "postresult":
        S.tab = "results";
        S.resultView = "post";
        S.resultPost = +k;
        S.acctOpen = false;
        S.notifOpen = false;
        render();
        break;
      case "resback":
        S.resultView = "list";
        S.resultPost = null;
        render();
        break;
      case "seeresults":
        S.tab = "results";
        var _pq = (S.queue || []).filter(function (qi) { return S.pub[qi]; });
        if (_pq.length === 1) { S.resultView = "post"; S.resultPost = _pq[0]; }
        else { S.resultView = "list"; S.resultPost = null; }
        render();
        break;
      case "todayview":
        S.todayView = k;
        render();
        break;
      case "notif":
        S.notifOpen = !S.notifOpen;
        S.acctOpen = false;
        render();
        break;
      case "acctmenu":
        S.acctOpen = !S.acctOpen;
        S.notifOpen = false;
        render();
        break;
      case "closemenus":
        S.notifOpen = false;
        S.acctOpen = false;
        render();
        break;
      case "notifgo":
        if (k === "results") { S.resultView = "list"; S.resultPost = null; }
        S.tab = k;
        S.notifOpen = false;
        render();
        break;
      case "navins":
        S.tab = "insights";
        S.acctOpen = false;
        render();
        break;
      case "theme":
        S.dark = !S.dark;
        applyTheme();
        saveTheme();
        S.acctOpen = false;
        render();
        break;
      case "emailtoggle":
        S.emailOpen = !S.emailOpen;
        render();
        break;
      case "todoadd":
        S.todoOpen = true;
        S.todoTitle = "";
        S.todoBody = "";
        render();
        break;
      case "todoclose":
        S.todoOpen = false;
        render();
        break;
      case "todopost":
        S.todoOpen = false;
        S.composing = true;
        S.compose = { type: "", platform: "", angleSel: null, ownText: "", angles: [] };
        S.tab = "create";
        render();
        break;
      case "todosave":
        var _tt = (S.todoTitle || "").trim();
        if (!_tt) {
          toast("Give your to-do a title");
          return;
        }
        if (!Array.isArray(S.extra)) S.extra = [];
        S.extra.push({ icon: "check", kind: "action", title: _tt, body: (S.todoBody || "").trim(), user: true, why: claraTaskIntro(_tt, "action") });
        S.todoOpen = false;
        S.todoTitle = "";
        S.todoBody = "";
        S.day = todayISO();
        S.todayView = S.todayView === "calendar" ? "list" : S.todayView;
        saveAll();
        render();
        toast("Added to today");
        break;
      case "navprofile":
        if (!S.account) S.account = { fullName: "", email: "", phone: "", title: "", tz: "(GMT+00:00) London" };
        if (!S.account.email) S.account.email = S.email || "";
        S.tab = "profile";
        S.acctOpen = false;
        render();
        break;
      case "saveprofile":
        if (S.account && S.account.email) S.email = S.account.email;
        saveAccount();
        saveAll();
        render();
        toast("Profile saved");
        break;
      case "pfpass":
        toast("In the demo, password changes aren’t wired up — this would open your account security settings.");
        break;
      case "setday":
        S.day = k;
        render();
        break;
      case "opencal":
        S.cal = !S.cal;
        S.rangeAnchor = "";
        if (S.cal) S.calMonth = { y: parseISO(S.day).getFullYear(), m: parseISO(S.day).getMonth() };
        render();
        break;
      case "closecal":
        S.cal = false;
        S.rangeAnchor = "";
        render();
        break;
      case "calshift":
        var cm = S.calMonth || { y: parseISO(S.day).getFullYear(), m: parseISO(S.day).getMonth() };
        var mm = cm.m + (+k);
        var yy = cm.y + Math.floor(mm / 12);
        mm = ((mm % 12) + 12) % 12;
        S.calMonth = { y: yy, m: mm };
        render();
        break;
      case "pickdate":
        if (!S.rangeAnchor) {
          S.rangeAnchor = k;
          S.day = k;
          S.dayTo = "";
        } else {
          var _lo = k < S.rangeAnchor ? k : S.rangeAnchor;
          var _hi = k < S.rangeAnchor ? S.rangeAnchor : k;
          S.day = _lo;
          S.dayTo = _lo === _hi ? "" : _hi;
          S.rangeAnchor = "";
          S.cal = false;
        }
        render();
        break;
      case "dayshift":
        var dd = parseISO(S.day);
        dd.setDate(dd.getDate() + +k);
        var ni = isoOf(dd);
        if (!inBounds(ni)) return;
        S.day = ni;
        S.dayTo = "";
        S.rangeAnchor = "";
        render();
        break;
      case "daytoday":
        S.day = todayISO();
        S.dayTo = "";
        S.rangeAnchor = "";
        render();
        break;
      case "addcol":
        ensureBoard();
        S.cols.push({ id: "c" + Date.now().toString(36), name: "New column" });
        render();
        break;
      case "delcol":
        ensureBoard();
        if (S.cols.length <= 1) {
          toast("Keep at least one column");
          return;
        }
        S.cols = S.cols.filter(function (c) {
          return c.id !== k;
        });
        for (var _ck in S.cardCol) if (S.cardCol[_ck] === k) delete S.cardCol[_ck];
        render();
        break;
      case "movecard":
        ensureBoard();
        S.cardCol[k] = t;
        render();
        break;
      case "movecol":
        ensureBoard();
        moveCol(k, t);
        render();
        break;
      case "inscontinue":
        S.insSeen = true;
        S.screen = "app";
        S.tab = "today";
        saveAll();
        render();
        break;
      case "inssave":
        if (!S.insSaved) S.insSaved = {};
        S.insSaved[k] = !S.insSaved[k];
        saveAll();
        render();
        break;
      case "bapprove":
        if (!S.posts[+k]) S.posts[+k] = buildPost(todayTasks()[+k], +k);
        if (!S.queue) S.queue = [];
        if (S.queue.indexOf(+k) < 0) S.queue.push(+k);
        render();
        toast("Approved — Clara’s drafting it in Create");
        break;
      case "tapprove":
        openCreate([+k]);
        break;
      case "approveall":
        var idx = [];
        var _base = todayTasks().length - campCount();
        for (var _i = 0; _i < _base; _i++) if (!S.done[_i] && kindOf(_i) === "content") idx.push(_i);
        if (!idx.length) {
          toast("Nothing left to set up");
          return;
        }
        openCreate(idx);
        break;
      case "campaccept":
        S.camp = campaignFor();
        render();
        toast("Campaign set — I’ll weave it into your days");
        break;
      case "campdecline":
        S.camp = { status: "declined" };
        render();
        break;
      case "qpublish":
        if (S.publishing != null) return;
        S.publishing = k;
        render();
        runPublish(k);
        break;
      case "qedit":
        S.qedit[k] = !S.qedit[k];
        render();
        break;
      case "qdraftsave":
        S.qdraft[k] = true;
        S.qedit[k] = false;
        saveAll();
        render();
        toast("Saved as draft — find it under Drafts in Create");
        break;
      case "cfilter":
        S.cFilter = k;
        S.createDetail = null;
        render();
        break;
      case "copen":
        S.createDetail = +k;
        render();
        break;
      case "cback":
        S.createDetail = null;
        render();
        break;
      case "askpersona":
      case "pmodal":
      case "perchat":
        S.pModal = k;
        render();
        break;
      case "closepmodal":
        S.pModal = null;
        S.pinput = "";
        render();
        break;
      case "navpersonas":
        S.tab = "personas";
        S.pDetail = null;
        S.acctOpen = false;
        S.notifOpen = false;
        render();
        break;
      case "navtraining":
        S.tab = "training";
        S.acctOpen = false;
        S.notifOpen = false;
        render();
        break;
      case "perdetail":
        S.pDetail = k;
        render();
        break;
      case "pnew": {
        var _pi = +k, _pp = S.posts[_pi];
        if (_pp) {
          var _nid = newPersonaFromPost(_pp, taskAt(_pi));
          _pp.personaId = _nid;
          _pp.personaWeak = false;
          _pp.personaAuto = false;
          saveAll();
          render();
          toast("Clara built a new persona for this post");
        }
        break;
      }
      case "perback":
        S.pDetail = null;
        render();
        break;
      case "perask":
        personaSend(k);
        break;
      case "persend":
        personaSend(S.pinput || "");
        break;
      case "ctag":
        S.cTag = k;
        S.createDetail = null;
        render();
        break;
      case "createview":
        S.createView = k;
        if (k === "calendar" && !S.cMonth) S.cMonth = cCalMonth();
        render();
        break;
      case "cmonth":
        var _cm = cCalMonth(),
          _m = _cm.m + +k,
          _y = _cm.y;
        if (_m < 0) {
          _m = 11;
          _y--;
        }
        if (_m > 11) {
          _m = 0;
          _y++;
        }
        S.cMonth = { y: _y, m: _m };
        render();
        break;
      case "conew":
        S.composing = true;
        S.compose = { type: "", platform: "", angleSel: null, ownText: "", angles: [], format: "", brief: null, ctrl: null };
        render();
        break;
      case "cocancel":
        S.composing = false;
        render();
        break;
      case "cotype":
        S.compose.type = t;
        S.compose.format = fmtFor(t, S.compose.platform || "");
        S.compose.ctrl = null;
        render();
        break;
      case "coplat":
        S.compose.platform = k;
        S.compose.format = fmtFor(S.compose.type, k);
        render();
        break;
      case "coper":
        S.compose.personaId = k;
        render();
        break;
      case "coangle":
        S.compose.angleSel = k === "own" ? "own" : +k;
        if (S.compose.brief) {
          var _at = k === "own" ? (S.compose.ownText || "") : (S.compose.angles && S.compose.angles[+k]) || "";
          if (_at) S.compose.brief.message = _at;
        }
        render();
        break;
      case "ctoggle":
        if (!S.compose.ctrl) S.compose.ctrl = {};
        S.compose.ctrl[t] = S.compose.ctrl[t] === "On" ? "Off" : "On";
        render();
        break;
      case "coenhance":
        var _ct = (S.compose.ownText || "").trim();
        var _blank = !_ct;
        S.compose.ownText = enhanceAngle(_blank ? freshIdea() : _ct);
        if (S.compose.brief) S.compose.brief.message = S.compose.ownText;
        render();
        toast(_blank ? "Clara drafted an idea — tweak it if you like" : "Enhanced — tweak it if you like");
        break;
      case "cogen": {
        var cc2 = S.compose;
        if (!(cc2.type && cc2.platform && cc2.angleSel != null)) {
          toast("Pick a type, platform and angle");
          return;
        }
        var angle = cc2.angleSel === "own" ? (cc2.ownText || "").trim() : cc2.angles[cc2.angleSel];
        if (!angle) {
          toast("Type your idea first");
          return;
        }
        var seed = (cc2.brief && (cc2.brief.message || "").trim()) || angle;
        var oi = nextOwnIdx(),
          kit = POSTKIT[S.p.ind] || POSTKIT.other;
        if (!S.ownTasks) S.ownTasks = {};
        S.ownTasks[oi] = { icon: "spark", kind: "content", title: angleTitle(angle), body: angle, own: true };
        var np = {
          type: cc2.type,
          platform: cc2.platform,
          format: cc2.format || fmtFor(cc2.type, cc2.platform),
          caption: captionFromAngle(seed, cc2.type, cc2.platform),
          media: cc2.type === "text" ? "" : cc2.type === "audio" ? "Short spoken segment — natural and conversational, about 60 seconds." : kit.media,
          hashtags: kit.tags,
          rev: 0,
          personaId: null,
          tags: [],
          brief: cc2.brief || null,
          ctrl: cc2.ctrl || null,
        };
        initEngineFields(np, S.ownTasks[oi]);
        S.posts[oi] = np;
        // Clara attaches the best-fit persona AFTER the post is made
        var _bf = bestPersonaFor(np, S.ownTasks[oi]);
        np.personaId = _bf.id;
        np.personaWeak = _bf.weak;
        np.personaAuto = true;
        if (S.queue.indexOf(oi) < 0) S.queue.push(oi);
        S.composing = false;
        S.compose = { type: "", platform: "", angleSel: null, ownText: "", angles: [], format: "", brief: null, ctrl: null };
        S.createView = "list";
        S.cFilter = "all";
        S.createDetail = oi;
        saveAll();
        render();
        toast(_bf.weak ? "Post ready — Clara wasn't sure which persona fits" : "Post ready — Clara tagged it for a persona");
        break;
      }
      case "qregen":
        S.posts[k].rev = (S.posts[k].rev || 0) + 1;
        S.posts[k].caption = captionFor(todayTasks()[+k], S.posts[k].rev);
        render();
        toast("Regenerated in your voice");
        break;
      case "ptoggle":
        var pw = S.posts[k];
        setPath(pw, t, getPath(pw, t) === "On" ? "Off" : "On");
        render();
        break;
      case "settype":
        var pt = S.posts[k];
        pt.type = t;
        pt.format = fmtFor(t, pt.platform);
        if (t === "text") pt.media = "";
        else if (t === "audio") pt.media = "Short spoken segment — natural and conversational, about 60 seconds.";
        else if (!pt.media || pt.media.indexOf("spoken segment") >= 0) pt.media = (POSTKIT[S.p.ind] || POSTKIT.other).media;
        render();
        break;
      case "tsel":
        S.sel[k] = !S.sel[k];
        render();
        break;
      case "tselall": {
        var _b1 = todayTasks().length - campCount();
        var _op = [];
        for (var _s1 = 0; _s1 < _b1; _s1++)
          if (!S.done[_s1] && !(S.queue && S.queue.indexOf(_s1) >= 0) && kindOf(_s1) === "content")
            _op.push(_s1);
        var _all =
          _op.length &&
          _op.every(function (x) {
            return S.sel[x];
          });
        _op.forEach(function (x) {
          S.sel[x] = !_all;
        });
        render();
        break;
      }
      case "draftsel": {
        var _b2 = todayTasks().length - campCount();
        var _op2 = [];
        for (var _s2 = 0; _s2 < _b2; _s2++)
          if (!S.done[_s2] && !(S.queue && S.queue.indexOf(_s2) >= 0) && kindOf(_s2) === "content")
            _op2.push(_s2);
        var _selIdx = _op2.filter(function (x) {
          return S.sel[x];
        });
        var _target = _selIdx.length ? _selIdx : _op2;
        if (!_target.length) {
          toast("Nothing to draft");
          return;
        }
        _target.forEach(function (x) {
          S.sel[x] = false;
        });
        openCreate(_target);
        break;
      }
      case "tdone":
        S.done[k] = "done";
        var _dt = todayTasks()[+k] || {};
        recordHist({ icon: _dt.icon || "check", title: _dt.title || "Completed an action", kind: "action" });
        saveAll();
        render();
        toast("Marked done — counted in your results");
        break;
      case "tskip":
        S.done[k] = "skip";
        S.twhy[k] = false;
        render();
        toast("Skipped — I’ll suggest another");
        break;
      case "tundo":
        S.done[k] = false;
        render();
        break;
      case "twhy":
        S.whyOpen = +k;
        render();
        break;
      case "closewhy":
        S.whyOpen = null;
        render();
        break;
      case "wsend":
        var wi = k,
          msg = (t != null ? t : (S.wtext && S.wtext[wi]) || "").trim();
        if (!msg) {
          toast("Type something for Clara");
          return;
        }
        if (!S.threads) S.threads = {};
        if (!S.tweak) S.tweak = {};
        if (!S.threads[wi]) S.threads[wi] = [];
        S.threads[wi].push({ from: "you", text: msg });
        var rep = claraReply(wi, msg);
        S.threads[wi].push({ from: "clara", text: rep.text });
        if (rep.propose && rep.tweak) {
          if (!S.proposal) S.proposal = {};
          S.proposal[wi] = { tweak: rep.tweak, summary: rep.summary, editText: rep.editText, kind: rep.kind, seed: 0 };
          if (S.propEdit) delete S.propEdit[wi];
        }
        if (S.wtext) S.wtext[wi] = "";
        render();
        break;
      case "wpropok": {
        var pp = S.proposal && S.proposal[k];
        if (!pp) break;
        var ni = newTodoFromChange(+k, pp.tweak);
        if (!S.threads[ni]) S.threads[ni] = [];
        S.threads[ni].push({ from: "clara", text: "Done — I’ve applied that. This is the updated move, and I’ve kept everything we talked about." });
        delete S.proposal[k];
        if (S.propEdit) delete S.propEdit[k];
        S.whyOpen = ni;
        saveAll();
        render();
        toast("Move updated");
        break;
      }
      case "wpropno":
        if (S.proposal) delete S.proposal[k];
        if (S.propEdit) delete S.propEdit[k];
        if (!S.threads) S.threads = {};
        if (!S.threads[k]) S.threads[k] = [];
        S.threads[k].push({ from: "clara", text: "No problem — I’ll leave it as is." });
        render();
        break;
      case "wpropregen": {
        var pg = S.proposal && S.proposal[k];
        if (!pg) break;
        if (pg.kind === "title") {
          toast("That’s your title — use “Enter your own” to change it");
          return;
        }
        pg.seed = (pg.seed || 0) + 1;
        if (pg.kind === "platform") {
          var opts = ["Instagram", "LinkedIn", "TikTok", "Facebook", "Email", "X", "Pinterest"].filter(function (x) { return x !== pg.tweak.platform; });
          var np = opts[pg.seed % opts.length];
          pg.tweak = { platform: np };
          pg.summary = "Switch this move to " + np;
          pg.editText = np;
        } else {
          var na = ANGLE_ALTS[pg.seed % ANGLE_ALTS.length];
          pg.tweak = { angle: na };
          pg.summary = "Try this angle instead: " + na;
          pg.editText = na;
        }
        pg.userText = null;
        render();
        break;
      }
      case "wpropedit":
        if (!S.propEdit) S.propEdit = {};
        S.propEdit[k] = !S.propEdit[k];
        render();
        break;
      case "wpropsaveedit": {
        var pe = S.proposal && S.proposal[k];
        if (!pe) break;
        var v = (pe.userText != null ? pe.userText : pe.editText || "").trim();
        if (!v) {
          toast("Type your version first");
          return;
        }
        var ni2 = newTodoFromChange(+k, pe.kind === "platform" ? { platform: v } : pe.kind === "title" ? { title: v } : { angle: v });
        if (!S.threads[ni2]) S.threads[ni2] = [];
        S.threads[ni2].push({ from: "clara", text: "Got it — I’ve used your version. This is the updated move, and I’ve kept our conversation." });
        delete S.proposal[k];
        if (S.propEdit) delete S.propEdit[k];
        S.whyOpen = ni2;
        saveAll();
        render();
        toast("Move updated");
        break;
      }
      case "tedit":
        toast("Edit mode (prototype)");
        break;
      case "restart":
        fullReset();
        S = {
          screen: "welcome",
          sentence: "",
          website: "",
          useWeb: false,
          name: "",
          p: { ind: "other", goal: "customers", aud: "any", tone: "warm", type: "", goalSel: "", goals: [], channels: [], budget: "", loc: "", locs: [] },
          why: false,
          helping: false,
          helpOpen: false,
          suggestion: "",
          tab: "today",
          done: {},
          twhy: {},
          queue: [],
          pub: {},
          qtext: {},
          qedit: {},
          posts: {},
          camp: { status: "off" },
          sel: {},
          publishing: null,
          biz: [],
          cur: null,
          switch: false,
          email: "",
          todayView: "list",
          brain: false,
          step: 1,
          cols: [],
          cardCol: {},
          createdAt: "",
          hist: {},
          day: "today",
          dayTo: "",
          rangeAnchor: "",
          cal: false,
          calMonth: null,
          threads: {},
          tweak: {},
          wtext: {},
          whyOpen: null,
          locInput: "",
          locOpen: false,
          notifOpen: false,
          acctOpen: false,
          trail: ["today"],
          resultView: "list",
          resultPost: null,
          rq: "",
          rStatus: "all",
          rPlat: "all",
          rType: "all",
          rDate: "all",
          insSeen: false,
          insSaved: {},
          insDismiss: {},
          extra: [],
          insDetail: null,
        };
        render();
        break;
    }
  }
  function go() {
    parse();
    S.screen = "plan";
    render();
  }
  function buildPlan() {
    S.screen = "think";
    render();
    runThink();
  }
  function runThink() {
    var lines = S.useWeb
      ? [
          "Reading your website…",
          "Understanding your market…",
          "Finding your ideal customer…",
          "Shaping your positioning…",
          "Drafting your first move…",
        ]
      : [
          "Understanding your business…",
          "Reading your market…",
          "Finding your ideal customer…",
          "Shaping your positioning…",
          "Drafting your first move…",
        ];
    var i = 0;
    var pb = root.querySelector("#pb");
    if (pb) pb.style.width = "12%";
    var iv = setInterval(function () {
      var el = root.querySelector("#tl");
      if (!el || S.screen !== "think") {
        clearInterval(iv);
        return;
      }
      i++;
      if (i < lines.length) {
        el.textContent = lines[i];
        if (pb) pb.style.width = 12 + i * 20 + "%";
      }
    }, 560);
    setTimeout(function () {
      if (S.screen === "think") {
        if (hasSession()) {
          finalizeBiz();
        } else {
          S.screen = "done";
          render();
        }
      }
    }, 2900);
  }
  bootstrap();
  render();
})();
