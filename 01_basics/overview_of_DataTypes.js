/* 
There are two types of data types 
primitive and Non primitive 

In Primitive DataType that are icluded with 
1.String  =""
2.Boolean = true or false
3.Number  = 54 
4.null    = empty string like this ""
5.undefined = 
6. symbol 
7. BigInt 

*/

const id = Symbol('123')
const AnotherId = Symbol('123')

// console.log(id);
// console.log(typeof id);

// console.log( id == AnotherId);

// Symbol creates unique, immutable identifiers; identical descriptions are never equal.

const num = 9007199254740991;
const bigNum = 90071992547409911234567890n;

console.log(typeof num);     // "number"
console.log(typeof bigNum);  // "bigint"

// BigInt is a primitive data type used to store integers larger than Number.MAX_SAFE_INTEGER.

// *********************due to this language is dynamic*************************** 
 let x = 8
//  console.log(typeof x);

 x = "hello"
//  console.log(typeof x);

 x = true 
//  console.log(typeof x);

//  in this three step because ot it ,it is called dynamic language  ( in short variable change at runtime)
 


 

/*
*************(reference) Non primitive **************** 
1.objects 
2. Array
3. Function

*/

const heros = ["shakatiman", "spiderman", "halak"]
let myObj={
    myname :"Ankush",
    age : 23 , 
    city: "kathua",
}
 console.log(myObj);
 console.log(heros);
 
 const MyFuntion = function () {
    console.log("Hello World!");
    
    
 }
 MyFuntion();