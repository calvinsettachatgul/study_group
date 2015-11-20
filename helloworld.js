
var greeting = function(name){
    
    console.dir("Hello World " + name);
};

var returnName = function(name){
    return name;
}

var functionWrapper = function(argument, callback){
    callback(argument);
}

var functionWrapper2 = function(argument, callback1, callback2){
    
    callback2(callback1(argument));
}

functionWrapper("calvin", greeting);

functionWrapper2("someone", returnName, greeting);

//what do you think about wrappers?
//i noticed that javascript uses callbacks all the time and wrappers

//