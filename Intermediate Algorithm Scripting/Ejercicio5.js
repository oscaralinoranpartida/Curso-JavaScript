function spinalCase(str) {
    return str.replace(/\s|_/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));