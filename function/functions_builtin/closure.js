const ClouserExample = (function(){
    function reteriment(reterimentAge){
        var message = "years left untile reteriment";
        return function(age){ // inner function still can use  
            //variables of outer function after execution of outer function. In this example variable message 
            // and reterimentAge is decleard in outer function,  after 
            // calling the outer funciotn we will get the inner funciton as 
            // a return. After execution of outer funciotn inner function can still 
            //use the properties of outer function
            console.log(`${reterimentAge-age} ${message}`)
        }
    }

    function execute(){
        reteriment(65)(28);
    }
    return{
        execute:execute
    }
})();

export default ClouserExample;