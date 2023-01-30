// 1 = гриб
// 2 = гриба
// 5 = грибов

// foo(1) 
number = 1

function foo (number, one, two, five) {
    const n = number;
    n %= 100;
    if (n >= 1 && n<= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    console.log(n)
}
console.log(foo(6))

