/**
 * Service Worker: Caches static assets (icons, images) for offline/PWA support.
 * On install, opens "static-assets" cache and pre-caches listed URLs.
 */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static-assets").then((cache) => {
      return cache.addAll([
        // browser tab icon

        // /public
        "/public/vite.svg",

        // icons

        // ../../assets/icon
        "/assets/icon/ambulance-1.svg",
        "/assets/icon/care-1.svg",
        "/assets/icon/care-2.svg",
        "/assets/icon/handshake-1.svg",
        "/assets/icon/health-1.svg",
        "/assets/icon/health-2.svg",
        "/assets/icon/home-1.svg",
        "/assets/icon/home-2.svg",
        "/assets/icon/nurse-1.svg",
        "/assets/icon/nurse-2.svg",
        "/assets/icon/time-1.svg",

        // images

        // ../../assets/aboutPage
        "/assets/aboutPage/hero-1.png",
        "/assets/aboutPage/hero-2.png",
        "/assets/aboutPage/hero-3.png",
        "/assets/aboutPage/hero-4.png",
        "/assets/aboutPage/hero-5.png",
        "/assets/aboutPage/hero-6.png",
        "/assets/aboutPage/hr-1.jpg",
        "/assets/aboutPage/hr-2.png",
        "/assets/aboutPage/hr-3.jpg",
        "/assets/aboutPage/hr-4.jpg",

        // ../../assets/footerSection
        "/assets/footerSection/american.png",
        "/assets/footerSection/ankara.png",
        "/assets/footerSection/bpa.png",
        "/assets/footerSection/burger.png",
        "/assets/footerSection/goethe.png",
        "/assets/footerSection/hirler.png",
        "/assets/footerSection/iec.png",
        "/assets/footerSection/kabs.png",
        "/assets/footerSection/klinikum.png",
        "/assets/footerSection/lmu.png",
        "/assets/footerSection/logo-bg.png",
        "/assets/footerSection/logo-round.png",
        "/assets/footerSection/logo.png",
        "/assets/footerSection/lwl.png",
        "/assets/footerSection/markische.png",
        "/assets/footerSection/nicc.png",
        "/assets/footerSection/sernitas-group.png",
        "/assets/footerSection/sernitas-hr.png",
        "/assets/footerSection/sernitas-institute.png",
        "/assets/footerSection/sernitas-kliniken.png",
        "/assets/footerSection/timer.png",

        // ../../assets/homePage
        "/assets/homePage/map-1.jpg",
        "/assets/homePage/review-1.jpg",
        "/assets/homePage/service-3.jpg",

        // ../../assets/karrierePage
        "/assets/karrierePage/bewerben-1.png",
        "/assets/karrierePage/bewerben-2.png",
        "/assets/karrierePage/karriere-1.png",

        // ../../assets/servicePage
        "/assets/servicePage/review-2.png",
        "/assets/servicePage/service-4.png",
        "/assets/servicePage/service-5.png",
        "/assets/servicePage/service-6.png",
        "/assets/servicePage/service-7.png",
        "/assets/servicePage/service-8.png",
        "/assets/servicePage/service-9.png",
        "/assets/servicePage/service-10.png",
        "/assets/servicePage/service-11.png",
        "/assets/servicePage/service-12.png",
        "/assets/servicePage/service-13.png",
        "/assets/servicePage/service-14.png",
        "/assets/servicePage/service-15.png",

        // ../../assets/wissenswertesPage
        "/assets/wissenswertesPage/aktuelles-1.png",
        "/assets/wissenswertesPage/blog-1.png",
        "/assets/wissenswertesPage/downloads-1.png",
        "/assets/wissenswertesPage/faq-1.png",
        "/assets/wissenswertesPage/ratgeber-1.png",

        "/assets/wissenswertesPage/aktuelles/news-1.png",
        "/assets/wissenswertesPage/aktuelles/news-2.png",
        "/assets/wissenswertesPage/aktuelles/news-3.png",
        "/assets/wissenswertesPage/aktuelles/news-4.png",
        "/assets/wissenswertesPage/aktuelles/news-5.png",

        "/assets/wissenswertesPage/blog/blog-1.png",
        "/assets/wissenswertesPage/blog/blog-2.png",
        "/assets/wissenswertesPage/blog/blog-3.png",
        "/assets/wissenswertesPage/blog/blog-4.png",
        "/assets/wissenswertesPage/blog/blog-5.png",
        "/assets/wissenswertesPage/blog/blog-6.png",
        "/assets/wissenswertesPage/blog/blog-7.png",
        "/assets/wissenswertesPage/blog/blog-8.png",
        "/assets/wissenswertesPage/blog/blog-9.png",
        "/assets/wissenswertesPage/blog/blog-10.png",

        "/assets/wissenswertesPage/ratgeber/ratgeber-1.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-2.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-3.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-4.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-5.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-6.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-7.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-8.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-9.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-10.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-11.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-12.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-13.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-14.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-15.png",
        "/assets/wissenswertesPage/ratgeber/ratgeber-16.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Bypass service worker for CSS files
  if (url.pathname.endsWith(".css")) {
    console.log("Bypassing service worker for:", event.request.url);
    return; // Skip handling this request
  }

  // Always fetch fresh HTML files for navigation
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request));
    return;
  }

  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
