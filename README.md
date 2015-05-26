# jquery.bounds
A jQuery plugin helper for getBoundingClientRect

### Install

```
$ bower install jquery.bounds --save
```

### Usage

```js
$('div.mynode').bounds()
```

This returns an object with these properties:
```js
{
	top: 100,
	left: 100,
	bottom: 200,
	right: 200,
	width: 100,
	height: 100
}
```

Unlike the rect object returned by `getBoundingClientRect`, this object is modifiable, so you can add or substract from the properties as needed.

By default, the top, left, right, and bottom properties are relative to the top-left of the document, accounting for scroll offsets.

If you want values relative to the viewport, ignoring scroll offsets, pass the `relativeTo: 'viewport'` option.

```js
$('div.mynode').bounds({ relativeTo: 'viewport' });
```
