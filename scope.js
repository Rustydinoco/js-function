let fruit = mangga;

function makanan(){
    let fruit = pisang;
}

console.log(fruit);
// expected output = mangga
// karena scope variabel fruit diluar function dan didalam function berbeda

///////////////////////////////////////////////////////////////////////////////////////
let drink = susu;

function minuman(){
    let drink = kopi;  
}

minuman();
// expected output = kopi
// karena karena yang dipanggil adalah hasil dari function

/////////////////////////////////////////////////////////////////////////////////////////
function makanan(){
    let fruit = pisang;
}

console.log(fruit);
// tidak menghasilkan output karena console memanggil variabel yg ad diluar function

////////////////////////////////////////////////////////////////////////////////////////
let drinks = susu;

function minuman(){
    // let drinks = kopi;  
    console.log(drinks)
}

minuman();
// expected output = susu
// karena tidak ad variabel didalam function sehingga console mencari variabel yang tersedia di luar scope function