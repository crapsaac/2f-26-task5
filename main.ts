let number = 0
let number_20 = 0
input.onButtonPressed(Button.A, function () {
    number = 0
    number_20 = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(number, number_20)
            basic.pause(200)
            number += 1
        }
        number = 0
        number_20 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    number = 0
    number_20 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(number, number_20)
        basic.pause(200)
        number += 1
    }
    for (let index = 0; index < 2; index++) {
        number_20 += 1
        for (let index = 0; index < 6; index++) {
            led.plot(number, number_20)
            basic.pause(200)
            number += -1
        }
        number_20 += 1
        for (let index = 0; index < 6; index++) {
            led.plot(number, number_20)
            basic.pause(200)
            number += 1
        }
    }
})
