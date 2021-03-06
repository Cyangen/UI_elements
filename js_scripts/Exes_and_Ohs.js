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



//best practices
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}


function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}