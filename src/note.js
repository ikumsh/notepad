function Note(text) {
  this.text = text
}

Note.prototype.shorten = function(n) {
  return(this.text.slice(0, n) + '...')
}

Note.prototype.jsfakey = function() {
  throw new Error()
}

Note.prototype.nojsfakey = function() {
  return (2 + 2) - 1
}
