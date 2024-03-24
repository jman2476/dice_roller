// dice rolling function
// for each die, make a array,
// then append a randomly generated number for each side the die has
// whichever index+1 corresponds to the highest number will give the roll
function diceRoller(sides) {
    let die = []

    for(let i = 0; i < sides; i++){
        die.push(Math.random())
    }

    const high = Math.max(...die)
    const roll = die.indexOf(high) + 1
    
    return roll
}

function bagOdice(quantity, sides) {
    let bag = []

    for(let i = 0; i < quantity; i++){
        bag.push(diceRoller(sides))
    }

    return bag
}


console.log(bagOdice(17,58))