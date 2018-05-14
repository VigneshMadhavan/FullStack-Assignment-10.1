
class Rectanagle{

   
    /*
    Constructor
    Description: To constructor a rectangle of having length and breadth
    Arguments: length and breadth, default value is zero 
    Argument Type: number    
    */
    constructor($length=0,$breadth=0){
        this._length=$length;
        this._breadth=$breadth;
    }

    /*
    Method Name:calculateArea
    Description: To calculate the Area of this rectangle object
    Arguments: null
    Argument Type: NA 
    Return: It will return the multiplication of length and breadth
    Return Type:Number
    */
    calculateArea(){
        return this._length*this._breadth;
    }

    // getter and setter of Rectangle Object

    get length(){
        return this._length;
    }
    set length($length){
        this._length=$length;
    }
    get breadth(){
        return  this._breadth;
    }
    set breadth($breadth){
        this._breadth=$breadth;
    }

     /*
    Method Name:print
    Description: To print the properties of the Rectangle object
    Arguments: null
    Argument Type: NA 
    Return: It will return the properties of the Rectangle object
    Return Type:String
    */

    print(){
        return `I am a rectangle having ${this.length} length and ${this.breadth} breadth and area is ${this.calculateArea()}`;
    }

    

}

let myBox=new Rectanagle(10,20);
//print the rectangle area
console.log("Area of the rectangle: "+myBox.calculateArea());
//print the rectangle object properties
console.log(myBox.print());
//change the rectangle object properties
myBox.length=123;
myBox.breadth=321;
//print the rectangle object properties
console.log(myBox.print());
