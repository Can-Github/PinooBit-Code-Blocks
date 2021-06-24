{
  // Our Shield PinooBit has external sensor modules.  
  // Check ultrasonic distance module
  pinooBit.distances(DigitalPin.P1, DigitalPin.P0)
  
  // Check led module
  pinooBit.led(DigitalPin.P1, 1)

  // Check buzzer module
  pinooBit.buzzer(DigitalPin.P2, 1)
  
  // Check servo motor module
  pinooBit.servo(DigitalPin.P4, 97)
  
  // Check motion detection(PIR) module
  basic.showNumber(pinooBit.pir(DigitalPin.P6))
  
  // Check potentiometer module
  basic.showNumber(pinooBit.pot(AnalogPin.P4))
  
  // Check joystick module
  basic.showNumber(pinooBit.joystickx(AnalogPin.P3))
  basic.pause(1000)
  basic.showNumber(pinooBit.joysticky(AnalogPin.P3))
  basic.pause(1000)
  
  // Check soil moisture module
  basic.showNumber(pinooBit.tvn(AnalogPin.P4))
  
  // Check water level module
  basic.showNumber(pinooBit.water(AnalogPin.P0))
  
  // Check ldr module
  basic.showNumber(pinooBit.isik(AnalogPin.P1))
  
}