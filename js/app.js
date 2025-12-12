(() => {
  "use strict";

  const root = document.documentElement;
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  // English default (per your request)
  const DEFAULT_LANG = "en";
  const DEFAULT_THEME = "dark";

  const I18N = {
    en: {
      intro_sub: "Loading experience…",
      follow_me: "Follow",
      pill: "CINEMATIC • DARK • WHITE ACCENT",
      nav_about: "About",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Contact",

      hero_name_1: "Yahya Khaled",
      hero_name_2: "Noaman Al‑Banna",
      hero_role: "Web Developer & UI/UX Designer",
      hero_desc: "I craft modern websites with premium UI/UX, smooth interactions, and clean front‑end engineering.",
      cta_primary: "Let’s work",
      cta_secondary: "View projects",

      fact_age_k: "Age",
      fact_age_v: "21",
      fact_loc_k: "Location",
      fact_loc_v: "Sana’a, Yemen",
      fact_ed_k: "Education",
      fact_ed_v: "BSc Computer Science",

      meta_title: "Signature",
      meta_1: "Premium dark design with white accent.",
      meta_2: "Smooth motion & micro‑interactions.",
      meta_3: "Fast, responsive, and clean layout.",

      about_title: "About",
      about_sub: "A short story about who I am and what I deliver.",
      about_h1: "Biography",
      about_p1: "I’m Yahya Khaled Noaman Al‑Banna, 21 years old from Sana’a, Yemen. I hold a BSc in Computer Science from Al‑Etehad University. I’m passionate about modern web development and building clean, premium interfaces.",
      about_h2: "My focus",
      about_p2: "Elegance, performance, and UX—so the product feels premium and loads fast.",
      skills_title: "Skills",
      chip_responsive: "Responsive",
      about_h3: "Design DNA",
      about_p3: "Minimal, cinematic, and intentional motion—no noise, just quality.",

      services_title: "Services",
      services_sub: "Clear deliverables, premium results.",
      sv1_t: "Web Development",
      sv1_p: "Modern websites with best practices: fast, secure, and easy to use.",
      sv2_t: "UI/UX Design",
      sv2_p: "Premium interfaces focused on usability, clarity, and aesthetics.",
      sv3_t: "Responsive Design",
      sv3_p: "A flawless experience across mobile, tablet, and large screens.",
      sv4_t: "Front‑End Engineering",
      sv4_p: "Clean, scalable front‑end using JavaScript & React.",
      sv5_t: "Maintenance & Upgrades",
      sv5_p: "Fixes, improvements, and new features for existing websites.",
      sv6_t: "Brand‑Ready Landing Pages",
      sv6_p: "High‑converting landing pages with smooth motion and clear sections.",

      projects_title: "Projects",
      projects_sub: "Selected work (clean, modern, and responsive).",
      p1_t: "Photographer Management System",
      p1_p: "A modern platform for photographers and bookings with a sleek UI.",
      p2_t: "Professional Portfolio Website",
      p2_p: "A premium portfolio layout designed for clean presentation and performance.",
      view_live: "View Live",
      view_repo: "View Repo",

      contact_title: "Contact",
      contact_sub: "Let’s build something premium.",
      c_email: "Email",
      c_wa: "WhatsApp",

      footer_name: "Yahya Al‑Banna",
      to_top: "Back to top"
    },
    ar: {
      intro_sub: "جاري تجهيز التجربة…",
      follow_me: "تابعني",
      pill: "سينمائي • داكن • أكسنت أبيض",
      nav_about: "نبذة",
      nav_services: "الخدمات",
      nav_projects: "المشاريع",
      nav_contact: "التواصل",

      hero_name_1: "يحيى خالد",
      hero_name_2: "نعمان البناء",
      hero_role: "مطور ويب ومصمم واجهات",
      hero_desc: "أطوّر مواقع عصرية واحترافية بواجهات فخمة، وحركات ناعمة، وهندسة واجهات أمامية نظيفة.",
      cta_primary: "خلّنا نشتغل",
      cta_secondary: "شاهد المشاريع",

      fact_age_k: "العمر",
      fact_age_v: "21",
      fact_loc_k: "الموقع",
      fact_loc_v: "صنعاء، اليمن",
      fact_ed_k: "التعليم",
      fact_ed_v: "بكالوريوس علوم الحاسوب",

      meta_title: "الأسلوب",
      meta_1: "تصميم داكن فخم بأكسنت أبيض.",
      meta_2: "حركات ناعمة وتفاصيل صغيرة محسوبة.",
      meta_3: "سرعة، تجاوب، وتنظيم نظيف.",

      about_title: "نبذة عني",
      about_sub: "ملخص سريع عني وما الذي أقدمه.",
      about_h1: "السيرة",
      about_p1: "أنا يحيى خالد نعمان البناء، عمري 21 عاماً من صنعاء، اليمن. حاصل على بكالوريوس علوم الحاسوب من جامعة الاتحاد، وشغفي تطوير الويب وبناء واجهات نظيفة وفخمة.",
      about_h2: "تركيزي",
      about_p2: "الجمالية والأداء وتجربة المستخدم—حتى يظهر المنتج بمستوى ممتاز ويكون سريعاً وسهل الاستخدام.",
      skills_title: "المهارات",
      chip_responsive: "متجاوب",
      about_h3: "هوية التصميم",
      about_p3: "Minimal سينمائي وحركة مقصودة—بدون ضجيج، فقط جودة.",

      services_title: "الخدمات",
      services_sub: "مخرجات واضحة ونتائج فخمة.",
      sv1_t: "تطوير مواقع الويب",
      sv1_p: "تطوير مواقع حديثة بمعايير صحيحة: سريعة، آمنة، وسهلة الاستخدام.",
      sv2_t: "تصميم واجهات المستخدم",
      sv2_p: "واجهات فخمة تركز على الوضوح وسهولة الاستخدام والجمالية.",
      sv3_t: "التصميم المتجاوب",
      sv3_p: "تجربة مثالية على الجوال والتابلت والشاشات الكبيرة.",
      sv4_t: "تطوير الواجهات الأمامية",
      sv4_p: "واجهات نظيفة قابلة للتوسع باستخدام JavaScript و React.",
      sv5_t: "صيانة وتطوير المواقع",
      sv5_p: "إصلاحات وتحسينات وإضافة ميزات جديدة للمواقع الحالية.",
      sv6_t: "صفحات هبوط جاهزة للبراند",
      sv6_p: "Landing Pages احترافية بحركة ناعمة وأقسام واضحة.",

      projects_title: "المشاريع",
      projects_sub: "نماذج أعمال مختارة (نظيفة وعصرية ومتجاوبة).",
      p1_t: "نظام إدارة المصورين",
      p1_p: "منصة عصرية لإدارة المصورين والحجوزات بواجهة أنيقة.",
      p2_t: "موقع بورتفوليو احترافي",
      p2_p: "تصميم بورتفوليو فخم لعرض الأعمال والمهارات مع أداء ممتاز.",
      view_live: "مشاهدة",
      view_repo: "المستودع",

      contact_title: "التواصل",
      contact_sub: "خلّنا نبني شيء فخم.",
      c_email: "البريد",
      c_wa: "واتساب",

      footer_name: "يحيى البناء",
      to_top: "العودة للأعلى"
    }
  };

  function applyI18n(lang){
    const dict = I18N[lang] || I18N.en;
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
  }

  function setTheme(t){
    root.dataset.theme = t;
    localStorage.setItem("theme", t);
  }

  function setLang(lang){
    root.dataset.lang = lang;
    root.lang = (lang === "ar") ? "ar" : "en";
    root.dir  = (lang === "ar") ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
    const b = $("#langBtn");
    if (b) b.textContent = (lang === "ar") ? "EN" : "AR";
    applyI18n(lang);
  }

  // Intro dismiss: fixed 3.2s max (never stuck)
  const intro = $("#intro");
  const dismiss = () => intro && intro.classList.add("is-done");
  setTimeout(dismiss, 3200);
  window.addEventListener("load", () => setTimeout(dismiss, 600));

  // Year
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  // Init saved preferences (English default)
  const savedTheme = localStorage.getItem("theme") || DEFAULT_THEME;
  const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
  setTheme(savedTheme);
  setLang(savedLang);

  // Buttons
  $("#themeBtn")?.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  $("#langBtn")?.addEventListener("click", () => setLang(root.dataset.lang === "en" ? "ar" : "en"));

  // Reveal on scroll
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window){
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("is-in"));
  }

  // Background parallax vars
  window.addEventListener("pointermove", (e) => {
    const bx1 = ((e.clientX / innerWidth) * 100).toFixed(2) + "%";
    const by1 = ((e.clientY / innerHeight) * 100).toFixed(2) + "%";
    root.style.setProperty("--bx1", bx1);
    root.style.setProperty("--by1", by1);
    root.style.setProperty("--bx2", (100 - (e.clientX / innerWidth) * 100).toFixed(2) + "%");
    root.style.setProperty("--by2", (20 + (e.clientY / innerHeight) * 50).toFixed(2) + "%");
    root.style.setProperty("--bx3", (40 + (e.clientX / innerWidth) * 30).toFixed(2) + "%");
    root.style.setProperty("--by3", (70 + (e.clientY / innerHeight) * 20).toFixed(2) + "%");
  }, { passive:true });

  // Cursor glow + cursor
  const glow = $(".cursor-glow");
  window.addEventListener("pointermove", (e) => {
    glow?.style.setProperty("--mx", (e.clientX / innerWidth) * 100 + "%");
    glow?.style.setProperty("--my", (e.clientY / innerHeight) * 100 + "%");
  }, { passive:true });

  const cursor = $(".cursor");
  if (cursor && matchMedia("(pointer:fine)").matches){
    let cx=innerWidth/2, cy=innerHeight/2, tx=cx, ty=cy;
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.left = cx + "px";
      cursor.style.top  = cy + "px";
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    window.addEventListener("pointermove", (e)=>{tx=e.clientX; ty=e.clientY;}, { passive:true });

    const hoverables = "a,button,.btn,.card,.side-ico";
    document.addEventListener("pointerover", (e)=>{
      if (e.target?.closest?.(hoverables)) cursor.classList.add("is-hover");
    }, true);
    document.addEventListener("pointerout", (e)=>{
      if (e.target?.closest?.(hoverables)) cursor.classList.remove("is-hover");
    }, true);
  }

  // Card hover coords for radial highlight
  $$(".card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--hx", x + "%");
      card.style.setProperty("--hy", y + "%");
    });
  });


  // Back to top
  const back = $("#backToTop");
  const onScroll = () => {
    const show = window.scrollY > 520;
    if (back) back.classList.toggle("is-show", show);
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
  back?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


  // Tilt effect
  $$(".tilt").forEach(el => {
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y / r.height) - 0.5) * -7;
      const ry = ((x / r.width) - 0.5) * 9;
      el.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  });

  // Canvas particles background (visible + premium)
  const canvas = document.getElementById("bgCanvas");
  if (canvas){
    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W=0,H=0;
    const resize = () => {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR,0,0,DPR,0,0);
    };
    const rand = (a,b)=> a + Math.random()*(b-a);
    let mouse = {x: W/2, y: H/2};
    window.addEventListener("pointermove", (e)=>{ mouse.x=e.clientX; mouse.y=e.clientY; }, {passive:true});
    window.addEventListener("resize", resize);
    resize();

    const N = 110;
    let t = 0;
    const pts = Array.from({length:N}, ()=> ({
      x: rand(0,W), y: rand(0,H),
      vx: rand(-0.60,0.60), vy: rand(-0.60,0.60),
      r: rand(0.8,2.2)
    }));

    function step(){
      ctx.clearRect(0,0,W,H);

      // soft fade overlay for trails (more visible motion)
      ctx.fillStyle = "rgba(0,0,0,0.10)";
      ctx.fillRect(0,0,W,H);

      // choose stroke based on theme
      const isLight = document.documentElement.dataset.theme === "light";
      const dot = isLight ? "rgba(10,11,13,0.70)" : "rgba(255,255,255,0.70)";
      const line = isLight ? "rgba(10,11,13,0.26)" : "rgba(255,255,255,0.26)";

      // update
      t += 0.012;
      for (const p of pts){
        // mouse gravity a bit
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d2 = dx*dx + dy*dy;
        if (d2 < 160*160){
          p.vx += dx * 0.000028;
          p.vy += dy * 0.000028;
        }
        // gentle flow field drift (adds continuous motion)
        p.vx += Math.sin((p.y*0.006) + t) * 0.018;
        p.vy += Math.cos((p.x*0.006) + t) * 0.018;
        p.x += p.vx; p.y += p.vy;

        // bounds
        if (p.x < -30) p.x = W+30;
        if (p.x > W+30) p.x = -30;
        if (p.y < -30) p.y = H+30;
        if (p.y > H+30) p.y = -30;

        // gentle damping
        p.vx *= 0.990;
        p.vy *= 0.990;
      }

      // links
      ctx.lineWidth = 1;
      for (let i=0;i<pts.length;i++){
        for (let j=i+1;j<pts.length;j++){
          const a = pts[i], b = pts[j];
          const dx=a.x-b.x, dy=a.y-b.y;
          const d = Math.hypot(dx,dy);
          if (d < 150){
            ctx.strokeStyle = line.replace("0.18", (0.30*(1 - d/150)).toFixed(3));
            ctx.beginPath();
            ctx.moveTo(a.x,a.y);
            ctx.lineTo(b.x,b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of pts){
        ctx.fillStyle = dot;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
      }

      // subtle spotlight around mouse (makes movement obvious)
      const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
      g.addColorStop(0, isLight ? "rgba(10,11,13,0.05)" : "rgba(255,255,255,0.08)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0,0,W,H);

      requestAnimationFrame(step);
    }
    // start with clean frame
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0,0,W,H);
    requestAnimationFrame(step);
  }

  // New cursor (ring + dot)
  const ring = document.querySelector(".cursor-ring");
  const dot  = document.querySelector(".cursor-dot");
  if (ring && dot && matchMedia("(pointer:fine)").matches){
    let rx=innerWidth/2, ry=innerHeight/2, dx=rx, dy=ry, tx=rx, ty=ry;
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      dx += (tx - dx) * 0.35;
      dy += (ty - dy) * 0.35;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      dot.style.left  = dx + "px";
      dot.style.top   = dy + "px";
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    window.addEventListener("pointermove",(e)=>{tx=e.clientX; ty=e.clientY;},{passive:true});

    const hoverables = "a,button,.btn,.card,.side-ico";
    document.addEventListener("pointerover",(e)=>{
      if (e.target?.closest?.(hoverables)){
        ring.classList.add("is-hover");
        dot.classList.add("is-hover");
      }
    }, true);
    document.addEventListener("pointerout",(e)=>{
      if (e.target?.closest?.(hoverables)){
        ring.classList.remove("is-hover");
        dot.classList.remove("is-hover");
      }
    }, true);
  }

  // Cursor V5 (blob + trail)
  const trail = document.querySelector(".cursor-trail");
  const blob  = document.querySelector(".cursor-blob");
  if (trail && blob && matchMedia("(pointer:fine)").matches){
    let tx=innerWidth/2, ty=innerHeight/2;
    let bx=tx, by=ty;   // blob
    let sx=tx, sy=ty;   // trail (slower)
    let pvx=0, pvy=0;

    const tick = () => {
      const vx = (tx - bx);
      const vy = (ty - by);
      pvx = pvx*0.7 + vx*0.3;
      pvy = pvy*0.7 + vy*0.3;

      bx += vx * 0.35;
      by += vy * 0.35;
      sx += (tx - sx) * 0.12;
      sy += (ty - sy) * 0.12;

      const speed = Math.min(Math.hypot(pvx,pvy), 40);
      const rx = 22 + speed*0.35;
      const ry = 22 - speed*0.18;
      trail.style.left = sx + "px";
      trail.style.top  = sy + "px";
      trail.style.transform = `translate(-50%,-50%) rotate(${pvx*0.6}deg)`;
      trail.style.borderRadius = `${Math.max(14, ry)}px ${Math.max(30, rx)}px ${Math.max(14, ry)}px ${Math.max(30, rx)}px`;

      blob.style.left = bx + "px";
      blob.style.top  = by + "px";
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    window.addEventListener("pointermove",(e)=>{tx=e.clientX; ty=e.clientY;},{passive:true});

    const hoverables = "a,button,.btn,.card,.side-ico,[data-cursor='hover']";
    document.addEventListener("pointerover",(e)=>{
      if (e.target?.closest?.(hoverables)){
        trail.classList.add("is-hover");
        blob.classList.add("is-hover");
      }
    }, true);
    document.addEventListener("pointerout",(e)=>{
      if (e.target?.closest?.(hoverables)){
        trail.classList.remove("is-hover");
        blob.classList.remove("is-hover");
      }
    }, true);
  }

})();