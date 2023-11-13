// // #16
//[.... . concate(...)]does not change original array
// slie = new arryla modify mahi karat nww aray karav lagt
// splice = new array la modify karte

let num = [1, 2, 3, 4]
let r = num.reverse() //reverse chyya jagi Tostring use krl tar sting hote
console.log(r);
// let b = num.toString() //b is now a string
// console.log(b);
// // console.log(num.join("_"));  //???he object dakhavtay as kakhali string
 let r1 = num.join("*")
console.log(r1);
// console.log(typeof b);
// console.log(typeof c);


let nbr = [11, 12, 13, 14, 15 ]
let nbr2 = [111, 112, 113] 
let nbr3 = [ 'nil', 'warle']

let newarr = nbr.concat(nbr2,nbr3)
console.log(newarr);






//************************************************************* */


// array method

let r4 = num.push(56) //push returns new array length [last index ch element add]
 console.log(num,r4); //num ne print hote, r ne length dakhavte 

num.pop()
console.log(num); //[last index ch element add]


let p = num.shift()
console.log(num,p); //remove the element form first

let p1 = num.unshift(11, 12)
console.log(num, p1); //[put the element from first]

// delete num[0] //array chi length tevdhich rahte pan first inex delete hote
// console.log(num);
// console.log(num.length);



// let compare = (a, b)=> {
//     return a - b
// }

let num3 = [33, 434, 45, 76, 74, 82, 63, 13, 14 ]
//  console.log(num3.sort(compare)) //original arrayla sort karte; //alphbetically arreange  //num.reverse (reverse karte)
 
 let deletedValue = num3.splice(2,3, 123, 324, 355, 525)
 console.log(deletedValue); //detelted values bhete veriable mdhe store kel tar
  
  
  
num3.splice(2, 3, 123, 324, 355, 525)
console.log(num3);

// // splice modify karte array la  SLICE()new array banvav lagt yala

// let names1 = ["mayur", "warle", "shivaji"]
// console.log(names1[1]);
// console.log(names1[2]);
// console.log(names1[3]);
// console.log(names1[4]);

// names1[2] = "vinay"
// names1[0] =" omkar"
// console.log(names1);


let numberr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newnum = numberr.slice(3, 7)
console.log(newnum); //last index nahi yet