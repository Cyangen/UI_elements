function XO(str) {
  let arrayString = str.toLowerCase().split("");
  let countX = 0;
  let countO = 0;
  
  arrayString.map((el) =>{
    if(el === "x"){
      return countX += 1;
    }else if (el === "o"){
      return countO += 1;
    }
  });
  
  return countX === countO ? true : false
}