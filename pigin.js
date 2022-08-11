function translatePigLatin(str) {
    let firstletter = str[0]
   let vowel ="aeiou";
 
   if(vowel.includes(firstletter) === true){
     return str + "way"
   }
 
   let i = 0;
   let cluster = ("");
   while(vowel.includes(str[i]) === false && i < str.length){
     cluster += str[i];
     i++;
   }
 
   
    return str.substring(i) + cluster + "ay"
   

 }
 
 let result = translatePigLatin("consonant");
 console.log(result)
