let test1 = [3, 4]
let test2 = [24, 48]

function divideAll(x, set) {
    let flag = true
    for (let item of set) {
        if (! (item % x === 0)) {
            return false
        }
    }
    return true
}

function divideAllInverse(x, set) {
    let flag = true
    for (let item of set) {
        if (! (x % item === 0)) {
            return false
        }
    }
    return true
}

function getTotalX(a, b) {
    a.sort()
    b.sort()
    let x = a[a.length - 1]
    let y = b[0]
    //console.log('X:' + x)
    //console.log('Y: ' + y)
    let divisoresA_List =[]
    let divisoresA = new Set()
    let divisoresFinal = []
    for (let i=x; i<=y; i++) {
        for (let j=0; j<a.length; j++) {
            if (i % a[j] === 0) {
                divisoresA.add(i)
            }
        }
    }
    //console.log(divisoresA)
    for (let div of divisoresA) {
        if (divideAll(div, b)){
            divisoresA_List.push(div)
        }
    }
    //console.log(divisoresA_List)
    for (let div of divisoresA_List){
        if ( divideAllInverse(div, a)) {
            divisoresFinal.push(div)
        }
    }
    //console.log(divisoresFinal)
    return divisoresFinal.length
}


console.log(getTotalX(test1, test2))
