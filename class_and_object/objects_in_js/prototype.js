var MonkeyPatching = function () {
    /*monkey patching.
    Altering the functionality of a single instance or really of any already defined object
    in this fashion is known as monkey patching. There is some division over whether
    or not this is a good practice. It can certainly be useful when dealing with library
    code but it adds great confusion. It is generally considered better practice to extend
    the existing class.*/
    let Castle = function (name) {
        this.name = name,
            this.build = function () {
                console.log(this.name);
            }
    }

    let castleInstance1 = new Castle("Nora Castle");
    let castleInstance2 = new Castle("Suru Castle");

    castleInstance1.build = function () {
        console.log("Zaman Castle");
    }


    this.print = function () {
        castleInstance1.build();
        castleInstance2.build();
    }

}

var Prototype = function () {
    /*When an object is created, its definition is inherited from a prototype. Weirdly each
prototype is also an object so even prototypes have prototypes. Well, except for
the object which is the top-level prototype. The advantage to attaching functions
to the prototype is that only a single copy of the function is created; saving on
memory.
One thing to note is that only the functions are assigned to the prototype. Instance
variables such as name are still assigned to the instance. As these are unique to each
instance there is no real impact on the memory usage.
In many ways a prot

*/ 
    let Castle = function (name) {
        this.name = name;
    }
    Castle.prototype.build = function(){
        console.log(this.name);
    }

    var castleInstanc1 = new Castle("Castle Of Suru");

    /*If you make a change to the prototype of an object at a later date then all the objects
which share that prototype are updated with the new function. This removes some
of the concerns expressed about monkey typing. An example of this behavior is
shown here:*/

    var WareHouse = function(name){
        this.name = name;
    }
    WareHouse.prototype.build = function(){
        console.log(this.name);
    }
    let wareHouse = new WareHouse("Dry fish warehouse");
    // setting new function for WareHouse.prototype.build
    WareHouse.prototype.build = function(){
        console.log(this.name.replace("Dry fish warehouse", "crops warehouse"))
    }

    this.execute = function(){
        castleInstanc1.build();
        wareHouse.build();
    }
}
var execute = () => {
    var monkeyPatching = new MonkeyPatching()
    monkeyPatching.print();

    var prototypePatch= new Prototype();
    prototypePatch.execute();
}




export { execute as prototypeMonkeyPatching }