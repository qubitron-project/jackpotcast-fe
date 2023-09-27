//next-i18next.config.js
/** @type {import('next-i18next').UserConfig} */

const path = require("path");

module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["default", "en", "ko"],
    defaultLocale: "default",
    localeDetection: false,
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
