let おみくじ = randint(0, 5)
basic.forever(function () {
    if (おみくじ == 0) {
        basic.showString("凶")
    } else if (おみくじ == 1) {
        basic.showString("末")
    } else if (おみくじ == 2) {
        basic.showString("小")
    } else if (おみくじ == 3) {
        basic.showString("中")
    } else if (おみくじ == 4) {
        basic.showString("吉")
    } else {
        basic.showString("大")
    }
})
