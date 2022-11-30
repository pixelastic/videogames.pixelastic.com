const bgeet = require('@pixelastic/videogames-assets-bgeet');
const castlecrashers = require('@pixelastic/videogames-assets-castlecrashers');
const commandos = require('@pixelastic/videogames-assets-commandos');
const dishonored = require('@pixelastic/videogames-assets-dishonored');
const gta3 = require('@pixelastic/videogames-assets-gta3');
const gta5 = require('@pixelastic/videogames-assets-gta5');
const hearthstone = require('@pixelastic/videogames-assets-hearthstone');
const legoHarryPotterYear57 = require('@pixelastic/videogames-assets-lego-harry-potter-year-5-7');
const misc = require('@pixelastic/videogames-assets-misc');
const poe = require('@pixelastic/videogames-assets-poe');
const skyrim = require('@pixelastic/videogames-assets-skyrim');
const spelunky = require('@pixelastic/videogames-assets-spelunky');
const talosPrinciple = require('@pixelastic/videogames-assets-talos-principle');
const thief = require('@pixelastic/videogames-assets-thief');
const thronebreaker = require('@pixelastic/videogames-assets-thronebreaker');
const tinybrains = require('@pixelastic/videogames-assets-tinybrains');
const tombraider = require('@pixelastic/videogames-assets-tombraider');
const warhammerquest = require('@pixelastic/videogames-assets-warhammerquest');
module.exports = [
  { name: 'GTA 3', slug: 'gta3', manifest: gta3 },
  {
    name: "Baldur's Gate Enhanced Edition Trilogy",
    slug: 'bgeet',
    manifest: bgeet,
  },
  { name: 'Pillars of Eternity', slug: 'poe', manifest: poe },
  { name: 'Commandos', slug: 'commandos', manifest: commandos },
  {
    name: 'The Talos Principle',
    slug: 'talos-principle',
    manifest: talosPrinciple,
  },
  {
    name: 'Thronebreaker: The Witcher Tales',
    slug: 'thronebreaker',
    manifest: thronebreaker,
  },
  {
    name: 'Warhammer Quest',
    slug: 'warhammerquest',
    manifest: warhammerquest,
  },
  { name: 'Tombraider', slug: 'tombraider', manifest: tombraider },
  { name: 'Tinybrains', slug: 'tinybrains', manifest: tinybrains },
  { name: 'Spelunky', slug: 'spelunky', manifest: spelunky },
  { name: 'Skyrim', slug: 'skyrim', manifest: skyrim },
  { name: 'Misc', slug: 'misc', manifest: misc },
  {
    name: 'Thief',
    slug: 'thief',
    manifest: thief,
  },
  {
    name: 'Lego Harry Potter Years 5-7',
    slug: 'lego-harry-potter-year-5-7',
    manifest: legoHarryPotterYear57,
  },
  { name: 'Dishonored', slug: 'dishonored', manifest: dishonored },
  {
    name: 'Castlecrashers',
    slug: 'castlecrashers',
    manifest: castlecrashers,
  },
  { name: 'GTA 5', slug: 'gta5', manifest: gta5 },
  { name: 'Hearthstone', slug: 'hearthstone', manifest: hearthstone },
];
