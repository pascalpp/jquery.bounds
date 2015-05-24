var $testnode = $('.testnode');
var $window = $(window);

QUnit.test('$.bounds exists', function(assert) {
	assert.ok(typeof $.fn.bounds === 'function', 'Passed');
	assert.ok(typeof $testnode.bounds === 'function', 'Passed');
});

QUnit.test('gets bounds relative to unscrolled document', function(assert) {
	$window.scrollLeft(0);
	$window.scrollTop(0);
	var bounds = $testnode.bounds();
	assert.ok(bounds.top === 700, 'Passed');
	assert.ok(bounds.bottom === 800, 'Passed');
	assert.ok(bounds.left === 200, 'Passed');
	assert.ok(bounds.right === 400, 'Passed');
	assert.ok(bounds.width === 200, 'Passed');
	assert.ok(bounds.height === 100, 'Passed');
});

QUnit.test('gets bounds relative to unscrolled viewport', function(assert) {
	$window.scrollLeft(0);
	$window.scrollTop(0);
	var bounds = $testnode.bounds({ relativeTo: 'viewport' });
	assert.ok(bounds.top === 700, 'Passed');
	assert.ok(bounds.bottom === 800, 'Passed');
	assert.ok(bounds.left === 200, 'Passed');
	assert.ok(bounds.right === 400, 'Passed');
	assert.ok(bounds.width === 200, 'Passed');
	assert.ok(bounds.height === 100, 'Passed');
});

QUnit.test('gets bounds relative to scrolled document', function(assert) {
	$window.scrollLeft(100);
	$window.scrollTop(100);
	var bounds = $testnode.bounds();
	assert.ok(bounds.top === 700, 'Passed');
	assert.ok(bounds.bottom === 800, 'Passed');
	assert.ok(bounds.left === 200, 'Passed');
	assert.ok(bounds.right === 400, 'Passed');
	assert.ok(bounds.width === 200, 'Passed');
	assert.ok(bounds.height === 100, 'Passed');
});

QUnit.test('gets bounds relative to scrolled viewport', function(assert) {
	$window.scrollLeft(100);
	$window.scrollTop(100);
	var bounds = $testnode.bounds({ relativeTo: 'viewport' });
	assert.ok(bounds.top === 600, 'Passed');
	assert.ok(bounds.bottom === 700, 'Passed');
	assert.ok(bounds.left === 100, 'Passed');
	assert.ok(bounds.right === 300, 'Passed');
	assert.ok(bounds.width === 200, 'Passed');
	assert.ok(bounds.height === 100, 'Passed');
});
