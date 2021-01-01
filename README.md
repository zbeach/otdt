# evl
`evl` is an alternative syntax for [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

```javascript
// The normal way:
// "A function that adds its two arguments shall be evaluated on 1 and 2".
((a, b) => a + b)(1, 2)

// The evl way 😈:
// "Evaluate, on 1 and 2, a function that adds its two arguments."
const evl = require('evl');
evl(1, 2, (a, b) => a + b)
```