// Turning strings to binary code
function stringy(size) {
    let result = '';
        
    for (let i = 1; i <= size; i++) {
      if (i % 2 === 0) {
        result += '0';
      } else {
        result += '1';
      }
    }
    return result;
  }
      