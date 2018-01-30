class Person {
    _firstName:string = "";
    enumerable:boolean = true;
    configurable:boolean = true;
    get firstName():string { return this._firstName; }
    set firstName(value) { this._firstName = value.toUpperCase(); }
}