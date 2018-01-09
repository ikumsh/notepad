var testNote = new Note('There are more than 20 characters within this note')

var testList = [
  function() {
    testEquals("Using the .text method should be able to read the information of a note",
    testNote.text,
    'There are more than 20 characters within this note'
    )
  },

  function() {
    testEquals("Using shorten for notes will return only the first 20 characters of a note",
    testNote.shorten(20),
    'There are more than ...'
    )
  }
]

voodoo(testList)
