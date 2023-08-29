// "parameter" adalah variabel dalam function jika suatu method dipanggil maka nilai dari parameter diambil dari "argument"

             // parameter
function namaBuah(buah){
    console.log(`ini adalah buah ${buah}`);   //output = ini adalah buah mangga
}

namaBuah("mangga")
        // argument



//Multiple parameter & argument 

function hasil(a, b, c){
    const total = a + b + c;
    console.log(total)
}

hasil(1, 2, 3);