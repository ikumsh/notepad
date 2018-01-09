var failedtests = 0
var passedtests = 0

voodoo = function(testlist, startpoint) {
  try {
    // testlist.forEach(function(test) {
    //   test()
    // })
    for (var i = startpoint; i < testlist.length; i++) {
      (testlist[i])()
    }
  } catch(err) {
    result((err.name.toString() + ': ' + err.message.toString()), resultList)
    failedtests++;
    voodoo(testlist, (i+1));
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

function assert(test, desc, failMsg) {
  test ? passedtests++ : failedtests++;
  test ? result(('Test Passed: ' + desc), resultList) : result(('Test Failed: ' + desc + "<br> &nbsp;&nbsp;&nbsp;" + failMsg), resultList);
}

function assertEquals(a, b, desc) {
  failMsg = "Expected " + a + " to equal " + b
  assert(a == b, desc, failMsg)
}

function assertExact(a, b, desc) {
  failMsg = "Expected " + a + " to equal exactly " + b
  assert(a === b, desc, failMsg)
}

function assertTrue(x, desc) {
  failMsg = "Expected: true, instead of: " + x
  assert(x == 1, desc, failMsg)
}

function assertFalse(x, desc) {
  failMsg = "Expected: false, instead of: " + x
  assert(x == 0, desc, failMsg)
}

function assertChangedBy(a, b, c, desc) {
    failMsg = "Expected: " + a + " to change by " + c + " instead changed by " + (b-a);
    assert(((b - a) === c), desc, failMsg)
}

// Test.prototype.assertChangedBy = function(actualChange, expectedChange, desc) {
//   failMsg = "Expected change of: " + expectedChange + ", instead changed by: " + actualChange
//   this.assert(actualChange == expectedChange, desc, failMsg)
// }
//
// Test.prototype.testChangedBy = function(method, arg, variable, expectedChange, desc) {
//   original = variable
//   method(arg)
//   updated = variable
//   actualChange = updated - original
//   this.assertChangedBy(actualChange, expectedChange, desc)
// }

function testTrue(val, desc) {
  assertTrue(val, desc)
}

function testFalse(val, desc) {
  assertFalse(val, desc)
}

function testEquals(val1, val2, desc) {
  assertEquals(val1, val2, desc)
}

function testExactEquals(val1, val2, desc) {
  assertExact(val1, val2, desc)
}
