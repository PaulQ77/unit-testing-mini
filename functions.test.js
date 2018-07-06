const functions = require('./functions');


test('returnTwo() should return 2.', () => {
    expect( functions.returnTwo() ).toEqual( 2 );
});

test('greeting() should return a greeting based on name', () => {
    expect( functions.greeting ('Paul') ).toEqual('Hello, Paul');
    expect( functions.greeting('James') ).toEqual('Hello, James');
});

describe('Math functions:', () => {

test('add() should return a sum based on two number parameters', () => {
    expect( functions.add(1, 2) ).toEqual(3);
    expect( functions.add(5, 9) ).toEqual(14);
});

test('subtract() should return a difference based on two number parameters', () => {
    expect( functions.subtract(5,2) ).toEqual(3);
    expect( functions.subtract(20,10) ).toEqual(10);
});

test('multiply() should return a product based on two number parameters', () => {
    expect( functions.multiply(3,3) ).toEqual(9);
    expect( functions.multiply(4,3) ).toEqual(12);
});

test('divide() should return a quotient based on two number parameters', () => {
    expect( functions.divide(10,2) ).toEqual(5);
    expect( functions.divide(6,3) ).toEqual(2);
});
});
