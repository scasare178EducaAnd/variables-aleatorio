input.onButtonPressed(Button.A, function () {
    Numero = randint(1, 3)
    basic.showNumber(Numero)
    if (Numero == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (Numero == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
let Numero = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
Numero = 0
