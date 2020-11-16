// shows a checkmark if the reciever recieved a message
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Message = ""
        basic.showLeds(`
            . . . . #
            . . . # #
            # . # # .
            # # # . .
            . # . . .
            `)
    }
})
// adds"." and shows a dot
input.onButtonPressed(Button.A, function () {
    Message = "" + Message + "."
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    // sends morse to reciever
    radio.sendString(Message)
})
// chracter is set to "'
// switch function that determines what symbol is what letter and if its not a valid response then it says invalid
radio.onReceivedString(function (receivedString) {
    character = ""
    switch(receivedString) { // switch command with every possible binary to morse calculations
			case ".-":
				character = "A"
				break;
			case "-...":
				character = "B"
				break;
			case "-.-.":
				character = "C"
				break;
			case "-..":
				character = "D"
				break;
			case ".":
				character = "E"
				break;
			case "..-.":
				character = "F"
				break;
			case "--.":
				character = "G"
				break;
			case "....":
				character = "H"
				break;
			case "..":
				character = "I"
				break;
			case ".---":
				character = "J"
				break;
			case "-.-":
				character = "K"
				break;
			case ".-..":
				character = "L"
				break;
			case "--":
				character = "M"
				break;
			case "-.":
				character = "N"
				break;
			case "---":
				character = "O"
				break;
			case ".--.":
				character = "P"
				break;
			case "--.-":
				character = "Q"
				break;
			case ".-.":
				character = "R"
				break;
			case "...":
				character = "S"
				break;
			case "-":
				character = "T"
				break;
			case "..-":
				character = "U"
				break;
			case "...-":
				character = "V"
				break;
			case ".--":
				character = "W"
				break;
			case "-..-":
				character = "X"
				break;
			case "-.--":
				character = "Y"
				break;
			case "--..":
				character = "Z"
				break;
			case ".----":
				character = "1"
				break;
			case "..---":
				character = "2"
				break;
			case "...--":
				character = "3"
				break;
			case "....-":
				character = "4"
				break;
			case ".....":
				character = "5"
				break;
			case "-....":
				character = "6"
				break;
			case "--...":
				character = "7"
				break;
			case "---..":
				character = "8"
				break;
			case "----.":
				character = "9"
				break;
			case "-----":
				character = "0"
				break;
			default:
				character = "INVALID MORSE!"
		}
// shows the letter recieved and sends a number 1 to display a checkmark on the sender microbit
    basic.showString(character)
    radio.sendNumber(1)
})
// adds a "-" and shows a dash
input.onButtonPressed(Button.B, function () {
    Message = "" + Message + "-"
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        . . . . .
        `)
})
// deletes last entry and shows a symbol
input.onGesture(Gesture.Shake, function () {
    Message = Message.substr(0, Message.length - 1)
    basic.showLeds(`
        . . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . .
        `)
})
// atsrts and declares needed variables
let Message = ""
radio.setGroup(76)
let character = ""
Message = ""
