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

function deleteInvalids(array) {

    if (!Array.isArray(array)) {
      return "Input must be an array";
    }
  
    const numberArray = [];
  
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
  
      if (typeof value === 'number' && isFinite(value)) {
        numberArray.push(value);
      }
    }
  
    return numberArray;
  }

  function password(Obj) {
    if (typeof Obj !== 'object' || Obj === null) {
      return "invalid";
    }
  
    const { name, birthYear, siteName } = Obj;
    if (!name || !birthYear || !siteName) {
      return "invalid";
    }

    const password = `${siteName}#${name}@${birthYear}`;
  
    return password;
  }
  