function multiple(func){
    func();
    func();
}

function nilai(){
    const hasil =Math.floor(Math.random()*4)+1;
    console.log(hasil)

}

multiple(nilai);