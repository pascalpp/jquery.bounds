QUnit.test('$.bounds exists', function(assert) {
	assert.ok(typeof $.fn.bounds === 'function', 'Passed');
	assert.ok(typeof $('div').bounds === 'function', 'Passed');
});

QUnit.test('gets bounds relative to document');

QUnit.test('gets bounds relative to viewport');
