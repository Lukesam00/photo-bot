/* 3 TIMES homepage extras: Dhivehi font + language switch loader, free-trial button, before/after,
   sample posters and statement, live prices, WhatsApp button, sample screens. */
(function () {
  var IMG = "https://photo.threetimes.tech/samples/";
  var SB = "https://ndfwjqoxnxydndsmqndn.supabase.co/rest/v1/", KEY = "sb_publishable_yzWBS97wY7tY8SVhbfE-xQ_GCgO1XtY";
  var root = document.documentElement;

  var st = document.createElement("style");
  st.textContent = '@font-face{font-family:"A Ilham Uni";src:url(https://photo.threetimes.tech/fonts/a-ilham-uni.ttf) format("truetype");font-display:swap}' +
    'html[lang="dv"] body>div{font-family:"A Ilham Uni",Poppins,"Noto Sans Thaana",system-ui,sans-serif!important;font-synthesis:none}' +
    'html[lang="dv"] .pts li{font-size:16px}' +
    '.x-wrap{max-width:1160px;margin:0 auto;padding:0 clamp(20px,5vw,32px)}' +
    '.x-lab{font-size:13px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--label)}' +
    '.x-note{font-size:13px;font-weight:400;color:var(--muted);margin:0}' +
    '.x-free{display:block;font-size:13.5px;font-weight:400;color:var(--muted);margin-top:14px}' +
    '' +
    '.x-ba{display:grid;grid-template-columns:1fr auto 1fr;gap:clamp(12px,3vw,32px);align-items:center;max-width:720px;margin:0 auto}' +
    '.x-ba figure{margin:0;display:flex;flex-direction:column;gap:10px}' +
    '.x-ba img{width:100%;display:block;border-radius:14px;border:1px solid var(--line2);aspect-ratio:4/5;object-fit:cover;background:var(--soft)}' +
    '.x-ba figcaption{font-size:13px;font-weight:500;letter-spacing:.04em;color:var(--label);text-align:center}' +
    '.x-arrow{width:44px;height:44px;border-radius:50%;background:var(--plum);color:var(--on-plum);display:grid;place-items:center;font-size:20px}' +
    'html[dir="rtl"] .x-arrow{transform:scaleX(-1)}' +
    '.x-row{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;scrollbar-width:thin}' +
    '.x-row img{flex:0 0 46%;max-width:210px;border-radius:12px;border:1px solid var(--line2);scroll-snap-align:start;aspect-ratio:4/5;object-fit:cover;background:var(--soft)}' +
    '.x-tbl{width:100%;border-collapse:collapse;font-size:13px;font-weight:400;color:var(--muted);border:1px solid var(--line2);border-radius:12px;overflow:hidden;background:var(--bg)}' +
    '.x-tbl th{font-weight:500;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--label);background:var(--soft)}' +
    '.x-tbl th,.x-tbl td{padding:9px 10px;text-align:start;border-bottom:1px solid var(--line)}' +
    '.x-tbl td:nth-child(n+2),.x-tbl th:nth-child(n+2){text-align:end;white-space:nowrap}' +
    '.x-tbl tfoot td{font-weight:500;color:var(--ink);border-bottom:0}' +
    '.x-tblbox{border-radius:12px;overflow:hidden;border:1px solid var(--line2)}.x-tblbox .x-tbl{border:0}' +
    '.x-price{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:40px 64px}' +
    '.x-price h3{margin:0 0 6px;font-weight:500;font-size:20px;color:var(--ink)}' +
    '.x-plan{display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding:16px 0;border-top:1px solid var(--line2);font-size:15px}' +
    '.x-plan:last-of-type{border-bottom:1px solid var(--line2)}' +
    '.x-plan .n{font-weight:500;color:var(--ink)}.x-plan .c{font-weight:400;color:var(--muted);font-size:14px;display:block;margin-top:2px}' +
    '.x-plan .p{font-weight:500;color:var(--plum);white-space:nowrap}' +
    '.x-plan.hl .n::after{content:"★";color:var(--plum);margin:0 6px;font-size:12px}' +
    '.x-wa{position:fixed;right:16px;bottom:16px;z-index:50;width:48px;height:48px;border-radius:50%;background:#25D366;display:grid;place-items:center;box-shadow:0 4px 14px rgba(0,0,0,.16);transition:transform .15s}' +
    '.x-wa:hover{transform:scale(1.06)}html[dir="rtl"] .x-wa{right:auto;left:18px}' +
    '.x-more{border-top:1px solid var(--line2);border-bottom:1px solid var(--line2)}' +
    '.x-more summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:16px 0;font-size:15px;font-weight:500;color:var(--ink)}' +
    '.x-more summary::-webkit-details-marker{display:none}' +
    '.x-more summary::after{content:"+";font-weight:300;font-size:22px;line-height:1;color:var(--plum);transition:transform .2s}' +
    '.x-more[open] summary::after{transform:rotate(45deg)}' +
    '.x-more .in{display:flex;flex-direction:column;gap:18px;padding:4px 0 22px}' +
    '.x-more .howl{margin:0}' +
    '.x-row{scrollbar-width:none}.x-row::-webkit-scrollbar{display:none}' +
    '#top{padding-bottom:clamp(40px,6vw,72px)!important}' +
    '#products article{gap:20px!important;padding:44px 0!important}' +
    '.x-mock{border:1px solid var(--line2);border-radius:14px;overflow:hidden;background:var(--bg);font-size:12px;color:var(--muted)}' +
    '.x-mock .bar{display:flex;align-items:center;gap:6px;padding:9px 12px;background:var(--soft);border-bottom:1px solid var(--line)}' +
    '.x-mock .bar i{width:8px;height:8px;border-radius:50%;background:var(--line2)}' +
    '.x-mock .bar span{margin-inline-start:8px;font-weight:500;color:var(--ink);font-size:12px}' +
    '.x-mock .body{padding:12px;display:grid;gap:8px}' +
    '.x-mock .r{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 10px;border:1px solid var(--line);border-radius:9px}' +
    '.x-mock .tag{font-size:10.5px;font-weight:500;padding:3px 8px;border-radius:999px;background:var(--soft);color:var(--plum);white-space:nowrap}' +
    '.x-mock .tag.o{background:var(--plum);color:var(--on-plum)}' +
    '.x-mock .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}' +
    '.x-mock .it{border:1px solid var(--line);border-radius:9px;padding:8px;display:grid;gap:6px}' +
    '.x-mock .ph{aspect-ratio:1;border-radius:6px;background:var(--soft)}' +
    '.x-mock .it b{font-weight:500;color:var(--ink);font-size:11.5px}' +
    '.x-mock .btn{background:var(--plum);color:var(--on-plum);text-align:center;border-radius:999px;padding:8px;font-weight:500}';
  document.head.appendChild(st);

  /* ---- two-language text helper ---- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function T(en, dv, tag, cls) { return "<" + (tag || "span") + (cls ? ' class="' + cls + '"' : "") + ' data-en="' + esc(en) + '" data-dv="' + esc(dv) + '">' + esc(en) + "</" + (tag || "span") + ">"; }
  function paint() {
    var dv = root.lang === "dv";
    document.querySelectorAll("[data-en]").forEach(function (e) { var t = e.getAttribute(dv ? "data-dv" : "data-en"); if (e.textContent !== t) e.textContent = t; });
    document.querySelectorAll("[data-al-en]").forEach(function (e) { e.setAttribute("aria-label", e.getAttribute(dv ? "data-al-dv" : "data-al-en")); });
  }
  function el(html) { var d = document.createElement("div"); d.innerHTML = html; return d.firstElementChild; }
  function art(title) {
    var hs = document.querySelectorAll("#products article h3");
    for (var i = 0; i < hs.length; i++) if (hs[i].textContent.trim() === title) return hs[i].parentNode;
    return null;
  }
  var arts = { tax: art("Input Tax Capture"), bot: art("Photo Bot"), council: art("Council portals"), shop: art("Shop websites") };

  /* 1 · free-trial button in the hero */
  try {
    var row = document.querySelector("#top a[href='#products']");
    if (row) {
      var box = row.parentNode;
      var cta = el('<a href="https://photo.threetimes.tech" target="_blank" rel="noopener" style="text-decoration:none;background:var(--plum);color:var(--on-plum);padding:17px 30px;border-radius:999px;font-weight:500;font-size:15px;letter-spacing:.02em">' + T("Try Photo Bot free", "ފޮޓޯ ބޮޓް ހިލޭ ބައްލަވާ") + "</a>");
      row.style.background = "transparent"; row.style.color = "var(--plum)"; row.style.border = "1px solid var(--plum)"; row.style.padding = "16px 26px";
      box.insertBefore(cta, row);
      var book = box.querySelector("a[href='#contact']"); if (book) book.remove();
      box.parentNode.appendChild(el('<span class="x-free" style="margin-top:-12px">' + T("5 free credits to start. No card needed.", "ފެށުމަށް 5 ކްރެޑިޓް ހިލޭ. ކާޑެއް ބޭނުމެއް ނުވޭ.") + "</span>"));
    }
  } catch (e) {}

  /* 2 · before / after, right under the hero */
  try {
    var top = document.getElementById("top");
    var ba = el('<section class="x-wrap" style="padding-bottom:clamp(56px,8vw,96px)"><div class="x-ba">' +
      '<figure><img src="' + IMG + 'before.jpg" alt="" loading="lazy" style="aspect-ratio:4/5">' + T("Your photo", "ތިޔަ ފޮޓޯ", "figcaption") + "</figure>" +
      '<span class="x-arrow" aria-hidden="true">→</span>' +
      '<figure><img src="' + IMG + 'p1.jpg" alt="" loading="lazy">' + T("Ready poster, in seconds", "ސިކުންތުކޮޅެއްގައި ތައްޔާރު ޕޯސްޓަރު", "figcaption") + "</figure>" +
      "</div></section>");
    top.parentNode.insertBefore(ba, top.nextSibling);
  } catch (e) {}

  /* tidy: fold the long details and the video into one "How it works" row */
  try {
    [arts.tax, arts.bot].forEach(function (a) {
      if (!a) return;
      var d = el('<details class="x-more"><summary>' + T("How it works", "މަސައްކަތް ކުރާ ގޮތް") + '</summary><div class="in"></div></details>');
      var inn = d.querySelector(".in");
      [a.querySelector(".pts"), a.querySelector(".howl"), a.querySelector("video.how")].forEach(function (n) { if (n) inn.appendChild(n); });
      a.insertBefore(d, a.lastElementChild);
    });
  } catch (e) {}

  /* 3 · sample posters and a sample statement */
  try {
    if (arts.bot) {
      var imgs = ""; for (var i = 1; i <= 6; i++) imgs += '<img src="' + IMG + "p" + i + '.jpg" alt="" loading="lazy">';
      var g = el('<div style="display:flex;flex-direction:column;gap:10px">' + T("Made with Photo Bot · samples", "ފޮޓޯ ބޮޓުން ހަދާފައި · ނަމޫނާ", "p", "howl") + '<div class="x-row" style="margin-top:8px" dir="ltr">' + imgs + "</div></div>");
      arts.bot.insertBefore(g, arts.bot.lastElementChild);
    }
    if (arts.tax) {
      var rows = [["Supplier A", "INV-1041", "1,250.00", "100.00"], ["Supplier B", "INV-2217", "3,400.00", "272.00"], ["Supplier C", "INV-0389", "860.00", "68.80"]];
      var body = rows.map(function (r) { return "<tr><td>" + r[0] + "<br><bdi dir=\"ltr\" style=\"font-size:11.5px;color:var(--label)\">" + r[1] + "</bdi></td><td><bdi dir=\"ltr\">" + r[2] + "</bdi></td><td><bdi dir=\"ltr\">" + r[3] + "</bdi></td></tr>"; }).join("");
      var t = el('<div style="display:flex;flex-direction:column;gap:10px">' + T("Input Tax Statement · sample", "އިންޕުޓް ޓެކްސް ސްޓޭޓްމަންޓް · ނަމޫނާ", "p", "howl") +
        '<div class="x-tblbox" style="margin-top:8px"><table class="x-tbl"><thead><tr>' + T("Supplier", "ސަޕްލަޔަރ", "th") + T("Amount", "އަދަދު", "th") + T("GST 8%", "ޖީއެސްޓީ 8%", "th") + "</tr></thead><tbody>" + body +
        "</tbody><tfoot><tr>" + T("Total input tax", "ޖުމްލަ އިންޕުޓް ޓެކްސް", "td") + '<td><bdi dir="ltr">5,510.00</bdi></td><td><bdi dir="ltr">MVR 440.80</bdi></td></tr></tfoot></table></div></div>');
      arts.tax.insertBefore(t, arts.tax.lastElementChild);
    }
  } catch (e) {}

  /* 7 · sample screens for the two services without an app link */
  try {
    if (arts.council) {
      var m1 = el('<div style="display:flex;flex-direction:column;gap:10px">' + T("Sample screen", "ނަމޫނާ ސްކްރީން", "p", "howl") +
        '<div class="x-mock" style="margin-top:8px"><div class="bar"><i></i><i></i><i></i>' + T("Council portal · Requests", "ކައުންސިލް ޕޯޓަލް · ރިކުއެސްޓްތައް") + '</div><div class="body">' +
        '<div class="r">' + T("Land registry letter", "ބިމުގެ ރަޖިސްޓްރީ ސިޓީ") + T("New", "އައު", "span", "tag o") + "</div>" +
        '<div class="r">' + T("Waste collection request", "ކުނި ނެގުމުގެ ރިކުއެސްޓް") + T("In progress", "ކުރިއަށްދަނީ", "span", "tag") + "</div>" +
        '<div class="r">' + T("Public notice: harbour works", "އާންމު އިއުލާން: ބަނދަރުގެ މަސައްކަތް") + T("Published", "ޝާއިއުކޮށްފި", "span", "tag") + "</div>" +
        "</div></div></div>");
      arts.council.insertBefore(m1, arts.council.lastElementChild);
    }
    if (arts.shop) {
      var item = function (en, dv, p) { return '<div class="it"><div class="ph"></div>' + T(en, dv, "b") + '<bdi dir="ltr">MVR ' + p + "</bdi></div>"; };
      var m2 = el('<div style="display:flex;flex-direction:column;gap:10px">' + T("Sample screen", "ނަމޫނާ ސްކްރީން", "p", "howl") +
        '<div class="x-mock" style="margin-top:8px"><div class="bar"><i></i><i></i><i></i><span><bdi dir="ltr">yourshop.mv</bdi></span></div><div class="body">' +
        '<div class="grid">' + item("Perfume", "ސެންޓް", "350") + item("Gift bag", "ހަދިޔާ ދަބަސް", "120") + item("Honey", "މާމުއި", "180") + "</div>" +
        '<div class="btn">' + T("Order · sent to your phone", "އޯޑަރު · ތިޔަ ފޯނަށް ފޮނުވޭ") + "</div>" +
        "</div></div></div>");
      arts.shop.insertBefore(m2, arts.shop.lastElementChild);
    }
  } catch (e) {}

  /* 5 · floating WhatsApp button */
  try {
    document.body.appendChild(el('<a class="x-wa" href="https://wa.me/9609936052" target="_blank" rel="noopener" data-al-en="Chat on WhatsApp" data-al-dv="ވަޓްސްއެޕުން ވާހަކަ ދައްކަވާ" aria-label="Chat on WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.3 15.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.2 4.1c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3l-2-1c-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.5-.4-.5-.6-.5z"/></svg></a>'));
  } catch (e) {}

  /* 4 · live prices, read from the two apps */
  function get(path) { return fetch(SB + path, { headers: { apikey: KEY } }).then(function (r) { if (!r.ok) throw 0; return r.json(); }); }
  function num(n) { return Number(n).toLocaleString("en-US"); }
  function plan(name, credits, price, unitEn, unitDv, hl, note) {
    return '<div class="x-plan' + (hl ? " hl" : "") + '"><span><span class="n">' + esc(name) + '</span><span class="c"><bdi dir="ltr">' + num(credits) + "</bdi> " + T(unitEn, unitDv) + (note ? " · " + esc(note) : "") + '</span></span><span class="p"><bdi dir="ltr">MVR ' + num(price) + "</bdi></span></div>";
  }
  Promise.all([get("photobot_packages?select=name,credits,price_mvr,sort&active=eq.true&order=sort"), get("pricing_plans?select=name,credits,price,note,highlight,sort&active=eq.true&order=sort")]).then(function (res) {
    var pb = res[0] || [], tx = res[1] || []; if (!pb.length && !tx.length) return;
    var h = '<section id="pricing" class="x-wrap" style="padding-top:clamp(8px,2vw,24px);padding-bottom:clamp(64px,9vw,104px)">' +
      '<div style="display:flex;flex-direction:column;gap:14px;margin-bottom:40px">' + T("Pricing", "އަގުތައް", "span", "x-lab") +
      T("Pay only for what you use", "ބޭނުންކުރާ ވަރަށް އެކަނި ފައިސާ", "h2") + "</div><div class=\"x-price\">";
    if (pb.length) h += "<div>" + T("Photo Bot", "ފޮޓޯ ބޮޓް", "h3") + T("One credit makes one poster. First 5 are free.", "އެއް ކްރެޑިޓުން އެއް ޕޯސްޓަރު. ފުރަތަމަ 5 ހިލޭ.", "p", "x-note") + '<div style="margin-top:18px">' +
      pb.map(function (p) { return plan(p.name, p.credits, p.price_mvr, "posters", "ޕޯސްޓަރު"); }).join("") +
      '</div><a href="https://photo.threetimes.tech" target="_blank" rel="noopener" style="display:inline-block;padding:16px 0;text-decoration:none;font-size:15px;font-weight:500;color:var(--plum)">' + T("Try Photo Bot free", "ފޮޓޯ ބޮޓް ހިލޭ ބައްލަވާ") + ' <span aria-hidden="true">→</span></a></div>';
    if (tx.length) h += "<div>" + T("Input Tax Capture", "އިންޕުޓް ޓެކްސް ކެޕްޗަރ", "h3") + T("Credits are used as your bills are read.", "ބިލްތައް ކިޔާ ވަރަކަށް ކްރެޑިޓް ބޭނުންވޭ.", "p", "x-note") + '<div style="margin-top:18px">' +
      tx.map(function (p) { return plan(p.name, p.credits, p.price, "credits", "ކްރެޑިޓް", p.highlight, p.note); }).join("") +
      '</div><a href="https://tax.threetimes.tech" target="_blank" rel="noopener" style="display:inline-block;padding:16px 0;text-decoration:none;font-size:15px;font-weight:500;color:var(--plum)">' + T("Open the app", "އެޕް ހުޅުވާ") + ' <span aria-hidden="true">→</span></a></div>';
    h += "</div></section>";
    var s = el(h), h2 = s.querySelector("h2");
    h2.style.cssText = "margin:0;font-weight:400;font-size:clamp(30px,3.4vw,42px);line-height:1.2;letter-spacing:-.02em;color:var(--ink)";
    var ap = document.getElementById("approach"); ap.parentNode.insertBefore(s, ap);
    paint();
  }).catch(function () {});

  paint();
  new MutationObserver(paint).observe(root, { attributes: true, attributeFilter: ["lang"] });

  var sc = document.createElement("script"); sc.src = "/site-dv.js"; sc.async = false; document.head.appendChild(sc);
})();
