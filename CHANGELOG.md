<h2>0.2 (18 June 2023)</h2>
<h3>Motivation</h3>
using index.js is easy but what happen if we change index extension from .js to .ts

<h3>Setup</h3>

add to package.json
```
    "build": "tsc src/index.ts"
```
run

```
npm run build
```
This is issue a lot of error about zod

<h3>Possible solution</h3>
use tsconfig.js as done in <a href='https://github.com/NathanKr/node-typescript-setup-tsconfig-ts-node'>node-typescript-setup-tsconfig-ts-node</a>. But i will not use this solution because i want to solve this using rollup (check ver 0.2 motivation)

<h2>0.1 (18 June 2023)</h2>
<h3>Motivation</h3>
Given a simple one file index.js project which import zod you have a problem

<h3>Initial setup</h3>
from the command line 
```
npm init -y
npm i zod
```

create index.js file
```
import z from 'zod';
console.log('index.js is starting ...');

const userSchema = z.object({name : z.string(),age : z.number()})

const res = userSchema.safeParse({name:"John Doe" , age:23});
console.log(res);
```

create a dev script
```
    "dev": "node --watch src/index.js"
```

run the script
```
npm run dev
```

You will get an error 'SyntaxError: Cannot use import statement outside a module'. You can fix the error by adding to package.json

```
  "type":"module",
```

