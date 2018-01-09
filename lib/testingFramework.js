var failedTests = 0
var passedTests = 0
var resultList = []

voodoo = function(testList) {
  try {
    for (var i = 0; i < testList.length; i++) {
      (testList[i])()
    }
  } catch(err) {
    result((err.name.toString() + ': ' + err.message.toString()), resultList)
    failedTests++;
    voodoo(testList, (i+1));
  }
}

result = function(result, resultList) {
  resultList.push(result)
}

testPrF = function(string) {
  if(string.slice(0, 6) === 'Test P') {
    return('green')
  } else {
    return('firebrick')
  }
}

function _assert(test, desc, failMsg) {
  test ? passedTests++ : failedTests++;
  test ? result(('Test Passed: ' + desc), resultList) : result(('Test Failed: ' + desc + "<br> &nbsp;&nbsp;&nbsp;" + failMsg), resultList);
}

function _assertEquals(a, b, desc) {
  failMsg = "Expected " + a + " to equal " + b
  _assert(a == b, desc, failMsg)
}

function _assertExact(a, b, desc) {
  failMsg = "Expected " + a + " to equal exactly " + b
  _assert(a === b, desc, failMsg)
}

function _assertTrue(x, desc) {
  failMsg = "Expected: true, instead of: " + x
  _assert(x == 1, desc, failMsg)
}

function _assertFalse(x, desc) {
  failMsg = "Expected: false, instead of: " + x
  _assert(x == 0, desc, failMsg)
}

// function assertError(desc, a, args) {
//   failMsg = "Expected function to throw error"
//   assert((typeof a(args) == Error), desc, failMsg)
// }

function testTrue(desc, val) {
  _assertTrue(val, desc)
}

function testFalse(desc, val) {
  _assertFalse(val, desc)
}

function testEquals(desc, val1, val2) {
  _assertEquals(val1, val2, desc)
}

function testExactEquals(desc, val1, val2) {
  _assertExact(val1, val2, desc)
}

// function testError(desc, funct, args) {
//   assertError(desc, funct, args)
// }
