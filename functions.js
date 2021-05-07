export function didUserWin(user, computer) {
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

    /*if (user - computer === -2)
        return ('win');
    if (user - computer === 2)
        return (-1);
    if ((user - computer) > 0)
        return (1);
    if ((user - computer) < 0)
        return (-1);
    if ((user - computer) === 0)
        return (0);*/
}

