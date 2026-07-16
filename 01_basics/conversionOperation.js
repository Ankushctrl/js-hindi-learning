 let score = "ankush"

//  console.log(score);
//  console.log(typeof(score))

//  let valueIntNumber = Number(score)
//  console.log( typeof valueIntNumber)
//  console.log(valueIntNumber)
 

//  "33" => 33
//  "33abce" => NaN (not a Number)
//  true = 1 / false = 0

let isLoggedIn = 1

let booleanIsLogged = Boolean(isLoggedIn)
// console.log(booleanIsLogged);
// console.log(typeof booleanIsLogged);

/*true => 1 / false => 0
when string is empty like this 
"" so value is false aur 0
if string is not empty is outcome is true aur 1 */



// conversion of number to string 

let numberIs = 33

let stringValueIs = String(numberIs);
// console.log(stringValueIs);
// console.log(typeof stringValueIs);


// conversion of string to boolean

let string = "ankush"

let BooleanToString = Boolean(numberIs);
// console.log(BooleanToString);
// console.log(typeof BooleanToString);

// ***************************operations****************************************

let str1 = 10
let str2 = 20
let str3= str1+str2
// console.log( str3);

// console.log("1"+2);      //12
// console.log(1+"2");      //12
// console.log("1"+2+4);    //124
// console.log(1+2+"4");    //34
// console.log(1+"2"+4);    //124

let GameCounter = 100;

++GameCounter
// console.log(GameCounter);

console.log(null == 0);
console.log(null > 0); //0 >0 is false because of both are equal 
console.log(null < 0);
console.log(null  >=0); // if null is converted into digital so its given value is  0 beacuse if  null >=0 is true "0 >= 0" behind the logic 
console.log(null  <=0);


console.log(null ===0); /*It checks two things:
                           Are the types the same?
                           Are the values the same? 
                           null can be converted to 0 in numeric operations
                                                    */


console.log(Number(null)) // op = 0