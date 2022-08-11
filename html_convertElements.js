function convertHTML(str) {
    var expressions = {
    "&" : "&amp;",
    "<" : "&lt;" ,
    ">" : "&gt;",
    "\"" : "&quot;",
    "'" : "&apos;"
  
  };
  
  for(var i in expressions){
    str = str.replace(new RegExp(i, 'g'), expressions[i]);
  }
  
    return str;
  }
  
  let result = convertHTML("Dolce & Gabbana");
  console.log(result)