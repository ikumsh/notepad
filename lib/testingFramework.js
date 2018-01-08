function Test() {

  Test.prototype.assert = function(test, desc) {
    test ? console.log('Test Passed: ' + desc) : console.log('Test Failed: ' + desc)
  }

  Test.prototype.assertEquals = function(a, b, desc) {
    this.assert(a == b, desc)
  }

  Test.prototype.assertTrue = function(x, desc) {
    this.assert(x == 1, desc)
  }

  Test.prototype.assertFalse = function(x, desc) {
    this.assert(x == 0, desc)
  }

  Test.prototype.assertChangedBy = function(actualChange, expectedChange, desc) {
    this.assert(actualChange == expectedChange, desc)
  }

  changedBy(funct, variable, expectedChange) {
    original = variable
    updated = funct(variable)
    actualChange = updated - original
    this.assertChangedBy(actualChange, expectedChange)
  }

  toBeTrue(val) {
    this.assertTrue(val)
  }
}
