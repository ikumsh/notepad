Notepad = function() {
  this.notes = []
}

Notepad.prototype.addNote = function(note) {
  this.notes.push(note)
  return(this.notes)
}
