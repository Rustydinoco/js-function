// return statement adalah sataement yang akan mengkahiri proses function dan akan memeberikan hasil yang diidefenisikan jika fungsi itu dipanggil.

function hasil(a, b, c){
    const total = a + b + c;
    return total    
}

console.log(hasil(1, 2, 3))
// expected output 6



// example 1
function hasil(a, b){
    if(a>3 && b>3){
        return a*b;
    }
    return 0;
}

console.log(hasil(2, 4))


