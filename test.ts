// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function () {
    pinooBit.led(DigitalPin.P0, 0)
    basic.pause(500)
    pinooBit.led(DigitalPin.P0, 1)
    basic.pause(500)
})
