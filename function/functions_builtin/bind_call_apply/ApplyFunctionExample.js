const ApplyFunctionExample = (function(){
    var jon = {
        name:`jon`,
        age:35,
        job:`teacher`,
        presentation:function(args){
            if(args[0]==="formal"){
                console.log(`Good ${args[1]} I am ${this.name}, my age ${this.age}, my profession is ${this.job}`);
            }else{
                console.log(`Hey there I am ${this.name}, my age ${this.age}, my profession is ${this.job}, have good ${args[1]}`);

            }
        }
    }

    function execute(){
        jon.presentation(["formal", "morning"])

        var suru ={
            name:`Nora`,
            age:3,
            job:`Programmer`
        }

        jon.presentation.call(suru, ["formal", "morning"]);
    }

    return{
        execute:execute
    }
})();

export default ApplyFunctionExample;