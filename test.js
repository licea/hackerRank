//DIAGONAL DIFFERENCE SOLUTION

function diagonalDifference(arr) {
    var dimension = arr.length
    var lrDiagonal = 0
    var rlDiagonal = 0
    var j = dimension - 1
    for (let i=0; i<dimension; i++) {
        lrDiagonal += arr[i][i]
        rlDiagonal += arr[i][j];
        j--;
    }
    return Math.abs(lrDiagonal - rlDiagonal)
}

//INTEGERS RATIO

function plusMinus(arr) {
    var positive = 0
    var negative = 0
    var zeros = 0
    for (var i=0; i<arr.length; i++) {
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
    for (var i=1; i<=n; i++) {
        console.log(repeatChar(n-i, ' ') + repeatChar(i, '#'))
    }
}

//MIN MAX SUM

function miniMaxSum(arr) {
    var minSum = Infinity
    var maxSum = 0
    
    for (var i=0; i<arr.length; i++) {
        let total = 0
        for (var j=0; j<arr.length; j++) {
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
