function Test() {

  Test.prototype.assert = function(test) {
    test ? console.log('Test Passed') : console.log('Test Failed.')
  }

  Test.prototype.assertEquals = function(a, b) {
    this.assert(a == b)
  }

  Test.prototype.assertTrue = function(x) {
    this.assert(x == 1)
  }

  Test.prototype.assertFalse = function(x) {
    this.assert(x == 0)
  }

  Test.prototype.assertChangedBy = function(actualChange, expectedChange) {
    this.assert(actualChange == expectedChange)
  }

  changedBy(function, variable, expectedChange) {
    original = variable
    updated = function(variable)
    actualChange = updated - original
  }

  toBeTrue(val) {
    this.assertTrue(val)
  }
}
