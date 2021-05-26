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

    //% block="Led Modülü Pin %girisled Değer %ledDegeri Yap"
    //% ledDegeri.min=0 ledDegeri.max=1
    export function led(girisled: number, ledDegeri: number) {
            pins.digitalWritePin(girisled, ledDegeri)
    }
    //% block="Buzzer Modülü Pin %girisbuz Değer %BuzzerDegeri Yap"
    //% BuzzerDegeri.min=0 BuzzerDegeri.max=1
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
}