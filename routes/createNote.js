document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById('Submit').addEventListener('click', function() {
    note = new Note(document.getElementById('note').value)
    notepad.addNote(note);
    notepaddisplay.displayNote(note.shorten());
    document.getElementById('noteform').reset();
  });

});
