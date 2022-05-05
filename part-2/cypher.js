 let phrase = "I love cryptography!";
 
 const alph = "abcdefghijklmnopqrstuvwxyz! "
 const key = "9876543210zyxwvutsrqponmlkj#";


 function encrypt(word) {
     word = word.toLowerCase()
     let encrypted = [];
     let alphArr = alph.split("");
     //convert with key
     for(i = 0; i < word.length; i++) {
        let index
        alphArr.filter((ele, ind) => {
            if(ele === word[i]) {
                index = ind
                return true
            } else {
                return false
            }
        })
        encrypted.push(key[index])
     }
     //split in half and join
     let firstHalf = encrypted.splice(0, Math.ceil(phrase.length/2))
     encrypted = encrypted.concat(firstHalf)
     //reverse it
     encrypted = encrypted.reverse().join("")

     return encrypted
 }


console.log(encrypt(phrase))