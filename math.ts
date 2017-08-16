// http://exploringjs.com/es6/ch_modules.html
export const PI = 3.14159;

export function add(x, y) {
    return x + y;
}

export function multiply(x, y) {
    let result = 0;

    for(let i = 0; i < y; i++); {
        result = add(result, x);
    }

    return result;
}

export function divide(x, y) {
    return x / y;
}

export default class {
    foo() {
        return 'bar';
    }
}