NotepadDisplay = function() {}

NotepadDisplay.prototype.displayNoteList = function(text, noteID) {
  console.log(text, noteID)
  if (text !== '') {
    document.getElementById('note-list').innerHTML +=
    ('<a class="reversefade noteInList" href="#" id="'+noteID+
    '" onclick="displaySelection(id); return false;"><li>' + text + '</li></a>')
  };
}

function displaySelection(number) {
  display = document.getElementById("note-display")
  display.innerHTML = self.notes[number-1].text
  display.className = 'reversefade'
  display.addEventListener("animationend", function() {
    display.className = ''
  })
}
