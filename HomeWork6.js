const fizzBuzz = (number) => {
    for(let i=1; i <= number; i++){
      if(isPrime(i) === true){
        console.log("prime")
      } else{
        if( i%15 ===0 ){
          console.log("FizzBuzz")
        } else if(i%3 ===0){
          console.log("Fizz")
        } else if(i%5 ===0){
          console.log("Buzz")
        }
        else{
          console.log(i)
        }
      }
    }
  }
  
  const isPrime = (number) =>{
    for(let i = 2; i < number; i++){
      if(number % i === 0) {
        return false
      }
    }
      return number !== 1 && number !== 0;
  }
  
  
  console.log(fizzBuzz(100));