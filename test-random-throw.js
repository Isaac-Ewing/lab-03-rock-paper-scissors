import { getRandomThrow } from './get-random-throw.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    let i = 1;
    const expected = 0;
    const computer = getRandomThrow();
    if (computer === 'rock')
        computer = 1;
    if (computer === 'paper')
        computer = 2;
    if (computer === 'scissors')
        computer = 3;
    while (i < 4) {
        if (i === computer) {
            expected = i;
            i++;
        }
    }
    expect.equal(computer, expected);
});