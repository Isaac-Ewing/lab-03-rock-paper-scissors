import { didUserWin } from './functions.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    const expected = 'rock';
    const actual = didUserWin(1, 3);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = 'draw';
    const actual = didUserWin(3, 3);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = 'lose';
    const actual = didUserWin(3, 1);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = 'lose';
    const actual = didUserWin(3, 2);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = 'lose';
    const actual = didUserWin(2, 3);
    expect.equal(actual, expected);
});