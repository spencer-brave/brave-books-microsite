import { useEffect } from "react";

export default function TrackingScripts() {
  useEffect(() => {
    const loadTracking = () => {
      // --- Meta Pixel ---
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      window.fbq("init", "217804503553867");
      window.fbq("track", "PageView");

      // Google Tag Manager
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TC5QGB8" + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-TC5QGB8");
      // End Google Tag Manager
    };

    // Run after window load + 2s delay
    window.addEventListener("load", () => {
      setTimeout(loadTracking, 0);
    });

    return () => {
      window.removeEventListener("load", loadTracking);
    };
  }, []);

  return null;
}
