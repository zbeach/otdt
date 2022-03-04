# otdt
`otdt` offers an alternative syntax for [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

It's an abbreviation of _"on these, do this"_.

```javascript
// The normal way:
((a, b) => a + b)(1, 2)

// With otdt:
const e = require('otdt');
e((a = 1, b = 2) => a + b);

// Alternatively:
const e = require('otdt');
e(1, 2, (a, b) => a + b)
```
