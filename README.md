# otdt
`otdt` offers an alternative syntax for [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

It's an abbreviation of _"on these, do this"_.

```javascript
// The normal way:
// "Evaluate a function that adds its two arguments on 1 and 2".
((a, b) => a + b)(1, 2)

// With otdt:
// "Evaluate, on 1 and 2, a function that adds its two arguments."
const e = require('otdt');
e(1, 2, (a, b) => a + b)
```
