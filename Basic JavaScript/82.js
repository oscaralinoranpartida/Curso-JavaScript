let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count ++;
    break;
  case 7:
  case 8:
  case 9:
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count --;
    break;
  // Cambia solo el código encima de esta línea
}
if(count>0){
    return `${count} Bet`
  }else{
      return `${count} Hold`
  }
  }