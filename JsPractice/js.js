// HOF

function add(a, b) {
    return a+b
}

function subs(a, b) {
    return a-b
}

function calculator(num1, num2, operator) {
    return operator(num1,num2)
};

let addition = calculator(10, 20, add);

console.log(addition);
