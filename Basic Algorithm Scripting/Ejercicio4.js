function findLongestWordLength(str) {
    str = str.split(" ");
    let answer = [];
    for(let i = 0; i < str.length; i++){
      if(str[i].length > answer){
        answer = str[i].length
      }
    }
    return answer;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));