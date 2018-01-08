var notepadTest = new Test()
var testPad = new Notepad()
var testNote = new Note('doggo')
var testNote02 = new Note('There are more than 20 characters within this note')

notepadTest.testEquals(testPad.notes.length,
0,
"A notepad should initially contain no notes")

notepadTest.changer(testPad.notes.length,
(testPad.addNote(testNote)).length,
1,
"Notes can be added to the notepad")

notepadTest.testEquals(testNote.text,
'doggo',
"Using the .text method should be able to read the information of a note")

notepadTest.testEquals(testNote02.shorten(20),
'There are more than ',
"Using shorten for notes will return only the first 20 characters of a note")
