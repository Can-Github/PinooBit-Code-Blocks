//% color="#18D4D6"
namespace pinooBit {
let distance = 0
    //% block="read ultrasonic distance sensor entry pin $entry out pin $out"
    export function distances(entry: DigitalPin, out: DigitalPin) {
    pins.digitalWritePin(entry, 0)
    control.waitMicros(2)
    pins.digitalWritePin(entry, 1)
    control.waitMicros(10)
    pins.digitalWritePin(entry, 0)
    distance = pins.pulseIn(entry, PulseValue.High) / 58
    basic.showNumber(distance)
    basic.pause(100)
    }
    //% color="#18D4D6"
    //% block="set led module pin %entryled value %ledvalue"
    //% ledvalue.min=0 ledvalue.max=1
    export function led(entryvalue: DigitalPin, ledvalue: number) {
            pins.digitalWritePin(entryvalue, ledvalue)
    }
    //% block="set buzzer module pin %entrybuzzer value %buzzervalue"
    //% buzzervalue.min=0 buzzervalue.max=1
    export function buzzer(entrybuzzer: DigitalPin, buzzervalue: number) {
            pins.digitalWritePin(entrybuzzer, buzzervalue)
    }
    //% block="set servo motor module pin %entryservo value %servovalue"
    //% servovalue.shadow="protractorPicker"
    export function servo(entryservo: DigitalPin, servovalue: number) {
            pins.digitalWritePin(entryservo, servovalue)
    }
    //% block="read motion detection(PIR) module pin %entrypir value"
    export function pir(entrypir: DigitalPin) {
            return pins.digitalReadPin(entrypir);
    }
    //% block="read potentiometer module pin %entrypot value"
    export function pot(entrypot: AnalogPin) {
            return pins.analogReadPin(entrypot);
    }
    //% block="read joystick module x pin %entryjoyx value"
    export function joystickx(entryjoyx: AnalogPin) {
            return pins.analogReadPin(entryjoyx);
    }
    //% block="read joystick module y pin %entryjoyy value"
    export function joysticky(entryjoyy: AnalogPin) {
            return pins.analogReadPin(entryjoyy);
    }
    //% block="read soil moisture module pin %entrytvn value"
    export function tvn(entrytvn: AnalogPin) {
            return pins.analogReadPin(entrytvn);
    }
    //% block="read water level module pin %entrywater value"
    export function water(entrywater: AnalogPin) {
            return pins.analogReadPin(entrywater);
    }
    //% block="read ldr module pin %entryldr value"
    export function isik(entryldr: AnalogPin) {
            return pins.analogReadPin(entryldr);
    }
    //% block="read tilt and impact module pin %entrytilt value"
    export function tilt(entrytilt: DigitalPin) {
            return pins.digitalReadPin(entrytilt);
    }
}
