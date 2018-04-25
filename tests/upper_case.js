import test from 'tape'
import upper_case from '../funcs/upper_case.js'

test('upper_case', function (t) {
  t.equal(upper_case('foo bar'), 'FOO BAR')

  t.end()
})
