
export class Rectanagle{

    private _length:number;
    private _breadth:number;
    /*
    Constructor
    Description: To constructor a rectangle of having length and breadth
    Arguments: length and breadth, default value is zero 
    Argument Type: number    
    */
    constructor($length:number=0,$breadth:number=0){
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
    public calculateArea():number{
        return this._length*this._breadth;
    }

    // getter and setter of Rectangle Object

    public get length():number{
        return this._length;
    }
    public set length($length:number){
        this._length=$length;
    }
    public get breadth():number{
        return  this._breadth;
    }
    public set breadth($breadth:number){
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

    public print():string{
        return `I am a rectangle having ${this.length} length and ${this.breadth} breadth and area is ${this.calculateArea()}`;
    }

}


