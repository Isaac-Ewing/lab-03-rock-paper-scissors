import { didUserWin } from './functions.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    const expected = 1;
    const actual = didUserWin(1, 3);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = 0;
    const actual = didUserWin(3, 3);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = -1;
    const actual = didUserWin(3, 1);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = 1;
    const actual = didUserWin(3, 2);
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = -1;
    const actual = didUserWin(2, 3);
    expect.equal(actual, expected);
});