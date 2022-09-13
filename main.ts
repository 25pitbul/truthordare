input.onButtonPressed(Button.A, function () {
    let dare = 0
    let truth = 0
    basic.showString("Truth or Dare")
    if (truth < 1) {
        basic.showString("Whats your favorite color?")
    } else if (dare > 1) {
        basic.showString("touch the roof")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    no = randint(0, 3)
    if (true) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (false) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (true) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (false) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # .
            . # . . .
            . . # . .
            `)
    }
})
let no = 0
basic.showString("Truth or Dare")
let randomNumber = randint(0, 1)
basic.forever(function () {
	
})
