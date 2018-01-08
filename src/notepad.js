Notepad = function() {
  this.notes = new Array
}

Notepad.prototype.addNote = function(){
  console.log(this)
  this.notes.push("hello")
}
