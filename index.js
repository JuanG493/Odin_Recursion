//  merge Sort 
function mergeSort(list) {
    let firsMerge = []
    if (list.length == 1) {
        return [list[0]]
    }
    else if (list.length <= 2) {
        return list[0] < list[1] ? list : [list[1], list[0]]
    }
    else if (list.length > 2) {
        let divisor = Math.round(list.length / 2)
        let splitDiv = [list.slice(0, divisor), list.slice(divisor)]
        for (let subL of splitDiv) {
            let margeA = mergeSort(subL)
            firsMerge.push(margeA)
        }
    }
    let filterArry = cleanFilter(firsMerge)
    return filterArry

}
function cleanFilter(arryElm) {
    let result = [];
    while (arryElm[0].length != 0 && arryElm[1].length != 0) {
        let [a, b] = arryElm
        let minVal = a[0] < b[0] ? [a[0], 'a'] : [b[0], 'b']
        result.push(minVal[0])
        eval(`${minVal[1]}`).shift()
    }
    let arrywithElm = arry[0] || arryElm[1]
    let newRes = result.concat(arrywithElm)
    return newRes
}

//  returns an array containing that many numbers from the fibonacci sequence assume n > 0 using loop
function finNumbers(n) {
    let result = [0, 1]
    while (n > 2) {
        let tst = result[result.length - 2] + result[result.length - 1]
        result.push(tst)
        n = n - 1
    }
    return result
}

//  returns an array containing that many numbers from the fibonacci sequence assume n > 0 using Recursion
function fibT(n) {
    if (n <= 1) {
        return [0, 1]
    } else {
        let kaiser = fibT(n - 1)
        let hermes = kaiser[kaiser.length - 2] + kaiser[kaiser.length - 1]
        kaiser.push(hermes)
        return kaiser
    }
}

// fibonacci number at n position using recurtion an comsuming all the memory
function fibNumbers(n) {
    return n >= 3 ? fibNumbers(n - 1) + fibNumbers(n - 2) : 1
}