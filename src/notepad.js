function Notepad() {
  this.notes = []
  self = this
}

Notepad.prototype.addNote = function(note) {
  self.notes.push(note)
  return(self.notes)
}
