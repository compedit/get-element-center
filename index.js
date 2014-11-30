/**
 * Expose `getElementCenter`
 */

module.exports = getElementCenter;

/**
 * Get an `element`s center (x,y)
 * @param {Object} element
 * @returns {Object}
 */

function getElementCenter(element) {
  var dimensions = element.getBoundingClientRect();
  var centerYCoord = dimensions.top + window.pageYOffset + (dimensions.height / 2);
  var centerXCoord = dimensions.left + window.pageXOffset + (dimensions.width / 2);
  return {
    y: centerYCoord,
    x: centerXCoord
  };
}
