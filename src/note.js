function Note(text) {
  this.text = text;
  if (text === '') {
    alert('You haven\'t entered anything!')
  };
}

Note.prototype.shorten = function(n) {
  n = (n || 20)
  var newtext = this.text.slice(0, n)
  if(this.text.length > n) { newtext += '...' }
  return(newtext)
}

Note.prototype.jsfakey = function() {
  throw new Error()
}

Note.prototype.nojsfakey = function() {
  return (2 + 2) - 1
}
