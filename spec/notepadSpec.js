var notepadTest = new Test()
var testPad = new Notepad()

notepadTest.assertEquals(testPad.notes.length, 0, "A notepad should initially contail no notes")
notepadTest.testChangedBy(testPad.addNote, testPad.notes.length, 1);
