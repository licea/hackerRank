//DIAGONAL DIFFERENCE SOLUTION

function diagonalDifference(arr) {
    let dimension = arr.length
    let lrDiagonal = 0
    let rlDiagonal = 0
    let j = dimension - 1
    for (let i=0; i<dimension; i++) {
        lrDiagonal += arr[i][i]
        rlDiagonal += arr[i][j];
        j--;
    }
    return Math.abs(lrDiagonal - rlDiagonal)
}

//INTEGERS RATIO

function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zeros = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            zeros++
        }
    }
    positive /= arr.length
    negative /= arr.length
    zeros /= arr.length
    console.log(positive)
    console.log(negative)
    console.log(zeros)
}

//STAIRCASE

function repeatChar(n, x) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += x;
  }
  return result;
}

function staircase(n) {
    for (let i=1; i<=n; i++) {
        console.log(repeatChar(n-i, ' ') + repeatChar(i, '#'))
    }
}

//MIN MAX SUM

function miniMaxSum(arr) {
    let minSum = Infinity
    let maxSum = 0
    
    for (let i=0; i<arr.length; i++) {
        let total = 0
        for (let j=0; j<arr.length; j++) {
            if (i != j) {
                total += arr[j]
            }
        }
        if (total > maxSum) {
            maxSum = total
        }
        if (total < minSum) {
            minSum = total
        }
    }
    console.log(minSum + ' ' + maxSum)
}

//BIRTHDAY CAKE

function findMax(list) {
    let max = 0
    for (let i=0; i<list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }
    return max
}

function birthdayCakeCandles(candles) {
    let max = findMax(candles)
    let total = 0
    for (let i=0; i<candles.length; i++) {
        if (candles[i] == max) {
            total++
        }
    }
    return total
}

// TIME CONVERSION

function timeConversion(s) {
    let hour = s.slice(0,2)
    let minutes = s.slice(3,5)
    let seconds = s.slice(6,8)
    let ampm = s.slice(-2)
    let newHour = parseInt(hour)
    if (ampm === 'PM' && newHour < 12) {
        newHour += 12
    }
    if (ampm === 'AM' && newHour === 12) {
        newHour = 0
    }
    if (newHour < 10) {
        newHour = '0' + newHour
    }
    return newHour + ':' + minutes + ':' + seconds
}
