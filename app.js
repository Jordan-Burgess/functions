// function reverseWordOrder(string){ //string = "How are you doing today"
//     let stringArray = string.split(" ")  //stringArray.length = 5 - 1 
//     let newString = ""

//     for(let i = stringArray.length - 1; i >= 0; i--){
//         newString = newString + stringArray[i] + " "
//     } 

//     return newString
// }

// console.log(reverseWordOrder("Jordan me Call"))

// function isOnetoNPandigital(num){
//     let numString = num.toString()
//     let n = numString.length
//     if(numString.length < 9){
//         return false
//     }

//     for(let i = 0; i < numString.length; i++){
//         for(let j = i+1; j < numString.length; j++){
//             if(numString[i] === numString[j]){
//                 return false
//             }
//         }
//     }

//     return numString
// }

function isOnetoNPandigital(num){
    let numArray = num.toString().split("").sort()  // ['1', '2', '3']
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] != i+1){
            return false
        }
    }
   
    return true

}

console.log(isOnetoNPandigital(312))   // 1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789


console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


function sumArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

function getTwoLengths(string1, string2){
    return [string1.length, string2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

function calculateCube(num){
    return num ** 3
}

console.log(calculateCube(5));

function isAVowel(letter){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(letter.toLowerCase())
}
console.log(isAVowel("a"));



if(names.length == 5){
    return true
}


if(names.length ==5) return true



for(let i=0; i<s.length; i++){
    if(s[i] == '(' && s[i+1] != ')'){
        return false
    }else if(s[i] == '{' && s[i+1] != '}'){
        return false
    }else if(s[i] == '[' && s[i+1] != ']'){
        return false
    }
    i++
}

function printLongestWord(arr){
    let longestWord = ''
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > longestWord.length){
            longestWord = arr[i]
        }
    }
    return longestWord
}