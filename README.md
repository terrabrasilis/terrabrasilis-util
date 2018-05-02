## Instalations

```sh

npm install --save terrabrasilis-util

```

## Using the module

#### In Node.js

```sh

const { Stack, Queue } = require('terrabrasilis-util');

Stack.insert('value');
Stack.remove();
Stack.getLast();
Stack.getLength();

Queue.insert('value');
Queue.remove();
Queue.getFirst();
Queue.getLength();

```

## Release History

* 0.0.1 Initial release
