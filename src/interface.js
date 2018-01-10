document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();
  var notepaddisplay = new NotepadDisplay();

  document.getElementById('Submit').addEventListener('click', function() {
    var note = new Note(document.getElementById('note').value)
    if (note.text !== '') {
      addNote(note);
      var noteID = document.querySelectorAll('.noteInList').length + 1;
      notepaddisplay.displayNote(note.shorten(), noteID);
      document.getElementById('noteform').reset();
    };
  });

  function addNote(note) {
    if (note !== '') {
      notepad.addNote(note);
    };
  }
});
