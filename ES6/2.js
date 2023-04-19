const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  let temp = s[0];
  s[0] = s[2];
  s[2] = s[1];
  s[1] = temp;

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();