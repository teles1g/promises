## Promises

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

![promises](https://github.com/teles1g/promises/blob/main/promises.png)

In this example, we will use Promise.all. He waits for the other promises to complete and if there is an error, the operation is aborted.

#### Start Server

```
-> ~/cd server

-> ~/yarn

-> ~/yarn dev
```

#### Util

Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
