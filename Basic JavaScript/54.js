
function myLocalScope() {
    // you shouldn't need to edit this line
    var myVar = 'hello Reboot'
    
    console.log('inside myLocalScope', myVar);
  }
  
  
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);