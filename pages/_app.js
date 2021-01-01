import "tailwindcss/tailwind.css";
import Analytics from "analytics";
import simpleAnalyticsPlugin from "analytics-plugin-simple-analytics";

const analytics = Analytics({
  app: "elisabethvonsteinen.ch",
  plugins: [
    // Load simple analytics! 🎉
    simpleAnalyticsPlugin(),
  ],
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
