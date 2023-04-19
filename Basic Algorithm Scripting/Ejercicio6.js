function confirmEnding(str, target) {
    str = str.slice(str.length - target.length)
    if(str === target){
      return true
    }
    return false;
  }
  
  console.log(confirmEnding("Bastian", "n"));