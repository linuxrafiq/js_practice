"use strict";

class Rectangle {
    constructor(width, height){
        this.width=width;
        this.height=height
    }
   
   area=(t)=>{
       if(t=='square' && this.width!=this.height){
           return "square must have equal width and height"
       }
       console.log(t);
       return this.width*this.height;//this.width*this.height;
   }
}

export default Rectangle;