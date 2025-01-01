function createPattern(numberOfRows){
    for(let i=1;i<=numberOfRows; i++){
      for(let j=1; j<=i*2; j++){
        process.stdout.write("*");
      }
      console.log('\n');
    }
  }
  
createPattern(5);