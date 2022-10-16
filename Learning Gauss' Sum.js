// Learning Gauss' Sum

let ary = [1,2,3,4,5,6]

let sumContiguousArray = function(ary){
    const lastItem = ary[ary.length - 1]
    return lastItem * (lastItem + 1) / 2
};
// This is so cool. Way to find the sum without leaving constant time O(1) and going into O(n)