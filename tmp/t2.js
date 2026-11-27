/* Sign-in page in the new 3 TIMES look: bolder headline, chips, steps strip and a contact band. */
(function () {
  var O = "#E8600C";
  var css = document.createElement("style");
  css.textContent = [
    "body #viewLogin .hero h1{font-weight:300;font-size:clamp(38px,5.6vw,64px);line-height:1.05;letter-spacing:-.03em;color:var(--accent)}",
    "body #viewLogin .hero h1 b{font-weight:600}",
    "body #viewLogin .hero .mark{color:" + O + "}",
    "body #viewLogin .hero .copy > p{font-size:clamp(16px,1.6vw,18px);line-height:1.7}",
    "body #viewLogin .hero .ctas .btn{padding:15px 28px;font-size:15.5px}",
    "body #viewLogin .hero .points{display:flex;flex-wrap:wrap;gap:8px;list-style:none;padding:0;margin:22px 0 0}",
    "body #viewLogin .hero .points li{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:400;color:var(--ink);border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:7px 13px;margin:0}",
    "body #viewLogin .hero .points li::before{content:''!important;width:6px;height:6px;border:0!important;border-radius:50%;background:" + O + "!important;transform:none!important;position:static!important;margin:0!important;flex:none}",
    "body #viewLogin .hero .demo{position:relative;padding:clamp(18px,3vw,36px)}",
    "body #viewLogin .hero .demo::before{content:'';position:absolute;inset:0;border-radius:40px;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 6%,var(--bg)),color-mix(in srgb," + O + " 14%,var(--bg)));z-index:0}",
    "body #viewLogin .hero .demo > *{position:relative;z-index:1}",
    ".lsteps{display:grid;gap:14px;background:color-mix(in srgb,var(--accent) 5%,var(--bg));border:1px solid var(--line);border-radius:24px;padding:20px 22px;align-items:center;margin:40px 0 0}",
    ".lsteps strong{font-weight:500;font-size:20px;color:var(--accent)}",
    ".lsteps div{display:flex;align-items:center;gap:12px;font-weight:500;font-size:15.5px;color:var(--ink)}",
    ".lsteps div i{flex:none;width:30px;height:30px;border-radius:50%;background:" + O + ";color:#fff;font-style:normal;font-size:14px;font-weight:600;display:grid;place-items:center}",
    "body #viewLogin .plans h2{font-weight:400;font-size:clamp(26px,3.4vw,40px);letter-spacing:-.02em;color:var(--accent)}",
    "body #viewLogin .plan{border-radius:24px}",
    "body #viewLogin .plan.hl{border-color:" + O + "}",
    "body #viewLogin .plan .tag{background:" + O + ";color:#fff}",
    ".lband{background:#2A0A1C;color:#fff;border-radius:28px;padding:clamp(24px,4.5vw,48px);display:grid;gap:22px;align-items:center;margin:48px 0 0}",
    ".lband h2{margin:0;font-weight:300;font-size:clamp(26px,3.8vw,44px);line-height:1.15;letter-spacing:-.02em;color:#fff}",
    ".lband h2 b{font-weight:600}",
    ".lct{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1px solid #4A2A3B;border-radius:18px;text-decoration:none;color:#fff}",
    ".lct:hover{border-color:#FF9A4D}",
    ".lct i{flex:none;width:42px;height:42px;border-radius:50%;background:#FF7A0F;display:grid;place-items:center}",
    ".lct small{display:block;font-size:12.5px;color:#CDB4C2}.lct b{font-weight:500;font-size:16px}",
    "@media (min-width:700px){.lsteps{grid-template-columns:auto repeat(3,1fr);gap:24px}.lband{grid-template-columns:1.1fr 1fr}}"
  ].join("\n");
  document.head.appendChild(css);

  function mk(html) { var d = document.createElement("div"); d.innerHTML = html; return d.firstElementChild; }
  function build() {
    var wrap = document.querySelector("#viewLogin .authwrap"); if (!wrap || wrap.querySelector(".lsteps")) return;
    var hero = wrap.querySelector(":scope > .hero"); if (!hero) return;
    var h1 = hero.querySelector("h1");
    if (h1 && !h1.querySelector("b")) {
      var t = h1.textContent.trim(), k = t.indexOf(",");
      if (k > 0) { h1.textContent = t.slice(0, k + 1) + " "; var b = document.createElement("b"); b.textContent = t.slice(k + 1).trim().replace(/\.?$/, "."); h1.appendChild(b); }
    }
    hero.insertAdjacentElement("afterend", mk('<div class="lsteps"><strong>How it works</strong><div><i>1</i>Photograph your bills</div><div><i>2</i>Check the table</div><div><i>3</i>Export your statement</div></div>'));
    wrap.appendChild(mk('<div class="lband"><h2>Need a hand?<br><b>Message us.</b></h2><div style="display:grid;gap:14px">' +
      '<a class="lct" href="https://wa.me/9609936052" target="_blank" rel="noopener"><i><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z"/></svg></i><span><small>WhatsApp</small><b>+960 993 6052</b></span></a>' +
      '<a class="lct" href="https://threetimes.tech"><i><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg></i><span><small>More from 3 TIMES</small><b>threetimes.tech</b></span></a></div></div>'));
  }
  build();
  var t = null;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(build, 150); }).observe(document.body, { childList: true, subtree: true });
})();
