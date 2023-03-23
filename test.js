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

//Area Solver

const getArea = (shape, values) => {
    let area = -1
    switch(shape) {
        case "square":
            area = Math.pow(values[0], 2);
            break;
        case "rectangle":
            area = values[0] * values[1];
            break;
        case "circle":
            area = 3.14 * Math.pow(values[0], 2);
            break;
        case "triangle":
            area = 0.5 * values[0] * values[1];
            break;
        default:
            break;
    }
    return area;
}

// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = async (shape, values) => {
    const area = getArea(shape, values)
    if (area == -1) {
        throw new Error(-1)
    }
    else{
        return Math.floor(area * 100) / 100
    } 
}

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = async (shapes, values_arr) => {
    try {
        const areas = await Promise.all(
        shapes.map((shape, index) => calculateArea(shape, values_arr[index]))
        )
        return areas;
    }
    catch {
        return [-1]
    }
}

// Grading students

function gradingStudents(grades) {
    let array = [];
    for (const grade of grades) {
        if (grade >= 38) {
            if (grade % 5 == 4) {
                array.push(grade + 1)
            } else if (grade % 5 == 3) {
                array.push(grade + 2)
            } else {
                array.push(grade)
            }
        } else {
            array.push(grade)
        }
    }
    return array
}

// COUNTING APPLES AND ORANGES

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple_counter = 0
    let orange_counter = 0
    for (let apple of apples) {
        let apple_fall = a + apple
        if (apple_fall >= s && apple_fall <= t) {
            apple_counter++
        }
    }
    console.log(apple_counter)
    for (let orange of oranges) {
        let orange_fall = b + orange
        if (orange_fall >= s && orange_fall <= t) {
            orange_counter++
        }
    }
    console.log(orange_counter)
}
