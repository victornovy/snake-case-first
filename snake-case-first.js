var noCase = require('no-case')
var upperCase = require('upper-case')

/**
 * Sneke case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '_').replace(/^.|_./g, function (m) {
    return upperCase(m, locale)
  })
}
