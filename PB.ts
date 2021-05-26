namespace kodlar {

    //% block="Mesafe Sensörü Giriş Pini = $giris Çıkış Pini =$cikis"
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
}
