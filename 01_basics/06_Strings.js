let product  = `airbuds`
let price = 1300 ;

//console.log(product  + price + "value" ); old way 

// console.log(`This is my ${product } and product price is  ${price}`); //modern way of js 

const GameName = new String(`ankush`);

console.log(GameName.__proto__);
console.log(typeof GameName);

console.log(GameName.length);         // string mehods ".length"  
console.log(GameName.toUpperCase());  // string mehods '.toUpperCase
console.log(GameName.charAt(1));      // string mehods  find any alphabets 



let city =new String("    this is new- string-   and -we have to- removed the -space between -at -starting and -ending points     ")
console.log(city);

console.log(city.trimStart());        //  remove extra space  at end and starting point of string or sentence     
console.log(city.trimEnd());        //  remove extra space  at starting and starting point of string or sentence  
console.log(city.split('-'));     //split the a line or name 


const url = "https://github.com/Ankushctrl" 
 console.log(url.replace('Ankushctrl','ankushBanotra')); // replaced ankushctrl to ankushbanotra

 console.log(url.includes('Ankushctrl'));//find a particular words , name or etc
 
 
