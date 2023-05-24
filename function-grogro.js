//javascript file for Ecwid store "grogro.no/products"
//testing code for grogro.no/products

import { Fireworks } from 'https://esm.run/fireworks-js';

let container = document.querySelector('#ecwid_body');

let options = {
  gravity: 1.4,
  opacity: 0.4,
  autoresize: true,
  acceleration: 1.00,
};

let fireworks = new Fireworks(container, options);

fireworks.start();
