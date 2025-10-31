//Othman Igbaria
//Younis Younis

let arr = [0,2,3,0,4,5,0];
let zero = 0 ;

for (let i = 0 ; i < arr.length ; i ++){
zero += arr[i] === 0 ? 1 : 0 ;
}
console.log(zero);