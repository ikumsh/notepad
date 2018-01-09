var testPad = new Notepad()
<<<<<<< HEAD
var testNote = new Note('test')
=======
var testNote = new Note('doggo')
var testNote02 = new Note('There are more than 20 characters within this note')
>>>>>>> 6057fe667d0297b3696c1b3e465bd0e87d8946c3

test01 = function() {
testEquals(testPad.notes.length,
0,
"A notepad should initially contain no notes");
}

test02 = function() {
changedBy(testPad.notes.length,
(testPad.addNote(testNote)).length,
1,
"Notes can be added to the notepad")
}

test03 = function() {
testEquals(testNote.text,
'doggo',
"Using the .text method should be able to read the information of a note")
}

test04 = function() {
testEquals(testNote02.shorten(20),
'There are more than ...',
"Using shorten for notes will return only the first 20 characters of a note")
}

var testList = [test01, test02, test03, test04]
var resultList = []
voodoo(testList, 0)
