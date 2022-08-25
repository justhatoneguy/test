input.onButtonPressed(Button.A, function () {
    RobotCar_Keyestudio.Motors.move(50)
})
led.enable(true)
RobotCar_Keyestudio.Leds.showRed()
basic.forever(function () {
    basic.showLeds(`
        # # . . #
        . # . # .
        . # # . .
        # # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
