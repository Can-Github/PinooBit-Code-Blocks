namespace kodlar {

    //% block
    export function mesafe_pini_p6() {
    pins.digitalWritePin(DigitalPin.P6, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P6, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P6, 0)
    mesafe = pins.pulseIn(DigitalPin.P5, PulseValue.High) / 58
    basic.showNumber(mesafe)
    basic.pause(100)
    }
}
namespace kodlar {

    //% block
    export function mesafe_pini_p8() {
    pins.digitalWritePin(DigitalPin.P6, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P6, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P6, 0)
    mesafe = pins.pulseIn(DigitalPin.P5, PulseValue.High) / 58
    basic.showNumber(mesafe)
    basic.pause(100)
    }
}