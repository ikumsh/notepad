document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();

  document.getElementById('Submit').addEventListener('click', function() {
    addNote(document.getElementById('note').value);
    console.log(notepad.notes);
  });

  function addNote(note) {
    if (note !== '') {
      notepad.addNote(note);
    };
  }
});
