// const name="saba";
// const doing="student";
// const love="swimming";

// function abtMe(name, doing, love){
//     console.log("i am " + name);
//     console.log("i am " + doing);
//     console.log("i love " + love);
    
// }

// abtMe(name, doing, love);


// function NumSum(a,b){
//     const multiply = a*b;
//     const minus = multiply-10;
//     return minus;
// }

// console.log(NumSum(5,5));
 
 function formatPrice(price, currency){
    if (currency==="GEL") {
    return price + " " + "₾";
    }
    else if (currency==="USD") {
        return price + " " + "$";
    }
    else{
        return price + " " + "€";
    }
 }

console.log(formatPrice(23,"USD"));
 