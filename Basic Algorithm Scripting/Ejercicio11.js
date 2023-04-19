function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for(let i =0; i < str.length; i++){
      str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
    }
    return str.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));