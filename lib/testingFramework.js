function Test() {}

Test.prototype.assert = function(test, desc, failMsg) {
  test ? console.log('Test Passed: ' + desc) : console.log('Test Failed: ' + desc + "\n" + failMsg)
}

Test.prototype.assertEquals = function(a, b, desc) {
  failMsg = "Expected " + a + " to equal " + b
  this.assert(a == b, desc)
}

Test.prototype.assertExact = function(a, b, desc) {
  failMsg = "Expected " + a + " to equal exactly " + b
  this.assert(a === b, desc)
}

Test.prototype.assertTrue = function(x, desc) {
  failMsg = "Expected: true, instead of: " + x
  this.assert(x == 1, desc)
}

Test.prototype.assertFalse = function(x, desc) {
  failMsg = "Expected: false, instead of: " + x
  this.assert(x == 0, desc)
}

Test.prototype.assertChangedBy = function(actualChange, expectedChange, desc) {
  failMsg = "Expected change of: " + expectedChange + ", instead changed by: " + actualChange
  this.assert(actualChange == expectedChange, desc, failMsg)
}

Test.prototype.testChangedBy = function(method, arg, variable, expectedChange, desc) {
  debugger;
  console.log(variable)
  original = variable
  console.log(original)
  method(arg)
  console.log(variable)
  updated = variable
  console.log(updated)
  actualChange = updated - original
  this.assertChangedBy(actualChange, expectedChange, desc)
}

Test.prototype.testTrue = function(val) {
  this.assertTrue(val)
}

Test.prototype.testFalse = function(val) {
  this.assertFalse(val)
}

Test.prototype.testEquals = function(val1, val2, desc) {
  this.assertEquals(val1, val2, desc)
}

Test.prototype.testExact = function(val1, val2, desc) {
  this.assertExact(val1, val2, desc)
}
