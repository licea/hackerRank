function intersection(setA, setB) {
  let _intersection = new Set()
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem)
    }
  }
  return _intersection
}

function getTotalX(a, b) {
    let x = a[a.length - 1]
    let y = b[0]
    let divisoresTmp =[]
    let divisores = new Set()
    for (let i=x; i<=y; i++) {
        if (i % a[0] === 0) {
            divisoresTmp.push(i)
        }
    }
    for (let i=x; i<=y; i++) {
        for (let j=1; j<a.length; j++) {
            if (i % a[j] === 0 && divisoresTmp.includes(i)) {
                divisores.add(i)
                //console.log(i)
            }
        }
    }
    let divisoresTmpB =[]
    let divisoresB = new Set()
    for (let i=x; i<=y; i++) {
        if (b[0] % i === 0) {
            divisoresTmpB.push(i)
            //console.log(i)
        }
    }
    for (let i=x; i<=y; i++) {
        for (let j=1; j<b.length; j++) {
            if (b[j] % i === 0 && divisoresTmpB.includes(i)) {
                divisoresB.add(i)
                //console.log(i)
            }
        }
    }
    const resultado = intersection(divisores, divisoresB)
    let counter = 0
    for (let item of resultado) {
        if (item >= x && item <= y) {
            counter++
        }
    }
    return counter
}
