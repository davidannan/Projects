function pairElement (str){
let output = [];
for(i = 0; i < str.length; i++){
    if(str[i] == "A"){
        output.push(["A", "T"]);
    }
    if(str[i] == "T"){
        output.push("T", "A");
    }
    if(str[i] == "G"){
        output.log("G", "C");
    }
    if (str[i] == "C"){
        output.push("C" "G");
    }

}

return output 
}
let result = pairElement("ATCGA");
console.log(result)