forever(function () {
    brick.showValue("Angle", Math.abs(sensors.gyro1.angle()), 1)
})
motors.largeCD.setBrake(true)
sensors.touch3.pauseUntil(ButtonEvent.Pressed)
sensors.gyro1.calibrate()
motors.largeCD.tank(-10, 10)
sensors.touch3.pauseUntil(ButtonEvent.Pressed)
brick.exitProgram()
