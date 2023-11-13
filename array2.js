let num = [ 1, 3, 5, 9]
// for each loop :- call a function once for each array element
num.forEach((element) => {
    console.log(element * element)
})

// NOte :- reduce Method single value reduce hote number.reduce(add) :-he ak function ahe je ki add karte ak no 
//Array.form :- used to crate an array from any other object eg, Array.from("nilkant")
// For of :- used to get values form an array 
// for in :- used to get key from an array
//map of filter return array
//reduce return value

let name = "nilkant"
let arr = Array.from(name)
console.log(arr);

for (let item of num) {  //for of loop jask object dete
    console.log(item);
}

for (let i in num ){  //keys print karte jski index print karte
    console.log(i);
}


//map() :-creating a new array by performing same operation n each array element


let arr1 = [45, 23, 21]
let a = arr1.map((value, index, array)=>{
    console.log(value, index, array);
    return value 
}) 
console.log(a);


// filter method :- array only modify hote 
let arr2 = [12, 34, 52, 10, 3, 4]
let a2 = arr2.filter((a) =>{
    return a<10
})
console.log(a2);

// reduce method
let arr3 = [1, 2, 3, 4, 5, 6]
let neew = arr3.reduce(( h1, h2) => {
    return h1 + h2  
})          //pahilya done value la check akarte pude jate parat tyacha pudchi valu  cjheck karte
console.log(neew);