function bouncer(arr) {
    return arr.filter(element => Boolean (element));
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));