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

  Test.prototype.testChangedBy = function(funct, variable, expectedChange, desc) {
    original = variable
    funct()
    updated = variable
    actualChange = updated - original
    this.assertChangedBy(actualChange, expectedChange)
  }

  Test.prototype.testTrue = function(val) {
    this.assertTrue(val)
  }

  Test.prototype.testFalse = function(val) {
    this.assertFalse(val)
  }

  Test.prototype.testEquals = function(val1, val2, desc) {
    this.assertEqual(val1, val2, desc)
  }
}
