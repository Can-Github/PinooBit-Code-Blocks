# PinooBit Code Blocks

We developed this extension to support the micro:bit [Pinoobit shield](https://www.pinoo.io/pages/pinoobit?_pos=1&_sid=55f283fe6&_ss=r)

The PinooBit allows you to use each of the GPIO pins available on Microbit actively and easily.
When users add this extension, a menu called PinooBit will automatically open between the block tabs.
With this extension, you will be able to easily code and use sensors compatible with PinooBit.


> View this page at [https://can-github.github.io/PinooBit-Code-Blocks/](https://can-github.github.io/PinooBit-Code-Blocks/)

## Blocks preview

```
basic.forever(function () {
    pinooBit.led(DigitalPin.P0, 1)
    basic.pause(500)
    pinooBit.led(DigitalPin.P0, 0)
    basic.pause(500)
})
```

With this code blocks, our leds looks like blinking. First code is; pick your LED's connecting DigitalPin number and set value 1 or 0. If you pick 1 LED is lights up or pick 0 LED is off.

After first code add some delay with pause code block. And again pick LED set code. If first code is 0, you set this second LED code for 1. After that add delay. With this codes, our leds blinking.

This code is just one example. 


## Set Led Value

There are 3 external LED modules that can be checked: `Red`, `Yellow` and `Green`.

```
export function led(entryvalue: DigitalPin, ledvalue: number) {
            pins.digitalWritePin(entryvalue, ledvalue)
    }
```


## Set Buzzer Value

There are 2 value for Buzzer: `0` and `1`.

```
export function buzzer(entrybuzzer: DigitalPin, buzzervalue: number) {
            pins.digitalWritePin(entrybuzzer, buzzervalue)
    }
```

## Set Servo Motor Value

It takes angle values between `0` and `180` degrees.

```
export function servo(girisservo: DigitalPin, servoDegeri: number) {
            pins.digitalWritePin(girisservo, servoDegeri)
    }
```

## Read PIR Module Value;

There are 2 values for PIR: `0` and `1`.

```
export function pir(entrypir: DigitalPin) {
            return pins.digitalReadPin(entrypir);
    }
```

## Read Potentiometer Module Value;

It takes potentiometer values between `0` and `1023`.

```
export function pot(entrypot: AnalogPin) {
            return pins.analogReadPin(entrypot);
    }
```

## Read Joystick Module Value;

It takes joystick values: `0` betwwen `1023`. These values must be retrieved using separate code blocks for the x and y coordinates.

```
export function joystickx(entryjoyx: AnalogPin) {
            return pins.analogReadPin(entryjoyx);
    }
export function joysticky(entryjoyy: AnalogPin) {
            return pins.analogReadPin(entryjoyy);
    }
```

## Read Soil Moisture Module Value;

It takes soil moisture values between `0` and `1023`.   

```
export function tvn(entrytvn: AnalogPin) {
            return pins.analogReadPin(entrytvn);
    }
```

## Read Water Level Module Value;

It takes water level values between `0` and `1023`

```
export function water(entrywater: AnalogPin) {
            return pins.analogReadPin(entrywater);
    }
```

## Read LDR Module Value;

It takes ambient light values between `0` and `1023` 

```
export function isik(entryldr: AnalogPin) {
            return pins.analogReadPin(entryldr);
    }
```

## Read Ultrasonic Distances Module Value;

It takes values between `0` and `400` distance from the obstacle

```
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
 ```
 
 ## Set Tilt Value

There are 2 values for Tilt Sensor: `0` and `1`.

```
export function led(entryvalue: DigitalPin, ledvalue: number) {
            pins.digitalWritePin(entryvalue, ledvalue)
    }
```

#### Metadata (used for search, rendering)

* for PXT/microbit
