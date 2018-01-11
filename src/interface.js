document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();
  var notepadDisplay = new NotepadDisplay();

  document.getElementById('create').addEventListener('click', function() {
    var newNote = document.getElementById('new-note')
    var note = new Note(newNote.value)

    if (note.text !== '') {
      var noteID = document.querySelectorAll('.noteInList').length + 1;
      notepadDisplay.displayNoteList(note.shorten(20), noteID);
      newNote.value = ''
      var noteItem = document.getElementById(noteID);
      noteItem.addEventListener('animationend', function() {
        noteItem.className = 'noteInList'
      });
      addNote(note);
    };
  });

  function addNote(note) {
    notepad.addNote(note);
  }
});
