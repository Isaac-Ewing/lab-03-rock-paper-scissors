export function didUserWin(user, computer) {

    if (computer === 'rock')
        computer = 1;
    if (computer === 'paper')
        computer = 2;
    if (computer === 'scissors')
        computer = 3;

    if (user - computer === -2)
        return ('win');
    if (user - computer === 2)
        return ('lose');
    if ((user - computer) > 0)
        return ('win');
    if ((user - computer) < 0)
        return ('lose');
    if ((user - computer) === 0)
        return ('draw');
}




