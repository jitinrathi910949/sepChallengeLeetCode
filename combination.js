
// Given an array of positive integers arr[] and a sum x, find all unique combinations in arr[] where the sum is equal to x. The same repeated number may be chosen from arr[] unlimited number of times. Elements in a combination (a1, a2, …, ak) must be printed in non-descending order. (ie, a1 <= a2 <= … <= ak).
// The combinations themselves must be sorted in ascending order, i.e., the combination with smallest first element should be printed first. If there is no combination possible the print "Empty" (without quotes).

let findValidArr = (candidates, target, finalRes, resArr, i, sum ) => {

    if(target === sum){
        finalRes.push([...resArr]);
        return
    }

    if(target > sum ) {
        return
    }
 


    while(i <candidates.length) {
        if(target >=(resArr[i] || 0)) {
            resArr.push(candidates[i]);
        }
        findValidArr(candidates, target+(candidates[i] || 0), finalRes, resArr,i, sum);
       
        i++;

        resArr.pop();
        
    }

}

var combinationSum = function(candidates, target) {
    let sortedCand = candidates.sort();
    
    let finalRes = [];
   findValidArr(sortedCand, 0, finalRes, [], 0, target);

console.log(finalRes)
};

combinationSum([2,3,6,7], 7);