var test = require('tape');
var getElementCenter = require('../');


/**
 * Tested on mid 2011 MBA (1400 x 900) Google Chrome in presentation mode.
 *
 */


test('getElementCenter', function(t) {
  t.plan(6);
  
  t.deepEqual(getElementCenter(document.querySelector('.box.topLeft')), {x: 20, y: 20});
  t.deepEqual(getElementCenter(document.querySelector('.box.topRight')), {x: 1420, y: 20});
  t.deepEqual(getElementCenter(document.querySelector('.box.bottomRight')), {x: 1420, y: 880});
  t.deepEqual(getElementCenter(document.querySelector('.box.bottomLeft')), {x: 20, y: 880});
  t.deepEqual(getElementCenter(document.querySelector('.box.center')), {x: 720, y: 450});
  t.deepEqual(getElementCenter(document.querySelector('.relativeCenter')), {x: 360, y: 450});
});
