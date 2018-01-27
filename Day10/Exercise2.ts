class BaseObject {
    width:number = 0;
    length:number = 0;
}
class Rectangle extends BaseObject {
    calcSize():number {return this.width * this.length;}
}

var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log('Rectangle Size' + rectangle.calcSize());
