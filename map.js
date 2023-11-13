//for each() = tewha use karto aplyala akhad opration karaych asel
//const a = =[1, 2, 3]
//a.foreach((value, index, array))
//map() create a mew array by  performing a some opearatiion on each array element
//Filter = values that passes a test creat anew array  , as function jachyaathi True retun karaty tsch value distil new array madhe 


//map method
let arr = [ 45, 23, 31] //
let a = arr.map((value, index, array) =>{
    // console.log(value, index, array);
    return value + 1
})
// onsole.log(a,) 
console.log(a, arr); // origin arry la change karat nahi

 
//filter method
arr2 = [44, 35, 32, 134, 1, 5, 6, ]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2); //original arrray change hot nahi

// Array reduce method