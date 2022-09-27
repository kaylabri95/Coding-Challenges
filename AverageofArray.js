// Find average of any given array or return 0

function findAverage(array) {
  let arr = array.reduce((a,b) => a + b, 0)
  let arrAve = arr / array.length
  if(arrAve !== 0){
    return arrAve
  }else {
  return 0}
}