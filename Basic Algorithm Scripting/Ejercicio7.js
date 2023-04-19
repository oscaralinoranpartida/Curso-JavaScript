function repeatStringNumTimes(str, num) {
    let answer = "";
    while (num > 0){
      answer += str;
      num--
    }
    return answer;
  }
  
  console.log(repeatStringNumTimes("abc", 3));