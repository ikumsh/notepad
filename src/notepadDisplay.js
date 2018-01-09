NotepadDisplay = function() {}

// NotepadDisplay.prototype.displayNotelist = function(notelist) {
//   notelist.forEach(function(el, index) {
//     document.getElementById('notelist').innerHTML += ('<li>' + (index + 1).toString() + '. ' + el + '</li>')
//   })
// }

NotepadDisplay.prototype.displayNote = function(text) {
  document.getElementById('notelist').innerHTML += ('<li>' + text + '</li>')
}
