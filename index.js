function calculateMoney(ticketSale){
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    result = (ticketSale * 120) - ((50*8) + 500);
    return result;
}


function checkName(name){
    if (typeof name !== 'string') {
        return "invalid";
    }

    const last = name.charAt(name.length - 1).toLowerCase();
    const lastLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (lastLetter.includes(last)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}
