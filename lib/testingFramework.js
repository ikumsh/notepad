function Test() {

  Test.prototype.assert = function(test, desc) {
    test ? console.log('Test Passed: ' + desc) : console.log('Test Failed: ' + desc)
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
