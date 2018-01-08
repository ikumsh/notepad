Note = function(text) {
  this.text = text
}

Note.prototype.shorten = function(n) {
  console.log(this.text.slice(0, n))
  return(this.text.slice(0, n))
}
