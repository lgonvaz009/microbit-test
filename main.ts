input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("¡Hola!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
