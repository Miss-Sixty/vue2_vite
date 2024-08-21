import Vue from 'vue'

import App from './App.vue'
import router from './router'
import * as Sentry from "@sentry/vue";
import './assets/main.css'


Sentry.init({
  Vue,
  dsn: "https://5092eecb0c32e834faf07d1859327e0b@o4507815677984768.ingest.us.sentry.io/4507815680081920",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
