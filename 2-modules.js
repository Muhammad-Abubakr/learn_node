// Modules
// CommonJS - Every file is a module by default
// Modules  - Encapsulated code (only share minimum)

const { greet } = require('./4-utils');
const { abubakr, siddique } = require('./3-names')
const data = require('./5-alternative-flavour')

require('./6-mind-grenade')

greet(abubakr)
greet(siddique)
greet(data.singlePerson.name)