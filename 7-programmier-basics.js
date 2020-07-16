let mood = 'good'
let changeMood = false

while (mood == 'good' || mood == 'very good') {
    brick.showMood(moods.winking)
    if (changeMood) {
        mood = 'bad'
    } else {
        changeMood = !changeMood
        mood = 'very good'
    }
}
brick.showMood(moods.sad)
brick.exitProgram()
