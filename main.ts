import { Rectanagle } from './rectangleClass';

//creat a rectangle object having length 10 and breadth 20
let myBox:Rectanagle=new Rectanagle(10,20);
//print the rectangle object properties
console.log(myBox.print());
//change the rectangle object properties
myBox.length=123;
myBox.breadth=321;
//print the rectangle object properties
console.log(myBox.print());
