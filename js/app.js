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
    star: "M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 17l-5.3 2.8 1.1-6L3.4 9.4l6-.8z",
  };
  function gLogo(){return '<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>';}
  function LS(){try{return window.localStorage;}catch(e){return null;}}
  function loadProfile(){var s=LS();if(!s)return null;try{return JSON.parse(s.getItem("clarity_profile"));}catch(e){return null;}}
  function setSession(v){var s=LS();if(!s)return;try{v?s.setItem("clarity_session","1"):s.removeItem("clarity_session");}catch(e){}}
  function hasSession(){var s=LS();if(!s)return false;try{return s.getItem("clarity_session")==="1";}catch(e){return false;}}
  function fullReset(){var s=LS();if(s){try{s.removeItem("clarity_profile");s.removeItem("clarity_session");s.removeItem("clarity_biz");}catch(e){}}}
  // ---- Multi-business engine ----
  var PBFIELDS=["p","name","sentence","done","twhy","queue","pub","qtext","qedit","posts","camp","sel","cols","cardCol","threads","tweak","insSeen","insSaved","insDismiss","extra"];
  function newBizId(){return "b"+Date.now().toString(36)+Math.floor(Math.random()*1e4).toString(36);}
  function makeBiz(){return {id:newBizId(),p:{ind:"other",goal:"customers",aud:"any",tone:"warm",type:"",goalSel:"",channels:[],budget:"",loc:""},name:"",sentence:"",done:{},twhy:{},queue:[],pub:{},qtext:{},qedit:{},posts:{},camp:{status:"off"},sel:{},cols:[],cardCol:{},threads:{},tweak:{},insSeen:false,insSaved:{},insDismiss:{},extra:[]};}
  function bizById(id){for(var i=0;i<S.biz.length;i++)if(S.biz[i].id===id)return S.biz[i];return null;}
  function bizByIdIn(arr,id){for(var i=0;i<arr.length;i++)if(arr[i].id===id)return arr[i];return null;}
  function snapshot(){if(S.cur==null)return;var r=bizById(S.cur);if(!r)return;PBFIELDS.forEach(function(f){r[f]=S[f];});}
  function loadBiz(id){snapshot();var r=bizById(id);if(!r)return;PBFIELDS.forEach(function(f){S[f]=r[f];});normBiz();S.cur=id;S.tab="today";}
  function normBiz(){["done","twhy","pub","qtext","qedit","posts","sel","cardCol","threads","tweak","wtext","insSaved","insDismiss"].forEach(function(f){if(!S[f]||typeof S[f]!=="object")S[f]={};});if(!Array.isArray(S.queue))S.queue=[];if(!Array.isArray(S.cols))S.cols=[];if(!Array.isArray(S.extra))S.extra=[];if(S.insSeen===undefined)S.insSeen=true;if(!S.camp||typeof S.camp!=="object")S.camp={status:"off"};if(!S.p||typeof S.p!=="object")S.p={ind:"other",goal:"customers",aud:"any",tone:"warm",type:"",goalSel:"",channels:[],budget:"",loc:""};}
  function blankWorking(){S.p={ind:"other",goal:"customers",aud:"any",tone:"warm",type:"",goalSel:"",channels:[],budget:"",loc:""};S.name="";S.sentence="";S.done={};S.twhy={};S.queue=[];S.pub={};S.qtext={};S.qedit={};S.posts={};S.camp={status:"off"};S.sel={};S.cols=[];S.cardCol={};S.threads={};S.tweak={};S.wtext={};S.insSeen=false;S.insSaved={};S.insDismiss={};S.extra=[];S.website="";S.useWeb=false;S.why=false;S.helping=false;S.helpOpen=false;S.suggestion="";S.step=1;}
  function deriveName(sent,ind){var t=(sent||"").trim();if(t){t=t.replace(/^(i\s+(?:run|own|have|am|bake|make|coach|sell|do|offer|build|teach|help)\s+(?:a|an|my|the)?\s*)/i,"").replace(/\s+(?:and|but|so|because|that|which)\b.*$/i,"").replace(/,.*$/,"").replace(/[.!?].*$/,"").trim();t=t.split(/\s+/).slice(0,4).join(" ").trim();if(t)return t.charAt(0).toUpperCase()+t.slice(1);}return (typeof INDS!=="undefined"&&INDS[ind])||"My business";}
  function initials(nm){nm=(nm||"").trim();if(!nm)return "YB";var w=nm.split(/\s+/);return ((w[0][0]||"")+(w[1]?w[1][0]:(w[0][1]||""))).toUpperCase();}
  function saveAll(){snapshot();var s=LS();if(!s)return;try{s.setItem("clarity_biz",JSON.stringify({list:S.biz,cur:S.cur,email:S.email||""}));}catch(e){}}
  function loadBizData(){var s=LS();if(!s)return null;try{return JSON.parse(s.getItem("clarity_biz"));}catch(e){return null;}}
  function finalizeBiz(){var b=makeBiz();PBFIELDS.forEach(function(f){b[f]=S[f];});if(!b.name)b.name=deriveName(S.sentence,S.p.ind);b.insSeen=false;S.biz.push(b);S.cur=b.id;S.name=b.name;S.insSeen=false;saveAll();setSession(true);S.screen="app";S.tab="insights";render();toast("Now advising "+b.name);}
  function bootstrap(){var data=loadBizData();if(data&&data.list&&data.list.length){S.biz=data.list;S.email=data.email||"";var cur=data.cur;if(!bizByIdIn(S.biz,cur))cur=S.biz[0].id;loadBiz(cur);S.screen=hasSession()?"app":"login";S.tab="today";return;}var prof=loadProfile();if(prof&&prof.p){var b=makeBiz();b.p=prof.p;b.sentence=prof.sentence||"";b.name=prof.name||deriveName(prof.sentence,prof.p.ind);S.biz=[b];S.email=prof.email||"";loadBiz(b.id);S.screen=hasSession()?"app":"login";S.tab="today";return;}S.screen="welcome";}
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
  var POSTABLE_CH = { Instagram: 1, LinkedIn: 1, TikTok: 1, Facebook: 1, Email: 1, "SEO or blog": 1, Website: 1 };
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
    p: { ind: "other", goal: "customers", aud: "any", tone: "warm", type: "", goalSel: "", channels: [], budget: "", loc: "" },
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
    day: "today",
    cal: false,
    calMonth: null,
    threads: {},
    tweak: {},
    wtext: {},
    whyOpen: null,
    insSeen: false,
    insSaved: {},
    insDismiss: {},
    extra: [],
    insDetail: null,
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
    if (!S.p.loc) {
      var lc = parseLoc(t);
      if (lc) S.p.loc = lc;
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
  function primaryChannel() {
    var ch = S.p.channels || [];
    for (var i = 0; i < ch.length; i++) if (POSTABLE_CH[ch[i]]) return ch[i];
    return arch().channels[0];
  }
  function prefillLoc() {
    if (S.p.loc) return;
    var fromText = parseLoc(S.useWeb ? S.website : S.sentence);
    var guess = fromText || detectLoc();
    if (guess) {
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
    { q: "What do you want Clarity to help you with first?", sub: "Choose one. This shapes your first moves." },
    { q: "Who is your ideal customer, and what do you sell them?", sub: "A line or two is plenty. This is where Clara learns the most." },
    { q: "Where are you currently marketing your business?", sub: "Select all that apply." },
    { q: "What monthly marketing budget should Clarity plan around?", sub: "Choose one. Clara plans within it." },
    { q: "Where is your business based?", sub: "City or country. This helps Clara surface local suggestions, timing and market signals." },
  ];
  function vSteps() {
    var n = S.step,
      meta = STEPS[n - 1],
      inner = "";
    if (n === 1) {
      for (var k1 in BT) inner += optRow("type", k1, BT[k1]);
      inner = '<div class="optlist">' + inner + "</div>";
    } else if (n === 2) {
      for (var k2 in GT) inner += optRow("goalSel", k2, GT[k2]);
      inner = '<div class="optlist">' + inner + "</div>";
    } else if (n === 3) {
      inner =
        '<textarea class="ta" data-model="sentence" placeholder="e.g. Marketing managers at mid-sized companies who need better insight into what their customers want, which messages will resonate, and where to focus their next campaign.">' +
        esc(S.sentence) +
        "</textarea>";
    } else if (n === 4) {
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
      inner = '<div class="mchips">' + chans + "</div>";
    } else if (n === 5) {
      for (var k5 in BUD)
        inner +=
          '<button class="optrow' +
          (S.p.budget === k5 ? " on" : "") +
          '" data-a="bud" data-k="' +
          k5 +
          '"><span class="opt-l">' +
          BUD[k5] +
          '</span><span class="opt-r">' +
          (S.p.budget === k5 ? ico("check") : "") +
          "</span></button>";
      inner = '<div class="optlist">' + inner + "</div>";
    } else {
      inner =
        '<input class="webinp wide" data-pmodel="loc" placeholder="e.g. Leeds, UK" value="' +
        esc(S.p.loc || "") +
        '">' +
        (S.p.locAuto && S.p.loc
          ? '<div class="autohint">' +
            ico("compass") +
            " We recognised your location and filled this in — change it if it’s not right.</div>"
          : "");
    }
    var canNext = n === 1 ? !!S.p.type : n === 2 ? !!S.p.goalSel : true;
    var nextLabel = n === 6 ? "Build my plan" : "Continue";
    var back =
      '<button class="lk mut" data-a="sback">' +
      (n === 1 ? "Back" : ico("arrow") + " Back") +
      "</button>";
    return (
      '<div class="center"><div class="cwrap step"><div class="stepbar"><div class="stepbar-i" style="width:' +
      Math.round((n / 6) * 100) +
      '%"></div></div><div class="stepnum">Question ' +
      n +
      ' of 6</div><div class="clara">' +
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
  function vWelcome() {
    return (
      '<div class="welcome"><div class="wl">' +
      mk(56).replace('class="mark m"', 'class="mark bigmark"') +
      '<div class="logo">Clarity<span class="d">.</span></div><div class="tag">Your personal advisor to go-to-market. Tell me what you’re building — I’ll do the marketing thinking, you approve the moves.</div><button class="btn" data-a="start">Get started ' +
      ico("arrow") +
      '</button><div class="hint">Six quick questions — about a minute. No marketing know-how needed.</div></div><div class="wr"><div class="qbubble"><div class="t">' +
      ico("spark") +
      " Clara</div><p>“Answer six quick questions and I’ll hand you a plan.”</p></div></div></div>" +
      restart()
    );
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
  function vPlan() {
    var a = arch(),
      nm = nameOf();
    var left =
      '<div class="card understand"><div class="ttl">Here’s what I understood</div><div class="fg"><label>What you’re growing</label>' +
      selP("type", BT) +
      '</div><div class="fg"><label>What you want first</label>' +
      selP("goalSel", GT) +
      '</div><div class="fg"><label>Who you serve</label>' +
      sel("aud", AUDS) +
      '</div><div class="fg2"><div class="fg"><label>Based in</label><input class="pin" data-pmodel="loc" value="' +
      esc(S.p.loc || "") +
      '" placeholder="City or country"></div><div class="fg"><label>Monthly budget</label>' +
      selP("budget", BUD, "Not set") +
      '</div></div><div class="fg"><label>Your voice</label>' +
      sel("tone", TONES) +
      '</div><div class="read"><div class="rl">' +
      ico("spark") +
      ' Clara’s read</div><p id="insight">' +
      a.insight +
      "</p></div></div>";
    return (
      '<div class="planhead"><h2 class="rh">Here’s your plan' +
      (nm === "there" ? "" : ", " + nm) +
      ' <span class="live"><span class="livedot"></span>updates live</span></h2><p class="rs">Built from what you told me. Change anything on the left and it rewrites itself.</p></div><div class="grow"><div class="planbody">' +
      left +
      '<div><div class="plancards" id="cards">' +
      planCardsHTML() +
      '</div></div></div></div><div class="planfoot"><span class="fl">Built from one line — nothing to fill in</span><button class="btn sm" data-a="finish">Looks right — finish setup ' +
      ico("arrow") +
      "</button></div>" +
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
          title: "Re-approach 10 warm leads",
          body: "People who showed interest and went quiet — I’ve drafted the nudge.",
          why: "The cheapest revenue is interest you already earned. Reviving warm leads beats chasing strangers.",
        },
        {
          icon: "bulb",
          title: "Add proof at the decision point",
          body: "Put one testimonial or result where " + au + " decide to buy.",
          why: "A little proof at the deciding moment lifts conversion more than more traffic does.",
        },
      ],
    };
    return (sets[g] || sets.customers).concat(S.extra || []);
  }
  function campaignFor(){var a=arch(),ch=a.channels,nm=(nameOf()==="there"?"your business":nameOf()),au=(AUDS[S.p.aud]||"your customers").toLowerCase();var meta=({food:{name:"Weekend market push",occ:"Your busiest weekend is a couple of weeks out — worth a run-up."},saas:{name:"Feature-launch push",occ:"You’ve got something worth a proper moment, not a quiet post."},fitness:{name:"Fresh-start push",occ:"There’s a natural ‘new me’ window coming — a good time to ride it."},shop:{name:"Seasonal push",occ:"A seasonal buying moment is coming up."},services:{name:"Fill-the-book fortnight",occ:"A focused two weeks can fill your quieter slots."},creator:{name:"Launch-week push",occ:"You’ve got a launch worth building up to."},other:{name:"Two-week growth push",occ:"A short, focused sprint could move things."}})[S.p.ind]||{name:"Two-week growth push",occ:"A short, focused sprint could move things."};var moves=[{icon:"mega",title:"Announce it early",body:"A "+ch[0]+" post that builds anticipation — tell "+au+" it’s coming.",why:"Campaigns win on the run-up. Warming people up beats a cold launch-day post."},{icon:"bulb",title:"Share the story behind it",body:"One piece on why this matters — the reason, not the features.",why:"Story is what makes a push feel like an event, not an ad."},{icon:"flag",title:"Make the ask, clearly",body:"A direct "+(ch[2]||ch[0])+" post with one clear action for "+au+".",why:"Every campaign needs a moment where you actually ask. This is it."}];return {name:meta.name,occ:meta.occ,dayN:2,dayTotal:14,moves:moves,status:"active"};}
  function campaignPreview(){var c=campaignFor();return {name:c.name,occ:c.occ,dayTotal:c.dayTotal,moves:c.moves.length};}
  function campCount(){return S.camp&&S.camp.status==="active"?S.camp.moves.length:0;}
  function todayTasks(){var b=baseTasks();if(!campCount())return b;var cm=S.camp.moves.map(function(m){return {icon:m.icon,title:m.title,body:m.body,why:m.why,camp:S.camp.name};});return b.concat(cm);}
  var PLATS = { instagram: "Instagram", linkedin: "LinkedIn", tiktok: "TikTok", facebook: "Facebook", youtube: "YouTube", email: "Email", x: "X", twitter: "X", pinterest: "Pinterest" };
  function movePlat(i) {
    if (S.tweak && S.tweak[i] && S.tweak[i].platform) return S.tweak[i].platform;
    return primaryChannel();
  }
  function audiencePhrase() {
    return (AUDS[S.p.aud] || "your customers").toLowerCase();
  }
  function claraReply(i, msg) {
    var t = (msg || "").toLowerCase(),
      found = null,
      kk;
    for (kk in PLATS) if (t.indexOf(kk) >= 0) found = PLATS[kk];
    if (found)
      return { text: "Fair point — " + found + " fits this better for " + audiencePhrase() + ". I’ve switched this move to " + found + " and I’ll draft for it.", tweak: { platform: found } };
    if (/platform|channel|where/.test(t))
      return { text: "I chose " + movePlat(i) + " because that’s where " + audiencePhrase() + " are most active for this kind of post. Prefer another? Name it and I’ll switch." };
    if (/sales|salesy|pushy|hard sell|promotional|too much/.test(t))
      return { text: "Understood — I’ll keep this softer and value-first, less of a pitch. I’ve updated the angle.", tweak: { angle: "warmer, value-first" } };
    if (/angle|different|another|alternativ|other idea|instead/.test(t))
      return { text: "Here’s a different angle: lead with a quick customer story rather than the tip. I’ve noted that for the draft.", tweak: { angle: "customer-story led" } };
    if (/now|timing|today|wait|later/.test(t))
      return { text: "It’s today’s highest-leverage move for your goal — small effort, and it compounds. But it can wait; skip it and I’ll resurface it tomorrow." };
    if (/\bno\b|disagree|don.?t|why should|not sure|push/.test(t))
      return { text: "Totally fair to push back. I rank it first because it moves your main goal fastest — but if it doesn’t fit, skip it and I’ll learn from that." };
    return { text: "Good question. In short: this targets " + audiencePhrase() + " on " + movePlat(i) + ", aimed at your main goal. Tell me what feels off — the platform, the angle, or the timing — and I’ll adjust." };
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
      '<div class="winput"><input class="wtext" data-wt="' + i + '" placeholder="Ask Clara or push back…" value="' + esc((S.wtext && S.wtext[i]) || "") +
      '"><button class="wsendbtn" data-a="wsend" data-k="' + i + '" aria-label="Send">' + ico("send") + "</button></div>";
    return '<div class="wl">' + ico("spark") + " Clara’s reasoning · ask or push back</div><div class=\"wmsgs\">" + body + '</div><div class="wchips">' + chips + "</div>" + input;
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
    var st = S.done[i]
      ? "done"
      : S.queue && S.queue.indexOf(i) >= 0
        ? "drafting"
        : "open";
    var open = !!S.twhy[i];
    var whyBtn =
      '<button class="lk mut" data-a="twhy" data-k="' + i + '">' + ico("spark") + " Why this?</button>";
    var actions;
    if (st === "done")
      actions =
        '<span class="doneflag">' +
        ico("checkc") +
        (S.done[i] === "skip" ? "Skipped" : "Published") +
        '</span><button class="lk mut" data-a="tundo" data-k="' +
        i +
        '">Undo</button>';
    else if (st === "drafting")
      actions =
        '<button class="lk" data-a="tab" data-k="create">' +
        ico("arrow") +
        "Finish in Create</button>" +
        whyBtn;
    else
      actions =
        '<button class="lk" data-a="tapprove" data-k="' +
        i +
        '">' +
        ico("check") +
        "Approve</button>" +
        whyBtn +
        '<button class="lk mut" data-a="tskip" data-k="' +
        i +
        '">Skip</button>';
    var badge = st === "drafting" ? '<span class="tc-badge">Drafting</span>' : "";
    var campChip = t.camp
      ? '<span class="tc-camp">' + ico("mega") + t.camp + "</span>"
      : "";
    var chk =
      st === "open"
        ? '<button class="tcheck' +
          (S.sel[i] ? " on" : "") +
          '" data-a="tsel" data-k="' +
          i +
          '" aria-label="Select">' +
          (S.sel[i] ? ico("check") : "") +
          "</button>"
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
      campChip +
      badge +
      '</div><div class="tc-b">' +
      t.body +
      "</div>" +
      tweakNote(i) +
      '</div></div><div class="tc-a">' +
      actions +
      "</div></div>"
    );
  }
  function whyModal() {
    var i = S.whyOpen,
      t = todayTasks()[i];
    if (!t) return "";
    return (
      '<div class="modal-ov" data-a="closewhy"></div><div class="whymod"><div class="whymod-h"><div class="whymod-ttl"><div class="tc-ic">' +
      ico("spark") +
      '</div><div class="wm-title">Fight your case</div></div><button class="brain-x" data-a="closewhy" aria-label="Close">' +
      ico("close") +
      '</button></div><div class="whymod-body">' +
      thread(i, t) +
      tweakNote(i) +
      "</div></div>"
    );
  }
  function vToday() {
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
    for (var i = 0; i < baseLen; i++) cards += tcard(tasks[i], i);
    if (cc) {
      var nextC = -1;
      for (var c = baseLen; c < tasks.length; c++)
        if (!S.done[c]) {
          nextC = c;
          break;
        }
      if (nextC >= 0) cards += tcard(tasks[nextC], nextC);
    }
    var baseDone = 0;
    for (var b = 0; b < baseLen; b++) if (S.done[b]) baseDone++;
    var sub =
      baseDone >= baseLen
        ? "Your core moves are done — nice. Fresh moves land tomorrow."
        : baseDone > 0
          ? baseDone + " of " + baseLen + " done. Keep going."
          : "Your " +
            baseLen +
            " highest-leverage moves for today" +
            (cc ? ", plus your campaign" : "") +
            ".";
    var openIdx = [];
    for (var o = 0; o < baseLen; o++)
      if (!S.done[o] && !(S.queue && S.queue.indexOf(o) >= 0)) openIdx.push(o);
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
      (S.todayView !== "board" ? " on" : "") +
      '" data-a="todayview" data-k="list">' +
      ico("list") +
      ' List</button><button class="vt' +
      (S.todayView === "board" ? " on" : "") +
      '" data-a="todayview" data-k="board">' +
      ico("board") +
      " Board</button></div>";
    var head =
      '<div class="todayhead"><div class="th-day">' +
      todayDate() +
      '</div><h1 class="th-t">Today' +
      nm +
      '</h1><p class="th-s">' +
      sub +
      "</p>" +
      toggle +
      "</div>";
    var tnote =
      '<div class="tnote"><div class="tn-h">' +
      ico("spark") +
      " Why so few?</div><p>Your full strategy runs behind the scenes. I only surface today’s highest-leverage moves, so you’re never overwhelmed — approve, tweak, or skip and I’ll adapt tomorrow.</p><button class=\"lk\" data-a=\"openbrain\">" +
      ico("spark") +
      " See Clara’s full thinking</button></div>";
    var body =
      S.todayView === "board" ? vBoard() : aa + cards + tnote;
    return head + offer + banner + body;
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
  var HISTPOOL = [
    { icon: "mega", title: "Shared a customer win" },
    { icon: "zap", title: "Behind-the-scenes reel" },
    { icon: "send", title: "Weekly email to your list" },
    { icon: "bulb", title: "Posted your signature tip" },
    { icon: "flag", title: "Answered a common question" },
    { icon: "target", title: "Ran a small promotion" },
    { icon: "user", title: "Replied to your reviews" },
  ];
  function cardState(i) {
    if (S.done[i] === "skip") return "skip";
    if (S.pub[i]) return S.posts[i] && S.posts[i].live ? "published" : "scheduled";
    if (S.posts[i]) return "progress";
    return "approve";
  }
  function dayCards(day) {
    var out = [],
      t = todayISO();
    if (day === t) {
      var b = baseTasks(),
        baseLen = b.length;
      for (var i = 0; i < baseLen; i++) {
        if (cardState(i) === "skip") continue;
        out.push({ key: "today:" + i, i: i, icon: b[i].icon, title: b[i].title, body: b[i].body, state: cardState(i), post: S.posts[i] });
      }
    } else if (dayDiff(day, t) > 0) {
      var seed = 0,
        c;
      for (c = 0; c < day.length; c++) seed = (seed * 31 + day.charCodeAt(c)) >>> 0;
      var n = 2 + (seed % 3);
      for (var k = 0; k < n; k++) {
        var it = HISTPOOL[(seed + k) % HISTPOOL.length];
        out.push({ key: day + ":" + k, icon: it.icon, title: it.title, historical: true });
      }
    }
    return out;
  }
  function colExists(id) {
    for (var i = 0; i < S.cols.length; i++) if (S.cols[i].id === id) return true;
    return false;
  }
  function colOfCard(c) {
    var stored = S.cardCol[c.key];
    if (stored && colExists(stored)) return stored;
    if (c.historical) return S.cols[S.cols.length - 1].id;
    var idx = { approve: 0, progress: 1, scheduled: 2, published: 3, skip: 3 }[c.state] || 0;
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
      a;
    if (st === "approve")
      a = '<button class="lk" data-a="bapprove" data-k="' + c.i + '">' + ico("check") + 'Approve</button><button class="lk mut" data-a="tskip" data-k="' + c.i + '">Skip</button>';
    else if (st === "progress")
      a = '<button class="lk" data-a="tab" data-k="create">' + ico("arrow") + "Open in Create</button>";
    else if (st === "scheduled")
      a = '<span class="bc-sch">' + ico("refresh") + "Scheduled</span>";
    else
      a = '<span class="bc-live">' + ico("checkc") + 'Live</span><button class="lk mut" data-a="tab" data-k="results">Results</button>';
    var meta =
      (st === "scheduled" || st === "published") && post.platform
        ? '<div class="bc-meta">' + ico(typeIcon(post.type || "text")) + post.platform + (post.scheduled ? " · " + post.scheduled : "") + "</div>"
        : "";
    return (
      '<div class="bcard"' + drag + '><div class="bc-top"><div class="bc-ic">' +
      ico(c.icon) + '</div><div class="bc-t2">' + c.title + "</div></div>" +
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
      cells += '<button class="cal-cell' + (iso === S.day ? " sel" : "") + (iso === t ? " today" : "") + '" data-a="pickdate" data-k="' + iso + '">' + d + "</button>";
    }
    return '<div class="cal-ov" data-a="closecal"></div><div class="calpop">' + head + dowRow + '<div class="cal-grid">' + cells + "</div></div>";
  }
  function vBoard() {
    ensureBoard();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(S.day)) S.day = todayISO();
    var isToday = S.day === todayISO();
    var daysel =
      '<div class="datenav"><button class="dn-arrow prev" data-a="dayshift" data-k="-1" aria-label="Previous day">' + ico("arrow") +
      '</button><button class="dn-date" data-a="opencal">' + ico("cal") + " " + dayLabel(S.day) +
      '</button><button class="dn-arrow" data-a="dayshift" data-k="1" aria-label="Next day">' + ico("arrow") + "</button>" +
      (isToday ? "" : '<button class="lk mut dn-today" data-a="daytoday">Jump to today</button>') +
      (S.cal ? vCal() : "") +
      "</div>";
    var cards = dayCards(S.day);
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
    return '<div class="boardtools"><div class="daysel">' + daysel + "</div></div><div class=\"board custom\">" + out + "</div>";
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
  function vApp() {
    var nm = nameOf() === "there" ? "Your business" : nameOf();
    var ini = initials(nameOf() === "there" ? "" : nameOf());
    var content =
      S.tab === "today"
        ? vToday()
        : S.tab === "create"
          ? vCreate()
          : S.tab === "insights"
            ? vInsights()
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
      '</span></button><button class="rail-out" data-a="logout" aria-label="Log out">' +
      ico("out") +
      "</button></div>";
    return (
      '<div class="app"><div class="rail"><div class="rail-logo">' +
      mk(30) +
      '<span>Clarity</span></div><nav class="rail-nav">' +
      navItem("today", "Today", "home") +
      navItem("create", "Create", "zap") +
      navItem("results", "Results", "chart") +
      navItem("insights", "Insights", "bulb") +
      '<button class="rail-item brainbtn" data-a="openbrain">' +
      ico("spark") +
      "<span>Clara’s thinking</span></button>" +
      "</nav>" +
      foot +
      '</div><div class="main"><div class="main-scroll' +
      (S.tab === "today" && S.todayView === "board" ? " full" : "") +
      '">' +
      content +
      "</div></div></div>" +
      restart()
    );
  }
  function captionFor(task,rev){var a=arch(),tone=S.p.tone,nm=(nameOf()==="there"?"":nameOf());var hooks=({warm:["Here’s the honest version.","A little something from us this week.","Real talk for a second."],bold:["Most people get this wrong.","Let’s be blunt.","Stop scrolling — this matters."],pro:["A quick, useful note.","Worth two minutes.","One thing worth knowing."],playful:["Okay, confession time. ✨","Plot twist. 👀","Hot take incoming. 🌶"]})[tone]||["Here’s the honest version."];var cta=({warm:"If that sounds like you, come say hi.",bold:"Stop settling — you know where to find us.",pro:"Happy to help if this is on your list — just reach out.",playful:"Drop a 🙋 if you’re in — we got you."})[tone]||"";return hooks[(rev||0)%hooks.length]+"\n\n"+a.pos+"\n\n"+cta+(nm?"\n\n— "+nm:"");}
  function inferType(p){if(/instagram|pinterest|facebook/i.test(p))return "image";if(/tiktok|youtube/i.test(p))return "video";return "text";}
  var FMT_OPTS={image:["Feed post","Carousel","Story","Pin"],video:["Reel","Short","Story"],text:["Post","Article","Thread","Newsletter"]};
  function fmtFor(type,p){var pf=({image:{Instagram:"Feed post",Pinterest:"Pin",Facebook:"Feed post"},video:{TikTok:"Short video",YouTube:"Short",Instagram:"Reel"},text:{LinkedIn:"Post",Email:"Newsletter",X:"Post","Content & SEO":"Article"}})[type]||{};return pf[p]||FMT_OPTS[type][0];}
  var POSTKIT={food:{media:"A close, natural shot of your product mid-craft — flour-dusted, soft daylight, real not staged.",tags:"#madelocal #craftfood #smallbatch #supportlocal"},saas:{media:"A clean before/after or a simple UI frame showing the hours saved — minimal, high-contrast.",tags:"#b2bsaas #productivity #founders #workflow"},fitness:{media:"A candid, real-person shot mid-session — energy over perfection, natural light.",tags:"#fitnessjourney #week1 #coaching #showup"},shop:{media:"A styled-but-honest flat-lay or lifestyle shot — story first, price never.",tags:"#smallbusiness #handmade #shopindie #thestory"},services:{media:"A warm, trustworthy shot — you or your space, faces and credibility over stock.",tags:"#trusted #local #realresults #askanexpert"},creator:{media:"A bold thumbnail-style frame with one clear promise — your face plus the transformation.",tags:"#learnwithme #creator #howto #growth"},other:{media:"A clean, on-brand image that leads with your one clear difference.",tags:"#yourbrand #local #thedifference"}};
  function buildPost(task,i){var a=arch(),POSTABLE={Instagram:1,LinkedIn:1,TikTok:1,YouTube:1,X:1,Facebook:1,Pinterest:1,Email:1,"Content & SEO":1,"SEO or blog":1,"Google profile":1,Community:1,Website:1},uc=(S.p.channels||[]).filter(function(c){return POSTABLE[c];}),p=uc.length?uc[0]:a.channels[0],ci;if(!uc.length){for(ci=0;ci<a.channels.length;ci++){if(POSTABLE[a.channels[ci]]){p=a.channels[ci];break;}}}if(i!=null&&S.tweak&&S.tweak[i]&&S.tweak[i].platform)p=S.tweak[i].platform;var ty=inferType(p),kit=POSTKIT[S.p.ind]||POSTKIT.other;return {type:ty,platform:p,format:fmtFor(ty,p),caption:captionFor(task,0),media:ty==="text"?"":kit.media,hashtags:kit.tags,rev:0};}
  function typeIcon(ty){return ty==="image"?"img":ty==="video"?"vid":"txt";}
  function typeLabel(ty){return ty==="image"?"Image":ty==="video"?"Video":"Text";}
  function openCreate(indices){S.queue=indices.slice();var tasks=todayTasks();indices.forEach(function(i){if(!S.posts[i])S.posts[i]=buildPost(tasks[i],i);});S.screen="app";S.tab="create";render();}
  function draftCard(task,i){var post=S.posts[i]||(S.posts[i]=buildPost(task,i)),pub=!!S.pub[i],edit=!pub&&!!S.qedit[i];var dest='<span class="dch">'+ico(typeIcon(post.type))+post.platform+" · "+post.format+'</span><span class="dc-for">for: '+task.title+'</span>'+(task.camp?'<span class="dc-camp">'+ico("mega")+task.camp+'</span>':'');if(pub)return '<div class="dcard done"><div class="dc-top">'+dest+'</div><div class="dc-a"><span class="doneflag">'+ico("checkc")+(post.scheduled?"Scheduled · "+post.scheduled:"Published")+'</span></div></div>';var view;if(edit){var tc="";["text","image","video"].forEach(function(ty){tc+='<button class="tchip'+(post.type===ty?" on":"")+'" data-a="settype" data-k="'+i+'" data-t="'+ty+'">'+ico(typeIcon(ty))+typeLabel(ty)+'</button>';});var pfo="";arch().channels.forEach(function(c){pfo+='<option value="'+c+'"'+(post.platform===c?" selected":"")+'>'+c+'</option>';});var fmo="";(FMT_OPTS[post.type]||[]).forEach(function(f){fmo+='<option value="'+f+'"'+(post.format===f?" selected":"")+'>'+f+'</option>';});view='<div class="editgrid"><div class="efield"><label>Content type</label><div class="tchips">'+tc+'</div></div><div class="erow"><div class="efield"><label>Platform</label><select class="sel" data-psel="platform" data-k="'+i+'">'+pfo+'</select></div><div class="efield"><label>Format</label><select class="sel" data-psel="format" data-k="'+i+'">'+fmo+'</select></div></div><div class="efield"><label>Caption</label><textarea class="dtext-edit" data-pf="caption" data-pi="'+i+'">'+esc(post.caption)+'</textarea></div>'+(post.type!=="text"?'<div class="efield"><label>'+(post.type==="video"?"Video direction":"Image direction")+'</label><textarea class="mtext-edit" data-pf="media" data-pi="'+i+'">'+esc(post.media)+'</textarea></div>':"")+'<div class="efield"><label>Hashtags</label><input class="hinp" data-pf="hashtags" data-pi="'+i+'" value="'+esc(post.hashtags)+'"></div></div>';}else{view='<div class="dtext">'+esc(post.caption)+"</div>"+(post.media?'<div class="pmedia"><span class="pm-l">'+(post.type==="video"?"Video":"Image")+' direction</span> '+esc(post.media)+"</div>":"")+(post.hashtags?'<div class="ptags">'+esc(post.hashtags)+"</div>":"");}var actions=pub?'<span class="doneflag">'+ico("checkc")+"Published</span>":'<button class="btn sm" data-a="qpublish" data-k="'+i+'">'+ico("send")+' Publish</button><button class="lk mut" data-a="qedit" data-k="'+i+'">'+ico("edit")+(edit?"Done":"Edit")+'</button><button class="lk mut" data-a="qregen" data-k="'+i+'">'+ico("refresh")+"Regenerate</button>";return '<div class="dcard'+(pub?" done":"")+(edit?" editing":"")+'"><div class="dc-top">'+dest+"</div>"+view+'<div class="dc-a">'+actions+"</div></div>";}
  function createEmpty(){return '<div class="stub"><div class="stub-ic">'+ico("zap")+'</div><h2>Nothing queued yet</h2><p>Approve a move in Today and Clara will draft it here, ready to publish.</p><button class="btn sm" data-a="tab" data-k="today">'+ico("arrow")+' Go to Today</button></div>';}
  function vCreate(){if(!S.queue||!S.queue.length)return createEmpty();var tasks=todayTasks();var allPub=S.queue.every(function(i){return S.pub[i];});var head='<div class="todayhead"><div class="th-day">Create</div><h1 class="th-t">'+(allPub?"Published":S.queue.length>1?"Your content, ready to review":"Ready to publish")+'</h1><p class="th-s">'+(allPub?"Nice work — that’s today’s content live.":"Clara drafted "+(S.queue.length>1?("all "+S.queue.length+" in your voice"):"this in your voice")+". Review, tweak, publish.")+'</p></div>';var cards="";S.queue.forEach(function(i){cards+=draftCard(tasks[i],i);});var foot=allPub?'<div class="tnote"><div class="tn-h">'+ico("checkc")+' Done for today</div><p>Nicely done — that’s today live. <button class="lk" data-a="tab" data-k="results">See your results</button> · <button class="lk" data-a="tab" data-k="today">Back to Today</button></p></div>':"";return head+cards+foot;}
  function resultsEmpty(){return '<div class="stub"><div class="stub-ic">'+ico("chart")+'</div><h2>Nothing to measure yet</h2><p>Publish a move in Create and its results land here — then they feed back into tomorrow’s Today.</p><button class="btn sm" data-a="tab" data-k="today">'+ico("arrow")+' Go to Today</button></div>';}
  function fmtNum(n){return (n||0).toLocaleString("en-US");}
  function postMetrics(i){var seed=(i+1)*97;var reach=380+((seed*13)%760);var rate=9+(seed%12);var eng=Math.round(reach*rate/100);var clicks=Math.round(eng*(0.18+((seed%7)/50)));var conv=Math.max(0,Math.round(clicks*(0.10+(seed%6)/100)));return {reach:reach,eng:eng,clicks:clicks,conv:conv};}
  function paidEligible(){var ch=S.p.channels||[];if(ch.indexOf("Google Ads")>=0||ch.indexOf("Meta Ads")>=0)return true;return ["250-1k","1k-5k","5k-15k","15k+"].indexOf(S.p.budget)>=0;}
  function paidStats(nPub){if(!paidEligible())return null;var wk=({"0-250":55,"250-1k":190,"1k-5k":720,"5k-15k":2100,"15k+":4600})[S.p.budget];if(wk==null)wk=180;var seed=(nPub+3)*61;var cpc=+(0.8+(seed%22)/20).toFixed(2);var clicks=Math.round(wk/cpc);var convRate=0.04+(seed%6)/100;var conv=Math.max(1,Math.round(clicks*convRate));var roas=+(2.4+(seed%20)/10).toFixed(1);var cpr=+(wk/conv).toFixed(2);var ch=S.p.channels||[];var via=ch.indexOf("Meta Ads")>=0&&ch.indexOf("Google Ads")>=0?"Meta & Google Ads":ch.indexOf("Meta Ads")>=0?"Meta Ads":ch.indexOf("Google Ads")>=0?"Google Ads":"paid ads";return {spend:wk,cpc:cpc,clicks:clicks,conv:conv,roas:roas,cpr:cpr,via:via};}
  function trendSeries(nPub){var seed=(nPub+1)*37;var out=[];for(var i=0;i<7;i++){var g=0.5+i*0.09;var noise=((seed>>(i%5))%7)/40;out.push(Math.round((0.35+g+noise)*100));}return out;}
  function sparkArea(vals){var w=320,h=88,pad=8;var max=Math.max.apply(null,vals)||1,min=Math.min.apply(null,vals),rng=(max-min)||1;var pts=vals.map(function(v,i){var x=pad+i*((w-2*pad)/(vals.length-1));var y=h-pad-((v-min)/rng)*(h-2*pad);return [x,y];});var line=pts.map(function(p,i){return (i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1);}).join(" ");var area=line+" L"+pts[pts.length-1][0].toFixed(1)+" "+(h-pad)+" L"+pts[0][0].toFixed(1)+" "+(h-pad)+" Z";var last=pts[pts.length-1];return '<svg class="spark" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><path class="spark-fill" d="'+area+'"/><path class="spark-line" d="'+line+'"/><circle class="spark-dot" cx="'+last[0].toFixed(1)+'" cy="'+last[1].toFixed(1)+'" r="3.5"/></svg>';}
  function vResults(){
    var pub=[];for(var k in S.pub)if(S.pub[k])pub.push(+k);
    if(!pub.length)return resultsEmpty();
    var tasks=todayTasks(),g=S.p.goal;
    var m={},totR=0,totE=0,totC=0,totV=0,maxE=0,top=pub[0];
    pub.forEach(function(i){var x=postMetrics(i);m[i]=x;totR+=x.reach;totE+=x.eng;totC+=x.clicks;totV+=x.conv;if(x.eng>maxE){maxE=x.eng;top=i;}});
    var ctr=totR?((totC/totR)*100).toFixed(1):"0";
    var engRate=totR?Math.round((totE/totR)*100):0;
    var convLabel=g==="revenue"?"Sales":g==="visibility"?"Conversions":"New enquiries";
    var followers=Math.max(1,Math.round(totE*0.09));
    var stats=[
      ["People reached",fmtNum(totR),"+"+(12+pub.length*5)+"% this week"],
      ["Engaged",fmtNum(totE),engRate+"% engagement rate"],
      ["Clicks",fmtNum(totC),ctr+"% click-through"],
      [convLabel,""+totV,"+"+totV+" this week"],
      ["New followers","+"+followers,"audience growth"],
    ];
    var sg="";stats.forEach(function(s){sg+='<div class="rstat"><div class="rs-v">'+s[1]+'</div><div class="rs-l">'+s[0]+'</div><div class="rs-d">'+s[2]+'</div></div>';});
    var series=trendSeries(pub.length);
    var trendPct=Math.max(1,Math.round(((series[6]-series[3])/series[3])*100));
    var trend='<div class="rsec">This week’s momentum</div><div class="rtrend"><div class="rt-h"><span class="rt-l">Reach · last 7 days</span><span class="rt-d">+'+trendPct+'% vs last week</span></div>'+sparkArea(series)+"</div>";
    var pd=paidStats(pub.length),paid="";
    if(pd){
      var pstats=[
        ["Ad spend","$"+fmtNum(pd.spend),"this week"],
        ["Cost per click","$"+pd.cpc,"CPC"],
        ["Ad clicks",fmtNum(pd.clicks),"from ads"],
        [convLabel+" (ads)",""+pd.conv,"$"+pd.cpr+" per result"],
        ["ROAS",pd.roas+"×","return on ad spend"],
      ];
      var pg="";pstats.forEach(function(s){pg+='<div class="rstat paid"><div class="rs-v">'+s[1]+'</div><div class="rs-l">'+s[0]+'</div><div class="rs-d">'+s[2]+'</div></div>';});
      paid='<div class="rsec paidsec">'+ico("target")+" Paid · from your "+pd.via+'</div><div class="rgrid">'+pg+"</div>";
    }
    var pl="";pub.forEach(function(i){var post=S.posts[i]||{},mv=tasks[i]||{},x=m[i];var w=Math.round((x.eng/maxE)*100);var pctr=x.reach?((x.clicks/x.reach)*100).toFixed(1):"0";pl+='<div class="rpost'+(i===top?" top":"")+'"><div class="rp-top"><span class="dch">'+ico(typeIcon(post.type||"text"))+(post.platform||"")+" · "+(post.format||"")+(post.scheduled?" · "+post.scheduled:"")+'</span>'+(i===top?'<span class="rp-tag">'+ico("spark")+' Top performer</span>':"")+'</div><div class="rp-move">'+(mv.title||"")+'</div><div class="rp-stats"><span class="rp-n"><b>'+fmtNum(x.reach)+'</b> reached</span><span class="rp-n"><b>'+x.eng+'</b> engaged</span><span class="rp-n"><b>'+x.clicks+'</b> clicks · '+pctr+'%</span></div><div class="rp-bar"><i style="width:'+w+'%"></i></div></div>';});
    var tp=S.posts[top]||{},tm=tasks[top]||{};
    var read="Your "+(tp.platform||"top")+" post — “"+(tm.title||"this one")+"” — is pulling ahead, with "+m[top].eng+" engaged from "+fmtNum(m[top].reach)+" reached. I’ll weight tomorrow’s Today toward more like it.";
    var campBlock=(S.camp&&S.camp.status==="active")?'<div class="tnote camp"><div class="tn-h">'+ico("mega")+' Campaign · '+S.camp.name+'</div><p>Your '+S.camp.name.toLowerCase()+' is live (day '+S.camp.dayN+' of '+S.camp.dayTotal+'). Its posts are folded into the numbers above.</p></div>':"";
    return '<div class="todayhead"><div class="th-day">Results · this week</div><h1 class="th-t">Results</h1><p class="th-s">How your published moves are actually doing.</p></div><div class="rgrid">'+sg+"</div>"+trend+paid+'<div class="rsec">Your posts</div>'+pl+'<div class="rread"><div class="rr-h">'+ico("spark")+' Clara’s read</div><p>'+read+"</p></div>"+campBlock+'<div class="tnote"><div class="tn-h">'+ico("refresh")+' Feeding tomorrow</div><p>The winners here shape what Clara puts in your Today next — more of what’s working, less of what isn’t.</p></div>';
  }
  function bestTime(k){var p=(S.posts[k]||{}).platform||"";return ({Instagram:"today, 6:30pm",LinkedIn:"Tue, 8:15am","Content & SEO":"Wed, 10:00am",Email:"Thu, 9:00am",TikTok:"today, 7:45pm",YouTube:"Sat, 11:00am",Community:"today, 8:00pm",X:"today, 12:30pm",Pinterest:"Sun, 8:00pm",Facebook:"today, 1:00pm","Local partnerships":"this week",Referrals:"this week","Google profile":"today"})[p]||"today, 6:30pm";}
  function publishModal(){return '<div class="modal-ov"><div class="modal"><div class="orb"><div class="ring"></div><div class="ring r2"></div><div class="core">'+ico("spark")+'</div></div><h3>Clara’s finding the best time to post</h3><div class="line" id="publine">Reading when your audience is most active…</div><div class="pbar"><i id="pubpb"></i></div></div></div>';}
  function runPublish(k){var lines=["Reading when your audience is most active…","Checking your channel’s peak windows…","Locking in the best moment…"];var i=0;var pb=root.querySelector("#pubpb");if(pb)pb.style.width="15%";var iv=setInterval(function(){var el=root.querySelector("#publine");if(!el||S.publishing==null){clearInterval(iv);return;}i++;if(i<lines.length){el.textContent=lines[i];if(pb)pb.style.width=(15+i*30)+"%";}},560);setTimeout(function(){if(S.publishing==null)return;var t=bestTime(k);S.pub[k]=true;S.done[k]=true;S.qedit[k]=false;if(S.posts[k])S.posts[k].scheduled=t;S.publishing=null;render();toast("Scheduled for "+t+" — Clara picked your peak time");setTimeout(function(){if(S.posts[k]&&S.pub[k]){S.posts[k].live=true;render();}},3200);},2050);}
  function vLogin(){var list=S.biz||[];var returning=list.length>0;var cur=returning?(bizById(S.cur)||list[0]):null;var who=cur?((cur.name&&cur.name.trim())?cur.name:(INDS[cur.p.ind]||"your business")):"";var many=list.length>1;var tag=returning?("Welcome back"+(who&&!many?", "+who:"")+". "+(many?"Sign in and pick up any of your "+list.length+" businesses.":"Your advisor’s kept thinking — pick up where you left off.")):"Your personal advisor to go-to-market. Sign in to get today’s moves.";return '<div class="welcome"><div class="wl"><div class="loginwrap">'+mk(56).replace('class="mark m"','class="mark bigmark"')+'<div class="logo">Clarity<span class="d">.</span></div><div class="tag">'+tag+'</div><div class="loginbox"><button class="btn block gsi" data-a="google">'+gLogo()+' Continue with Google</button><div class="divider"><span>or</span></div><input class="webinp" data-model="email" placeholder="you@business.com" value="'+esc(S.email||"")+'"><button class="btn block" data-a="magiclink" style="margin-top:10px">'+ico("mail")+' Email me a sign-in link</button></div><div class="hint">'+(returning?'<button class="lk mut" data-a="gonew">Set up a different business</button>':'New to Clarity? <button class="lk" data-a="gonew">Get started</button>')+'</div></div></div><div class="wr"><div class="qbubble"><div class="t">'+ico("spark")+' Clara</div><p>“'+(returning?"Good to see you again — I’ve got today’s moves ready.":"Give me one sentence and I’ll hand you a plan.")+'”</p></div></div></div>'+restart();}
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
  function brainPanel() {
    var a = arch(),
      d = DEEP[S.p.ind] || DEEP.other;
    var bt = BT[S.p.type] || INDS[S.p.ind] || "Business";
    var goal = GT[S.p.goalSel] || GOALS[S.p.goal] || "—";
    var aud = AUDS[S.p.aud] || "your audience";
    var loc = S.p.loc || "—";
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
      '<div class="brain-ov" data-a="closebrain"></div><aside class="brain"><div class="brain-h"><div class="brain-t">' +
      ico("spark") +
      " Clara’s thinking</div><button class=\"brain-x\" data-a=\"closebrain\" aria-label=\"Close\">" +
      ico("close") +
      '</button></div><div class="brain-sub">The full working behind what you see. Read as much or as little as you like.</div><div class="brain-body">' +
      overview +
      persona +
      pos +
      market +
      channels +
      why +
      log +
      "</div></aside>"
    );
  }
  function insights() {
    var a = arch(),
      d = DEEP[S.p.ind] || DEEP.other,
      aud = (AUDS[S.p.aud] || "your customers").toLowerCase(),
      loc = S.p.loc,
      bud = S.p.budget,
      ch = primaryChannel(),
      indl = INDS[S.p.ind] || "your market";
    var list = [];
    list.push({ t: "Rivals are leaving a gap you can take", d: d.rivals + " " + a.pos + " Most competitors say the same thing, so a sharper, more specific message stands out fast.", score: 89, tags: ["Competition", "Positioning"], src: d.sources[0] });
    list.push({ t: "You can win without being the cheapest", d: "Across " + indl + ", buyers who care about quality convert on trust and proof, not price. Holding at or above the middle with clear proof protects margin better than discounting.", score: 83, tags: ["Pricing"], src: "Pricing & Willingness-to-Pay Study 2025" });
    list.push({ t: d.market.split(".")[0] + ".", d: d.market + " Leaning into this now, before it saturates, is where the early advantage sits.", score: 80, tags: ["Market", "Demand"], src: d.sources[1] });
    list.push({ t: aud.charAt(0).toUpperCase() + aud.slice(1) + " are most reachable on " + ch, d: "For " + indl + ", " + ch + " is where " + aud + " spend attention and act. Concentrating effort there beats spreading thin across every channel.", score: 76, tags: ["Channels"], src: "Channel Engagement Benchmarks 2025" });
    if (["1k-5k", "5k-15k", "15k+"].indexOf(bud) >= 0)
      list.push({ t: "Your budget can support a small paid test", d: "At your budget, a modest paid test on " + ch + " or search could accelerate what's already working organically. Start with one audience and one message, then scale what converts.", score: 72, tags: ["Paid", "Budget"], src: "SMB Paid Media Benchmarks 2025" });
    else
      list.push({ t: "Organic-first is the right call at your budget", d: "You don't need ad spend to move first. Consistent, useful content on " + ch + " plus referrals will compound — revisit paid once you have proof of what resonates.", score: 70, tags: ["Organic", "Budget"], src: "SMB Growth Study 2025" });
    if (loc)
      list.push({ t: "Local signal: demand around " + loc, d: "Being specific to " + loc + " — local references, timing to local peak hours, and community presence — lifts relevance and trust for a business like yours. National messaging leaves that edge on the table.", score: 74, tags: ["Local"], src: "Local Marketing Impact Report 2025" });
    list.push({ t: "Add your website and I’ll sharpen these", d: "Right now these are built from your answers. Give me your website or a price list and I can compare your actual pricing and offers against competitors, and flag where you’re over- or under-priced.", score: null, tags: ["Tip"], nudge: true, src: "" });
    return list;
  }
  function insCard(c, i) {
    var id = "in" + i;
    if (S.insDismiss[id]) return "";
    var saved = !!S.insSaved[id];
    var tags = c.tags.map(function (tg) { return '<span class="ins-tag">' + tg + "</span>"; }).join("");
    var score = c.score != null ? '<span class="ins-score">' + c.score + "</span>" : '<span class="ins-score tip">' + ico("bulb") + "</span>";
    var actions = c.nudge
      ? '<button class="lk mut" data-a="insdismiss" data-k="' + id + '">Dismiss</button>'
      : '<button class="lk" data-a="insmove" data-k="' + i + '">' + ico("plus") + "Turn into a move</button>" +
        '<button class="lk mut" data-a="inssave" data-k="' + id + '">' + ico("star") + (saved ? "Saved" : "Save") + "</button>" +
        '<button class="lk mut" data-a="insdismiss" data-k="' + id + '">Dismiss</button>';
    return (
      '<div class="inscard' + (c.nudge ? " nudge" : "") + (saved ? " saved" : "") + '"><div class="ins-top">' + score + '<div class="ins-tags">' + tags + "</div></div>" +
      '<button class="ins-body" data-a="insopen" data-k="' + i + '"><div class="ins-t">' + c.t + '</div><div class="ins-d">' + c.d.split(". ")[0] + ".</div></button>" +
      (c.src ? '<div class="ins-src">' + ico("globe") + esc(c.src) + "</div>" : "") +
      '<div class="ins-a">' + actions + "</div></div>"
    );
  }
  function vInsights() {
    var all = insights(),
      reveal = !S.insSeen,
      nm = nameOf() === "there" ? "your business" : nameOf();
    var head = reveal
      ? '<div class="todayhead"><div class="th-day">' + ico("spark") + ' Clara did the homework</div><h1 class="th-t">Before you start — here’s what I found</h1><p class="th-s">A first read on your market and competitors, built from your answers. Skim these, then jump into today’s moves.</p></div>'
      : '<div class="todayhead"><div class="th-day">Insights</div><h1 class="th-t">What I’m seeing in your market</h1><p class="th-s">Market and competitor signals for ' + nm + ". Save the useful ones, or turn them into a move.</p></div>";
    var cont = reveal ? '<div class="ins-cont"><button class="btn" data-a="inscontinue">Continue to Today ' + ico("arrow") + "</button></div>" : "";
    var cards = all.map(insCard).join("");
    return head + cont + '<div class="insgrid">' + cards + '</div><div class="tnote"><div class="tn-h">' + ico("spark") + ' Illustrative</div><p>These are seeded from your answers to show the shape of Clara’s market read. Connected to live research, they’d refresh on their own.</p></div>';
  }
  function insDetailModal() {
    var i = S.insDetail,
      all = insights(),
      c = all[i];
    if (!c) return "";
    var tags = c.tags.map(function (tg) { return '<span class="ins-tag">' + tg + "</span>"; }).join("");
    return (
      '<div class="modal-ov" data-a="insclose"></div><div class="whymod"><div class="whymod-h"><div class="whymod-ttl"><div class="tc-ic">' + ico("compass") + '</div><div class="wm-title">' + c.t + '</div></div><button class="brain-x" data-a="insclose" aria-label="Close">' + ico("close") + '</button></div><div class="whymod-body"><div class="ins-tags" style="margin-bottom:11px">' + tags + (c.score != null ? '<span class="ins-tag score">' + c.score + " relevance</span>" : "") + '</div><p class="bp-p">' + c.d + "</p>" +
      (c.src ? '<div class="ins-src" style="margin-top:12px">' + ico("globe") + esc(c.src) + "</div>" : "") +
      (c.nudge ? "" : '<div class="ins-a" style="margin-top:15px"><button class="btn sm" data-a="insmove" data-k="' + i + '">' + ico("plus") + " Turn into a move</button></div>") +
      "</div></div>"
    );
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
                : vApp();
    if (S.publishing != null) h += publishModal();
    if (S.brain) h += brainPanel();
    if (S.whyOpen != null) h += whyModal();
    if (S.insDetail != null) h += insDetailModal();
    app.innerHTML = h;
    bind();
  }
  function bind() {
    app.querySelectorAll("[data-model]").forEach(function (el) {
      el.addEventListener("input", function () {
        S[el.getAttribute("data-model")] = el.value;
      });
    });
    app.querySelectorAll("[data-pf]").forEach(function (el) {
      el.addEventListener("input", function () {
        S.posts[el.getAttribute("data-pi")][el.getAttribute("data-pf")] =
          el.value;
      });
    });
    app.querySelectorAll("[data-psel]").forEach(function (el) {
      el.addEventListener("change", function () {
        var i = el.getAttribute("data-k"),
          f = el.getAttribute("data-psel");
        S.posts[i][f] = el.value;
        if (f === "platform")
          S.posts[i].format = fmtFor(S.posts[i].type, el.value);
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
        if (S.step === 2 && !S.p.goalSel) {
          toast("Pick one to continue");
          return;
        }
        if (S.step === 3 && !(S.sentence || "").trim()) {
          toast("Tell Clara a little about your customer");
          return;
        }
        if (S.step >= 6) {
          go();
        } else {
          S.step++;
          if (S.step === 6) prefillLoc();
          render();
        }
        break;
      case "sback":
        if (S.step <= 1) {
          S.screen = "welcome";
        } else {
          S.step--;
        }
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
        if (hasSession()) {
          finalizeBiz();
        } else {
          S.screen = "done";
          render();
        }
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
          S.screen = "welcome";
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
        S.tab = k;
        render();
        break;
      case "todayview":
        S.todayView = k;
        render();
        break;
      case "setday":
        S.day = k;
        render();
        break;
      case "opencal":
        S.cal = !S.cal;
        if (S.cal) S.calMonth = { y: parseISO(S.day).getFullYear(), m: parseISO(S.day).getMonth() };
        render();
        break;
      case "closecal":
        S.cal = false;
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
        S.day = k;
        S.cal = false;
        render();
        break;
      case "dayshift":
        var dd = parseISO(S.day);
        dd.setDate(dd.getDate() + +k);
        S.day = isoOf(dd);
        render();
        break;
      case "daytoday":
        S.day = todayISO();
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
      case "openbrain":
        S.brain = true;
        render();
        break;
      case "closebrain":
        S.brain = false;
        render();
        break;
      case "inscontinue":
        S.insSeen = true;
        S.tab = "today";
        saveAll();
        render();
        break;
      case "inssave":
        S.insSaved[k] = !S.insSaved[k];
        saveAll();
        render();
        break;
      case "insdismiss":
        S.insDismiss[k] = true;
        saveAll();
        render();
        break;
      case "insopen":
        S.insDetail = +k;
        render();
        break;
      case "insclose":
        S.insDetail = null;
        render();
        break;
      case "insmove":
        var ic = insights()[+k];
        if (ic) {
          if (!S.extra) S.extra = [];
          S.extra.push({ icon: "flag", title: "Post about: " + ic.t, body: "Clara turned a market insight into a move — create a piece around this angle this week.", why: "You flagged this insight as worth acting on, so I added it to Today. Approve it and I’ll draft the content around “" + ic.t + "”." });
          S.insDetail = null;
          S.insSeen = true;
          S.tab = "today";
          saveAll();
          render();
          toast("Added to Today — approve it to draft");
        }
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
        for (var _i = 0; _i < _base; _i++) if (!S.done[_i]) idx.push(_i);
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
      case "qregen":
        S.posts[k].rev = (S.posts[k].rev || 0) + 1;
        S.posts[k].caption = captionFor(todayTasks()[+k], S.posts[k].rev);
        render();
        toast("Regenerated in your voice");
        break;
      case "settype":
        var pt = S.posts[k];
        pt.type = t;
        pt.format = fmtFor(t, pt.platform);
        if (t === "text") pt.media = "";
        else if (!pt.media) pt.media = (POSTKIT[S.p.ind] || POSTKIT.other).media;
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
          if (!S.done[_s1] && !(S.queue && S.queue.indexOf(_s1) >= 0))
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
          if (!S.done[_s2] && !(S.queue && S.queue.indexOf(_s2) >= 0))
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
        if (rep.tweak) {
          S.tweak[wi] = Object.assign({}, S.tweak[wi] || {}, rep.tweak);
          if (rep.tweak.platform && S.posts[wi]) {
            S.posts[wi].platform = rep.tweak.platform;
            S.posts[wi].type = inferType(rep.tweak.platform);
            S.posts[wi].format = fmtFor(S.posts[wi].type, rep.tweak.platform);
          }
        }
        if (S.wtext) S.wtext[wi] = "";
        render();
        break;
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
          p: { ind: "other", goal: "customers", aud: "any", tone: "warm", type: "", goalSel: "", channels: [], budget: "", loc: "" },
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
          day: "today",
          cal: false,
          calMonth: null,
          threads: {},
          tweak: {},
          wtext: {},
          whyOpen: null,
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
        S.screen = "plan";
        render();
      }
    }, 2900);
  }
  bootstrap();
  render();
})();
