// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.


var largestTimeFromDigits = function(arr) {
    let validHr1 = [];
    let validHr2 = [];
    
    let validMM1 = [];
    let validMM2 = [];
    let isValid = false;
    let tempArr = [...arr];
    
    
    
    arr.forEach((val,index) => {
        if(val<=2){
            validHr1.push(index)
        }
        if(val<=9) {
            validHr2.push(index);
        }
        if(val <=5){
            validMM1.push(index);
            
        }
        if(val <=9) {
            validMM2.push(index);
        }   
    });
    
    if(validHr1.length === 0) {
        return '';
    }
    
    // let validTime = getValidTime(validHr1, validHr2, validMM1, validMM2, isValid, arr);
    let validTime = {};
    let result =null;
    [validHr1, validHr2, validMM1, validMM2].forEach((tempTimeArr, index) => {
        if(index=== 1 && validTime[0] === 2) {
            tempTimeArr = tempTimeArr.filter(val => arr[val] <=3);
        }
        const {maxInd, tempValArr} = getValidTime(tempTimeArr, tempArr);
        if(maxInd === ''){
            result = "";
        
        } else {
            validTime[index] = arr[maxInd];
            tempArr = tempValArr;
   
        }
    });
    
    if(result === ''){
        return ''
    } else {
        result = `${validTime[0]}${validTime[1]}:${validTime[2]}${validTime[3]}`;
    }

    console.log("result is", result)
    
};

const getValidTime = (arr, tempArr) => {
    
    let tempTimeArr = arr;
    let tempValArr = tempArr;
    
    
    let maxInd = maxIndex(tempTimeArr, tempValArr);
    
    if(maxInd !== null) {
        tempValArr[tempTimeArr[maxInd]] = null;
        return {maxInd: tempTimeArr[maxInd], tempValArr};
    }
    else {
        return {maxInd: '', tempValArr}
    }
    
  
}

const maxIndex = (indArr, arr) => {
    let tempVal = 0;
    let tempInd = null;
    indArr.forEach((val, ind) => {
        if(arr[val] !==null && arr[val] >= tempVal) {
            tempVal = arr[val];
            tempInd = ind;
        }
    });
    return tempInd
}

largestTimeFromDigits([1,2,3,4]);