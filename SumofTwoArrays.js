// This sums two array
function arrayPlusArray(arr1, arr2) {
  let arr3 = arr1.concat(arr2)
  return arr3.reduce((a,b)=>a+b, 0); //something went wrong
}