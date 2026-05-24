/**
 * ---------------------------------------------------------------------------
 *  docs/config.js — SINGLE SOURCE OF TRUTH for the deployed Apps Script URL.
 * ---------------------------------------------------------------------------
 *  Loaded by:
 *    • docs/index.html         (GitHub Pages landing page)
 *    • assets/js/api.js        (local-dev fetch fallback — picks it up via
 *                              `window.IRP_EXEC_URL` when this file is loaded
 *                              before api.js)
 *
 *  Production (Apps Script HtmlService) does NOT read this file. The inlined
 *  client in src/partials/api.html resolves the URL automatically at render
 *  time via `<?= getWebAppUrl() ?>` — so no edit is needed there ever.
 *
 *  When the deployment URL changes, update the constant below and commit.
 *  Nothing else in the repo needs to change.
 * ---------------------------------------------------------------------------
 */
(function () {
    var EXEC_URL = "https://script.google.com/macros/s/AKfycbx7SIr04CSet_D2Zlb12LngDR7tCbef41VJUVG-B4DRfh69SRBWk6sv_agUUMKiYVbA/exec";

    window.IRP_CONFIG     = { EXEC_URL: EXEC_URL };
    window.IRP_EXEC_URL   = EXEC_URL;
    window.IRP_STAFF_URL  = EXEC_URL;   // signed-in staff dashboards
    window.IRP_PUBLIC_URL = EXEC_URL;   // anonymous resident pages (same URL
                                        // until a second, ANYONE_ANONYMOUS
                                        // deployment is created)
})();
