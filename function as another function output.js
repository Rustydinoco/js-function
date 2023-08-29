const rata = function(){
    const random = Math.random()*3+1;
    if(random > 5 ){
        return function(){
            console.log('lebih dari 5')
        };
    }else{
        return function(){
            console.log('kurang dari 5')
        };
    };

};