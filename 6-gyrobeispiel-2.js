forever(function () {
    brick.showValue("Angle", Math.abs(sensors.gyro1.angle()), 1)
})
motors.largeCD.setBrake(true)
sensors.touch3.pauseUntil(ButtonEvent.Pressed)
sensors.gyro1.calibrate()
motors.largeCD.tank(-10, 10)
pauseUntil(() => Math.abs(sensors.gyro1.angle()) >= 180)
brick.exitProgram()
