function uniteUnique(...arr) {
    let answer = [];
    for(let arrays of arr){
      for(let element of arrays){
        if(!answer.includes(element)){
          answer.push(element);
        }
      }
    }
    return answer;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));