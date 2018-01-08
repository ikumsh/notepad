Notepad = function() {
  this.notes = []
  self = this
}

Notepad.prototype.addNote = function(note) {
  console.log(self)
  console.log(self.notes)
  self.notes.push(note)
}
