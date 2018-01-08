Notepad = function() {
  this.notes = []
  self = this
}

Notepad.prototype.addNote = function(note) {
  this.notes.push(note)
  console.log(this.notes)
  return(this.notes)
}
