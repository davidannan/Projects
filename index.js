function destroyer(arr) {
    let input = arguments[0];
    let output = [];
    let destroy = [];
  
    for(let i = 1; i < arguments.length; i++){
      destroy.push(arguments[i])
    }
    for(let i = 0; i< input.length; i++){
      if(destroy.includes(input[i]) === false){
        output.push(input[i])
      }
    }
    return output;
  }
  
  let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  let result2 = destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")

  console.log(result);
  console.log(result2)