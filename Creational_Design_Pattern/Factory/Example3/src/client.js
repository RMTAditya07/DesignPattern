"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Factory Use Case Example Code
var chair_factory_1 = require("./chair-factory");
var CHAIR = chair_factory_1.default.getChair('SmallChair');
console.log(CHAIR.getDimensions());
