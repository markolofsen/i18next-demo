/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    ru: 'ru',
  },
  all: {
    en: 'en',
    ru: 'ru',
  },
}

console.warn('localeSubpaths',localeSubpaths);

module.exports = new NextI18Next({
  otherLanguages: ['ru'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
  // detection: {
  //   order: ['htmlTag', 'querystring'],
  //   lookupQuerystring: 'lng',
  //   checkWhitelist: true,
  // }
})
