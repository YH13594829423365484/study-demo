var validPalindrome = function(s) {
    let i = 0, j = s.length - 1
      let num = 0
    
      while (i < j) {
        if (s[i] === s[j]) {
          i++
          j--
        } else {
          if (num == 1) {
            return false
          } else {
            num++
            if (s[i+1] === s[j]) {
              i++
            } else {
              if (s[i] === s[j-1]) {
                j--
              }
            }
          }
          
        }
      }
      return true
    };