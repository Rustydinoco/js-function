// method = ketika menambahkan function pada suatu object property


function func() {      // function biasa
  console.log("func")
  return 'hello'
}



const aritmatika = {   //object
    perkalian: function(x, y){    //method
        return x*y
    },
    pembagian: function(x, y){   //method
            return x/y
    }
}    