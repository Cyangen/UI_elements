function toCamelCase(str){
  if(str === ""){ 
    return ""
  }
  
  if(str.includes("_")){
    let splitStr = str.split("_");
    
    var newStr = splitStr.map(el =>{
      return el.charAt(0).toUpperCase() + el.slice(1);
    }).join("");
        
  }else if(str.includes("-")){
    let splitStr = str.split("-");
    
    var newStr = splitStr.map(el =>{
      return el.charAt(0).toUpperCase() + el.slice(1);
    }).join("");
  }
  
  if(str[0] !== str[0].toUpperCase()){
    return newStr.charAt(0).toLowerCase() + newStr.slice(1)
  }else {
     return newStr;
  }
}