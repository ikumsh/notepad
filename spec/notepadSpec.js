var testPad = new Notepad()
var testNote = new Note('test')

var testList = [
  function() {
    testEquals("A notepad should initially contain no notes",
    testPad.notes.length,
    0
    );
  }
]

voodoo(testList)
