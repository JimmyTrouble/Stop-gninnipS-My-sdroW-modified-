// Write a function that takes in a string 
// of one or more words, and returns the same string, 
// but with all five or more letter words have the first and last letter swaped


 const words = "Hey fellow warriors";


spinWords(words);

function spinWords(string){

    let arrReturn = [];

    let arr = string.split(' ');
    for (i = 0; i < arr.length; i ++){
        let word = arr[i];
        if(word.length >= 5){
            let wordArr = word.split('');
            let other = wordArr;
            let first = wordArr.shift(); 
            let last = wordArr.pop();
            
            wordArr.splice(0,0, last);
            wordArr.splice(wordArr.length, 0, first)
            
            arrReturn.push(wordArr.join(''));
       } else{
        arrReturn.push(arr[i]);
       }
    }

    console.log(arrReturn.join(' '));
  
}


