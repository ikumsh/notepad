document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();
  var notepaddisplay = new NotepadDisplay();

  document.getElementById('Submit').addEventListener('click', function() {
    var note = new Note(document.getElementById('note').value)
    addNote(note);
    console.log(notepad.notes)
    console.log(document.querySelectorAll('.noteInList').length);
    var noteID = document.querySelectorAll('.noteInList').length + 1;
    notepaddisplay.displayNote(note.shorten(), noteID);
    document.getElementById('noteform').reset();
  });

  function addNote(note) {
    notepad.addNote(note);
  }
});
