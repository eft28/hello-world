//building the namespace to make some fields not be accessible from everyone

my_plugin_object = function() {

    //private variable:
    var myPrivateVar = "I can be accessed only from within my_object";

    return {
        my_public_property: "I can be accessed only as my_method.my_public_property"
    };

    another_example: (function() {
        var that = {};

        //this variable will be held in the closure and inacessible from outside
        //inaccessible from outside, but will be accessible from all closures defined in this one.

        that.dark = function(arguments) { 
            //pass some code that has to do with the dark colouring settings 
        };

        that.light = function(arguments) {
            //pass some code that has to do with the light colouring settings
        }


        return that;
    }
)}(); //having the parenthesis can call it as an object




//.... pass some more code
let time = getTime(); //method that collects daytime

let morningTimes = [/*times from 7am to 7pm*/];

if(morningTimes.includes(time)) {
    my_plugin_stuff.light(); //applies the day_time colours
}
else {
    my_plugin_stuff.dark(); //applies the night_view colours
}



