//% color="#18D4D6"
namespace pinooBit {
let mesafe = 0
    //% block="Mesafe Sensörü Giriş Pini $giris Çıkış Pini $cikis"
    export function mesafes(giris: number, cikis: number) {
    pins.digitalWritePin(giris, 0)
    control.waitMicros(2)
    pins.digitalWritePin(giris, 1)
    control.waitMicros(10)
    pins.digitalWritePin(giris, 0)
    mesafe = pins.pulseIn(cikis, PulseValue.High) / 58
    basic.showNumber(mesafe)
    basic.pause(100)
    }
    //% color="#D6185D"
    //% block="Led Modülü Pin %girisled Değer %ledDegeri Yap"
    //% ledDegeri.min=0 ledDegeri.max=1
    export function led(girisled: number, ledDegeri: number) {
            pins.digitalWritePin(girisled, ledDegeri)
    }
    //% block="Buzzer Modülü Pin %girisbuz Değer %buzzerDegeri Yap"
    //% buzzerDegeri.min=0 buzzerDegeri.max=1
    export function buzzer(girisbuzzer: number, buzzerDegeri: number) {
            pins.digitalWritePin(girisbuzzer, buzzerDegeri)
    }
    //% block="Servo Motor Modülü Pin %girisservo Değer %servoDegeri Yap"
    //% servoDegeri.shadow="protractorPicker"
    export function servo(girisservo: number, servoDegeri: number) {
            pins.digitalWritePin(girisservo, servoDegeri)
    }
    //% block="Hareket Algılama(PIR) Modülü Pin %girispir Değerini Oku"
    export function pir(girispir: number) {
            return pins.digitalReadPin(girispir);
    }
    //% block="Potansiyometre Modülü Pin %girispot Değerini Oku"
    export function pot(girispot: number) {
            return pins.analogReadPin(girispot);
    }
    //% block="Joystick Modülü X Pin %girisjoyx Değerini Oku"
    export function joystickx(girisjoyx: number) {
            return pins.analogReadPin(girisjoyx);
    }
    //% block="Joystick Modülü Y Pin %girisjoyy Değerini Oku"
    export function joysticky(girisjoyy: number) {
            return pins.analogReadPin(girisjoyy);
    }
    //% block="Toprak Nem Modülü Pin %giristvn Değerini Oku"
    export function tvn(giristvn: number) {
            return pins.analogReadPin(giristvn);
    }
    //% block="Su Seviye Modülü Pin %girissu Değerini Oku"
    export function suseviye(girissu: number) {
            return pins.analogReadPin(girissu);
    }
    //% block="Işık Algılama Modülü Pin %girisalgi Değerini Oku"
    export function isik(girisalgi: number) {
            return pins.analogReadPin(girisalgi);
    }
}