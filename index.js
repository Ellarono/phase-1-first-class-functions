function receivesAFunction(callback){
    return callback()

}
function returnsANamedFunction(){
    function namedFunction (){
        return "mira"
    }
    return namedFunction
}
function returnsAnAnonymousFunction() {
    return function() {
      return "I am hidden";
    };
  }
  
