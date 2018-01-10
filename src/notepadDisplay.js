NotepadDisplay = function() {}

NotepadDisplay.prototype.displayNote = function(text, noteID) {
  if (text !== '') {
    document.getElementById('notelist').innerHTML += ('<a class="noteInList" href="#" id="'+noteID+'" onclick="displaySelection(id); return false;"><li>' + text + '</li></a>')
  };
}

function displaySelection(number) {
  document.getElementById("selection").value = self.notes[number - 1].text;
}
