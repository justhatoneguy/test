def on_button_pressed_a():
    RobotCar_Keyestudio.Motors.move(50)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    RobotCar_Keyestudio.Leds.show_red()
basic.forever(on_forever)
