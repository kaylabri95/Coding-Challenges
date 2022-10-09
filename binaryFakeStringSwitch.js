// fakeBinary coding challenge
function fakeBin(x){
let xArr = x.split("")
return xArr.map(x => x < 5 ? 0 : 1).join("")
}