/* Admin on phones: the section buttons show one section at a time,
   and each customer is one short row that opens on tap. */
(function () {
  var css = document.createElement("style");
  css.textContent = [
    "td.csum{display:none}",
    "@media (max-width:640px){",
    "#viewAdmin.ptabs > section.panel:not(.tabOn){display:none!important}",
    "#viewAdmin.ptabs > header p{display:none}",
    "#viewAdmin.ptabs > header h1{font-size:1.35rem!important;margin-bottom:0}",
    "#viewAdmin.ptabs > section.panel{background:transparent!important;border:0!important;padding:0!important;box-shadow:none!important;border-radius:0!important}",
    ".admjump button.cur{background:var(--accent)!important;border-color:var(--accent)!important;color:#fff!important}",
    "body .admin table.ctab,body .admin table.ctab tbody{display:block!important;min-width:0!important;width:100%!important;border:0!important}",
    "body .admin table.ctab thead{display:none!important}",
    "body .admin table.ctab tbody{display:grid!important;gap:10px}",
    "body .admin table.ctab tr.crow{display:grid!important;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--line)!important;border-radius:16px;padding:12px 14px;background:var(--surface);margin:0!important}",
    "body .admin table.ctab tr.crow.open{gap:12px 14px;border-color:var(--accent)!important}",
    "body .admin table.ctab tr.crow > td{display:block!important;border:0!important;padding:0!important;min-width:0;width:auto!important;text-align:left!important;background:transparent!important}",
    "body .admin table.ctab tr.crow:not(.open) > td:not(.csum){display:none!important}",
    "body .admin table.ctab tr.crow > td::before{content:none!important}",
    "body .admin table.ctab tr.crow > td:nth-child(1),body .admin table.ctab tr.crow > td:nth-child(2),body .admin table.ctab tr.crow > td:nth-child(3),body .admin table.ctab tr.crow > td:nth-child(6),body .admin table.ctab tr.crow > td:nth-child(7){grid-column:1/-1}",
    "body .admin table.ctab tr.crow > td:nth-child(3)::before{content:'Taxable Activity No.'!important}",
    "body .admin table.ctab tr.crow > td:nth-child(4)::before{content:'Rows'!important}",
    "body .admin table.ctab tr.crow > td:nth-child(5)::before{content:'Credits'!important}",
    "body .admin table.ctab tr.crow > td:nth-child(n+3):nth-child(-n+5)::before{display:block;font-size:.72rem;letter-spacing:.04em;color:var(--muted);margin-bottom:3px;font-family:inherit;font-weight:400}",
    "body .admin table.ctab tr.crow input{width:100%!important;min-width:0!important;box-sizing:border-box}",
    "body .admin table.ctab .rowacts{display:flex!important;flex-wrap:wrap;gap:8px}",
    "body .admin table.ctab .rowacts .btn{flex:1 1 auto;min-height:40px}",
    "body .admin table.ctab tr.crow > td.csum{display:flex!important;grid-column:1/-1;order:-1;align-items:center;gap:10px;cursor:pointer;min-height:40px;-webkit-tap-highlight-color:transparent}",
    ".csum .cdot{flex:none;width:9px;height:9px;border-radius:50%;background:#2e9e6b}",
    ".csum .cdot.w{background:#e0962a}.csum .cdot.b{background:#d24545}",
    ".csum .cwho{min-width:0;flex:1 1 auto;display:grid;gap:1px}",
    ".csum .cwho b{font-weight:500;font-size:.95rem;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".csum .cwho small{font-size:.78rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".csum .ccr{flex:none;text-align:right;display:grid;gap:1px}",
    ".csum .ccr b{font-weight:600;font-size:.95rem;color:var(--ink)}.csum .ccr b.zero{color:#d24545}",
    ".csum .ccr small{font-size:.7rem;color:var(--muted)}",
    ".csum .cchev{flex:none;width:9px;height:9px;border-right:1.5px solid var(--muted);border-bottom:1.5px solid var(--muted);transform:rotate(45deg);margin:0 4px 4px 2px;transition:transform .15s}",
    "tr.open .csum .cchev{transform:rotate(225deg);margin-bottom:-4px}",
    "}"
  ].join("\n");
  document.head.appendChild(css);

  var $ = function (id) { return document.getElementById(id); };
  var cur = 0, jumped = false, openIds = {};
  var phone = function () { return matchMedia("(max-width:640px)").matches; };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function panels() { var v = $("viewAdmin"); return v ? [].slice.call(v.querySelectorAll(":scope > section.panel")).filter(function (p) { return p.querySelector("h2"); }) : []; }

  function setTab(i) {
    var ps = panels(); if (!ps.length) return; if (i < 0 || i >= ps.length) i = 0; cur = i;
    $("viewAdmin").classList.add("ptabs");
    ps.forEach(function (p, n) { p.classList.toggle("tabOn", n === i); });
    [].forEach.call(document.querySelectorAll("#viewAdmin > .admjump button"), function (b, n) { b.classList.toggle("cur", n === i); });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("#viewAdmin > .admjump button"); if (!b) return;
    var i = [].indexOf.call(b.parentNode.children, b); setTab(i);
    if (phone()) { e.stopPropagation(); e.preventDefault(); window.scrollTo(0, 0); }
  }, true);

  function sync(tr) {
    if (tr.children.length < 6) return;
    var c = tr.querySelector(":scope > td.csum");
    if (!c) {
      c = document.createElement("td"); c.className = "csum"; tr.appendChild(c); tr.classList.add("crow");
      if (openIds[tr.dataset.id]) tr.classList.add("open");
      c.addEventListener("click", function () { var o = tr.classList.toggle("open"); if (tr.dataset.id) openIds[tr.dataset.id] = o; });
    }
    var v = function (f) { var i = tr.querySelector("[data-f=" + f + "]"); return i ? i.value.trim() : ""; };
    var st = (tr.children[5].textContent || "").trim(), k = /waiting/i.test(st) ? "w" : /blocked/i.test(st) ? "b" : "";
    var admin = /admin/i.test(st), nm = v("name"), mob = v("mobile"), cr = (tr.children[4].textContent || "").trim();
    var sub = [nm ? mob : "", k === "w" ? "Waiting for approval" : k === "b" ? "Blocked" : "", admin ? "Admin" : ""].filter(Boolean).join(" · ");
    var html = '<span class="cdot ' + k + '"></span><span class="cwho"><b>' + esc(nm || mob) + "</b>" + (sub ? "<small>" + esc(sub) + "</small>" : "") + "</span>" +
      (admin ? "" : '<span class="ccr"><b class="' + (parseFloat(cr) > 0 ? "" : "zero") + '">' + esc(cr) + "</b><small>credits</small></span>") + '<span class="cchev"></span>';
    if (c.innerHTML !== html) c.innerHTML = html;
  }

  function run() {
    var body = $("custBody"); if (!body || !$("viewAdmin")) return;
    var tb = body.closest("table"); if (tb) tb.classList.add("ctab");
    [].forEach.call(body.children, sync);
    setTab(cur);
    var rt = $("reqTitle"), m = rt && /(\d+)\s+(waiting|pending|new)/i.exec(rt.textContent || "");
    if (!jumped && m && +m[1] > 0) {
      jumped = true;
      if (phone()) { var ps = panels(); for (var i = 0; i < ps.length; i++) if (ps[i].contains(rt)) setTab(i); }
    }
  }
  var t = null;
  function later() { clearTimeout(t); t = setTimeout(run, 120); }
  new MutationObserver(later).observe(document.body, { childList: true, subtree: true, characterData: true });
  document.addEventListener("change", later);
  run();
})();
