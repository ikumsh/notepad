var notepadTest = new Test()
var testPad = new Notepad()
var testNote = new Note()

notepadTest.testEquals(testPad.notes.length, 0, "A notepad should initially contain no notes")
notepadTest.testChangedBy(testPad.addNote, testNote, testPad.notes.length, 1, "Notes can be added to the notepad")
