/* global describe, it */
var assert = require('assert')
var snakeCaseFirst = require('./')

describe('snake case first', function () {
  it('should swap the case of strings', function () {
    assert.equal(snakeCaseFirst(null), '')
    assert.equal(snakeCaseFirst('test_test'), 'Test_Test')
    assert.equal(snakeCaseFirst('TEST_TEST'), 'Test_Test')
    assert.equal(snakeCaseFirst('PascalCase'), 'Pascal_Case')
    assert.equal(
      snakeCaseFirst('Iñtërnâtiônàlizætiøn'),
      'Iñtërnâtiônàlizætiøn'
    )
  })

  it('should support locales', function () {
    assert.equal(snakeCaseFirst('My String', 'tr'), 'My_String')
  })
})
