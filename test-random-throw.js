import { getRandomThrow } from './get-random-throw.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    let i = 1;
    const expected = 0;
    const actual = getRandomThrow();
    while (i < 4) {
        if (i === actual) {
            expected = i;
            i++;
        }
    }
    expect.equal(actual, expected);
});