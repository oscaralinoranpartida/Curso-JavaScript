function find(num1, num2) {
    let lowNum = Math.min(num1, num2);
    let higNum = Math.max(num1, num2);
    for(let i = higNum; i <= higNum * lowNum; i += higNum){
      if(i % lowNum === 0){
        return i
      }
    }
  }
  
  
  function smallestCommons(arr){
    let lowNum = Math.min(...arr);
    let higNum = Math.max(...arr);
    let SCM = find(...arr)
    for(let j = lowNum; j <= higNum; j++){
      if(SCM % j !== 0){
        SCM = find(SCM, j);
      }
    }
    return SCM;
  }
  
  console.log(smallestCommons([1,5]));