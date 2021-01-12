const sentence = "hello there from lighthouse labs";
let timeAdder = 0;
for(const index in sentence){


  setTimeout(()=> {
    process.stdout.write(sentence[index])
  }, 1000 + timeAdder)
  
  if(Number(index) === sentence.length - 1){
    setTimeout(()=> {
      process.stdout.write('\n')
    }, 1000 + timeAdder)
  }

  timeAdder += 50
}
