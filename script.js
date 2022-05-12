let amout = +prompt('newta misol iwlisz?')
let min1 = +prompt('kicik qimat!')
let min2 = +prompt('katta qiymat!')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i = 0; i < amout; i++) {
    let exnum1 = random(1, 10)
    let exnum2 = random(1, 10)
    // console.info(exnum1,exnum2)

    let symbol = random(1,4)
 
    answer = 0
 
    let Symbol = ''

    if(symbol === 1) {
        answer = exnum1 + exnum2
        Symbol = ' + '
    }else if(symbol === 2) {
        answer = exnum1 - exnum2
        Symbol = ' - '
    }else if(symbol === 3) {
        answer = exnum1 * exnum2
        Symbol = ' * '
    }else if (symbol === 4) {
        answer = exnum1 / exnum2
        Symbol = ' / '
    }

    let pr = exnum1 + Symbol + exnum2
    let userPr = +prompt(pr)
    let isExample = userPr === answer ? ' Sizning javob togri ' + userPr: ' Sizning javob notogri ' + userPr + ' togri jasvob ' + answer
    console.info(pr + ' : ' + isExample)


}


// let str = prompt ('Ismingizni kiriting!')
// let number1 = +prompt('Tugulgan yilingizni kiriting!')
// let number2 = +prompt('Xozirgi yil!')

// // alert('sizning ismingiz' + str)

// function mat(a, b ) {
//     let sum = b - a
//     return sum

// }

// alert('Sizning ismingiz ' + str + ' tuglgan yilingiz ' + mat(number1,number2))


