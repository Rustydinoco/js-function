// try and catch adalah suatu proses pengkondisian untuk menghandle error/atau saat ad terjadi error tidak langsung melakukan bloking

try{
    saya.adalah()
}catch{
    console.log('error!!')
}
// expected output : error!!





function chat(msg){
    try{
        console.log(msg.toUpperCase()) //method uppercaser hanya bisa diisi oleh string
    }catch(error){
        console.log(error)
        console.log("silahkan isi dengan data string pada chat()")
    }
// jika diisi dengan data number maka outputnya akan keluar statement dari catch.
// jika diisi data string maka outputnya mengeluarkan statement dari try 
}