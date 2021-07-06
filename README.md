# PinooBit Code Blocks

We developed this repo to use Microbit more easily.

We are about to develop a new shield called PinooBit in order to use each of the GPIO pins available on Microbit actively and easily.
When users add this extension, a scheme called PinooBit will automatically open between the block tabs.
With this estension, you will be able to easily code and use sensors compatible with PinooBit.
It's much easier for kids to learn to code with PinooBit and this extension.

You can purchase PinooBit at this link https://www.pinoo.io/pages/pinoobit?_pos=1&_sid=55f283fe6&_ss=r

> Open this page at [https://can-github.github.io/PinooBit-Code-Blocks/](https://can-github.github.io/PinooBit-Code-Blocks/)

## Blocks preview

basic.forever(function () {
    pinooBit.led(DigitalPin.P0, 1)
    basic.pause(500)
    pinooBit.led(DigitalPin.P0, 0)
    basic.pause(500)
})

With this code blocks, our leds looks like blinking. First code is; pick your LED's connecting DigitalPin number and set value 1 or 0. If you pick 1 LED is lights up or pick 0 LED is off.
After first code add some delay with pause code block. And again pick LED set code. If first code is 0, you set this second LED code for 1. After that add delay. With this codes, our leds blinking.

This code just one example. 


## Set Led Value

There are 3 external led modules that can be checked: `Red`, `Yellow` and `Green`.
Use Led Module easily;

export function led(entryvalue: DigitalPin, ledvalue: number) {
            pins.digitalWritePin(entryvalue, ledvalue)
    }
    
With this code we can use LED with our PinooBit shield. In this way coding Micro:bit easily.


## Set Buzzer Value

There are 2 value for Buzzer: `1` and `2`.
Use Buzzer Module easiy;

export function buzzer(entrybuzzer: DigitalPin, buzzervalue: number) {
            pins.digitalWritePin(entrybuzzer, buzzervalue)
    }
    
With this code we can use Buzzer with our PinooBit shield. In this way coding Micro:bit easily.


## Set Servo Motor Value

It takes values between 0 and 180 angle values: `0` betwwen `180`.
Use Servo Module easily;

export function servo(girisservo: DigitalPin, servoDegeri: number) {
            pins.digitalWritePin(girisservo, servoDegeri)
    }
    
With this code we can use Servo Motor with our PinooBit shield. In this way coding Micro:bit easily.


## Read PIR Module Value;

There are 2 value for PIR: `1` and `2`.
Use PIR Module easily;

export function pir(entrypir: DigitalPin) {
            return pins.digitalReadPin(entrypir);
    }
    
With this code we can use Servo Motor with our PinooBit shield. In this way coding Micro:bit easily.


## Read Potentiometer Module Value;

It takes values between 0 and 1023 potentiometer values: `0` betwwen `1023`.
Use Potentiometer Module easily;

export function pot(entrypot: AnalogPin) {
            return pins.analogReadPin(entrypot);
    }

With this code we can use Potentiometer with our PinooBit shield. In this way coding Micro:bit easily.


## Read Joystick Module Value;

It takes values between 0 and 1023 joytisck values: `0` betwwen `1023`. These values must be retrieved using separate code blocks for the x and y coordinates.
Use Joystick Module easily;

export function joystickx(entryjoyx: AnalogPin) {
            return pins.analogReadPin(entryjoyx);
    }
export function joysticky(entryjoyy: AnalogPin) {
            return pins.analogReadPin(entryjoyy);
    }

With this code we can use Joystick X and Y coordinate with our PinooBit shield. In this way coding Micro:bit easily.


## Read Soil Moisture Module Value;

It takes values between 0 and 1023 soil moisture values: `0` betwwen `1023`.
Use Soil Moisture Module easily;    

export function tvn(entrytvn: AnalogPin) {
            return pins.analogReadPin(entrytvn);
    }

With this code we can use Soil Moisture with our PinooBit shield. In this way coding Micro:bit easily.


## Read Water Level Module Value;

It takes values between 0 and 1023 water level values: `0` betwwen `1023`.
Use Water Level Module easily;

export function water(entrywater: AnalogPin) {
            return pins.analogReadPin(entrywater);
    }

With this code we can use Water Level with our PinooBit shield. In this way coding Micro:bit easily.


## Read LDR Module Value;

It takes values between 0 and 1023 ambient light values: `0` betwwen `1023`.
Use LDR Module easily;

export function isik(entryldr: AnalogPin) {
            return pins.analogReadPin(entryldr);
    }

With this code we can use LDR with our PinooBit shield. In this way coding Micro:bit easily.


## Read Ultrasonic Distances Module Value;

It takes values between 0 and 400 distance from the obstacle: `0` betwwen `400`.
Use Ultrasonic Distances Module easily;

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
 
With this code we can use Ultrasonic Distances with our PinooBit shield. In this way coding Micro:bit easily.


#### Metadata (used for search, rendering)

* for PXT/microbit
