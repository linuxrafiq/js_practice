class Course {
    constructor(data) {
        this.name = data.name;
        this.project = data.project;
        this.completed = data.completed || false;
    }
}

const CourseServices = (() => {
    return {
        complete: (Course) => {
            Course.completed = true;
            console.log(`Completing course: ${Course.name}`);
        },
        save: (Course) => {
            console.log("Course Saveing");
        }
    }
})();

const CourseServiceFacede = ( // outer Immediately Invoked Function Expression (IIFE), but since it is assing to a variable
//-so we will need another IIFE for the structure. 
    ()=>{ // 
        const complete=(myCourse) => {
            CourseServices.complete(myCourse);//completing the course
            if (myCourse.completed) {
                CourseServices.save(myCourse);// since course is completed saving it
            }
        }
        return{
            completeMethod:complete
        }
    }

)();

export { Course, CourseServices, CourseServiceFacede };