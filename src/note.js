function Note(text) {
  this.text = text
  if (text === '') {
    throw new Error('Cannot submit an empty note!')
  }
}

Note.prototype.shorten = function(n) {
  n = (n || 20)
  var newtext = this.text.slice(0, n)
  if(this.text.length > 20) { newtext += '...' }
  return(newtext)
}
