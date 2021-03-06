class Course{
    constructor(data){
        this.title = data.title;
        this.user = data.user;
        this.completed = data.completed;
    }
}

const users = ["Alex", "Paul", "Jhon", "Nora",];
const completed = [true, false];

const CourseMethod = function(){
    const courses = {};
    let count = 0;
    const add = (data)=>{
        courses[data.title] = new Course(data);
        count++;
    }

    const get = (title) =>{
        return courses[title];
    }

    const getCount = ()=>{
        return count;
    }
    return{
        add:add,
        get:get,
        getCount:getCount
    }
}

var execute = ()=>{
    const courses = new CourseMethod;
    const numCourse = 1000000;
    const initialMemory = process.memoryUsage().heapUsed;
    
    for (let i=0; i < numCourse; i++){
    
        courses.add({
            title: `${i}.course`,
            user: users[Math.floor(Math.random()*4)],
            completed: completed[Math.floor(Math.random()*2)],
    
        });
    }
    
    const finalMemory = process.memoryUsage().heapUsed;
    
    const usedMemory = finalMemory-initialMemory;//in byte
    var mbUsed =(usedMemory/ 1024) / 1024; // byte/1024 = KB, kb/1024 = MB
    mbUsed = Math.round(mbUsed * 100) / 100;
    console.log("With out flyweight pattern: "+mbUsed + "MB used");
    // what is the problem here :
    //1. we have only one parameter is unique here, which is title,
    //2. both users and completed array values are shared in among the all courses
    //3. so every time we created an object  memory allocated for  this.user = data.user and for this.completed = data.completed;
    //4. so 1 milion this.user variable created along with memory alocation and 1 milion times this.completed variable created along with memory allocation
    //5.we can avoid this huge memory allocation by using flyweight pattern because only 4 users and completed status share among 1M users
    
}

export {execute as flyWeightMemoryProblem};
