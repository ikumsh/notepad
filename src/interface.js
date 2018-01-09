document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();
  var notepaddisplay = new NotepadDisplay();

  document.getElementById('Submit').addEventListener('click', function() {
    note = new Note(document.getElementById('note').value)
    addNote(note);
    notepaddisplay.displayNote(note.shorten());
    document.getElementById('noteform').reset();
  });

  function addNote(note) {
    if (note !== '') {
      notepad.addNote(note);
    };
  }
});
