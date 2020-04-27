class Course {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.image = data.image || "thumbnile.png";// thumbnile.png is deafult value
        this.price = data.price || 0; // 0 is deafult value
    }

    toString=(course)=>{
      let jToS = JSON.stringify(course)
       console.log(jToS);
       return jToS;
    }
}

export default Course;
