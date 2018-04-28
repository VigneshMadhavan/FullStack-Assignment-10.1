"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangleClass_1 = require("./rectangleClass");
//creat a rectangle object having length 10 and breadth 20
var myBox = new rectangleClass_1.Rectanagle(10, 20);
//print the rectangle object properties
console.log(myBox.print());
//change the rectangle object properties
myBox.length = 123;
myBox.breadth = 321;
//print the rectangle object properties
console.log(myBox.print());
