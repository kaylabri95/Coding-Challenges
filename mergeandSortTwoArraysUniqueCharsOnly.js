function mergeArrays(arr1, arr2) {

  let joinedArr = arr1.concat(arr2)
  joinedArr.sort((a, b) => a - b)
//   return joinedArr.filter((num, index) => {
//       return num !== joinedArr[index + 1]
// })
  
  let filteredArr = [...new Set(joinedArr)];
  return filteredArr
}