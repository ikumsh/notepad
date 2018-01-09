Note = function(text) {
  this.text = text
}

Note.prototype.shorten = function(n) {
  return(this.text.slice(0, n) + '...')
}
