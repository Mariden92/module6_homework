function interval(first, second) {
    let number = 5;
  
    let func = setInterval(function() {
      console.log(number);
      if (number == 15) {
        clearInterval(func);
      }
      number++;
    }, 1000);
  }

  interval(5, 15);