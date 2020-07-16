sensors.touch3.pauseUntil(ButtonEvent.Pressed)
motors.largeCD.setBrake(true)
sensors.gyro1.calibrate()
sensors.color2.colorMode()

let turnRight = true

forever(function () {
    brick.showValue("Angle", sensors.gyro1.angle(), 1)
})

forever(function () {
    motors.largeCD.tank(20, 20)
    sensors.color2.pauseUntilColorDetected(ColorSensorColor.White)
    // Bot fährt vorwärts
    if (Math.abs(sensors.gyro1.angle()) < 10) {
        if (turnRight) {
            // Rechts drehen
            motors.largeCD.tank(-2, -20)
        }
        else {
            // Links drehen
            motors.largeCD.tank(-20, -2)
        }
        pauseUntil(function () {
            // Um ca. 90 Grad drehen
            return Math.abs(sensors.gyro1.angle()) >= 87
        })
        // Nächstes Mal in die andere Richtung drehen
        turnRight = !turnRight
    }
    // Bot fährt nach rechts
    else if (sensors.gyro1.angle() >= 80 &&
        sensors.gyro1.angle() <= 100) {
        // Nach links drehen, bis er wieder nach vorne ausgerichtet ist
        motors.largeCD.tank(-20, -2)
        pauseUntil(function () {
            return sensors.gyro1.angle() <= 3
        })
    }
    //Bot fährt nach links
    else if (sensors.gyro1.angle() <= -80 && sensors.gyro1.angle() >= -100) {
        // Nach rechts drehen, bis er wieder nach vorne ausgerichtet ist
        motors.largeCD.tank(-2, -20)
        pauseUntil(function () {
            return sensors.gyro1.angle() >= -3
        })
    }
})

// Ziel
sensors.color2.onColorDetected(ColorSensorColor.Black, function () {
    brick.showMood(moods.love)
    brick.exitProgram()
})
