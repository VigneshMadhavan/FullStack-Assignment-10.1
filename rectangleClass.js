"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectanagle = /** @class */ (function () {
    /*
    Constructor
    Description: To constructor a rectangle of having length and breadth
    Arguments: length and breadth, default value is zero
    Argument Type: number
    */
    function Rectanagle($length, $breadth) {
        if ($length === void 0) { $length = 0; }
        if ($breadth === void 0) { $breadth = 0; }
        this._length = $length;
        this._breadth = $breadth;
    }
    /*
    Method Name:calculateArea
    Description: To calculate the Area of this rectangle object
    Arguments: null
    Argument Type: NA
    Return: It will return the multiplication of length and breadth
    Return Type:Number
    */
    Rectanagle.prototype.calculateArea = function () {
        return this._length * this._breadth;
    };
    Object.defineProperty(Rectanagle.prototype, "length", {
        // getter and setter of Rectangle Object
        get: function () {
            return this._length;
        },
        set: function ($length) {
            this._length = $length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectanagle.prototype, "breadth", {
        get: function () {
            return this._breadth;
        },
        set: function ($breadth) {
            this._breadth = $breadth;
        },
        enumerable: true,
        configurable: true
    });
    /*
   Method Name:print
   Description: To print the properties of the Rectangle object
   Arguments: null
   Argument Type: NA
   Return: It will return the properties of the Rectangle object
   Return Type:String
   */
    Rectanagle.prototype.print = function () {
        return "I am a rectangle having " + this.length + " length and " + this.breadth + " breadth and area is " + this.calculateArea();
    };
    return Rectanagle;
}());
exports.Rectanagle = Rectanagle;
