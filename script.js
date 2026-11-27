/* =====================================================================
   SHOP CONTENT: edit ONLY this object to change what the page says (both languages).
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] Dubai time, a list of ranges for split
   hours, or null if closed. A closing time after midnight is written past 24:00 ("24:30" = 12:30 AM).
   reviews: real Google quotes. If empty, text.<lang>.mentions (a summary) is shown instead.
   ===================================================================== */
const SHOP = {
  "name": "Traditional Gulf Men Tailoring LLC",
  "siteUrl": "https://tanish0212.github.io/gulf-men-tailoring-demo/",
  "schemaType": "ClothingStore",
  "phoneDisplay": "+971 56 849 7688",
  "phoneHref": "tel:+971568497688",
  "phoneIntl": "+971568497688",
  "whatsappNumber": "971568497688",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Traditional+Gulf+Men+Tailoring+LLC+Sheikh+Rashid+Road+Al+Karama+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Traditional+Gulf+Men+Tailoring+LLC+Sheikh+Rashid+Road+Al+Karama+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Traditional%20Gulf%20Men%20Tailoring%20LLC%2C%20Sheikh%20Rashid%20Road%2C%20Al%20Karama%2C%20Dubai&output=embed",
  "address": {
    "street": "Shop 2, Land Office Building 2, Sheikh Rashid Road, Al Karama",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ],
    [
      "16:00",
      "23:30"
    ],
    [
      "09:00",
      "23:30"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        6,
        0,
        1,
        2,
        3,
        4
      ],
      "key": "g0"
    },
    {
      "days": [
        5
      ],
      "key": "g1"
    }
  ],
  "rating": {
    "value": "4.7",
    "count": 47
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "photos": {
    "hero": {
      "src": "images/hero.webp",
      "en": "Cutting dark fabric with tailor’s scissors",
      "ar": "قص قماش داكن بمقص الخياط"
    },
    "intro": {
      "src": "images/photo-1.webp",
      "en": "A classic sewing machine at work",
      "ar": "ماكينة خياطة كلاسيكية أثناء العمل"
    },
    "photo-2": {
      "src": "images/photo-2.webp",
      "en": "A sewing machine foot on dark fabric",
      "ar": "قدم ماكينة الخياطة على قماش داكن"
    },
    "photo-3": {
      "src": "images/photo-3.webp",
      "en": "Stitching a seam on blue fabric",
      "ar": "خياطة درزة على قماش أزرق"
    }
  },
  "services": [
    {
      "en": {
        "name": "Kandura tailoring",
        "desc": "Kanduras stitched for you, from your first one onwards.",
        "ask": "kandura tailoring"
      },
      "ar": {
        "name": "تفصيل الكندورة",
        "desc": "كندورة تُخاط لك، من أول كندورة وما بعدها.",
        "ask": "تفصيل الكندورة"
      }
    },
    {
      "en": {
        "name": "Arabic men's dress",
        "desc": "Tailoring for every kind of Arabic dress for men.",
        "ask": "Arabic men's dress tailoring"
      },
      "ar": {
        "name": "الملابس العربية الرجالية",
        "desc": "تفصيل كل أنواع الملابس العربية للرجال.",
        "ask": "تفصيل الملابس العربية الرجالية"
      }
    },
    {
      "en": {
        "name": "Fabrics & details",
        "desc": "A wide choice of fabrics and details to pick from.",
        "ask": "fabrics and details"
      },
      "ar": {
        "name": "الأقمشة والتفاصيل",
        "desc": "خيارات واسعة من الأقمشة والتفاصيل لتختار منها.",
        "ask": "الأقمشة والتفاصيل"
      }
    },
    {
      "en": {
        "name": "Style advice",
        "desc": "Not sure what to choose? We'll give you advice on styles.",
        "ask": "advice on styles"
      },
      "ar": {
        "name": "نصائح التصميم",
        "desc": "لست متأكدًا مما تختار؟ نقدم لك النصيحة في التصاميم.",
        "ask": "النصيحة في التصاميم"
      }
    }
  ],
  "reviews": [
    "Great experience to stitch my first Kandura. Lots of good advices, lots of options in fabrics and details.",
    "Very nice decoration and place as well.",
    "You can have the best tailoring experience for any kind of arabic dress in this shop."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the shop",
      "directions": "Get directions",
      "newTab": "(opens in a new tab)",
      "ratingShort": "Google rating",
      "ratingCount": "{count} reviews",
      "outOf": "out of 5 on Google",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusReopens": "Closed now · reopens today at {time}",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "closed": "Closed",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "introLabel": "About",
      "servicesTitle": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "reviewsTitle": "What customers say",
      "reviewLabel": "Google review",
      "mentionsNote": "What customers mention most in their Google reviews.",
      "readMore": "Read the reviews on Google",
      "visitTitle": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "closingTitle": "Ask about your kandura on WhatsApp",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Traditional Gulf Men Tailoring LLC · Kandura tailoring · Al Karama",
      "metaDescription": "Kandura and Arabic men's dress tailoring in Al Karama, with a wide choice of fabrics and details, and advice on styles. Rated 4.7 on Google.",
      "demoBanner": "Demo preview – made for Traditional Gulf Men Tailoring LLC. Not the official website yet.",
      "heroName": "Traditional Gulf Men Tailoring",
      "waMessage": "Hello Traditional Gulf, I found you on your website and I'd like to ask about your services.",
      "waMessageAbout": "Hello Traditional Gulf, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Traditional Gulf Men Tailoring LLC on WhatsApp",
      "mapTitle": "Map showing Traditional Gulf Men Tailoring LLC",
      "footerName": "Traditional Gulf Men Tailoring LLC",
      "groups": {
        "g0": "Saturday – Thursday",
        "g1": "Friday"
      },
      "mentions": [],
      "brandName": "Traditional Gulf",
      "heroPlace": "Land Office Building 2, Sheikh Rashid Road, Al Karama",
      "addressLines": [
        "Shop 2, Land Office Building 2",
        "Sheikh Rashid Road, Al Karama",
        "Dubai"
      ],
      "servicesIntro": "Tap any one to ask us about it on WhatsApp.",
      "footerTag": "Kandura and Arabic men's dress tailoring in Al Karama, Dubai.",
      "intro": "Kandura and Arabic men's dress tailoring in Al Karama, with a wide choice of fabrics and details, and advice on styles.",
      "kicker": "Kandura tailoring · Al Karama"
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلنا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصل بالمحل",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingShort": "تقييم جوجل",
      "ratingCount": "{count} تقييمًا",
      "outOf": "من 5 على جوجل",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusReopens": "مغلق الآن · يعيد الفتح اليوم الساعة {time}",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "closed": "مغلق",
      "midnight": "منتصف الليل",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "introLabel": "نبذة",
      "servicesTitle": "الخدمات",
      "quoteCta": "اسأل عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلنا عبر واتساب لمعرفة الأسعار.",
      "reviewsTitle": "ماذا يقول العملاء",
      "reviewLabel": "تقييم من جوجل",
      "mentionsNote": "أكثر ما يذكره العملاء في تقييماتهم على جوجل.",
      "readMore": "اقرأ التقييمات على جوجل",
      "visitTitle": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "closingTitle": "اسألنا عن الكندورة عبر واتساب",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "الخليج التقليدي للخياطة الرجالية · خياطة الكندورة · الكرامة",
      "metaDescription": "تفصيل الكنادير والملابس العربية الرجالية في الكرامة، مع خيارات واسعة من الأقمشة والتفاصيل، ونصائح في التصاميم. تقييم 4.7 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لـالخليج التقليدي للخياطة الرجالية. ليست الموقع الرسمي بعد.",
      "heroName": "الخليج التقليدي للخياطة الرجالية",
      "waMessage": "مرحبًا الخليج التقليدي، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن خدماتكم.",
      "waMessageAbout": "مرحبًا الخليج التقليدي، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسل الخليج التقليدي للخياطة الرجالية عبر واتساب",
      "mapTitle": "خريطة توضح موقع الخليج التقليدي للخياطة الرجالية",
      "footerName": "الخليج التقليدي للخياطة الرجالية",
      "groups": {
        "g0": "السبت – الخميس",
        "g1": "الجمعة"
      },
      "mentions": [],
      "brandName": "الخليج التقليدي",
      "heroPlace": "مبنى لاند أوفس 2، شارع الشيخ راشد، الكرامة",
      "addressLines": [
        "محل 2، مبنى لاند أوفس 2",
        "شارع الشيخ راشد، الكرامة",
        "دبي"
      ],
      "servicesIntro": "اضغط على أي منها لتسألنا عنه عبر واتساب.",
      "footerTag": "تفصيل الكنادير والملابس العربية الرجالية في الكرامة، دبي.",
      "intro": "تفصيل الكنادير والملابس العربية الرجالية في الكرامة، مع خيارات واسعة من الأقمشة والتفاصيل، ونصائح في التصاميم.",
      "kicker": "خياطة الكندورة · الكرامة"
    }
  }
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable: English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }
  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });
  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- hours + open / closed badge, in the shop's time zone ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  // A day is null (closed), one range ["HH:MM","HH:MM"], or several [["09:30","14:00"],["17:00","22:30"]].
  // A closing time after midnight is written past 24:00, e.g. "24:30" = 12:30 AM the next day.
  const rangesOf = (day) => { const h = SHOP.hours[day]; if (!h) return []; return typeof h[0] === "string" ? [h] : h; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const hh = h % 24;
    if (hh === 0 && m === 0 && tx.midnight) return tx.midnight;
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (hh < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    // still open from yesterday's late shift (closing time past 24:00)?
    const yday = (now.day + 6) % 7;
    const late = rangesOf(yday).find((r) => toMin(r[1]) > 1440 && now.min < toMin(r[1]) - 1440);
    if (late) return { open: true, key: "statusOpen", time: late[1] };
    const today = rangesOf(now.day);
    const cur = today.find((r) => now.min >= toMin(r[0]) && now.min < toMin(r[1]));
    if (cur) return { open: true, key: "statusOpen", time: cur[1] };
    const next = today.find((r) => now.min < toMin(r[0]));
    if (next) {
      const onBreak = today.some((r) => now.min >= toMin(r[1]));
      return { open: false, key: onBreak ? "statusReopens" : "statusOpensToday", time: next[0] };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      const r = rangesOf(d);
      if (r.length) return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: r[0][0], day: d };
    }
    return { open: false, key: "statusOpensToday", time: "00:00" };
  }

  function rangeLabels(day) {
    const r = rangesOf(day);
    return r.length ? r.map((h) => timeLabel(h[0]) + " – " + timeLabel(h[1])) : [t().closed];
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: s.day !== undefined ? tx.days[s.day] : "" });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [document.createTextNode(tx.groups[g.key] + " "), el("span", { class: "today-flag", text: tx.today, hidden: true })]),
      el("td", null, rangeLabels(g.days[0]).map((l) => el("span", { class: "range" }, [ltrIfEn(l)]))),
    ]))));
  }

  /* ---------- render everything for the current language ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);
    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // photo alt text follows the language
    $$(".js-img").forEach((img) => { const p = SHOP.photos[img.dataset.img]; if (p) img.alt = p[lang]; });

    // optional story paragraphs + facts (intro section)
    $(".js-story").replaceChildren(...(tx.story || []).map((p) => el("p", { text: p })));
    $(".js-facts").replaceChildren(...(tx.facts || []).map((f) => el("div", null, [el("dt", { text: f.label }), el("dd", { text: f.value })])));

    // services
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal" }, [
      el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
      el("h3", { class: "service-name", text: s[lang].name }),
      el("p", { class: "service-desc", text: s[lang].desc }),
      el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
        el("span", { text: tx.quoteCta }),
        el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
      ]),
    ])));

    // reviews: real Google quotes (kept in English), or a plain summary of what reviewers mention
    const list = $(".js-reviews-list");
    if (SHOP.reviews.length) {
      $(".js-reviews-sub").textContent = "";
      list.replaceChildren(...SHOP.reviews.map((r) => el("li", { class: "review reveal" }, [
        el("figure", null, [
          el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: "“" + r + "”" })]),
          el("figcaption", { text: tx.reviewLabel }),
        ]),
      ])));
    } else {
      $(".js-reviews-sub").textContent = tx.mentionsNote;
      list.replaceChildren(...tx.mentions.map((m) => el("li", { class: "review reveal" }, [el("p", { class: "mention", text: m })])));
    }

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderStatus();
    observeReveals();
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hhmm = (x) => { const m = toMin(x) % 1440; return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"); };
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      telephone: SHOP.phoneIntl,
      address: { "@type": "PostalAddress", streetAddress: SHOP.address.street, addressLocality: SHOP.address.city, addressCountry: SHOP.address.country },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.flatMap((g) => rangesOf(g.days[0]).map((r) => ({
        "@type": "OpeningHoursSpecification", dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: hhmm(r[0]), closes: r[1] === "24:00" ? "23:59" : hhmm(r[1]),
      }))),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- fade-in on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) { $$(".reveal").forEach((n) => n.classList.add("is-in")); return; }
    if (!io) io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- floating WhatsApp button appears after the hero ---------- */
  const fab = $(".fab");
  const hero = $(".hero");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { fab.classList.toggle("is-on", window.scrollY > hero.offsetHeight * 0.7); ticking = false; });
  }

  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
