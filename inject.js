export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  if (process.env.NODE_ENV === 'production' && GA_ID && typeof window !== 'undefined') {
    (function (d, script) {
      script = d.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

      d.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', GA_ID);
    }(document));
  }
}