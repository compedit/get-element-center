var test = require('tape');
var getElementCenter = require('../');


/**
 * Tested on mid 2011 MBA (1400 x 900) Google Chrome
 */


test('getElementCenter', function(t) {
  t.plan(3);
  
  var one = document.querySelector('.one');
  t.deepEqual(getElementCenter(one), {x: 1036, y: 200});

  var two = document.querySelector('.two');
  t.deepEqual(getElementCenter(two), {x: 250, y: 305});

  var three = document.querySelector('.three');
  t.deepEqual(getElementCenter(three), {x: 686, y: 245});
});
