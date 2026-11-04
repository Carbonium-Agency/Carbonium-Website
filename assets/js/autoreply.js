/* Contact auto-reply hook (added 2026-11-05).
   Every form on the site posts to Formspree with fetch(). This wraps fetch so
   that, once Formspree accepts a submission, the visitor's name and email are
   also sent to /autoreply.php, which emails them a confirmation and
   copies the enquiry to info@carboniumagency.com.
   The form itself works exactly as before; if this step fails nothing changes
   for the visitor. */
(function () {
  if (!window.fetch || window.__cbAutoreply) return;
  window.__cbAutoreply = true;
  var orig = window.fetch;
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    var p = orig.apply(this, arguments);
    try {
      var isForm = /formspree\.io\/f\//.test(url) && init && /post/i.test(init.method || '') &&
        typeof FormData !== 'undefined' && init.body instanceof FormData;
      if (isForm) {
        var email = String(init.body.get('email') || '');
        var keep = ['name', 'email', 'company', 'message', 'budget_min', 'budget_max', 'page'];
        var vals = {};
        keep.forEach(function (k) { var v = init.body.get(k); if (typeof v === 'string') vals[k] = v; });
        p.then(function (r) {
          if (!r || !r.ok || !email) return;
          var fd = new FormData();
          Object.keys(vals).forEach(function (k) { fd.append(k, vals[k]); });
          fd.append('website', '');
          orig.call(window, '/autoreply.php', { method: 'POST', body: fd, credentials: 'same-origin' }).catch(function () {});
        }).catch(function () {});
      }
    } catch (e) {}
    return p;
  };
})();
