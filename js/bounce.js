/*jshint esversion: 6 */
import * as Bounce from './node_modules/bounce.js/bounce.js';
var bounce = new Bounce();
bounce.rotate({
    from: 0,
    to: 90
});
bounce.applyTo(document.querySelector(".target"));