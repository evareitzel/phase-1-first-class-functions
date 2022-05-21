function receivesAFunction(func){
    func.call();
}


function returnsANamedFunction(){
    return (function named(){});
}

function returnsAnAnonymousFunction(){
    return function(){};
}
