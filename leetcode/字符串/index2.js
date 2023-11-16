let str ='yessey'
function isPalindrome(s) {
    // const res = s.split('').reverse().join('')
    // return s === str

    
    return str ===s.split('').reverse().join('')
}
console.log(isPalindrome(str));