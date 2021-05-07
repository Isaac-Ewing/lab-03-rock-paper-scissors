export function getRandomThrow() {
    let rThrow = Math.ceil(Math.random() * 3);

    if(rThrow = 1)
        return 'rock';
    if(rThrow = 2)
        return 'paper';
    if(rThrow = 3)
        return 'scissors';
}